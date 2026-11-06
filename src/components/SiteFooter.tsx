"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { t, locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <BrandMark size="sm" />
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
            {t.footerTagline}
          </p>
          <p className="text-sm text-[var(--ink-muted)]">
            {siteConfig.displayDomain} · {siteConfig.contactEmail}
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[var(--ink-muted)] uppercase">
            {t.categories}
          </p>
          <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
            <li>
              <Link href="/reviews" className="hover:text-[var(--accent)]">
                {t.navReviews}
              </Link>
            </li>
            <li>
              <Link href="/comparisons" className="hover:text-[var(--accent)]">
                {t.navComparisons}
              </Link>
            </li>
            <li>
              <Link href="/how-to" className="hover:text-[var(--accent)]">
                {t.navHowTo}
              </Link>
            </li>
            <li>
              <Link href="/apps" className="hover:text-[var(--accent)]">
                {t.navApps}
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-[var(--accent)]">
                {t.navNews}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[var(--ink-muted)] uppercase">
            {t.footerTrust}
          </p>
          <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
            <li>
              <Link href="/about" className="hover:text-[var(--accent)]">
                {t.navAbout}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--accent)]">
                {t.navContact}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[var(--accent)]">
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--accent)]">
                {t.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-[var(--ink-muted)] sm:px-6">
          © {year} {siteConfig.name}.{" "}
          {locale === "ko"
            ? `${siteConfig.displayDomain}에서 운영합니다.`
            : `Operated at ${siteConfig.displayDomain}.`}
        </p>
      </div>
    </footer>
  );
}
