"use client";

import Link from "next/link";
import type { ComparisonCategory } from "@/data/comparison-categories";
import { getComparisonsByCategory } from "@/data/comparisons";
import { ComparisonCard } from "@/components/ComparisonCard";
import { SiteSearch } from "@/components/SiteSearch";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ComparisonCategoryClient({
  category,
}: {
  category: ComparisonCategory;
}) {
  const { locale, t } = useLocale();
  const items = getComparisonsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        <Link href="/comparisons" className="hover:underline">
          {t.navComparisons}
        </Link>
        <span className="text-[var(--ink-muted)]">/</span>
        <span>{pick(locale, category.name)}</span>
      </div>
      <h1 className="font-display text-3xl text-[var(--ink)] sm:text-4xl">
        {pick(locale, category.name)}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
        {pick(locale, category.description)}
      </p>

      <div className="mt-8 max-w-xl">
        <SiteSearch />
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-[var(--ink-muted)]">
          {t.emptyCategory}{" "}
          <Link
            href="/comparisons"
            className="text-[var(--accent)] hover:underline"
          >
            {t.navComparisons}
          </Link>
        </p>
      ) : (
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {items.map((comparison) => (
            <ComparisonCard key={comparison.slug} comparison={comparison} />
          ))}
        </div>
      )}
    </div>
  );
}
