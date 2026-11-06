"use client";

import Link from "next/link";
import { getReviewCategory } from "@/data/review-categories";
import {
  getProductReviewsByCategory,
  type ProductReview,
} from "@/data/product-reviews";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ProductReviewDetail({ review }: { review: ProductReview }) {
  const { locale, t } = useLocale();
  const category = getReviewCategory(review.category);
  const related = getProductReviewsByCategory(review.category)
    .filter((r) => r.slug !== review.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        <Link href="/reviews" className="hover:underline">
          {t.navReviews}
        </Link>
        {category ? (
          <>
            <span className="text-[var(--ink-muted)]">/</span>
            <Link
              href={`/reviews/${category.slug}`}
              className="hover:underline"
            >
              {pick(locale, category.name)}
            </Link>
          </>
        ) : null}
        <span className="text-[var(--ink-muted)] normal-case">
          {t.published} {review.publishedAt} · {review.readingMinutes}{" "}
          {t.minutes}
        </span>
      </div>

      <p className="text-sm font-semibold text-[var(--amber)]">
        {pick(locale, review.productName)}
      </p>
      <h1 className="font-display animate-rise mt-1 text-3xl leading-tight text-[var(--ink)] sm:text-4xl lg:text-[2.75rem]">
        {pick(locale, review.title)}
      </h1>
      <p
        className="animate-rise mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg"
        style={{ animationDelay: "60ms" }}
      >
        {pick(locale, review.summary)}
      </p>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">
        {pick(locale, siteConfig.author.byline)} · {t.editorialNote}
      </p>

      <div className="mt-10 space-y-9">
        {review.sections.map((section, i) => (
          <section
            key={`${i}-${pick(locale, section.heading)}`}
            className="animate-rise"
            style={{ animationDelay: `${100 + i * 40}ms` }}
          >
            <h2 className="font-display text-xl text-[var(--ink)] sm:text-2xl">
              {pick(locale, section.heading)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {pick(locale, section.body)}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-12 border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
        <h2 className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
          {t.sourcesHeading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
          {t.sourcesLead}
        </p>
        <ul className="mt-4 space-y-2">
          {review.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-soft)] underline decoration-[var(--line)] underline-offset-2 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                {source.name}
                <span className="ml-2 text-xs text-[var(--ink-muted)] no-underline">
                  ({source.kind === "youtube" ? "YouTube" : t.sourceArticle})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <aside className="mt-8 border border-[var(--accent)]/35 bg-[var(--bg-elevated)] p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
          {t.verdict}
        </p>
        <p className="mt-2 text-base leading-relaxed text-[var(--ink)]">
          {pick(locale, review.verdict)}
        </p>
      </aside>

      {related.length > 0 ? (
        <section className="mt-14 border-t border-[var(--line)] pt-8">
          <h2 className="font-display text-xl text-[var(--ink)]">
            {t.moreInCategory}
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/reviews/${item.category}/${item.slug}`}
                  className="text-[var(--ink-soft)] hover:text-[var(--accent)]"
                >
                  {pick(locale, item.productName)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
