"use client";

import { TrustPage } from "@/components/TrustPage";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

const L = (ko: string, en: string) => ({ ko, en });

export default function ContactPage() {
  const { locale } = useLocale();
  const email = siteConfig.contactEmail;

  return (
    <TrustPage
      title={L("문의", "Contact")}
      intro={L(
        "레시피 수정 제안, 사진 오류, 협업·광고 문의는 아래 이메일로 보내 주세요. 보통 며칠 안에 답변드립니다.",
        "Send recipe corrections, photo issues, or partnership and advertising questions to the email below. We usually reply within a few days.",
      )}
      sections={[
        {
          heading: L("이메일", "Email"),
          body: L(
            `${pick(locale, siteConfig.socialNote)}\n\n${email}`,
            `${pick(locale, siteConfig.socialNote)}\n\n${email}`,
          ),
        },
        {
          heading: L("보내실 때", "What to include"),
          body: [
            L(
              "레시피 이름(또는 URL)과 수정이 필요한 부분",
              "Recipe name (or URL) and what needs fixing",
            ),
            L(
              "가능하면 사진·스크린샷",
              "A photo or screenshot when helpful",
            ),
            L(
              "광고·제휴 문의는 사이트/브랜드 소개를 함께",
              "For ads or partnerships, include a short brand intro",
            ),
          ],
        },
      ]}
    >
      <p className="mt-10">
        <a
          href={`mailto:${email}?subject=${encodeURIComponent("Cookivara contact")}`}
          className="inline-flex rounded-md bg-[var(--leaf)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--leaf-hover)]"
        >
          {locale === "ko" ? "이메일 보내기" : "Send email"}
        </a>
      </p>
    </TrustPage>
  );
}
