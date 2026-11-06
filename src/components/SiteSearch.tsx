"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getComparisonCategory } from "@/data/comparison-categories";
import { searchComparisons } from "@/data/comparisons";
import { getReviewCategory } from "@/data/review-categories";
import { searchProductReviews } from "@/data/product-reviews";
import { searchArticles } from "@/data/articles";
import { getCategory } from "@/data/categories";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type SiteSearchProps = {
  compact?: boolean;
  autoFocus?: boolean;
};

type SearchHit =
  | {
      kind: "review";
      href: string;
      eyebrow: string;
      title: string;
      summary: string;
    }
  | {
      kind: "comparison";
      href: string;
      eyebrow: string;
      title: string;
      summary: string;
    }
  | {
      kind: "article";
      href: string;
      eyebrow: string;
      title: string;
      summary: string;
    };

export function SiteSearch({
  compact = false,
  autoFocus = false,
}: SiteSearchProps) {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const reviews = searchProductReviews(query).map((review): SearchHit => {
      const category = getReviewCategory(review.category);
      return {
        kind: "review",
        href: `/reviews/${review.category}/${review.slug}`,
        eyebrow: category
          ? `${t.navReviews} · ${pick(locale, category.shortName)}`
          : t.navReviews,
        title: pick(locale, review.productName),
        summary: pick(locale, review.summary),
      };
    });

    const comparisons = searchComparisons(query).map(
      (comparison): SearchHit => {
        const category = getComparisonCategory(comparison.category);
        return {
          kind: "comparison",
          href: `/comparisons/${comparison.category}/${comparison.slug}`,
          eyebrow: category
            ? `${t.navComparisons} · ${pick(locale, category.shortName)}`
            : t.navComparisons,
          title: pick(locale, comparison.pairName),
          summary: pick(locale, comparison.summary),
        };
      },
    );

    const articles = searchArticles(query).map((article): SearchHit => {
      const category = getCategory(article.category);
      return {
        kind: "article",
        href: `/articles/${article.slug}`,
        eyebrow: category ? pick(locale, category.name) : article.category,
        title: pick(locale, article.title),
        summary: pick(locale, article.excerpt),
      };
    });

    return [...comparisons, ...reviews, ...articles].slice(0, 12);
  }, [query, locale, t]);

  const trimmed = query.trim();
  const showPanel = trimmed.length > 0;

  return (
    <div className={compact ? "relative w-full max-w-xs" : "relative w-full"}>
      <label
        className="sr-only"
        htmlFor={compact ? "site-search-header" : "site-search"}
      >
        {t.searchPlaceholder}
      </label>
      <div className="relative">
        <input
          id={compact ? "site-search-header" : "site-search"}
          type="search"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className={
            compact
              ? "w-full rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-1.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] outline-none focus:border-[var(--accent)]"
              : "w-full rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--ink-muted)] outline-none focus:border-[var(--accent)]"
          }
          autoComplete="off"
        />
      </div>

      {showPanel ? (
        <div
          className={
            compact
              ? "absolute right-0 left-0 z-50 mt-2 max-h-80 overflow-auto rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] shadow-xl"
              : "mt-4 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)]"
          }
          role="listbox"
          aria-label={t.searchResults}
        >
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-[var(--ink-muted)]">
              {t.searchEmpty}{" "}
              <Link
                href="/comparisons"
                className="text-[var(--accent)] hover:underline"
              >
                {t.searchBrowseComparisons}
              </Link>
              {" · "}
              <Link
                href="/reviews"
                className="text-[var(--accent)] hover:underline"
              >
                {t.searchBrowseAll}
              </Link>
            </p>
          ) : (
            <ul className="divide-y divide-[var(--line)]">
              {results.map((hit) => (
                <li key={`${hit.kind}-${hit.href}`}>
                  <Link
                    href={hit.href}
                    className="block px-4 py-3 transition-colors hover:bg-[var(--bg-soft)]"
                    onClick={() => setQuery("")}
                  >
                    <p className="text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
                      {hit.eyebrow}
                    </p>
                    <p className="mt-0.5 font-medium text-[var(--ink)]">
                      {hit.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-[var(--ink-soft)]">
                      {hit.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
