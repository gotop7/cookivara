import type { LocalizedString } from "@/i18n/types";

export type CategorySlug =
  | "reviews"
  | "comparisons"
  | "how-to"
  | "apps"
  | "news";

export type Category = {
  slug: CategorySlug;
  name: LocalizedString;
  description: LocalizedString;
};

export const categories: Category[] = [
  {
    slug: "reviews",
    name: { ko: "리뷰", en: "Reviews" },
    description: {
      ko: "스마트폰·노트북·주변기기 사용기. 스펙 나열이 아니라 실제 구매 판단에 필요한 장단점을 적습니다.",
      en: "Hands-on takes on phones, laptops, and accessories — trade-offs that matter before you buy, not spec sheets alone.",
    },
  },
  {
    slug: "comparisons",
    name: { ko: "비교", en: "Comparisons" },
    description: {
      ko: "비슷한 가격대·비슷한 용도의 제품/앱을 나란히 놓고 누구에게 맞는지 정리합니다.",
      en: "Side-by-side picks for similar budgets and jobs, with a clear recommendation for who each option fits.",
    },
  },
  {
    slug: "how-to",
    name: { ko: "가이드", en: "How-To" },
    description: {
      ko: "설정·보안·백업·구매 전 체크리스트처럼 따라 하면 끝나는 실전 가이드입니다.",
      en: "Practical walkthroughs — setup, privacy, backups, buying checklists — written so you can finish the job.",
    },
  },
  {
    slug: "apps",
    name: { ko: "앱", en: "Apps" },
    description: {
      ko: "생산성·사진·유틸 앱 추천과 튜토리얼. 무료/유료 경계와 대안을 함께 적습니다.",
      en: "Productivity, photo, and utility apps — including free vs paid boundaries and solid alternatives.",
    },
  },
  {
    slug: "news",
    name: { ko: "뉴스", en: "News" },
    description: {
      ko: "플랫폼·표준·정책 변화처럼 독자 선택에 영향을 주는 기술 이슈를 짧게 정리합니다.",
      en: "Short briefings on platforms, standards, and policy shifts that change what you should buy or configure.",
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
