"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ReviewSearch } from "@/components/ReviewSearch";
import { reviewCategories } from "@/data/review-categories";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

const nav = [
  { href: "/comparisons", key: "navComparisons" as const },
  { href: "/how-to", key: "navHowTo" as const },
  { href: "/apps", key: "navApps" as const },
  { href: "/news", key: "navNews" as const },
];

export function SiteHeader() {
  const { t, locale } = useLocale();
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[rgba(15,20,25,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <BrandMark size="md" showWordmark className="min-w-0" />
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          <div
            className="relative"
            onMouseEnter={() => setReviewsOpen(true)}
            onMouseLeave={() => setReviewsOpen(false)}
          >
            <Link
              href="/reviews"
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              aria-expanded={reviewsOpen}
              aria-haspopup="true"
            >
              {t.navReviews}
            </Link>
            {reviewsOpen ? (
              <div className="absolute top-full left-0 z-50 min-w-[220px] border border-[var(--line)] bg-[var(--bg-elevated)] py-2 shadow-xl">
                <Link
                  href="/reviews"
                  className="block px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--bg-soft)]"
                >
                  {t.allReviews}
                </Link>
                <div className="my-1 border-t border-[var(--line)]" />
                {reviewCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/reviews/${category.slug}`}
                    className="block px-4 py-2 text-sm text-[var(--ink-soft)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
                  >
                    {pick(locale, category.shortName)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
            >
              {t[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <ReviewSearch compact />
          </div>
          <LanguageToggle />
        </div>
      </div>
      <div className="border-t border-[var(--line)]/60 lg:hidden">
        <nav
          aria-label="Categories"
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6"
        >
          <Link
            href="/reviews"
            className="shrink-0 rounded-full border border-[var(--accent)]/40 px-3 py-1.5 text-xs font-semibold text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
          >
            {t.navReviews}
          </Link>
          {reviewCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/reviews/${category.slug}`}
              className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              {pick(locale, category.shortName)}
            </Link>
          ))}
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              {t[item.key]}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[var(--line)]/60 px-4 py-2 md:hidden sm:px-6">
        <ReviewSearch compact />
      </div>
    </header>
  );
}
