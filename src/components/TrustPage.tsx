"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { LocalizedString } from "@/i18n/types";
import { pick } from "@/i18n/types";

type Section = {
  heading: LocalizedString;
  body: LocalizedString | LocalizedString[];
};

type Props = {
  title: LocalizedString;
  intro?: LocalizedString;
  sections: Section[];
  children?: ReactNode;
};

export function TrustPage({ title, intro, sections, children }: Props) {
  const { locale } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
        {pick(locale, title)}
      </h1>
      {intro ? (
        <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">
          {pick(locale, intro)}
        </p>
      ) : null}
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading.en}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              {pick(locale, section.heading)}
            </h2>
            {Array.isArray(section.body) ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--ink-soft)]">
                {section.body.map((item) => (
                  <li key={item.en} className="leading-relaxed">
                    {pick(locale, item)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 leading-relaxed text-[var(--ink-soft)] whitespace-pre-line">
                {pick(locale, section.body)}
              </p>
            )}
          </section>
        ))}
      </div>
      {children}
    </div>
  );
}
