# Adaptive Listening PRO 2.0 (초개인화 수능 영어 듣기 평가 플랫폼)

[![Deploy to GitHub Pages](https://github.com/googyosoo/adaptive-listeninig-pro2/actions/workflows/deploy.yml/badge.svg)](https://github.com/googyosoo/adaptive-listeninig-pro2/actions/workflows/deploy.yml)

수능 영어 듣기 실전 대비 및 학생 맞춤형 적응형 평가(Computer Adaptive Testing)를 지원하는 차세대 웹 플랫폼입니다.

---

## 🚀 아키텍처 및 기술 스택

- **Build System & Framework**: [Vite 8](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + 하이엔드 어학기 스큐어모피즘(Skeuomorphism) 디자인 토큰
- **Audio Engine**: Web Audio API (수능 오리지널 차임벨 4음 합성기) + Google Gemini AI Studio TTS (PCM 24kHz -> WAV Blob 실시간 변환 및 캐싱)
- **Multi-National Accent Engine**: 미국(GA/바리톤), 영국(RP), 호주(Aussie Drawl), 캐나다(Crisp), 인도(Th-stopping & Syllable-timed 리듬 치환) 5개국 원어민 음운 분리
- **AI Inference Engine**: Google Gemini Flash 최우선 멀티 모델 체인 (`gemini-flash-lite`, `gemini-3.5-flash-lite`, `gemini-3.7-flash`) + Upstage Solar Pro 보조 엔진
- **CI/CD**: GitHub Actions 기반 GitHub Pages 자동 빌드 및 무중단 배포

---

## 📁 프로젝트 구조

```
adaptive-listening-pro2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포 파이프라인
├── src/
│   ├── components/             # 독립 UI 컴포넌트 (RadarChartWidget 등)
│   ├── constants/              # 기출 프리셋(Exam Bank) 및 보이스 프로필 설정
│   │   ├── examPresets.js
│   │   └── voices.js
│   ├── services/               # Gemini & Upstage LLM API 통합 서비스
│   │   └── llmService.js
│   ├── utils/                  # 오디오 합성 및 음운 정제 유틸리티
│   │   ├── audioUtils.js
│   │   └── textTransforms.js
│   ├── App.jsx                 # 적응형 수능 듣기 메인 애플리케이션
│   ├── index.css               # 스큐어모피즘 하드웨어 섀시 및 Tailwind 스타일
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ 로컬 개발 및 실행

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행 (Hot Reload 지원)
npm run dev

# 프로덕션 빌드
npm run build
```
