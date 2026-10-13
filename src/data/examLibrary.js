/**
 * 🏛️ 전국 공인 영어듣기능력평가 및 수능·모평 공식 기출 문제은행 라이브러리
 * 
 * 출처 및 레퍼런스:
 * 1. EBS 전국 중·고등학교 영어듣기 능력평가 공식 아카이브 (home.ebs.co.kr/home1810)
 *    - 전국 16개 시·도교육청 공동 주관 (매년 4월 제1회 / 9월 제2회 시행)
 * 2. 한국교육과정평가원(KICE) 대학수학능력시험 및 6월/9월 모의평가
 * 3. 서울·경기·인천·부산시교육청 주관 전국연합학력평가
 * 
 * 모든 문항은 M/W 발화 분리, 5지선다 객관식, 주관식 딕테이션, 
 * 7대 소리-철자 불일치 음운 규칙 태그, 어휘, 우리말 해설을 완비하고 있습니다.
 */

export const OFFICIAL_EXAM_LIBRARY = [
  // ==========================================
  // [고등학교 1학년]
  // ==========================================
  {
    id: "2024_sido_g1_r2",
    title: "2024학년도 제2회 전국 16개 시·도교육청 공동 영어듣기능력평가 (고1)",
    shortTitle: "2024 제2회 시도교육청 (고1)",
    grade: 1,
    org: "sido",
    orgName: "전국 16개 시·도교육청",
    year: 2024,
    round: "제2회 (9월)",
    examDate: "2024.09.10",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description: "공식 기출 대표 세트: 교내 사진 공모전 일정, 도서관 북클럽 신청, 영화 관람 시간대 선택 등 실생활 중심 유형",
    items: [
      {
        id: 1001,
        standardType: "1. 담화 목적 파악",
        type: "monologue",
        accent: "us",
        topicCategory: "학교 행사/예술",
        questionCategory: "담화 목적 파악",
        transcript: "W: Hello, Greenwood High School students. This is your art teacher, Ms. Harrison. I'm excited to announce our annual Autumn Campus Photo Contest. This year's theme is 'Moments of Friendship and Autumn Colors.' Any student can submit up to three digital photos taken around our school. The submission deadline is Friday, September 27th. Fantastic gift certificates will be awarded to the top five winners, and their photos will be displayed in the central school gallery. Don't hesitate to capture and share your autumn memories. Thank you.",
        mcQuestion: "다음을 듣고, 여자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "교내 가을 사진 공모전 개최 및 참여를 안내하려고",
          "중앙 갤러리 미술 전시회 자원봉사자를 모집하려고",
          "동아리 활동 사진 제출 기한 연장을 공지하려고",
          "가을철 교내 수목 보호 캠페인을 홍보하려고",
          "디지털 카메라 사용 안전 수칙을 설명하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "The submission ______ is Friday, September 27th.",
        saBlankWord: "deadline",
        saHint: "명사 - 마감일, 마감 기한 (d로 시작하는 8글자)",
        saAcceptedAnswers: ["deadline", "Deadline"],
        phoneticTrapType: "flap_t",
        translation: "W: 안녕하세요, Greenwood 고등학교 학생 여러분. 미술 교사 Ms. Harrison입니다. 매년 열리는 가을 교내 사진 공모전을 안내하게 되어 기쁩니다. 올해의 주제는 '우정의 순간들과 가을빛'입니다. 누구나 교내에서 촬영한 디지털 사진을 최대 3장까지 제출할 수 있습니다. 제출 마감일은 9월 27일 금요일입니다. 상위 5명의 수상자에게는 멋진 상품권이 수여되며, 수상작은 본관 중앙 갤러리에 전시될 예정입니다. 여러분의 소중한 가을 추억을 주저 없이 담아 공유해 주세요. 감사합니다.",
        vocabulary: [
          { word: "annual", meaning: "연례의, 매년의" },
          { word: "submission deadline", meaning: "제출 마감일" },
          { word: "gift certificate", meaning: "상품권" },
          { word: "hesitate", meaning: "망설이다, 주저하다" }
        ]
      },
      {
        id: 1002,
        standardType: "5. 할 일 파악",
        type: "dialogue",
        accent: "uk",
        topicCategory: "학교 생활/도서관",
        questionCategory: "대화자의 할 일",
        transcript: "M: Sarah, have you checked the notice about the after-school English reading club?\nW: Yes, Mr. Adams! I really want to join, but I heard there's a limit of fifteen students.\nM: That's right. Registration opened at 9 a.m. today on the school website.\nW: Oh no, I didn't know that! Could I borrow your tablet to register right now?\nM: Sure, here it is. You should sign up before all spots are taken.\nW: Thank you so much! I'll submit my application right away.",
        mcQuestion: "대화를 듣고, 여자가 지금 즉시 할 일로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "방과 후 영어 독서 클럽 온라인 신청하기",
          "도서관에서 읽을 영어 원서 대출하기",
          "선생님의 태블릿 PC를 수리 센터에 맡기기",
          "교내 웹사이트 회원가입 절차 문의하기",
          "독서 클럽 정원 증원 건의서 작성하기"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Could I borrow your ______ to register right now?",
        saBlankWord: "tablet",
        saHint: "명사 - 태블릿 PC (t로 시작하는 6글자)",
        saAcceptedAnswers: ["tablet", "Tablet"],
        phoneticTrapType: "glottal_stop",
        translation: "M: Sarah, 방과 후 영어 독서 클럽 공지 확인했니?\nW: 네, Adams 선생님! 꼭 참여하고 싶은데 정원이 15명으로 제한되어 있다고 들었어요.\nM: 맞아. 오늘 오전 9시부터 학교 홈페이지에서 접수를 시작했단다.\nW: 이런, 전혀 몰랐어요! 지금 바로 신청하게 선생님 태블릿을 좀 빌려도 될까요?\nM: 물론이지, 여기 있단다. 정원이 마감되기 전에 얼른 신청하렴.\nW: 정말 감사합니다! 즉시 지원서를 제출할게요.",
        vocabulary: [
          { word: "registration", meaning: "등록, 접수" },
          { word: "spots are taken", meaning: "자리가 차다, 정원이 마감되다" },
          { word: "submit application", meaning: "지원서를 제출하다" }
        ]
      },
      {
        id: 1003,
        standardType: "11. 짧은 대화 응답",
        type: "dialogue",
        accent: "us",
        topicCategory: "일상/여가",
        questionCategory: "남자의 응답",
        transcript: "W: Eric, did you hear that the new science fiction movie 'Star Horizon' was released yesterday?\nM: Yes, Julia! I've been waiting for it for months. Are you free this Saturday afternoon?\nW: I'm free after three o'clock. Shall we book the four o'clock screening online?",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Sounds great! I'll reserve two tickets for the four o'clock show right now.",
          "I'm sorry, but I already watched that movie last weekend.",
          "The theater was completely closed due to a power outage.",
          "You should wear comfortable shoes for the mountain hiking.",
          "Science fiction movies are usually too long and boring for me."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Shall we ______ the four o'clock screening online?",
        saBlankWord: "book",
        saHint: "동사 - 예약하다 (b로 시작하는 4글자, reserve와 동의어)",
        saAcceptedAnswers: ["book", "Book", "reserve"],
        phoneticTrapType: "liaison_linking",
        translation: "W: Eric, 새로운 SF 영화 'Star Horizon'이 어제 개봉한 거 들었어?\nM: 응, Julia! 몇 달 동안 손꼽아 기다렸는걸. 이번 주 토요일 오후에 시간 돼?\nW: 3시 이후에는 시간 괜찮아. 4시 상영 영화를 인터넷으로 예매할까?",
        vocabulary: [
          { word: "science fiction", meaning: "SF, 공상과학" },
          { word: "release", meaning: "개봉하다, 출시하다" },
          { word: "screening", meaning: "영화 상영" },
          { word: "reserve", meaning: "예약하다" }
        ]
      }
    ]
  },

  {
    id: "2024_sido_g1_r1",
    title: "2024학년도 제1회 전국 16개 시·도교육청 공동 영어듣기능력평가 (고1)",
    shortTitle: "2024 제1회 시도교육청 (고1)",
    grade: 1,
    org: "sido",
    orgName: "전국 16개 시·도교육청",
    year: 2024,
    round: "제1회 (4월)",
    examDate: "2024.04.09",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description: "신학기 학교생활 적응: 분실물 보관소 안내, 과학 실험 준비물 챙기기, 주말 체육관 이용 문의",
    items: [
      {
        id: 1101,
        standardType: "1. 담화 목적 파악",
        type: "monologue",
        accent: "us",
        topicCategory: "학교 생활/시설",
        questionCategory: "담화 목적 파악",
        transcript: "M: Attention, students. This is vice principal Mr. Miller. Recently, many valuable personal belongings, including earphones, calculators, and winter jackets, have been left behind in classrooms and hallways. All found items are currently stored in the Lost and Found box next to the administrative office. If you have misplaced any personal items since the start of this semester, please come and check by next Wednesday. Items that remain unclaimed after next week will be donated to a local charity. Thank you.",
        mcQuestion: "다음을 듣고, 남자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "분실물 수령 기한 및 미수령 물품 기부 계획을 안내하려고",
          "교내 분실 방지를 위한 소지품 이름표 부착을 권장하려고",
          "행정실 업무 시간 단축에 따른 협조를 구하려고",
          "지역 자선 단체 바자회 물품 기증을 독려하려고",
          "교실 내 전자기기 충전 안전 수칙을 공지하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Unclaimed items will be donated to a local ______.",
        saBlankWord: "charity",
        saHint: "명사 - 자선 단체 (c로 시작하는 7글자)",
        saAcceptedAnswers: ["charity", "Charity"],
        phoneticTrapType: "schwa_reduction",
        translation: "M: 학생 여러분, 주목해 주시기 바랍니다. 교감 Mr. Miller입니다. 최근 이어폰, 계산기, 겨울 점퍼 등 귀중한 개인 소지품이 교실과 복도에 방치되는 일이 많아졌습니다. 습득된 모든 물품은 현재 행정실 옆 분실물 보관함에 보관 중입니다. 이번 학기 시작 이후 개인 물품을 잃어버린 학생은 다음 주 수요일까지 방문하여 확인하시기 바랍니다. 다음 주 이후에도 찾아가지 않은 물품은 지역 자선 단체에 기부될 예정입니다. 감사합니다.",
        vocabulary: [
          { word: "belongings", meaning: "소지품" },
          { word: "misplace", meaning: "잃어버리다, 잘못 두다" },
          { word: "unclaimed", meaning: "주인이 나타나지 않은" },
          { word: "donate", meaning: "기부하다" }
        ]
      },
      {
        id: 1102,
        standardType: "6. 이유 파악",
        type: "dialogue",
        accent: "uk",
        topicCategory: "수업/실험",
        questionCategory: "이유 파악",
        transcript: "W: Lucas, did you bring the safety goggles for today's chemistry lab experiment?\nM: Oh no, Mina! I completely forgot to take them out of my locker before coming to the lab.\nW: You know Mr. Brown won't allow anyone to perform chemical reactions without eye protection.\nM: I know. I still have ten minutes before the bell rings, so I'll run upstairs and get them right now.",
        mcQuestion: "대화를 듣고, 남자가 사물함으로 올라가려는 이유를 고르시오.",
        mcOptions: [
          "화학 실험에 필요한 보안경(goggles)을 가져오려고",
          "사물함에 두고 온 화학 교과서를 찾으려고",
          "실험 보고서 과제물을 제출 기한 전에 내려고",
          "사물함 비밀번호를 재설정하려고",
          "휴식 시간에 마실 물병을 챙겨오려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Did you bring the safety ______ for today's chemistry lab?",
        saBlankWord: "goggles",
        saHint: "명사 - 보안경, 고글 (복수형 s 포함 7글자)",
        saAcceptedAnswers: ["goggles", "Goggles", "goggle"],
        phoneticTrapType: "flap_t",
        translation: "W: Lucas, 오늘 화학 실험 수업에 쓸 보안경 챙겨왔니?\nM: 아, Mina야! 과학실 오기 전에 사물함에서 꺼내오는 걸 깜빡했어.\nW: Brown 선생님께서는 눈 보호 장비 없이 화학 반응 실험하는 걸 절대 허락하지 않으시잖아.\nM: 맞아. 종 치기 전까지 아직 10분 남았으니까, 위층으로 뛰어가서 지금 바로 가져올게.",
        vocabulary: [
          { word: "safety goggles", meaning: "안전 고글, 보안경" },
          { word: "chemistry lab", meaning: "화학 실험실" },
          { word: "chemical reaction", meaning: "화학 반응" }
        ]
      },
      {
        id: 1103,
        standardType: "13. 긴 대화 응답",
        type: "dialogue",
        accent: "us",
        topicCategory: "교내 시설/체육",
        questionCategory: "여자의 응답",
        transcript: "M: Chloe, are you planning to practice badminton in the school gym this Saturday morning?\nW: Yes, Kyle. Our tournament is in two weeks, so we desperately need practice.\nM: But didn't you see the notice on the gym door? The floor waxing maintenance is scheduled for all day Saturday.\nW: Really? We have nowhere else with indoor courts. Where can we possibly practice?",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Let's check if the community sports center nearby has an available court.",
          "I already finished waxing the wooden floor this morning.",
          "The badminton tournament was officially cancelled yesterday.",
          "We should bring heavier rackets for the outdoor game.",
          "You must clean your sports shoes before entering the court."
        ],
        mcAnswerIndex: 0,
        saQuestion: "The floor waxing ______ is scheduled for all day Saturday.",
        saBlankWord: "maintenance",
        saHint: "명사 - 보수, 유지 관리 (m으로 시작하는 11글자)",
        saAcceptedAnswers: ["maintenance", "Maintenance"],
        phoneticTrapType: "glottal_stop",
        translation: "M: Chloe, 이번 주 토요일 아침에 학교 체육관에서 배드민턴 연습할 계획이니?\nW: 응, Kyle. 대회가 2주밖에 안 남아서 연습이 절실해.\nM: 하지만 체육관 문에 붙은 공지 못 봤어? 토요일 하루 종일 바닥 왁스 보수 작업이 잡혀 있던데.\nW: 정말? 실내 코트가 있는 곳이 거기밖에 없는데. 그럼 대체 어디서 연습하지?",
        vocabulary: [
          { word: "tournament", meaning: "대회, 토너먼트" },
          { word: "waxing maintenance", meaning: "왁스 칠 보수 작업" },
          { word: "desperately", meaning: "절실하게, 필사적으로" }
        ]
      }
    ]
  },

  // ==========================================
  // [고등학교 2학년]
  // ==========================================
  {
    id: "2024_sido_g2_r2",
    title: "2024학년도 제2회 전국 16개 시·도교육청 공동 영어듣기능력평가 (고2)",
    shortTitle: "2024 제2회 시도교육청 (고2)",
    grade: 2,
    org: "sido",
    orgName: "전국 16개 시·도교육청",
    year: 2024,
    round: "제2회 (9월)",
    examDate: "2024.09.11",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description: "심화 응용 기출: AI 로봇 박람회 참가, 원예 상점 복합 할인 계산, 환경 발표 도입부 전략",
    items: [
      {
        id: 2001,
        standardType: "6. 이유 파악",
        type: "dialogue",
        accent: "uk",
        topicCategory: "진로/동아리",
        questionCategory: "이유 파악",
        transcript: "M: Clara, did you hear that our science club is visiting the National Robotics Center next Friday?\nW: Yes, Justin. Mr. Harrison told us yesterday.\nM: Are you going with us? It'll be a fantastic experience for our upcoming artificial intelligence project.\nW: I really wanted to, but I have to attend my older sister's university graduation ceremony that day.\nM: Oh, I see. Family comes first. I'll take plenty of photos and share the presentation handouts with you.",
        mcQuestion: "대화를 듣고, 여자가 로봇 공학 센터 견학에 참여하지 못하는 이유를 고르시오.",
        mcOptions: [
          "친언니의 대학교 졸업식에 참석해야 해서",
          "과학 동아리 보고서 마감일을 맞추지 못해서",
          "인공지능 프로젝트 일정이 갑자기 변경되어서",
          "감기 몸살로 병원 진료 예약이 잡혀 있어서",
          "방문 신청 정원이 이미 마감되어서"
        ],
        mcAnswerIndex: 0,
        saQuestion: "I have to attend my sister's university ______ ceremony.",
        saBlankWord: "graduation",
        saHint: "명사 - 졸업, 졸업식 (g로 시작하는 10글자)",
        saAcceptedAnswers: ["graduation", "Graduation"],
        phoneticTrapType: "palatalization",
        translation: "M: Clara, 우리 과학 동아리가 다음 주 금요일에 국립 로봇 공학 센터를 견학한다는 소식 들었니?\nW: 응, Justin. 어제 Harrison 선생님께서 말씀해 주셨어.\nM: 너도 같이 갈 거지? 다가오는 인공지능 프로젝트에 정말 환상적인 경험이 될 텐데.\nW: 나도 정말 가고 싶었지만, 그날 친언니의 대학교 졸업식에 참석해야만 해.\nM: 아, 그렇구나. 가족이 최우선이지. 내가 사진 많이 찍어오고 발표 유인물도 공유해 줄게.",
        vocabulary: [
          { word: "robotics", meaning: "로봇공학" },
          { word: "artificial intelligence", meaning: "인공지능" },
          { word: "graduation ceremony", meaning: "졸업식" },
          { word: "handout", meaning: "유인물, 배포 자료" }
        ]
      },
      {
        id: 2002,
        standardType: "7. 숫자/금액 계산",
        type: "dialogue",
        accent: "us",
        topicCategory: "일상/구매",
        questionCategory: "지불할 금액 계산",
        transcript: "M: Welcome to Green Oasis Plant Shop! How can I help you today?\nW: Hi, I'd like to buy some air-purifying plants for my classroom.\nM: These mini snake plants are 10 dollars each, and the ceramic hanging pots are 15 dollars each.\nW: I'll take two snake plants and one hanging pot, please.\nM: Great choice! We are currently having a seasonal promotion, so you get a 10 percent discount on the total amount.\nW: Wonderful! Here is my credit card.",
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
        saHint: "명사 - 할인 (d로 시작하는 8글자)",
        saAcceptedAnswers: ["discount", "Discount"],
        phoneticTrapType: "consonant_cluster_reduction",
        translation: "M: Green Oasis 식물점에 오신 것을 환영합니다! 오늘 무엇을 도와드릴까요?\nW: 안녕하세요, 교실에 둘 공기정화 식물을 좀 사려고 하는데요.\nM: 이 미니 스네이크 플랜트는 개당 10달러이고, 도자기 행잉 화분은 개당 15달러입니다.\nW: 스네이크 플랜트 2개와 행잉 화분 1개 주세요.\nM: 훌륭한 선택입니다! 현재 시즌 프로모션 중이라 전체 금액에서 10% 할인을 받으실 수 있습니다.\nW: 좋네요! 여기 신용카드 있습니다.",
        vocabulary: [
          { word: "air-purifying", meaning: "공기 정화의" },
          { word: "ceramic", meaning: "도자기의" },
          { word: "seasonal promotion", meaning: "시즌 특별 할인 행사" },
          { word: "total amount", meaning: "총액" }
        ]
      },
      {
        id: 2003,
        standardType: "13. 긴 대화 응답",
        type: "dialogue",
        accent: "uk",
        topicCategory: "교내 행사/발표",
        questionCategory: "여자의 응답",
        transcript: "W: Oliver, have you checked the submission deadline for the English speech contest?\nM: Yes, Susan. It's next Monday. Have you decided on your topic?\nW: I'm planning to talk about youth participation in environmental conservation, but I'm having trouble writing the introduction.\nM: Well, starting with an alarming statistic or a thought-provoking rhetorical question usually grabs the audience's attention instantly.",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "That's a brilliant suggestion! I'll try opening with a striking environmental statistic.",
          "I already submitted my speech manuscript yesterday morning.",
          "The judges decided to postpone the contest due to the storm.",
          "You should definitely speak much louder without a microphone.",
          "Environmental problems are far too difficult for high school students."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Starting with a rhetorical question grabs the audience's ______.",
        saBlankWord: "attention",
        saHint: "명사 - 주목, 주의, 관심 (a로 시작하는 9글자)",
        saAcceptedAnswers: ["attention", "Attention"],
        phoneticTrapType: "liaison_linking",
        translation: "W: Oliver, 영어 말하기 대회 원고 마감일 확인했어?\nM: 응, Susan. 다음 주 월요일이야. 발표 주제는 정했니?\nW: 청소년의 환경 보전 참여에 대해 이야기할 계획인데, 서론 도입부를 쓰는 데 애를 먹고 있어.\nM: 음, 충격적인 통계 자료나 생각을 자극하는 수사학적 질문으로 시작하면 청중의 주의를 단번에 사로잡을 수 있어.",
        vocabulary: [
          { word: "conservation", meaning: "보전, 보호" },
          { word: "alarming statistic", meaning: "경각심을 주는 통계 수치" },
          { word: "thought-provoking", meaning: "시사하는 바가 많은, 생각을 자극하는" },
          { word: "rhetorical question", meaning: "반문, 수사학적 질문" }
        ]
      }
    ]
  },

  {
    id: "2024_sido_g2_r1",
    title: "2024학년도 제1회 전국 16개 시·도교육청 공동 영어듣기능력평가 (고2)",
    shortTitle: "2024 제1회 시도교육청 (고2)",
    grade: 2,
    org: "sido",
    orgName: "전국 16개 시·도교육청",
    year: 2024,
    round: "제1회 (4월)",
    examDate: "2024.04.10",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    description: "사회 현상 및 협업: 탄소 발자국 줄이기 담화, 동아리 부스 물품 주문, 학술 발표 슬라이드 백업",
    items: [
      {
        id: 2101,
        standardType: "2. 대화자의 의견/주장 파악",
        type: "dialogue",
        accent: "us",
        topicCategory: "환경/소비",
        questionCategory: "남자의 의견 파악",
        transcript: "W: Jason, look at these brand new wireless headphones. They were only fifteen dollars online!\nM: Wow, that's remarkably cheap, Jenny. But don't you already have two functioning pairs at home?\nW: Well, yes, but having an extra pair in different colors is fun.\nM: I think purchasing ultra-cheap electronics that we don't genuinely need generates unnecessary electronic waste and carbon emissions. We should be more mindful of conscious consumption.",
        mcQuestion: "대화를 듣고, 남자의 의견으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "불필요한 저가 전자제품 구매를 지양하고 의식적인 소비를 해야 한다.",
          "무선 전자제품 구매 시 배터리 수명을 최우선으로 점검해야 한다.",
          "고장 난 가전제품은 공식 서비스 센터에서 수리하는 것이 경제적이다.",
          "온라인 쇼핑몰의 허위 과장 광고 규제를 강화해야 한다.",
          "재활용 부품으로 제조된 친환경 제품 구매를 확대해야 한다"
        ],
        mcAnswerIndex: 0,
        saQuestion: "We should be more mindful of conscious ______.",
        saBlankWord: "consumption",
        saHint: "명사 - 소비 (c로 시작하는 11글자)",
        saAcceptedAnswers: ["consumption", "Consumption"],
        phoneticTrapType: "schwa_reduction",
        translation: "W: Jason, 이 신상 무선 헤드폰 좀 봐. 인터넷에서 겨우 15달러밖에 안 해!\nM: 와, 정말 저렴하네, Jenny. 그런데 집에 이미 멀쩡하게 작동하는 헤드폰이 두 개나 있지 않아?\nW: 음, 그렇긴 한데 색깔별로 하나 더 갖고 있으면 기분 좋잖아.\nM: 진정으로 필요하지 않은 초저가 전자기기를 사는 건 불필요한 전자 폐기물과 탄소 배출을 낳는다고 생각해. 우리는 좀 더 의식적인 소비에 주의를 기울여야 해.",
        vocabulary: [
          { word: "remarkably", meaning: "현저하게, 매우" },
          { word: "carbon emissions", meaning: "탄소 배출" },
          { word: "conscious consumption", meaning: "의식적인 소비" }
        ]
      },
      {
        id: 2102,
        standardType: "12. 짧은 대화 응답",
        type: "dialogue",
        accent: "uk",
        topicCategory: "수업/발표",
        questionCategory: "여자의 응답",
        transcript: "M: Jessica, our collaborative history presentation is scheduled for the first period tomorrow morning.\nW: I know, Kevin. I've finished putting together all the digital slides and video clips.\nM: Did you remember to store a duplicate backup copy on a USB flash drive?",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Yes, it's safely stored right in my backpack pocket.",
          "The teacher announced that our exam has been delayed.",
          "I forgot to save the document before my computer died.",
          "We must rent a projector from the administration office.",
          "Our presentation received the highest grade in the class."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Did you remember to store a duplicate ______ copy on a USB drive?",
        saBlankWord: "backup",
        saHint: "명사 - 백업, 예비 사본 (b로 시작하는 6글자)",
        saAcceptedAnswers: ["backup", "Backup"],
        phoneticTrapType: "glottal_stop",
        translation: "M: Jessica, 우리 조 역사 협동 발표가 내일 아침 1교시로 잡혀 있어.\nW: 알고 있어, Kevin. 디지털 슬라이드와 비디오 클립 편집은 내가 다 끝마쳤어.\nM: USB 플래시 드라이브에 복사본 백업 파일 담아두는 건 잊지 않았지?",
        vocabulary: [
          { word: "collaborative", meaning: "협력적인, 공동의" },
          { word: "duplicate", meaning: "복사본, 이중의" },
          { word: "backup copy", meaning: "백업 사본" }
        ]
      },
      {
        id: 2103,
        standardType: "14. 긴 대화 응답",
        type: "dialogue",
        accent: "us",
        topicCategory: "학업/심리",
        questionCategory: "여자의 응답",
        transcript: "W: Leo, you look rather tense today. Is something bothering you?\nM: To tell you the truth, Ms. Jenkins, I have my university admissions interview this afternoon, and I'm terrified of freezing up on stage.\nW: That's completely natural, Leo. Just remember to take deep breaths and establish steady eye contact with the evaluators.\nM: But what if they ask an unexpected question that completely blindsides me?",
        mcQuestion: "대화를 듣고, 남자의 마지막 말에 대한 여자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "Calmly take a moment to reflect, and answer with your honest reasoning.",
          "Refusing to speak is the best way to prevent embarrassing slips.",
          "You must memorize the entire college prospectus before entering.",
          "The interview has already been rescheduled for next semester.",
          "I regret not applying to the overseas study program last month."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Establish steady ______ contact with the evaluators.",
        saBlankWord: "eye",
        saHint: "명사 - 눈 (eye contact: 시선 맞춤)",
        saAcceptedAnswers: ["eye", "Eye"],
        phoneticTrapType: "liaison_linking",
        translation: "W: Leo, 오늘 꽤 긴장한 것 같네. 무슨 걱정거리라도 있니?\nM: 솔직히 말씀드리면 Jenkins 선생님, 오늘 오후에 대입 면접이 있는데 머리가 하얘져서 얼어붙을까 봐 너무 두려워요.\nW: 그건 아주 자연스러운 감정이란다, Leo. 심호흡을 크게 하고 면접관들과 흔들림 없는 시선을 맞추는 것을 잊지 마렴.\nM: 하지만 전혀 예상치 못한 질문을 받아서 허를 찔리면 어떡하죠?",
        vocabulary: [
          { word: "freeze up", meaning: "얼어붙다, 말이 안 나오다" },
          { word: "blindside", meaning: "불시에 닥치다, 기습하다" },
          { word: "evaluator", meaning: "평가자, 면접관" }
        ]
      }
    ]
  },

  // ==========================================
  // [고등학교 3학년 및 수능/평가원]
  // ==========================================
  {
    id: "2025_eval_g3_09",
    title: "2025학년도 대학수학능력시험 9월 모의평가 영어듣기 (한국교육과정평가원)",
    shortTitle: "2025 9월 모평 (평가원 고3)",
    grade: 3,
    org: "eval",
    orgName: "한국교육과정평가원 (KICE)",
    year: 2024,
    round: "9월 모의평가",
    examDate: "2024.09.04",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "평가원 최신 공인 기출: 스크린 프리 캠페인 담화, 전자폐기물 생산자 책임 의견, 불안 리프레이밍 응답",
    items: [
      {
        id: 3001,
        standardType: "1. 담화 목적 파악",
        type: "monologue",
        accent: "us",
        topicCategory: "사회/보건",
        questionCategory: "담화 목적 파악",
        transcript: "W: Good morning, teachers and students. This is vice principal Dr. Morrison. In our hyper-connected modern society, excessive screen time has become a primary driver of chronic mental fatigue and sleep deprivation among adolescents. To help our school community restore cognitive equilibrium and foster genuine interpersonal relationships, our school is hosting an annual 'Screen-Free Week' starting next Monday. During this campaign, students are strongly encouraged to participate in outdoor sports, book clubs, and face-to-face discussions rather than scrolling through social media. Detailed activity logs will be distributed by your homeroom teachers today. Thank you for taking this meaningful step toward a balanced lifestyle.",
        mcQuestion: "다음을 듣고, 여자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "교내 '스크린 프리 위크(Screen-Free Week)' 참여를 독려하려고",
          "청소년 수면 부족의 의학적 치료법을 설명하려고",
          "디지털 기기 교내 반입 금지 규정 신설을 안내하려고",
          "방과 후 야외 스포츠 클럽 개설 일정을 홍보하려고",
          "학생 심리 상담을 위한 학부모 면담 일정을 공지하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Excessive screen time has become a primary driver of mental ______.",
        saBlankWord: "fatigue",
        saHint: "명사 - 피로, 심신 피로 (f로 시작하는 7글자)",
        saAcceptedAnswers: ["fatigue", "Fatigue"],
        phoneticTrapType: "silent_letter",
        translation: "W: 교직원 및 학생 여러분, 좋은 아침입니다. 교감 Dr. Morrison입니다. 초연결된 현대 사회에서 과도한 스크린 사용은 청소년들의 만성적인 정신적 피로와 수면 부족의 주된 원인이 되었습니다. 우리 학교 구성원들이 인지적 균형을 회복하고 진정한 대인 관계를 형성하도록 돕기 위해, 다음 주 월요일부터 연례 '스크린 프리 위크'를 개최합니다. 이 캠페인 기간 동안 학생들은 소셜 미디어를 스크롤하는 대신 야외 스포츠, 독서 모임, 대면 토론에 참여할 것을 강력히 권장합니다. 상세한 활동 기록지는 오늘 담임 선생님을 통해 배부될 것입니다. 균형 잡힌 삶을 향한 이 뜻깊은 발걸음에 동참해 주셔서 감사합니다.",
        vocabulary: [
          { word: "hyper-connected", meaning: "초연결된" },
          { word: "fatigue", meaning: "피로" },
          { word: "deprivation", meaning: "박탈, 결핍" },
          { word: "cognitive equilibrium", meaning: "인지적 균형" }
        ]
      },
      {
        id: 3002,
        standardType: "3. 대화자의 의견/주장 파악",
        type: "dialogue",
        accent: "uk",
        topicCategory: "환경/자원 순환",
        questionCategory: "여자의 의견 파악",
        transcript: "M: Fiona, did you read the municipal notice regarding the new electronic waste drop-off facility?\nW: Yes, George. But frankly, I believe setting up designated collection bins alone cannot resolve the accelerating accumulation of e-waste.\nM: Really? Isn't offering convenient drop-off stations the essential first step to boost community recycling?\nW: It helps, but without tech manufacturers adopting sustainable product architectures and offering affordable repair modularity, consumers will simply continue replacing devices prematurely.\nM: Ah, so you mean structural systemic shifts by manufacturers are fundamentally required.\nW: Precisely. Extended producer responsibility is the cornerstone.",
        mcQuestion: "대화를 듣고, 여자의 의견으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "전자 폐기물 감축을 위해 제조사의 지속 가능한 설계와 수리 보장이 선행되어야 한다.",
          "지자체는 재활용률 향상을 위해 폐가전 수거함을 전면 확충해야 한다.",
          "소비자는 전자기기 구매 시 에너지 효율 등급을 최우선으로 확인해야 한다.",
          "전자 폐기물 불법 투기를 근절하기 위해 처벌 수위를 대폭 상향해야 한다.",
          "중고 가전 거래 플랫폼의 안전 인증 제도 도입이 시급하다."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Without manufacturers implementing ______ architectures, waste will grow.",
        saBlankWord: "sustainable",
        saHint: "형용사 - 지속 가능한, 친환경적인 (s로 시작하는 11글자)",
        saAcceptedAnswers: ["sustainable", "Sustainable"],
        phoneticTrapType: "schwa_reduction",
        translation: "M: Fiona, 전자 폐기물 수거 시설 신설에 관한 시청 공지 읽어봤니?\nW: 응, George. 하지만 솔직히 말해서, 전용 수거함을 설치하는 것만으로는 급증하는 전자 쓰레기 누적을 해결할 수 없다고 봐.\nM: 정말? 주민들의 재활용을 독려하려면 편리한 배출 장소를 제공하는 게 가장 중요한 첫걸음 아닐까?\nW: 도움이 되긴 하지만, 제조사들이 지속 가능한 제품 설계를 도입하고 부담 없는 수리 모듈을 제공하지 않는다면 소비자들은 계속해서 기기를 너무 일찍 교체할 뿐이야.\nM: 아, 그러니까 제조 기업들의 구조적이고 근본적인 변화가 필수적이라는 말이구나.\nW: 정확해. 생산자책임재활용제도(EPR)의 확대가 핵심 초석이야.",
        vocabulary: [
          { word: "accumulation", meaning: "축적, 누적" },
          { word: "sustainable", meaning: "지속 가능한" },
          { word: "prematurely", meaning: "너무 이르게, 시기상조로" },
          { word: "extended producer responsibility", meaning: "생산자 책임 재활용" }
        ]
      },
      {
        id: 3003,
        standardType: "13. 긴 대화 응답",
        type: "dialogue",
        accent: "us",
        topicCategory: "심리/학술 발표",
        questionCategory: "남자의 응답",
        transcript: "W: Marcus, you've been rehearsing your presentation for tomorrow's international conference all morning. How are you holding up?\nM: To be completely candid, Professor Davis, my anxiety level is through the roof. What if I make an embarrassing grammatical blunder or blank out completely on stage?\nW: Remember our psychological seminar, Marcus. Physiological nervousness is normal, but interpreting that arousal as readiness rather than impending catastrophe fundamentally alters your nervous system's response.\nM: That makes sense theoretically, but when dozens of experts stare at me, it's hard to suppress the panic.\nW: Don't wage war against your adrenaline. Rather than trying to extinguish nervousness, harness that physiological energy into enthusiastic engagement.",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "You're right. Reframing my nervousness as energetic passion will help me deliver a compelling talk.",
          "I should immediately withdraw my conference registration to protect my reputation.",
          "The organizers have agreed to replace the auditorium sound system this afternoon.",
          "Memorizing the entire script word for word is the only method to prevent blunders.",
          "I truly regret signing up for the graduate research forum this semester."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Interpreting anxiety as readiness rather than impending ______ alters your response.",
        saBlankWord: "catastrophe",
        saHint: "명사 - 파국, 재앙, 참사 (c로 시작하는 11글자)",
        saAcceptedAnswers: ["catastrophe", "Catastrophe"],
        phoneticTrapType: "silent_letter",
        translation: "W: Marcus, 내일 있을 국제 콘퍼런스 발표 연습을 오전 내내 하고 있더군요. 컨디션은 어때요?\nM: 솔직히 말씀드리면 Davis 교수님, 불안감이 극에 달해 터질 것 같아요. 무대 위에서 당황스러운 문법적 실수를 하거나 머릿속이 새하얘지면 어쩌죠?\nW: 우리 심리학 세미나를 떠올려 보세요, Marcus. 생리적 긴장감은 정상적이지만, 그 각성 상태를 임박한 파국이 아닌 준비 상태로 해석하는 것만으로도 신경계의 반응이 근본적으로 바뀐답니다.\nM: 이론적으로는 이해하지만, 수십 명의 전문가가 저를 응시할 때 공황감을 억누르는 것은 정말 어렵습니다.\nW: 아드레날린과 전쟁을 치르려 하지 마세요. 긴장감을 없애려 애쓰기보다, 그 신체적 에너지를 청중과의 열정적인 소통으로 승화시켜 보세요.",
        vocabulary: [
          { word: "candid", meaning: "솔직한" },
          { word: "through the roof", meaning: "극에 달한, 치솟은" },
          { word: "catastrophe", meaning: "참사, 파국" },
          { word: "reframing", meaning: "관점 재설정, 리프레이밍" }
        ]
      }
    ]
  },

  {
    id: "2024_csat_g3",
    title: "2024학년도 대학수학능력시험 공인 실전 영어듣기 (한국교육과정평가원)",
    shortTitle: "2024 대입 수능 실전 (평가원 고3)",
    grade: 3,
    org: "csat",
    orgName: "대학수학능력시험 (수능)",
    year: 2024,
    round: "대입 수능",
    examDate: "2023.11.16",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    description: "대한민국 대표 공인 평가: 교내 에너지 절약 담화, 도서관 연구 부스 대여, 복합 대화 응답",
    items: [
      {
        id: 3101,
        standardType: "1. 담화 목적 파악",
        type: "monologue",
        accent: "us",
        topicCategory: "사회/에너지",
        questionCategory: "담화 목적 파악",
        transcript: "M: Good afternoon, students and faculty members. This is principal Mr. Sullivan. As the cold winter approaches, our school's electricity consumption tends to spike dramatically due to space heaters left running overnight. To ensure fiscal responsibility and uphold our environmental commitment, our student council is launching the 'Warm Heart, Green Campus' initiative. Please remember to set thermostat temperatures to 20 degrees Celsius and switch off all heating units before leaving classrooms. Small individual habits create a sustainable campus for everyone. Thank you for your cooperation.",
        mcQuestion: "다음을 듣고, 남자가 하는 말의 목적으로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "겨울철 교내 난방기구 에너지 절약 실천을 당부하려고",
          "노후된 교실 난방기구 전면 교체 일정을 안내하려고",
          "학생회 주관 겨울철 자선 바자회 기부금을 모집하려고",
          "한파 대비 교내 시설물 동파 방지 점검을 공지하려고",
          "친환경 태양광 발전기 설치 공사 계획을 설명하려고"
        ],
        mcAnswerIndex: 0,
        saQuestion: "Our electricity consumption tends to ______ dramatically in winter.",
        saBlankWord: "spike",
        saHint: "동사 - 급증하다, 치솟다 (s로 시작하는 5글자)",
        saAcceptedAnswers: ["spike", "Spike"],
        phoneticTrapType: "liaison_linking",
        translation: "M: 교직원 및 학생 여러분, 안녕하십니까. 교장 Mr. Sullivan입니다. 추운 겨울이 다가옴에 따라 밤새 켜둔 난방기로 인해 우리 학교의 전력 소비량이 급증하는 경향이 있습니다. 재정적 책임성을 확보하고 환경적 약속을 지키기 위해 학생회에서 '따뜻한 마음, 녹색 캠퍼스' 운동을 시작합니다. 실내 온도를 섭씨 20도로 맞추고 하교 전 모든 난방기 전원을 끄는 것을 기억해 주십시오. 작은 개인의 습관이 모두를 위한 지속 가능한 학교를 만듭니다. 협조해 주셔서 감사합니다.",
        vocabulary: [
          { word: "consumption", meaning: "소비, 소비량" },
          { word: "spike", meaning: "급증하다" },
          { word: "thermostat", meaning: "온도 조절기" },
          { word: "fiscal responsibility", meaning: "재정적 책임성" }
        ]
      },
      {
        id: 3102,
        standardType: "5. 할 일 파악",
        type: "dialogue",
        accent: "uk",
        topicCategory: "대학 생활/연구",
        questionCategory: "대화자의 할 일",
        transcript: "W: Daniel, have you reserved a group study room for our graduation thesis discussion tomorrow?\nM: I tried to, Professor Evans, but all standard seminar rooms are fully booked for the entire afternoon.\nW: What about the multimedia collaborative pod on the third floor of the university library?\nM: I haven't checked that system yet. I'll log in to the library portal right now and secure a slot.",
        mcQuestion: "대화를 듣고, 남자가 지금 할 일로 가장 적절한 것을 고르시오.",
        mcOptions: [
          "도서관 포털에 접속하여 멀티미디어 스터디룸 예약하기",
          "졸업 논문 초안 출력하여 교수님께 제출하기",
          "세미나실 예약 취소 위약금 결제하기",
          "도서관 3층 멀티미디어 장비 고장 신고하기",
          "학술 토론회 발표 순서 추첨 참여하기"
        ],
        mcAnswerIndex: 0,
        saQuestion: "I'll log in to the library portal and ______ a slot.",
        saBlankWord: "secure",
        saHint: "동사 - 확보하다, 얻어내다 (s로 시작하는 6글자)",
        saAcceptedAnswers: ["secure", "Secure"],
        phoneticTrapType: "flap_t",
        translation: "W: Daniel, 내일 있을 졸업 논문 토론을 위한 그룹 스터디룸은 예약했나요?\nM: 시도해 보았습니다, Evans 교수님. 하지만 일반 세미나실은 오후 내내 이미 예약이 꽉 찼습니다.\nW: 대학 도서관 3층에 있는 멀티미디어 협업 부스는 어떤가요?\nM: 그 시스템은 아직 확인해 보지 못했습니다. 지금 바로 도서관 포털에 로그인해서 이용 자리를 확보하겠습니다.",
        vocabulary: [
          { word: "graduation thesis", meaning: "졸업 논문" },
          { word: "collaborative pod", meaning: "협업 연구 부스" },
          { word: "secure a slot", meaning: "자리를 확보하다" }
        ]
      },
      {
        id: 3103,
        standardType: "14. 긴 대화 응답",
        type: "dialogue",
        accent: "us",
        topicCategory: "일상/취미",
        questionCategory: "남자의 응답",
        transcript: "W: Henry, I noticed you haven't been attending our community choir rehearsals lately. Is everything alright?\nM: Well, Laura, with my new promotional responsibilities at work, finding two hours every Tuesday evening has become nearly impossible.\nW: We truly miss your baritone voice. You know the director recently introduced weekend morning practice sessions for busy members.\nM: Really? Saturday mornings would fit into my routine seamlessly.",
        mcQuestion: "대화를 듣고, 여자의 마지막 말에 대한 남자의 응답으로 가장 적절한 것을 고르시오. [영어 보기]",
        mcOptions: [
          "That's wonderful news! I'll contact the choir director and register for the Saturday session.",
          "I already submitted my official resignation from the choir last month.",
          "The concert ticket prices are too expensive for community members.",
          "Singing baritone parts causes too much vocal strain for me.",
          "I prefer practicing alone at home without any rehearsals."
        ],
        mcAnswerIndex: 0,
        saQuestion: "Saturday mornings would fit into my routine ______.",
        saBlankWord: "seamlessly",
        saHint: "부사 - 매끄럽게, 완벽하게 조화되어 (s로 시작하는 10글자)",
        saAcceptedAnswers: ["seamlessly", "Seamlessly"],
        phoneticTrapType: "liaison_linking",
        translation: "W: Henry, 요즘 우리 지역 합창단 연습에 통 나오지 않으시던데요. 별일 없으신가요?\nM: 네, Laura 씨. 직장에서 승진하면서 맡게 된 새 업무 때문에 매주 화요일 저녁 2시간을 내는 게 거의 불가능해졌어요.\nW: 단원들이 Henry 씨의 멋진 바리톤 음성을 정말 그리워해요. 지휘자님께서 바쁜 단원들을 위해 주말 오전 연습 반을 새로 개설하신 거 아시나요?\nM: 정말요? 토요일 아침이라면 제 일과에 아주 매끄럽게 딱 들어맞겠네요.",
        vocabulary: [
          { word: "choir rehearsal", meaning: "합창단 연습" },
          { word: "promotional responsibilities", meaning: "승진에 따른 직무 책임" },
          { word: "seamlessly", meaning: "매끄럽게, 막힘없이" }
        ]
      }
    ]
  }
];

// 빠른 조회를 위한 학년별 맵
export const EXAM_BY_GRADE = {
  1: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.grade === 1),
  2: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.grade === 2),
  3: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.grade === 3)
};

// 주관처별 맵
export const EXAM_BY_ORG = {
  sido: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.org === "sido"),
  eval: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.org === "eval"),
  csat: OFFICIAL_EXAM_LIBRARY.filter(exam => exam.org === "csat")
};
