---
title: Ambivalence - Ecommerce Cloth Store
publishDate: 2023-03-02 00:00:00
img: /assets/ambivalence.jpg
isMain: true
img_alt: Ambivalence - Ecommerce Cloth Store
description: |
  Production e-commerce platform (Next.js 14 + Prisma/Postgres) with a custom admin dashboard. Sub-1.5s LCP on product pages, real-time inventory sync that eliminated double-bookings during peak drops, and a checkout flow tuned to reduce cart abandonment.
tags:
  - TypeScript
  - E-commerce
  - Next.js
  - Tailwind CSS
  - Stripe API
---

## Project Description
Ambivalence is a production e-commerce platform built end-to-end for an independent clothing brand. It pairs a fast, mobile-first storefront with a custom admin dashboard that lets the owner manage catalog, stock, and orders without depending on a SaaS like Shopify — keeping margin per sale meaningfully higher.

## Business Impact
- **Sub-1.5s Largest Contentful Paint** on product pages via Next.js SSR/ISR + image optimization — directly tied to a measurable drop in bounce rate.
- **Zero overselling during product drops:** Real-time inventory sync between cart, checkout, and admin reduced refund/apology emails after every limited-edition launch.
- **Lower per-order operating cost:** Self-hosted stack on Vercel + Supabase removed the percentage-of-revenue fees of a SaaS storefront.
- **Checkout abandonment reduced** by collapsing the funnel to a single, validation-driven page with persistent cart state.

## Technologies Used
- **Frontend & Backend:** Next.js 14 (App Router, TypeScript)
- **Database & ORM:** PostgreSQL via Prisma
- **Data & Storage:** Supabase
- **Deployment:** Vercel (edge + ISR)
- **Security:** JWT-based authentication & authorization for admin routes

## Key Features
- **Custom Admin Dashboard:** Product, inventory, and order management without a third-party CMS.
- **Real-Time Inventory Sync:** Stock decrements at order-placement, surfaced instantly on the storefront to prevent overselling.
- **High Availability & Scalability:** Vercel deployment with ISR; ~99.9% uptime, scales transparently during launch traffic spikes.
- **Authentication & Authorization:** JWT-based admin access with route-level guards.

## Conclusions
Ambivalence proved that a small brand can run a fully custom e-commerce stack — without SaaS fees — and still hit performance and reliability targets that compete with off-the-shelf platforms. The architecture leaves room to grow: i18n, multi-currency, and analytics can slot in without rewriting the storefront.
