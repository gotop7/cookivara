import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Cookivara — who we are and why we publish home recipes.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function AboutPage() {
  return (
    <TrustPage
      title={L("Cookivara 소개", "About Cookivara")}
      intro={L(
        `Cookivara는 좋아하는 부엌별로 정리한 집밥 레시피 브랜드입니다. 현재 사이트는 ${siteConfig.displayDomain}에서 운영합니다. 한국·중국·유럽·미국·월드·스무디·채식 선반을 천천히 채우며, 다시 만들고 싶은 요리를 한국어와 영어로 함께 기록합니다.`,
        `Cookivara is a home-cooking recipe brand organized by the kitchens you love. The site currently lives at ${siteConfig.displayDomain}. We grow shelves for Korean, Chinese, European, American, World, Smoothie, and Vegetarian dishes — written in Korean and English so recipes are worth cooking again.`,
      )}
      sections={[
        {
          heading: L("운영", "Who runs it"),
          body: L(
            `${siteConfig.author.byline.ko}가 편집과 글쓰기를 담당합니다. 전문 테스트 키친이 아니라, 가정용 부엌을 기준으로 분량·시간·순서 설명을 다듬어 주말에 따라 하기 쉬운 글을 목표로 합니다.`,
            `${siteConfig.author.byline.en} edits and writes the collection. We do not run a professional test kitchen — recipes are developed and edited for home cooks, with amounts, timing, and steps written so you can follow along on a weekend without guesswork.`,
          ),
        },
        {
          heading: L("미션", "Mission"),
          body: L(
            "얇은 재료 목록만 나열하지 않고, 왜 이 버전인지·어디에 주의할지·흔히 하는 실수·담는 방법·남으면 어떻게 보관할지까지 적습니다. 사진은 요리 이미지를 우선하고, 도움이 되는 요리 영상은 신중히 연결합니다.",
            "We avoid thin ingredient lists alone. Flagship recipes explain why this version, what to watch for, common mistakes, plating, and how to store leftovers. We prefer real food photos and only link cooking videos when they are a clear match.",
          ),
        },
        {
          heading: L("사이트와 브랜드", "Site and brand"),
          body: L(
            `브랜드 이름은 Cookivara입니다. 라이브 도메인은 당분간 ${siteConfig.displayDomain}입니다. 문의는 ${siteConfig.contactEmail}로 보내 주세요.`,
            `The brand name is Cookivara. The live domain is ${siteConfig.displayDomain} for now. Reach us at ${siteConfig.contactEmail}.`,
          ),
        },
        {
          heading: L("언어", "Language"),
          body: L(
            "기본 언어는 한국어이며, 화면 상단에서 English로 전환할 수 있습니다. 재료 분량과 단계, 소개·문의·개인정보·이용약관 페이지는 두 언어를 함께 유지합니다.",
            "Korean is the default language; switch to English from the header. Ingredient amounts, steps, and trust pages (About, Contact, Privacy, Terms) stay bilingual throughout.",
          ),
        },
      ]}
    />
  );
}
