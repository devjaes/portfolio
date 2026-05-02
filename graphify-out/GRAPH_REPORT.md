# Graph Report - /Users/jair/devProjects/portfolio  (2026-05-02)

## Corpus Check
- 47 files · ~89,222 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 79 nodes · 102 edges · 8 communities detected
- Extraction: 56% EXTRACTED · 44% INFERRED · 0% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.86)
- Token cost: 4,200 input · 1,850 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Commerce & Content Config|Commerce & Content Config]]
- [[_COMMUNITY_Auth & Role-Based Apps|Auth & Role-Based Apps]]
- [[_COMMUNITY_Light Theme Backgrounds|Light Theme Backgrounds]]
- [[_COMMUNITY_Portfolio Identity & Framework|Portfolio Identity & Framework]]
- [[_COMMUNITY_Dark Theme Backgrounds|Dark Theme Backgrounds]]
- [[_COMMUNITY_Document Generation Pipeline|Document Generation Pipeline]]
- [[_COMMUNITY_Professional History & LookPay|Professional History & LookPay]]
- [[_COMMUNITY_Icon System|Icon System]]

## God Nodes (most connected - your core abstractions)
1. `GenDocs V3 — Document Generation System` - 13 edges
2. `La Jefecita — Restaurant Management System` - 11 edges
3. `Ambivalence — Ecommerce Cloth Store` - 10 edges
4. `Work Collection Schema` - 7 edges
5. `LookPay — Payment Simulation with AI` - 7 edges
6. `POS System — Point of Sale` - 7 edges
7. `Next.js` - 5 edges
8. `Portfolio README` - 4 edges
9. `Astro Framework` - 4 edges
10. `PostgreSQL` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Ambivalence — Ecommerce Cloth Store` --references--> `Ambivalence Ecommerce Homepage Screenshot`  [EXTRACTED]
  src/content/work/ambivalence.md → public/assets/ambivalence.jpg
- `La Jefecita — Restaurant Management System` --references--> `La Jefecita Kitchen Order Board Screenshot`  [EXTRACTED]
  src/content/work/lajefecita.md → public/assets/jefecita.jpg
- `POS System — Point of Sale` --references--> `POS System Invoice UI Screenshot`  [EXTRACTED]
  src/content/work/pos-system.md → public/assets/possytem.png
- `GenDocs V3 — Document Generation System` --references--> `GenDocs V3 Admin UI Screenshot`  [EXTRACTED]
  src/content/work/nested/gendocsv3.md → public/assets/gendocs.jpg
- `Jair Mera Portrait Photo` --references--> `Jair Mera (devjaes)`  [INFERRED]
  public/assets/portrait.jpg → README.md

## Hyperedges (group relationships)
- **Next.js + Nest.js + PostgreSQL Full-Stack Pattern** — work_lajefecita, tech_nextjs, tech_nestjs, tech_postgresql [INFERRED 0.85]
- **JWT-based Role Access Security Pattern** — tech_jwt, concept_role_based_access, work_lajefecita, work_gendocsv3 [INFERRED 0.82]
- **Portfolio Site Built with Astro + Tailwind CSS** — astro_config, tailwind_config, site_devjaes_dev, person_jair_mera [EXTRACTED 1.00]
- **Responsive Dark Theme Background System (800w + 1440w + SVG)** — bg_main_dark_svg_background, bg_main_dark_800w_background, bg_main_dark_1440w_background, bg_subtle_1_dark_800w_background, bg_subtle_1_dark_1440w_background, bg_subtle_2_dark_800w_background, bg_subtle_2_dark_1440w_background, bg_footer_dark_800w_background, bg_footer_dark_1440w_background, dark_theme_system [INFERRED 0.90]
- **Responsive Light Theme Background System (800w + 1440w + SVG)** — bg_main_light_svg_background, bg_main_light_800w_background, bg_main_light_1440w_background, bg_subtle_1_light_800w_background, bg_subtle_1_light_1440w_background, bg_subtle_2_light_800w_background, bg_subtle_2_light_1440w_background, bg_footer_light_800w_background, bg_footer_light_1440w_background, light_theme_system [INFERRED 0.90]
- **Portfolio Project Screenshot Assets** — uta_web_app_screenshot, lookpay_screenshot, lideser_logo, at_work_photo, portfolio_project_assets [INFERRED 0.85]

## Communities

### Community 0 - "Commerce & Content Config"
Cohesion: 0.21
Nodes (13): POS System Invoice UI Screenshot, Facial Recognition Payment Validation, SRI-Validated XML Reports, Content Collections Config, Work Collection Schema, AWS Rekognition, AWS S3, Next.js (+5 more)

### Community 1 - "Auth & Role-Based Apps"
Cohesion: 0.21
Nodes (12): Ambivalence Ecommerce Homepage Screenshot, La Jefecita Kitchen Order Board Screenshot, Role-Based Access Control, JWT Authentication, Nest.js, Prisma ORM, Stripe Payment API, Supabase (+4 more)

### Community 2 - "Light Theme Backgrounds"
Cohesion: 0.27
Nodes (11): Footer Background Light Theme 1440w Responsive Variant, Footer Background Light Theme 800w Responsive Variant, Main Background Light Theme 1440w Responsive Variant, Main Background Light Theme 800w Responsive Variant, Main Background Light Theme SVG (Vector), Subtle-1 Background Light Theme 1440w Responsive Variant, Subtle-1 Background Light Theme 800w Responsive Variant, Subtle-2 Background Light Theme 1440w Responsive Variant (+3 more)

### Community 3 - "Portfolio Identity & Framework"
Cohesion: 0.27
Nodes (10): Jair Mera Portrait Photo, Astro Config, Dark Mode Design Palette (Vercel/Linear Style), Astro Environment Types, Jair Mera (devjaes), Portfolio README, devjaes.dev Portfolio Site, Tailwind CSS Config (+2 more)

### Community 4 - "Dark Theme Backgrounds"
Cohesion: 0.31
Nodes (10): Footer Background Dark Theme 1440w Responsive Variant, Footer Background Dark Theme 800w Responsive Variant, Main Background Dark Theme 1440w Responsive Variant, Main Background Dark Theme 800w Responsive Variant, Main Background Dark Theme SVG (Vector), Subtle-1 Background Dark Theme 1440w Responsive Variant, Subtle-1 Background Dark Theme 800w Responsive Variant, Subtle-2 Background Dark Theme 1440w Responsive Variant (+2 more)

### Community 5 - "Document Generation Pipeline"
Cohesion: 0.29
Nodes (8): GenDocs V3 Admin UI Screenshot, Dynamic Document Generation, Docker, GitHub Actions CI/CD, Google APIs, Google Firestore, Nest/Bull Queue Manager, GenDocs V3 — Document Generation System

### Community 6 - "Professional History & LookPay"
Cohesion: 0.25
Nodes (8): At Work - Award Ceremony Photo, Lideser - Company, Lideser Company Logo, LookPay - Face Recognition Payment Application, LookPay App Login Screenshot - Face Recognition Payment App, Portfolio Project Assets Collection, Universidad Tecnica de Ambato (UTA), UTA Web App Screenshot - Universidad Tecnica de Ambato

### Community 7 - "Icon System"
Cohesion: 1.0
Nodes (2): Phosphor Icons Library, iconPaths — Icon SVG Map

## Knowledge Gaps
- **21 isolated node(s):** `Astro Environment Types`, `Content Collections Config`, `iconPaths — Icon SVG Map`, `Ambivalence Ecommerce Homepage Screenshot`, `Jair Mera Portrait Photo` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Icon System`** (2 nodes): `Phosphor Icons Library`, `iconPaths — Icon SVG Map`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Work Collection Schema` connect `Commerce & Content Config` to `Auth & Role-Based Apps`, `Document Generation Pipeline`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **Why does `UTA Web App Redesign` connect `Commerce & Content Config` to `Portfolio Identity & Framework`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `Astro Framework` connect `Portfolio Identity & Framework` to `Commerce & Content Config`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `GenDocs V3 — Document Generation System` (e.g. with `Work Collection Schema` and `La Jefecita — Restaurant Management System`) actually correct?**
  _`GenDocs V3 — Document Generation System` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `La Jefecita — Restaurant Management System` (e.g. with `Work Collection Schema` and `GenDocs V3 — Document Generation System`) actually correct?**
  _`La Jefecita — Restaurant Management System` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Ambivalence — Ecommerce Cloth Store` (e.g. with `Work Collection Schema` and `La Jefecita — Restaurant Management System`) actually correct?**
  _`Ambivalence — Ecommerce Cloth Store` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 10 inferred relationships involving `Dark Theme Visual System` (e.g. with `Main Background Dark Theme SVG (Vector)` and `Main Background Dark Theme 800w Responsive Variant`) actually correct?**
  _`Dark Theme Visual System` has 10 INFERRED edges - model-reasoned connections that need verification._