import type { Locale, Translations } from "./types";
import { DEFAULT_LOCALE } from "./types";
import { en } from "./en";
import { es } from "./es";

const dictionaries: Record<Locale, Translations> = { en, es };

const ES_PREFIX_RE = /^\/es(\/|$)/;

export function getLocale(pathname: string): Locale {
  return ES_PREFIX_RE.test(pathname) ? "es" : "en";
}

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function getCounterpartPath(pathname: string): string {
  if (ES_PREFIX_RE.test(pathname)) {
    // /es/foo -> /foo, /es -> /, /es/ -> /
    const stripped = pathname.replace(/^\/es/, "");
    return stripped === "" ? "/" : stripped;
  }
  // /foo -> /es/foo, / -> /es/
  if (pathname === "/") return "/es/";
  return `/es${pathname}`;
}

export function getAlternateUrls(
  pathname: string,
  origin: string
): { en: string; es: string } {
  const locale = getLocale(pathname);
  const counterpart = getCounterpartPath(pathname);
  return locale === "en"
    ? { en: `${origin}${pathname}`, es: `${origin}${counterpart}` }
    : { en: `${origin}${counterpart}`, es: `${origin}${pathname}` };
}

export { DEFAULT_LOCALE } from "./types";
export type { Locale, Translations } from "./types";
