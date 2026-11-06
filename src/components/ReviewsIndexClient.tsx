"use client";

import Link from "next/link";
import { reviewCategories } from "@/data/review-categories";
import {
  getAllProductReviews,
  getProductReviewsByCategory,
} from "@/data/product-reviews";
import { ProductReviewCard } from "@/components/ProductReviewCard";
import { ReviewSearch } from "@/components/ReviewSearch";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ReviewsIndexClient() {
  const { locale, t } = useLocale();
  const latest = getAllProductReviews().slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
        {t.navReviews}
      </p>
      <h1 className="font-display mt-2 text-3xl text-[var(--ink)] sm:text-4xl">
        {t.reviewsIndexTitle}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
        {t.reviewsIndexLead}
      </p>

      <div className="mt-8 max-w-xl">
        <ReviewSearch autoFocus={false} />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl text-[var(--ink)] sm:text-2xl">
          {t.reviewCategoriesHeading}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewCategories.map((category) => {
            const count = getProductReviewsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/reviews/${category.slug}`}
                className="group border border-[var(--line)] bg-[var(--bg-elevated)]/60 p-5 transition-colors hover:border-[var(--accent)]/50"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
                  {count} {t.productsCount}
                </p>
                <h3 className="font-display mt-2 text-xl text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {pick(locale, category.name)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {pick(locale, category.description)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl text-[var(--ink)] sm:text-2xl">
          {t.latestReviews}
        </h2>
        <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {latest.map((review) => (
            <ProductReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
