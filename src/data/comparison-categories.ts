import type { LocalizedString } from "@/i18n/types";

export type ComparisonCategorySlug = "phones" | "laptops" | "audio";

export type ComparisonCategory = {
  slug: ComparisonCategorySlug;
  name: LocalizedString;
  shortName: LocalizedString;
  description: LocalizedString;
};

export const comparisonCategories: ComparisonCategory[] = [
  {
    slug: "phones",
    name: { ko: "스마트폰", en: "Phones" },
    shortName: { ko: "폰", en: "Phones" },
    description: {
      ko: "플래그십·폴더블을 나란히 놓고 누구에게 맞는지 정리합니다.",
      en: "Flagships and foldables side by side — who each option fits.",
    },
  },
  {
    slug: "laptops",
    name: { ko: "노트북", en: "Laptops" },
    shortName: { ko: "노트북", en: "Laptops" },
    description: {
      ko: "휴대성·성능·디스플레이 기준으로 노트북을 비교합니다.",
      en: "Portability, performance, and display trade-offs across notebooks.",
    },
  },
  {
    slug: "audio",
    name: { ko: "오디오", en: "Audio" },
    shortName: { ko: "오디오", en: "Audio" },
    description: {
      ko: "헤드폰·이어버드 노이즈 캔슬링·통화·착용감을 비교합니다.",
      en: "Headphones and earbuds compared on ANC, calls, and comfort.",
    },
  },
];

export function getComparisonCategory(
  slug: string,
): ComparisonCategory | undefined {
  return comparisonCategories.find((c) => c.slug === slug);
}

export function isComparisonCategorySlug(
  value: string,
): value is ComparisonCategorySlug {
  return comparisonCategories.some((c) => c.slug === value);
}
