import type { ReviewCategorySlug } from "./review-categories";
import type { LocalizedString } from "@/i18n/types";

export type ReviewSource = {
  name: string;
  url: string;
  kind: "youtube" | "article";
};

export type ProductReviewSection = {
  heading: LocalizedString;
  body: LocalizedString;
};

export type ProductReview = {
  slug: string;
  category: ReviewCategorySlug;
  productName: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  publishedAt: string;
  readingMinutes: number;
  sections: ProductReviewSection[];
  sources: ReviewSource[];
  verdict: LocalizedString;
  /** Extra KO/EN tokens for search (brand aliases, nicknames). */
  searchTags?: string[];
};

/**
 * NookVolt product-review catalog.
 * Summaries are original editorial synthesis citing public reviews —
 * not lab tests by NookVolt unless stated otherwise.
 */
const productReviews: ProductReview[] = [
  // ── Phones ──────────────────────────────────────────────
  {
    slug: "galaxy-s25-ultra",
    category: "phones",
    productName: { ko: "갤럭시 S25 울트라", en: "Galaxy S25 Ultra" },
    title: {
      ko: "갤럭시 S25 울트라: ‘울트라’의 기준이 흔들릴 때",
      en: "Galaxy S25 Ultra: when “Ultra” stops meaning maxed-out",
    },
    summary: {
      ko: "펜·줌·배터리는 여전히 강하지만, 올해는 경쟁 대비 ‘올인’ 느낌이 약해졌다는 평가가 많습니다.",
      en: "Pen, zoom, and battery still deliver — but many reviewers say this Ultra left headroom on the table.",
    },
    publishedAt: "2026-10-12",
    readingMinutes: 8,
    searchTags: ["samsung", "s25", "삼성", "울트라", "s pen"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD)",
        url: "https://www.youtube.com/watch?v=a4NJNdHqs_I",
        kind: "youtube",
      },
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/samsung_galaxy_s25_ultra-review-2793.php",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "NookVolt는 전문 하드웨어 랩을 운영하지 않습니다. 아래는 Marques Brownlee(MKBHD) 영상 리뷰와 GSMArena 벤치/실측 글을 바탕으로 한 구매용 요약입니다. MKBHD는 S25 울트라가 여전히 좋은 폰이지만 실리콘 카바이드 배터리·IP69·Qi2 자석 등 ‘울트라답게’ 기대되던 업그레이드를 건너뛰었다고 지적합니다. GSMArena 역시 디자인·배터리 효율·카메라 전반은 칭찬하면서도 S Pen 블루투스 기능 축소와 IP68 수준 방수를 단점으로 적습니다.",
          en: "NookVolt does not run a hardware lab. This is a buying-focused synthesis of Marques Brownlee’s (MKBHD) video review and GSMArena’s measured write-up. MKBHD calls the phone still excellent but notes skipped “Ultra” upgrades (silicon-carbide battery, IP69, Qi2 magnets). GSMArena praises design, endurance, and cameras while flagging the S Pen’s lost Bluetooth features and “basic” IP68 sealing.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "필기·캡처·줌 촬영을 실제로 쓰는 사람, 삼성/안드로이드 생태계에 이미 있는 사람에게는 여전히 설득력 있습니다. ‘가장 완성도 높은 플래그십’만 원하거나 가벼운 폰을 원하면 경쟁기·플러스 모델을 함께 보세요. MKBHD의 표현대로, 올해는 ‘다른 폰을 골라도 된다’는 문이 열려 있습니다.",
          en: "Still persuasive if you use stylus work, capture markup, and real zoom. If you only want the most complete flagship—or a light phone—compare rivals and smaller Galaxies. As MKBHD puts it, the door is open to buy something else this year.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "S Pen 원격 셔터/제스처가 필요하면 전작(S24 울트라) 할인도 현실적인 대안입니다(GSMArena 비교 논지와 맞습니다). AI 기능 유료화 시점·가격은 제조사 공지를 확인하세요. 무게와 한손 사용은 매장에서 직접 시험하는 편이 안전합니다.",
          en: "If Bluetooth S Pen shutter/gestures matter, a discounted S24 Ultra remains a serious option (aligned with GSMArena’s comparison). Confirm AI feature pricing timelines from Samsung. Try weight and one-hand reach in a store.",
        },
      },
    ],
    verdict: {
      ko: "펜·줌 실사용자에게 추천. ‘올해 최고’만 찾는다면 비교표를 더 보세요.",
      en: "Recommended if you’ll use the pen and zoom. Hunting for a clear “best of year”? Keep comparing.",
    },
  },
  {
    slug: "iphone-16-pro",
    category: "phones",
    productName: { ko: "아이폰 16 프로", en: "iPhone 16 Pro" },
    title: {
      ko: "아이폰 16 프로: 카메라 컨트롤과 ‘업그레이드할 이유’",
      en: "iPhone 16 Pro: Camera Control and when an upgrade is worth it",
    },
    summary: {
      ko: "영상·생태계·중고 가치는 강점. MKBHD는 Pro가 빛나는 지점과 매년 교체할 필요는 없다는 점을 함께 짚습니다.",
      en: "Video, ecosystem, and resale stay strong. MKBHD highlights where Pro wins — and when yearly upgrades are optional.",
    },
    publishedAt: "2026-09-24",
    readingMinutes: 7,
    searchTags: ["apple", "아이폰", "16 pro", "애플"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD)",
        url: "https://www.youtube.com/watch?v=MRtg6A1f2Ko",
        kind: "youtube",
      },
      {
        name: "GSMArena (Pixel 9 Pro context)",
        url: "https://www.gsmarena.com/google_pixel_9_pro-review-2745.php",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "MKBHD의 iPhone 16/16 Pro 리뷰(Times Have Changed)는 카메라·배터리·Camera Control 버튼, 그리고 Apple Intelligence 시점의 완성도를 중심으로 ‘언제 살지’를 이야기합니다. Pro는 영상 안정성·티타늄 빌드·카메라 하드웨어에서 기본 모델과 확실히 갈라지지만, 직전 Pro를 쓰는 사람에게는 연간 교체 설득력이 약해질 수 있다는 톤입니다. NookVolt는 이를 안드로이드 플래그십(예: GSMArena의 Pixel 9 Pro 실측)과 나란히 놓고, 생태계가 이미 애플이면 마찰이 적다는 구매 프레임으로 정리합니다.",
          en: "MKBHD’s iPhone 16/16 Pro review (“Times Have Changed”) centers camera, battery, the Camera Control button, and how finished Apple Intelligence felt at review time. Pro separates itself on video, titanium build, and camera hardware — but yearly upgrades from a recent Pro may feel optional. NookVolt pairs that with Android flagship context (e.g. GSMArena’s Pixel 9 Pro testing): if you’re already in Apple’s ecosystem, friction stays low.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "에어팟·맥·애플워치를 이미 쓰는 사람, 가족 영상·장기 중고 가치를 중시하는 사람에게 유리합니다. 카메라 AI·순정 안드로이드·가격 대비 하드웨어를 우선하면 Pixel 계열을 함께 보세요.",
          en: "Best when you already live in AirPods, Mac, and Apple Watch — or prioritize family video and resale. Prefer camera AI, near-stock Android, and hardware value? Put Pixel next to it.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "Camera Control은 습관이 되기까지 연습이 필요합니다. Pro Max 크기는 전작보다 더 커졌다는 현장 피드백이 있으니 매장에서 한 손으로 들어 보세요. AI 기능 지원 국가·언어 일정을 확인하세요.",
          en: "Camera Control takes practice. Pro Max grew again — try one-handed hold in a store. Confirm Apple Intelligence language/region timing for your market.",
        },
      },
    ],
    verdict: {
      ko: "애플 생태계면 Pro. 매년 교체는 필수가 아닙니다.",
      en: "Choose Pro if you’re in Apple’s orbit. Annual upgrades are optional.",
    },
  },
  {
    slug: "pixel-9-pro",
    category: "phones",
    productName: { ko: "픽셀 9 프로", en: "Pixel 9 Pro" },
    title: {
      ko: "픽셀 9 프로: 작은 플래그십에 줌까지",
      en: "Pixel 9 Pro: a compact flagship that kept the zoom",
    },
    summary: {
      ko: "GSMArena 기준으로 콤팩트 바디에 5배 망원·밝은 디스플레이·장기 업데이트가 강점. Tensor 지속 성능은 약점.",
      en: "GSMArena: compact body with 5x tele, bright display, long updates — Tensor sustained performance is the caveat.",
    },
    publishedAt: "2026-09-20",
    readingMinutes: 7,
    searchTags: ["google", "pixel", "구글", "픽셀"],
    sources: [
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/google_pixel_9_pro-review-2745.php",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "GSMArena의 Pixel 9 Pro 리뷰는 이 모델이 ‘작은 플래그십’에 Pro 기능을 거의 다 담았다고 평가합니다. 48MP 5배 망원, 밝은 LTPO OLED, Wi-Fi 7, 7년 업데이트, 인상적인 카메라·셀피가 장점 목록에 올라갑니다. 반대로 미끄러운 뒷면, Tensor G4의 피크/지속 성능 약점은 명확한 단점입니다. NookVolt는 이를 ‘구글 서비스·사진 AI 중심 사용자용 콤팩트 플래그십’으로 요약합니다.",
          en: "GSMArena’s Pixel 9 Pro review frames it as a compact flagship that still packs Pro hardware: 48MP 5x tele, bright LTPO OLED, Wi-Fi 7, seven years of updates, and strong stills/selfies. Slippery glass and Tensor G4 peak/sustained performance are the clear cons. NookVolt’s takeaway: compact flagship for Google-centric, photo-AI-first buyers.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "한 손에 들어오는 플래그십, 메시지·포토·워크스페이스 중심 생활, ‘큰 줌이 있는 작은 폰’이 필요하면 후보입니다. 게임·지속 고성능이 우선이면 다른 스냅드래곤/애플 칩셋 기기를 보세요.",
          en: "Fits one-hand flagship needs, Messages/Photos/Workspace life, and “small phone with real zoom.” Gaming or sustained peak CPU/GPU? Look at Snapdragon or Apple silicon rivals.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "유선 충전 와트는 보수적입니다(GSMArena 기준 약 27W급). 케이스 착용을 전제로 잡는 편이 좋습니다. Pro XL과의 차이는 크기·스피커 위주이니, 큰 화면이 필요하면 XL을 비교하세요.",
          en: "Wired charging is modest (~27W class per GSMArena). Plan on a case. Vs Pro XL, size and speakers dominate — pick XL if you want the bigger canvas.",
        },
      },
    ],
    verdict: {
      ko: "콤팩트+줌+구글 AI면 추천. 지속 성능은 기대치 조절.",
      en: "Recommended for compact + zoom + Google AI. Temper sustained-performance expectations.",
    },
  },
  {
    slug: "nothing-phone-2a",
    category: "phones",
    productName: { ko: "낫싱 폰 (2a 세대 기준)", en: "Nothing Phone (2a-class)" },
    title: {
      ko: "중급 안드로이드: 디자인과 ‘충분함’의 균형",
      en: "Midrange Android: design personality vs enough performance",
    },
    summary: {
      ko: "플래그십이 부담일 때, 깔끔한 소프트웨어와 개성 있는 디자인을 고르는 현실적인 축입니다.",
      en: "When flagships feel overbuilt — clean software and distinctive design as a practical axis.",
    },
    publishedAt: "2026-08-15",
    readingMinutes: 5,
    searchTags: ["nothing", "중급", "midrange", "glyph"],
    sources: [
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/",
        kind: "article",
      },
      {
        name: "Marques Brownlee (MKBHD) channel",
        url: "https://www.youtube.com/@mkbhd",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "중급 안드로이드는 스펙표보다 ‘소프트웨어가 깨끗한지’, ‘2–3년 뒤에도 쓸 만한지’가 중요합니다. GSMArena류 실측 사이트에서 배터리·충전·카메라 샘플을 확인하고, MKBHD 등 크리에이터 리뷰에서는 UI 완성도와 카메라 튜닝 체감을 참고하세요. NookVolt는 특정 SKU 광고가 아니라, 중급을 고를 때 플래그십과 같은 체크리스트(업데이트 기간, 수리성, 중고 가치)를 적용하라고 권합니다.",
          en: "Midrange Android is less about peak specs and more about clean software and whether it still feels fine in 2–3 years. Use measured sites like GSMArena for battery/charging/camera samples; use creator reviews (e.g. MKBHD’s channel) for UI polish and camera tuning feel. NookVolt’s guidance: apply flagship-grade checks — update window, repairability, resale — even on midrange picks.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "예산 상한이 명확하고, 개성 있는 디자인·가벼운 커스텀 UI를 원하는 사람. 망원 줌·최고 영상·최장 업데이트가 필수면 플래그십으로 올리세요.",
          en: "Clear budget caps and a taste for distinctive design / lighter custom UI. Need tele zoom, top video, or longest updates? Step up to a flagship.",
        },
      },
    ],
    verdict: {
      ko: "중급은 ‘부족함’보다 ‘충분함’을 고르세요.",
      en: "Buy midrange for enough — not for almost-flagship FOMO.",
    },
  },

  // ── Laptops & Tablets ───────────────────────────────────
  {
    slug: "macbook-air-m3",
    category: "laptops-tablets",
    productName: { ko: "맥북 에어 13 M3", en: "MacBook Air 13 M3" },
    title: {
      ko: "맥북 에어 M3: 일상용 노트북의 기준점",
      en: "MacBook Air M3: the everyday notebook baseline",
    },
    summary: {
      ko: "Notebookcheck는 성능·배터리·완성도를 높이 평가. 팬리스라 지속 부하와 닫힌 상태 외부 모니터 사용은 한계가 있습니다.",
      en: "Notebookcheck rates speed, battery, and build highly — fanless design limits sustained load and lid-closed multi-monitor work.",
    },
    publishedAt: "2026-09-10",
    readingMinutes: 7,
    searchTags: ["apple", "macbook", "맥북", "m3", "에어"],
    sources: [
      {
        name: "Notebookcheck",
        url: "https://www.notebookcheck.net/Apple-MacBook-Air-13-M3-review-A-lot-faster-and-with-Wi-Fi-6E.811129.0.html",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Notebookcheck의 MacBook Air 13 M3 리뷰(약 92% ‘very good’)는 M2 대비 체감 성능 향상, Wi-Fi 6E, 긴 배터리(WLAN 테스트에서 15시간대), 선명한 Liquid Retina를 강점으로 적습니다. 동시에 팬리스 설계로 지속 CPU/GPU 부하에서 스로틀링이 나타나며, 포트는 Thunderbolt/USB-C 중심이라 허브가 자주 필요합니다. NookVolt는 ‘문서·브라우저·영상 시청·가벼운 편집’에 최적, ‘장시간 렌더·닫힌 뚜껑+다중 모니터’에는 Pro 계열을 권하는 쪽으로 요약합니다.",
          en: "Notebookcheck’s MacBook Air 13 M3 review (~92% “very good”) highlights faster everyday performance vs M2, Wi-Fi 6E, excellent battery (15+ hours in their WLAN test), and a sharp Liquid Retina panel. Fanless cooling means throttling under sustained CPU/GPU load; ports stay Thunderbolt/USB-C-centric, so hubs are common. NookVolt summary: excellent for docs/browsing/video/light edit — step to Pro for long renders or lid-closed multi-monitor desks.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "학생·지식근로자·여행 가방에 넣는 주력 노트북. 영상 내보내기·3D·로컬 LLM을 오래 돌리면 냉각이 있는 MacBook Pro를 보세요.",
          en: "Students, knowledge work, and a one-bag primary laptop. Long exports, 3D, or local LLM sessions point to a cooled MacBook Pro.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "기본 저장·메모리는 업그레이드가 비싸니 처음부터 여유 있게. 60Hz 디스플레이가 거슬리면 Pro의 ProMotion을 비교하세요. Windows 전용 소프트웨어가 있으면 호환부터 확인합니다.",
          en: "RAM/SSD upgrades are pricey — buy headroom day one. If 60Hz bothers you, compare ProMotion on Pro. Confirm Windows-only software needs first.",
        },
      },
    ],
    verdict: {
      ko: "일상·휴대 주력이면 Air. 지속 부하면 Pro.",
      en: "Air for daily carry. Pro for sustained load.",
    },
  },
  {
    slug: "ipad-pro-m4",
    category: "laptops-tablets",
    productName: { ko: "아이패드 프로 M4", en: "iPad Pro M4" },
    title: {
      ko: "아이패드 프로 M4: 디스플레이는 마법, OS 한계는 현실",
      en: "iPad Pro M4: magical display, familiar OS limits",
    },
    summary: {
      ko: "Linus Tech Tips는 탠덤 OLED·얇기에 감탄하면서도 iPadOS 생산성 경계를 함께 이야기합니다.",
      en: "Linus Tech Tips marvels at tandem OLED thinness — and still talks about iPadOS productivity boundaries.",
    },
    publishedAt: "2026-08-20",
    readingMinutes: 6,
    searchTags: ["ipad", "아이패드", "m4", "apple", "tablet"],
    sources: [
      {
        name: "Linus Tech Tips",
        url: "https://www.youtube.com/watch?v=-T0MGehwWvE",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Linus Tech Tips의 M4 iPad Pro 인상 영상은 탠덤 OLED의 밝기·블랙, 극단적으로 얇은 본체, M4 성능을 강조합니다. 동시에 Apple Pencil Pro 호환 범위, 액세서리 비용, iPadOS가 여전히 ‘노트북 대체’를 완전 대체하지는 않는다는 현실적인 톤을 유지합니다. NookVolt는 ‘드로잉·읽기·미디어·가벼운 제작’에는 최상위, ‘파일·창·전문 데스크톱 앱 워크플로’에는 맥/윈도우 노트북을 남기라고 정리합니다.",
          en: "Linus Tech Tips’ M4 iPad Pro impressions highlight tandem OLED brightness/blacks, extreme thinness, and M4 performance — while staying honest about Pencil Pro compatibility scope, accessory cost, and iPadOS still not fully replacing a laptop. NookVolt: top-tier for draw/read/media/light create; keep a Mac/Windows laptop for file-heavy, multi-window desktop apps.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "디지털 아트·노트·PDF·영상 시청이 주력이고, 이미 애플 펜슬 워크플로가 있는 사람. 코딩 IDE·복잡한 스프레드시트·다중 창이 하루의 중심이면 노트북이 먼저입니다.",
          en: "Digital art, notes, PDFs, and video — especially if you already have an Apple Pencil workflow. If IDEs, heavy spreadsheets, and multi-window days dominate, buy a laptop first.",
        },
      },
    ],
    verdict: {
      ko: "최고의 태블릿. 최고의 노트북은 아닙니다.",
      en: "Best-in-class tablet. Not automatically your only computer.",
    },
  },
  {
    slug: "framework-laptop-13",
    category: "laptops-tablets",
    productName: { ko: "프레임워크 랩톱 13", en: "Framework Laptop 13" },
    title: {
      ko: "프레임워크 13: 수리·업그레이드가 구매 이유일 때",
      en: "Framework 13: when repairability is the feature",
    },
    summary: {
      ko: "모듈형 포트·자가 수리·업그레이드 경로를 사는 제품. 완성된 ‘닫힌’ 프리미엄 울트라북과는 다른 축입니다.",
      en: "You buy modular ports, self-repair, and upgrade paths — a different axis than sealed premium ultrabooks.",
    },
    publishedAt: "2026-07-28",
    readingMinutes: 6,
    searchTags: ["framework", "repair", "모듈", "수리"],
    sources: [
      {
        name: "Linus Tech Tips",
        url: "https://www.youtube.com/@LinusTechTips",
        kind: "youtube",
      },
      {
        name: "Notebookcheck",
        url: "https://www.notebookcheck.net/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Framework는 Linus Tech Tips 등 하드웨어 채널에서 ‘열어보고 고치고 바꿀 수 있는 노트북’으로 자주 다뤄집니다. Notebookcheck류 벤치 사이트에서는 세대별 CPU·디스플레이 옵션의 실측을 확인하세요. NookVolt 요약: 스펙 최고점보다 소유 기간·부품 교체·포트 구성을 스스로 정하고 싶은 사람에게 맞습니다. 출고 완성도와 얇기만 보면 Air/XPS 쪽이 유리한 경우가 많습니다.",
          en: "Framework shows up often on Linus Tech Tips and similar channels as the laptop you can open, fix, and reconfigure. Check generation-specific CPU/display measurements on sites like Notebookcheck. NookVolt: buy it for ownership length, part swaps, and DIY port layouts — not peak thinness. Sealed Air/XPS-class machines still win on out-of-box polish.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "RAM/SSD/포트를 직접 관리하고, 전자폐기물을 줄이고 싶은 DIY 성향 사용자. ‘그냥 켜서 쓰기만’ 원하면 완제품 울트라북이 덜 피곤합니다.",
          en: "DIY users who want to manage RAM/SSD/ports and keep machines longer. If you only want power-on-and-work, a finished ultrabook is less friction.",
        },
      },
    ],
    verdict: {
      ko: "수리·업그레이드가 목적이면 Framework.",
      en: "Choose Framework when repair/upgrade is the point.",
    },
  },
  {
    slug: "lenovo-thinkpad-x1-carbon",
    category: "laptops-tablets",
    productName: { ko: "씽크패드 X1 카본", en: "ThinkPad X1 Carbon" },
    title: {
      ko: "X1 카본: 비즈니스 울트라북의 손맛",
      en: "X1 Carbon: the business ultrabook muscle memory",
    },
    summary: {
      ko: "키보드·트랙포인트·내구성 이미지가 강한 업무용 축. 세대별 디스플레이·배터리 실측은 Notebookcheck를 확인하세요.",
      en: "Keyboard, TrackPoint, and durability-first workhorse. Verify each generation’s display/battery on Notebookcheck.",
    },
    publishedAt: "2026-07-12",
    readingMinutes: 5,
    searchTags: ["lenovo", "thinkpad", "씽크패드", "x1"],
    sources: [
      {
        name: "Notebookcheck",
        url: "https://www.notebookcheck.net/",
        kind: "article",
      },
      {
        name: "Wirecutter (laptops hub)",
        url: "https://www.nytimes.com/wirecutter/electronics/computers/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "ThinkPad X1 Carbon은 Notebookcheck 등에서 세대마다 키보드 품질·무게·포트 구성으로 평가되는 비즈니스 라인입니다. Wirecutter의 노트북/주변기기 가이드도 ‘업무용 선택’을 예산·용도별로 나눕니다. NookVolt는 macOS가 필요 없고, 긴 문서 타자와 도킹 환경이 중요한 사람에게 X1을 후보로 올립니다. OLED/고해상도 옵션과 배터리 트레이드오프는 해당 세대 리뷰 숫자를 직접 보세요.",
          en: "ThinkPad X1 Carbon is judged generation-by-generation on Notebookcheck for keyboard, weight, and ports. Wirecutter’s computer guides also split work laptops by budget and job. NookVolt shortlists X1 when you don’t need macOS and you live in long documents plus docks. Check that generation’s OLED/high-res vs battery numbers before buying.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "Windows 업무, VPN·도킹, 키보드 타자량이 많은 직장인. 창작·영상 색역이 최우선이면 크리에이터용 라인(또는 맥)을 비교하세요.",
          en: "Windows work, VPN/dock life, and heavy typing. Color-critical creative work may fit creator lines (or Mac) better.",
        },
      },
    ],
    verdict: {
      ko: "타자·도킹 중심 Windows면 X1 계열을 검토.",
      en: "Typing-and-dock Windows life → shortlist X1-class.",
    },
  },

  // ── Monitors ────────────────────────────────────────────
  {
    slug: "dell-ultrasharp-u2723qe",
    category: "monitors",
    productName: { ko: "델 UltraSharp U2723QE", en: "Dell UltraSharp U2723QE" },
    title: {
      ko: "델 U2723QE: 4K 업무 모니터의 무난한 정답",
      en: "Dell U2723QE: the sensible 4K work monitor",
    },
    summary: {
      ko: "Wirecutter·RTINGS 계열 평가에서 색·USB-C·허브가 강점. 60Hz라 게이밍 주력은 아닙니다.",
      en: "Wirecutter/RTINGS-class praise for color, USB-C, and hub features — 60Hz keeps it out of gaming-first desks.",
    },
    publishedAt: "2026-09-01",
    readingMinutes: 6,
    searchTags: ["dell", "ultrasharp", "4k", "모니터", "u2723qe"],
    sources: [
      {
        name: "RTINGS",
        url: "https://www.rtings.com/monitor/reviews/dell/u2723qe",
        kind: "article",
      },
      {
        name: "Wirecutter — Best 4K Monitors",
        url: "https://www.nytimes.com/wirecutter/reviews/best-4k-monitors/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter의 4K 모니터 가이드는 Dell UltraSharp U2723QE를 색 정확도·노트북 급전·생산성 연결성 측면에서 상위에 올리는 경우가 많습니다. RTINGS의 U2723QE 리뷰는 IPS Black 대비·캘리브레이션·USB-C(약 90W급 PD)·KVM/허브 기능을 수치로 보여 줍니다. 새로고침 60Hz·VRR 부재는 게임 모니터와 목적이 다름을 분명히 합니다. NookVolt는 ‘문서+브라우저+가벼운 사진’ 데스크의 4K 기본값으로 정리합니다.",
          en: "Wirecutter’s 4K monitor guide often elevates the Dell UltraSharp U2723QE for color accuracy, laptop charging, and productivity connectivity. RTINGS’ review covers IPS Black contrast, calibration, USB-C (~90W PD), and KVM/hub features in numbers. 60Hz and no VRR make the gaming trade-off explicit. NookVolt: default 4K pick for docs/browser/light photo desks.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "노트북 한 케이블 도킹, 텍스트 가독성, 사무/콘텐츠 시청. 144Hz+ 경쟁 게임을 주력하면 게이밍 패널로 가세요.",
          en: "One-cable laptop docking, text clarity, office/media. Competitive 144Hz+ gaming needs a different panel.",
        },
      },
    ],
    verdict: {
      ko: "업무 4K의 안전한 선택. 게임은 다른 제품.",
      en: "Safe 4K workhorse. Not your esports display.",
    },
  },
  {
    slug: "lg-c4-42-oled",
    category: "monitors",
    productName: { ko: "LG C4 42 OLED", en: "LG C4 42\" OLED" },
    title: {
      ko: "LG C4 42\": TV인가, 대형 모니터인가",
      en: "LG C4 42\": TV that wants to be a monitor",
    },
    summary: {
      ko: "RTINGS는 콘트라스트·HDR·게임 입력에서 강점을 확인. 밝기·인체공학·번인 관리는 타협입니다.",
      en: "RTINGS confirms contrast, HDR, and gaming inputs — brightness, ergonomics, and burn-in care are the trade-offs.",
    },
    publishedAt: "2026-08-22",
    readingMinutes: 7,
    searchTags: ["lg", "oled", "c4", "티비", "tv"],
    sources: [
      {
        name: "RTINGS — LG C4 OLED (TV)",
        url: "https://www.rtings.com/tv/reviews/lg/c4-oled",
        kind: "article",
      },
      {
        name: "RTINGS — LG C4 42 OLED (as monitor)",
        url: "https://www.rtings.com/monitor/reviews/lg/42-c4-oled",
        kind: "article",
      },
      {
        name: "RTINGS YouTube",
        url: "https://www.youtube.com/watch?v=Hq6VImCrqnY",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "RTINGS는 LG C4를 TV와 모니터(42\") 관점에서 각각 측정합니다. OLED 특유의 블랙·HDR 하이라이트, HDMI 2.1 입력, 낮은 입력 지연(게임 옵티마이저)이 매력입니다. 42\"는 Brightness Booster가 없어 큰 사이즈보다 밝기가 보수적이고, TV 스탠드라 높낮이/피벗이 모니터답지 않으며, 정적 UI 번인 관리가 필요합니다. NookVolt는 ‘어두운 방에서 영화+콘솔+가끔 PC’에 추천, ‘밝은 사무실 종일 Excel’에는 IPS/미니LED 업무 모니터를 권합니다.",
          en: "RTINGS measures the LG C4 as both a TV and a 42\" monitor. OLED blacks, HDR highlights, HDMI 2.1, and low lag (Game Optimizer) are the draw. The 42\" lacks Brightness Booster vs larger sizes, the TV stand isn’t monitor-ergonomic, and static UI burn-in needs care. NookVolt: great for dark-room movies/console/occasional PC — not for bright-office all-day spreadsheets.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "콘솔·PC 게임을 큰 화면으로, 영화 감상 비중이 높은 책상. 문서 작업이 하루 8시간이면 27–32\" IPS/미니LED가 눈과 자세에 유리합니다.",
          en: "Console/PC gaming on a big canvas plus movie nights. Eight-hour document days favor 27–32\" IPS/Mini-LED for eyes and posture.",
        },
      },
    ],
    verdict: {
      ko: "미디어·게임 데스크용 대형 OLED. 순수 업무용이면 신중히.",
      en: "Large OLED for media/gaming desks. Think twice for pure office work.",
    },
  },
  {
    slug: "benq-gw2486tc",
    category: "monitors",
    productName: { ko: "BenQ GW2486TC", en: "BenQ GW2486TC" },
    title: {
      ko: "BenQ GW2486TC: 예산형 USB-C 모니터",
      en: "BenQ GW2486TC: budget USB-C done right",
    },
    summary: {
      ko: "Wirecutter 예산 모니터 픽. 1080p·USB-C 급전·조정 스탠드로 ‘노트북 옆 두 번째 화면’에 실용적입니다.",
      en: "Wirecutter budget pick — 1080p, USB-C charging, and an adjustable stand for a practical laptop companion.",
    },
    publishedAt: "2026-08-05",
    readingMinutes: 5,
    searchTags: ["benq", "budget", "usb-c", "예산"],
    sources: [
      {
        name: "Wirecutter — Best Budget Monitors",
        url: "https://www.nytimes.com/wirecutter/reviews/best-budget-monitors/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter의 예산 모니터 가이드는 BenQ GW2486TC를 USB-C로 노트북을 충전하면서도 쓸 만한 화질·조립 품질을 제공하는 상단 픽으로 소개합니다. 24인치급 1080p·100Hz 전후 사양으로, 4K 선명도나 광색역이 목표가 아닐 때 ‘책상 위 두 번째 화면’으로 적합합니다. NookVolt는 학생·재택 초기 세팅·듀얼 모니터의 보조 화면에 추천합니다.",
          en: "Wirecutter’s budget monitor guide positions the BenQ GW2486TC as a top pick that can charge a laptop over USB-C while staying pleasant and well built. Around 24\" 1080p / ~100Hz, it’s a second-screen tool — not a 4K or wide-gamut creative display. NookVolt: students, first WFH desks, and dual-monitor side screens.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "예산을 지키면서 USB-C 허브 모니터가 필요한 사람. 사진/영상 색 작업이면 UltraSharp급으로 올리세요.",
          en: "Anyone who needs USB-C hub convenience on a budget. Color-critical photo/video → step up to UltraSharp-class.",
        },
      },
    ],
    verdict: {
      ko: "가성비 보조 모니터로 추천.",
      en: "Recommended as a value side monitor.",
    },
  },
  {
    slug: "msi-mag-274qrf-qd",
    category: "monitors",
    productName: { ko: "MSI MAG 게이밍 모니터 (274QRF급)", en: "MSI MAG gaming monitor (274QRF-class)" },
    title: {
      ko: "게이밍 모니터: 주사율과 가격의 교차점",
      en: "Gaming monitors: where refresh rate meets price",
    },
    summary: {
      ko: "Wirecutter 게이밍 모니터 가이드가 짚는 축 — 1440p·고주사율·합리적 가격. 패널 세대는 출시 시점에 확인하세요.",
      en: "Wirecutter’s gaming axis: 1440p, high refresh, sane price. Confirm the exact panel generation at purchase time.",
    },
    publishedAt: "2026-07-30",
    readingMinutes: 5,
    searchTags: ["msi", "gaming", "1440p", "게이밍"],
    sources: [
      {
        name: "Wirecutter — Best Gaming Monitors",
        url: "https://www.nytimes.com/wirecutter/electronics/computers/",
        kind: "article",
      },
      {
        name: "RTINGS",
        url: "https://www.rtings.com/monitor/reviews/best/gaming-monitors-4k",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter와 RTINGS는 게이밍 모니터를 ‘해상도×주사율×응답·잔상×가격’으로 나눕니다. MSI MAG 274QRF 계열은 1440p 고주사율 가성비 구간에서 자주 언급되는 유형입니다. NookVolt는 GPU가 1440p를 버틸 때 이 구간을 추천하고, 콘솔 4K/120 또는 OLED 블랙이 목표면 상급 패널로 올리라고 적습니다. 구매 직전 RTINGS/제조사 스펙에서 HDMI 2.1·VRR·HDR 실측을 확인하세요.",
          en: "Wirecutter and RTINGS slice gaming monitors by resolution × refresh × motion clarity × price. MSI MAG 274QRF-class panels often sit in the 1440p high-refresh value band. NookVolt recommends that band when your GPU can drive 1440p; chase HDMI 2.1 console 4K/120 or OLED blacks only if that’s the real goal. Verify HDMI 2.1, VRR, and HDR measurements on RTINGS/spec sheets before buying.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "PC 경쟁/액션 게임 주력, 1440p GPU. 색보정·문서 가독성이 먼저면 IPS 업무 모니터가 낫습니다.",
          en: "PC competitive/action gaming with a 1440p-capable GPU. Color work and text-first desks → IPS productivity panels.",
        },
      },
    ],
    verdict: {
      ko: "게이밍 가성비 구간을 먼저 보고, OLED는 필요에 따라.",
      en: "Start in the value high-refresh band; OLED only if you need it.",
    },
  },

  // ── Headphones ──────────────────────────────────────────
  {
    slug: "sony-wh-1000xm5",
    category: "headphones",
    productName: { ko: "소니 WH-1000XM5", en: "Sony WH-1000XM5" },
    title: {
      ko: "소니 WH-1000XM5: ANC 헤드폰의 기본 비교군",
      en: "Sony WH-1000XM5: the ANC baseline everyone compares",
    },
    summary: {
      ko: "RTINGS 측정 기준으로 노이즈 캔슬링·앱 편의성이 강점인 오버이어. 접이식·착용감은 개인차가 큽니다.",
      en: "RTINGS-tested ANC and app convenience leaders in over-ear — fold/fit are personal.",
    },
    publishedAt: "2026-09-05",
    readingMinutes: 6,
    searchTags: ["sony", "xm5", "소니", "anc", "헤드폰"],
    sources: [
      {
        name: "RTINGS",
        url: "https://www.rtings.com/headphones/reviews/sony/wh-1000xm5-wireless",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "RTINGS의 Sony WH-1000XM5 리뷰는 주파수별 격리·재생 응답·마이크·배터리 등 실험실 지표로 ANC 헤드폰을 비교할 때 자주 기준점이 됩니다. 출장·통근의 저주파 소음 차단과 앱 EQ/멀티포인트 편의성이 구매 이유인 경우가 많습니다. NookVolt는 ‘여행·오피스 ANC’에 XM5(또는 후속 XM6)를 올리고, 통화 품질·스포츠 고정력이 최우선이면 이어버드/오픈형을 따로 보라고 권합니다.",
          en: "RTINGS’ Sony WH-1000XM5 review is a common lab baseline for isolation curves, response, mic, and battery among ANC headphones. Buy it for commute/travel low-frequency hush plus app EQ/multipoint convenience. NookVolt shortlists XM5 (or newer XM6) for travel/office ANC — pick earbuds/open-ear when call quality or sport fit matter more.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "비행기·지하철·오픈오피스. 작은 머리에 무거울 수 있으니 매장 착용해 보세요. iOS 전용 편의만 필요하면 AirPods Max/Pro 계열과 비교합니다.",
          en: "Planes, trains, open offices. Try fit if you have a smaller head. iOS-only convenience may favor AirPods Max/Pro instead.",
        },
      },
    ],
    verdict: {
      ko: "크로스플랫폼 ANC 오버이어의 안전한 출발점.",
      en: "Safe cross-platform starting point for over-ear ANC.",
    },
  },
  {
    slug: "airpods-pro-2",
    category: "headphones",
    productName: { ko: "에어팟 프로 2", en: "AirPods Pro 2" },
    title: {
      ko: "에어팟 프로 2: 투명도 모드가 설득하는 이어버드",
      en: "AirPods Pro 2: the earbuds transparency mode sold",
    },
    summary: {
      ko: "MKBHD는 H2 칩·ANC·Adaptive Transparency를 핵심으로 꼽습니다. 애플 생태계에서 마찰이 가장 적습니다.",
      en: "MKBHD highlights the H2 chip, ANC, and Adaptive Transparency — lowest friction inside Apple’s ecosystem.",
    },
    publishedAt: "2026-08-18",
    readingMinutes: 6,
    searchTags: ["airpods", "애플", "이어버드", "anc"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD)",
        url: "https://www.youtube.com/watch?v=f3DfJxvkN-8",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "MKBHD의 AirPods Pro 2 리뷰는 개선된 ANC, Adaptive Transparency, 스템 볼륨 제스처, H2 칩의 실시간 오디오 처리를 중심으로 ‘왜 설득되는지’를 설명합니다. 특히 투명도 모드의 자연스러움은 경쟁 이어버드 대비 강점으로 자주 언급됩니다. NookVolt는 아이폰 사용자에게 기본 추천, 안드로이드 주력이면 소니/갤럭시 버즈·Pixel Buds 쪽 멀티포인트·코덱을 비교하라고 적습니다.",
          en: "MKBHD’s AirPods Pro 2 review centers improved ANC, Adaptive Transparency, stem volume gestures, and H2 computational audio — with transparency mode often cited as best-in-class. NookVolt: default pick for iPhone users; Android-primary buyers should compare Sony/Galaxy Buds/Pixel Buds multipoint and codecs.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "아이폰·애플워치 연동, 출퇴근·운동·통화가 섞인 하루. 장시간 비행은 오버이어 ANC가 더 편할 수 있습니다(MKBHD도 비슷한 취향을 언급).",
          en: "iPhone/Watch handoff across commute, workouts, and calls. Long flights may still favor over-ear ANC (MKBHD notes a similar preference).",
        },
      },
    ],
    verdict: {
      ko: "아이폰이면 Pro 2(또는 후속). 안드로이드면 대안 비교.",
      en: "iPhone → Pro 2 (or successor). Android → compare alternatives.",
    },
  },
  {
    slug: "bose-quietcomfort-ultra",
    category: "headphones",
    productName: { ko: "보스 QuietComfort Ultra", en: "Bose QuietComfort Ultra" },
    title: {
      ko: "보스 QC Ultra: ‘조용함’을 최우선으로 할 때",
      en: "Bose QC Ultra: when quiet is the product",
    },
    summary: {
      ko: "RTINGS 비교에서 소니와 자주 맞붙는 ANC 라이벌. 음색·착용감·가격을 취향으로 고르세요.",
      en: "A frequent RTINGS ANC rival to Sony — choose on tuning, fit, and price taste.",
    },
    publishedAt: "2026-08-10",
    readingMinutes: 5,
    searchTags: ["bose", "qc ultra", "보스", "anc"],
    sources: [
      {
        name: "RTINGS — XM6 vs Bose QC Ultra vs XM5",
        url: "https://www.rtings.com/headphones/learn/sony-wh-1000xm6-comparison",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "RTINGS는 Bose QuietComfort Ultra와 Sony WH-1000XM 시리즈를 격리·음색·마이크 축에서 자주 비교합니다. Bose는 ‘조용함’과 착용 압박의 균형으로 선호되는 경우가 있고, Sony는 앱 기능·커스터마이즈에서 앞서는 경우가 많습니다. NookVolt는 매장에서 같은 트랙으로 A/B 청음하고, 안경 착용 시 클램프 압력도 확인하라고 권합니다.",
          en: "RTINGS often pairs Bose QuietComfort Ultra against Sony WH-1000XM on isolation, tuning, and mic. Bose frequently wins hearts on “quiet + comfort”; Sony often leads on app features and customization. NookVolt: A/B the same tracks in-store and check clamp pressure if you wear glasses.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "ANC 성능·착용감이 EQ 미세조정보다 중요한 사람. 공간 오디오/멀티디바이스 앱 기능이 많아야 하면 소니·애플도 보세요.",
          en: "When ANC and comfort beat deep EQ tinkering. Need richer spatial/multidevice app features? Keep Sony/Apple in the mix.",
        },
      },
    ],
    verdict: {
      ko: "‘조용함’ 우선이면 Bose를 단기 리스트에.",
      en: "Shortlist Bose when quiet comfort is the brief.",
    },
  },

  // ── Smartwatches ────────────────────────────────────────
  {
    slug: "apple-watch-series-10",
    category: "smartwatches",
    productName: { ko: "애플워치 시리즈 10", en: "Apple Watch Series 10" },
    title: {
      ko: "애플워치 시리즈 10: 얇아진 본체, 건강 알림의 무게",
      en: "Apple Watch Series 10: thinner case, heavier health alerts",
    },
    summary: {
      ko: "Wirecutter·WIRED는 iPhone 사용자에게 여전히 강한 선택으로 봅니다. 혈중산소 센서 이슈는 구매 전 확인이 필요합니다.",
      en: "Wirecutter/WIRED still favor it for iPhone users — confirm blood-oxygen sensor status before you buy.",
    },
    publishedAt: "2026-09-08",
    readingMinutes: 6,
    searchTags: ["apple watch", "애플워치", "series 10", "watchos"],
    sources: [
      {
        name: "Wirecutter — Best Smartwatches",
        url: "https://www.nytimes.com/wirecutter/reviews/best-smartwatches/",
        kind: "article",
      },
      {
        name: "WIRED — Apple Watch Series 10 Review",
        url: "https://www.wired.com/review/apple-watch-series-10/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter는 iPhone 사용자용 스마트워치로 Apple Watch 계열을 계속 상위에 둡니다(시기에 따라 SE가 가성비 픽이 되기도 합니다). WIRED의 Series 10 리뷰는 더 큰·밝은 디스플레이, 얇아진 케이스, 빠른 충전, 수면 무호흡 알림 등을 장점으로, 혈중산소 측정 공백을 명확한 단점으로 적습니다. NookVolt는 ‘알림·결제·운동·수면’을 아이폰과 묶을 때 Series/SE를, 배터리 며칠이 필요하면 Garmin을 보라고 정리합니다.",
          en: "Wirecutter keeps Apple Watch on top for iPhone owners (sometimes SE wins on value). WIRED’s Series 10 review praises the bigger/brighter display, thinner case, faster charging, and sleep-apnea notifications — and calls out missing blood-oxygen sensing. NookVolt: Series/SE when notifications/pay/workout/sleep should glue to iPhone; Garmin when multi-day battery is non-negotiable.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "아이폰 사용자, 하루 1회 충전에 익숙한 사람. 안드로이드 주력이면 갤럭시 워치/픽셀 워치·Garmin을 보세요.",
          en: "iPhone users okay with roughly daily charging. Android-primary → Galaxy Watch / Pixel Watch / Garmin.",
        },
      },
    ],
    verdict: {
      ko: "아이폰이면 Apple Watch. 가성비는 SE도 함께.",
      en: "iPhone → Apple Watch. Check SE for value.",
    },
  },
  {
    slug: "galaxy-watch-ultra",
    category: "smartwatches",
    productName: { ko: "갤럭시 워치 울트라", en: "Galaxy Watch Ultra" },
    title: {
      ko: "갤럭시 워치 울트라: 안드로이드·야외 활동 축",
      en: "Galaxy Watch Ultra: Android and outdoor-ready",
    },
    summary: {
      ko: "삼성 폰과의 연동·견고한 빌드가 포인트. 배터리·건강 센서 실사용기는 제조사 문서와 신뢰 리뷰를 교차 확인하세요.",
      en: "Samsung phone pairing and rugged build are the pitch — cross-check battery and sensors with trusted reviews.",
    },
    publishedAt: "2026-08-25",
    readingMinutes: 5,
    searchTags: ["samsung", "galaxy watch", "갤럭시워치", "ultra"],
    sources: [
      {
        name: "Wirecutter — Best Smartwatches",
        url: "https://www.nytimes.com/wirecutter/reviews/best-smartwatches/",
        kind: "article",
      },
      {
        name: "Marques Brownlee (MKBHD) channel",
        url: "https://www.youtube.com/@mkbhd",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter의 스마트워치 가이드는 플랫폼(아이폰 vs 안드로이드)을 먼저 가릅니다. Galaxy Watch Ultra는 삼성 스마트폰과의 알림·결제·건강 데이터 연동, 야외용 빌드를 이유로 고르는 제품군입니다. MKBHD 등 크리에이터 리뷰에서는 디스플레이 가독성·배터리 데이즈·Wear OS 앱 품질을 체감 포인트로 보세요. NookVolt는 ‘갤럭시 폰 + 등산/러닝’ 조합에서 후보로 올립니다.",
          en: "Wirecutter’s smartwatch guide splits first by platform (iPhone vs Android). Galaxy Watch Ultra is the rugged, Samsung-phone-tied option for notifications, payments, and health sync. Use creator reviews (e.g. MKBHD’s channel) for display readability, battery days, and Wear OS app quality. NookVolt shortlists it for Galaxy phone + hiking/running kits.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "갤럭시 스마트폰 사용자, 견고한 케이스와 야외 활동. 순수 장거리 러닝·지도 배터리면 Garmin도 비교하세요.",
          en: "Galaxy phone owners who want a tough outdoor watch. Pure long-run / map battery life → compare Garmin.",
        },
      },
    ],
    verdict: {
      ko: "갤럭시 생태계 + 야외면 Ultra급을 검토.",
      en: "Galaxy ecosystem + outdoors → consider Ultra-class.",
    },
  },
  {
    slug: "garmin-forerunner",
    category: "smartwatches",
    productName: { ko: "가민 포러너 (러닝 워치)", en: "Garmin Forerunner (running watch)" },
    title: {
      ko: "가민 포러너: 배터리와 훈련 데이터가 우선일 때",
      en: "Garmin Forerunner: battery and training data first",
    },
    summary: {
      ko: "스마트 알림보다 운동·회복·GPS가 중심. Wirecutter도 용도별 웨어러블을 나눌 때 이 축을 분리합니다.",
      en: "Training, recovery, and GPS over smart alerts — Wirecutter-style guides keep this axis separate.",
    },
    publishedAt: "2026-08-01",
    readingMinutes: 5,
    searchTags: ["garmin", "forerunner", "가민", "러닝", "gps"],
    sources: [
      {
        name: "Wirecutter — Best Smartwatches",
        url: "https://www.nytimes.com/wirecutter/reviews/best-smartwatches/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter류 가이드는 ‘스마트폰 알림 워치’와 ‘스포츠 GPS 워치’를 분리합니다. Garmin Forerunner 계열은 후자: 수일~이주 배터리, 러닝 다이내믹스, 코스·회복 지표가 구매 이유입니다. 앱스토어·결제·메시지 회신은 Apple/Galaxy Watch보다 약할 수 있습니다. NookVolt는 주 3회 이상 야외 러닝/사이클이 있는 사람에게 Forerunner를, 알림 중심이면 폰 생태계 워치를 권합니다.",
          en: "Wirecutter-style guides separate “phone notification watches” from “sport GPS watches.” Garmin Forerunner sits in the latter: multi-day to multi-week battery, running dynamics, courses, and recovery metrics. App stores, payments, and rich replies are usually weaker than Apple/Galaxy Watch. NookVolt: Forerunner if you run/ride outdoors 3+ times weekly; ecosystem watches if notifications are the job.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "훈련 계획·페이스·지도가 중요한 러너/사이클리스트. 패션·앱·결제가 먼저면 스마트워치로.",
          en: "Runners/cyclists who care about plans, pace, and maps. Fashion/apps/pay first → smartwatch platforms.",
        },
      },
    ],
    verdict: {
      ko: "운동 데이터가 목표면 Garmin.",
      en: "Training data first → Garmin.",
    },
  },

  // ── Accessories ─────────────────────────────────────────
  {
    slug: "anker-735-nano-ii",
    category: "accessories",
    productName: { ko: "Anker 735 Nano II 65W", en: "Anker 735 Nano II 65W" },
    title: {
      ko: "Anker 735 Nano II: 가방 속 65W 멀티포트",
      en: "Anker 735 Nano II: 65W multiport for the bag",
    },
    summary: {
      ko: "TechGearLab 등에서 크기·출력·열 밸런스로 자주 추천되는 GaN 충전기. 포트별 전력 분배를 읽고 사세요.",
      en: "Often recommended by labs like TechGearLab for size/output/heat — read per-port power split before buying.",
    },
    publishedAt: "2026-09-02",
    readingMinutes: 5,
    searchTags: ["anker", "gan", "charger", "충전기", "65w"],
    sources: [
      {
        name: "TechGearLab — Best USB Wall Charger",
        url: "https://www.techgearlab.com/topics/electronics/best-usb-wall-charger",
        kind: "article",
      },
      {
        name: "Consumer Reports — Anker portable chargers",
        url: "https://www.consumerreports.org/electronics-computers/portable-chargers/anker-nano-portable-charger-22-5w-5-000mah/m414988/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "TechGearLab은 Anker 735 Nano II 65W(3포트)를 크기·가치·전력 전달 균형이 좋은 멀티포트 GaN으로 평가합니다. 동시 충전 시 포트당 와트가 나뉘므로, 노트북+폰을 함께 쓸 때는 우선 포트 표기를 확인하세요. Consumer Reports는 Anker 휴대용(보조배터리) 라인도 별도로 테스트하니, 벽면 충전기와 헷갈리지 마세요. NookVolt는 출장용 1브릭으로 65W급 멀티포트를 권합니다.",
          en: "TechGearLab rates the Anker 735 Nano II 65W (3-port) highly for size, value, and power delivery. Dual-load splits watts — read the priority-port chart for laptop+phone. Consumer Reports also tests Anker portables separately; don’t confuse wall GaN with power banks. NookVolt: a 65W multiport is the sensible one-brick travel default.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "폰+울트라북을 한 충전기로. 고출력 게이밍 노트북은 100W+ 또는 전용 어댑터를 보세요.",
          en: "Phone + ultrabook on one brick. Gaming laptops may need 100W+ or the OEM adapter.",
        },
      },
    ],
    verdict: {
      ko: "여행·가방용 GaN의 실용 픽.",
      en: "Practical GaN pick for travel bags.",
    },
  },
  {
    slug: "logitech-mx-master-3s",
    category: "accessories",
    productName: { ko: "로지텍 MX Master 3S", en: "Logitech MX Master 3S" },
    title: {
      ko: "MX Master 3S: 하루 종일 마우스의 기본값",
      en: "MX Master 3S: the all-day mouse default",
    },
    summary: {
      ko: "Wirecutter가 오래 추천해 온 인체공학 무선 마우스. 조용한 클릭·썸 스크롤·멀티디바이스가 강점.",
      en: "A long-time Wirecutter favorite — quiet clicks, thumb scroll, and multidevice switching.",
    },
    publishedAt: "2026-08-28",
    readingMinutes: 5,
    searchTags: ["logitech", "mx master", "마우스", "mouse"],
    sources: [
      {
        name: "Wirecutter — Logitech MX Master",
        url: "https://www.nytimes.com/wirecutter/reviews/logitech-mx-master-3-mouse-review/",
        kind: "article",
      },
      {
        name: "Wirecutter — Best Wireless Mice",
        url: "https://www.nytimes.com/wirecutter/reviews/best-wireless-mouse/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter는 MX Master 시리즈를 ‘하루 종일 쓰는 무선 마우스’ 업그레이드 픽으로 長く 다뤄 왔습니다. 3S는 조용한 클릭과 높은 DPI 센서, 최대 3대 기기 전환, MagSpeed 스크롤이 핵심입니다. 오른손 전용·큰 편이라 작은 손에는 부담일 수 있고, 후속 Master 4가 나온 뒤에는 할인 구간에서 3S를 노리는 전략도 유효합니다. NookVolt는 문서·브라우저·디자인 툴이 섞인 데스크에 기본 추천합니다.",
          en: "Wirecutter has long treated the MX Master line as the upgrade wireless mouse for all-day work. The 3S adds quieter clicks and a higher-DPI sensor, plus 3-device switching and MagSpeed scrolling. It’s right-handed and fairly large; after Master 4, hunting 3S on sale is still sensible. NookVolt: default desk mouse for mixed docs/browser/design tools.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "오른손·중간 이상 손 크기, 맥/윈도우 멀티 PC. 왼손잡이·초소형 손을 원하면 다른 인체공학 모델을 보세요.",
          en: "Right-handed, medium+ hands, Mac/Windows multi-PC. Lefties or very small hands should look elsewhere.",
        },
      },
    ],
    verdict: {
      ko: "생산성 마우스의 안전한 선택(손 크기 확인).",
      en: "Safe productivity mouse — confirm hand size.",
    },
  },
  {
    slug: "usb-c-hub-checklist",
    category: "accessories",
    productName: { ko: "USB-C 허브/독", en: "USB-C hub / dock" },
    title: {
      ko: "USB-C 허브: 사양표에서 먼저 읽을 것",
      en: "USB-C hubs: what to read on the spec sheet first",
    },
    summary: {
      ko: "디스플레이 대역·PD 통과 와트·이더넷 유무가 핵심. ‘포트 개수’만 보고 사지 마세요.",
      en: "Display bandwidth, PD passthrough watts, and Ethernet matter more than port count.",
    },
    publishedAt: "2026-07-20",
    readingMinutes: 5,
    searchTags: ["hub", "dock", "usb-c", "허브", "도킹"],
    sources: [
      {
        name: "Wirecutter — computers & peripherals",
        url: "https://www.nytimes.com/wirecutter/electronics/computers/",
        kind: "article",
      },
      {
        name: "Notebookcheck",
        url: "https://www.notebookcheck.net/",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Wirecutter·노트북 리뷰 사이트(Notebookcheck 등)가 반복하는 허브 실패 패턴은 ‘4K 60을 약속하지만 실제로는 30’, ‘PD 통과가 약해 노트북이 방전’, ‘버스 파워 HDD가 불안정’입니다. 구매 전: (1) 노트북의 DisplayPort Alt Mode/Thunderbolt 지원 (2) 허브의 최대 디스플레이 해상도·주사율 (3) PD passthrough 와트 (4) 이더넷·SD 필요 여부를 적으세요. NookVolt는 저가 무명 허브보다, 반환 정책이 있는 브랜드와 스펙 표를 교차 확인하라고 권합니다.",
          en: "Wirecutter and laptop review sites (Notebookcheck, etc.) keep seeing the same hub failures: “4K60” that is really 30, weak PD passthrough that drains the laptop, flaky bus-powered drives. Before buying, write down (1) your laptop’s DP Alt Mode/Thunderbolt support, (2) the hub’s max resolution/refresh, (3) PD passthrough watts, (4) whether you need Ethernet/SD. NookVolt: prefer clear spec sheets and return policies over anonymous bargain hubs.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "포트 적은 울트라북·아이패드 프로 사용자. 데스크톱 GPU PC만 쓰면 별도 독이 덜 급합니다.",
          en: "Port-light ultrabooks and iPad Pro desks. Desktop GPU PCs rarely need a travel hub.",
        },
      },
    ],
    verdict: {
      ko: "스펙 4줄만 확인하고 사도 실패가 줄어듭니다.",
      en: "Four spec lines prevent most hub regrets.",
    },
  },
];

export function getAllProductReviews(): ProductReview[] {
  return [...productReviews].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0,
  );
}

export function getProductReview(slug: string): ProductReview | undefined {
  return productReviews.find((r) => r.slug === slug);
}

export function getProductReviewsByCategory(
  category: ReviewCategorySlug,
): ProductReview[] {
  return getAllProductReviews().filter((r) => r.category === category);
}

export function searchProductReviews(query: string): ProductReview[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  return getAllProductReviews().filter((review) => {
    const haystack = [
      review.slug,
      review.productName.ko,
      review.productName.en,
      review.title.ko,
      review.title.en,
      review.summary.ko,
      review.summary.en,
      review.category,
      ...(review.searchTags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return tokens.every((token) => haystack.includes(token));
  });
}
