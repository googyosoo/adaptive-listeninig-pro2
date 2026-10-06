import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function RadarChartWidget({ stats }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) chartInstance.current.destroy();

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['어휘력', '추론력', '세부파악', '영국발음', '미국발음', '집중력'],
          datasets: [
            {
              label: '영어 전투력',
              data: stats,
              backgroundColor: 'rgba(0, 196, 179, 0.3)',
              borderColor: '#00C4B3',
              pointBackgroundColor: '#FFD600',
              pointBorderColor: '#000',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#000',
              borderWidth: 3,
            },
          ],
        },
        options: {
          scales: {
            r: {
              angleLines: { color: 'rgba(0,0,0,0.1)' },
              grid: { color: 'rgba(0,0,0,0.1)' },
              pointLabels: {
                font: { family: 'Pretendard', size: 11, weight: 'bold' },
                color: '#000',
              },
              ticks: { display: false, min: 0, max: 100, stepSize: 20 },
            },
          },
          plugins: { legend: { display: false } },
          maintainAspectRatio: false,
        },
      });
    }
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [stats]);

  return <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>;
}
