// 보안 디코더 (Base64 안전 디코딩)
export const decodeSecureKey = (encoded) => {
  try {
    return atob(encoded);
  } catch (e) {
    return '';
  }
};

// Google Identity Services (GIS) JWT 토큰 디코더 (한글 깨짐 없는 Base64 URL 디코딩)
export const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("JWT parse error:", e);
    return null;
  }
};

// 대본 내 지문/상황묘사/효과음/괄호 설명 완벽 제거 및 순수 발화 대사 추출
export const cleanDialogueSpeech = (rawText) => {
  if (!rawText) return "";
  let text = rawText;

  // 1. 모든 종류의 괄호 안 내용 완전 제거
  text = text.replace(/[\(（\[【〔<\{][^\)）\]】〕>\}\n]*[\)）\]】〕>\}\n]/g, ' ');

  // 2. 마크다운 강조 기호 안 내용 또는 특수 기호 제거
  text = text.replace(/\*{1,3}[^*]+\*{1,3}/g, ' ');
  text = text.replace(/_{1,3}[^_]+_{1,3}/g, ' ');
  text = text.replace(/[\*\_\#\`]/g, ' ');

  // 3. 화자 태그 프리픽스 완전 제거 (M:, W:, Man:, Woman:, Boy:, Girl:, 남:, 여:, Speaker 1: 등)
  text = text.replace(/^[\s\*\_\[\<\(（]*(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*\d*|남|여|남자|여자)[\s\*\_\]\>\)）]*[:：]\s*/gi, '');
  text = text.replace(/\b(M|W|Man|Woman|Speaker\s*\d*)\s*[:：]\s*/gi, '');

  // 4. 지문 및 발화태도 묘사어구 필터링
  text = text.replace(/\b(smilingly|cheerfully|laughing|happily|excitedly|angrily|softly|calmly|surprised|sighs|chuckles|giggles|whispers|clears\s+throat|pauses?|hesitates?|groans?|yawns?|in\s+a\s+[a-z\s]+voice|with\s+a\s+[a-z\s]+smile)\b[\s,:\-]*/gi, ' ');

  // 5. 따옴표 및 여분의 공백 정리
  text = text.replace(/^["'“”‘’\s]+|["'“”‘’\s]+$/g, '');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
};

// 인도 글로벌 영어 음운 특성(Th-stopping, W/V 순치음, 음절 단위 리듬) 정밀 음향 합성기
export const adaptTextForIndianAccent = (rawText) => {
  if (!rawText) return "";
  let s = rawText;

  // 1. 기능어/대명사 th -> d 치환
  s = s.replace(/\bthe\b/gi, 'de');
  s = s.replace(/\bthis\b/gi, 'dis');
  s = s.replace(/\bthat\b/gi, 'dat');
  s = s.replace(/\bthese\b/gi, 'dese');
  s = s.replace(/\bthose\b/gi, 'dose');
  s = s.replace(/\bthere\b/gi, 'dere');
  s = s.replace(/\btheir\b/gi, 'deir');
  s = s.replace(/\btheirs\b/gi, 'deirs');
  s = s.replace(/\bthey\b/gi, 'dey');
  s = s.replace(/\bthem\b/gi, 'dem');
  s = s.replace(/\bthen\b/gi, 'den');
  s = s.replace(/\bwith\b/gi, 'wit');
  s = s.replace(/\bwithout\b/gi, 'witout');
  s = s.replace(/\bwithin\b/gi, 'witin');

  // 2. 내용어 th -> t 치환
  s = s.replace(/\bthink\b/gi, 'tink');
  s = s.replace(/\bthinks\b/gi, 'tinks');
  s = s.replace(/\bthinking\b/gi, 'tinking');
  s = s.replace(/\bthought\b/gi, 'tot');
  s = s.replace(/\bthank\b/gi, 'tank');
  s = s.replace(/\bthanks\b/gi, 'tanks');
  s = s.replace(/\bthree\b/gi, 'tree');
  s = s.replace(/\bthird\b/gi, 'tird');
  s = s.replace(/\bthirty\b/gi, 'tirty');
  s = s.replace(/\bthousand\b/gi, 'tousand');
  s = s.replace(/\bthing\b/gi, 'ting');
  s = s.replace(/\bthings\b/gi, 'tings');
  s = s.replace(/\bsomething\b/gi, 'someting');
  s = s.replace(/\beverything\b/gi, 'everyting');
  s = s.replace(/\bnothing\b/gi, 'noting');

  // 3. 인도 특유의 v/w 순치음 뉘앙스
  s = s.replace(/\bvery\b/gi, 'werry');
  s = s.replace(/\bwelcome\b/gi, 'velcome');
  s = s.replace(/\bwhat\b/gi, 'vhat');
  s = s.replace(/\bwhy\b/gi, 'vhy');
  s = s.replace(/\bwhen\b/gi, 'vhen');
  s = s.replace(/\bwhere\b/gi, 'vhere');

  return s;
};

// 대본 내 모든 변칙 화자 태그 정규화 및 남녀 1:1 교차 대화 턴(Turn) 완벽 분할 엔진
export const parseDialogueTurns = (rawTranscript, isMonologue = false) => {
  if (!rawTranscript || typeof rawTranscript !== 'string') return [];

  let text = rawTranscript.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // 1. 마크다운 볼드/이탤릭 화자 정규화 (**M:**, **W:**, *M:*, *W:*)
  text = text.replace(/[\*\_]{1,2}\s*(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자)\s*[:：]?\s*[\*\_]{1,2}[:：]?/gi, '\n$1: ');

  // 2. 대괄호/소괄호 화자 정규화 ([M], [W], (M), (W))
  text = text.replace(/(?:^|\s+|[\.\?\!\n])\[\s*(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자)\s*\][:：]?/gi, '\n$1: ');
  text = text.replace(/(?:^|\s+|[\.\?\!\n])\(\s*(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자)\s*\)[:：]?/gi, '\n$1: ');

  // 3. 한 줄 안에서 문장 끝이나 공백 뒤에 바로 이어지는 M:, W: 앞에 줄바꿈 강제 삽입
  text = text.replace(/(?:^|\s+|[\.\?\!\n])(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자)\s*[:：]/gi, '\n__TURN__$1: ');

  const rawLines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const turns = [];
  let currentSpeaker = null;

  for (let rawLine of rawLines) {
    let line = rawLine;
    let detectedSpeaker = null;

    // __TURN__ 마커 파싱
    const turnMatch = line.match(/^__TURN__(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자):\s*/i);
    if (turnMatch) {
      const s = turnMatch[1].toUpperCase();
      detectedSpeaker = (s.startsWith('W') || s.startsWith('여') || s.startsWith('G') || s.startsWith('F') || s === '2') ? 'W' : 'M';
      line = line.substring(turnMatch[0].length);
    } else {
      // 마커 없는 경우 일반 화자 프리픽스 검사
      const spkMatch = line.match(/^[\s\*\_\[\<\(（]*(M|W|Man|Woman|Boy|Girl|Male|Female|Speaker\s*[12]|남|여|남자|여자)[\s\*\_\]\>\)）]*[:：]\s*/i);
      if (spkMatch) {
        const s = spkMatch[1].toUpperCase();
        detectedSpeaker = (s.startsWith('W') || s.startsWith('여') || s.startsWith('G') || s.startsWith('F') || s === '2') ? 'W' : 'M';
        line = line.substring(spkMatch[0].length);
      }
    }

    // 순수 대사 정제 (화자 태그 및 지문 100% 제거)
    const cleanedSpeech = cleanDialogueSpeech(line);
    if (!cleanedSpeech || !/[a-zA-Z]/.test(cleanedSpeech) || cleanedSpeech.length < 2) continue;

    if (isMonologue) {
      const role = detectedSpeaker || 'M';
      turns.push({ speaker: role, text: cleanedSpeech });
      continue;
    }

    // 2인 대화인 경우
    if (detectedSpeaker) {
      currentSpeaker = detectedSpeaker;
    } else {
      currentSpeaker = (turns.length % 2 === 0) ? 'M' : 'W';
    }

    turns.push({
      speaker: currentSpeaker,
      text: cleanedSpeech
    });
  }

  // 폴백 보장
  if (turns.length === 0) {
    const fallbackText = cleanDialogueSpeech(rawTranscript);
    if (fallbackText) {
      turns.push({ speaker: 'M', text: fallbackText });
    }
  }

  return turns;
};
