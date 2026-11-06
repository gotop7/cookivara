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
  readMore: string;
  latest: string;
  categories: string;
  minutes: string;
  published: string;
  verdict: string;
  related: string;
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
    readMore: "읽기",
    latest: "최신 글",
    categories: "카테고리",
    minutes: "분 읽기",
    published: "게시",
    verdict: "한줄 평가",
    related: "같은 카테고리",
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
    readMore: "Read",
    latest: "Latest",
    categories: "Categories",
    minutes: "min read",
    published: "Published",
    verdict: "Verdict",
    related: "More in this category",
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
  },
};
