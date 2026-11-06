import type { LocalizedString } from "@/i18n/types";

export type ReviewCategorySlug =
  | "phones"
  | "laptops-tablets"
  | "monitors"
  | "headphones"
  | "smartwatches"
  | "accessories";

export type ReviewCategory = {
  slug: ReviewCategorySlug;
  name: LocalizedString;
  shortName: LocalizedString;
  description: LocalizedString;
};

export const reviewCategories: ReviewCategory[] = [
  {
    slug: "phones",
    name: { ko: "스마트폰", en: "Phones" },
    shortName: { ko: "폰", en: "Phone" },
    description: {
      ko: "플래그십·중급 스마트폰 구매 전 체크포인트. 카메라·배터리·생태계를 중심으로 정리합니다.",
      en: "Flagship and midrange phones — camera, battery, and ecosystem trade-offs before you buy.",
    },
  },
  {
    slug: "laptops-tablets",
    name: { ko: "노트북·태블릿", en: "Laptops & Tablets" },
    shortName: { ko: "노트북/태블릿", en: "Laptop / Tablet" },
    description: {
      ko: "휴대성·성능·디스플레이를 기준으로 노트북과 태블릿을 고릅니다.",
      en: "Portability, performance, and display picks across notebooks and tablets.",
    },
  },
  {
    slug: "monitors",
    name: { ko: "모니터", en: "Monitors" },
    shortName: { ko: "모니터", en: "Monitors" },
    description: {
      ko: "업무·콘텐츠·게이밍용 모니터. USB-C 급전·해상도·패널 타입을 우선 봅니다.",
      en: "Work, creative, and gaming displays — USB-C power, resolution, and panel type first.",
    },
  },
  {
    slug: "headphones",
    name: { ko: "헤드폰·오디오", en: "Headphones & Audio" },
    shortName: { ko: "오디오", en: "Audio" },
    description: {
      ko: "노이즈 캔슬링·통화·착용감 중심으로 헤드폰과 이어버드를 비교합니다.",
      en: "ANC, calls, and comfort — over-ear and earbuds compared for daily listening.",
    },
  },
  {
    slug: "smartwatches",
    name: { ko: "스마트워치", en: "Smartwatches" },
    shortName: { ko: "워치", en: "Watches" },
    description: {
      ko: "건강·알림·배터리 수명. 폰 생태계에 맞는 워치를 고르는 기준입니다.",
      en: "Health, notifications, and battery life — watches matched to your phone ecosystem.",
    },
  },
  {
    slug: "accessories",
    name: { ko: "액세서리", en: "Accessories" },
    shortName: { ko: "액세서리", en: "Accessories" },
    description: {
      ko: "충전기·마우스·주변기기처럼 매일 쓰게 되는 작은 선택들.",
      en: "Chargers, mice, and everyday peripherals that quietly decide your desk comfort.",
    },
  },
];

export function getReviewCategory(
  slug: string,
): ReviewCategory | undefined {
  return reviewCategories.find((c) => c.slug === slug);
}

export function isReviewCategorySlug(
  value: string,
): value is ReviewCategorySlug {
  return reviewCategories.some((c) => c.slug === value);
}
