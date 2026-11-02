import React, { useEffect, useRef } from 'react';
import { generateReferencePitchContour, calculateDtwIntonationScore } from '../utils/pitchTracker';

/**
 * 📈 듀얼 피치 억양 캔버스 (원어민 기준선 vs 학생 발화 궤적 오버레이)
 */
export function PitchContourCanvas({
  sentenceText,
  userPitchSamples = [],
  isRecording = false,
  liveSample = null
}) {
  const canvasRef = useRef(null);

  // 1. 원어민 기준 억양 레퍼런스 모델 생성
  const refModel = React.useMemo(() => {
    return generateReferencePitchContour(sentenceText, 3.0);
  }, [sentenceText]);

  // 2. DTW 억양 유사도 점수 산출
  const dtwAnalysis = React.useMemo(() => {
    if (!userPitchSamples || userPitchSamples.length === 0) {
      return null;
    }
    return calculateDtwIntonationScore(refModel.points, userPitchSamples, refModel.expectedEnd);
  }, [refModel, userPitchSamples]);

  // 3. Canvas 2D 듀얼 커브 렌더링
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retina / High-DPI 디스플레이 선명도 보정
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 180;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // [A] 배경 및 그리드 렌더링
    ctx.fillStyle = '#0f172a'; // slate-900 다크 오디오 덱 배경
    ctx.fillRect(0, 0, width, height);

    // 미세 그리드 라인 (주파수 80Hz ~ 320Hz 범위)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    const gridLines = [100, 150, 200, 250, 300];
    const minHz = 80;
    const maxHz = 320;
    const paddingBottom = 30; // 단어 라벨 영역
    const paddingTop = 20;
    const plotHeight = height - paddingBottom - paddingTop;

    const getY = (hz) => {
      const clamped = Math.max(minHz, Math.min(maxHz, hz));
      const ratio = (clamped - minHz) / (maxHz - minHz);
      return height - paddingBottom - (ratio * plotHeight);
    };

    const maxDuration = Math.max(
      refModel.duration || 3.0,
      userPitchSamples.length ? (userPitchSamples[userPitchSamples.length - 1].time || 3.0) : 3.0
    );

    const getX = (sec) => {
      const paddingX = 15;
      const plotWidth = width - paddingX * 2;
      return paddingX + (sec / maxDuration) * plotWidth;
    };

    gridLines.forEach(hz => {
      const y = getY(hz);
      ctx.beginPath();
      ctx.moveTo(15, y);
      ctx.lineTo(width - 15, y);
      ctx.stroke();

      ctx.fillStyle = 'rgba(148, 163, 184, 0.35)'; // slate-400
      ctx.font = '9px monospace';
      ctx.fillText(`${hz}Hz`, 2, y + 3);
    });

    // [B] 단어별 세로 가이드 점선 및 라벨 렌더링
    if (refModel.wordsTimeline && refModel.wordsTimeline.length > 0) {
      refModel.wordsTimeline.forEach((wt, idx) => {
        const xStart = getX(wt.startSec);
        const xEnd = getX(wt.endSec);

        // 단어 구간 수직 구분선
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
        ctx.beginPath();
        ctx.moveTo(xStart, paddingTop);
        ctx.lineTo(xStart, height - paddingBottom);
        ctx.stroke();

        // 단어 라벨 텍스트
        ctx.setLineDash([]);
        ctx.fillStyle = wt.isContentWord ? '#38bdf8' : '#94a3b8'; // 내용어는 스카이블루 강세
        ctx.font = wt.isContentWord ? 'bold 10px sans-serif' : '9px sans-serif';
        ctx.textAlign = 'center';
        const midX = (xStart + xEnd) / 2;
        ctx.fillText(wt.cleanWord, midX, height - 10);
      });
      ctx.textAlign = 'left';
    }

    // [C] 원어민 기준 억양 곡선 (하늘색 부드러운 스플라인)
    if (refModel.points && refModel.points.length > 1) {
      ctx.setLineDash([]);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#38bdf8'; // sky-400
      ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
      ctx.shadowBlur = 8;

      ctx.beginPath();
      refModel.points.forEach((p, idx) => {
        const x = getX(p.time);
        const y = getY(p.pitch);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // 그림자 초기화
      ctx.shadowBlur = 0;
    }

    // [D] 학생 발화 억양 곡선 (보라색/네온로즈 발광 곡선)
    const activeSamples = isRecording 
      ? [...userPitchSamples, ...(liveSample ? [liveSample] : [])]
      : userPitchSamples;

    if (activeSamples && activeSamples.length > 1) {
      ctx.setLineDash([]);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ec4899'; // pink-500
      ctx.shadowColor = 'rgba(236, 72, 153, 0.7)';
      ctx.shadowBlur = 10;

      ctx.beginPath();
      let started = false;

      activeSamples.forEach((s) => {
        if (s.pitch > minHz) {
          const x = getX(s.time);
          const y = getY(s.pitch);
          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        } else {
          // unvoiced/무음 구간은 선 끊기
          started = false;
        }
      });
      ctx.stroke();

      // 피치 포인트 찍기
      activeSamples.forEach((s) => {
        if (s.pitch > minHz) {
          const x = getX(s.time);
          const y = getY(s.pitch);
          ctx.fillStyle = '#f43f5e';
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.shadowBlur = 0;
    }

  }, [refModel, userPitchSamples, isRecording, liveSample]);

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-white space-y-2.5 shadow-md animate-fade-in font-sans">
      {/* 상단 헤더: 범례 및 실시간 상태 */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-black text-slate-200 flex items-center gap-1.5">
            <span>📈 억양 피치 궤적 (Pitch Contour)</span>
          </span>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-sky-400">
              <span className="w-2.5 h-0.5 bg-sky-400 inline-block rounded"></span>
              <span>원어민 표준</span>
            </span>
            <span className="flex items-center gap-1 text-pink-400">
              <span className="w-2.5 h-0.5 bg-pink-400 inline-block rounded"></span>
              <span>내 억양</span>
            </span>
          </div>
        </div>

        {/* 녹음 중 실시간 인디케이터 */}
        {isRecording ? (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold animate-pulse font-mono">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>실시간 피치 수집 중...</span>
          </div>
        ) : (
          dtwAnalysis && (
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold font-mono ${
                dtwAnalysis.intonationScore >= 80 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                  : dtwAnalysis.intonationScore >= 60 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              }`}>
                억양 일치도: {dtwAnalysis.intonationScore}점
              </span>
            </div>
          )
        )}
      </div>

      {/* 캔버스 화면 */}
      <div className="relative w-full h-[160px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-inner">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* 하단 억양 분석 & 종결조 판정 가이드 */}
      {dtwAnalysis ? (
        <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60 text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
              dtwAnalysis.endIntonationMatch 
                ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/30' 
                : 'bg-amber-900/60 text-amber-300 border border-amber-500/30'
            }`}>
              {dtwAnalysis.feedbackMessage.split('!')[0] + '!'}
            </span>
            <span className="text-slate-300 text-[11px]">
              {dtwAnalysis.feedbackMessage.split('!')[1] || ''}
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
            <span>목표 종결조: {refModel.expectedEnd === 'rising' ? '↗️ 상승조 (의문문)' : '↘️ 하강조 (평서문)'}</span>
          </div>
        </div>
      ) : (
        <div className="text-[11px] text-slate-400 text-center py-1 font-mono">
          💡 [🎙️ 따라 말하기]를 누르고 말하면 원어민 기준선 위에 내 억양 곡선이 실시간으로 그려집니다.
        </div>
      )}
    </div>
  );
}
