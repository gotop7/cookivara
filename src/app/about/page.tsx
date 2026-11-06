import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About NookVolt — technology & gadget reviews edited by Ryan Kim.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function AboutPage() {
  return (
    <TrustPage
      title={L("NookVolt 소개", "About NookVolt")}
      intro={L(
        `NookVolt는 스마트폰 리뷰, 제품 비교, 앱 튜토리얼, 소프트웨어 가이드, 기술 뉴스를 다루는 기술·가젯 미디어 브랜드입니다. 사이트는 ${siteConfig.displayDomain}에서 운영합니다.`,
        `NookVolt is a technology and gadget media brand covering smartphone reviews, product comparisons, app tutorials, software guides, and tech news. The site is operated at ${siteConfig.displayDomain}.`,
      )}
      sections={[
        {
          heading: L("운영·편집", "Who runs it"),
          body: L(
            `${siteConfig.author.byline.ko}가 기획·취재·편집을 담당합니다. 전문 하드웨어 테스트 랩을 운영하지 않습니다. 제품 리뷰 카탈로그는 MKBHD, Linus Tech Tips, Wirecutter, RTINGS, GSMArena, Notebookcheck, Consumer Reports 등 평판 있는 공개 리뷰·측정을 인용한 집계·편집 리서치입니다. “우리가 실험실에서 측정했다”고 쓰지 않으며, 추측성 점수를 만들어 내지 않습니다.`,
            `${siteConfig.author.byline.en} plans, reports, and edits the site. We do not run a professional hardware test lab. The product review catalog is aggregated editorial research citing reputable public reviews and measurements (MKBHD, Linus Tech Tips, Wirecutter, RTINGS, GSMArena, Notebookcheck, Consumer Reports, and similar). We do not claim “we lab-tested this,” and we do not invent scores.`,
          ),
        },
        {
          heading: L("무엇을 쓰는가", "What we publish"),
          body: L(
            "리뷰는 구매 전 판단에 필요한 장단점 중심입니다. 비교는 승자 하나보다 사용자 유형별 추천을, 가이드는 따라 끝내기 쉬운 순서를 목표로 합니다. 인용 출처는 각 제품 리뷰 페이지에 이름과 링크로 밝힙니다. 광고·제휴 시에는 해당 글에 관계를 밝힙니다.",
            "Reviews focus on trade-offs before you buy. Comparisons recommend by user type rather than a fake single winner. Guides aim for finishable steps. Cited sources are named and linked on each product review page. Sponsored or affiliate relationships are disclosed on the relevant page.",
          ),
        },
        {
          heading: L("브랜드와 도메인", "Brand and domain"),
          body: L(
            `브랜드 이름은 NookVolt입니다. 라이브 도메인은 ${siteConfig.displayDomain}입니다. 문의는 ${siteConfig.contactEmail}로 보내 주세요.`,
            `The brand name is NookVolt. The live domain is ${siteConfig.displayDomain}. Reach us at ${siteConfig.contactEmail}.`,
          ),
        },
        {
          heading: L("언어", "Language"),
          body: L(
            "기본 언어는 한국어이며, 헤더에서 English로 전환할 수 있습니다. 선호 언어는 브라우저에 저장됩니다. 본문·소개·문의·개인정보·이용약관은 두 언어를 함께 유지합니다. 리뷰 검색은 한국어·영어 제품명·제목을 함께 찾습니다.",
            "Korean is the default; switch to English from the header. The preference is stored in your browser. Articles and trust pages stay bilingual. Review search matches Korean and English product names and titles.",
          ),
        },
      ]}
    />
  );
}
