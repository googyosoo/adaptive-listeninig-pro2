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

## API 키와 개인정보 안내

- 기본 Gemini 또는 Upstage API 키는 제공하지 않습니다. 상단 API 키 설정에서 본인 키를 입력하세요.
- 키가 없어도 내장 문제와 브라우저 음성으로 연습할 수 있습니다.
- 개인 키는 이 브라우저의 localStorage에 저장됩니다. AI 요청 시 키와 요청 내용은 해당 AI 제공자에게 전송됩니다. 공용 기기에서는 사용 후 키 삭제를 누르세요.
- 과거 버전의 공유 키를 저장한 적이 있다면 먼저 키 삭제를 누른 뒤 본인 키를 입력하세요.
- 소스에서 키를 제거해도 이미 공개된 키는 무효화되지 않습니다. 소유자가 기존 키를 폐기하고 새 키를 발급해야 합니다. Git 기록에도 이전 값이 남을 수 있습니다.
- 무료 사용과 한도는 연결 계정과 모델에 따라 다릅니다. 무료 등급인지 확인하고 결제 연결 없이 사용할 수 있는 기능만 선택하세요.
- 이 정적 앱에 제작자 공용 비밀키를 넣어 배포하지 마세요. 학교 공용 키 운영은 로그인과 사용량 제한이 있는 별도 서버가 필요합니다.

### 보안 회귀 검사

`npm run test:security`로 기본 키 재포함 여부와 키 없는 시작 상태를 검사합니다. 배포 전에 이 검사가 실행됩니다.
