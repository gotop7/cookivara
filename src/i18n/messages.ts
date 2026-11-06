import type { Locale } from "./types";

export type Messages = {
  languageAria: string;
  langKo: string;
  langEn: string;
  navHome: string;
  navReviews: string;
  navComparisons: string;
  navHowTo: string;
  navApps: string;
  navNews: string;
  navAbout: string;
  navContact: string;
  allReviews: string;
  readMore: string;
  readReview: string;
  latest: string;
  latestReviews: string;
  categories: string;
  reviewCategoriesHeading: string;
  productsCount: string;
  minutes: string;
  published: string;
  verdict: string;
  related: string;
  moreInCategory: string;
  allInCategory: string;
  footerTagline: string;
  footerTrust: string;
  privacy: string;
  terms: string;
  contactCta: string;
  homeEyebrow: string;
  homeHeadline: string;
  homeLead: string;
  homeCtaPrimary: string;
  homeCtaSecondary: string;
  emptyCategory: string;
  backHome: string;
  searchPlaceholder: string;
  searchResults: string;
  searchEmpty: string;
  searchBrowseAll: string;
  reviewsIndexTitle: string;
  reviewsIndexLead: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourceArticle: string;
  editorialNote: string;
};

export const messages: Record<Locale, Messages> = {
  ko: {
    languageAria: "언어 선택",
    langKo: "한국어",
    langEn: "English",
    navHome: "홈",
    navReviews: "리뷰",
    navComparisons: "비교",
    navHowTo: "가이드",
    navApps: "앱",
    navNews: "뉴스",
    navAbout: "소개",
    navContact: "문의",
    allReviews: "전체 리뷰",
    readMore: "읽기",
    readReview: "상세 리뷰",
    latest: "최신 글",
    latestReviews: "최근 제품 리뷰",
    categories: "카테고리",
    reviewCategoriesHeading: "리뷰 카테고리",
    productsCount: "제품",
    minutes: "분 읽기",
    published: "게시",
    verdict: "한줄 평가",
    related: "같은 카테고리",
    moreInCategory: "같은 카테고리 제품",
    allInCategory: "이 카테고리 글",
    footerTagline: "기술·가젯 리뷰와 실전 가이드",
    footerTrust: "신뢰·정책",
    privacy: "개인정보",
    terms: "이용약관",
    contactCta: "이메일 보내기",
    homeEyebrow: "Technology & gadget reviews",
    homeHeadline: "스펙보다, 사기 전에 필요한 말",
    homeLead:
      "스마트폰 리뷰, 제품 비교, 앱 튜토리얼, 설정 가이드를 한국어와 영어로 함께 제공합니다.",
    homeCtaPrimary: "최신 리뷰 보기",
    homeCtaSecondary: "NookVolt 소개",
    emptyCategory: "아직 이 카테고리 글이 없습니다.",
    backHome: "홈으로",
    searchPlaceholder: "제품·제목·카테고리 검색 (한/영)",
    searchResults: "검색 결과",
    searchEmpty: "일치하는 리뷰가 없습니다.",
    searchBrowseAll: "전체 리뷰 보기",
    reviewsIndexTitle: "제품 리뷰 카탈로그",
    reviewsIndexLead:
      "카테고리별로 고르거나 검색하세요. 각 리뷰는 평판 있는 리뷰 출처를 인용한 편집 요약입니다 — NookVolt가 실험실에서 직접 측정한 결과가 아닙니다.",
    sourcesHeading: "인용 출처",
    sourcesLead:
      "아래 링크의 리뷰·측정을 참고해 작성한 원문 요약입니다. 본문을 베끼지 않았으며, 원문에서 직접 확인하세요.",
    sourceArticle: "기사",
    editorialNote: "집계·편집 리서치",
  },
  en: {
    languageAria: "Language",
    langKo: "한국어",
    langEn: "English",
    navHome: "Home",
    navReviews: "Reviews",
    navComparisons: "Comparisons",
    navHowTo: "How-To",
    navApps: "Apps",
    navNews: "News",
    navAbout: "About",
    navContact: "Contact",
    allReviews: "All reviews",
    readMore: "Read",
    readReview: "Full review",
    latest: "Latest",
    latestReviews: "Latest product reviews",
    categories: "Categories",
    reviewCategoriesHeading: "Review categories",
    productsCount: "products",
    minutes: "min read",
    published: "Published",
    verdict: "Verdict",
    related: "More in this category",
    moreInCategory: "More in this category",
    allInCategory: "Articles in this category",
    footerTagline: "Technology & gadget reviews that stay useful",
    footerTrust: "Trust & policies",
    privacy: "Privacy",
    terms: "Terms",
    contactCta: "Email us",
    homeEyebrow: "Technology & gadget reviews",
    homeHeadline: "What you need before you buy — not just the specs",
    homeLead:
      "Smartphone reviews, product comparisons, app tutorials, and setup guides in Korean and English.",
    homeCtaPrimary: "Browse latest reviews",
    homeCtaSecondary: "About NookVolt",
    emptyCategory: "No articles in this category yet.",
    backHome: "Back home",
    searchPlaceholder: "Search products, titles, categories (KO/EN)",
    searchResults: "Search results",
    searchEmpty: "No matching reviews.",
    searchBrowseAll: "Browse all reviews",
    reviewsIndexTitle: "Product review catalog",
    reviewsIndexLead:
      "Browse by category or search. Each review is an editorial summary citing reputable sources — not lab measurements by NookVolt.",
    sourcesHeading: "Sources cited",
    sourcesLead:
      "Original summaries informed by the linked reviews and measurements. We do not copy their prose — verify details at the source.",
    sourceArticle: "Article",
    editorialNote: "Aggregated editorial research",
  },
};
