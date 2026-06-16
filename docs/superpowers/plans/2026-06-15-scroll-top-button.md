# Scroll-to-Top Progress-Ring Button Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a floating bottom-right button that fades in after one viewport of scroll, shows scroll progress as an SVG ring, and smooth-scrolls to top on click — styled to the terminal/Bloomberg theme and free of the usual floating-button bugs.

**Architecture:** A single self-contained Astro component (`ScrollTop.astro`) with scoped styles and a client `<script>`. Rendered in `BaseLayout.astro` next to the other floating widgets. Scroll/resize handling is rAF-throttled; the accent ring uses the existing user-selectable `--accent` CSS var; reduced-motion is honored via the same `motionOK()` pattern used in `CommandPalette.astro`. Label is i18n via the `nav.scrollTop` key.

**Tech Stack:** Astro (static, no hydration framework), Tailwind theme tokens / CSS custom properties, vanilla DOM JS, SVG.

**Note on testing:** This repo has no JS test runner — it is an Astro static site. Verification gates are `pnpm build` (must complete, 28 pages, no errors) plus the manual browser checks listed in the final task. There are no unit-test steps.

---

### Task 1: Add the i18n label key

**Files:**
- Modify: `src/i18n/types.ts:206-216` (the `nav` block)
- Modify: `src/i18n/en.ts:28`
- Modify: `src/i18n/es.ts:29`

- [ ] **Step 1: Add the type field**

In `src/i18n/types.ts`, inside the `nav: { ... }` block, add `scrollTop` after `commandLabel`:

```ts
  nav: {
    home: string;
    experience: string;
    projects: string;
    about: string;
    menuLabel: string;
    building: string;
    contact: string;
    statusOpen: string;
    commandLabel: string;
    scrollTop: string;
  };
```

- [ ] **Step 2: Add the English label**

In `src/i18n/en.ts`, replace line 28:

```ts
    commandLabel: "Command palette (⌘K)",
```

with:

```ts
    commandLabel: "Command palette (⌘K)",
    scrollTop: "Scroll to top",
```

- [ ] **Step 3: Add the Spanish label**

In `src/i18n/es.ts`, replace line 29:

```ts
    commandLabel: "Paleta de comandos (⌘K)",
```

with:

```ts
    commandLabel: "Paleta de comandos (⌘K)",
    scrollTop: "Volver arriba",
```

- [ ] **Step 4: Verify it type-checks via build**

Run: `pnpm build`
Expected: build completes, "28 page(s) built", no TypeScript errors. (The new key isn't used yet — this just confirms types stay consistent.)

- [ ] **Step 5: Commit**

```bash
git add src/i18n/types.ts src/i18n/en.ts src/i18n/es.ts
git commit -m "feat(i18n): add scrollTop label for scroll-to-top button"
```

---

### Task 2: Create the ScrollTop component

**Files:**
- Create: `src/components/ScrollTop.astro`

- [ ] **Step 1: Create the component file**

Create `src/components/ScrollTop.astro` with this exact content:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props {
  locale?: Locale;
}

const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
const label = t.nav.scrollTop;

// SVG ring geometry. r=20 in a 44x44 box (stroke 2px, 2px breathing room).
const R = 20;
const CIRC = 2 * Math.PI * R; // circumference, used for stroke-dasharray
---

<button id="scroll-top" type="button" aria-label={label} title={label} data-circ={CIRC}>
  <svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true">
    <circle class="st-track" cx="22" cy="22" r={R} fill="none" stroke-width="2" />
    <circle
      class="st-prog"
      cx="22"
      cy="22"
      r={R}
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      style={`stroke-dasharray:${CIRC};stroke-dashoffset:${CIRC};`}
    />
  </svg>
  <span class="st-glyph" aria-hidden="true">↑</span>
</button>

<style>
  #scroll-top {
    position: fixed;
    right: 16px;
    bottom: 68px; /* clears the ~40px #tweaks toggle (right:16px; bottom:16px) + gap */
    z-index: 85; /* below #tweaks (90) so its expanding panel renders over this */
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line-2);
    border-radius: 9999px;
    background: var(--bg-2);
    color: var(--tx-1);
    cursor: pointer;
    padding: 0;
    /* hidden by default; shown when [data-visible] is set */
    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    pointer-events: none;
  }

  #scroll-top[data-visible] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  @media (prefers-reduced-motion: no-preference) {
    #scroll-top {
      transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }
  }

  #scroll-top:hover {
    border-color: var(--line-3);
    color: var(--tx-0);
    box-shadow: 0 0 0 1px var(--accent-line), 0 8px 24px -12px rgba(0, 0, 0, 0.8);
  }

  #scroll-top svg {
    position: absolute;
    inset: 0;
    transform: rotate(-90deg); /* start ring fill at 12 o'clock */
  }

  .st-track {
    stroke: var(--line-2);
  }

  .st-prog {
    stroke: var(--accent);
    transition: stroke-dashoffset 0.1s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    .st-prog {
      transition: none;
    }
  }

  .st-glyph {
    font-family: var(--mono);
    font-size: 16px;
    line-height: 1;
    position: relative;
  }
</style>

<script>
  const btn = document.getElementById("scroll-top");
  if (btn) {
    const prog = btn.querySelector(".st-prog") as SVGCircleElement | null;
    const circ = Number(btn.dataset.circ) || 0;
    const motionOK = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;

    const render = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Guard unscrollable / very short pages.
      if (max <= 0) {
        btn.removeAttribute("data-visible");
        return;
      }
      const y = window.scrollY;
      // Visible after one viewport of scroll.
      if (y > window.innerHeight) {
        btn.setAttribute("data-visible", "");
      } else {
        btn.removeAttribute("data-visible");
      }
      // Ring fill = scroll percentage.
      if (prog && circ) {
        const pct = Math.min(1, Math.max(0, y / max));
        prog.style.strokeDashoffset = String(circ * (1 - pct));
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: motionOK() ? "smooth" : "auto" });
    });

    // Initial paint (handles restored/deep-linked scroll positions).
    render();
  }
</script>
```

- [ ] **Step 2: Verify it builds**

Run: `pnpm build`
Expected: build completes, "28 page(s) built", no errors. (Component compiles even though not yet rendered anywhere.)

- [ ] **Step 3: Commit**

```bash
git add src/components/ScrollTop.astro
git commit -m "feat: add ScrollTop progress-ring component"
```

---

### Task 3: Render the component in BaseLayout

**Files:**
- Modify: `src/layouts/BaseLayout.astro:5-7` (imports), `:36-38` (widget render block)

- [ ] **Step 1: Add the import**

In `src/layouts/BaseLayout.astro`, after line 7 (`import Tweaks ...`), add:

```astro
import ScrollTop from '../components/ScrollTop.astro';
```

The import block should now read:

```astro
import CommandPalette from '../components/CommandPalette.astro';
import DevFooter from '../components/DevFooter.astro';
import Tweaks from '../components/Tweaks.astro';
import ScrollTop from '../components/ScrollTop.astro';
```

- [ ] **Step 2: Render the widget**

In the same file, replace the widget block:

```astro
		<CommandPalette locale={locale} />
		<DevFooter locale={locale} />
		<Tweaks locale={locale} />
```

with:

```astro
		<CommandPalette locale={locale} />
		<DevFooter locale={locale} />
		<Tweaks locale={locale} />
		<ScrollTop locale={locale} />
```

- [ ] **Step 3: Verify it builds**

Run: `pnpm build`
Expected: build completes, "28 page(s) built", no errors.

- [ ] **Step 4: Confirm markup is emitted**

Run: `grep -c 'id="scroll-top"' dist/index.html dist/es/index.html`
Expected: each file reports `1`.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: render ScrollTop button in BaseLayout"
```

---

### Task 4: Manual verification in the browser

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

Run: `pnpm dev`
Expected: Astro dev server URL printed (e.g. `http://localhost:4321`).

- [ ] **Step 2: Verify visibility threshold**

Open the home page. At the top, the button must be invisible and NOT tab-focusable
(Tab through the page — focus must skip it). Scroll down past one screen height: the
button fades in bottom-right.

- [ ] **Step 3: Verify ring progress**

As you continue scrolling, the accent ring fills clockwise; near the page bottom it is
nearly full.

- [ ] **Step 4: Verify scroll-to-top**

Click the button → page smooth-scrolls to the top and the button fades out.

- [ ] **Step 5: Verify no collision with Tweaks**

Open the Tweaks panel (bottom-right gear/toggle) while scrolled down. The ScrollTop
button sits above the Tweaks toggle and does not overlap it; the expanded Tweaks panel
renders over/around the button without visual clash. Re-check at a mobile width
(DevTools responsive, ~375px).

- [ ] **Step 6: Verify accent follows theme**

In the Tweaks panel switch the accent color (green/cyan/amber). The ring's progress
stroke updates to the chosen accent (it reads `var(--accent)`).

- [ ] **Step 7: Verify reduced motion**

Enable "Reduce motion" (macOS System Settings → Accessibility, or DevTools
Rendering → Emulate `prefers-reduced-motion: reduce`). Reload, scroll, click: the jump
to top is instant (no smooth animation) and the fade transition is suppressed.

- [ ] **Step 8: Verify Spanish locale**

Visit `/es/`. Hover the button → tooltip/aria-label reads "Volver arriba". Behavior
identical.

- [ ] **Step 9: Stop the dev server and finalize**

Stop `pnpm dev`. No code changes in this task — if any check failed, return to the
relevant task and fix before considering the feature complete.

---

## Self-Review

- **Spec coverage:** progress ring (Task 2 SVG), fade-in after one viewport (Task 2 script `y > innerHeight`), smooth scroll + `motionOK()` (Task 2), collision avoidance bottom:68px/z:85 (Task 2 styles + Task 4 Step 5), rAF throttle + passive listeners (Task 2), division-by-zero guard (Task 2 `max <= 0`), reduced-motion CSS + JS (Task 2 + Task 4 Step 7), a11y real button + aria-label + not-focusable-when-hidden (Task 2 `visibility:hidden` + Task 4 Step 2), resize recompute (Task 2 resize listener), initial paint (Task 2 `render()` call), i18n EN/ES (Task 1 + Task 4 Step 8), accent var (Task 2 `.st-prog` + Task 4 Step 6). All covered.
- **Placeholder scan:** none — all code blocks are complete and literal.
- **Type consistency:** `nav.scrollTop` added in types (Task 1) matches usage `t.nav.scrollTop` (Task 2); `data-circ` set in markup matches `btn.dataset.circ` read in script; class names `.st-track`/`.st-prog`/`.st-glyph` consistent between markup, styles, and script.
