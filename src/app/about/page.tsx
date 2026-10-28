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
        "Cookivara는 좋아하는 부엌별로 정리한 집밥 레시피 사이트입니다. 한국·중국·유럽·미국·월드·스무디·채식 선반을 천천히 채우며, 다시 만들고 싶은 요리를 한국어와 영어로 함께 기록합니다.",
        "Cookivara is a home-cooking site organized by the kitchens you love. We grow shelves for Korean, Chinese, European, American, World, Smoothie, and Vegetarian dishes — written in Korean and English so recipes are worth cooking again.",
      )}
      sections={[
        {
          heading: L("운영", "Who runs it"),
          body: L(
            `${siteConfig.author.byline.ko}가 편집과 요리를 담당합니다. 테스트 키친에서 실제로 만들며 분량·시간·팁을 다듬고, 독자가 주말에 바로 따라 할 수 있는 글을 목표로 합니다.`,
            `${siteConfig.author.byline.en} edits and cooks the collection. We test recipes in a home kitchen, refine amounts and timing, and write so you can cook along on a weekend without guesswork.`,
          ),
        },
        {
          heading: L("미션", "Mission"),
          body: L(
            "얇은 재료 목록만 나열하지 않고, 왜 이 요리를 만드는지·어디에 주의할지·남으면 어떻게 보관할지까지 적습니다. 사진은 실제 요리 이미지를 우선하고, 도움이 되는 요리 영상은 신중히 연결합니다.",
            "We avoid thin ingredient lists alone. Each flagship recipe explains why the dish matters, what to watch for, and how to store leftovers. We prefer real food photos and only link cooking videos when they are a clear match.",
          ),
        },
        {
          heading: L("언어", "Language"),
          body: L(
            "기본 언어는 한국어이며, 화면 상단에서 English로 전환할 수 있습니다. 재료 분량과 단계는 두 언어를 함께 유지합니다.",
            "Korean is the default language; switch to English from the header. Ingredient amounts and steps stay bilingual throughout.",
          ),
        },
      ]}
    />
  );
}
