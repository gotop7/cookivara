"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const option = (code: Locale, shortLabel: string, fullLabel: string) => {
    const active = locale === code;
    return (
      <button
        type="button"
        onClick={() => setLocale(code)}
        aria-pressed={active}
        aria-label={fullLabel}
        title={fullLabel}
        className={`min-h-11 min-w-9 rounded-md px-1.5 py-2 transition-colors sm:min-h-12 sm:min-w-0 sm:px-2.5 ${
          active
            ? "font-bold text-[var(--ink)]"
            : "font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)]"
        }`}
      >
        <span className="sm:hidden">{shortLabel}</span>
        <span className="hidden sm:inline">{fullLabel}</span>
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label={t.languageAria}
      className="flex shrink-0 items-center gap-0.5 text-sm sm:gap-1 sm:text-base"
    >
      {option("ko", "KO", t.langKo)}
      <span className="text-[var(--ink-muted)]" aria-hidden>
        |
      </span>
      {option("en", "EN", t.langEn)}
    </div>
  );
}
