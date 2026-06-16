---
title: SRI-Compliant Point-of-Sale System
publishDate: 2023-05-02 00:00:00
isMain: true
img: /assets/possytem.png
img_alt: SRI-Compliant Point-of-Sale System
description: |
  Spring Boot + PostgreSQL POS for small Ecuadorian retailers. Replaced spreadsheet inventory + manual tax reports with a single transactional system that emits SRI-validated XML invoices on every sale — eliminating end-of-month tax-filing scrambles and removing the most common source of inventory drift.
tags:
  - Web Development
  - Next.js
  - Spring Boot
  - AWS S3
---

<a class="video-thumb" href="https://www.youtube.com/watch?v=BqeJK45yrGA" target="_blank" rel="noopener noreferrer">
  <img src="/assets/pos-system-video.webp" alt="Watch the SRI-Compliant POS demo on YouTube" loading="lazy" width="960" height="540" />
  <span class="video-thumb-cta">▶ Watch demo on YouTube</span>
</a>

## Project Description
A full Point-of-Sale system built for small Ecuadorian retailers who were stuck running their daily operations across spreadsheets, paper receipts, and end-of-month manual tax filings. The system unifies inventory, sales, and SRI-validated XML invoice generation into one transactional flow, with audit-safe storage in PostgreSQL and document archiving on AWS S3.

## Business Impact
- **End-of-month tax-filing scramble eliminated:** Every sale generates the SRI-validated XML invoice in real time, so monthly tax reporting collapses from days of reconciliation into a single export.
- **Inventory drift reduced significantly:** Stock decrements at point-of-sale instead of after-the-fact manual entry, removing the most common source of "phantom stock" discrepancies between paper and reality.
- **Sale-to-receipt latency under 1s:** Cashier presses confirm → invoice prints + XML stored → customer leaves. No waiting on external systems.
- **100% SRI compliance:** Every invoice passes the SRI XML schema validation at generation time, not at submission — broken invoices never reach the tax authority.

## Technologies Used
- **Frontend & Backend:** Java Spring Boot
- **Database:** PostgreSQL
- **Reporting:** SRI-validated XML invoice generation
- **Document Storage:** AWS S3 for archived invoices
- **Security:** Role-scoped access (cashier, manager, admin) with audit trail for every transaction

## Key Features
- **Real-Time Inventory Management:** Stock levels update on every sale; low-stock alerts surface before they become lost sales.
- **Fast Transaction Processing:** Sub-second sale finalization keeps queues moving during peak hours.
- **SRI-Validated XML Reports:** Schema-validated invoices generated and archived per transaction.
- **Role-Based Security:** Cashier, manager, and admin roles enforced at the service layer with full audit logs.

## Conclusions
The POS replaced a fragile manual workflow with a single, audit-safe transactional system — proving that even small retailers can run on compliance-ready software without enterprise budgets. The architecture (Spring Boot + Postgres + S3) generalizes cleanly to multi-location chains.
