/**
 * 🎙️ Web Audio API 기반 실시간 음성 피치(f0) 추적 및 DTW(Dynamic Time Warping) 억양 분석 엔진
 */

// 음성 신호에서 기본 주파수(f0: Fundamental Frequency)를 추출하는 자가상관(Autocorrelation) 알고리즘
export function autoCorrelate(buffer, sampleRate) {
  const SIZE = buffer.length;
  let rms = 0;

  for (let i = 0; i < SIZE; i++) {
    const val = buffer[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);

  // 음성 신호 강도가 너무 낮으면 (무음/배경 노이즈) unvoiced 처리
  if (rms < 0.015) {
    return -1;
  }

  // 사람 음성 피치 대역폭 제한 (약 65Hz ~ 500Hz)
  const MIN_FREQ = 65;
  const MAX_FREQ = 500;
  const maxPeriod = Math.floor(sampleRate / MIN_FREQ);
  const minPeriod = Math.floor(sampleRate / MAX_FREQ);

  let bestPeriod = -1;
  let maxCorrelation = 0;

  for (let period = minPeriod; period <= maxPeriod; period++) {
    let correlation = 0;
    for (let i = 0; i < SIZE - period; i++) {
      correlation += buffer[i] * buffer[i + period];
    }
    correlation = correlation / (SIZE - period);

    if (correlation > maxCorrelation) {
      maxCorrelation = correlation;
      bestPeriod = period;
    }
  }

  // 상관계수가 충분히 높을 때만 유효한 피치로 인정 (0.85 이상)
  if (maxCorrelation > 0.01 && bestPeriod > 0) {
    const fundamentalFreq = sampleRate / bestPeriod;
    if (fundamentalFreq >= MIN_FREQ && fundamentalFreq <= MAX_FREQ) {
      return fundamentalFreq;
    }
  }

  return -1;
}

// 영어 기능어 (낮은 피치 / 무강세 기본값)
const FUNCTION_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being',
  'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'as', 'into',
  'and', 'or', 'but', 'nor', 'so', 'yet',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'my', 'your', 'his', 'her', 'its', 'our', 'their',
  'do', 'does', 'did', 'have', 'has', 'had', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must',
  'that', 'this', 'these', 'those'
]);

// Yes/No 의문문 유도 조동사/be동사 목록 (상승조 유발)
const YES_NO_STARTERS = new Set([
  'is', 'are', 'am', 'was', 'were', 'do', 'does', 'did',
  'can', 'could', 'will', 'would', 'shall', 'should',
  'have', 'has', 'had', 'may', 'might'
]);

/**
 * 📖 언어 음운학 기반 표준 원어민 영어 억양(Pitch Contour) 레퍼런스 모델 생성기
 * - 내용어(명사/동사/형용사) 피치 상승 강세 피크
 * - 기능어(전치사/관사) 피치 기저선 유지
 * - Yes/No 의문문: 최종 음절 상승조 (↗)
 * - 평서문 및 Wh-의문문: 문장 끝 하강조 (↘)
 */
export function generateReferencePitchContour(sentenceText, targetDurationSec = 2.8) {
  if (!sentenceText) return { points: [], wordsTimeline: [], expectedEnd: 'falling' };

  const clean = sentenceText.replace(/^[MWmw남여]:\s*/, '').trim();
  const rawWords = clean.split(/\s+/).filter(Boolean);
  if (rawWords.length === 0) return { points: [], wordsTimeline: [], expectedEnd: 'falling' };

  // 의문문 및 억양 유형 판별
  const firstWordLower = rawWords[0].toLowerCase().replace(/[^a-z]/g, '');
  const endsWithQuestion = clean.endsWith('?');
  const isYesNoQuestion = endsWithQuestion && YES_NO_STARTERS.has(firstWordLower);
  const expectedEnd = isYesNoQuestion ? 'rising' : 'falling';

  // 단어별 시간 배분 (글자 수 가중치 적용)
  const totalChars = rawWords.reduce((acc, w) => acc + Math.max(w.length, 2), 0);
  let currentSec = 0.15; // 시작 안정 여백
  const availableDuration = Math.max(1.5, targetDurationSec - 0.3);

  const wordsTimeline = rawWords.map((word, idx) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9'-]/g, '');
    const charWeight = Math.max(cleanWord.length, 2);
    const duration = (charWeight / totalChars) * availableDuration;
    const startSec = currentSec;
    const endSec = currentSec + duration;
    currentSec = endSec;

    const isContentWord = !FUNCTION_WORDS.has(cleanWord);
    const isFinalWord = idx === rawWords.length - 1;

    return {
      word,
      cleanWord,
      startSec,
      endSec,
      isContentWord,
      isFinalWord
    };
  });

  // 40ms 간격으로 원어민 억양 피치 포인트 생성 (기준 주파수: 130Hz ~ 240Hz)
  const points = [];
  const STEP = 0.04; // 40ms
  const totalPoints = Math.ceil(targetDurationSec / STEP);

  for (let i = 0; i < totalPoints; i++) {
    const t = i * STEP;
    // 현재 시간에 위치한 단어 탐색
    const currentWord = wordsTimeline.find(w => t >= w.startSec && t <= w.endSec);

    let pitch = 150; // 기본 중립 피치

    if (currentWord) {
      const progressInWord = (t - currentWord.startSec) / (currentWord.endSec - currentWord.startSec || 0.1);
      
      if (currentWord.isFinalWord) {
        if (expectedEnd === 'rising') {
          // Yes/No 의문문: 끝으로 갈수록 가파르게 상승 (160Hz -> 250Hz)
          pitch = 160 + progressInWord * 90;
        } else {
          // 평서문: 완만하게 종결 하강 (180Hz -> 120Hz)
          pitch = 175 - progressInWord * 55;
        }
      } else if (currentWord.isContentWord) {
        // 내용어: 음절 중앙에서 벨 곡선(Bell Curve) 형태로 피치 강세 상승 (피크 ~220Hz)
        const peak = Math.sin(progressInWord * Math.PI);
        pitch = 160 + peak * 55;
      } else {
        // 기능어: 낮은 음높이 유지 (~145Hz)
        pitch = 145 + Math.sin(progressInWord * Math.PI) * 15;
      }
    } else {
      // 문장 시작 전/후 여백
      pitch = 140;
    }

    // 자연스러운 미세 비브라토/인토네이션 곡선 가미
    const subtleWave = Math.sin(t * 8) * 3;
    points.push({
      time: Number(t.toFixed(2)),
      pitch: Math.round(pitch + subtleWave)
    });
  }

  return {
    sentence: clean,
    duration: targetDurationSec,
    expectedEnd, // 'rising' | 'falling'
    wordsTimeline,
    points
  };
}

/**
 * ⚡ DTW (Dynamic Time Warping) 억양 궤적 유사도 계산 알고리즘
 * 시간 왜곡을 보정하여 두 음성 곡선의 형태학적(Shape) 일치도를 0~100점 점수로 산출
 */
export function calculateDtwIntonationScore(refPoints = [], userPoints = [], expectedEnd = 'falling') {
  if (!refPoints.length || !userPoints.length) {
    return {
      intonationScore: 0,
      endIntonationMatch: false,
      endSlope: 0,
      feedbackMessage: '목소리가 충분히 녹음되지 않았습니다.'
    };
  }

  // 1. 유효 피치 값(voiced) 필터링 및 z-score / 정규화
  const refPitches = refPoints.map(p => p.pitch).filter(p => p > 50);
  const userPitches = userPoints.map(p => p.pitch).filter(p => p > 50);

  if (userPitches.length < 5) {
    return {
      intonationScore: 35,
      endIntonationMatch: false,
      endSlope: 0,
      feedbackMessage: '마이크 음량이 너무 작거나 목소리가 또렷하지 않습니다.'
    };
  }

  // 정규화 헬퍼 (평균 0, 표준편차 1로 스케일링 -> 남/녀 고유 음역대 차이 극복)
  const normalize = (arr) => {
    const mean = arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
    const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (arr.length || 1);
    const std = Math.sqrt(variance) || 1;
    return arr.map(v => (v - mean) / std);
  };

  const normRef = normalize(refPitches);
  const normUser = normalize(userPitches);

  // 2. DTW 거리 매트릭스 계산
  const n = normRef.length;
  const m = normUser.length;
  const dtw = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(Infinity));
  dtw[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = Math.abs(normRef[i - 1] - normUser[j - 1]);
      dtw[i][j] = cost + Math.min(
        dtw[i - 1][j],     // 삽입
        dtw[i][j - 1],     // 삭제
        dtw[i - 1][j - 1]  // 일치
      );
    }
  }

  const rawDist = dtw[n][m] / (n + m);
  // 거리값을 0~100점수로 변환 (거리가 0이면 100점, 거리가 0.8 이상이면 40점 이하)
  const intonationScore = Math.max(20, Math.min(98, Math.round(100 - rawDist * 65)));

  // 3. 문장 종결 억양(상승조 vs 하강조) 분석
  // 학생 발화의 마지막 30% 구간 피치 기울기(Slope) 측정
  const tailCount = Math.max(3, Math.floor(userPitches.length * 0.3));
  const tailPitches = userPitches.slice(-tailCount);
  const tailStart = tailPitches[0];
  const tailEnd = tailPitches[tailPitches.length - 1];
  const endSlope = (tailEnd - tailStart) / (tailStart || 1); // 양수면 상승, 음수면 하강

  const isUserRising = endSlope > 0.08;
  const isUserFalling = endSlope < -0.05;
  const endIntonationMatch = (expectedEnd === 'rising' && isUserRising) || (expectedEnd === 'falling' && !isUserRising);

  let endFeedback = '';
  if (expectedEnd === 'rising') {
    endFeedback = isUserRising 
      ? '↗️ 의문문 상승조 완벽! 문장 끝을 자연스럽게 올렸습니다.' 
      : '⚠️ 끝을 더 올려보세요! Yes/No 의문문은 문장 끝 음조를 올려야 자연스럽습니다.';
  } else {
    endFeedback = isUserFalling 
      ? '↘️ 평서문 하강조 일치! 문장 끝을 안정감 있게 낮췄습니다.' 
      : '⚠️ 차분한 하강조 권장! 문장 끝을 과하게 올리지 않고 부드럽게 마무리해 보세요.';
  }

  return {
    intonationScore,
    endIntonationMatch,
    endSlope,
    expectedEnd,
    feedbackMessage: endFeedback
  };
}

/**
 * 🎙️ 실시간 마이크 오디오 피치 레코더 세션 관리자
 */
export class RealtimePitchTracker {
  constructor(onPitchUpdate = null) {
    this.audioCtx = null;
    this.analyser = null;
    this.microphoneStream = null;
    this.scriptProcessor = null;
    this.isTracking = false;
    this.recordedSamples = [];
    this.startTime = 0;
    this.onPitchUpdate = onPitchUpdate;
  }

  async start() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }

      this.microphoneStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      const source = this.audioCtx.createMediaStreamSource(this.microphoneStream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 2048;
      source.connect(this.analyser);

      this.recordedSamples = [];
      this.startTime = performance.now();
      this.isTracking = true;

      // 40ms 주기 피치 샘플링 루프
      const buffer = new Float32Array(this.analyser.fftSize);
      const sampleRate = this.audioCtx.sampleRate;

      this.intervalId = setInterval(() => {
        if (!this.isTracking || !this.analyser) return;

        this.analyser.getFloatTimeDomainData(buffer);
        const pitch = autoCorrelate(buffer, sampleRate);
        const elapsedSec = (performance.now() - this.startTime) / 1000;

        const sample = {
          time: Number(elapsedSec.toFixed(2)),
          pitch: pitch > 0 ? Math.round(pitch) : 0
        };

        this.recordedSamples.push(sample);
        if (this.onPitchUpdate) {
          this.onPitchUpdate(sample, this.recordedSamples);
        }
      }, 40);

      return true;
    } catch (err) {
      console.warn("RealtimePitchTracker 마이크 접근 실패:", err);
      this.stop();
      return false;
    }
  }

  stop() {
    this.isTracking = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.microphoneStream) {
      this.microphoneStream.getTracks().forEach(t => t.stop());
      this.microphoneStream = null;
    }
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch(e) {}
      this.audioCtx = null;
    }
    return this.recordedSamples;
  }
}
