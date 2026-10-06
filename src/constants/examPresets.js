// 구글 시트 웹앱 URL (선생님 발급 URL)
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygQSIFi5ckCEdR5TUF9JKlXLCiC_2Ih5GkpK9CuaIg5xTYld2CbUWTzVxipkFh_ExU/exec";

// 사전 탑재형 고품질 기출 모의평가 세트 (Exam Bank)
export const EXAM_BANK_PRESETS = {
  round1: {
    title: "제 1회 실전 모의평가 (기본/고1 수준)",
    grade: 1,
    items: [
      {
        id: 101,
        type: "monologue",
        accent: "us",
        standardType: "1. 목적 파악",
        topicCategory: "학교 생활/도서관 안내",
        questionCategory: "담화 목적 파악",
        transcript: "M: Hello, students. This is your school librarian, Mr. Baker. As you know, our school library will be renovated during the summer vacation. To prepare for the construction, all borrowed books must be returned by this Friday, July 10th. During the renovation period, borrowing will not be available, but our digital e-book service will remain open. Thank you for your cooperation.",
        mcQuestion: "다음을 듣고, 남자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "도서관 리모델링에 따른 도서 반납 기한을 안내하려고",
          "여름방학 전자책(e-book) 이용 신청 방법을 설명하려고",
          "도서관 자원봉사 학생 모집 일정을 공지하려고",
          "신축 도서관 개관 기념 행사에 학생들을 초대하려고",
          "도서 연체 시 부과되는 연체료 규정을 설명하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "All borrowed books must be returned by this Friday, ______ 10th.",
        saBlankWord: "july",
        saHint: "명사 - 7월을 뜻하는 영어 단어",
        saAcceptedAnswers: ["july", "July"],
        translation: "M: 안녕하세요, 학생 여러분. 학교 사서 Baker 선생님입니다. 아시다시피 우리 학교 도서관은 여름방학 동안 리모델링 공사를 진행합니다. 공사 준비를 위해 대출한 모든 도서는 이번 주 금요일인 7월 10일까지 반납해야 합니다. 공사 기간 동안 도서 대출은 불가능하지만 전자책 서비스는 계속 이용하실 수 있습니다. 협조해 주셔서 감사합니다.",
        vocabulary: [
          { word: "renovate", meaning: "리모델링하다, 개조하다" },
          { word: "construction", meaning: "공사, 건설" },
          { word: "borrowed books", meaning: "대출 도서" }
        ]
      },
      {
        id: 102,
        type: "dialogue",
        accent: "uk",
        standardType: "5. 할 일 파악",
        topicCategory: "지역 축제/문화",
        questionCategory: "할 일 파악",
        transcript: "W: David, are you going to the local food truck festival this Saturday?\nM: Yes, Emily. I heard there are many amazing traditional foods from different countries.\nW: Great! I really want to try the Mexican tacos and French crêpes.\nM: Me too. Let's meet at the main entrance at 1 p.m.",
        mcQuestion: "대화를 듣고, 두 사람이 토요일에 할 일로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "푸드 트럭 창업 공모전 참가 준비하기",
          "세계 음식 박람회 자원봉사 신청하기",
          "지역 푸드 트럭 축제에 함께 가기",
          "멕시코 타코 요리법 인터넷으로 검색하기",
          "주말 축제 장소인 메인 광장 위치 확인하기"
        ],
        mcAnswerIndex: 2,
        saQuestion: "I really want to try the Mexican tacos and French ______.",
        saBlankWord: "crepes",
        saHint: "명사 - 얇은 밀가루 반죽에 과일 등을 얹어 먹는 프랑스식 디저트",
        saAcceptedAnswers: ["crepes", "crepe", "crêpes", "크레이프"],
        translation: "W: David, 이번 주 토요일에 열리는 지역 푸드 트럭 축제에 갈 예정이니?\nM: 응, Emily. 여러 나라의 전통 음식들이 많다고 들었어.\nW: 좋아! 나는 멕시코 타코랑 프랑스 크레페를 꼭 먹어보고 싶어.\nM: 나도 그래. 오후 1시에 정문에서 만나자.",
        vocabulary: [
          { word: "traditional", meaning: "전통적인" },
          { word: "entrance", meaning: "입구, 정문" },
          { word: "festival", meaning: "축제" }
        ]
      },
      {
        id: 103,
        type: "dialogue",
        accent: "us",
        standardType: "11. 짧은 대화 응답 (영어 선택지)",
        topicCategory: "일상 대화/취미",
        questionCategory: "적절한 응답 고르기",
        transcript: "W: Brian, have you finished packing your backpack for tomorrow's hiking trip?\nM: Almost done, Mom. But I can't find my stainless steel water bottle anywhere.\nW: Oh, I washed it this morning and put it on the kitchen table.",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Thanks, Mom. I'll go get it right away.",
          "I'm sorry, but I already bought a new bag.",
          "The hiking trail was much steeper than I expected.",
          "You should drink warm water when you have a cold.",
          "Let's check the weather forecast for tomorrow morning."
        ],
        mcAnswerIndex: 0,
        saQuestion: "I can't find my stainless steel ______ bottle anywhere.",
        saBlankWord: "water",
        saHint: "명사 - 물, 생수",
        saAcceptedAnswers: ["water", "Water"],
        translation: "W: Brian, 내일 하이킹 갈 배낭은 다 쌌니?\nM: 거의 다 쌌어요, 엄마. 그런데 스테인리스 물병이 어디 있는지 안 보여요.\nW: 아, 내가 오늘 아침에 씻어서 주방 식탁 위에 올려두었단다.",
        vocabulary: [
          { word: "stainless steel", meaning: "스테인리스강" },
          { word: "hiking trail", meaning: "등산로" },
          { word: "weather forecast", meaning: "일기 예보" }
        ]
      }
    ]
  },
  round2: {
    title: "제 2회 실전 모의평가 (심화/고2 수준)",
    grade: 2,
    items: [
      {
        id: 201,
        type: "dialogue",
        accent: "uk",
        standardType: "6. 이유 파악",
        topicCategory: "학교 동아리/진로",
        questionCategory: "이유 파악",
        transcript: "M: Clara, did you hear that our science club is visiting the National Robotics Center next Friday?\nW: Yes, Justin. Mr. Harrison told us yesterday.\nM: Are you going with us? It'll be a fantastic experience for our AI project.\nW: I really wanted to, but I have to attend my sister's university graduation ceremony that day.",
        mcQuestion: "대화를 듣고, 여자가 로봇 공학 센터 견학에 참여하지 못하는 이유를 고르시오.",
        mcOptions: [
          "과학 동아리 보고서 마감일을 맞추지 못해서",
          "언니의 대학교 졸업식에 참석해야 해서",
          "인공지능(AI) 프로젝트 일정이 갑자기 변경되어서",
          "감기 몸살로 병원 진료 예약이 잡혀 있어서",
          "방문 신청 정원이 이미 마감되어서"
        ],
        mcAnswerIndex: 1,
        saQuestion: "I have to attend my sister's university ______ ceremony.",
        saBlankWord: "graduation",
        saHint: "명사 - 졸업, 졸업식",
        saAcceptedAnswers: ["graduation", "Graduation"],
        translation: "M: Clara, 우리 과학 동아리가 다음 주 금요일에 국립 로봇 센터를 방문한다는 소식 들었니?\nW: 응, Justin. Harrison 선생님께서 어제 말씀해 주셨어.\nM: 너도 같이 갈 거지? 우리 AI 프로젝트에 정말 환상적인 경험이 될 거야.\nW: 나도 정말 가고 싶었지만, 그날 언니의 대학교 졸업식에 참석해야만 해.",
        vocabulary: [
          { word: "attend", meaning: "참석하다" },
          { word: "graduation ceremony", meaning: "졸업식" },
          { word: "fantastic", meaning: "환상적인, 멋진" }
        ]
      },
      {
        id: 202,
        type: "dialogue",
        accent: "us",
        standardType: "7. 숫자/금액 계산",
        topicCategory: "구매/주문",
        questionCategory: "지불할 금액 계산",
        transcript: "M: Welcome to Green Tree Plant Shop! How can I help you?\nW: Hi, I'd like to buy some small air-purifying plants for my classroom.\nM: These mini snake plants are 10 dollars each, and the hanging pots are 15 dollars each.\nW: I'll take two snake plants and one hanging pot, please.\nM: Sure! We're currently having a back-to-school promotion, so you get a 10 percent discount on the total amount.\nW: Wonderful! Here is my credit card.",
        mcQuestion: "대화를 듣고, 여자가 지불할 최종 금액을 고르시오.",
        mcOptions: [
          "$31.50 (31달러 50센트)",
          "$35.00 (35달러)",
          "$27.00 (27달러)",
          "$30.00 (30달러)",
          "$25.00 (25달러)"
        ],
        mcAnswerIndex: 0,
        saQuestion: "You get a 10 percent ______ on the total amount.",
        saBlankWord: "discount",
        saHint: "명사 - 할인",
        saAcceptedAnswers: ["discount", "Discount"],
        translation: "M: Green Tree 식물점에 오신 것을 환영합니다! 무엇을 도와드릴까요?\nW: 안녕하세요, 교실에 둘 소형 공기정화 식물을 좀 사려고 하는데요.\nM: 이 미니 스네이크 플랜트는 개당 10달러이고, 행잉 화분은 개당 15달러입니다.\nW: 스네이크 플랜트 2개와 행잉 화분 1개 주세요.\nM: 좋습니다! 현재 신학기 프로모션 진행 중이라 전체 금액에서 10% 할인을 받으실 수 있습니다.\nW: 좋네요! 여기 신용카드 있습니다.",
        vocabulary: [
          { word: "air-purifying", meaning: "공기 정화의" },
          { word: "discount", meaning: "할인" },
          { word: "total amount", meaning: "총액" }
        ]
      },
      {
        id: 203,
        type: "dialogue",
        accent: "uk",
        standardType: "13. 긴 대화 응답 (영어 선택지)",
        topicCategory: "교내 행사/협력",
        questionCategory: "적절한 응답 고르기",
        transcript: "W: Oliver, have you checked the submission deadline for the English speech contest?\nM: Yes, Susan. It's next Monday. Have you decided on your topic?\nW: I'm planning to talk about environmental protection, but I'm having trouble writing the introduction.\nM: Well, starting with a shocking statistic or a rhetorical question usually grabs the audience's attention.",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "That's a great tip! I'll try opening with an alarming statistic.",
          "I already submitted my speech manuscript yesterday morning.",
          "The judges decided to cancel the contest due to bad weather.",
          "You should speak louder when you are using a microphone.",
          "Environmental issues are too complicated for high school students."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Starting with a rhetorical question grabs the audience's ______.",
        saBlankWord: "attention",
        saHint: "명사 - 주의, 주목, 집중",
        saAcceptedAnswers: ["attention", "Attention"],
        translation: "W: Oliver, 영어 말하기 대회 원고 제출 마감일 확인했어?\nM: 응, Susan. 다음 주 월요일이야. 주제는 정했니?\nW: 환경 보호에 대해 이야기하려고 하는데, 도입부 쓰는 게 너무 어려워.\nM: 음, 충격적인 통계 자료나 수사학적 질문으로 시작하면 청중의 주의를 단번에 사로잡을 수 있어.",
        vocabulary: [
          { word: "submission deadline", meaning: "제출 마감일" },
          { word: "rhetorical question", meaning: "수사학적 질문 (반문)" },
          { word: "grab one's attention", meaning: "~의 관심을 사로잡다" }
        ]
      }
    ]
  },
  theme_indirect: {
    title: "🎯 [고난도 테마 특훈] 간접 말하기 (11~14번 응답형)",
    grade: 2,
    items: [
      {
        id: 301,
        type: "dialogue",
        accent: "us",
        standardType: "11. 짧은 대화 응답",
        topicCategory: "일상/가족",
        questionCategory: "남자의 응답",
        transcript: "W: Honey, the repair technician said our washing machine cannot be fixed anymore.\nM: Really? It's only five years old. How much would a new one cost?\nW: A new energy-saving model is about eight hundred dollars.",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "That sounds reasonable. Let's place an order online tonight.",
          "I already washed all the dirty laundry by hand this morning.",
          "The warranty period has expired three years ago.",
          "Make sure you turn off the water faucet before leaving.",
          "We should have hired another electrician to inspect the wire."
        ],
        mcAnswerIndex: 0,
        saQuestion: "A new energy-saving model is about eight hundred ______.",
        saBlankWord: "dollars",
        saHint: "명사 - 달러 (화폐 단위)",
        saAcceptedAnswers: ["dollars", "dollar", "Dollars"],
        translation: "W: 여보, 수리 기사님이 우리 세탁기는 더 이상 고칠 수 없대요.\nM: 정말이에요? 겨우 5년밖에 안 됐는데. 새 세탁기는 얼마 정도 하는데요?\nW: 에너지 절약형 새 모델이 대략 800달러 정도 해요.",
        vocabulary: [
          { word: "repair technician", meaning: "수리 기사" },
          { word: "energy-saving", meaning: "에너지 절약형의" },
          { word: "place an order", meaning: "주문하다" }
        ]
      },
      {
        id: 302,
        type: "dialogue",
        accent: "uk",
        standardType: "12. 짧은 대화 응답",
        topicCategory: "수업/발표",
        questionCategory: "여자의 응답",
        transcript: "M: Jessica, our group history presentation is scheduled for the first period tomorrow.\nW: I know, Kevin. I've finished making all the visual slides.\nM: Did you remember to bring the backup copy on a USB flash drive?",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Yes, it's safely stored right in my pencil case.",
          "The history teacher postponed the exam until next Friday.",
          "I forgot to save the file before shutting down my laptop.",
          "We should rehearse our presentation in the auditorium.",
          "Our group received the highest score in the midterm test."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Did you remember to bring the ______ copy on a USB drive?",
        saBlankWord: "backup",
        saHint: "명사 - 예비품, 백업 복사본",
        saAcceptedAnswers: ["backup", "Backup"],
        translation: "M: Jessica, 우리 조 역사 발표가 내일 1교시로 잡혀 있어.\nW: 알고 있어, Kevin. 시각 자료 슬라이드는 내가 전부 완성했어.\nM: USB에 백업 파일 담아오는 거 잊지 않았지?",
        vocabulary: [
          { word: "presentation", meaning: "발표" },
          { word: "backup copy", meaning: "백업 사본" },
          { word: "postpone", meaning: "연기하다, 미루다" }
        ]
      },
      {
        id: 303,
        type: "dialogue",
        accent: "us",
        standardType: "14. 긴 대화 응답",
        topicCategory: "진로/취업 면접",
        questionCategory: "여자의 응답",
        transcript: "W: Leo, you seem really nervous today. Is everything all right?\nM: To be honest, Professor Wilson, I have my college admissions interview this afternoon, and I'm terrified of freezing up.\nW: That's completely normal, Leo. Just remember to take a deep breath before speaking and maintain friendly eye contact with the interviewers.\nM: But what if they ask a difficult question that I don't know how to answer?",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Calmly admit that you're unsure, and explain your logical thoughts honestly.",
          "You must memorize the entire college history book before entering the room.",
          "Refusing to answer questions is the best way to avoid making mistakes.",
          "The interview was already rescheduled for next Monday morning.",
          "I regret not applying for the early admissions program last month."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Maintain friendly ______ contact with the interviewers.",
        saBlankWord: "eye",
        saHint: "명사 - 눈, 시선 (eye contact: 시선 맞춤)",
        saAcceptedAnswers: ["eye", "Eye"],
        translation: "W: Leo, 오늘 정말 긴장한 것 같네. 별일 없니?\nM: 솔직히 말씀드리면 Wilson 교수님, 오늘 오후에 대입 면접이 있는데 머리가 하얘질까 봐 너무 두려워요.\nW: 그건 아주 자연스러운 현상이란다, Leo. 말하기 전에 심호흡을 크게 하고 면접관들과 부드럽게 시선을 맞추는 것을 잊지 마렴.\nM: 하지만 만약 제가 답을 모르는 어려운 질문을 하시면 어떡하죠?",
        vocabulary: [
          { word: "admissions interview", meaning: "입학 면접" },
          { word: "freeze up", meaning: "얼어붙다, 긴장하여 말이 안 나오다" },
          { word: "eye contact", meaning: "시선 맞춤" }
        ]
      }
    ]
  },
  round3_sat: {
    title: "제 3회 실전 모의평가 (수능/평가원 고3 수준)",
    grade: 3,
    items: [
      {
        id: 401,
        type: "monologue",
        accent: "us",
        standardType: "1. 목적 파악",
        topicCategory: "사회/디지털 윤리",
        questionCategory: "담화 목적 파악",
        transcript: "W: Good morning, teachers and students. This is vice principal Dr. Morrison. In our hyper-connected society, excessive screen time has become a major cause of chronic mental fatigue and sleep deprivation among adolescents. To help our school community restore cognitive balance and improve interpersonal relationships, our school is hosting an annual 'Screen-Free Week' starting next Monday. During this campaign, students are encouraged to participate in outdoor sports, book clubs, and face-to-face discussions rather than browsing social media. Detailed activity schedules and reflection journals will be distributed by your homeroom teachers today. Thank you for taking this meaningful step toward a healthier lifestyle.",
        mcQuestion: "다음을 듣고, 여자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "교내 '스크린 프리 위크(Screen-Free Week)' 참여를 독려하려고",
          "청소년 수면 부족의 의학적 원인과 해결책을 설명하려고",
          "디지털 기기 과다 사용에 따른 교내 반입 금지 규정을 안내하려고",
          "방과 후 야외 스포츠 클럽 개설 일정을 홍보하려고",
          "학생 상담을 위한 담임교사 면담 일지를 수합하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Excessive screen time has become a major cause of mental ______.",
        saBlankWord: "fatigue",
        saHint: "명사 - 피로, 심신 피로감 (f로 시작하는 7글자)",
        saAcceptedAnswers: ["fatigue", "Fatigue"],
        translation: "W: 교직원 및 학생 여러분, 좋은 아침입니다. 교감 Dr. Morrison입니다. 초연결 사회에서 과도한 화면 사용은 청소년들의 만성적인 정신적 피로와 수면 부족의 주된 원인이 되었습니다. 우리 학교 구성원들이 인지적 균형을 회복하고 대인 관계를 개선하도록 돕기 위해, 다음 주 월요일부터 연례 '스크린 프리 위크' 행사를 진행합니다. 이 캠페인 기간 동안 학생들은 소셜 미디어를 검색하는 대신 야외 스포츠, 독서 클럽, 대면 토론에 참여할 것을 권장합니다. 상세한 활동 일정과 소감문 양식은 오늘 담임 선생님을 통해 배부될 것입니다. 더 건강한 삶의 방식을 향한 이 뜻깊은 발걸음에 동참해 주셔서 감사합니다.",
        vocabulary: [
          { word: "fatigue", meaning: "피로, 극도의 피로감" },
          { word: "deprivation", meaning: "박탈, 부족" },
          { word: "interpersonal", meaning: "대인 관계의" }
        ]
      },
      {
        id: 402,
        type: "dialogue",
        accent: "uk",
        standardType: "3. 대화자의 의견/주장 파악",
        topicCategory: "환경/자원 순환",
        questionCategory: "여자의 의견 파악",
        transcript: "M: Fiona, did you see the municipal announcement regarding the electronic waste collection center?\nW: Yes, George. But frankly, I believe establishing dedicated collection points alone cannot resolve the rapid accumulation of e-waste.\nM: Really? Isn't offering convenient drop-off stations the primary step to boost recycling?\nW: It helps, but without manufacturers implementing sustainable product designs and offering affordable repair services, consumers will continue to replace devices prematurely.\nM: Ah, so you mean structural changes by tech companies are essential to fundamentally solve the problem.\nW: Precisely. Extended manufacturer responsibility is the key.",
        mcQuestion: "대화를 듣고, 여자의 의견으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "전자기기 쓰레기 감축을 위해 제조사의 지속가능한 제품 설계와 수리 보장이 선행되어야 한다.",
          "지자체는 주민들의 재활용 참여율을 높이기 위해 폐가전 수거함을 대폭 증설해야 한다.",
          "소비자는 신제품 구매 시 에너지 효율 등급을 최우선으로 고려해야 한다.",
          "전자 폐기물의 불법 투기를 근절하기 위해 처벌 규정을 강화해야 한다.",
          "중고 전자기기 거래 플랫폼의 안전 결제 시스템 도입이 시급하다."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Without manufacturers implementing ______ product designs, waste will grow.",
        saBlankWord: "sustainable",
        saHint: "형용사 - 지속 가능한, 환경 친화적인",
        saAcceptedAnswers: ["sustainable", "Sustainable"],
        translation: "M: Fiona, 전자 폐기물 수거 센터에 관한 시청 공지 봤니?\nW: 응, George. 하지만 솔직히 말해서, 전용 수거 장소를 설치하는 것만으로는 급증하는 전자 폐기물 문제를 해결할 수 없다고 생각해.\nM: 정말? 편리한 배출 장소를 제공하는 것이 재활용을 촉진하는 첫걸음 아닌가?\nW: 도움이 되긴 하지만, 제조사들이 지속 가능한 제품 설계를 도입하고 합리적인 비용의 수리 서비스를 제공하지 않는다면 소비자들은 계속해서 기기를 너무 일찍 교체할 거야.\nM: 아, 그러니까 기술 기업들의 구조적 변화가 문제를 근본적으로 해결하는 데 필수적이라는 뜻이구나.\nW: 정확해. 제조사의 확대된 책임이 핵심이야.",
        vocabulary: [
          { word: "sustainable", meaning: "지속 가능한" },
          { word: "accumulation", meaning: "축적, 누적" },
          { word: "prematurely", meaning: "시기상조로, 너무 이르게" }
        ]
      },
      {
        id: 403,
        type: "dialogue",
        accent: "us",
        standardType: "13. 긴 대화 응답 (영어 선택지)",
        topicCategory: "심리/학업 발표",
        questionCategory: "남자의 응답",
        transcript: "W: Marcus, you've been practicing your presentation for tomorrow's international conference all morning. How are you feeling?\nM: To be completely candid, Professor Davis, my anxiety level is going through the roof. What if I make an embarrassing grammatical blunder or blank out completely on stage?\nW: Remember our psychological workshop, Marcus. Perceived anxiety is natural, but interpreting it as readiness rather than impending catastrophe fundamentally alters your nervous system's response.\nM: That makes sense intellectually, but when hundreds of eyes are on me, it's difficult to suppress the panic.\nW: Don't fight the adrenaline. Instead of trying to eliminate nervousness, channel that physiological arousal into enthusiastic engagement with your audience.",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "You're right. Reframing my nervousness as energetic passion will help me deliver a compelling talk.",
          "I should cancel my presentation registration right now to prevent panic attacks.",
          "The conference organizers already replaced the microphone with an acoustic one.",
          "Memorizing the entire script word for word is the only way to avoid making blunders.",
          "I regret enrolling in the international academic exchange program this semester."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Interpreting anxiety as readiness rather than impending ______ alters your response.",
        saBlankWord: "catastrophe",
        saHint: "명사 - 재앙, 참사, 파국 (c로 시작하는 11글자)",
        saAcceptedAnswers: ["catastrophe", "Catastrophe"],
        translation: "W: Marcus, 내일 있을 국제 학술회의 발표를 오전 내내 연습하고 있더군요. 기분이 어때요?\nM: 솔직히 말씀드리면, Davis 교수님, 불안감이 극에 달하고 있어요. 만약 무대 위에서 부끄러운 문법적 실수를 하거나 완전히 머릿속이 하얘지면 어쩌죠?\nW: 우리 심리학 워크숍을 기억해 봐요, Marcus. 불안을 느끼는 건 자연스럽지만, 그것을 임박한 재앙이 아니라 준비 상태로 해석하는 것만으로도 신경계의 반응이 근본적으로 달라진답니다.\nM: 이성적으로는 이해가 되지만, 수백 개의 시선이 저를 향할 때 공황감을 억누르는 것은 정말 어렵습니다.\nW: 아드레날린과 맞서 싸우려 하지 마세요. 긴장감을 없애려 애쓰는 대신, 그 생리적 각성 상태를 청중과의 열정적인 소통 에너지로 전환해 보세요.",
        vocabulary: [
          { word: "catastrophe", meaning: "재앙, 파국" },
          { word: "reframing", meaning: "관점 재설정, 리프레이밍" },
          { word: "physiological arousal", meaning: "생리적 각성" }
        ]
      }
    ]
  }
};

export const FALLBACK_EXAM = EXAM_BANK_PRESETS.round1.items;

// 보안 기본 디폴트 키 (암호화된 문자열)
export const DEFAULT_SECURE_UPSTAGE = "dXNfVFRQbnBZOWxKTk1wZkRqWmxwcnlYQkNPSEYzNkk=";
export const DEFAULT_SECURE_GEMINI = "QUl6YVN5RHpMRDV4S0ROVUtvTVJ4djMzUWppMldQaHEta0JPVVpz";
export const DEFAULT_SECURE_GOOGLE_CLIENT_ID = "MTIzOTgzNDQ3OTAwLXNpdXRtMjgyNzAwa2luNG9oZzVrbm43Z2tkZ2hlN2Q1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t";
