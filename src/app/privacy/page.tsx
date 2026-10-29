import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Cookivara recipe site and advertising.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function PrivacyPage() {
  return (
    <TrustPage
      title={L("개인정보 처리방침", "Privacy Policy")}
      intro={L(
        `시행일: 2026년 3월 1일 · 최종 업데이트: 2026년 10월 29일. Cookivara는 ${siteConfig.displayDomain}(${siteConfig.url})에서 운영하는 요리 레시피 사이트입니다. 본 방침은 방문 시 수집·이용될 수 있는 정보를 설명합니다.`,
        `Effective March 1, 2026 · Last updated October 29, 2026. Cookivara is a recipe site operated at ${siteConfig.displayDomain} (${siteConfig.url}). This policy explains information that may be collected when you visit.`,
      )}
      sections={[
        {
          heading: L("수집하는 정보", "Information we collect"),
          body: L(
            "계정 가입 없이 레시피를 열람할 수 있습니다. 서버·호스팅 제공업체는 일반적인 접속 로그(IP, 브라우저, 방문 시각, 페이지 URL)를 기록할 수 있습니다. 문의 이메일을 보내시면 회신에 필요한 주소와 메시지 내용이 보관됩니다.",
            "You can read recipes without creating an account. Our hosting provider may record standard access logs (IP address, browser, time, page URL). If you email us, we keep your address and message to reply.",
          ),
        },
        {
          heading: L("쿠키와 광고", "Cookies and advertising"),
          body: L(
            "언어 선택 등 사이트 설정은 브라우저 로컬 스토리지를 사용할 수 있습니다. 현재 페이지에 Google AdSense 광고 코드가 상시 삽입되어 있지는 않습니다. 앞으로 사이트 운영을 위해 Google AdSense 등 광고·측정 서비스를 사용할 수 있으며, 그때는 광고 파트너가 쿠키나 유사 기술을 설정·읽어 문맥·관심사 기반 광고를 표시할 수 있습니다. 광고가 켜지면 Google 광고 설정(https://adssettings.google.com)과 aboutads.info에서 맞춤 광고를 관리할 수 있습니다. 브라우저에서 쿠키를 거부·삭제할 수 있으나 일부 기능이 제한될 수 있습니다.",
            "Site preferences such as language may use browser local storage. AdSense ad code is not permanently installed on every page today. We may use advertising or measurement services such as Google AdSense in the future; when ads are enabled, partners may set or read cookies or similar technologies for contextual or interest-based ads. Once ads are on, manage Google ad settings at https://adssettings.google.com and industry opt-outs at aboutads.info. You can block or delete cookies in your browser, though some features may not work.",
          ),
        },
        {
          heading: L("정보의 이용", "How we use information"),
          body: L(
            "서비스 제공·보안·오류 수정·독자 문의 응대·법적 의무 이행을 위해 정보를 사용합니다. 판매 목적으로 개인정보를 제3자에게 팔지 않습니다.",
            "We use information to operate the site, keep it secure, fix errors, answer reader questions, and meet legal duties. We do not sell personal information.",
          ),
        },
        {
          heading: L("제3자 서비스", "Third-party services"),
          body: L(
            "호스팅(예: Vercel)과, 여러분이 여는 YouTube 링크는 해당 제공업체의 정책이 적용됩니다. 광고·분석(예: Google)을 연결하는 경우에도 그 정책이 적용됩니다. 외부 사이트로 이동하기 전에 해당 정책을 확인하세요.",
            "Hosting (e.g. Vercel) and YouTube links you open are governed by those providers’ policies. If we connect advertising or analytics (e.g. Google), those policies apply too. Review them before leaving our site.",
          ),
        },
        {
          heading: L("아동", "Children"),
          body: L(
            "본 사이트는 만 13세 미만 아동을 대상으로 하지 않으며, 고의로 아동의 개인정보를 수집하지 않습니다.",
            "This site is not directed at children under 13, and we do not knowingly collect their personal information.",
          ),
        },
        {
          heading: L("문의", "Contact"),
          body: L(
            `개인정보 관련 문의: ${siteConfig.contactEmail}\n사이트: ${siteConfig.url}`,
            `Privacy questions: ${siteConfig.contactEmail}\nSite: ${siteConfig.url}`,
          ),
        },
      ]}
    />
  );
}
