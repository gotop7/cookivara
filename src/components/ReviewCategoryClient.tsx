"use client";

import Link from "next/link";
import type { ReviewCategory } from "@/data/review-categories";
import { getProductReviewsByCategory } from "@/data/product-reviews";
import { ProductReviewCard } from "@/components/ProductReviewCard";
import { ReviewSearch } from "@/components/ReviewSearch";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ReviewCategoryClient({
  category,
}: {
  category: ReviewCategory;
}) {
  const { locale, t } = useLocale();
  const reviews = getProductReviewsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        <Link href="/reviews" className="hover:underline">
          {t.navReviews}
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
        <ReviewSearch />
      </div>

      {reviews.length === 0 ? (
        <p className="mt-10 text-[var(--ink-muted)]">
          {t.emptyCategory}{" "}
          <Link href="/reviews" className="text-[var(--accent)] hover:underline">
            {t.navReviews}
          </Link>
        </p>
      ) : (
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {reviews.map((review) => (
            <ProductReviewCard key={review.slug} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
