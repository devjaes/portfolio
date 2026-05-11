import type { CollectionEntry } from "astro:content";
import type { Locale } from "../i18n";

type WorkEntry = CollectionEntry<"work">;

const stripLocaleSuffix = (id: string): string =>
  id.replace(/\.es\.md$/, "").replace(/\.md$/, "");

export function isSpanishEntry(entry: WorkEntry): boolean {
  return entry.id.endsWith(".es.md");
}

export function getWorkUrl(entry: WorkEntry, locale: Locale): string {
  const slug = stripLocaleSuffix(entry.id);
  return locale === "es" ? `/es/work/${slug}/` : `/work/${slug}/`;
}

export function filterWorkByLocale(
  entries: readonly WorkEntry[],
  locale: Locale
): WorkEntry[] {
  return entries.filter((entry) =>
    locale === "es" ? isSpanishEntry(entry) : !isSpanishEntry(entry)
  );
}
