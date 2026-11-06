import type { CategorySlug } from "./categories";
import type { LocalizedString } from "@/i18n/types";

export type ArticleSection = {
  heading: LocalizedString;
  body: LocalizedString;
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
        heading: { ko: "카메라: 주간은 안정, 야간은 과처리에 주의", en: "Camera: steady by day, watch night processing" },
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
    slug: "iphone-16-pro-vs-pixel-9-pro",
    category: "comparisons",
    title: {
      ko: "아이폰 16 프로 vs 픽셀 9 프로: 2026년에 누구를 살까",
      en: "iPhone 16 Pro vs Pixel 9 Pro: which to buy in 2026",
    },
    excerpt: {
      ko: "카메라·업데이트·생태계·가격 네 축으로만 비교합니다. ‘승자 하나’보다 사용자 유형별 추천이 목표입니다.",
      en: "Four axes only — camera, updates, ecosystem, and price — with recommendations by user type, not a single fake winner.",
    },
    publishedAt: "2026-10-18",
    readingMinutes: 8,
    sections: [
      {
        heading: { ko: "한 줄 요약", en: "Quick take" },
        body: {
          ko: "이미 에어팟·맥·애플워치를 쓰는 사람은 아이폰 16 프로가 마찰이 적습니다. 구글 서비스 중심이고 카메라 AI·깔끔한 안드로이드를 원하면 픽셀 9 프로가 더 합리적인 경우가 많습니다. 둘 다 ‘나쁜 폰’은 아닙니다.",
          en: "If you already live in AirPods, Mac, and Apple Watch, the 16 Pro is the lower-friction path. If you are Google-centric and want camera AI plus a clean Android, Pixel 9 Pro often makes more sense. Neither is a bad phone.",
        },
      },
      {
        heading: { ko: "카메라와 동영상", en: "Still and video" },
        body: {
          ko: "아이폰은 동영상 안정성과 색 일관성이 강점입니다. 픽셀은 야간·인물·매직 에디터류 보정에서 ‘한 번에 쓸 만한 결과’가 자주 나옵니다. 영상 작업·가족 기록이 많으면 아이폰, 스냅·편집 편의면 픽셀에 점수를 더 줍니다.",
          en: "iPhone wins on video stability and color consistency. Pixel often lands a usable still faster at night and with portrait/edit helpers. Heavy video and family archives lean iPhone; snap-and-tidy photography leans Pixel.",
        },
      },
      {
        heading: { ko: "업데이트·보안·중고 가치", en: "Updates, security, resale" },
        body: {
          ko: "둘 다 장기 업데이트를 약속하는 세대입니다. 중고 가격 방어는 대체로 아이폰이 유리합니다. 보안 패치 속도는 픽셀이 구글 디바이스로서 빠른 편이고, 아이폰은 생태계 전체의 보안 모델이 강점입니다.",
          en: "Both generations promise long software support. Resale usually favors iPhone. Pixel often gets security patches quickly as a Google device; iPhone’s strength is the broader platform security model.",
        },
      },
      {
        heading: { ko: "추천 매트릭스", en: "Who should pick which" },
        body: {
          ko: "아이폰: 맥/아이패드 연동, 장기 중고, 영상 중심. 픽셀: 메시지·사진·구글 워크스페이스 중심, 가격 대비 하드웨어, 안드로이드 순정에 가까운 UX. 둘 중 하나를 ‘무조건’ 고르라면, 주변 기기부터 적으세요.",
          en: "iPhone: Mac/iPad handoff, resale, video-first. Pixel: Messages/Photos/Workspace life, hardware value, near-stock Android. If you must pick one, start by listing the devices already in your bag.",
        },
      },
    ],
    verdict: {
      ko: "생태계가 이미 있으면 아이폰, 구글 중심이면 픽셀. 카메라만으로 고르지 마세요.",
      en: "Follow your existing ecosystem. Do not decide on camera marketing alone.",
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
    slug: "notion-vs-obsidian-notes",
    category: "apps",
    title: {
      ko: "노션 vs 옵시디언: 노트 앱을 고르는 현실적인 기준",
      en: "Notion vs Obsidian: practical criteria for picking a notes app",
    },
    excerpt: {
      ko: "협업·데이터베이스가 필요하면 노션, 로컬 파일·링크 사고가 중심이면 옵시디언. 이주 비용까지 포함해 비교합니다.",
      en: "Notion when you need collaboration and databases; Obsidian when local files and link thinking matter — including migration cost.",
    },
    publishedAt: "2026-10-02",
    readingMinutes: 8,
    sections: [
      {
        heading: { ko: "핵심 차이", en: "The real difference" },
        body: {
          ko: "노션은 클라우드 워크스페이스입니다. 표·일정·위키·가벼운 프로젝트 관리가 한곳에 모입니다. 옵시디언은 로컬 마크다운 금고에 가깝습니다. 플러그인으로 확장하지만, ‘팀 위키’보다는 ‘개인 지식 그래프’에 강합니다.",
          en: "Notion is a cloud workspace — tables, calendars, wikis, light project boards in one place. Obsidian is closer to a local Markdown vault: extensible with plugins, stronger for a personal knowledge graph than a team wiki.",
        },
      },
      {
        heading: { ko: "언제 노션인가", en: "When Notion wins" },
        body: {
          ko: "팀과 같은 페이지를 편집하고, 상태 속성·필터·보드가 필요하면 노션이 빠릅니다. 모바일에서 ‘열어보고 체크’하는 습관에도 적합합니다. 단, 오프라인·대량 페이지·장기 보관 전략은 미리 정해야 합니다.",
          en: "Shared editing, status properties, filters, and boards are where Notion is fast. It also fits mobile open-and-check habits. Decide offline needs and long-term archive strategy up front.",
        },
      },
      {
        heading: { ko: "언제 옵시디언인가", en: "When Obsidian wins" },
        body: {
          ko: "노트 소유권·이식성·양방향 링크가 중요하면 옵시디언입니다. Git 백업, 순수 마크다운 반출, 커스텀 워크플로에 강점이 있습니다. 팀 실시간 협업은 노션만큼 매끄럽지 않습니다.",
          en: "Choose Obsidian for ownership, portability, and backlinks. Git backups, plain Markdown export, and custom workflows shine. Live team collaboration is not Notion-smooth.",
        },
      },
      {
        heading: { ko: "이주 팁", en: "Migration tip" },
        body: {
          ko: "한 번에 옮기지 마세요. 새 프로젝트만 새 도구에 두고 30일을 시험한 뒤, 자주 여는 페이지만 이관하세요. ‘완벽한 보관소’보다 ‘매일 여는 습관’이 도구 선택의 정답에 가깝습니다.",
          en: "Do not migrate everything at once. Run new projects in the new tool for 30 days, then move only pages you open often. Daily habit beats a perfect archive.",
        },
      },
    ],
    verdict: {
      ko: "협업·DB → 노션 / 로컬·링크 → 옵시디언. 둘 다 쓰면 용도를 분리하세요.",
      en: "Collaboration/DB → Notion. Local/links → Obsidian. If you keep both, split jobs clearly.",
    },
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
    slug: "foldables-worth-it-2026",
    category: "news",
    title: {
      ko: "폴더블 2026: 아직 ‘실험’인가, 주력인가",
      en: "Foldables in 2026: still an experiment or ready as a daily driver?",
    },
    excerpt: {
      ko: "힌지·디스플레이 내구성, 앱 최적화, 가격이 뒤처지는 구간을 뉴스 브리핑 형식으로 정리합니다.",
      en: "A briefing on hinge and display durability, app layout maturity, and where price still lags.",
    },
    publishedAt: "2026-10-22",
    readingMinutes: 5,
    sections: [
      {
        heading: { ko: "무엇이 나아졌나", en: "What improved" },
        body: {
          ko: "최근 세대는 펼친 화면 주름이 덜 눈에 띄고, 힌지 먼지 유입 대책이 구체적입니다. 멀티태스킹 UI도 ‘데모용’을 넘어 메일+문서 동시 작업이 가능한 수준입니다. 다만 앱마다 비율 대응 편차는 여전합니다.",
          en: "Recent generations hide the crease better and take dust at the hinge more seriously. Multitasking UIs now handle real mail-plus-docs work, not just demos. App aspect-ratio quality still varies.",
        },
      },
      {
        heading: { ko: "아직 남는 리스크", en: "Risks that remain" },
        body: {
          ko: "교체 비용·보험, 외부 디스플레이 타협, 두께/무게는 여전히 일반 슬래브 대비 불리합니다. ‘태블릿을 따로 들고 다니기 싫다’는 명확한 니즈가 없으면 가성비는 슬래브+중형 태블릿 조합이 나을 수 있습니다.",
          en: "Repair cost, insurance, cover-display compromises, and thickness still lose to slabs. Without a clear ‘I will not carry a tablet’ need, a slab plus mid tablet can be better value.",
        },
      },
      {
        heading: { ko: "NookVolt 시각", en: "NookVolt take" },
        body: {
          ko: "얼리어답터·디지털 노트 헤비유저에게는 주력 후보가 됐고, 일반 사용자에게는 여전히 선택적 업그레이드입니다. 구매 전 매장에서 한 손으로 펼치기·가방 수납·자주 쓰는 앱 분할 화면을 직접 시험하세요.",
          en: "Viable as a daily driver for early adopters and heavy digital note-takers; still optional for everyone else. Before buying, try one-hand open, bag fit, and split-screen with your real apps in a store.",
        },
      },
    ],
  },
  {
    slug: "best-free-iphone-photo-editors",
    category: "apps",
    title: {
      ko: "아이폰 무료 사진 편집 앱 추천 4선",
      en: "Four free iPhone photo editors worth keeping",
    },
    excerpt: {
      ko: "구독 전제 앱 대신, 무료 범위만으로도 결과물이 나오는 편집 앱을 용도별로 골랐습니다.",
      en: "Editors that still deliver inside the free tier — picked by job, not by subscription pitch.",
    },
    publishedAt: "2026-10-08",
    readingMinutes: 6,
    sections: [
      {
        heading: { ko: "선택 기준", en: "How we chose" },
        body: {
          ko: "설치 직후 워터마크 없이 저장 가능한지, 기본 보정(노출·대비·크롭)·선택적 도구가 무료인지, 인터페이스가 한손에 닿는지를 봤습니다. ‘완전 무료 무제한’을 약속하지는 않습니다. 무료 한도 안에서 유용한지를 봤습니다.",
          en: "We checked export without a forced watermark, whether exposure/contrast/crop and key tools stay free, and whether the UI works one-handed. Not a promise of unlimited free forever — usefulness inside the free tier.",
        },
      },
      {
        heading: { ko: "용도별 추천", en: "Picks by job" },
        body: {
          ko: "빠른 보정의 기본은 사진 앱+편집 편집으로도 충분합니다. 필터·분위기 연출은 Snapseed, 부분 보정·곡선은 같은 Snapseed 또는 Darkroom 무료 범위, 배경 정리·객체 제거 계열은 기기·OS 버전별 내장 도구를 먼저 확인하세요. 유료 전환은 ‘자주 쓰는 한 도구’가 잠길 때만 검토하면 됩니다.",
          en: "Apple Photos edits cover quick fixes. Snapseed handles mood and selective tools well; Darkroom’s free tier helps with curves. Check built-in cleanup tools for your iOS version before paying for object removal. Only subscribe when one tool you use weekly is gated.",
        },
      },
      {
        heading: { ko: "워크플로 제안", en: "A simple workflow" },
        body: {
          ko: "1) 사진 앱에서 자르기·수평 2) Snapseed에서 선택 보정·분위기 3) 원본은 앨범에 보존. 소셜 업로드 전 과도한 선명도는 줄이세요. 같은 프리셋을 반복하면 피드 톤이 안정됩니다.",
          en: "1) Crop and level in Photos 2) Selective/mood in Snapseed 3) Keep originals. Ease off sharpening before social upload. Repeating a small preset set keeps your feed consistent.",
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
        heading: { ko: "업그레이드가 필요한 신호", en: "Signs you actually need it" },
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
