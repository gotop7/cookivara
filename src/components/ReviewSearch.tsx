"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getReviewCategory } from "@/data/review-categories";
import { searchProductReviews } from "@/data/product-reviews";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type ReviewSearchProps = {
  compact?: boolean;
  autoFocus?: boolean;
};

export function ReviewSearch({
  compact = false,
  autoFocus = false,
}: ReviewSearchProps) {
  const { locale, t } = useLocale();
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchProductReviews(query), [query]);
  const trimmed = query.trim();
  const showPanel = trimmed.length > 0;

  return (
    <div className={compact ? "relative w-full max-w-xs" : "relative w-full"}>
      <label className="sr-only" htmlFor={compact ? "review-search-header" : "review-search"}>
        {t.searchPlaceholder}
      </label>
      <div className="relative">
        <input
          id={compact ? "review-search-header" : "review-search"}
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
              <Link href="/reviews" className="text-[var(--accent)] hover:underline">
                {t.searchBrowseAll}
              </Link>
            </p>
          ) : (
            <ul className="divide-y divide-[var(--line)]">
              {results.map((review) => {
                const category = getReviewCategory(review.category);
                return (
                  <li key={review.slug}>
                    <Link
                      href={`/reviews/${review.category}/${review.slug}`}
                      className="block px-4 py-3 transition-colors hover:bg-[var(--bg-soft)]"
                      onClick={() => setQuery("")}
                    >
                      <p className="text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
                        {category
                          ? pick(locale, category.shortName)
                          : review.category}
                      </p>
                      <p className="mt-0.5 font-medium text-[var(--ink)]">
                        {pick(locale, review.productName)}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-[var(--ink-soft)]">
                        {pick(locale, review.summary)}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
