import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Cookivara.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function TermsPage() {
  return (
    <TrustPage
      title={L("이용약관", "Terms of Use")}
      intro={L(
        `Cookivara(${siteConfig.url})를 이용하면 아래 약관에 동의한 것으로 봅니다. 동의하지 않으면 사이트를 이용하지 마세요.`,
        `By using Cookivara (${siteConfig.url}) you agree to these terms. If you do not agree, please do not use the site.`,
      )}
      sections={[
        {
          heading: L("서비스 내용", "The service"),
          body: L(
            "Cookivara는 가정용 요리 레시피와 관련 정보를 제공합니다. 레시피는 일반적인 안내이며, 알레르기·식이 제한·식품 안전은 이용자 스스로 확인해야 합니다.",
            "Cookivara publishes home cooking recipes and related guidance. Recipes are general information; you must check allergies, dietary needs, and food safety yourself.",
          ),
        },
        {
          heading: L("지적재산", "Intellectual property"),
          body: L(
            "사이트 문구·구성·브랜드(Cookivara)는 운영자에게 귀속됩니다. 개인적·비상업적 열람은 허용되나, 사전 서면 동의 없이 대량 복제·재배포·스크래핑을 금합니다. 일부 음식 사진은 라이선스가 있는 자료를 사용할 수 있으며, 출처 표기를 존중합니다.",
            "Site text, structure, and the Cookivara brand belong to the operator. Personal, non-commercial viewing is fine; bulk copying, republishing, or scraping without written permission is not. Some food photos may use licensed sources—respect those attributions.",
          ),
        },
        {
          heading: L("이용자 책임", "Your responsibilities"),
          body: L(
            "불법·유해한 목적으로 사이트를 이용하지 마세요. 레시피를 따라 요리할 때의 결과(화상, 식중독 등)에 대해 운영자는 합리적인 주의를 기울이지만, 가정 환경의 차이에 따른 결과에 대해 보증하지 않습니다.",
            "Do not use the site for illegal or harmful purposes. We take reasonable care with recipes, but we do not guarantee outcomes in every home kitchen (burns, foodborne illness, etc.).",
          ),
        },
        {
          heading: L("광고", "Advertising"),
          body: L(
            "사이트에 제3자 광고가 표시될 수 있습니다. 광고 내용·거래는 해당 광고주와의 관계이며, Cookivara가 보증하지 않습니다.",
            "Third-party ads may appear. Ad content and any transaction are between you and the advertiser; Cookivara does not endorse them.",
          ),
        },
        {
          heading: L("면책", "Disclaimer"),
          body: L(
            "콘텐츠는 “있는 그대로” 제공됩니다. 법령이 허용하는 범위에서 간접·특별·결과적 손해에 대한 책임을 제한합니다.",
            "Content is provided “as is.” To the fullest extent allowed by law, we limit liability for indirect, special, or consequential damages.",
          ),
        },
        {
          heading: L("변경", "Changes"),
          body: L(
            "약관은 필요 시 갱신될 수 있습니다. 중요한 변경이 있으면 이 페이지의 시행일을 수정합니다.",
            "We may update these terms. Material changes will be reflected by revising the date on this page.",
          ),
        },
        {
          heading: L("문의", "Contact"),
          body: L(
            `약관 문의: ${siteConfig.contactEmail}`,
            `Terms questions: ${siteConfig.contactEmail}`,
          ),
        },
      ]}
    />
  );
}
