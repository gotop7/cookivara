import type { Locale } from "./types";

export const messages = {
  ko: {
    navRecipes: "레시피",
    navBrowse: "둘러보기",
    categoriesAria: "카테고리",
    languageAria: "언어 선택",
    heroTagline: "좋아하는 부엌별로 정리한 집밥.",
    heroBody:
      "완성된 한국 비빔밥 한 그릇부터 시작하세요. 중국, 유럽, 미국, 월드, 스무디, 채식 선반을 하나씩 채워 갑니다.",
    ctaCookBibimbap: "비빔밥 요리하기",
    ctaBrowseRecipes: "레시피 보기",
    shelvesTitle: "일곱 개의 부엌 선반",
    shelvesIntro:
      "모든 레시피는 분명한 카테고리 아래에 있어, 모음이 커져도 찾기 쉽습니다.",
    recipesComingSoon: "레시피 준비 중",
    recipeCount: (n: number) => (n === 1 ? "레시피 1개" : `레시피 ${n}개`),
    collectionLabel: "모음",
    allRecipesTitle: "모든 레시피",
    allRecipesIntro:
      "부엌 선반별로 둘러보세요. 비어 있는 선반은 데이터 파일에 다음 레시피를 추가하면 채워집니다.",
    comingSoon: "곧 공개",
    noCategoryRecipes: (name: string) => `아직 ${name} 레시피가 없습니다.`,
    minutesShort: "분",
    categoryLabel: "카테고리",
    emptyTitle: (name: string) => `${name} 레시피 준비 중`,
    emptyBody: (name: string) =>
      `이 선반은 준비되어 있습니다. ${name} 요리가 모이면 여기에 자리합니다.`,
    tryBibimbap: "오늘의 비빔밥 먼저 보기",
    otherShelves: "다른 선반",
    servings: "인분",
    prep: "준비",
    cook: "조리",
    level: "난이도",
    ingredients: "재료",
    steps: "순서",
    prepCookMeta: (prep: number, cook: number) =>
      `준비 ${prep}분 · 조리 ${cook}분`,
    totalTimeMeta: (total: number, level: string) => `${total}분 · ${level}`,
    footerTagline: "Cookivara — 다시 만들고 싶은 레시피.",
    footerAllRecipes: "모든 레시피",
    heroImageAlt: "신선한 채소와 계란이 올라간 다채로운 밥 그릇",
    watchOnYoutube: "유튜브에서 보기",
    langKo: "한국어",
    langEn: "English",
  },
  en: {
    navRecipes: "Recipes",
    navBrowse: "Browse",
    categoriesAria: "Categories",
    languageAria: "Language",
    heroTagline: "Home cooking, sorted by the kitchens you love.",
    heroBody:
      "Start with one complete Korean bowl, then grow the shelves — Chinese, European, American, World, Smoothie, and Vegetarian.",
    ctaCookBibimbap: "Cook the bibimbap",
    ctaBrowseRecipes: "Browse recipes",
    shelvesTitle: "Seven kitchen shelves",
    shelvesIntro:
      "Every recipe lives under a clear category so the collection stays easy to browse as it grows.",
    recipesComingSoon: "Recipes coming soon",
    recipeCount: (n: number) => (n === 1 ? "1 recipe" : `${n} recipes`),
    collectionLabel: "Collection",
    allRecipesTitle: "All recipes",
    allRecipesIntro:
      "Browse by kitchen shelf. Empty shelves are waiting for the next recipe you add in the data file.",
    comingSoon: "Coming soon",
    noCategoryRecipes: (name: string) => `No ${name.toLowerCase()} recipes yet.`,
    minutesShort: "min",
    categoryLabel: "Category",
    emptyTitle: (name: string) => `${name} recipes coming soon`,
    emptyBody: (name: string) =>
      `This shelf is ready. New ${name.toLowerCase()} dishes will land here as the collection grows.`,
    tryBibimbap: "Try today's bibimbap instead",
    otherShelves: "Other shelves",
    servings: "Servings",
    prep: "Prep",
    cook: "Cook",
    level: "Level",
    ingredients: "Ingredients",
    steps: "Steps",
    prepCookMeta: (prep: number, cook: number) =>
      `${prep} min prep · ${cook} min cook`,
    totalTimeMeta: (total: number, level: string) => `${total} min · ${level}`,
    footerTagline: "Cookivara — recipes worth cooking again.",
    footerAllRecipes: "All recipes",
    heroImageAlt: "Colorful rice bowls with fresh vegetables and a fried egg",
    watchOnYoutube: "Watch on YouTube",
    langKo: "한국어",
    langEn: "English",
  },
} as const;

export type Messages = (typeof messages)[Locale];
