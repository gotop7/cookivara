/**
 * NookVolt site-wide settings — edit contact / author here.
 *
 * Brand name is NookVolt. The live domain remains news24h7d.com.
 */
export const siteConfig = {
  name: "NookVolt",
  tagline: {
    ko: "기술·가젯 리뷰와 실전 가이드",
    en: "Technology & gadget reviews that stay useful",
  },
  url: "https://www.news24h7d.com",
  displayDomain: "news24h7d.com",
  author: {
    name: "Ryan Kim",
    byline: {
      ko: "Ryan Kim · NookVolt 편집",
      en: "Ryan Kim · NookVolt editor",
    },
  },
  contactEmail: "hello@news24h7d.com",
  logoPath: "/brand/nookvolt-logo.png",
  ogImagePath: "/brand/nookvolt-og.png",
  socialNote: {
    ko: "정정·제보·협업 제안은 이메일로 보내 주세요.",
    en: "Corrections, tips, and collaboration ideas welcome by email.",
  },
} as const;
