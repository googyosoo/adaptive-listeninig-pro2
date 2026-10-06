// Google AI Studio 공식 음성 라인업 및 글로벌 잉글리시(미국/영국/호주/캐나다/인도) 보이스 프로필
// 청각적 억양/음색/피치/발화 템포를 5개국 고유 언어학적 특성에 맞춰 완전히 극명하게 차별화
export const VOICE_REGIONAL_PROFILES = {
  Puck: { 
    geminiVoice: 'Puck', langCode: 'en-US', country: '미국', flag: '🇺🇸', 
    accentName: 'American (General American)', 
    keywords: ['guy', 'david', 'alex', 'mark', 'google us english', 'brian', 'christopher'], 
    pitch: 0.98, rate: 1.02, 
    sample: "Hey there! I am Puck, speaking in standard American English with clear vowels and natural pace." 
  },
  Charon: { 
    geminiVoice: 'Charon', langCode: 'en-US', country: '미국', flag: '🇺🇸', 
    accentName: 'American Deep Baritone', 
    keywords: ['mark', 'david', 'james', 'tom', 'george', 'paul', 'charles'], 
    pitch: 0.60, rate: 0.88, 
    sample: "Greetings. I am Charon, delivering a deep, steady, and authoritative American voice." 
  },
  Fenrir: { 
    geminiVoice: 'Fenrir', langCode: 'en-GB', country: '영국', flag: '🇬🇧', 
    accentName: 'British (Received Pronunciation)', 
    keywords: ['google uk english male', 'george', 'ryan', 'daniel', 'oliver', 'arthur', 'uk', 'gb', 'united kingdom'], 
    pitch: 0.88, rate: 0.95, 
    sample: "Good day, everyone. I am Fenrir, speaking with a distinct and polished British Received Pronunciation." 
  },
  Orus: { 
    geminiVoice: 'Orus', langCode: 'en-AU', country: '호주', flag: '🇦🇺', 
    accentName: 'Australian English (Relaxed Drawl)', 
    keywords: ['catherine', 'james', 'australia', 'au', 'lee', 'russell', 'hayley'], 
    pitch: 0.74, rate: 0.88, 
    sample: "G'day mate! I'm Orus from Sydney, Australia. Take it easy and enjoy your listening practice today!" 
  },
  Zephyr: { 
    geminiVoice: 'Puck', langCode: 'en-CA', country: '캐나다', flag: '🇨🇦', 
    accentName: 'Canadian English (Crisp & Clear)', 
    keywords: ['richard', 'liam', 'canada', 'ca', 'canadian'], 
    pitch: 0.88, rate: 1.06, 
    sample: "Hello everyone! I'm Zephyr from Vancouver, Canada, speaking with a crisp and clear North American accent." 
  },
  Ravi: { 
    geminiVoice: 'Charon', langCode: 'en-IN', country: '인도', flag: '🇮🇳', 
    accentName: 'Indian English (Fast Syllable-timed)', 
    keywords: ['ravi', 'prabhat', 'india', 'in', 'indian'], 
    pitch: 1.02, rate: 1.14, 
    sample: "Namaste! Dis is Ravi from New Delhi, India. Let me tell you, kindly listen to dis listening exam carefully, no problem at all, right?" 
  },

  Aoede: { 
    geminiVoice: 'Aoede', langCode: 'en-US', country: '미국', flag: '🇺🇸', 
    accentName: 'American (General American)', 
    keywords: ['jenny', 'aria', 'zira', 'samantha', 'google us', 'victoria'], 
    pitch: 1.15, rate: 1.02, 
    sample: "Hi everyone! I am Aoede, speaking with a bright and friendly American accent." 
  },
  Kore: { 
    geminiVoice: 'Kore', langCode: 'en-US', country: '미국', flag: '🇺🇸', 
    accentName: 'American Calm & Gentle', 
    keywords: ['michelle', 'steffan', 'susan', 'ava', 'zira', 'google us'], 
    pitch: 0.92, rate: 0.90, 
    sample: "Hello. I am Kore, offering a calm, thoughtful, and deeply reassuring American tone." 
  },
  Leda: { 
    geminiVoice: 'Leda', langCode: 'en-GB', country: '영국', flag: '🇬🇧', 
    accentName: 'British (Received Pronunciation)', 
    keywords: ['google uk english female', 'hazel', 'sonia', 'libby', 'emily', 'amy', 'uk', 'gb', 'united kingdom'], 
    pitch: 1.22, rate: 0.96, 
    sample: "Lovely to meet you. I am Leda, speaking proper and elegant Queen's English from London." 
  },
  Mimosa: { 
    geminiVoice: 'Aoede', langCode: 'en-AU', country: '호주', flag: '🇦🇺', 
    accentName: 'Australian English (Warm Aussie)', 
    keywords: ['catherine', 'karen', 'natasha', 'australia', 'au', 'hayley'], 
    pitch: 1.06, rate: 0.88, 
    sample: "G'day mate! I'm Mimosa from Melbourne, Australia. Glad to accompany your English listening journey!" 
  },
  Clara: { 
    geminiVoice: 'Aoede', langCode: 'en-CA', country: '캐나다', flag: '🇨🇦', 
    accentName: 'Canadian English (Upbeat & Crisp)', 
    keywords: ['clara', 'linda', 'canada', 'ca', 'canadian'], 
    pitch: 1.28, rate: 1.04, 
    sample: "Hello there! I am Clara from Toronto, Canada, bringing you crisp, upbeat, and natural Canadian English." 
  },
  Neerja: { 
    geminiVoice: 'Kore', langCode: 'en-IN', country: '인도', flag: '🇮🇳', 
    accentName: 'Indian English (Lively & Fluent)', 
    keywords: ['neerja', 'heera', 'veena', 'india', 'in', 'indian', 'priya'], 
    pitch: 1.34, rate: 1.12, 
    sample: "Namaste and greetings! Dis is Neerja from Bangalore, India. I am werry glad to practice wit you. It is quite simple, isn't it?" 
  }
};

export const GOOGLE_AI_VOICES = {
  male: [
    { id: 'random', name: '🎲 [랜덤] 5개국(미국/영국/호주/캐나다/인도) 글로벌 남성', desc: '문항 및 대화마다 5개국 남성 원어민 화자가 고유 악센트로 자동 순환됩니다.', pitch: 0.88, rate: 1.0 },
    { id: 'Puck', name: '🇺🇸 [미국] Puck (퍽)', desc: '생생하고 표준적인 미국 GA 청년 남성 (보통 속도, 밝은 톤)', pitch: 0.98, rate: 1.02 },
    { id: 'Charon', name: '🇺🇸 [미국] Charon (카론)', desc: '깊고 묵직한 미국 딥 바리톤 성인 남성 (저음, 안정적인 톤)', pitch: 0.60, rate: 0.88 },
    { id: 'Fenrir', name: '🇬🇧 [영국] Fenrir (펜리르)', desc: '정통 옥스퍼드/BBC 귀족 영국식(RP) 남성 (명확한 무성음 T 발음)', pitch: 0.88, rate: 0.95 },
    { id: 'Orus', name: '🇦🇺 [호주] Orus (오루스)', desc: '느긋하고 모음이 길게 늘어지는 나긋나긋한 호주(Aussie) 남성 톤', pitch: 0.74, rate: 0.88 },
    { id: 'Zephyr', name: '🇨🇦 [캐나다] Zephyr (제피르)', desc: '빠르고 명료하며 정돈된 북미 북부 캐나다식 남성 톤', pitch: 0.88, rate: 1.06 },
    { id: 'Ravi', name: '🇮🇳 [인도] Ravi (라비)', desc: '통통 튀는 음절 박자 리듬의 빠른 인도 글로벌 비즈니스 남성 톤', pitch: 1.02, rate: 1.14 }
  ],
  female: [
    { id: 'random', name: '🎲 [랜덤] 5개국(미국/영국/호주/캐나다/인도) 글로벌 여성', desc: '문항 및 대화마다 5개국 여성 원어민 화자가 고유 악센트로 자동 순환됩니다.', pitch: 1.15, rate: 1.0 },
    { id: 'Aoede', name: '🇺🇸 [미국] Aoede (아오이데)', desc: '맑고 친절하며 상냥한 미국 표준(GA) 여성 톤', pitch: 1.15, rate: 1.02 },
    { id: 'Kore', name: '🇺🇸 [미국] Kore (코레)', desc: '차분하고 지적인 미국 성인 여성 톤 (성숙하고 따뜻한 톤)', pitch: 0.92, rate: 0.90 },
    { id: 'Leda', name: '🇬🇧 [영국] Leda (레다)', desc: '품격 있고 우아한 런던 정통 영국식(RP) 아나운서 여성 톤', pitch: 1.22, rate: 0.96 },
    { id: 'Mimosa', name: '🇦🇺 [호주] Mimosa (미모사)', desc: '멜버른 일상 회화 특유의 여유롭고 다정한 호주 여성 톤', pitch: 1.06, rate: 0.88 },
    { id: 'Clara', name: '🇨🇦 [캐나다] Clara (클라라)', desc: '맑고 똑 부러지며 빠른 템포의 캐나다 토론토 여성 톤', pitch: 1.28, rate: 1.04 },
    { id: 'Neerja', name: '🇮🇳 [인도] Neerja (니르자)', desc: '유창하고 톡톡 튀는 경쾌한 인도 글로벌 비즈니스 여성 톤', pitch: 1.34, rate: 1.12 }
  ]
};
