---
title: Cementerios — Cemetery Management System
publishDate: 2025-03-01 00:00:00
img: /assets/cementerios.png
isMain: false
img_alt: Cemetery management system
description: |
  Cemetery management system modeling niche (burial-plot) lifecycle — inventory, ownership and inheritance, payments, and burial procedures. Delivered as Tech Lead over a cross-functional team. Next.js 15 + NestJS 11 + PostgreSQL + AWS S3.
tags:
  - Tech Lead
  - Next.js 15
  - NestJS
  - PostgreSQL
  - AWS S3
---

## The system
Cementerios manages the full lifecycle of cemetery niches (burial plots). Blocks auto-generate grids of niches; each niche moves through states — available → reserved → sold → occupied — with reversals for exhumations. The domain is genuinely complex: multi-owner niche ownership and inheritance, payment flows with PDF receipts, and burial/exhumation procedures gated by validation (health clearance, payment, owner verification). An interactive map shows live block/niche state. Stack: Next.js 15 + React 19 frontend, NestJS 11 + PostgreSQL backend, AWS S3 for files.

## My role (Tech Lead)
I led the project as **Tech Lead**. My contribution spanned both technical direction and delivery: coordinating a cross-functional team (frontend, backend, and student interns), running ceremonies, prioritizing the backlog and managing scope, and acting as the integration gatekeeper — every pull request merged through me. I worked alongside teammates on the backend and frontend.

## Domain complexity
This is not a CRUD app. It models cemetery business logic: regular blocks (sold per niche) vs. mausoleums (sold as a family unit), succession and inheritance of ownership, and validation chains that must pass before a burial can be registered.

*My contribution here was leadership and delivery across a multi-person team and a complex domain.*
