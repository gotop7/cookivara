import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "NookVolt privacy policy — what we collect and why.",
};

const L = (ko: string, en: string) => ({ ko, en });

export default function PrivacyPage() {
  return (
    <TrustPage
      title={L("개인정보 처리방침", "Privacy Policy")}
      intro={L(
        `NookVolt (${siteConfig.displayDomain})는 사이트 운영에 필요한 최소한의 정보만 다룹니다. 문의는 ${siteConfig.contactEmail}로 하세요.`,
        `NookVolt (${siteConfig.displayDomain}) collects only what is needed to run the site. Contact ${siteConfig.contactEmail} with privacy questions.`,
      )}
      sections={[
        {
          heading: L("수집하는 정보", "Information we collect"),
          body: L(
            "서버·호스팅 제공업체가 일반적인 접속 로그(IP, 브라우저, 방문 시각)를 처리할 수 있습니다. 언어 선호(KO/EN)는 브라우저 localStorage에 저장되며 서버로 전송하지 않습니다. 이메일로 문의하면 해당 메일과 내용이 수신함에 보관됩니다.",
            "Our hosting provider may process standard access logs (IP, browser, timestamps). Language preference (KO/EN) is stored in browser localStorage and is not sent to our servers. Emails you send are kept in the inbox for reply.",
          ),
        },
        {
          heading: L("쿠키·광고", "Cookies and ads"),
          body: L(
            "현재 필수 운영 목적 외의 추적 쿠키를 의도적으로 심지 않습니다. 향후 Google AdSense 등 광고를 연결할 경우, 해당 서비스의 쿠키·개인정보 안내가 적용되며 이 페이지를 업데이트합니다.",
            "We do not intentionally set non-essential tracking cookies today. If we later connect Google AdSense or similar ads, those services’ cookie notices will apply and this page will be updated.",
          ),
        },
        {
          heading: L("제3자", "Third parties"),
          body: L(
            "사이트는 Vercel 등 호스팅·배포 인프라를 통해 제공될 수 있습니다. 글 안의 외부 링크를 클릭하면 해당 사이트의 정책이 적용됩니다.",
            "The site may be served through hosting/CDN infrastructure such as Vercel. External links in articles are governed by those sites’ policies.",
          ),
        },
        {
          heading: L("문의", "Contact"),
          body: L(
            `개인정보 관련 요청은 ${siteConfig.contactEmail}로 보내 주세요.`,
            `For privacy requests, email ${siteConfig.contactEmail}.`,
          ),
        },
      ]}
    />
  );
}
