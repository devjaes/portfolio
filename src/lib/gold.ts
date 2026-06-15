// Spot gold (XAU/USD) snapshot fetched at build time from fxratesapi (free, no key).
// Renders a real first paint with no layout shift; the Watching island then
// upgrades it to a live spot price + chart in the browser.
// Falls back to null on any failure so a build never breaks on a network blip.

export interface GoldSeries {
  points: number[];
  last: number;
  changeAbs: number;
  changePct: number;
  asOf: string;
  up: boolean;
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

let cache: Promise<GoldSeries | null> | undefined;

async function load(): Promise<GoldSeries | null> {
  try {
    const end = new Date();
    const start = new Date(end.getTime() - 55 * 86400000);
    const res = await fetch(
      `https://api.fxratesapi.com/timeseries?base=XAU&currencies=USD&start_date=${iso(start)}&end_date=${iso(end)}`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!res.ok) return null;
    const json = await res.json();
    const rates: Record<string, { USD?: number }> = json?.rates ?? {};
    const series = Object.keys(rates)
      .sort()
      .map((k) => ({ date: k.slice(0, 10), close: rates[k]?.USD }))
      .filter((p): p is { date: string; close: number } => Number.isFinite(p.close));
    if (series.length < 5) return null;

    const window = series.slice(-45);
    const points = window.map((p) => p.close);
    const last = points[points.length - 1];
    const prev = points[points.length - 2];
    const changeAbs = last - prev;
    const changePct = (changeAbs / prev) * 100;
    return { points, last, changeAbs, changePct, asOf: window[window.length - 1].date, up: changeAbs >= 0 };
  } catch {
    return null;
  }
}

export function getGoldSeries(): Promise<GoldSeries | null> {
  if (!cache) cache = load();
  return cache;
}
