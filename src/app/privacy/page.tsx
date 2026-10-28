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
        `시행일: 2026년 3월 1일 · 최종 업데이트: 2026년 10월 28일. Cookivara는 ${siteConfig.displayDomain}(${siteConfig.url})에서 운영하는 요리 레시피 사이트입니다. 본 방침은 방문 시 수집·이용될 수 있는 정보를 설명합니다.`,
        `Effective March 1, 2026 · Last updated October 28, 2026. Cookivara is a recipe site operated at ${siteConfig.displayDomain} (${siteConfig.url}). This policy explains information that may be collected when you visit.`,
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
            "사이트 개선·트래픽 파악·광고를 위해 쿠키와 유사 기술(로컬 스토리지 등)이 사용될 수 있습니다. Google AdSense 등 광고 파트너가 페이지에 광고를 게재할 경우, 해당 파트너가 기기에서 쿠키를 설정하거나 읽어 관심사 기반·문맥 광고를 표시할 수 있습니다. Google 광고 설정(https://adssettings.google.com)과 aboutads.info에서 맞춤 광고를 관리할 수 있습니다. 브라우저에서 쿠키를 거부하거나 삭제할 수 있으나, 일부 기능·광고 표시가 제한될 수 있습니다. 언어 선택 등 사이트 설정은 브라우저 저장소를 사용할 수 있습니다.",
            "We may use cookies and similar technologies (including local storage) for site improvement, traffic measurement, and advertising. When partners such as Google AdSense serve ads, they may set or read cookies on your device to show interest-based or contextual ads. Manage Google ad settings at https://adssettings.google.com and industry opt-outs at aboutads.info. You can block or delete cookies in your browser, though some features or ads may not work. Site preferences such as language may use browser storage.",
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
            "호스팅(예: Vercel), 분석·광고(예: Google), 임베드되거나 연결된 YouTube 링크를 열면 해당 서비스의 정책이 적용됩니다. 외부 사이트로 이동하기 전에 해당 정책을 확인하세요.",
            "Hosting (e.g. Vercel), analytics/ads (e.g. Google), and YouTube links you open are governed by those providers’ policies. Review them before leaving our site.",
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
