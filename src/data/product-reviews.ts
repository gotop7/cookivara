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
  // ── Phones (2025–2026 flagships) ───────────────────────
  {
    slug: "galaxy-s26-ultra",
    category: "phones",
    productName: { ko: "갤럭시 S26 울트라", en: "Galaxy S26 Ultra" },
    title: {
      ko: "갤럭시 S26 울트라: 프라이버시 디스플레이라는 ‘한 방’",
      en: "Galaxy S26 Ultra: Privacy Display as the headline catch",
    },
    summary: {
      ko: "MKBHD·ITSub·GSMArena 모두 Privacy Display·60W 충전·S Pen을 핵심으로 꼽습니다. 카메라·배터리 용량은 경쟁 대비 ‘올인’이 아니라는 평가도 반복됩니다.",
      en: "MKBHD, ITSub, and GSMArena all spotlight Privacy Display, 60W charging, and the S Pen — while noting cameras and cell capacity still trail the ultra-competitive pack.",
    },
    publishedAt: "2026-11-06",
    readingMinutes: 8,
    searchTags: ["samsung", "s26", "삼성", "울트라", "s pen", "privacy display"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD)",
        url: "https://www.youtube.com/watch?v=nfHRMqqO578",
        kind: "youtube",
      },
      {
        name: "ITSub잇섭",
        url: "https://www.youtube.com/watch?v=NRGuwOiixY4",
        kind: "youtube",
      },
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/samsung_galaxy_s26_ultra-review-2939p6.php",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "NookVolt는 하드웨어 랩을 운영하지 않습니다. MKBHD의 S26 Ultra 리뷰(“There’s a Catch”)는 Snapdragon 8 Elite Gen 5 for Galaxy, 얇아진 알루미늄 프레임, 60W 충전, 그리고 정면에선 정상이지만 옆에서는 거의 검게 보이는 Privacy Display를 중심에 둡니다. ITSub잇섭은 울트라에 신기능이 몰리고 기본형은 설득력이 약하다는 현장 톤을 전합니다. GSMArena는 Privacy Display·빠른 충전·배터리 효율·S Pen을 장점으로, IP68·배터리 용량·카메라 하드·장기 부하 스로틀을 단점으로 정리합니다.",
          en: "NookVolt does not run a hardware lab. MKBHD’s S26 Ultra review (“There’s a Catch”) centers the Snapdragon 8 Elite Gen 5 for Galaxy, a thinner aluminum frame, 60W charging, and Privacy Display that looks normal head-on but blacks out off-axis. ITSub’s first look stresses that Ultra got the interesting upgrades while the base S26 feels thin on change. GSMArena praises Privacy Display, faster charging, endurance efficiency, and the S Pen — and flags basic IP68, cell capacity, camera hardware lag, and heavy sustained CPU throttling.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "S Pen·줌·안드로이드 파워유저, 카페·출장에서 화면 엿보기를 막고 싶은 사람. ‘올해 최고 카메라폰’만 찾거나 가벼운 콤팩트를 원하면 Pixel 10 Pro·iPhone 17 계열을 나란히 보세요.",
          en: "S Pen, zoom, and Android power users — plus anyone who wants shoulder-surfing protection on trains and flights. Hunting only for the year’s best camera phone or a light compact? Keep Pixel 10 Pro and iPhone 17-class beside it.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "Privacy Display가 본인 시야에서도 뿌옇게 느껴지는지 매장에서 켜 보세요(ITSub·사용자 피드백과 맞물리는 포인트). 하드웨어 변화가 작다면 S25 Ultra 할인 재고도 GSMArena가 언급한 현실적 대안입니다. Galaxy AI 언어·유료화 일정을 확인하세요.",
          en: "Try Privacy Display in-store — some users report haze even for the owner. If the hardware delta feels small, a discounted S25 Ultra remains a GSMArena-noted option. Confirm Galaxy AI language and pricing timelines for your market.",
        },
      },
    ],
    verdict: {
      ko: "펜·프라이버시·충전이 필요하면 Ultra. 카메라 최고점만 보면 비교표를.",
      en: "Ultra if you want the pen, Privacy Display, and faster charge. Camera-first buyers should keep comparing.",
    },
  },
  {
    slug: "iphone-17-pro",
    category: "phones",
    productName: { ko: "아이폰 17 프로", en: "iPhone 17 Pro" },
    title: {
      ko: "아이폰 17 프로: 영상은 최고, 업그레이드 설득은 ‘조건부’",
      en: "iPhone 17 Pro: class-leading video, conditional upgrade math",
    },
    summary: {
      ko: "GSMArena는 영상·배터리·충전을 강하게 평가. MKBHD·Mrwhosetheboss는 Pro의 카메라/디자인을 칭찬하면서도 기본 17과의 가격 간극을 함께 논합니다.",
      en: "GSMArena leans hard into video, battery, and charging. MKBHD and Mrwhosetheboss praise Pro cameras/design — and still debate the gap vs the strong base iPhone 17.",
    },
    publishedAt: "2026-11-05",
    readingMinutes: 8,
    searchTags: ["apple", "아이폰", "17 pro", "애플", "a19"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD) — iPhone 17 Pro",
        url: "https://www.youtube.com/watch?v=q0aFOxT6TNw",
        kind: "youtube",
      },
      {
        name: "Mrwhosetheboss — iPhone 17 Pro",
        url: "https://www.youtube.com/watch?v=xRla0izRxqU",
        kind: "youtube",
      },
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/apple_iphone_17_pro-review-2887p6.php",
        kind: "article",
      },
      {
        name: "Marques Brownlee (MKBHD) — iPhone 17 (base)",
        url: "https://www.youtube.com/watch?v=rng_yUSwrgU",
        kind: "youtube",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "GSMArena의 iPhone 17 Pro 리뷰는 새 망원·셀피, 클래스 최상위 영상, 긴 배터리와 빨라진 충전을 장점으로, 무게·장기 GPU 스로틀·망원 ‘기대만큼의 점프’ 부족을 단점으로 적습니다. MKBHD의 Pro 리뷰(“Paradox in a Box”)와 Mrwhosetheboss의 Pro 리뷰는 디자인·카메라 하드웨어를 파고들면서, 같은 시즌 기본 iPhone 17이 120Hz·256GB 등으로 ‘별표 없는’ 선택이 되었다는 MKBHD 논지(별도 기본 17 리뷰)와 함께 읽어야 합니다. NookVolt: 영상·망원·프로 워크플로면 Pro, 대부분의 아이폰 업그레이더는 기본 17을 먼저 보세요.",
          en: "GSMArena’s iPhone 17 Pro review credits the new tele/selfie cameras, class-leading video, strong battery, and faster charging — while calling out weight, sustained GPU throttling, and a telephoto that isn’t the leap many hoped for. MKBHD’s Pro review (“Paradox in a Box”) and Mrwhosetheboss’s Pro take dig into design and camera hardware; pair them with MKBHD’s base iPhone 17 review (“No Asterisks”), which argues the non-Pro finally feels like a clean buy with 120Hz and 256GB. NookVolt: Pro for video/tele/pro workflows; most iPhone upgraders should shortlist the base 17 first.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "4K 영상·망원·MagSafe 액세서리가 일상인 애플 생태계 사용자. ‘아이폰만 있으면 된다’면 Wirecutter·MKBHD가 밀어 주는 기본 17이 가성비 축입니다.",
          en: "Apple-ecosystem buyers who shoot 4K video, use telephoto, and live on MagSafe. If you just need “an iPhone,” Wirecutter/MKBHD’s push toward the base 17 is the value axis.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "Pro vs 기본 17 가격 차이를 카메라/영상 사용 빈도로 나누세요. 무게감은 매장에서 확인. iOS 26·Apple Intelligence 지역 지원을 확인하세요.",
          en: "Split the Pro vs base 17 premium by how often you use tele/video. Check weight in-store. Confirm iOS 26 / Apple Intelligence language support for your region.",
        },
      },
    ],
    verdict: {
      ko: "영상·망원이면 Pro. 그 외에는 기본 17을 먼저.",
      en: "Pro for video and tele. Otherwise start with the base 17.",
    },
  },
  {
    slug: "pixel-10-pro",
    category: "phones",
    productName: { ko: "픽셀 10 프로", en: "Pixel 10 Pro" },
    title: {
      ko: "픽셀 10 프로: Qi2 자석과 구글 AI, 배터리라는 숙제",
      en: "Pixel 10 Pro: Qi2 magnets and Google AI — battery still the homework",
    },
    summary: {
      ko: "MKBHD·GSMArena는 Pixelsnap(Qi2)·밝은 LTPO·사진 튜닝을 강점으로, 느린 충전·배터리 지구력을 약점으로 봅니다.",
      en: "MKBHD and GSMArena praise Pixelsnap (Qi2), a bright LTPO panel, and Pixel photo tuning — and ding slow charging plus middling endurance.",
    },
    publishedAt: "2026-11-04",
    readingMinutes: 7,
    searchTags: ["google", "pixel", "구글", "픽셀", "qi2", "tensor"],
    sources: [
      {
        name: "Marques Brownlee (MKBHD)",
        url: "https://www.youtube.com/watch?v=i63u-iAnhuk",
        kind: "youtube",
      },
      {
        name: "GSMArena",
        url: "https://www.gsmarena.com/google_pixel_10_pro-review-2877.php",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "MKBHD의 Pixel 10/Pro 리뷰(“Good News and Bad News”)는 Tensor G5·Gemini AI·Pixelsnap 자석 액세서리 생태계를 호재로, 하드웨어 점프가 크지 않은 점과 배터리/충전 아쉬움을 악재로 나눕니다. GSMArena 실측은 6.3\" LTPO의 매우 높은 밝기, 5배 망원 유지, 7년 업데이트, Qi2 15W를 칭찬하고, ~30W급 유선 충전·Active Use 배터리 점수는 플래그십 대비 보수적이라고 적습니다. NookVolt: 구글 서비스·사진 AI·MagSafe급 자석이 필요하면 Pro, 지구력·게임 지속 성능이면 S26 Ultra/iPhone 17 계열을 비교하세요.",
          en: "MKBHD’s Pixel 10/Pro review (“Good News and Bad News”) splits Tensor G5, Gemini AI, and Pixelsnap magnets as the upside from a modest hardware leap and soft battery/charging as the downside. GSMArena’s lab notes a very bright 6.3\" LTPO, kept 5x tele, seven years of updates, and Qi2 15W — with ~30W-class wired charging and Active Use endurance that trail the toughest rivals. NookVolt: Pro for Google services, photo AI, and MagSafe-like magnets; compare S26 Ultra / iPhone 17-class when endurance or sustained gaming matter more.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "Messages/Photos/Gemini 중심 생활, 콤팩트 플래그십+실줌, 자석 충전기·스탠드를 쓰고 싶은 안드로이드 사용자.",
          en: "Messages/Photos/Gemini-first life, compact flagship with real zoom, and Android buyers who want magnetic chargers/stands.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "128GB(UFS 3.1) 대신 256GB+를 GSMArena도 권합니다. Pro XL은 화면·배터리 용량이 더 큽니다. Tensor 지속 성능 기대치는 낮추세요.",
          en: "Skip 128GB (UFS 3.1) for 256GB+ as GSMArena advises. Pro XL adds canvas and battery capacity. Temper Tensor sustained-performance hopes.",
        },
      },
    ],
    verdict: {
      ko: "구글 AI·Qi2·콤팩트 줌이면 추천. 배터리는 기대치 조절.",
      en: "Recommended for Google AI + Qi2 + compact zoom. Temper battery expectations.",
    },
  },
  {
    slug: "nothing-phone-3a",
    category: "phones",
    productName: { ko: "낫싱 폰 (3a)", en: "Nothing Phone (3a)" },
    title: {
      ko: "낫싱 폰 (3a): $400 아래에서 Glyph가 설득될 때",
      en: "Nothing Phone (3a): when Glyph design wins under $400",
    },
    summary: {
      ko: "Notebookcheck는 디자인·Nothing OS·배터리·6년 보안 업데이트를 높이 평가. eSIM·무선충전 부재는 단점입니다.",
      en: "Notebookcheck rates design, Nothing OS, battery, and six years of security updates highly — no eSIM or wireless charging.",
    },
    publishedAt: "2026-11-03",
    readingMinutes: 6,
    searchTags: ["nothing", "3a", "중급", "midrange", "glyph"],
    sources: [
      {
        name: "Notebookcheck",
        url: "https://www.notebookcheck.net/The-elegant-all-rounder-presses-all-the-right-buttons-Nothing-Phone-3a-review.994680.0.html",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Notebookcheck의 Nothing Phone (3a) 리뷰(~79%)는 Snapdragon 7s Gen 3로 일상·가벼운 게임에 충분하고, Glyph·글래스 백·밝은 120Hz AMOLED·메인 카메라·긴 배터리·50W급 충전·6년 보안 업데이트가 강점이라고 적습니다. AI 기능은 출시 시점 미완, IP64·eSIM 없음·무선충전 없음이 명확한 한계입니다. 망원이 필요하면 3a Pro를 보라고 안내합니다. NookVolt: 플래그십 FOMO 대신 ‘개성 있는 중급’을 고를 때의 2025–26 기본값입니다.",
          en: "Notebookcheck’s Nothing Phone (3a) review (~79%) finds Snapdragon 7s Gen 3 enough for daily use and light gaming, with Glyph, a glass back, bright 120Hz AMOLED, a solid main camera, long battery, ~50W charging, and six years of security updates as the pitch. AI features were unfinished at launch; IP64, no eSIM, and no wireless charging are hard limits. Want optical tele? Look at 3a Pro. NookVolt: the 2025–26 default midrange pick when you want personality instead of flagship FOMO.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "예산 상한이 명확하고 Glyph UI·깔끔한 소프트웨어를 원하는 사람. 망원·최장 OS 업데이트·무선충전이 필수면 플래그십으로.",
          en: "Clear budget caps and a taste for Glyph UI / clean software. Need tele, longest OS updates, or wireless charging? Step to a flagship.",
        },
      },
    ],
    verdict: {
      ko: "중급 ‘충분함+디자인’이면 3a.",
      en: "3a when midrange enough + design is the brief.",
    },
  },

  // ── Laptops & Tablets (2025–2026) ───────────────────────
  {
    slug: "macbook-air-m4",
    category: "laptops-tablets",
    productName: { ko: "맥북 에어 M4", en: "MacBook Air M4" },
    title: {
      ko: "맥북 에어 M4: 다시 $999로 돌아온 ‘쉬운 추천’",
      en: "MacBook Air M4: the easy recommend is $999 again",
    },
    summary: {
      ko: "Mrwhosetheboss·Notebookcheck 모두 M4·기본 16GB·가격 인하를 강조. 팬리스·60Hz·Wi-Fi 6E 한계는 여전합니다.",
      en: "Mrwhosetheboss and Notebookcheck both highlight M4, 16GB base RAM, and the price cut — fanless, 60Hz, and no Wi-Fi 7 limits remain.",
    },
    publishedAt: "2026-11-06",
    readingMinutes: 7,
    searchTags: ["apple", "macbook", "맥북", "m4", "에어"],
    sources: [
      {
        name: "Mrwhosetheboss",
        url: "https://www.youtube.com/watch?v=Uwmp16aSgdk",
        kind: "youtube",
      },
      {
        name: "Notebookcheck — MacBook Air 15 M4",
        url: "https://www.notebookcheck.net/Apple-MacBook-Air-15-M4-review-The-fanless-M4-SoC-is-years-ahead-of-the-competition.976933.0.html",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Mrwhosetheboss의 M4 MacBook Air 리뷰(“Too Easy!”)는 기본 메모리 16GB, Thunderbolt 개선, 12MP Center Stage 웹캠, Sky Blue 색상, 그리고 $999로 내려온 시작가를 ‘너무 쉬운 추천’으로 묶습니다. Notebookcheck의 Air 15 M4 리뷰(~91%)는 팬리스인데도 경쟁 울트라북을 앞서는 CPU, 긴 배터리, 무음 동작을 칭찬하고 Wi-Fi 7·120Hz·약한 35W 어댑터·업그레이드 불가를 단점으로 적습니다. NookVolt: 문서·브라우저·영상·가벼운 편집의 주력이면 Air M4, 장시간 렌더·닫힌 뚜껑 다중 모니터면 Pro.",
          en: "Mrwhosetheboss’s M4 MacBook Air review (“Too Easy!”) bundles 16GB base RAM, Thunderbolt improvements, a 12MP Center Stage webcam, Sky Blue, and the return to a $999 start as an almost unfair recommend. Notebookcheck’s Air 15 M4 review (~91%) praises fanless CPU leadership, long battery, and silence — and lists no Wi-Fi 7, no 120Hz, a weak 35W brick, and sealed upgrades as cons. NookVolt: Air M4 for docs/browsing/video/light edit; Pro for long renders or lid-closed multi-monitor desks.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "학생·지식근로자·여행 가방 주력 노트북. 로컬 LLM·3D·장시간 내보내기는 냉각 있는 MacBook Pro.",
          en: "Students, knowledge work, one-bag primary laptop. Local LLMs, 3D, or long exports → cooled MacBook Pro.",
        },
      },
      {
        heading: { ko: "구매 전 체크", en: "Before you buy" },
        body: {
          ko: "RAM/SSD는 출고 시 여유 있게. 13 vs 15는 화면·무게. 60Hz가 거슬리면 ProMotion Pro를 비교하세요.",
          en: "Buy RAM/SSD headroom at checkout. 13 vs 15 is screen vs weight. If 60Hz bothers you, compare ProMotion Pro.",
        },
      },
    ],
    verdict: {
      ko: "일상·휴대 주력이면 Air M4. 지속 부하면 Pro.",
      en: "Air M4 for daily carry. Pro for sustained load.",
    },
  },
  {
    slug: "ipad-pro-m5",
    category: "laptops-tablets",
    productName: { ko: "아이패드 프로 M5", en: "iPad Pro M5" },
    title: {
      ko: "아이패드 프로 M5: 랩톱급 SoC, 여전히 태블릿 OS",
      en: "iPad Pro M5: laptop-class SoC, still a tablet OS",
    },
    summary: {
      ko: "Notebookcheck는 M5·Wi-Fi 7·탠덤 OLED로 많은 소형 노트북보다 빠르다고 평가. iPadOS 생산성 한계는 남아 있습니다.",
      en: "Notebookcheck says M5 + Wi-Fi 7 + tandem OLED outruns many compact laptops — iPadOS productivity limits remain.",
    },
    publishedAt: "2026-11-05",
    readingMinutes: 7,
    searchTags: ["ipad", "아이패드", "m5", "apple", "tablet"],
    sources: [
      {
        name: "Notebookcheck — iPad Pro M5 (2025)",
        url: "https://www.notebookcheck.net/Apple-iPad-Pro-M5-2025-tablet-review-An-extremely-fast-M5-SoC-and-Wi-Fi-7.1143628.0.html",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Notebookcheck의 iPad Pro 11 (2025, M5) 리뷰는 M4 대비 CPU 약 10–15%·GPU 약 10–30% 향상, Wi-Fi 7, iPadOS 26+Magic Keyboard 조합으로 ‘작은 맥북에 가까운’ 체감을 전합니다. 동시에 가격·액세서리 비용, 그리고 태블릿 OS가 전문 데스크톱 워크플로를 완전히 대체하지 않는다는 현실도 유지됩니다. NookVolt: 드로잉·읽기·미디어·가벼운 제작의 최상위, 파일·다중 창·데스크톱 앱이 하루의 중심이면 맥/윈도우 노트북을 남기세요.",
          en: "Notebookcheck’s iPad Pro 11 (2025, M5) review cites roughly 10–15% CPU and 10–30% GPU gains over M4, Wi-Fi 7, and an iPadOS 26 + Magic Keyboard combo that can feel almost MacBook-like. Accessory cost and the reality that a tablet OS still isn’t a full desktop remain. NookVolt: top-tier for draw/read/media/light create; keep a Mac/Windows laptop when files, multi-window, and desktop apps dominate the day.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "디지털 아트·노트·PDF·영상 시청, 이미 Pencil 워크플로가 있는 사람. IDE·무거운 시트·창 관리는 노트북이 먼저입니다.",
          en: "Digital art, notes, PDFs, video — especially with an existing Pencil workflow. IDEs, heavy sheets, and window management → laptop first.",
        },
      },
    ],
    verdict: {
      ko: "최고의 태블릿. 유일한 컴퓨터는 아닐 수 있습니다.",
      en: "Best-in-class tablet. Not automatically your only computer.",
    },
  },
  {
    slug: "framework-laptop-13-ryzen-ai",
    category: "laptops-tablets",
    productName: { ko: "프레임워크 랩톱 13 (Ryzen AI 2025)", en: "Framework Laptop 13 (Ryzen AI 2025)" },
    title: {
      ko: "프레임워크 13 Ryzen AI: 수리 철학 + 사상 최고 성능",
      en: "Framework 13 Ryzen AI: repairability plus its fastest board yet",
    },
    summary: {
      ko: "Notebookcheck·The Verge는 Ryzen AI 300 보드로 역대 최고 성능을 확인. 배터리·웹캠·스피커는 여전히 타협입니다.",
      en: "Notebookcheck and The Verge confirm Ryzen AI 300 as Framework’s fastest board yet — battery, webcam, and speakers remain trade-offs.",
    },
    publishedAt: "2026-11-04",
    readingMinutes: 7,
    searchTags: ["framework", "ryzen ai", "repair", "모듈", "수리"],
    sources: [
      {
        name: "Notebookcheck — Framework 13.5 Ryzen AI 9",
        url: "https://www.notebookcheck.net/Framework-Laptop-13-5-Ryzen-AI-9-review-Skip-the-Intel-version-for-better-performance.997363.0.html",
        kind: "article",
      },
      {
        name: "The Verge — Framework Laptop 13 (2025)",
        url: "https://www.theverge.com/reviews/650608/framework-laptop-13-review-2025-amd-ryzen-ai-300",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Notebookcheck의 Framework Laptop 13.5 Ryzen AI 9 HX 370 리뷰(~84%)는 Zen 5로 성능이 크게 오르면서도 냉각/섀시 호환을 유지한다고 평가합니다. 고가 구성·배터리·구형 웹캠·스피커·P3/OLED 옵션 부재는 단점입니다. The Verge 2025 리뷰도 모듈 포트·부품 교체 철학은 그대로이고 Ryzen AI로 체감이 빨라졌다고 적습니다. NookVolt: 소유 기간·메인보드 업그레이드·포트 DIY가 목표면 Framework, 출고 완성도·얇기만 보면 Air/X1을 보세요.",
          en: "Notebookcheck’s Framework Laptop 13.5 Ryzen AI 9 HX 370 review (~84%) finds a large Zen 5 performance jump without breaking cooling/chassis compatibility. Pricey top configs, battery, aging webcam/speakers, and no P3/OLED options are the cons. The Verge’s 2025 review keeps the modular-port / upgrade story and notes the snappier Ryzen AI feel. NookVolt: Framework when ownership length, mainboard swaps, and DIY ports are the point — sealed Air/X1 still win on polish and thinness.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "RAM/SSD/포트를 직접 관리하고 전자폐기물을 줄이고 싶은 DIY 사용자. ‘켜서 쓰기만’ 원하면 완제품 울트라북이 덜 피곤합니다.",
          en: "DIY users who manage RAM/SSD/ports and want longer ownership. Power-on-and-work buyers → finished ultrabooks.",
        },
      },
    ],
    verdict: {
      ko: "수리·업그레이드가 목적이면 2025 Ryzen AI Framework.",
      en: "2025 Ryzen AI Framework when repair/upgrade is the brief.",
    },
  },
  {
    slug: "thinkpad-x1-carbon-gen-13",
    category: "laptops-tablets",
    productName: { ko: "씽크패드 X1 카본 Gen 13", en: "ThinkPad X1 Carbon Gen 13" },
    title: {
      ko: "X1 카본 Gen 13: Lunar Lake로 다시 살아난 비즈니스 울트라북",
      en: "X1 Carbon Gen 13: Lunar Lake brings the business ultrathin back",
    },
    summary: {
      ko: "Notebookcheck는 Gen 13 Aura(Lunar Lake)를 시리즈 최고로 평가 — 더 가벼워지고 배터리가 크게 개선. Arrow Lake 변형은 효율이 떨어집니다.",
      en: "Notebookcheck calls Gen 13 Aura (Lunar Lake) the best X1 yet — lighter, much better battery. Arrow Lake variants give back that efficiency.",
    },
    publishedAt: "2026-11-03",
    readingMinutes: 6,
    searchTags: ["lenovo", "thinkpad", "씽크패드", "x1", "gen 13", "lunar lake"],
    sources: [
      {
        name: "Notebookcheck — X1 Carbon Gen 13 Aura",
        url: "https://www.notebookcheck.net/Lenovo-ThinkPad-X1-Carbon-Gen-13-Aura-Edition-laptop-review-The-X1-Carbon-is-finally-back.924998.0.html",
        kind: "article",
      },
    ],
    sections: [
      {
        heading: { ko: "편집 요약 (출처 기반)", en: "Editorial summary (sourced)" },
        body: {
          ko: "Notebookcheck의 ThinkPad X1 Carbon Gen 13 Aura Edition 리뷰(~90%)는 Lunar Lake가 슬림 비즈니스 섀시에 다시 맞아떨어지며 쿨링·배터리(동일 57Wh인데도 Wi-Fi 테스트 약 30%↑)가 살아났다고 봅니다. 가벼운 케이스, OLED 옵션, 키보드/트랙포인트, 포트 구성이 강점이고 웹캠·SSD 스로틀·고가는 단점입니다. Arrow Lake U 변형은 효율·소음에서 Lunar Lake보다 못하다는 후속 테스트도 있습니다. NookVolt: Windows 타자·도킹 주력이면 Gen 13 Lunar Lake를 고르세요.",
          en: "Notebookcheck’s ThinkPad X1 Carbon Gen 13 Aura Edition review (~90%) says Lunar Lake finally fits the slim business chassis again — cooler running and ~30% better Wi-Fi battery life on the same 57Wh cell. Light chassis, OLED option, keyboard/TrackPoint, and ports are the wins; webcam, SSD throttling, and price are the misses. Later Arrow Lake U coverage is less efficient/louder. NookVolt: pick Gen 13 Lunar Lake for Windows typing-and-dock life.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who it fits" },
        body: {
          ko: "Windows 업무, VPN·도킹, 하루 종일 타자. 색보정 창작이 최우선이면 크리에이터 라인/맥을 비교하세요.",
          en: "Windows work, VPN/dock life, all-day typing. Color-critical creative → creator lines or Mac.",
        },
      },
    ],
    verdict: {
      ko: "타자·도킹 Windows면 Gen 13 Lunar Lake.",
      en: "Typing-and-dock Windows → Gen 13 Lunar Lake.",
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
