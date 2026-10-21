export type Locale = "ko" | "en";

export type LocalizedString = {
  ko: string;
  en: string;
};

export const DEFAULT_LOCALE: Locale = "ko";
export const LOCALE_STORAGE_KEY = "cookivara-locale";

export function pick(locale: Locale, value: LocalizedString): string {
  return value[locale];
}

export function isLocale(value: unknown): value is Locale {
  return value === "ko" || value === "en";
}
