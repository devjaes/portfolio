# Portfolio Alegra Pivot + AWS SAA Cert + Spanish i18n — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio for the Alegra backend role: rewrite hero/copy with backend-forward Full Stack identity, add a dedicated AWS SAA Certifications section (with hero pill + Credly verify link), and ship a full Spanish locale toggle (`/` EN default, `/es/` Spanish).

**Architecture:** Astro 3.3 has no native `Astro.currentLocale` / i18n config — rely on file-based routing (`src/pages/es/*`) plus a small helper `src/i18n/index.ts` that derives the locale from `Astro.url.pathname`, exposes `getTranslations(locale)` returning a strongly-typed dictionary, and provides `getCounterpartPath(pathname)` for the language toggle. Every component is refactored to consume strings from the dictionary; English pages and Spanish pages each pass `locale` to shared components.

**Tech Stack:** Astro 3.3, TypeScript, Tailwind 3.4, simple-icons, pnpm. Vitest added for i18n helper unit tests only (Astro components are not unit-tested; verification is via `pnpm build` + dev-server visual checks).

---

## File Map

### New files

- `src/i18n/types.ts` — `Locale`, `Translations` type definitions.
- `src/i18n/en.ts` — English dictionary (source of truth for keys).
- `src/i18n/es.ts` — Spanish dictionary (mirror of `en.ts`).
- `src/i18n/index.ts` — `getLocale`, `getTranslations`, `getCounterpartPath`, `getAlternateUrls` helpers.
- `src/i18n/index.test.ts` — Vitest tests for the helpers.
- `src/components/Certifications.astro` — Cert section (badge + verify link), accepts cert array.
- `src/components/LangToggle.astro` — `EN | ES` toggle for Nav.
- `src/pages/es/index.astro` — Spanish home.
- `src/pages/es/about.astro` — Spanish about.
- `src/pages/es/work.astro` — Spanish work index.
- `src/pages/es/work/[...slug].astro` — Spanish work detail.
- `src/pages/es/404.astro` — Spanish 404.
- `public/assets/aws-saa-badge.png` — Credly badge image.
- Spanish work twins: `src/content/work/{ambivalence,lajefecita,lookpay,pos-system,uta-web-app}.es.md` and `src/content/work/nested/gendocsv3.es.md`.
- `vitest.config.ts` — Vitest config.

### Modified files

- `package.json` — add Vitest devDeps.
- `src/layouts/BaseLayout.astro` — accept `locale` prop, dynamic `<html lang>`, inject hreflang alternates.
- `src/components/MainHead.astro` — accept `locale` prop, default meta description from dictionary.
- `src/components/Nav.astro` — refactor to dictionary, embed `LangToggle`.
- `src/components/Hero.astro` — copy rewrites, add cert pill, remove "Available for work", dictionary refactor.
- `src/components/EngineeringPhilosophy.astro` — dictionary refactor.
- `src/components/TechOrbit.astro` — orbit ring re-shuffle (Python → AWS inner; AWS → Serverless outer), dictionary refactor.
- `src/components/Experience.astro` — bullet rewrites + dictionary refactor.
- `src/components/Skills.astro` — reorder/expand categories + dictionary refactor.
- `src/components/FeaturedProjects.astro` — copy reframes + dictionary refactor.
- `src/components/ContactCTA.astro` — copy tune + dictionary refactor.
- `src/components/Footer.astro` — dictionary refactor.
- `src/pages/index.astro` — insert `<Certifications />` between Skills and FeaturedProjects.
- `src/pages/about.astro` — backend-leaning hero copy, certifications sub-block, LatAm card tune, dictionary refactor.
- `src/pages/work.astro` — locale-aware data (filter EN entries) + dictionary refactor.
- `src/pages/work/[...slug].astro` — locale-aware data (use EN twin), dictionary refactor.
- `src/pages/404.astro` — dictionary refactor.

### Out of scope (do NOT touch in this PR)

- `cv-jair-mera.pdf` — separate task.
- `README.md` — separate task.
- `tailwind.config.mjs` — no new tokens needed.
- `src/styles/global.css` — no changes needed.

---

## Task 1: Asset Prep — Download AWS SAA Badge

**Files:**
- Create: `public/assets/aws-saa-badge.png`

- [ ] **Step 1: Open Credly badge page**

Visit `https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc`.

- [ ] **Step 2: Download badge PNG**

Right-click the AWS Solutions Architect Associate badge image on Credly → Save Image As → save to `/Users/jair/devProjects/portfolio/public/assets/aws-saa-badge.png`. Confirm the file is a square PNG (typical Credly badges are 600×600 or similar).

- [ ] **Step 3: Verify file exists**

Run: `ls -la public/assets/aws-saa-badge.png`
Expected: file exists, non-zero size.

- [ ] **Step 4: Note the issued date**

On the same Credly page, note the "Issued on" date for use in Task 16 (e.g. "April 2026" — pull whatever Credly displays).

- [ ] **Step 5: Commit**

```bash
git add public/assets/aws-saa-badge.png
git commit -m "feat(assets): add AWS Solutions Architect Associate badge"
```

---

## Task 2: Vitest Setup

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

- [ ] **Step 1: Add Vitest devDependency**

Run:
```bash
pnpm add -D vitest @types/node
```

- [ ] **Step 2: Add `test` script in package.json**

Edit `package.json` `scripts`:
```json
"scripts": {
  "dev": "astro dev",
  "start": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
```

- [ ] **Step 4: Verify Vitest runs**

Run: `pnpm test`
Expected: "No test files found" (no tests yet — that's fine).

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts
git commit -m "chore: add Vitest for i18n helper tests"
```

---

## Task 3: i18n Type Definitions

**Files:**
- Create: `src/i18n/types.ts`

- [ ] **Step 1: Define types**

```ts
// src/i18n/types.ts
export type Locale = "en" | "es";

export const LOCALES: readonly Locale[] = ["en", "es"] as const;

export const DEFAULT_LOCALE: Locale = "en";

export interface ExperienceEntry {
  title: string;
  company: string;
  date: string;
  badges: string[];
  current?: boolean;
  relatedProjects?: string;
  points: string[];
}

export interface SkillCategory {
  title: string;
  icon: "code" | "sparkles" | "server" | "terminal";
  highlight?: boolean;
  dailyBadge?: string;
  skills: { name: string; color?: string }[];
}

export interface PhilosophyCard {
  title: string;
  icon: "layers" | "shield" | "rocket";
  description: string;
  highlight?: boolean;
  highlightLabel?: string;
}

export interface FeaturedProject {
  title: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  link?: string;
  slug?: string;
  confidential?: boolean;
  confidentialLabel?: string;
  image?: string;
}

export interface Cert {
  title: string;
  issuer: string;
  issuedLabel: string;
  statusLabel: string;
  skills: string[];
  verifyLabel: string;
  verifyUrl: string;
  badgeImage: string;
  badgeAlt: string;
}

export interface Translations {
  meta: {
    siteTitle: string;
    siteDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    workTitle: string;
    workDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    about: string;
    menuLabel: string;
  };
  hero: {
    roleBadge: string;
    awsCertPill: string;
    awsCertVerifyUrl: string;
    headlinePart1: string;
    headlineHighlight1: string;
    headlinePart2: string;
    headlineHighlight2: string;
    headlinePart3: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
    portraitAlt: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    cards: PhilosophyCard[];
  };
  techStack: {
    title: string;
    subtitle: string;
    coreLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    currentLabel: string;
    relatedProjectsLabel: string;
    entries: ExperienceEntry[];
  };
  skills: {
    title: string;
    subtitle: string;
    dailyLabel: string;
    categories: SkillCategory[];
  };
  certifications: {
    title: string;
    subtitle: string;
    activeLabel: string;
    issuedLabel: string;
    skillsCoveredLabel: string;
    verifyLabel: string;
    items: Cert[];
  };
  featured: {
    title: string;
    subtitle: string;
    confidentialLabel: string;
    projects: FeaturedProject[];
  };
  archive: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  footer: {
    copyright: (year: number) => string;
    builtWith: string;
  };
  about: {
    h1Part1: string;
    h1Highlight: string;
    paragraph1: string;
    paragraph2: string;
    portraitAlt: string;
    backgroundTitle: string;
    educationTitle: string;
    universityName: string;
    universityDegree: string;
    highSchoolName: string;
    highSchoolDegree: string;
    honorsTitle: string;
    honor1Title: string;
    honor1Desc: string;
    honor2Title: string;
    honor2Desc: string;
    languagesTitle: string;
    spanishLabel: string;
    spanishLevel: string;
    englishLabel: string;
    englishLevel: string;
    softTitle: string;
    softCards: { title: string; description: string }[];
  };
  notFound: {
    title: string;
    subtitle: string;
    cta: string;
  };
  langToggle: {
    en: string;
    es: string;
    ariaLabel: string;
  };
  workPage: {
    title: string;
    subtitle: string;
    backLink: string;
  };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `pnpm astro check 2>&1 | head -30` (or `pnpm tsc --noEmit` if astro check unavailable).
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/types.ts
git commit -m "feat(i18n): define Translations type contract"
```

---

## Task 4: i18n Helpers — getLocale, getCounterpartPath, getAlternateUrls

**Files:**
- Create: `src/i18n/index.ts`
- Create: `src/i18n/index.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/i18n/index.test.ts
import { describe, it, expect } from "vitest";
import { getLocale, getCounterpartPath, getAlternateUrls } from "./index";

describe("getLocale", () => {
  it("returns 'en' for root", () => {
    expect(getLocale("/")).toBe("en");
  });
  it("returns 'en' for /about", () => {
    expect(getLocale("/about")).toBe("en");
  });
  it("returns 'es' for /es", () => {
    expect(getLocale("/es")).toBe("es");
  });
  it("returns 'es' for /es/", () => {
    expect(getLocale("/es/")).toBe("es");
  });
  it("returns 'es' for /es/about", () => {
    expect(getLocale("/es/about")).toBe("es");
  });
  it("returns 'es' for /es/work/lideser", () => {
    expect(getLocale("/es/work/lideser")).toBe("es");
  });
  it("does not match /espresso as 'es'", () => {
    expect(getLocale("/espresso")).toBe("en");
  });
});

describe("getCounterpartPath", () => {
  it("/ -> /es/", () => {
    expect(getCounterpartPath("/")).toBe("/es/");
  });
  it("/es/ -> /", () => {
    expect(getCounterpartPath("/es/")).toBe("/");
  });
  it("/es -> /", () => {
    expect(getCounterpartPath("/es")).toBe("/");
  });
  it("/about -> /es/about", () => {
    expect(getCounterpartPath("/about")).toBe("/es/about");
  });
  it("/about/ -> /es/about/", () => {
    expect(getCounterpartPath("/about/")).toBe("/es/about/");
  });
  it("/es/about -> /about", () => {
    expect(getCounterpartPath("/es/about")).toBe("/about");
  });
  it("/work/lideser -> /es/work/lideser", () => {
    expect(getCounterpartPath("/work/lideser")).toBe("/es/work/lideser");
  });
  it("/es/work/lideser -> /work/lideser", () => {
    expect(getCounterpartPath("/es/work/lideser")).toBe("/work/lideser");
  });
});

describe("getAlternateUrls", () => {
  it("returns both alternates for English path", () => {
    const result = getAlternateUrls("/about", "https://devjaes.dev");
    expect(result.en).toBe("https://devjaes.dev/about");
    expect(result.es).toBe("https://devjaes.dev/es/about");
  });
  it("returns both alternates for Spanish path", () => {
    const result = getAlternateUrls("/es/about", "https://devjaes.dev");
    expect(result.en).toBe("https://devjaes.dev/about");
    expect(result.es).toBe("https://devjaes.dev/es/about");
  });
});
```

- [ ] **Step 2: Run tests, expect FAIL**

Run: `pnpm test src/i18n/index.test.ts`
Expected: import error — `./index` does not exist yet.

- [ ] **Step 3: Implement helpers**

```ts
// src/i18n/index.ts
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
```

- [ ] **Step 4: Note — `en.ts` and `es.ts` not yet created**

The import lines in `index.ts` will fail until Task 5 + Task 17 land. Use a temporary stub to keep TDD flowing: create stub files now and fill them in later tasks.

```ts
// src/i18n/en.ts (stub — replaced in Task 5)
import type { Translations } from "./types";
export const en = {} as Translations;
```

```ts
// src/i18n/es.ts (stub — replaced in Task 17)
import type { Translations } from "./types";
export const es = {} as Translations;
```

- [ ] **Step 5: Run tests, expect PASS**

Run: `pnpm test src/i18n/index.test.ts`
Expected: all 17 tests pass.

- [ ] **Step 6: Commit**

```bash
git add src/i18n/index.ts src/i18n/index.test.ts src/i18n/en.ts src/i18n/es.ts
git commit -m "feat(i18n): add locale detection and counterpart-path helpers"
```

---

## Task 5: English Dictionary (en.ts) — Source of Truth

**Files:**
- Modify: `src/i18n/en.ts`

This task encodes the new English copy (after backend pivot) into the dictionary. Spanish translation in Task 17.

- [ ] **Step 1: Write the dictionary**

Replace stub `src/i18n/en.ts` with:

```ts
import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    siteTitle: "Jair Mera | Full Stack Engineer · Node.js · AWS",
    siteDescription:
      "Portfolio of Jair Mera — Full Stack Engineer focused on Node.js, NestJS, Ruby on Rails, AWS Serverless, and React. AWS Certified Solutions Architect — Associate.",
    aboutTitle: "About | Jair Mera",
    aboutDescription:
      "Learn more about Jair Mera, Full Stack Engineer specializing in Node.js, AWS Serverless, and AI-accelerated development.",
    workTitle: "Projects | Jair Mera",
    workDescription: "Learn about Jair Mera's most recent projects",
    notFoundTitle: "404 | Jair Mera",
    notFoundDescription: "Page not found.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    about: "About",
    menuLabel: "Toggle menu",
  },
  hero: {
    roleBadge: "Full Stack Engineer · Node.js · Rails · React/Next · AWS",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    headlinePart1: "Engineering ",
    headlineHighlight1: "End-to-End SaaS",
    headlinePart2: " Products with ",
    headlineHighlight2: "Serverless Architectures",
    headlinePart3: " and AI-Accelerated Workflows",
    subheadline:
      "Full Stack Engineer focused on **Node.js** (NestJS/Express), **Ruby on Rails**, and **React/Next.js**. Building scalable APIs, event-driven systems, and SaaS web apps. Currently at **Senirop**, working on **TAPinto.net**.",
    primaryCta: "View Work",
    secondaryCta: "Download CV",
    socialProof: "Connect with me",
    portraitAlt: "Jair Mera - Full Stack Engineer",
  },
  philosophy: {
    title: "How I Work",
    subtitle: "Principles that drive every line of code I write.",
    cards: [
      {
        title: "Full Ownership",
        icon: "layers",
        description:
          "I own features end-to-end: from Postgres schema design to React component architecture to CI/CD pipeline. No handovers, no excuses.",
      },
      {
        title: "Testing-First",
        icon: "shield",
        highlight: true,
        highlightLabel: "Core",
        description:
          "Automated testing isn't an afterthought. Jest unit tests, Playwright E2E, and thorough debugging are baked into my workflow from day one.",
      },
      {
        title: "Ship Fast, Ship Right",
        icon: "rocket",
        description:
          "Migrated a full ERP to Clean Architecture in under 2 weeks. Speed without sacrificing quality — measurable through code reviews and test coverage.",
      },
    ],
  },
  techStack: {
    title: "Tech Stack",
    subtitle:
      "Building scalable applications with type-safe, battle-tested technologies.",
    coreLabel: "Core Engineering",
  },
  experience: {
    title: "Experience",
    subtitle:
      "My professional journey building scalable applications and working with international clients.",
    currentLabel: "Current",
    relatedProjectsLabel: "See projects related to this role",
    entries: [
      {
        title: "Full Stack Engineer",
        company: "Senirop (Consultancy)",
        date: "Nov 2024 - Present",
        badges: ["React 19", "Ruby on Rails", "TypeScript", "PostgreSQL"],
        current: true,
        relatedProjects: "#projects",
        points: [
          "Architecting a greenfield CRM platform end-to-end in React 19 + Rails API, defining component patterns, custom hooks, and API contracts with the backend team.",
          "Full-stack contributor on TAPinto.net (Ruby on Rails + React), shipping CMS features across 12+ content types, tuning background jobs, performance hotspots, and cache layers to keep a high-traffic US news platform fast.",
          "Led a <2 week architectural migration of a legacy Export ERP (Lideser) from monolith to Clean Architecture (React + Rails API), reducing technical debt by ~60%.",
          "Built an internal AI Code Quality Validator using AST analysis to audit LLM-generated code against Senior Tech Lead standards.",
        ],
      },
      {
        title: "Cofounder & Back End Developer",
        company: "Development Dynamics (Contract)",
        date: "Mar 2024 - Aug 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Designed and implemented 15+ RESTful API endpoints using NestJS + TypeScript, including data models, DTOs, guards, and business logic from scratch.",
          "Established the testing culture: wrote 50+ Jest unit/integration tests, achieving >85% coverage on critical API paths.",
          "Drove sprint planning and backlog grooming in Jira, shipping 2-week sprints consistently while managing technical scope with non-technical co-founders.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Technical University of Ambato",
        date: "Dec 2023 - Sep 2024",
        badges: ["Next.js", "NestJS", "BullMQ", "PostgreSQL"],
        points: [
          "Led a 4-person Scrum team building Gendocs V3, a Next.js + NestJS document management system handling thousands of academic documents.",
          "Implemented event-driven async processing with BullMQ queues, reducing report generation from ~30s to ~9s (70% improvement).",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Ambivalence Clothing",
        date: "Mar 2023 - May 2023",
        badges: ["Next.js 14", "TypeScript"],
        points: [
          "Designed and developed a full e-commerce platform using Next.js 14 with TypeScript, implementing product catalog, cart, and checkout flows.",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies and tools I use daily to build high-quality software.",
    dailyLabel: "Daily",
    categories: [
      {
        title: "Backend & Cloud",
        icon: "server",
        highlight: true,
        skills: [
          { name: "Node.js", color: "#68a063" },
          { name: "NestJS", color: "#e0234e" },
          { name: "Express", color: "#ffffff" },
          { name: "Ruby on Rails", color: "#cc0000" },
          { name: "PostgreSQL", color: "#336791" },
          { name: "AWS Lambda", color: "#ff9900" },
          { name: "Serverless Framework", color: "#fd5750" },
          { name: "DynamoDB", color: "#4053d6" },
          { name: "S3", color: "#ff9900" },
          { name: "SQS", color: "#ff4f8b" },
          { name: "SNS", color: "#ff4f8b" },
          { name: "CloudFormation / CDK", color: "#ff9900" },
        ],
      },
      {
        title: "Core Stack",
        icon: "code",
        skills: [
          { name: "TypeScript", color: "#3178c6" },
          { name: "JavaScript", color: "#f7df1e" },
          { name: "React 18/19", color: "#61dafb" },
          { name: "Next.js", color: "#ffffff" },
        ],
      },
      {
        title: "AI Power Tools",
        icon: "sparkles",
        highlight: true,
        skills: [
          { name: "Claude Code", color: "#f97316" },
          { name: "Cursor", color: "#22d3ee" },
          { name: "Windsurf", color: "#a855f7" },
          { name: "GitHub Copilot", color: "#ffffff" },
        ],
      },
      {
        title: "Testing & DevOps",
        icon: "terminal",
        skills: [
          { name: "Playwright", color: "#2ead33" },
          { name: "Jest", color: "#c21325" },
          { name: "Docker", color: "#2496ed" },
          { name: "Git", color: "#f05032" },
          { name: "GitHub Actions", color: "#2088ff" },
        ],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    subtitle: "Validated expertise from industry-recognized programs.",
    activeLabel: "Active",
    issuedLabel: "Issued",
    skillsCoveredLabel: "Skills covered",
    verifyLabel: "Verify on Credly",
    items: [
      {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        issuedLabel: "April 2026", // TODO during Task 1: replace with exact Credly issue date
        statusLabel: "Active",
        skills: [
          "Cloud architecture",
          "Security & IAM",
          "Scalability",
          "Cost optimization",
          "AWS Well-Architected Framework",
        ],
        verifyLabel: "Verify on Credly",
        verifyUrl:
          "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
        badgeImage: "/assets/aws-saa-badge.png",
        badgeAlt: "AWS Certified Solutions Architect Associate badge",
      },
    ],
  },
  featured: {
    title: "Featured Work",
    subtitle: "Highlights from my professional career and personal achievements.",
    confidentialLabel: "Confidential",
    projects: [
      {
        title: "TAPinto.net",
        shortDesc:
          "High-traffic US news platform with full-stack contributions across CMS, jobs, and cache.",
        longDesc:
          "Full-stack contributor on a high-traffic US digital news platform serving millions of users. Engineered complex CMS modules for 12+ content types, tuned background jobs, optimized cache layers and performance hotspots, and integrated dynamic ad-serving systems and payment gateways. Operating in an English-first distributed team across US timezones.",
        tech: [
          "Ruby on Rails",
          "React",
          "PostgreSQL",
          "Background Jobs",
          "Caching",
          "Performance",
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.bmp",
      },
      {
        title: "Lideser Export ERP",
        shortDesc:
          "Architected a 2-week migration of a legacy ERP to Clean Architecture.",
        longDesc:
          "Lead Architect for the critical migration of a legacy Export Management ERP. Transitioned the monolithic system to a modern Clean Architecture (Rails API + React) in a record 2-week timeframe, reducing ~60% technical debt. Designed the PostgreSQL schema migration strategy to ensure zero data loss during the transition.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        image: "/assets/lideser.png",
      },
      {
        title: "AI Code Quality Validator",
        shortDesc:
          "Internal tool to evaluate and benchmark LLM code generation quality.",
        longDesc:
          "Developed an internal system to audit code generated by AI models. Built automated validation pipelines using AST analysis that process hundreds of code snippets daily, ensuring outputs met rigorous technical standards defined by Senior Tech Leads. Used to benchmark and improve AI-generated code quality across the team.",
        tech: ["Node.js", "AST Analysis", "TypeScript", "AI Evaluation"],
        confidential: true,
        image: "/assets/code-validator.webp",
      },
      {
        title: "Award-Winning Algorithms",
        shortDesc:
          "1st Place Algorithm Challenge & 3rd Place Fintech Innovation Contest.",
        longDesc:
          "Recognized for exceptional problem-solving skills with a 1st Place finish at a prestigious Algorithm Challenge and 3rd Place at a Fintech Innovation Contest focused on AI Integration. Demonstrated mastery in competitive programming and innovative financial technology solutions.",
        tech: ["Algorithms", "Problem Solving", "TypeScript"],
        image: "/assets/at-work.jpg",
      },
    ],
  },
  archive: {
    title: "The Archive",
    subtitle: "Previous projects showcasing my growth as a developer.",
    viewAll: "View all projects",
  },
  contact: {
    title: "Let's Build Something at Scale",
    subtitle:
      "Looking for a Full Stack Engineer who owns features end-to-end and builds scalable backend services? Let's talk.",
    cta: "Send Me a Message",
    mailtoSubject: "Contact from Portfolio",
    mailtoBody: "Hi Jair,\n\nI found your portfolio and would like to discuss...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Built with",
  },
  about: {
    h1Part1: "About ",
    h1Highlight: "Me",
    paragraph1:
      "Thanks for stopping by. I'm Jair Mera, a backend-leaning Full Stack Engineer based in Ecuador with a passion for building scalable Node.js services on AWS, leveraging serverless architectures, and accelerating delivery with AI tooling.",
    paragraph2:
      "I've always been passionate about technology. Since childhood, I've been fascinated by computers, which led me to pursue Software Engineering in 2021. Today, I combine my technical expertise with AI-powered tools to deliver high-quality, production-ready solutions faster.",
    portraitAlt: "Jair Mera at work",
    backgroundTitle: "Background",
    educationTitle: "Education",
    universityName: "Technical University of Ambato",
    universityDegree: "Software Engineering (2021 - Present)",
    highSchoolName: "Bolivar High School",
    highSchoolDegree: "Bachelor of Science",
    honorsTitle: "Honors & Awards",
    honor1Title: "3rd Place - Advanced Programming Contest",
    honor1Desc:
      "Hatary Shunko Innovation (Apr 2025) - Developed a financial solution with AI integration",
    honor2Title: "1st Place - Algorithm Challenge",
    honor2Desc:
      "Technical University of Ambato (Apr 2023) - Solved complex algorithmic problems",
    languagesTitle: "Languages",
    spanishLabel: "Spanish",
    spanishLevel: "(Native)",
    englishLabel: "English",
    englishLevel: "(B2)",
    softTitle: "What I Bring to the Table",
    softCards: [
      {
        title: "Team Collaboration",
        description:
          "Experience leading Scrum teams and mentoring junior developers.",
      },
      {
        title: "Self-Learning",
        description:
          "Constantly exploring new technologies and staying up-to-date with industry trends.",
      },
      {
        title: "Problem Solving",
        description:
          "Award-winning skills in algorithmic thinking and complex problem resolution.",
      },
      {
        title: "Latin America Time Zones",
        description:
          "Based in Ecuador (UTC-5). Native Spanish speaker, comfortable in English-first remote teams across the Americas.",
      },
    ],
  },
  notFound: {
    title: "Page not found",
    subtitle: "The page you're looking for doesn't exist.",
    cta: "Go home",
  },
  langToggle: {
    en: "EN",
    es: "ES",
    ariaLabel: "Switch language",
  },
  workPage: {
    title: "Projects",
    subtitle:
      "A collection of projects showcasing my journey as a Full Stack Engineer. From enterprise applications to personal experiments.",
    backLink: "Back to Projects",
  },
};
```

> Note: The `issuedLabel` value (`"April 2026"`) is a placeholder — replace with the exact "Issued on" string from the Credly badge page noted in Task 1, Step 4.

- [ ] **Step 2: Verify TypeScript compiles**

Run: `pnpm astro check 2>&1 | head -30`
Expected: no errors. If a key is missing from `Translations`, fix `types.ts` or the dictionary.

- [ ] **Step 3: Re-run i18n tests**

Run: `pnpm test src/i18n/index.test.ts`
Expected: all tests still pass (Spanish stub still works).

- [ ] **Step 4: Commit**

```bash
git add src/i18n/en.ts
git commit -m "feat(i18n): seed English dictionary with backend-pivot copy"
```

---

## Task 6: BaseLayout — Dynamic Lang + Hreflang

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Update BaseLayout to accept locale and inject hreflang**

Replace contents of `src/layouts/BaseLayout.astro`:

```astro
---
import MainHead from '../components/MainHead.astro';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import { getLocale, getAlternateUrls, type Locale } from '../i18n';

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  locale?: Locale;
}

const { title, description } = Astro.props;
const locale: Locale = Astro.props.locale ?? getLocale(Astro.url.pathname);
const origin = Astro.site?.origin ?? "https://devjaes.dev";
const alternates = getAlternateUrls(Astro.url.pathname, origin);
---

<html lang={locale} class="dark">
	<head>
		<MainHead title={title} description={description} locale={locale} />
		<link rel="alternate" hreflang="en" href={alternates.en} />
		<link rel="alternate" hreflang="es" href={alternates.es} />
		<link rel="alternate" hreflang="x-default" href={alternates.en} />
	</head>
	<body class="min-h-screen bg-background text-text-secondary antialiased">
		<div class="fixed inset-0 -z-10 bg-background">
			<div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]"></div>
			<div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(168,85,247,0.05),transparent)]"></div>
		</div>

		<Nav locale={locale} />
		<main>
			<slot />
		</main>
		<Footer locale={locale} />

		<script>
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();
					const target = document.querySelector(this.getAttribute('href'));
					if (target) {
						target.scrollIntoView({ behavior: 'smooth' });
					}
				});
			});
		</script>
	</body>
</html>
```

- [ ] **Step 2: Run dev server and verify English page renders unchanged**

Run: `pnpm dev` (background) then visit `http://localhost:4321/`. Expected: home renders identically to before. View source: `<html lang="en">` present, `<link rel="alternate" hreflang="en" ...>` present.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat(i18n): make BaseLayout locale-aware and inject hreflang"
```

---

## Task 7: MainHead — Locale-aware Defaults

**Files:**
- Modify: `src/components/MainHead.astro`

- [ ] **Step 1: Update MainHead**

Replace contents of `src/components/MainHead.astro`:

```astro
---
import "../styles/global.css";
import { getTranslations, type Locale } from "../i18n";

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  locale?: Locale;
}

const { locale = "en" } = Astro.props;
const t = getTranslations(locale);

const {
  title = t.meta.siteTitle,
  description = t.meta.siteDescription,
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="generator" content={Astro.generator} />

<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:site_name" content="Jair Mera Portfolio" />
<meta property="og:locale" content={locale === "es" ? "es_ES" : "en_US"} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />

<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<meta name="theme-color" content="#0a0a0a" />
<meta name="color-scheme" content="dark" />
```

- [ ] **Step 2: Verify dev render**

Run: `pnpm dev`. Visit `/`. Inspect `<title>` and `<meta name="description">`. Expected: backend-pivot wording from `en.meta.siteTitle` / `en.meta.siteDescription`.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/MainHead.astro
git commit -m "feat(i18n): wire MainHead defaults to dictionary"
```

---

## Task 8: Hero — Refactor to Dictionary + Apply New Copy + AWS Cert Pill

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Replace Hero contents**

Replace `src/components/Hero.astro` (full replacement; preserves layout/animations, swaps strings + adds cert pill, removes "Available for work"):

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props {
  align?: "start" | "center";
  showCTA?: boolean;
  showImage?: boolean;
  locale?: Locale;
}

const {
  align = "center",
  showCTA = true,
  showImage = true,
  locale = "en",
} = Astro.props;

const t = getTranslations(locale);

const socialLinks = [
  { label: "GitHub", href: "https://github.com/devjaes", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jair-mera-dev", icon: "linkedin" },
];

// Subheadline contains **bold** markers — convert to <strong> on render.
const renderSubheadline = (s: string) =>
  s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary">$1</strong>');
---

<section class="section-spacing">
  <div class="container-custom">
    <div class:list={[
      "flex gap-12 lg:gap-16",
      showImage ? "flex-col lg:flex-row items-center" : "flex-col",
      align === 'center' && !showImage ? "items-center text-center" : ""
    ]}>

      {showImage && (
        <div class="relative flex-shrink-0 animate-fade-in">
          <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 via-accent/20 to-accent-purple/30 blur-2xl opacity-60"></div>
            <div class="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-accent-cyan/50 via-surface-border to-accent-purple/50">
              <img
                src="/assets/portrait.jpg"
                alt={t.hero.portraitAlt}
                class="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      )}

      <div class:list={[
        "flex flex-col gap-6",
        showImage ? "lg:text-left text-center items-center lg:items-start" : "",
        align === 'center' && !showImage ? "items-center text-center" : "items-start text-left"
      ]}>
        <!-- Role + AWS Cert pills -->
        <div class="flex flex-wrap gap-2 animate-fade-in-up">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {t.hero.roleBadge}
          </span>
          <a
            href={t.hero.awsCertVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full border border-[#ff9900]/40 bg-[#ff9900]/10 text-[#ff9900] hover:bg-[#ff9900]/20 transition-colors"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.863.279a2.06 2.06 0 0 1-.263.12.47.47 0 0 1-.135.024c-.12 0-.18-.086-.18-.262v-.391c0-.135.016-.238.056-.303.04-.064.12-.127.239-.191.28-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586z" />
            </svg>
            {t.hero.awsCertPill}
          </a>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl animate-fade-in-up">
          {t.hero.headlinePart1}
          <span class="text-gradient">{t.hero.headlineHighlight1}</span>
          {t.hero.headlinePart2}
          <span class="text-gradient">{t.hero.headlineHighlight2}</span>
          {t.hero.headlinePart3}
        </h1>

        <p
          class="text-lg sm:text-xl text-text-secondary max-w-2xl animate-fade-in-up"
          style="animation-delay: 100ms;"
          set:html={renderSubheadline(t.hero.subheadline)}
        />

        {showCTA && (
          <>
            <div class="flex flex-col sm:flex-row gap-4 mt-2 animate-fade-in-up" style="animation-delay: 200ms;">
              <a href="#projects" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200">
                {t.hero.primaryCta}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="/cv-jair-mera.pdf" target="_blank" rel="noopener noreferrer nofollow" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-surface-border text-text-primary font-semibold rounded-lg hover:bg-surface-light hover:border-text-muted transition-colors duration-200">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.hero.secondaryCta}
              </a>
            </div>

            <div class="flex items-center gap-4 mt-4 animate-fade-in-up" style="animation-delay: 300ms;">
              {socialLinks.map(({ label, href, icon }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full border border-surface-border text-text-muted hover:text-text-primary hover:border-text-muted hover:bg-surface-light transition-all duration-200" aria-label={label}>
                  {icon === "github" && (
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  )}
                  {icon === "linkedin" && (
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                </a>
              ))}
              <span class="text-sm text-text-muted">{t.hero.socialProof}</span>
            </div>
          </>
        )}

        <slot />
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fade-in    { from { opacity: 0; transform: scale(0.95); }  to { opacity: 1; transform: scale(1); } }
  .animate-fade-in-up { opacity: 0; animation: fade-in-up 0.6s ease-out forwards; }
  .animate-fade-in    { opacity: 0; animation: fade-in 0.8s ease-out forwards; }
</style>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/`. Confirm:
- Role badge reads "Full Stack Engineer · Node.js · Rails · React/Next · AWS"
- Orange "AWS Certified Solutions Architect — Associate" pill is visible next to it, links to Credly.
- "Available for work" green-dot pill is gone.
- Headline highlights "End-to-End SaaS" and "Serverless Architectures".
- Subheadline mentions Senirop + TAPinto.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat(hero): backend pivot copy + AWS SAA cert pill, drop status badge"
```

---

## Task 9: EngineeringPhilosophy — Refactor to Dictionary

**Files:**
- Modify: `src/components/EngineeringPhilosophy.astro`

- [ ] **Step 1: Refactor**

Top of file replace the `interface PhilosophyCard` + hardcoded `principles` array with a locale-driven version. Replace the frontmatter (the `---` block at the top of the file) with:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props {
  locale?: Locale;
}

const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
---
```

Then replace section header strings:
- `<h2 ...>How I Work</h2>` → `<h2 ...>{t.philosophy.title}</h2>`
- `<p class="text-text-secondary max-w-2xl mx-auto">Principles that drive every line of code I write.</p>` → `<p class="text-text-secondary max-w-2xl mx-auto">{t.philosophy.subtitle}</p>`

In the cards loop, replace `principles.map(...)` with `t.philosophy.cards.map(...)`. Replace the highlight badge text `"Core"` with `{card.highlightLabel ?? "Core"}`.

The SVG icon mapping (`card.icon === "layers" / "shield" / "rocket"`) stays as-is.

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/`. Section "How I Work" with three cards still renders correctly.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/EngineeringPhilosophy.astro
git commit -m "feat(i18n): refactor EngineeringPhilosophy to use dictionary"
```

---

## Task 10: TechOrbit — Re-shuffle Rings + Refactor to Dictionary

**Files:**
- Modify: `src/components/TechOrbit.astro`

- [ ] **Step 1: Update orbit data + add Serverless icon**

In the frontmatter:

1. Remove `siPython` from imports (keep all others).
2. Add a custom `serverlessIcon` constant with brand color and a simple lambda-shaped SVG path next to the `awsIcon` declaration:

```ts
const serverlessIcon = {
  // Lightning-bolt mark (Serverless Framework brand color #FD5750)
  path: "M13.5 2L4 14h7l-2 8 11-13h-7l1-7z",
  hex: "FD5750",
};
```

3. Replace the orbit arrays:

```ts
const innerOrbit = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "NestJS", icon: siNestjs },
  { name: "Rails", icon: siRubyonrails },
  { name: "AWS", icon: awsIcon },
];

const outerOrbit = [
  { name: "Docker", icon: siDocker },
  { name: "Serverless", icon: serverlessIcon },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Git", icon: siGit },
  { name: "Cursor", icon: cursorIcon, isAiTool: true },
  { name: "Copilot", icon: copilotIcon, isAiTool: true },
];
```

4. Add locale support to the frontmatter — append:

```ts
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
```

5. Replace `Tech Stack` section header text and the subtitle paragraph:
- `<h2 ...>Tech Stack</h2>` → `<h2 ...>{t.techStack.title}</h2>`
- `Building scalable applications with type-safe, battle-tested technologies.` → `{t.techStack.subtitle}`
- `<span class="center-label">Core Engineering</span>` → `<span class="center-label">{t.techStack.coreLabel}</span>`

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/`. Inner orbit shows AWS instead of Python. Outer orbit shows Serverless instead of AWS. Animations still spin.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/TechOrbit.astro
git commit -m "feat(orbit): promote AWS to inner ring, add Serverless to outer"
```

---

## Task 11: Experience — Refactor to Dictionary

**Files:**
- Modify: `src/components/Experience.astro`

- [ ] **Step 1: Refactor frontmatter**

Replace the frontmatter (top `---` block) with:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
const experiences = t.experience.entries;
---
```

(The `ExperienceItem` interface is removed — type comes from `Translations`.)

- [ ] **Step 2: Replace section header strings**

- `<h2 ...>Experience</h2>` → `<h2 ...>{t.experience.title}</h2>`
- The subtitle paragraph text → `{t.experience.subtitle}`
- `Current` badge text → `{t.experience.currentLabel}`
- `See projects related to this role` → `{t.experience.relatedProjectsLabel}`

The rest of the markup (timeline, cards, badges, points, related-link script) stays unchanged.

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/`. Confirm:
- Senirop bullet 2 reads "Full-stack contributor on TAPinto.net … tuning background jobs, performance hotspots, and cache layers …"
- UTA bullet 2 reads "Implemented event-driven async processing with BullMQ queues …"

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.astro
git commit -m "feat(experience): rewrite bullets for backend pivot via dictionary"
```

---

## Task 12: Skills — Refactor + Reorder + Expand Backend & Cloud

**Files:**
- Modify: `src/components/Skills.astro`

- [ ] **Step 1: Refactor frontmatter**

Replace the frontmatter with:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
const categories = t.skills.categories;
---
```

(Remove the local `SkillCategory` interface and the hardcoded `categories` array — both now come from the dictionary.)

- [ ] **Step 2: Replace strings in markup**

- `<h2 ...>Technical Skills</h2>` → `<h2 ...>{t.skills.title}</h2>`
- Subtitle paragraph text → `{t.skills.subtitle}`
- `Daily` badge text in the card → `{t.skills.dailyLabel}`

The icon-mapping switch (`code` / `sparkles` / `server` / `terminal`) stays unchanged.

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/`. First skills card is "Backend & Cloud" (highlighted, "Daily" badge), containing AWS Lambda, Serverless Framework, DynamoDB, S3, SQS, SNS, CloudFormation/CDK plus Node.js/NestJS/Express/Rails/PostgreSQL. Sinatra is gone. Order: Backend & Cloud, Core Stack, AI Power Tools, Testing & DevOps.

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Skills.astro
git commit -m "feat(skills): lead with Backend & Cloud, expand AWS toolkit, drop Sinatra"
```

---

## Task 13: FeaturedProjects — Refactor to Dictionary

**Files:**
- Modify: `src/components/FeaturedProjects.astro`

- [ ] **Step 1: Refactor frontmatter**

Replace the frontmatter with:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
const featuredProjects = t.featured.projects;
---
```

- [ ] **Step 2: Replace strings in markup**

- `<h2 ...>Featured Work</h2>` → `<h2 ...>{t.featured.title}</h2>`
- Subtitle paragraph → `{t.featured.subtitle}`
- The `<span class="text-xs font-medium text-text-muted">Confidential</span>` → `{t.featured.confidentialLabel}`

The card markup (image, hover descriptions, tech badges, link logic) stays unchanged.

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/#projects`. Confirm:
- TAPinto card shortDesc reads "High-traffic US news platform with full-stack contributions across CMS, jobs, and cache."
- TAPinto longDesc (hover) mentions "tuned background jobs", "cache layers", "performance hotspots".
- TAPinto tech badges include "Background Jobs", "Caching", "Performance".
- Lideser shortDesc updated; tech badges include "Rails API".

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturedProjects.astro
git commit -m "feat(projects): reframe TAPinto as balanced full-stack with backend wins"
```

---

## Task 14: ContactCTA — Refactor + Apply Backend Tune

**Files:**
- Modify: `src/components/ContactCTA.astro`

- [ ] **Step 1: Replace contents**

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);

const mailto = `mailto:hello@devjaes.dev?subject=${encodeURIComponent(t.contact.mailtoSubject)}&body=${encodeURIComponent(t.contact.mailtoBody)}`;
---

<section class="section-spacing border-t border-surface-border">
  <div class="container-custom">
    <div class="relative p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-br from-surface via-surface to-accent-cyan/5 border border-surface-border overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.1),transparent)]"></div>

      <div class="relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="text-center lg:text-left">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">{t.contact.title}</h2>
          <p class="text-text-secondary max-w-md">{t.contact.subtitle}</p>
        </div>

        <a href={mailto} class="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-105">
          <span>{t.contact.cta}</span>
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/`. Subtitle reads "Looking for a Full Stack Engineer who owns features end-to-end and builds scalable backend services? Let's talk."

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactCTA.astro
git commit -m "feat(contact): tune CTA for backend services pitch via dictionary"
```

---

## Task 15: Footer — Refactor to Dictionary

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Refactor**

Replace the frontmatter with:

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);

const currentYear = new Date().getFullYear();

const socialLinks = [
  { label: "GitHub", href: "https://github.com/devjaes", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jair-mera-dev", icon: "linkedin" },
];
---
```

In markup:
- `&copy; 2026 Jair Mera.` → `{t.footer.copyright(currentYear)}`
- `Built with` → `{t.footer.builtWith}`

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Confirm footer copyright reads "© 2026 Jair Mera." and "Built with" prefix appears.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat(footer): wire to dictionary"
```

---

## Task 16: New `Certifications.astro` Component

**Files:**
- Create: `src/components/Certifications.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);
const { items, title, subtitle, issuedLabel, statusLabel, skillsCoveredLabel, verifyLabel, activeLabel } = {
  ...t.certifications,
  statusLabel: t.certifications.activeLabel,
};
---

<section id="certifications" class="section-spacing">
  <div class="container-custom">
    <div class="mb-12 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <p class="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {items.map((cert) => (
        <article class="group relative flex flex-col sm:flex-row gap-6 p-6 lg:p-8 rounded-2xl border border-surface-border bg-surface/50 hover:border-[#ff9900]/40 hover:bg-surface/80 transition-all duration-300">
          <div class="flex-shrink-0 self-center sm:self-start">
            <img
              src={cert.badgeImage}
              alt={cert.badgeAlt}
              width="160"
              height="160"
              loading="lazy"
              class="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-[0_0_24px_rgba(255,153,0,0.15)]"
            />
          </div>

          <div class="flex-1 flex flex-col gap-3">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg lg:text-xl font-semibold text-text-primary">{cert.title}</h3>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border border-green-500/30 bg-green-500/10 text-green-400">
                <span class="w-1.5 h-1.5 rounded-full bg-green-400" />
                {activeLabel}
              </span>
            </div>

            <div class="text-sm text-text-secondary">
              <span>{cert.issuer}</span>
              <span class="mx-2 text-text-muted">·</span>
              <span class="text-text-muted">{issuedLabel}: {cert.issuedLabel}</span>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wider text-text-muted mb-2">{skillsCoveredLabel}</p>
              <ul class="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <li class="px-3 py-1 text-xs font-medium rounded-full border border-surface-border bg-surface-light text-text-secondary">{skill}</li>
                ))}
              </ul>
            </div>

            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 inline-flex items-center gap-2 self-start px-4 py-2 text-sm font-medium rounded-lg border border-[#ff9900]/40 bg-[#ff9900]/10 text-[#ff9900] hover:bg-[#ff9900]/20 transition-colors"
            >
              {verifyLabel}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Visual smoke check**

The component is not yet wired into a page — visual verify happens in Task 17.

- [ ] **Step 3: Commit**

```bash
git add src/components/Certifications.astro
git commit -m "feat(certifications): add data-driven Certifications section"
```

---

## Task 17: Wire Certifications into index.astro

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Insert Certifications between Skills and FeaturedProjects**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";

import Hero from "../components/Hero.astro";
import EngineeringPhilosophy from "../components/EngineeringPhilosophy.astro";
import TechOrbit from "../components/TechOrbit.astro";
import Experience from "../components/Experience.astro";
import Skills from "../components/Skills.astro";
import Certifications from "../components/Certifications.astro";
import FeaturedProjects from "../components/FeaturedProjects.astro";
import ArchiveProjects from "../components/ArchiveProjects.astro";
import ContactCTA from "../components/ContactCTA.astro";
---

<BaseLayout>
  <Hero />
  <EngineeringPhilosophy />
  <TechOrbit />
  <Experience />
  <Skills />
  <Certifications />
  <FeaturedProjects />
  <ArchiveProjects />
  <ContactCTA />
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/`. Confirm:
- Certifications section appears between Skills and Featured Work.
- AWS SAA badge image renders (160px square).
- "Verify on Credly" button opens the Credly badge URL in a new tab.
- "Active" pill is green.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): insert Certifications section between Skills and Featured Work"
```

---

## Task 18: ArchiveProjects — Locale-aware (filter Spanish twins)

**Files:**
- Modify: `src/components/ArchiveProjects.astro`

The component currently calls `getCollection("work")`, which will eventually include both `lideser.md` and `lideser.es.md` — we must filter by locale.

- [ ] **Step 1: Update frontmatter**

```astro
---
import { getCollection } from "astro:content";
import { getTranslations, type Locale } from "../i18n";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);

const allProjects = (await getCollection("work"))
  // Filter by locale: Spanish entries have IDs ending with `.es.md`; default = English.
  .filter((entry) => {
    const isSpanish = entry.id.endsWith(".es.md");
    return locale === "es" ? isSpanish : !isSpanish;
  })
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

const archiveProjects = allProjects.filter((p) => !p.data.isMain);
const mainProjects = allProjects.filter((p) => p.data.isMain);
const projectsToShow = mainProjects;

const workIndexUrl = locale === "es" ? "/es/work/" : "/work/";
const projectUrl = (slug: string) => locale === "es" ? `/es/work/${slug}/` : `/work/${slug}/`;
---
```

- [ ] **Step 2: Replace strings + adjust hrefs**

- `<h2 ...>The Archive</h2>` → `<h2 ...>{t.archive.title}</h2>`
- Subtitle → `{t.archive.subtitle}`
- `View all projects` → `{t.archive.viewAll}`
- `href="/work/"` (View all link) → `href={workIndexUrl}`
- `href={`/work/${project.slug}/`}` (card links) → `href={projectUrl(project.slug)}`

Note: when reading Spanish entries, `entry.slug` will be the slug Astro derives from the filename — `lideser.es` for `lideser.es.md`. We strip the `.es` suffix when building URLs:

Replace `projectUrl` with:
```ts
const projectUrl = (slug: string) => {
  const cleanSlug = slug.replace(/\.es$/, "");
  return locale === "es" ? `/es/work/${cleanSlug}/` : `/work/${cleanSlug}/`;
};
```

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/`. Archive renders unchanged (Spanish twins not yet created → only English entries exist). All "View all" / card hrefs point to `/work/...`.

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/ArchiveProjects.astro
git commit -m "feat(archive): filter projects by locale and build locale-aware URLs"
```

---

## Task 19: LangToggle Component

**Files:**
- Create: `src/components/LangToggle.astro`

- [ ] **Step 1: Implement**

```astro
---
import { getCounterpartPath, getTranslations, type Locale } from "../i18n";

interface Props { locale: Locale }
const { locale } = Astro.props;
const t = getTranslations(locale);
const counterpartHref = getCounterpartPath(Astro.url.pathname);
const otherLocale: Locale = locale === "en" ? "es" : "en";
---

<div
  class="inline-flex items-center rounded-full border border-surface-border bg-surface/60 p-0.5 text-xs font-semibold"
  role="group"
  aria-label={t.langToggle.ariaLabel}
>
  <span class="px-2.5 py-1 rounded-full bg-surface-light text-text-primary">
    {locale === "en" ? t.langToggle.en : t.langToggle.es}
  </span>
  <a
    href={counterpartHref}
    hreflang={otherLocale}
    class="px-2.5 py-1 rounded-full text-text-muted hover:text-text-primary transition-colors"
  >
    {locale === "en" ? t.langToggle.es : t.langToggle.en}
  </a>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LangToggle.astro
git commit -m "feat(i18n): add LangToggle component"
```

---

## Task 20: Nav — Refactor + Embed LangToggle

**Files:**
- Modify: `src/components/Nav.astro`

- [ ] **Step 1: Refactor frontmatter**

Replace the top frontmatter with:

```astro
---
import { getTranslations, type Locale } from "../i18n";
import LangToggle from "./LangToggle.astro";

interface Props { locale?: Locale; }
const { locale = "en" } = Astro.props;
const t = getTranslations(locale);

const homePath = locale === "es" ? "/es/" : "/";
const aboutPath = locale === "es" ? "/es/about/" : "/about/";
const workPath = locale === "es" ? "/es/work/" : "/work/";
const expHash = locale === "es" ? "/es/#experience" : "/#experience";

const textLinks: { label: string; href: string }[] = [
  { label: t.nav.home, href: homePath },
  { label: t.nav.experience, href: expHash },
  { label: t.nav.projects, href: workPath },
  { label: t.nav.about, href: aboutPath },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/devjaes", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jair-mera-dev", icon: "linkedin" },
];
---
```

- [ ] **Step 2: Update logo href + add LangToggle**

In the `<header>`:
- `<a href="/" ...>` (logo) → `<a href={homePath} ...>`
- Inside the desktop right-hand area (where `socialLinks` are rendered), insert `<LangToggle locale={locale} />` BEFORE the social icons:

```astro
<div class="hidden md:flex items-center gap-3">
  <LangToggle locale={locale} />
  {/* existing socialLinks.map(...) here */}
</div>
```

- In the mobile menu (the `<div id="mobile-menu" ...>` block), add `<LangToggle locale={locale} />` inside the bottom border row that already shows social icons:

```astro
<div class="flex items-center gap-4 pt-4 px-4 border-t border-surface-border mt-4">
  <LangToggle locale={locale} />
  <div class="ml-auto flex gap-3">
    {/* existing socialLinks.map(...) here */}
  </div>
</div>
```

- Aria label on the mobile menu button: `aria-label="Toggle menu"` → `aria-label={t.nav.menuLabel}`

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/`. Confirm:
- Nav text reads Home / Experience / Projects / About (English).
- Right-hand `EN | ES` toggle is visible. Clicking ES navigates to `/es/` (will 404 until Task 22 lands; that's expected).

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat(nav): wire to dictionary, embed LangToggle"
```

---

## Task 21: 404 Page — Refactor

**Files:**
- Modify: `src/pages/404.astro`

Read current contents first. Refactor to use dictionary. Pattern (reading existing structure first then adapting):

- [ ] **Step 1: Read current 404 page**

```bash
cat src/pages/404.astro
```

- [ ] **Step 2: Refactor strings**

Replace any hardcoded "Page not found" / "Go home" / etc. with `{t.notFound.title}`, `{t.notFound.subtitle}`, `{t.notFound.cta}`. Add the standard frontmatter pattern:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { getTranslations } from "../i18n";

const locale = "en";
const t = getTranslations(locale);
---

<BaseLayout title={t.meta.notFoundTitle} description={t.meta.notFoundDescription} locale={locale}>
  <!-- preserve existing layout/markup, swap text -->
</BaseLayout>
```

The "Go home" link href should be `/`.

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/this-does-not-exist`. Confirm 404 strings come from dictionary.

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat(404): refactor to dictionary"
```

---

## Task 22: About Page — Backend Lean + Cert Sub-block + LatAm Card

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Refactor frontmatter and strings**

Replace `src/pages/about.astro` (full replacement; same layout, dictionary-driven):

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactCTA from "../components/ContactCTA.astro";
import { getTranslations } from "../i18n";

const locale = "en";
const t = getTranslations(locale);
const a = t.about;
---

<BaseLayout title={t.meta.aboutTitle} description={t.meta.aboutDescription} locale={locale}>
  <section class="section-spacing">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">
            {a.h1Part1}<span class="text-gradient">{a.h1Highlight}</span>
          </h1>
          <p class="text-lg text-text-secondary mb-6">{a.paragraph1}</p>
          <p class="text-text-secondary">{a.paragraph2}</p>
        </div>

        <div class="relative">
          <img src="/assets/at-work.jpg" alt={a.portraitAlt} class="rounded-2xl border border-surface-border shadow-lg" />
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-spacing bg-surface/30">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8">{a.backgroundTitle}</h2>

        <div class="space-y-8">
          <!-- Education -->
          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              {a.educationTitle}
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-text-primary">{a.universityName}</p>
                <p class="text-text-secondary">{a.universityDegree}</p>
              </div>
              <div>
                <p class="font-medium text-text-primary">{a.highSchoolName}</p>
                <p class="text-text-secondary">{a.highSchoolDegree}</p>
              </div>
            </div>
          </div>

          <!-- Certifications sub-block (NEW) -->
          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-[#ff9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.certifications.title}
            </h3>
            <ul class="space-y-3">
              {t.certifications.items.map((cert) => (
                <li class="flex flex-wrap items-center gap-3">
                  <span class="font-medium text-text-primary">{cert.title}</span>
                  <span class="text-text-secondary text-sm">— {cert.issuer}</span>
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" class="text-xs text-[#ff9900] hover:underline">{cert.verifyLabel}</a>
                </li>
              ))}
            </ul>
          </div>

          <!-- Honors -->
          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              {a.honorsTitle}
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-text-primary">{a.honor1Title}</p>
                <p class="text-text-secondary text-sm">{a.honor1Desc}</p>
              </div>
              <div>
                <p class="font-medium text-text-primary">{a.honor2Title}</p>
                <p class="text-text-secondary text-sm">{a.honor2Desc}</p>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {a.languagesTitle}
            </h3>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-accent-cyan"></span>
                <span class="text-text-primary">{a.spanishLabel}</span>
                <span class="text-text-muted text-sm">{a.spanishLevel}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-accent-purple"></span>
                <span class="text-text-primary">{a.englishLabel}</span>
                <span class="text-text-muted text-sm">{a.englishLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-spacing">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8">{a.softTitle}</h2>

        <div class="grid sm:grid-cols-2 gap-4">
          {a.softCards.map((card) => (
            <div class="p-5 rounded-xl border border-surface-border bg-surface/50 hover:border-accent-cyan/50 transition-colors">
              <h3 class="font-semibold text-text-primary mb-2">{card.title}</h3>
              <p class="text-sm text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <ContactCTA locale={locale} />
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/about/`. Confirm:
- Intro paragraph 1 mentions "backend-leaning" + Node.js + AWS.
- Certifications sub-block appears between Education and Honors with the AWS SAA entry + Credly link.
- Soft-skills grid shows the new "Latin America Time Zones" card.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat(about): backend-lean intro, cert sub-block, LatAm soft-skill card"
```

---

## Task 23: work.astro (EN list) — Locale-aware

**Files:**
- Modify: `src/pages/work.astro`

- [ ] **Step 1: Refactor**

Replace `src/pages/work.astro`:

```astro
---
import { getCollection } from "astro:content";
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactCTA from "../components/ContactCTA.astro";
import { getTranslations } from "../i18n";

const locale = "en";
const t = getTranslations(locale);

const projects = (await getCollection("work"))
  .filter((entry) => !entry.id.endsWith(".es.md"))
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

const projectUrl = (slug: string) => `/work/${slug.replace(/\.es$/, "")}`;
---

<BaseLayout title={t.meta.workTitle} description={t.meta.workDescription} locale={locale}>
  <div class="stack gap-20">
    <main class="section-spacing">
      <div class="container-custom">
        <div class="mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.workPage.title}</h1>
          <p class="text-text-secondary text-lg max-w-2xl">{t.workPage.subtitle}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a href={projectUrl(project.slug)} class="group relative rounded-xl border border-surface-border bg-surface/50 overflow-hidden transition-all duration-300 hover:border-accent-cyan/50 hover:bg-surface hover:scale-[1.02]">
              <div class="relative h-48 overflow-hidden">
                <img src={project.data.img} alt={project.data.img_alt || project.data.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              </div>

              <div class="p-5">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <h2 class="text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-1">{project.data.title}</h2>
                  <div class="flex-shrink-0 p-1.5 rounded-md border border-surface-border text-text-muted group-hover:text-accent-cyan group-hover:border-accent-cyan/50 transition-all group-hover:translate-x-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <p class="text-text-secondary text-sm mb-4 line-clamp-2">{project.data.description}</p>

                <div class="flex flex-wrap gap-1.5">
                  {project.data.tags.slice(0, 3).map((tag) => (
                    <span class="px-2 py-0.5 text-xs font-medium bg-surface-light text-text-muted rounded border border-surface-border">{tag}</span>
                  ))}
                  {project.data.tags.length > 3 && (
                    <span class="px-2 py-0.5 text-xs font-medium text-text-muted">+{project.data.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
    <ContactCTA locale={locale} />
  </div>
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/work/`. Confirm: page renders, all entries are English, links go to `/work/<slug>`.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/work.astro
git commit -m "feat(work): locale-aware list page"
```

---

## Task 24: work/[...slug].astro (EN detail) — Locale-aware

**Files:**
- Modify: `src/pages/work/[...slug].astro`

- [ ] **Step 1: Update getStaticPaths to filter EN entries**

Replace the frontmatter:

```astro
---
import { type CollectionEntry, getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import ContactCTA from '../../components/ContactCTA.astro';
import { getTranslations } from '../../i18n';

interface Props {
  entry: CollectionEntry<'work'>;
}

export async function getStaticPaths() {
  const work = await getCollection('work');
  return work
    .filter((entry) => !entry.id.endsWith('.es.md'))
    .map((entry) => ({
      params: { slug: entry.slug },
      props: { entry },
    }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
const locale = 'en';
const t = getTranslations(locale);
---
```

- [ ] **Step 2: Wire BaseLayout + back-link string**

- `<BaseLayout title={entry.data.title} description={entry.data.description}>` → `<BaseLayout title={entry.data.title} description={entry.data.description} locale={locale}>`
- `<a href="/work/" ...>` back link: `<a href="/work/" ...>` stays for EN (correct).
- `<span>Back to Projects</span>` → `<span>{t.workPage.backLink}</span>`
- `<ContactCTA />` → `<ContactCTA locale={locale} />`

- [ ] **Step 3: Visual verify**

Run: `pnpm dev`. Visit `/work/lideser` (or any existing slug). Page renders.

Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/work/[...slug].astro
git commit -m "feat(work-detail): filter EN-only entries in getStaticPaths, wire dictionary"
```

---

## Task 25: Spanish Dictionary (es.ts)

**Files:**
- Modify: `src/i18n/es.ts`

- [ ] **Step 1: Replace stub with full Spanish translations**

```ts
import type { Translations } from "./types";

export const es: Translations = {
  meta: {
    siteTitle: "Jair Mera | Ingeniero Full Stack · Node.js · AWS",
    siteDescription:
      "Portafolio de Jair Mera — Ingeniero Full Stack enfocado en Node.js, NestJS, Ruby on Rails, AWS Serverless y React. AWS Certified Solutions Architect — Associate.",
    aboutTitle: "Sobre mí | Jair Mera",
    aboutDescription:
      "Conoce más sobre Jair Mera, Ingeniero Full Stack especializado en Node.js, AWS Serverless y desarrollo acelerado por IA.",
    workTitle: "Proyectos | Jair Mera",
    workDescription: "Conoce los proyectos más recientes de Jair Mera",
    notFoundTitle: "404 | Jair Mera",
    notFoundDescription: "Página no encontrada.",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    menuLabel: "Abrir menú",
  },
  hero: {
    roleBadge: "Ingeniero Full Stack · Node.js · Rails · React/Next · AWS",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    headlinePart1: "Construyendo productos ",
    headlineHighlight1: "SaaS de extremo a extremo",
    headlinePart2: " con ",
    headlineHighlight2: "arquitecturas Serverless",
    headlinePart3: " y flujos acelerados por IA",
    subheadline:
      "Ingeniero Full Stack enfocado en **Node.js** (NestJS/Express), **Ruby on Rails** y **React/Next.js**. Construyo APIs escalables, sistemas event-driven y aplicaciones SaaS. Actualmente en **Senirop**, trabajando en **TAPinto.net**.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Descargar CV",
    socialProof: "Conecta conmigo",
    portraitAlt: "Jair Mera - Ingeniero Full Stack",
  },
  philosophy: {
    title: "Cómo trabajo",
    subtitle: "Principios que guían cada línea de código que escribo.",
    cards: [
      {
        title: "Ownership total",
        icon: "layers",
        description:
          "Hago suyas las features de extremo a extremo: desde el diseño del esquema en Postgres hasta la arquitectura de componentes en React y los pipelines de CI/CD. Sin handovers, sin excusas.",
      },
      {
        title: "Testing primero",
        icon: "shield",
        highlight: true,
        highlightLabel: "Esencial",
        description:
          "El testing automatizado no es una idea de último momento. Pruebas unitarias con Jest, E2E con Playwright y debugging riguroso forman parte de mi flujo desde el día uno.",
      },
      {
        title: "Entregar rápido y bien",
        icon: "rocket",
        description:
          "Migré un ERP completo a Clean Architecture en menos de 2 semanas. Velocidad sin sacrificar calidad — medible vía code reviews y cobertura de pruebas.",
      },
    ],
  },
  techStack: {
    title: "Stack técnico",
    subtitle:
      "Construyendo aplicaciones escalables con tecnologías type-safe y probadas en batalla.",
    coreLabel: "Core de ingeniería",
  },
  experience: {
    title: "Experiencia",
    subtitle:
      "Mi trayectoria construyendo aplicaciones escalables y trabajando con clientes internacionales.",
    currentLabel: "Actual",
    relatedProjectsLabel: "Ver proyectos relacionados con este rol",
    entries: [
      {
        title: "Ingeniero Full Stack",
        company: "Senirop (Consultoría)",
        date: "Nov 2024 - Actualidad",
        badges: ["React 19", "Ruby on Rails", "TypeScript", "PostgreSQL"],
        current: true,
        relatedProjects: "#projects",
        points: [
          "Diseñando y construyendo desde cero una plataforma CRM en React 19 + Rails API, definiendo patrones de componentes, hooks personalizados y contratos de API junto al equipo backend.",
          "Contribuidor full-stack en TAPinto.net (Ruby on Rails + React): envío de funcionalidades CMS para 12+ tipos de contenido, ajuste de jobs en background, performance hotspots y capas de caché para mantener veloz una plataforma de noticias de alto tráfico en EE. UU.",
          "Lideré una migración arquitectónica de <2 semanas de un ERP de exportación legacy (Lideser) de monolito a Clean Architecture (React + Rails API), reduciendo ~60 % de deuda técnica.",
          "Desarrollé un AI Code Quality Validator interno usando análisis AST para auditar código generado por LLMs frente a estándares de Senior Tech Leads.",
        ],
      },
      {
        title: "Cofundador & Desarrollador Backend",
        company: "Development Dynamics (Contrato)",
        date: "Mar 2024 - Ago 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Diseñé e implementé 15+ endpoints REST con NestJS + TypeScript, incluyendo modelos de datos, DTOs, guards y lógica de negocio desde cero.",
          "Establecí la cultura de testing: escribí 50+ pruebas unitarias y de integración con Jest, alcanzando >85 % de cobertura en rutas críticas de la API.",
          "Conduje sprint planning y backlog grooming en Jira, entregando sprints quincenales de forma sostenida y manejando alcance técnico con cofundadores no-técnicos.",
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Universidad Técnica de Ambato",
        date: "Dic 2023 - Sep 2024",
        badges: ["Next.js", "NestJS", "BullMQ", "PostgreSQL"],
        points: [
          "Lideré un equipo Scrum de 4 personas construyendo Gendocs V3, un sistema Next.js + NestJS para gestión de miles de documentos académicos.",
          "Implementé procesamiento asíncrono event-driven con colas BullMQ, reduciendo la generación de reportes de ~30 s a ~9 s (mejora del 70 %).",
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Ambivalence Clothing",
        date: "Mar 2023 - May 2023",
        badges: ["Next.js 14", "TypeScript"],
        points: [
          "Diseñé y desarrollé una plataforma e-commerce completa con Next.js 14 y TypeScript, implementando catálogo, carrito y flujos de checkout.",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades técnicas",
    subtitle:
      "Tecnologías y herramientas que uso a diario para construir software de calidad.",
    dailyLabel: "Diario",
    categories: [
      {
        title: "Backend & Cloud",
        icon: "server",
        highlight: true,
        skills: [
          { name: "Node.js", color: "#68a063" },
          { name: "NestJS", color: "#e0234e" },
          { name: "Express", color: "#ffffff" },
          { name: "Ruby on Rails", color: "#cc0000" },
          { name: "PostgreSQL", color: "#336791" },
          { name: "AWS Lambda", color: "#ff9900" },
          { name: "Serverless Framework", color: "#fd5750" },
          { name: "DynamoDB", color: "#4053d6" },
          { name: "S3", color: "#ff9900" },
          { name: "SQS", color: "#ff4f8b" },
          { name: "SNS", color: "#ff4f8b" },
          { name: "CloudFormation / CDK", color: "#ff9900" },
        ],
      },
      {
        title: "Stack principal",
        icon: "code",
        skills: [
          { name: "TypeScript", color: "#3178c6" },
          { name: "JavaScript", color: "#f7df1e" },
          { name: "React 18/19", color: "#61dafb" },
          { name: "Next.js", color: "#ffffff" },
        ],
      },
      {
        title: "Herramientas de IA",
        icon: "sparkles",
        highlight: true,
        skills: [
          { name: "Claude Code", color: "#f97316" },
          { name: "Cursor", color: "#22d3ee" },
          { name: "Windsurf", color: "#a855f7" },
          { name: "GitHub Copilot", color: "#ffffff" },
        ],
      },
      {
        title: "Testing & DevOps",
        icon: "terminal",
        skills: [
          { name: "Playwright", color: "#2ead33" },
          { name: "Jest", color: "#c21325" },
          { name: "Docker", color: "#2496ed" },
          { name: "Git", color: "#f05032" },
          { name: "GitHub Actions", color: "#2088ff" },
        ],
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    subtitle: "Experiencia validada por programas reconocidos en la industria.",
    activeLabel: "Activa",
    issuedLabel: "Emitida",
    skillsCoveredLabel: "Áreas cubiertas",
    verifyLabel: "Verificar en Credly",
    items: [
      {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        issuedLabel: "Abril 2026", // TODO: replace with exact Credly date (Spanish month name)
        statusLabel: "Activa",
        skills: [
          "Arquitectura cloud",
          "Seguridad e IAM",
          "Escalabilidad",
          "Optimización de costos",
          "AWS Well-Architected Framework",
        ],
        verifyLabel: "Verificar en Credly",
        verifyUrl:
          "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
        badgeImage: "/assets/aws-saa-badge.png",
        badgeAlt: "Insignia AWS Certified Solutions Architect Associate",
      },
    ],
  },
  featured: {
    title: "Trabajo destacado",
    subtitle: "Highlights de mi carrera profesional y logros personales.",
    confidentialLabel: "Confidencial",
    projects: [
      {
        title: "TAPinto.net",
        shortDesc:
          "Plataforma de noticias de alto tráfico en EE. UU. con contribuciones full-stack en CMS, jobs y caché.",
        longDesc:
          "Contribuidor full-stack en una plataforma digital de noticias de alto tráfico que sirve a millones de usuarios. Construí módulos CMS para 12+ tipos de contenido, ajusté jobs en background, optimicé capas de caché y performance hotspots, e integré sistemas dinámicos de ad-serving y pasarelas de pago. Trabajo en un equipo distribuido en zonas horarias de EE. UU., con inglés como idioma principal.",
        tech: [
          "Ruby on Rails",
          "React",
          "PostgreSQL",
          "Background Jobs",
          "Caché",
          "Performance",
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.bmp",
      },
      {
        title: "ERP de exportación Lideser",
        shortDesc:
          "Migración arquitectónica en 2 semanas de un ERP legacy a Clean Architecture.",
        longDesc:
          "Arquitecto líder de la migración crítica de un ERP de gestión de exportaciones legacy. Llevé el sistema monolítico a una Clean Architecture moderna (Rails API + React) en un plazo récord de 2 semanas, reduciendo ~60 % de deuda técnica. Diseñé la estrategia de migración del esquema PostgreSQL para garantizar cero pérdida de datos.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        image: "/assets/lideser.png",
      },
      {
        title: "AI Code Quality Validator",
        shortDesc:
          "Herramienta interna para evaluar y comparar la calidad de código generado por LLMs.",
        longDesc:
          "Desarrollé un sistema interno para auditar código generado por modelos de IA. Construí pipelines automatizados de validación con análisis AST que procesan cientos de fragmentos al día, asegurando que las salidas cumplan con estándares técnicos rigurosos definidos por Senior Tech Leads. Se usa para medir y mejorar la calidad del código generado por IA en todo el equipo.",
        tech: ["Node.js", "Análisis AST", "TypeScript", "Evaluación IA"],
        confidential: true,
        image: "/assets/code-validator.webp",
      },
      {
        title: "Algoritmos premiados",
        shortDesc:
          "1er lugar en Algorithm Challenge y 3er lugar en Fintech Innovation Contest.",
        longDesc:
          "Reconocido por habilidades excepcionales de resolución de problemas con un 1er lugar en un prestigioso Algorithm Challenge y un 3er lugar en un Fintech Innovation Contest enfocado en integración de IA. Demostrando dominio en programación competitiva y soluciones innovadoras de tecnología financiera.",
        tech: ["Algoritmos", "Resolución de problemas", "TypeScript"],
        image: "/assets/at-work.jpg",
      },
    ],
  },
  archive: {
    title: "El archivo",
    subtitle: "Proyectos previos que muestran mi crecimiento como desarrollador.",
    viewAll: "Ver todos los proyectos",
  },
  contact: {
    title: "Construyamos algo a escala",
    subtitle:
      "¿Buscas un Ingeniero Full Stack que tome ownership de las features de extremo a extremo y construya servicios backend escalables? Hablemos.",
    cta: "Envíame un mensaje",
    mailtoSubject: "Contacto desde el portafolio",
    mailtoBody: "Hola Jair,\n\nEncontré tu portafolio y me gustaría conversar sobre...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Construido con",
  },
  about: {
    h1Part1: "Sobre ",
    h1Highlight: "mí",
    paragraph1:
      "Gracias por pasar. Soy Jair Mera, un Ingeniero Full Stack con enfoque backend, basado en Ecuador, apasionado por construir servicios escalables en Node.js sobre AWS, aprovechando arquitecturas serverless y acelerando la entrega con herramientas de IA.",
    paragraph2:
      "Siempre me ha apasionado la tecnología. Desde niño me fascinaron las computadoras, lo que me llevó a estudiar Ingeniería de Software en 2021. Hoy combino mi experiencia técnica con herramientas potenciadas por IA para entregar soluciones de alta calidad y listas para producción más rápido.",
    portraitAlt: "Jair Mera trabajando",
    backgroundTitle: "Trayectoria",
    educationTitle: "Educación",
    universityName: "Universidad Técnica de Ambato",
    universityDegree: "Ingeniería de Software (2021 - Actualidad)",
    highSchoolName: "Colegio Bolívar",
    highSchoolDegree: "Bachillerato en Ciencias",
    honorsTitle: "Premios y reconocimientos",
    honor1Title: "3er lugar - Concurso Avanzado de Programación",
    honor1Desc:
      "Hatary Shunko Innovation (Abr 2025) - Desarrollé una solución financiera con integración de IA",
    honor2Title: "1er lugar - Algorithm Challenge",
    honor2Desc:
      "Universidad Técnica de Ambato (Abr 2023) - Resolví problemas algorítmicos complejos",
    languagesTitle: "Idiomas",
    spanishLabel: "Español",
    spanishLevel: "(Nativo)",
    englishLabel: "Inglés",
    englishLevel: "(B2)",
    softTitle: "Lo que aporto al equipo",
    softCards: [
      {
        title: "Trabajo en equipo",
        description:
          "Experiencia liderando equipos Scrum y mentorizando a desarrolladores junior.",
      },
      {
        title: "Aprendizaje autónomo",
        description:
          "Explorando constantemente nuevas tecnologías y manteniéndome al día con la industria.",
      },
      {
        title: "Resolución de problemas",
        description:
          "Habilidades premiadas en pensamiento algorítmico y resolución de problemas complejos.",
      },
      {
        title: "Zonas horarias de Latinoamérica",
        description:
          "Basado en Ecuador (UTC-5). Hablante nativo de español, cómodo en equipos remotos en inglés en toda América.",
      },
    ],
  },
  notFound: {
    title: "Página no encontrada",
    subtitle: "La página que buscas no existe.",
    cta: "Volver al inicio",
  },
  langToggle: {
    en: "EN",
    es: "ES",
    ariaLabel: "Cambiar idioma",
  },
  workPage: {
    title: "Proyectos",
    subtitle:
      "Una colección de proyectos que muestran mi camino como Ingeniero Full Stack. Desde aplicaciones empresariales hasta experimentos personales.",
    backLink: "Volver a proyectos",
  },
};
```

> Update `issuedLabel` ("Abril 2026") with the actual Spanish-formatted Credly issue date.

- [ ] **Step 2: Verify TypeScript**

Run: `pnpm astro check 2>&1 | head -30`
Expected: no errors.

- [ ] **Step 3: Re-run Vitest**

Run: `pnpm test`
Expected: all 17 i18n helper tests still pass.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/es.ts
git commit -m "feat(i18n): seed Spanish dictionary"
```

---

## Task 26: Spanish Work Content Twins

**Files:**
- Create: `src/content/work/ambivalence.es.md`
- Create: `src/content/work/lajefecita.es.md`
- Create: `src/content/work/lookpay.es.md`
- Create: `src/content/work/pos-system.es.md`
- Create: `src/content/work/uta-web-app.es.md`
- Create: `src/content/work/nested/gendocsv3.es.md`

For each file: copy the English source, translate frontmatter `title`, `description`, `img_alt`, and the markdown body. Keep `publishDate`, `isMain`, `img`, and `tags` (English tags are fine — they are technology names; the schema allows them).

- [ ] **Step 1: Create `ambivalence.es.md`**

```md
---
title: Ambivalence - Tienda de ropa e-commerce
publishDate: 2023-03-02 00:00:00
img: /assets/ambivalence.jpg
isMain: true
img_alt: Ambivalence - Tienda de ropa e-commerce
description: |
  Ambivalence es un sitio e-commerce que vende ropa y accesorios. El proyecto se desarrolló con el objetivo de ofrecer una experiencia de compra intuitiva y amigable, con foco en velocidad y eficiencia.
tags:
  - TypeScript
  - E-commerce
  - Next.js
  - Tailwind CSS
  - Stripe API
---
## Descripción del proyecto
Ambivalence es una plataforma e-commerce avanzada diseñada para la venta de ropa, con una interfaz fluida y responsiva. Este proyecto independiente destaca por su gestión robusta de inventarios, órdenes y cuentas de usuario, ofreciendo una experiencia de compra óptima.

## Tecnologías utilizadas
- **Frontend y Backend:** Next.js 14
- **Base de datos:** Prisma con PostgreSQL
- **Gestión de datos:** Supabase
- **Despliegue:** Vercel
- **Seguridad:** Tokens JWT para autenticación y autorización

## Características clave
- **Panel administrativo completo:** Dashboard para gestión eficiente de productos, inventarios y órdenes.
- **Autenticación y autorización:** Sistema de seguridad con JWT, garantizando integridad y privacidad.
- **Alta disponibilidad y escalabilidad:** Despliegue en Vercel con 99.9 % de uptime.
- **Gestión avanzada de productos:** Herramientas integradas para inventario en tiempo real.

## Impacto del proyecto
Ambivalence ha transformado la experiencia de compra online, aumentando la satisfacción del cliente y mejorando significativamente la gestión interna del negocio.

## Conclusiones
Ambivalence representa un hito en el desarrollo de soluciones e-commerce, demostrando la capacidad de adaptar tecnologías avanzadas para potenciar operaciones de negocio y experiencia de usuario.
```

- [ ] **Step 2: Create `lajefecita.es.md`**

```md
---
title: La Jefecita
publishDate: 2023-12-01 00:00:00
img: /assets/jefecita.jpg
isMain: true
img_alt: La Jefecita
description: |
  Desarrollamos La Jefecita, un sistema avanzado de gestión de restaurantes que optimiza las operaciones diarias. Usa websockets para comunicación en tiempo real y simulación de pagos para mejorar la eficiencia operativa.
tags:
  - TypeScript
  - Next.js
  - Nest JS
  - Websockets
---

## Descripción del proyecto
La Jefecita es un sistema avanzado de gestión de restaurantes que permite administrar roles como meseros, cocineros, cajeros y administradores. Usa websockets para comunicación en tiempo real y simulación de pagos para mejorar la operación y la experiencia del cliente.

## Tecnologías utilizadas
- **Frontend:** Next.js
- **Backend:** Nest.js
- **Comunicaciones:** Websockets
- **Simulación de pagos:** Stripe
- **Base de datos:** PostgreSQL
- **Seguridad:** JWT para autenticación de roles

## Características clave
- **Gestión por rol:** Interfaces específicas para cada rol, optimizando operaciones diarias.
- **Comunicaciones en tiempo real:** Websockets para actualizaciones instantáneas de pedidos.
- **Integración de pagos segura:** Stripe para procesar pagos.
- **Seguridad y autenticación:** JWT para asegurar acceso y operaciones.

## Impacto del proyecto
La Jefecita ha transformado la gestión de restaurantes, mejorando la eficiencia operativa y la satisfacción del cliente.

## Conclusiones
Este proyecto demuestra cómo la tecnología puede optimizar la gestión de restaurantes, mejorando tanto operaciones como experiencia del cliente.
```

- [ ] **Step 3: Create `lookpay.es.md`**

```md
---
title: Simulación de pagos con IA (LookPay)
publishDate: 2022-05-02 00:00:00
img: /assets/lookpay.png
isMain: true
img_alt: Simulación de pagos con IA (LookPay)
description: |
  Desarrollamos un sistema innovador de simulación de pagos que integra reconocimiento facial. Diseñado para mostrar la aplicación de AWS Rekognition en el sector financiero.
tags:
  - TypeScript
  - Inteligencia Artificial
  - Sistemas de pago
  - Next.js
  - Spring Boot
---

## Descripción del proyecto
LookPay es un sistema innovador de simulación de pagos que integra reconocimiento facial para validar transacciones de forma segura y eficiente. Fue desarrollado para demostrar cómo AWS Rekognition puede aplicarse en el sector financiero para mejorar seguridad y experiencia.

## Tecnologías utilizadas
- **Frontend:** Next.js
- **Backend:** Java SpringBoot
- **Reconocimiento facial:** AWS Rekognition
- **Base de datos:** PostgreSQL
- **Seguridad:** Protocolos avanzados para protección de datos

## Características clave
- **Validación facial:** AWS Rekognition como capa adicional de seguridad.
- **Interfaz amigable:** UI intuitiva en Next.js.
- **Seguridad de datos:** Cifrado y autenticación avanzados.
- **Reportes y análisis de transacciones:** Herramientas analíticas para detectar actividad sospechosa.

## Impacto del proyecto
LookPay ha demostrado ser una herramienta valiosa para la simulación de pagos seguros, mostrando cómo tecnologías emergentes pueden integrarse para fortalecer la seguridad financiera.
```

- [ ] **Step 4: Create `pos-system.es.md`**

```md
---
title: Sistema Punto de Venta (POS System)
publishDate: 2023-05-02 00:00:00
isMain: true
img: /assets/possytem.png
img_alt: Sistema Punto de Venta (POS System)
description: |
  Desarrollamos un Sistema de Punto de Venta integral que facilita transacciones comerciales y gestión de inventarios. Provee herramientas avanzadas de control, procesamiento de transacciones y generación de reportes XML validados por SRI.
tags:
  - Desarrollo Web
  - Next.js
  - Spring Boot
  - AWS S3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/BqeJK45yrGA?si=L1_15hNxnDjnX8TO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Descripción del proyecto
El Sistema de Punto de Venta (POS) es una solución integral diseñada para facilitar transacciones comerciales y gestión de inventarios en negocios. Provee una plataforma eficiente para procesar ventas, gestionar inventarios y generar reportes XML validados por SRI.

## Tecnologías utilizadas
- **Frontend:** Java SpringBoot
- **Backend:** Java SpringBoot
- **Base de datos:** PostgreSQL
- **Generación de reportes:** XML validado por SRI
- **Seguridad:** Protocolos para proteger información y transacciones

## Características clave
- **Gestión de inventario:** Herramientas avanzadas para control preciso de productos.
- **Procesamiento de transacciones:** Procesamiento rápido y eficiente.
- **Generación de reportes:** Reportes XML que cumplen normativa SRI.
- **Seguridad reforzada:** Protocolos robustos contra accesos no autorizados.

## Impacto del proyecto
Este sistema POS ha mejorado significativamente la capacidad de los negocios para gestionar operaciones diarias, optimizar inventario y cumplir con regulaciones tributarias.

## Conclusiones
Este proyecto subraya la importancia de los sistemas POS modernos para mejorar operaciones y gestión financiera de negocios.
```

- [ ] **Step 5: Create `uta-web-app.es.md`**

```md
---
title: Rediseño de la página de inicio de UTA (Uta Web App)
publishDate: 2023-11-02 00:00:00
img: /assets/uta-web-app.png
isMain: false
img_alt: Rediseño de la página de inicio de UTA (Uta Web App)
description: |
  Rediseñamos la página de inicio de la UTA Web App para mejorar la experiencia de usuario y elevar el atractivo visual de la plataforma.
tags:
  - Desarrollo Web
  - Diseño UI/UX
  - Astro
  - TypeScript
---

## Descripción del proyecto
La UTA Web App es una plataforma integral que provee a los estudiantes acceso a recursos académicos, materiales de cursos y servicios administrativos. Nuestro proyecto se enfocó en rediseñar la página de inicio para mejorar la experiencia de usuario y elevar el atractivo visual de la plataforma, con principios de diseño moderno y layouts responsivos.

## Tecnologías utilizadas
- **Frontend:** Astro

## Características clave
- **Diseño moderno:** Principios visuales modernos para una UI atractiva.
- **Layouts responsivos:** Experiencia óptima en distintos dispositivos.
- **Experiencia mejorada:** Acceso más fácil a recursos académicos.
- **Navegación intuitiva:** Elementos que ayudan a encontrar información rápidamente.
- **Atractivo visual mejorado:** Una interfaz más agradable.
- **Performance optimizado:** Tiempos de carga rápidos.

## Impacto del proyecto
El rediseño ha mejorado significativamente la experiencia de usuario y el engagement en la plataforma, resultando en mayor satisfacción y uso.
```

- [ ] **Step 6: Create `nested/gendocsv3.es.md`**

```md
---
title: GenDocs V3
publishDate: 2023-12-30 00:00:00
img: /assets/gendocs.jpg
isMain: true
img_alt: GenDocs V3
description: |
  Desarrollamos una nueva forma innovadora de crear y gestionar documentos para fines administrativos y legales. El sistema está diseñado para ser intuitivo, con foco en velocidad y eficiencia.
tags:
  - Desarrollo Web
  - Next.js
  - Nest JS
  - Google Api
  - Documentos
---

## Descripción del proyecto
Gendocs es un sistema integrado diseñado para automatizar la generación de documentos administrativos en la Facultad de Ingeniería de Software. Fue desarrollado con el objetivo de simplificar la creación, gestión y distribución de documentos dentro de la institución, manejando eficientemente más de 200 documentos al mes.

## Tecnologías utilizadas
- **Frontend:** Next.js
- **Backend:** Nest.js
- **Base de datos:** Google Firestore
- **Integraciones:** Google APIs para manipulación de documentos
- **Gestión de colas:** Nest/Bull para procesamiento en background
- **Contenedores:** Docker
- **CI/CD:** GitHub Actions
- **Comunicaciones:** Websockets para notificaciones en tiempo real y servidor SMTP para correos

## Características clave
- **Generación dinámica de documentos:** Plantillas con variables reemplazadas en tiempo real.
- **Automatización de tareas:** Colas de jobs para optimizar la generación y distribución.
- **Gestión de usuarios y permisos:** Control de acceso por roles.
- **Notificaciones en tiempo real:** Websockets para informar a los usuarios sobre el estado de sus solicitudes.
- **Integraciones avanzadas:** Google API para crear documentos directamente en la nube.

## Impacto del proyecto
El desarrollo de Gendocs marcó un avance significativo en la gestión documental, reduciendo en un 70 % el tiempo de creación y distribución de documentos.
```

- [ ] **Step 7: Verify content collection**

Run: `pnpm astro check 2>&1 | tail -10`. Expected: no schema errors. (The `tags` field accepts any string array per `src/content/config.ts`.)

- [ ] **Step 8: Commit**

```bash
git add src/content/work/*.es.md src/content/work/nested/*.es.md
git commit -m "feat(content): add Spanish twins for all work entries"
```

---

## Task 27: Spanish Home — `src/pages/es/index.astro`

**Files:**
- Create: `src/pages/es/index.astro`

- [ ] **Step 1: Create file**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";

import Hero from "../../components/Hero.astro";
import EngineeringPhilosophy from "../../components/EngineeringPhilosophy.astro";
import TechOrbit from "../../components/TechOrbit.astro";
import Experience from "../../components/Experience.astro";
import Skills from "../../components/Skills.astro";
import Certifications from "../../components/Certifications.astro";
import FeaturedProjects from "../../components/FeaturedProjects.astro";
import ArchiveProjects from "../../components/ArchiveProjects.astro";
import ContactCTA from "../../components/ContactCTA.astro";
---

<BaseLayout locale="es">
  <Hero locale="es" />
  <EngineeringPhilosophy locale="es" />
  <TechOrbit locale="es" />
  <Experience locale="es" />
  <Skills locale="es" />
  <Certifications locale="es" />
  <FeaturedProjects locale="es" />
  <ArchiveProjects locale="es" />
  <ContactCTA locale="es" />
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/es/`. Confirm full page renders in Spanish (hero, philosophy, orbit, experience, skills, cert, projects, archive, contact).

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/index.astro
git commit -m "feat(pages-es): Spanish home page"
```

---

## Task 28: Spanish About — `src/pages/es/about.astro`

**Files:**
- Create: `src/pages/es/about.astro`

- [ ] **Step 1: Create file**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import ContactCTA from "../../components/ContactCTA.astro";
import { getTranslations } from "../../i18n";

const locale = "es";
const t = getTranslations(locale);
const a = t.about;
---

<BaseLayout title={t.meta.aboutTitle} description={t.meta.aboutDescription} locale={locale}>
  <!-- Identical structure to English about.astro; uses Spanish dictionary via `t` -->
  <section class="section-spacing">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">
            {a.h1Part1}<span class="text-gradient">{a.h1Highlight}</span>
          </h1>
          <p class="text-lg text-text-secondary mb-6">{a.paragraph1}</p>
          <p class="text-text-secondary">{a.paragraph2}</p>
        </div>
        <div class="relative">
          <img src="/assets/at-work.jpg" alt={a.portraitAlt} class="rounded-2xl border border-surface-border shadow-lg" />
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-spacing bg-surface/30">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8">{a.backgroundTitle}</h2>
        <div class="space-y-8">
          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              {a.educationTitle}
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-text-primary">{a.universityName}</p>
                <p class="text-text-secondary">{a.universityDegree}</p>
              </div>
              <div>
                <p class="font-medium text-text-primary">{a.highSchoolName}</p>
                <p class="text-text-secondary">{a.highSchoolDegree}</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-[#ff9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.certifications.title}
            </h3>
            <ul class="space-y-3">
              {t.certifications.items.map((cert) => (
                <li class="flex flex-wrap items-center gap-3">
                  <span class="font-medium text-text-primary">{cert.title}</span>
                  <span class="text-text-secondary text-sm">— {cert.issuer}</span>
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" class="text-xs text-[#ff9900] hover:underline">{cert.verifyLabel}</a>
                </li>
              ))}
            </ul>
          </div>

          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              {a.honorsTitle}
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-medium text-text-primary">{a.honor1Title}</p>
                <p class="text-text-secondary text-sm">{a.honor1Desc}</p>
              </div>
              <div>
                <p class="font-medium text-text-primary">{a.honor2Title}</p>
                <p class="text-text-secondary text-sm">{a.honor2Desc}</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-surface-border bg-surface/50">
            <h3 class="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
              <svg class="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {a.languagesTitle}
            </h3>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-accent-cyan"></span>
                <span class="text-text-primary">{a.spanishLabel}</span>
                <span class="text-text-muted text-sm">{a.spanishLevel}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-accent-purple"></span>
                <span class="text-text-primary">{a.englishLabel}</span>
                <span class="text-text-muted text-sm">{a.englishLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-spacing">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8">{a.softTitle}</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          {a.softCards.map((card) => (
            <div class="p-5 rounded-xl border border-surface-border bg-surface/50 hover:border-accent-cyan/50 transition-colors">
              <h3 class="font-semibold text-text-primary mb-2">{card.title}</h3>
              <p class="text-sm text-text-secondary">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <ContactCTA locale={locale} />
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/es/about/`. Confirm Spanish copy throughout, Cert sub-block, LatAm card.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/about.astro
git commit -m "feat(pages-es): Spanish about page"
```

---

## Task 29: Spanish Work Index — `src/pages/es/work.astro`

**Files:**
- Create: `src/pages/es/work.astro`

- [ ] **Step 1: Create file**

```astro
---
import { getCollection } from "astro:content";
import BaseLayout from "../../layouts/BaseLayout.astro";
import ContactCTA from "../../components/ContactCTA.astro";
import { getTranslations } from "../../i18n";

const locale = "es";
const t = getTranslations(locale);

const projects = (await getCollection("work"))
  .filter((entry) => entry.id.endsWith(".es.md"))
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

const projectUrl = (slug: string) => `/es/work/${slug.replace(/\.es$/, "")}`;
---

<BaseLayout title={t.meta.workTitle} description={t.meta.workDescription} locale={locale}>
  <div class="stack gap-20">
    <main class="section-spacing">
      <div class="container-custom">
        <div class="mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">{t.workPage.title}</h1>
          <p class="text-text-secondary text-lg max-w-2xl">{t.workPage.subtitle}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a href={projectUrl(project.slug)} class="group relative rounded-xl border border-surface-border bg-surface/50 overflow-hidden transition-all duration-300 hover:border-accent-cyan/50 hover:bg-surface hover:scale-[1.02]">
              <div class="relative h-48 overflow-hidden">
                <img src={project.data.img} alt={project.data.img_alt || project.data.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              </div>

              <div class="p-5">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <h2 class="text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-1">{project.data.title}</h2>
                  <div class="flex-shrink-0 p-1.5 rounded-md border border-surface-border text-text-muted group-hover:text-accent-cyan group-hover:border-accent-cyan/50 transition-all group-hover:translate-x-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <p class="text-text-secondary text-sm mb-4 line-clamp-2">{project.data.description}</p>

                <div class="flex flex-wrap gap-1.5">
                  {project.data.tags.slice(0, 3).map((tag) => (
                    <span class="px-2 py-0.5 text-xs font-medium bg-surface-light text-text-muted rounded border border-surface-border">{tag}</span>
                  ))}
                  {project.data.tags.length > 3 && (
                    <span class="px-2 py-0.5 text-xs font-medium text-text-muted">+{project.data.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
    <ContactCTA locale={locale} />
  </div>
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/es/work/`. Confirm Spanish project cards, hrefs go to `/es/work/<slug>`.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/work.astro
git commit -m "feat(pages-es): Spanish work index"
```

---

## Task 30: Spanish Work Detail — `src/pages/es/work/[...slug].astro`

**Files:**
- Create: `src/pages/es/work/[...slug].astro`

- [ ] **Step 1: Create file**

```astro
---
import { type CollectionEntry, getCollection } from 'astro:content';
import BaseLayout from '../../../layouts/BaseLayout.astro';
import ContactCTA from '../../../components/ContactCTA.astro';
import { getTranslations } from '../../../i18n';

interface Props {
  entry: CollectionEntry<'work'>;
}

export async function getStaticPaths() {
  const work = await getCollection('work');
  return work
    .filter((entry) => entry.id.endsWith('.es.md'))
    .map((entry) => ({
      params: { slug: entry.slug.replace(/\.es$/, '') },
      props: { entry },
    }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
const locale = 'es';
const t = getTranslations(locale);
---

<BaseLayout title={entry.data.title} description={entry.data.description} locale={locale}>
  <section class="pt-24 pb-12 md:pt-32 md:pb-16">
    <div class="container-custom">
      <a href="/es/work/" class="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors duration-200 mb-8 group">
        <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{t.workPage.backLink}</span>
      </a>

      <div class="max-w-4xl">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 animate-fade-in-up">{entry.data.title}</h1>
        <div class="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style="animation-delay: 100ms;">
          {entry.data.tags.map((tag: string) => (
            <span class="px-3 py-1.5 text-sm font-medium rounded-full bg-surface-light border border-surface-border text-text-secondary hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors duration-200">{tag}</span>
          ))}
        </div>
        <p class="text-lg sm:text-xl text-text-secondary max-w-3xl animate-fade-in-up" style="animation-delay: 150ms;">{entry.data.description}</p>
      </div>
    </div>
  </section>

  {entry.data.img && (
    <section class="pb-12 md:pb-16 animate-fade-in-up" style="animation-delay: 200ms;">
      <div class="container-custom">
        <div class="relative rounded-2xl overflow-hidden border border-surface-border bg-surface">
          <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 opacity-50"></div>
          <img src={entry.data.img} alt={entry.data.img_alt || entry.data.title} class="relative w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )}

  <section class="pb-20">
    <div class="container-custom">
      <article class="prose prose-invert prose-lg max-w-4xl mx-auto">
        <Content />
      </article>
    </div>
  </section>

  <ContactCTA locale={locale} />
</BaseLayout>
```

(The `<style is:global>` prose styles already live in the English `[...slug].astro`. They're global, so they apply to the Spanish detail too — no need to duplicate.)

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/es/work/lideser/` (or any other Spanish slug — `lajefecita`, `lookpay`, etc.). Spanish content renders. "Volver a proyectos" link goes to `/es/work/`.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/work/\[...slug\].astro
git commit -m "feat(pages-es): Spanish work detail page"
```

---

## Task 31: Spanish 404 — `src/pages/es/404.astro`

**Files:**
- Create: `src/pages/es/404.astro`

- [ ] **Step 1: Create**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { getTranslations } from "../../i18n";

const locale = "es";
const t = getTranslations(locale);
---

<BaseLayout title={t.meta.notFoundTitle} description={t.meta.notFoundDescription} locale={locale}>
  <section class="section-spacing">
    <div class="container-custom text-center">
      <h1 class="text-5xl sm:text-7xl font-bold mb-6">404</h1>
      <p class="text-xl text-text-primary mb-2">{t.notFound.title}</p>
      <p class="text-text-secondary mb-8">{t.notFound.subtitle}</p>
      <a href="/es/" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">{t.notFound.cta}</a>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: Visual verify**

Run: `pnpm dev`. Visit `/es/this-does-not-exist`. (Note: in dev, Astro may serve the closest 404; in `pnpm preview` after build, the static `/es/404.html` will be picked up by hosting.) Confirm Spanish 404 layout looks reasonable.

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/404.astro
git commit -m "feat(pages-es): Spanish 404 page"
```

---

## Task 32: Build Verification

**Files:** none (only running checks).

- [ ] **Step 1: Run full Astro build**

Run: `pnpm build`
Expected: completes with no errors. The `dist/` folder contains `dist/index.html`, `dist/about/index.html`, `dist/work/...`, `dist/es/index.html`, `dist/es/about/index.html`, `dist/es/work/...`, `dist/404.html`, `dist/es/404.html`.

If build fails, inspect the error and fix. Common failures: missing dictionary key, content collection schema mismatch (e.g., a Spanish twin missing a required field).

- [ ] **Step 2: Run preview server**

Run: `pnpm preview`
Visit:
- `/` — English home renders, Cert section visible.
- `/es/` — Spanish home renders.
- `/about/` and `/es/about/` — both render with Cert sub-block.
- `/work/` and `/es/work/` — both list correct locale entries.
- `/work/lideser/` and `/es/work/lideser/` — both detail pages render.
- Click `EN | ES` toggle on each page type — counterpart URL is correct.
- View page source on `/`: `<html lang="en">`, `<link rel="alternate" hreflang="es" href=".../es/">` present.
- View page source on `/es/`: `<html lang="es">`, `<link rel="alternate" hreflang="en" href=".../">` present.

Stop preview server.

- [ ] **Step 3: Run all tests**

Run: `pnpm test`
Expected: all 17 i18n helper tests pass.

- [ ] **Step 4: Commit (if any small fix made)**

If Step 1 or 2 caught a small bug, fix in place and commit. Otherwise skip this step.

---

## Task 33: Final Polish — Issued Date + Visual Verification

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/es.ts`

- [ ] **Step 1: Replace `issuedLabel` placeholder**

Edit both `src/i18n/en.ts` and `src/i18n/es.ts` `certifications.items[0].issuedLabel` with the exact "Issued on" date copied from the Credly badge page in Task 1, Step 4. Use English month name in `en.ts` (e.g., "April 2026") and Spanish month name in `es.ts` (e.g., "Abril 2026").

- [ ] **Step 2: Re-build**

Run: `pnpm build && pnpm test`
Expected: build succeeds, tests pass.

- [ ] **Step 3: Visual diff vs spec**

Open the spec at `docs/superpowers/specs/2026-05-02-portfolio-alegra-pivot-i18n-design.md` side-by-side with `pnpm dev`. Walk through each "Copy Decisions" section and confirm rendered text matches spec verbatim. Note any drift, fix inline.

- [ ] **Step 4: Commit any final polish**

```bash
git add src/i18n/en.ts src/i18n/es.ts
git commit -m "chore(i18n): finalize Credly issued date"
```

- [ ] **Step 5: Push branch + open PR**

If running on a feature branch, push and open a PR with this plan + spec linked in the description. (User confirms when ready.)

---

## Self-Review Notes (author: Claude)

- **Spec coverage:** All seven design sections in the spec map to tasks 8 (Hero) → 9 (Philosophy) → 10 (TechOrbit) → 11 (Experience) → 12 (Skills) → 13 (FeaturedProjects) → 16/17 (Certifications) → 22 (About) → 14 (ContactCTA) → 6/7/19/20 (BaseLayout/MainHead/LangToggle/Nav for SEO + i18n) → 25–31 (Spanish content + pages). Out-of-scope items (CV PDF, README) are explicitly skipped.
- **Type consistency:** `Translations` interface defined in Task 3 is the contract; both `en.ts` (Task 5) and `es.ts` (Task 25) implement it. Component props all use `locale?: Locale` with default `"en"`.
- **Placeholder discipline:** The two `issuedLabel` strings are flagged with `// TODO during Task 1` markers and resolved explicitly in Task 33. No other TBDs.
- **Risk: large refactor in one PR.** If the implementer prefers smaller checkpoints, Tasks 1–7 (foundation) can land as a first commit batch, Tasks 8–17 (English copy + cert) as a second, and Tasks 18–33 (i18n + Spanish) as a third. Each batch leaves the site in a working state.
