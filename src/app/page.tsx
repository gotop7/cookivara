"use client";

import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { categories } from "@/data/categories";
import { getAllArticles } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function HomePage() {
  const { locale, t } = useLocale();
  const latest = getAllArticles().slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(15,20,25,0.92) 0%, rgba(15,20,25,0.72) 45%, rgba(15,20,25,0.35) 100%), url(/brand/nookvolt-logo.png)",
            backgroundSize: "cover, 55% auto",
            backgroundPosition: "center, 110% 40%",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="animate-fade mb-5 flex items-center gap-3">
              <Image
                src={siteConfig.logoPath}
                alt=""
                width={48}
                height={48}
                className="rounded-xl"
                priority
              />
              <p className="font-brand text-2xl text-[var(--ink)] sm:text-3xl">
                {siteConfig.name}
              </p>
            </div>
            <p className="animate-rise text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
              {t.homeEyebrow}
            </p>
            <h1 className="font-display animate-rise mt-3 text-4xl leading-[1.1] text-[var(--ink)] sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
              {t.homeHeadline}
            </h1>
            <p className="animate-rise mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg" style={{ animationDelay: "140ms" }}>
              {t.homeLead}
            </p>
            <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
              <Link
                href="/reviews"
                className="inline-flex min-h-11 items-center rounded-md bg-[var(--accent)] px-5 text-sm font-bold text-[#06201e] transition-colors hover:bg-[var(--accent-hover)]"
              >
                {t.homeCtaPrimary}
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center rounded-md border border-[var(--line)] px-5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
              >
                {t.homeCtaSecondary}
              </Link>
            </div>
          </div>
          <div className="animate-fade hidden max-w-xs text-sm text-[var(--ink-muted)] lg:block" style={{ animationDelay: "240ms" }}>
            <span className="inline-block h-1.5 w-1.5 animate-accent rounded-full bg-[var(--accent)]" />{" "}
            {siteConfig.displayDomain}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl text-[var(--ink)] sm:text-3xl">
            {t.latest}
          </h2>
          <Link
            href="/reviews"
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            {t.navReviews} →
          </Link>
        </div>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)]/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl text-[var(--ink)] sm:text-3xl">
            {t.categories}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="animate-rise block border border-[var(--line)] bg-[var(--bg)]/40 p-5 transition-colors hover:border-[var(--accent)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="font-display text-xl text-[var(--ink)]">
                  {pick(locale, category.name)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {pick(locale, category.description)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
