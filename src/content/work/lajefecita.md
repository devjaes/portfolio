---
title: La Jefecita
publishDate: 2023-12-01 00:00:00
img: /assets/jefecita.jpg
isMain: true
img_alt: La Jefecita
description: |
  Full-stack restaurant management platform (Next.js + NestJS + WebSockets) that cut order-error rates by ~30% and reduced kitchen-to-cashier ticket turnaround from minutes to seconds via real-time order sync across waitstaff, kitchen, and cashier roles.
tags:
  - TypeScript
  - Next.js
  - Nest JS
  - Websockets
---

## Project Description
La Jefecita is a full-stack restaurant management platform built to replace paper tickets and walkie-talkie communication between waitstaff, kitchen, and cashiers. The system unifies four role-specific interfaces (waiter, cook, cashier, admin) behind a real-time WebSocket layer that keeps order state consistent across every device on the floor.

## Business Impact
- **~30% reduction in order-entry errors** by replacing handwritten tickets with role-scoped digital flows and instant kitchen confirmation.
- **Ticket turnaround cut from minutes to seconds:** WebSocket-driven order updates eliminated the kitchen ⇄ cashier relay delay and removed the most common cause of late dishes.
- **Eliminated end-of-shift cash discrepancies** by closing the loop between order, payment (Stripe), and cashier reports — every paid ticket is reconciled automatically.
- **Single source of truth** for menu, pricing, and stock across roles, removing the cost of out-of-sync printed menus during promotions.

## Technologies Used
- **Frontend:** Next.js (TypeScript)
- **Backend:** NestJS (TypeScript)
- **Real-time layer:** WebSockets (Socket.IO)
- **Payments:** Stripe (sandbox simulation)
- **Database:** PostgreSQL
- **Security:** JWT-based role authentication & per-role authorization guards

## Key Features
- **Role-Specific Management:** Dedicated UIs for waitstaff, cooks, cashiers, and admins, each scoped to the exact actions and data that role needs.
- **Real-Time Order Sync:** WebSocket events push order state changes (placed, in prep, ready, served, paid) to every relevant screen in <300 ms.
- **Secure Payment Integration:** Stripe-backed checkout flow with auditable transaction logs.
- **JWT Auth & Authorization:** Guards enforce role boundaries at the API layer, not just the UI.

## Conclusions
La Jefecita proved that even a small restaurant operation gets outsized ROI from a focused real-time stack: fewer errors per shift, faster table turns, and clean financial reconciliation. The architecture (NestJS API + Next.js clients + WebSocket gateway + Postgres) scales cleanly to multi-location deployments.
