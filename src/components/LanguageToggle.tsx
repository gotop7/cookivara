"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const option = (code: Locale, label: string) => {
    const active = locale === code;
    return (
      <button
        type="button"
        onClick={() => setLocale(code)}
        aria-pressed={active}
        className={`rounded px-1.5 py-0.5 transition-colors ${
          active
            ? "font-semibold text-[var(--ink)]"
            : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label={t.languageAria}
      className="flex shrink-0 items-center gap-1 text-xs sm:text-sm"
    >
      {option("ko", t.langKo)}
      <span className="text-[var(--ink-muted)]" aria-hidden>
        |
      </span>
      {option("en", t.langEn)}
    </div>
  );
}
