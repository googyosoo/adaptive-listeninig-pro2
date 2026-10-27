import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

/**
 * 🎯 7대 소리-철자 불일치 음운 규칙 7각형 레이더 차트 위젯
 * - liaison_linking: 자음-모음 연음
 * - flap_t: 플랩 현상 (Flapping /t/, /d/)
 * - silent_letter: 묵음 탈락
 * - schwa_reduction: 약모음화 (Schwa /ə/)
 * - glottal_stop: 성문 파열음 (Glottal Stop)
 * - palatalization: 구개음화
 * - consonant_cluster_reduction: 자음군 축약
 */
export const PHONETIC_RULE_KEYS = [
  { key: 'liaison_linking', label: '연음 (Liaison)', color: '#0ea5e9' },
  { key: 'flap_t', label: '플랩-T (Flapping)', color: '#10b981' },
  { key: 'silent_letter', label: '묵음 (Silent)', color: '#f59e0b' },
  { key: 'schwa_reduction', label: '약모음 (Schwa)', color: '#ec4899' },
  { key: 'glottal_stop', label: '성문음 (Glottal)', color: '#8b5cf6' },
  { key: 'palatalization', label: '구개음화 (Palatal)', color: '#6366f1' },
  { key: 'consonant_cluster_reduction', label: '자음군 (Cluster)', color: '#14b8a6' }
];

export function PhoneticRadarWidget({ statsMap = {} }) {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // 7개 라벨 및 데이터 배열 추출
  const labels = PHONETIC_RULE_KEYS.map(item => item.label);
  const dataValues = PHONETIC_RULE_KEYS.map(item => {
    const val = statsMap[item.key];
    return typeof val === 'number' ? Math.min(100, Math.max(10, Math.round(val))) : 70;
  });

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '음운 정답률 (%)',
            data: dataValues,
            backgroundColor: 'rgba(99, 102, 241, 0.25)', // 인디고 반투명
            borderColor: '#4f46e5', // 짙은 인디고
            borderWidth: 2.5,
            pointBackgroundColor: '#f43f5e', // 로즈 포인트
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(0, 0, 0, 0.12)' },
            grid: { color: 'rgba(0, 0, 0, 0.08)' },
            pointLabels: {
              font: { family: 'Pretendard, sans-serif', size: 10, weight: 'bold' },
              color: '#334155'
            },
            ticks: {
              display: false,
              min: 0,
              max: 100,
              stepSize: 20
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `정답률: ${context.raw}%`
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [statsMap]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>;
}
