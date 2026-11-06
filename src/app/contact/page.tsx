import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact NookVolt at ${siteConfig.contactEmail}.`,
};

const L = (ko: string, en: string) => ({ ko, en });

export default function ContactPage() {
  return (
    <TrustPage
      title={L("문의", "Contact")}
      intro={L(
        `NookVolt (${siteConfig.displayDomain})에 연락하려면 ${siteConfig.contactEmail}로 메일을 보내 주세요. 정정 요청, 제품 대여·리뷰 제안, 일반 문의에 사용합니다.`,
        `To reach NookVolt at ${siteConfig.displayDomain}, email ${siteConfig.contactEmail}. Use that address for corrections, review loan offers, and general questions.`,
      )}
      sections={[
        {
          heading: L("이메일", "Email"),
          body: L(
            `${siteConfig.contactEmail} — 도메인과 일치하는 공식 연락처입니다. 소셜 DM보다 이메일을 우선합니다.`,
            `${siteConfig.contactEmail} — the official contact matching our domain. Prefer email over social DMs.`,
          ),
        },
        {
          heading: L("회신 안내", "Response"),
          body: L(
            "영업일 기준 보통 수일 내 회신을 목표로 합니다. 보안·개인정보 관련 민감한 첨부파일은 암호 없이 보내지 마세요.",
            "We aim to reply within a few business days. Do not send sensitive attachments without encryption.",
          ),
        },
        {
          heading: L("제보·정정", "Tips and corrections"),
          body: L(
            siteConfig.socialNote.ko,
            siteConfig.socialNote.en,
          ),
        },
      ]}
    />
  );
}
