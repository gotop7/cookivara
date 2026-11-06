import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Cordnook terms of use.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function TermsPage() {
  return (
    <TrustPage
      title={L("이용약관", "Terms of Use")}
      intro={L(
        `${siteConfig.name} (${siteConfig.displayDomain}) 웹사이트를 이용하면 아래 약관에 동의하는 것으로 간주합니다.`,
        `By using ${siteConfig.name} at ${siteConfig.displayDomain}, you agree to these terms.`,
      )}
      sections={[
        {
          heading: L("콘텐츠", "Content"),
          body: L(
            "리뷰·가이드·의견은 게시 시점의 정보와 편집 판단에 따릅니다. 제품·가격·소프트웨어는 바뀔 수 있으며, 구매·설정 결정의 책임은 이용자에게 있습니다. 전문 법률·의료·금융 자문이 아닙니다.",
            "Reviews, guides, and opinions reflect information and editorial judgment at publish time. Products, prices, and software change; you are responsible for purchase and setup decisions. This is not legal, medical, or financial advice.",
          ),
        },
        {
          heading: L("지적재산", "Intellectual property"),
          body: L(
            "달리 표시되지 않는 한 사이트 텍스트·브랜드·로고는 Cordnook에 귀속됩니다. 개인적 비상업적 인용은 출처와 링크를 밝혀 주세요. 대량 복제·재배포는 사전 서면 동의 없이 할 수 없습니다.",
            "Unless noted otherwise, site text, brand, and logo belong to Cordnook. Personal non-commercial quotes should credit and link the source. Bulk copying or redistribution requires prior written consent.",
          ),
        },
        {
          heading: L("면책", "Disclaimer"),
          body: L(
            "사이트는 ‘있는 그대로’ 제공됩니다. 이용으로 인한 직접·간접 손해에 대해, 법이 허용하는 범위에서 책임을 제한합니다.",
            "The site is provided as-is. To the extent allowed by law, we limit liability for damages arising from use.",
          ),
        },
        {
          heading: L("문의", "Contact"),
          body: L(
            `약관 관련 문의: ${siteConfig.contactEmail}`,
            `Terms questions: ${siteConfig.contactEmail}`,
          ),
        },
      ]}
    />
  );
}
