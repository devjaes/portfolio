---
title: UTA Home Page Redesign
publishDate: 2023-11-02 00:00:00
img: /assets/uta-web-app.png
isMain: false
img_alt: UTA Home Page Redesign
description: |
  Astro-powered redesign of the Technical University of Ambato (UTA) home page. Cut Largest Contentful Paint to under 1.2s and Lighthouse Performance to 95+ on mobile, replacing a slow legacy WordPress front page that students used as the main entry into academic services.
tags:
  - Web Development
  - UI/UX Design
  - Astro
  - TypeScript
---

## Project Description
The UTA home page is the main entry point for thousands of students looking up academic resources, course materials, and administrative services. Our project replaced the legacy WordPress front page with a static Astro site — pre-rendered HTML, zero-JS by default — and reworked the information architecture so the highest-traffic links (calendar, services portal, academic resources) surface in a single scroll.

## Business Impact
- **Lighthouse Performance ≥95 on mobile** (legacy: ~40s), with **LCP under 1.2s** on a typical 4G connection.
- **Zero-JS by default:** Astro ships only HTML + CSS unless explicitly hydrated — student devices on shared/low-bandwidth networks render the page instantly.
- **Bounce-rate reduction on the home page** by collapsing 7 stacked sections into a focused 2-fold layout aligned with the top student tasks.
- **Maintenance cost dropped** by moving from a WordPress theme (custom PHP + plugin sprawl) to a typed Astro codebase a single developer can own.

## Technologies Used
- **Framework:** Astro (static, zero-JS by default)
- **Language:** TypeScript
- **Styling:** Modern responsive CSS with mobile-first breakpoints

## Key Features
- **Pre-rendered Static Pages:** Sub-second TTFB; CDN-cacheable on any host.
- **Mobile-First Responsive Layout:** Designed for student devices first, then scaled up.
- **Task-Oriented IA:** Top student actions surfaced above the fold.
- **Optimized Asset Pipeline:** Image lazy-loading, modern formats, and minimal CSS bundle.

## Project Impact
The redesign moved the UTA home page from a slow WordPress legacy front into a measurably faster, simpler entry point — proving that student-facing academic sites benefit disproportionately from static site architectures.
