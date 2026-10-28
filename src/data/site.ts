/**
 * Site-wide Cookivara settings — edit contact email / author here.
 */
export const siteConfig = {
  name: "Cookivara",
  url: "https://www.news24h7d.com",
  author: {
    name: "Cookivara Kitchen",
    byline: {
      ko: "Cookivara Kitchen · Ryan Kim",
      en: "Cookivara Kitchen · Ryan Kim",
    },
  },
  /** Change this when you have a real inbox */
  contactEmail: "contact@cookivara.com",
  socialNote: {
    ko: "레시피 제안·오류 제보는 이메일로 보내 주세요.",
    en: "Send recipe ideas or corrections by email.",
  },
} as const;
