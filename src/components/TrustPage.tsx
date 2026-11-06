"use client";

import type { LocalizedString } from "@/i18n/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type Section = {
  heading: LocalizedString;
  body: LocalizedString;
};

export function TrustPage({
  title,
  intro,
  sections,
}: {
  title: LocalizedString;
  intro: LocalizedString;
  sections: Section[];
}) {
  const { locale } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display animate-rise text-3xl text-[var(--ink)] sm:text-4xl">
        {pick(locale, title)}
      </h1>
      <p className="animate-rise mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg" style={{ animationDelay: "60ms" }}>
        {pick(locale, intro)}
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section, i) => (
          <section
            key={pick(locale, section.heading)}
            className="animate-rise border-t border-[var(--line)] pt-6"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <h2 className="font-display text-xl text-[var(--ink)]">
              {pick(locale, section.heading)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {pick(locale, section.body)}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
