"use client";

import Link from "next/link";
import { getReviewCategory } from "@/data/review-categories";
import type { ProductReview } from "@/data/product-reviews";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ProductReviewCard({ review }: { review: ProductReview }) {
  const { locale, t } = useLocale();
  const category = getReviewCategory(review.category);
  const href = `/reviews/${review.category}/${review.slug}`;

  return (
    <article className="border-b border-[var(--line)] py-6 first:pt-0 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        {category ? (
          <Link href={`/reviews/${category.slug}`} className="hover:underline">
            {pick(locale, category.shortName)}
          </Link>
        ) : null}
        <span className="text-[var(--ink-muted)] normal-case">
          {review.readingMinutes} {t.minutes}
        </span>
      </div>
      <h3 className="font-display text-xl leading-snug text-[var(--ink)] transition-colors hover:text-[var(--accent)] sm:text-2xl">
        <Link href={href}>{pick(locale, review.productName)}</Link>
      </h3>
      <p className="mt-1 text-sm font-medium text-[var(--ink-soft)]">
        {pick(locale, review.title)}
      </p>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
        {pick(locale, review.summary)}
      </p>
      <Link
        href={href}
        className="mt-3 inline-flex text-sm font-semibold text-[var(--amber)] hover:underline"
      >
        {t.readReview} →
      </Link>
    </article>
  );
}
