import type { CategorySlug } from "./categories";
import type { LocalizedString } from "@/i18n/types";

export type ArticleSection = {
  heading: LocalizedString;
  body: LocalizedString;
};

export type ArticleSource = {
  name: string;
  url: string;
  kind: "youtube" | "article";
  videoTitle?: string;
};

export type Article = {
  slug: string;
  category: CategorySlug;
  title: LocalizedString;
  excerpt: LocalizedString;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  sections: ArticleSection[];
  verdict?: LocalizedString;
  sources?: ArticleSource[];
  searchTags?: string[];
};

const articles: Article[] = [
  {
    slug: "galaxy-s25-ultra-two-week-review",
    category: "reviews",
    title: {
      ko: "갤럭시 S25 울트라 2주 사용기: 카메라·배터리·펜이 남기는 것",
      en: "Galaxy S25 Ultra after two weeks: camera, battery, and the S Pen",
    },
    excerpt: {
      ko: "플래그십을 살 때 자주 놓치는 일상 지표 — 한손 무게, 낮 밝기 야외 가독성, 하루 배터리 — 를 중심으로 정리했습니다.",
      en: "A buying-focused take on daily metrics people skip: one-hand weight, outdoor readability, and real all-day battery.",
    },
    publishedAt: "2026-10-12",
    readingMinutes: 9,
    sections: [
      {
        heading: { ko: "누구에게 맞는가", en: "Who this is for" },
        body: {
          ko: "필기·캡처를 자주 하고, 줌 촬영을 실제 여행·행사에서 쓰는 사람이면 S25 울트라는 여전히 설득력 있습니다. 반대로 ‘가벼운 폰만’ 원하거나 앱 생태계를 iOS에 맞춰 둔 사람에게는 과한 기기입니다. 이 글은 랩 벤치 숫자가 아니라, 2주간 출퇴근·야외·야간 촬영에서 느낀 체감을 기준으로 적었습니다.",
          en: "If you annotate screenshots, jot notes, and actually use zoom on trips or events, the S25 Ultra still earns its size. If you want a light phone or your life is already on iOS, it is overbuilt. This piece is based on two weeks of commute, outdoor, and night shooting — not a lab scorecard.",
        },
      },
      {
        heading: {
          ko: "카메라: 주간은 안정, 야간은 과처리에 주의",
          en: "Camera: steady by day, watch night processing",
        },
        body: {
          ko: "주간 기본 카메라는 색이 과장되지 않고 디테일이 충분합니다. 3배·5배 줌은 ‘급하면 쓸 수 있는’ 수준을 넘어, SNS용으로는 충분히 게시 가능합니다. 야간은 노이즈 억제가 강해 피부·네온 간판이 매끈해질 때가 있어, 중요한 샷은 프로 모드나 다중 촬영으로 후보를 남기는 편이 낫습니다.",
          en: "Daylight defaults look honest and detailed. 3x and 5x zoom are good enough to post, not just emergency crops. Night shots lean hard on noise reduction — skin and neon signs can look too smooth — so keep a Pro Mode or multi-shot backup for anything that matters.",
        },
      },
      {
        heading: { ko: "배터리·충전·무게", en: "Battery, charging, and weight" },
        body: {
          ko: "밝기 자동, 5G, 중간 사용량 기준으로 하루를 넘기는 편입니다. 고밝기·영상 촬영이 많은 날은 저녁에 보조 배터리가 편합니다. 무게는 분명히 무겁습니다. 한 손으로 장시간 스크롤하면 손이 먼저 지칩니다. 유선 충전은 빠르고, 무선은 ‘침대 옆 편의’ 정도로 기대하는 게 맞습니다.",
          en: "On auto brightness and mixed 5G use it comfortably clears a day. Heavy video days may want a late top-up. The weight is real — one-hand scrolling tires the hand first. Wired charging is quick; wireless is bedside convenience, not a primary plan.",
        },
      },
      {
        heading: { ko: "S Pen과 소프트웨어", en: "S Pen and software" },
        body: {
          ko: "펜은 여전히 울트라의 차별점입니다. 회의 메모, PDF 주석, 화면 캡처 후 즉시 스케치에 가치가 있습니다. One UI는 설정이 많아 처음엔 복잡하지만, 알림·디스플레이·배터리 제한만 정리하면 일상은 단순해집니다. 불필요한 프리로드 앱은 숨기거나 비활성화하는 것을 권합니다.",
          en: "The S Pen remains the Ultra’s differentiator for meeting notes, PDF markup, and quick sketches on captures. One UI is dense at first; tidy notifications, display, and battery limits and daily use settles down. Hide or disable preload apps you will not open.",
        },
      },
    ],
    verdict: {
      ko: "펜·줌·배터리를 실제로 쓸 사람에게는 추천. 가벼운 폰을 원하면 플러스/일반 모델이나 경쟁사 소형기를 보세요.",
      en: "Recommended if you will use the pen, zoom, and battery headroom. Want light? Look at smaller Galaxy models or compact rivals.",
    },
  },
  {
    slug: "privacy-first-android-setup",
    category: "how-to",
    title: {
      ko: "프라이버시 우선 안드로이드 초기 설정 체크리스트",
      en: "A privacy-first Android setup checklist",
    },
    excerpt: {
      ko: "새 폰을 개봉한 날 30분 안에 끝낼 수 있는 설정 순서. 과장된 ‘완전 익명’이 아니라 실질 위험을 줄이는 단계입니다.",
      en: "A 30-minute unboxing sequence that cuts real risk — not a fantasy of perfect anonymity.",
    },
    publishedAt: "2026-09-28",
    readingMinutes: 7,
    sections: [
      {
        heading: { ko: "시작 전 준비", en: "Before you power on" },
        body: {
          ko: "기존 폰의 2단계 인증 앱·비밀번호 관리자를 먼저 확인하세요. 새 폰으로 옮기기 전 백업 범위를 정하고, 업무 계정과 개인 계정을 분리할지도 결정합니다. eSIM/유심, 은행 앱 재등록에 시간이 걸릴 수 있으니 여유 있는 오후에 진행하세요.",
          en: "Confirm your authenticator and password manager on the old phone first. Decide backup scope and whether work and personal accounts stay separate. Leave an afternoon — eSIM/SIM swaps and banking re-enrollment take longer than the settings taps.",
        },
      },
      {
        heading: { ko: "계정·권한·광고 ID", en: "Accounts, permissions, ad ID" },
        body: {
          ko: "구글 계정은 최소 권한으로 로그인하고, 백업·Find My Device만 필요한 항목을 켭니다. 설정 > 보안 및 개인정보에서 알 수 없는 앱 설치를 끄고, 권한 관리자로 위치·마이크·카메라를 ‘사용 중에만’으로 맞춥니다. 광고 ID 삭제를 지원하면 삭제하고, 맞춤 광고를 끕니다.",
          en: "Sign into Google with the minimum you need — backup and Find My Device if you rely on them. Disable unknown app installs, set location/mic/camera to while-in-use, delete the advertising ID when offered, and turn off ad personalization.",
        },
      },
      {
        heading: { ko: "앱 계층을 단순화", en: "Simplify the app layer" },
        body: {
          ko: "프리로드 앱은 삭제 가능한 것부터 정리합니다. 메신저·이메일·지도·은행만 먼저 설치하고, SNS는 필요할 때 추가하세요. DNS를 사설 DNS(예: 운영체제 지원 사설 DNS)로 바꾸면 추적 도메인을 줄이는 데 도움이 됩니다. VPN은 ‘항상 켜짐’보다, 공용 Wi-Fi에서 쓰는 습관이 현실적입니다.",
          en: "Remove what you can of preload bloat. Install messenger, email, maps, and banking first; add social later. A private DNS setting helps cut tracker domains. A VPN habit on public Wi-Fi beats ‘always on’ theater for most people.",
        },
      },
      {
        heading: { ko: "유지 루틴", en: "Keep it maintained" },
        body: {
          ko: "월 1회: 권한 재검토, 사용하지 않는 앱 삭제, OS·보안 패치 확인. 공용 충전기·허브는 데이터 핀이 없는 충전 전용 케이블을 권합니다. 완벽은 목표가 아닙니다. 기본값을 안전하게 바꾸는 것이 목표입니다.",
          en: "Once a month: review permissions, delete unused apps, confirm OS/security patches. Prefer charge-only cables on public ports. Perfect privacy is not the goal — safer defaults are.",
        },
      },
    ],
  },
  {
    slug: "usb-c-charger-buying-guide",
    category: "how-to",
    title: {
      ko: "USB-C 충전기 고르는 법: 와트·GaN·케이블까지",
      en: "How to buy a USB-C charger: watts, GaN, and cables",
    },
    excerpt: {
      ko: "폰·노트북·이어버드를 한 충전기로 묶을 때 보면 되는 숫자와 인증만 정리했습니다.",
      en: "The few numbers and certifications that matter when one charger covers phone, laptop, and earbuds.",
    },
    publishedAt: "2026-09-15",
    readingMinutes: 6,
    sections: [
      {
        heading: { ko: "와트 수부터", en: "Start with wattage" },
        body: {
          ko: "스마트폰만이면 30–45W로 충분한 경우가 많습니다. 맥북·윈도우 울트라북을 함께 쓰면 65–100W급 멀티포트가 현실적입니다. ‘최대 합산 와트’와 ‘포트당 와트’를 구분해 읽으세요. 두 포트를 동시에 쓰면 포트당 출력이 떨어지는 제품이 많습니다.",
          en: "Phones alone are often fine at 30–45W. Sharing with a MacBook or Windows ultrabook points to 65–100W multiport bricks. Read total wattage and per-port wattage separately — dual-load usually splits output.",
        },
      },
      {
        heading: { ko: "GaN·안전·케이블", en: "GaN, safety, cables" },
        body: {
          ko: "GaN 충전기는 같은 출력에서 부피가 작은 편입니다. 과전압 보호·PPS 지원 여부를 확인하고, 여행용이면 플러그 형태도 봅니다. 케이블은 USB-IF 또는 신뢰할 수 있는 브랜드의 EPR/240W 표기 제품을 쓰고, 저가 무표기 케이블은 고속·고전력에 쓰지 마세요.",
          en: "GaN usually means smaller bricks at the same output. Check protections and PPS if your phone wants it; check plug shape for travel. Use USB-IF or reputable EPR/240W-rated cables — skip unmarked bargain leads for high power.",
        },
      },
      {
        heading: { ko: "실전 조합 예시", en: "Practical kits" },
        body: {
          ko: "출퇴근: 45W 1포트 + 짧은 케이블. 가방 하나: 100W 2포트 + 1.5m 케이블 하나 + 짧은 케이블 하나. 데스크: 도킹/모니터 PD와 중복되지 않게 역할을 나누세요. 무선 충전 패드는 ‘밤 충전’용으로 쓰면 유선 고속을 대체하지 않아도 됩니다.",
          en: "Commute: 45W single-port plus a short cable. One bag: 100W dual-port, one 1.5m cable, one short cable. At a desk, do not duplicate what your dock/monitor PD already does. A wireless pad is fine for overnight — it does not need to replace fast wired charging.",
        },
      },
    ],
  },
  {
    slug: "wifi-7-router-upgrade-checklist",
    category: "how-to",
    title: {
      ko: "Wi-Fi 7 공유기 업그레이드 전 체크리스트",
      en: "Wi-Fi 7 router upgrade checklist",
    },
    excerpt: {
      ko: "새 공유기 박스부터 열지 마세요. 회선·메시·클라이언트 지원 여부부터 확인하는 순서입니다.",
      en: "Do not open the new box first — verify ISP link, mesh needs, and client support in order.",
    },
    publishedAt: "2026-10-25",
    readingMinutes: 7,
    sections: [
      {
        heading: {
          ko: "업그레이드가 필요한 신호",
          en: "Signs you actually need it",
        },
        body: {
          ko: "유선 속도는 나오는데 무선만 반토막, 밀집 아파트에서 채널 간섭이 심함, 다수 4K 스트림·클라우드 백업이 동시에 끊김 — 이 조합이면 Wi-Fi 6E/7 검토 가치가 있습니다. 단지 ‘숫자가 높다’는 이유만으로는 체감이 작을 수 있습니다.",
          en: "Wired speed is fine but Wi-Fi is half, dense apartment interference is bad, or several 4K streams plus cloud backup stall together — then 6E/7 is worth a look. A bigger marketing number alone may not feel different.",
        },
      },
      {
        heading: { ko: "구매 전 확인", en: "Before you buy" },
        body: {
          ko: "ISP 모뎀/ONT가 브리지 가능한지, 필요 포트(2.5G 등), 메시 확장 계획, 스마트폰·노트북의 Wi-Fi 7/6E 지원 여부를 적으세요. 클라이언트가 구형이면 공유기만 바꿔도 최고 속도는 안 나옵니다. 보안: 기본 비밀번호·원격 관리·자동 업데이트 설정을 개봉 직후 바꿉니다.",
          en: "Note bridge mode on the ISP modem/ONT, port needs (e.g. 2.5G), mesh plans, and whether phones/laptops speak 7/6E. Old clients will not hit peak rates. On day one change default passwords, lock down remote admin, and enable safe auto-updates.",
        },
      },
      {
        heading: { ko: "설치 순서", en: "Install order" },
        body: {
          ko: "1) 기존 설정 백업 2) 새 공유기 WAN 연결·펌웨어 업데이트 3) SSID를 일시적으로 새 이름으로 테스트 4) 문제 없으면 기존 SSID/암호로 맞춰 기기 재연결 최소화 5) 채널·송신 출력은 기본 후, 문제 구간만 조정. 전자레인지·금속 랙 근처는 피하세요.",
          en: "1) Back up old settings 2) Connect WAN and update firmware 3) Test a temporary SSID 4) Then match old SSID/password to reduce re-pairing 5) Leave channels/power on defaults until a problem area appears. Keep the unit off microwaves and metal racks.",
        },
      },
    ],
  },
  // ── Sample slice (1 apps + 1 news) for Ryan approval ──
  {
    slug: "iphone-duo-app-optimization-week-one",
    category: "apps",
    title: {
      ko: "아이폰 듀오 앱 최적화 1주차: 지금 사도 될까",
      en: "iPhone Duo app optimization after week one: buy now or wait?",
    },
    excerpt: {
      ko: "잇섭의 소프트웨어·앱 최적화 영상을 바탕으로 한 편집 요약. 우측 상태 바·서드파티 대응·단축어 팁까지.",
      en: "Editorial summary of ITSub’s software/app optimization video — status-bar layout, third-party readiness, and Shortcut workarounds.",
    },
    publishedAt: "2026-11-04",
    readingMinutes: 8,
    searchTags: [
      "iphone duo",
      "아이폰 듀오",
      "앱 최적화",
      "app optimization",
      "foldable",
      "itsub",
      "잇섭",
      "capcut",
      "notion",
      "youtube",
    ],
    sources: [
      {
        name: "ITSub잇섭",
        url: "https://www.youtube.com/watch?v=lx8ef0ed690",
        kind: "youtube",
        videoTitle:
          "아이폰 듀오를 지금 꼭 사야만할까? 소프트웨어&앱 최적화가 아쉬운 이유",
      },
    ],
    sections: [
      {
        heading: {
          ko: "편집 요약 (출처 기반)",
          en: "Editorial summary (sourced)",
        },
        body: {
          ko: "NookVolt는 원본 앱 적합성 랩 테스트가 아닙니다. 아래는 ITSub잇섭 영상 「아이폰 듀오를 지금 꼭 사야만할까? 소프트웨어&앱 최적화가 아쉬운 이유」(https://www.youtube.com/watch?v=lx8ef0ed690)를 시청한 뒤 구매 판단용으로 다시 쓴 요약입니다. 대본을 베끼지 않았습니다. 잇섭은 출시 약 1주일 시점의 UX·스톡 UI 일관성·서드파티 앱·게임·스트리밍 대응을 중심으로 말합니다.",
          en: "NookVolt is not running original app-compatibility lab tests. This is a buying-focused rewrite after watching ITSub’s “아이폰 듀오를 지금 꼭 사야만할까? 소프트웨어&앱 최적화가 아쉬운 이유” (https://www.youtube.com/watch?v=lx8ef0ed690). We do not copy the transcript. ITSub covers week-one UX, stock UI consistency, third-party apps, games, and streaming readiness.",
        },
      },
      {
        heading: {
          ko: "무엇이 어색한가",
          en: "What feels unfinished",
        },
        body: {
          ko: "커버 디스플레이의 우측 카메라/다이나믹 아일랜드 때문에 시계·요소가 왼쪽으로 밀리고, 잠금 암호 화면은 가운데 — 스톡 UI 안에서도 정렬이 흔들린다고 잇섭은 지적합니다. 플렉스 모드에서는 접는 각도·속도에 따라 커버로 넘어가거나 내부가 유지되는 경계가 애매하고, 화면 회전도 아이패드·일반 아이폰보다 한 박자 느린 체감이 있습니다. 접으면 기본으로 커버에서 앱이 이어져 끄려면 한 번 더 조작이 필요합니다(단축어로 잠금 전환 가능 — 영상 설명란 링크).",
          en: "ITSub flags stock inconsistency: the cover camera/Dynamic Island pushes the clock left, while the passcode pad stays centered. Flex mode can jump to the cover or stay inside depending on fold angle/speed, and rotation feels a beat slower than iPad or slab iPhones. Folding continues the app on the cover by default — locking on fold needs a Shortcut (linked in the video description).",
        },
      },
      {
        heading: {
          ko: "앱·게임: 1주차 현실",
          en: "Apps and games: week-one reality",
        },
        body: {
          ko: "미최적화 앱은 우측(접힘)~상단(펼침 세로) 여백으로 ‘작은 폰’처럼 느껴질 수 있고, 커버 실사용 영역은 대략 5인치 대각 수준으로 체감된다고 합니다. Notion·YouTube·Netflix·Instagram·ChatGPT 등 대형 앱은 빠르게 맞춰졌지만, CapCut처럼 편집 앱은 아직 빈칸이 남고, 게임은 대부분 미지원에 가깝습니다. 카카오뱅크처럼 하단 독+상단 액션 배치가 가로 공간을 더 넓게 쓰는 사례도 있어, ‘무조건 우측 상태 바’가 유일한 정답은 아니라고 정리합니다.",
          en: "Unoptimized apps can feel like a tiny phone with empty status-bar margins (~5\" usable cover diagonal in ITSub’s framing). Big apps (Notion, YouTube, Netflix, Instagram, ChatGPT) moved fast; CapCut-style editors and most games still lag. KakaoBank-style top/bottom layouts can feel wider than forced right rails — so the status-bar pattern is not the only good answer.",
        },
      },
      {
        heading: { ko: "구매 타이밍", en: "Buy timing" },
        body: {
          ko: "잇섭 결론에 가깝게: 얼리어답터가 아니면 지금 바로 고가 구매를 강요할 단계는 아닙니다. 호환성 체크(영상에서 안내하는 forduo 류 도구)로 자주 쓰는 앱을 먼저 확인하고, SDK·스토어 제출 기한(영상에 언급된 향후 요건)과 업데이트 속도를 본 뒤 결정하는 편이 안전합니다. NookVolt 자체 앱 감사 결과가 아닙니다.",
          en: "Aligned with ITSub’s close: unless you are a true early adopter, this is not a must-buy week. Check your daily apps against compatibility tools he links, watch SDK/store timelines and update velocity, then decide. Not a NookVolt app audit.",
        },
      },
    ],
    verdict: {
      ko: "앱 대응이 일상에 중요하면 기다리기. 편집·멀티태스킹 실험이면 호환 목록부터.",
      en: "Wait if app fit matters daily. Experimenting? Audit your app list first.",
    },
  },
  {
    slug: "best-smartphones-2025-mrwhosetheboss",
    category: "news",
    title: {
      ko: "2025 스마트폰 어워드 브리핑: Mrwhosetheboss가 고른 것들",
      en: "2025 smartphone awards briefing: what Mrwhosetheboss crowned",
    },
    excerpt: {
      ko: "아이폰 17 ‘글로우업’, Z 트라이폴드, Find X9 프로 배터리 등 — 연말 영상 요약으로 구매 힌트만 뽑았습니다.",
      en: "iPhone 17 glow-up, Z Trifold, Find X9 Pro battery endurance, and more — buying hints from the year-end awards video.",
    },
    publishedAt: "2026-11-05",
    readingMinutes: 7,
    searchTags: [
      "mrwhosetheboss",
      "best smartphones 2025",
      "iphone 17",
      "아이폰 17",
      "galaxy z trifold",
      "vivo x300",
      "oppo find x9",
      "pixel 9a",
    ],
    sources: [
      {
        name: "Mrwhosetheboss",
        url: "https://www.youtube.com/watch?v=Y9JF_yYTNlw",
        kind: "youtube",
        videoTitle: "The BEST Smartphones of 2025!",
      },
    ],
    sections: [
      {
        heading: {
          ko: "편집 요약 (출처 기반)",
          en: "Editorial summary (sourced)",
        },
        body: {
          ko: "NookVolt 자체 연말 랭킹이 아닙니다. Mrwhosetheboss 영상 「The BEST Smartphones of 2025!」(https://www.youtube.com/watch?v=Y9JF_yYTNlw, 2025년 12월경)의 카테고리 수상을 구매자 관점으로 다시 정리한 브리핑입니다. 대본을 베끼지 않았고, 수상 이유의 원 영상에서 확인하세요.",
          en: "Not a NookVolt year-end ranking. This briefing rewrites category awards from Mrwhosetheboss’s “The BEST Smartphones of 2025!” (https://www.youtube.com/watch?v=Y9JF_yYTNlw, ~Dec 2025) for buyers. We do not copy the script — verify award rationale in the source.",
        },
      },
      {
        heading: {
          ko: "눈에 띄는 수상",
          en: "Standout awards",
        },
        body: {
          ko: "글로우업(가장 뚜렷한 개선)은 기본형 아이폰 17 — 프로모션·저장 용량 등 ‘사도 되는 타이밍’이 뚜렷해졌다는 취지입니다(폴드7도 후보로 언급). 아웃사이드 더 박스에는 갤럭시 Z 트라이폴드 — 10인치급 와이드 내부 화면이 폴더블 대가를 비로소 정당화한다는 논지. 배터리 챔피언 쪽은 듀얼셀·대용량 진영 중 Oppo Find X9 프로를 높이 사고, 영상·사진 특화는 Vivo X300 프로, 간편함은 Pixel 9a, 게이밍은 Red Magic 11 프로 계열이 호명됩니다.",
          en: "Glow-up goes to base iPhone 17 — ProMotion and storage make it an obvious upgrade window (Fold 7 also mentioned). Outside-the-box: Galaxy Z Trifold, whose ~10\" wide inner panel finally justifies foldable trade-offs. Battery champ lean is Oppo Find X9 Pro among dual-cell endurance phones; filmmaker nod to Vivo X300 Pro; simple pick Pixel 9a; gaming Red Magic 11 Pro-class.",
        },
      },
      {
        heading: {
          ko: "피해야 할 함정",
          en: "Traps to avoid",
        },
        body: {
          ko: "영상은 초박형 계열(예: 갤럭시 S25 엣지·아이폰 에어류)을 ‘예쁜 함정’으로 묶어, 배터리·내구성에서 오래 쓰기 어렵다고 봅니다. ‘숫자만 큰 배터리’보다 최적화·충전·일상 추천 가능성까지 본다는 점도 브리핑 포인트입니다. EU 등 지역별 배터리 용량 차이가 있을 수 있으니 구매 전 현지 스펙을 확인하세요.",
          en: "Ultra-thins (e.g. Galaxy S25 Edge / iPhone Air-class) are framed as pretty traps on battery and durability. Capacity alone loses to optimization, charging, and whether he would still recommend the phone. Confirm regional battery SKUs before you buy.",
        },
      },
      {
        heading: { ko: "NookVolt 시각", en: "NookVolt take" },
        body: {
          ko: "연말 어워드는 ‘만능 1등’이 아니라 용도별 힌트입니다. 업그레이드 타이밍·폴더블 실험·배터리·촬영·쉬운 UX 중 본인 우선순위를 고른 뒤, 해당 수상작과 현지 가격·AS를 대조하세요. 상세 카메라는 원 영상과 개별 리뷰를 함께 보세요.",
          en: "Awards are job hints, not one universal winner. Pick your priority — upgrade timing, foldable experiment, endurance, filming, or simplicity — then match local price and support. Dig cameras in the source video and dedicated reviews.",
        },
      },
    ],
    verdict: {
      ko: "용도별 숏리스트용 브리핑. 초박형만 보고 사지 마세요.",
      en: "Use it as a shortlist by job — do not buy ultra-thin on looks alone.",
    },
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0,
  );
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  return getAllArticles().filter((article) => {
    const haystack = [
      article.slug,
      article.category,
      article.title.ko,
      article.title.en,
      article.excerpt.ko,
      article.excerpt.en,
      ...(article.searchTags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return tokens.every((token) => haystack.includes(token));
  });
}
