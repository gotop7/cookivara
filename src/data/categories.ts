import type { LocalizedString } from "@/i18n/types";

export type Category = {
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
};

export const categories: Category[] = [
  {
    slug: "korean",
    name: { ko: "한국", en: "Korean" },
    description: {
      ko: "반찬, 찌개, 고추장의 온기가 있는 밥 그릇.",
      en: "Banchan, stews, and rice bowls with gochujang warmth.",
    },
  },
  {
    slug: "chinese",
    name: { ko: "중국", en: "Chinese" },
    description: {
      ko: "웍에 살짝 익힌 채소, 부드러운 국물, 평일 볶음 요리.",
      en: "Wok-kissed vegetables, gentle broths, and weeknight stir-fries.",
    },
  },
  {
    slug: "european",
    name: { ko: "유럽", en: "European" },
    description: {
      ko: "투박한 파스타부터 허브가 선명한 접시까지.",
      en: "From rustic pastas to bright herb-forward plates.",
    },
  },
  {
    slug: "american",
    name: { ko: "미국", en: "American" },
    description: {
      ko: "편안한 클래식과 매일의 식탁 메뉴.",
      en: "Comfort classics and everyday table favorites.",
    },
  },
  {
    slug: "world",
    name: { ko: "월드", en: "World" },
    description: {
      ko: "여러 부엌과 문화를 넘나드는 요리.",
      en: "Dishes that travel well across kitchens and cultures.",
    },
  },
  {
    slug: "smoothie",
    name: { ko: "스무디", en: "Smoothie" },
    description: {
      ko: "빠르고 신선한 에너지를 위한 블렌드 볼과 잔.",
      en: "Blended bowls and glasses for quick, fresh fuel.",
    },
  },
  {
    slug: "vegetarian",
    name: { ko: "채식", en: "Vegetarian" },
    description: {
      ko: "그래도 든든한 식물 중심 식사.",
      en: "Plant-forward meals that still feel complete.",
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
