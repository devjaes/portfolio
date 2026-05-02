# Portfolio — Alegra Backend Pivot + AWS SAA Cert + Spanish i18n

**Date:** 2026-05-02
**Author:** Jair Mera (devjaes)
**Target role:** Backend Developer @ Alegra (Latin America, Node.js + Serverless + AWS focus)

## Goal

Update [devjaes.dev](https://devjaes.dev) to:

1. Reposition as backend-forward Full Stack Engineer (Node.js / NestJS / Rails / Serverless / AWS) without losing React/Next visibility.
2. Surface the new AWS Certified Solutions Architect — Associate cert prominently (hero pill + dedicated Certifications section).
3. Ship full Spanish locale toggle (`/` English default, `/es` Spanish) since Alegra operates in Latin America.

All shipped together in one PR (no phasing).

## Non-goals

- Updating `cv-jair-mera.pdf` (separate task).
- Translating `README.md` of the repo.
- Building a new AWS Lambda showcase project (rely on cert as the AWS Lambda/Serverless signal; reframe existing Bull-queue work as event-driven async).
- New frontend skin / redesign.

## Decisions Captured (from brainstorm)

| # | Topic | Decision |
|---|-------|----------|
| 1 | Pivot intensity | Backend-forward (option B), but identity stays "Full Stack Engineer". |
| 2 | Cert placement | Hero pill **and** dedicated Certifications section (option D). |
| 3 | Language | Full Spanish locale toggle via Astro native i18n (option B). |
| 4 | Phasing | All-in-one big PR (option B). |
| 5 | Lambda gap | Cert-only signal + reframe Bull queues as event-driven (option A). |
| 6 | TAPinto framing | Balanced full-stack — surface background jobs, performance tuning, cache work. |

## Architecture / Components

### New files

- `src/components/Certifications.astro` — accepts an array of certs (data-only edits to add more). First entry: AWS SAA.
- `src/i18n/en.ts`, `src/i18n/es.ts` — translation dictionaries (keyed: `hero.title`, `philosophy.cards[0].title`, `experience[0].points[0]`, etc.).
- `src/i18n/index.ts` — `getTranslations(locale)` helper + `getLocalizedPath(path, locale)` for the language toggle.
- `src/pages/es/index.astro` — Spanish home (mirrors `src/pages/index.astro`).
- `src/pages/es/about.astro` — Spanish about page.
- `src/pages/es/work.astro` — Spanish work index.
- `src/pages/es/work/[...slug].astro` — Spanish per-project page.
- `src/pages/es/404.astro` — Spanish 404.
- `public/assets/aws-saa-badge.png` — downloaded from Credly badge URL `https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc/linked_in?t=tebc8n`.
- Spanish work markdown duplicates: `src/content/work/{ambivalence,lajefecita,lookpay,pos-system,uta-web-app}.es.md` and `src/content/work/nested/gendocsv3.es.md`.

### Modified files

- `astro.config.mjs` — enable native i18n: `defaultLocale: "en"`, `locales: ["en","es"]`, `routing: { prefixDefaultLocale: false }`.
- `src/layouts/BaseLayout.astro` — `<html lang={Astro.currentLocale}>` dynamic, inject `hreflang` alternate links.
- `src/components/MainHead.astro` — pull meta description from i18n dictionary.
- `src/components/Nav.astro` — add `EN | ES` toggle that flips between current page and its locale counterpart.
- `src/components/Hero.astro` — copy rewrite (see Copy Decisions below); remove "Available for work" pill; add AWS SAA verify-pill next to role badge; pull strings from dictionary.
- `src/components/EngineeringPhilosophy.astro` — strings from dictionary.
- `src/components/TechOrbit.astro` — inner ring swaps Python → AWS; outer ring swaps AWS → Serverless. Center stays TypeScript.
- `src/components/Experience.astro` — bullets rewritten (see Copy Decisions); strings from dictionary.
- `src/components/Skills.astro` — reorder: Backend & Cloud first (`highlight: true`, "Daily" badge), then Core Stack, AI Power Tools, Testing & DevOps. Backend & Cloud expands with: AWS Lambda, Serverless Framework, DynamoDB, S3, SQS, SNS, CloudFormation/CDK. Drop Sinatra. Strings from dictionary.
- `src/components/FeaturedProjects.astro` — copy reframes for TAPinto, Lideser, AI Code Validator. Awards entry unchanged. Strings from dictionary.
- `src/components/ContactCTA.astro` — copy tune: "...builds scalable backend services". Strings from dictionary.
- `src/components/Footer.astro` — strings from dictionary.
- `src/pages/index.astro` — add `<Certifications />` between `<Skills />` and `<FeaturedProjects />`.
- `src/pages/about.astro` — add Certifications sub-block in Background section; tune hero copy to mention Node.js/Serverless/AWS; tune "Remote Ready" card to reference Latin America time zones.

## Copy Decisions

### Hero

- **Role badge:** `Full Stack Engineer · Node.js · Rails · React/Next · AWS`
- **AWS SAA pill** (new, beside role badge): "AWS Certified Solutions Architect — Associate" linking to Credly verify URL.
- **Headline:** "Engineering **End-to-End SaaS** Products with **Serverless Architectures** and **AI-Accelerated** Workflows"
- **Subheadline:** "Full Stack Engineer focused on **Node.js** (NestJS/Express), **Ruby on Rails**, and **React/Next.js**. Building scalable APIs, event-driven systems, and SaaS web apps. Currently at **Senirop**, working on **TAPinto.net**."
- **"Available for work" status badge:** removed.

### Experience — bullet rewrites

**Senirop (current):**
- "Architecting a greenfield CRM platform end-to-end in **React 19 + Rails API**, defining component patterns, custom hooks, and **API contracts** with the backend team."
- "**Full-stack contributor** on TAPinto.net (Ruby on Rails + React), shipping CMS features across 12+ content types, **tuning background jobs**, **performance hotspots**, and **cache layers** to keep a high-traffic US news platform fast."
- (Lideser bullet — kept.)
- (AI Code Validator bullet — kept.)

**Development Dynamics:** unchanged (already strong backend story).

**UTA / GenDocs:** rewrite point 2: "Implemented **event-driven async processing** with **BullMQ** queues, reducing report generation from ~30s to ~9s (70% improvement)."

**Ambivalence:** unchanged.

### Featured Projects

**1. TAPinto.net (hero card):**
- shortDesc: "High-traffic US news platform with full-stack contributions across CMS, jobs, and cache."
- longDesc: "Full-stack contributor on a high-traffic US digital news platform serving millions of users. Engineered complex CMS modules for 12+ content types, **tuned background jobs**, optimized **cache layers** and **performance hotspots**, and integrated dynamic ad-serving systems and payment gateways. Operating in an English-first distributed team across US timezones."
- tech: `["Ruby on Rails", "React", "PostgreSQL", "Background Jobs", "Caching", "Performance"]`

**2. Lideser Export ERP:**
- shortDesc: "Architected a 2-week migration of a legacy ERP to Clean Architecture."
- longDesc: rewrites to lead with **Rails API**, **PostgreSQL schema migration**, and backend-first Clean Architecture; keeps the 60% tech-debt reduction, 2-week timeframe, zero data loss highlights.
- tech: `["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"]`

**3. AI Code Quality Validator:**
- tech reorder: `["Node.js", "AST Analysis", "TypeScript", "AI Evaluation"]`
- Other content unchanged.

**4. Award-Winning Algorithms:** unchanged.

### Certifications section

- Section title: "Certifications"
- Placement: between `Skills` and `FeaturedProjects` on `index.astro`.
- Layout: card with badge image (left) + details (right).
- First entry — AWS SAA:
  - Title: "AWS Certified Solutions Architect — Associate"
  - Issuer: Amazon Web Services
  - Issued: (date pulled from Credly badge page)
  - Status: "Active"
  - Skills covered: cloud architecture, security, scalability, cost optimization, Well-Architected Framework
  - Verify link: `https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc`
- Component accepts `certs: Cert[]` so future certs are data-only additions.
- Badge image served as static PNG from `/public/assets/aws-saa-badge.png` (no Credly iframe — privacy + load).

### About page

- Hero copy reframe: lead with "backend-leaning Full Stack" identity, mention Node.js / Serverless / AWS alongside React.
- Education / Honors block: add a small Certifications sub-block listing AWS SAA (with verify link), echoing the dedicated section but compact.
- Languages block: unchanged.
- "What I Bring to the Table" → "Remote Ready" card: tune copy to reference Latin America time zones.

### ContactCTA

- "Looking for a Full Stack Engineer who owns features end-to-end and builds **scalable backend services**? Let's talk."

## i18n Strategy

### Routing

- `/` → English (default, no prefix).
- `/es/` → Spanish.
- Page mirroring: `src/pages/es/<page>.astro` files for each English page. Each imports the same components; locale is read from `Astro.currentLocale`.

### Translation dictionary

- One key per UI string, structured to mirror component tree:
  - `hero.roleBadge`, `hero.headline`, `hero.subheadline`
  - `philosophy.title`, `philosophy.cards[i].{title,description}`
  - `experience[i].{title,company,date,badges,points}`
  - `skills.categories[i].{title,skills}`
  - `featured[i].{title,shortDesc,longDesc,tech}`
  - `certifications.{title,verify,issuedLabel,statusActive}`
  - `nav.{home,about,work}`
  - `contact.{title,subtitle,cta}`
- Helper: `getTranslations(locale: "en"|"es")` returns the dictionary; `getLocalizedPath(path, locale)` computes the counterpart URL.

### Work content collection

Bilingual via filename suffix (`lideser.md` + `lideser.es.md`). Filter by locale at query time in `[...slug].astro`. This keeps a small diff and one collection schema. The 6 existing work entries get Spanish twin files.

### Language toggle

- Lives in `Nav.astro`.
- Reads `Astro.currentLocale` and `Astro.url.pathname` to compute counterpart URL (e.g. `/about` ↔ `/es/about`, `/work/lideser` ↔ `/es/work/lideser`).
- Renders `EN | ES` with the active locale highlighted.

### SEO

- `<html lang={Astro.currentLocale}>` in BaseLayout.
- `<link rel="alternate" hreflang="en" href="..."/>` and `<link rel="alternate" hreflang="es" href="..."/>` injected per page.
- Per-locale meta description pulled from dictionary.

## Tech Stack Visual Updates

### TechOrbit

- **Center:** TypeScript (unchanged).
- **Inner ring:** React, Next.js, Node.js, NestJS, Rails, **AWS** (was Python).
- **Outer ring:** Docker, **Serverless** (was AWS), PostgreSQL, Git, Cursor, Copilot.
- Need a Serverless Framework icon — use `simple-icons` `siServerless` if exported, else custom SVG path with brand color `#FD5750`.

### Skills (reordered)

1. **Backend & Cloud** (`highlight: true`, "Daily" badge): Node.js, NestJS, Express, Ruby on Rails, PostgreSQL, **AWS Lambda**, **Serverless Framework**, **DynamoDB**, **S3**, **SQS**, **SNS**, **CloudFormation/CDK**.
2. **Core Stack:** TypeScript, JavaScript, React 18/19, Next.js.
3. **AI Power Tools** (`highlight: true`, "Daily" badge): Claude Code, Cursor, Windsurf, GitHub Copilot.
4. **Testing & DevOps:** Playwright, Jest, Docker, Git, GitHub Actions.

Sinatra removed.

## Testing / Verification

- `pnpm dev` — verify both `/` (EN) and `/es/` render correctly.
- Click language toggle on every page type (home, about, work index, work detail, 404) — counterpart URL resolves.
- Verify Credly link opens the public badge page.
- Verify badge image loads (correct aspect ratio, alt text).
- Verify `<html lang>` flips correctly between locales.
- Verify `hreflang` alternate links present in `<head>`.
- Lighthouse pass on both locales (no regressions on perf/SEO/a11y).
- Visual diff: hero, certifications section, skills reorder, experience bullets, featured projects copy.

## Open Items / Risks

- **Translation quality** — Spanish copy will be authored/reviewed by Jair (native speaker) during implementation. No machine translation.
- **Credly badge image** — exact issued date and image URL must be fetched from the badge page during implementation.
- **Component prop refactor scope** — every component currently hardcodes English. Touching all of them is the bulk of the i18n work. Plan should split per component to keep diffs small.
- **CV PDF** — out of scope here, but flag a follow-up to align the PDF with the new positioning before sending applications.
