# Scroll-to-Top Progress-Ring Button — Design

**Date:** 2026-06-15
**Status:** Approved

## Goal

Add a floating button that lets the user jump back to the top of the page once
they have scrolled down. It must match the site's terminal / Bloomberg-influenced
theme, double as a scroll-progress indicator, be visually attractive, and avoid
the common floating-button bugs (scroll-listener jank, corner collisions,
reduced-motion violations, focus traps) before they happen.

## Component

New `src/components/ScrollTop.astro`, rendered in `BaseLayout.astro` alongside the
other floating widgets (`Tweaks`, `DevFooter`, `CommandPalette`). Self-contained:
scoped `<style>` + a client `<script>`. No hydration framework.

## Visual

- 44px circular button anchored bottom-right.
- SVG with two stacked circles:
  - **Track ring** — stroke `var(--line-2)`.
  - **Progress ring** — stroke `var(--accent)` (the user-selectable accent CSS var
    set by `Tweaks`), filled via `stroke-dasharray` / `stroke-dashoffset` driven by
    scroll percentage. Ring rotated -90° so it fills from 12 o'clock.
- Ring stroke width: 2px.
- Center glyph: `↑` chevron, mono font, `var(--tx-1)` → `var(--tx-0)` on hover.
- Button background `var(--bg-2)`, border `1px solid var(--line-2)`, fully rounded.
- Hover: border `var(--line-3)`, subtle accent glow
  (`box-shadow: 0 0 0 1px var(--accent-line)` or soft shadow), mirroring the
  `#tweaks .tk-toggle:hover` treatment.

## Placement & Collision Avoidance (primary pre-empted bug)

Existing fixed widgets (from `src/styles/global.css`):

| Widget        | Position                         | z-index |
|---------------|----------------------------------|---------|
| `#tweaks`     | `right:16px; bottom:16px`        | 90      |
| DevFooter     | `left:16px; bottom:16px`         | 90      |
| `.cmdk` modal | `inset:0`                        | 200     |

Both bottom corners are occupied. The button therefore **stacks above Tweaks** in
the right column:

```
right: 16px;
bottom: 68px;   /* clears the ~40px Tweaks toggle + gap */
z-index: 85;    /* below Tweaks(90) so its expanding panel renders over the button */
```

Tweaks' panel opens upward (`bottom:46px`, width 250px); with the button at z-index
85 the panel always sits above it — no visual clash. On mobile (`<640px`) Tweaks
stays bottom-right, so the 68px offset keeps the two stacked rather than overlapping.

## Behavior

- **Hidden at top.** Becomes visible once `window.scrollY > window.innerHeight`
  (one viewport). Below that threshold it fades out.
- **Click** → `window.scrollTo({ top: 0, behavior: motionOK() ? "smooth" : "auto" })`,
  reusing the existing `motionOK()` reduced-motion guard pattern from
  `CommandPalette.astro`.
- **Progress** = `scrollY / (scrollHeight - innerHeight)`, clamped to `[0, 1]`,
  mapped to `stroke-dashoffset`.

## Edge Cases Handled Up Front

- **Scroll-listener perf** — update inside a `requestAnimationFrame` tick with a
  `ticking` flag so multiple scroll events coalesce into one frame; listener
  registered `{ passive: true }`. No per-event layout thrash.
- **Division by zero / unscrollable pages** — guard `scrollHeight - innerHeight <= 0`;
  progress treated as 0 and the button stays hidden (nothing to scroll).
- **Reduced motion** — `motionOK()` controls the scroll jump; CSS visibility/opacity
  transitions wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **Accessibility** — real `<button>` element with i18n `aria-label`; relies on the
  global `:focus-visible` outline (global.css:103). Hidden state uses
  `visibility:hidden; pointer-events:none; opacity:0` so it is not tab-focusable or
  clickable while invisible.
- **Resize** — recompute on `resize` (same rAF-throttled handler) so the threshold
  and progress denominator stay correct after viewport changes / orientation flip.
- **Initial state** — run the update once on load so a deep-linked / restored scroll
  position shows the correct visibility and ring immediately.
- **SSR (Astro)** — all DOM/scroll logic lives in the client `<script>`; the markup
  renders statically.

## i18n

- Add `scrollTop` label key to `Translations` in `src/i18n/types.ts`.
- `src/i18n/en.ts`: `"Scroll to top"`.
- `src/i18n/es.ts`: `"Volver arriba"`.
- Passed to the component via the `locale` prop, consistent with the other widgets.

## Files Touched

| File | Change |
|------|--------|
| `src/components/ScrollTop.astro` | **New** — markup, scoped styles, client script |
| `src/layouts/BaseLayout.astro` | Import + render `<ScrollTop locale={locale} />` |
| `src/i18n/types.ts` | Add `scrollTop: string` to the meta/labels type |
| `src/i18n/en.ts` | Add `scrollTop` label |
| `src/i18n/es.ts` | Add `scrollTop` label |

No `global.css` change — styles are scoped to the component.

## Testing / Verification

- Build passes (`pnpm build`), 28 pages, no errors.
- Manual: scroll past one viewport → button fades in with correct ring fill; click →
  smooth scroll to top; at top → button hidden. Confirm no overlap with Tweaks
  (collapsed and expanded) on desktop and mobile widths. Confirm reduced-motion
  setting disables smooth scroll + transitions.
