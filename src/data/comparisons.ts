import type { ComparisonCategorySlug } from "./comparison-categories";
import type { LocalizedString } from "@/i18n/types";

export type ComparisonSource = {
  name: string;
  url: string;
  kind: "youtube" | "article";
  videoTitle?: string;
};

export type ComparisonSection = {
  heading: LocalizedString;
  body: LocalizedString;
};

export type Comparison = {
  slug: string;
  category: ComparisonCategorySlug;
  pairName: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  publishedAt: string;
  readingMinutes: number;
  sections: ComparisonSection[];
  sources: ComparisonSource[];
  verdict: LocalizedString;
  searchTags?: string[];
};

/**
 * NookVolt comparison catalog.
 * Summaries are original editorial synthesis citing public YouTube reviews —
 * not lab tests by NookVolt.
 */
const comparisons: Comparison[] = [
  {
    slug: "iphone-duo-vs-galaxy-z-fold-8",
    category: "phones",
    pairName: {
      ko: "아이폰 듀오 vs 갤럭시 Z 폴드8",
      en: "iPhone Duo vs Galaxy Z Fold 8",
    },
    title: {
      ko: "아이폰 듀오 vs 갤럭시 Z 폴드8: 칩은 애플, 완성도는?",
      en: "iPhone Duo vs Galaxy Z Fold 8: chip win vs foldable maturity",
    },
    summary: {
      ko: "잇섭의 카메라·성능 심층 분석을 바탕으로 한 편집 요약. A20 프로·베이퍼 챔버는 강하지만 발열·가격·폴더블 완성도는 폴드8과 함께 봐야 합니다.",
      en: "Editorial summary of ITSub’s camera/performance deep dive — A20 Pro and vapor chamber lead, but heat, price, and foldable maturity still favor comparing Fold 8 carefully.",
    },
    publishedAt: "2026-11-05",
    readingMinutes: 8,
    searchTags: [
      "iphone duo",
      "아이폰 듀오",
      "galaxy z fold 8",
      "폴드8",
      "foldable",
      "폴더블",
      "itsub",
      "잇섭",
      "a20 pro",
    ],
    sources: [
      {
        name: "ITSub잇섭",
        url: "https://www.youtube.com/watch?v=UCahOJEiEd0",
        kind: "youtube",
        videoTitle:
          "애플 첫 폴더블은 과연 돈값할까? 아이폰 듀오 카메라&성능 심층 분석!",
      },
    ],
    sections: [
      {
        heading: {
          ko: "편집 요약 (출처 기반)",
          en: "Editorial summary (sourced)",
        },
        body: {
          ko: "NookVolt는 하드웨어 랩을 운영하지 않습니다. 아래는 ITSub잇섭 영상 「애플 첫 폴더블은 과연 돈값할까? 아이폰 듀오 카메라&성능 심층 분석!」(https://www.youtube.com/watch?v=UCahOJEiEd0)을 시청·정리한 원문 요약입니다. 대본을 베끼지 않았고, 세부 수치는 원 영상을 확인하세요. 잇섭은 아이폰 듀오(A20 프로, 12GB LPDDR5X, 베이퍼 챔버)를 갤럭시 Z 폴드8 시리즈·아이폰 18 프로 맥스와 나란히 측정합니다.",
          en: "NookVolt does not run a hardware lab. This is an original buying-focused summary of ITSub’s video “애플 첫 폴더블은 과연 돈값할까? 아이폰 듀오 카메라&성능 심층 분석!” (https://www.youtube.com/watch?v=UCahOJEiEd0). We do not copy the transcript — verify numbers in the source. ITSub benches the iPhone Duo (A20 Pro, 12GB LPDDR5X, vapor chamber) against the Galaxy Z Fold 8 series and iPhone 18 Pro Max.",
        },
      },
      {
        heading: {
          ko: "성능·발열·스피커",
          en: "Performance, heat, speakers",
        },
        body: {
          ko: "잇섭 측정에서 듀오는 Geekbench·3DMark·레이트레이싱에서 폴드8보다 앞섰고, 같은 A20 프로를 쓰는 아이폰 18 프로 맥스와는 대체로 오차 범위였습니다. 다만 얇은 폴더블 구조 때문에 게임·장시간 부하에서 핫스팟이 폴드8보다 높게 잡히는 장면이 있었고, 충전 중 성능 제한도 언급됩니다. 스피커는 펼쳤을 때 좌우 배치가 폴드8보다 실용적이고, 튜닝은 18 프로에 가깝지만 ‘속이 울리는’ 느낌이 남는다고 정리합니다.",
          en: "On ITSub’s benches, Duo leads Fold 8 in Geekbench, 3DMark, and ray tracing, and lands near iPhone 18 Pro Max with the same A20 Pro. Heat is the catch: the thin foldable body runs hotter hotspots than Fold 8 under games/long loads, with occasional charge-while-play throttling. Speakers when unfolded are more practical than Fold 8’s left-biased layout; tuning is close to 18 Pro but can sound a bit boxy.",
        },
      },
      {
        heading: { ko: "카메라 한 줄", en: "Camera in brief" },
        body: {
          ko: "커버 셀피는 언더디스플레이보다 훨씬 낫고, 광각·초광각은 폴드8과 장면마다 승부가 갈립니다. 잇섭은 주간 광각에서 듀오가 약간 그린 기운이 있고, 디지털 고배율·일부 야간 장면에서는 폴드8 처리가 더 날카로울 때가 있다고 봅니다. ‘프로 맥스급 카메라 패키지’를 기대하면 실망할 수 있고, 폴더블끼리 비교하면 용도·취향 싸움에 가깝습니다.",
          en: "Cover selfie beats the under-display camera by a wide margin; wide/ultrawide trade wins with Fold 8 scene by scene. ITSub notes a slight green cast on Duo daylight wides, while Fold 8 processing can look sharper at high digital zoom and in some night shots. Do not expect a Pro Max camera kit — between foldables it is preference and job fit.",
        },
      },
      {
        heading: { ko: "누구에게 맞나", en: "Who should pick which" },
        body: {
          ko: "칩 성능·애플 생태계·스피커 배치를 우선하면 듀오 후보. 더 가벼운 폴더블 완성도·낮은 출고가·이미 익숙한 갤럭시 멀티태스킹이면 폴드8이 현실적입니다. 잇섭 영상 기준으로도 ‘무조건 승자’는 없고, 가격 차이(듀오가 훨씬 비쌈)를 감수할 얼리어답터인지가 분기점입니다.",
          en: "Lean Duo for chip headroom, Apple ecosystem, and speaker layout. Lean Fold 8 for a more mature foldable feel, lower launch price, and Galaxy multitasking habits. ITSub’s framing is not a single winner — the price gap and early-adopter tolerance decide it.",
        },
      },
    ],
    verdict: {
      ko: "성능은 듀오, 폴더블 ‘완성 제품’ 감각·가성비는 폴드8을 더 보세요. NookVolt 자체 실측이 아닙니다.",
      en: "Duo for performance; Fold 8 for foldable maturity and value. Not a NookVolt lab test.",
    },
  },
];

export function getAllComparisons(): Comparison[] {
  return [...comparisons].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0,
  );
}

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonsByCategory(
  category: ComparisonCategorySlug,
): Comparison[] {
  return getAllComparisons().filter((c) => c.category === category);
}

export function searchComparisons(query: string): Comparison[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  return getAllComparisons().filter((comparison) => {
    const haystack = [
      comparison.slug,
      comparison.pairName.ko,
      comparison.pairName.en,
      comparison.title.ko,
      comparison.title.en,
      comparison.summary.ko,
      comparison.summary.en,
      comparison.category,
      ...(comparison.searchTags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return tokens.every((token) => haystack.includes(token));
  });
}
