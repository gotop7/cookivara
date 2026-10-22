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
        className={`min-h-11 rounded-md px-2.5 py-2 transition-colors sm:min-h-12 ${
          active
            ? "font-bold text-[var(--ink)]"
            : "font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)]"
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
      className="flex shrink-0 items-center gap-1 text-sm sm:text-base"
    >
      {option("ko", t.langKo)}
      <span className="text-[var(--ink-muted)]" aria-hidden>
        |
      </span>
      {option("en", t.langEn)}
    </div>
  );
}
