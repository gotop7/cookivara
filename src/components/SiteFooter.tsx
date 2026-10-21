"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{t.footerTagline}</p>
        <Link href="/recipes" className="transition-colors hover:text-[var(--ink)]">
          {t.footerAllRecipes}
        </Link>
      </div>
    </footer>
  );
}
