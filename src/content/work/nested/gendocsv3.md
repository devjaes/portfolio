---
title: GenDocs V3
publishDate: 2023-12-30 00:00:00
img: /assets/gendocs.jpg
isMain: true
img_alt: GenDocs V3
description: |
  Event-driven document management system (Next.js + NestJS + BullMQ) for the School of Software Engineering. Cut report generation time from ~30s to ~9s (70% faster) and absorbed >200 documents/month with zero queue backlog by moving heavy Google Docs API work into BullMQ workers.
tags:
  - Web Development
  - Next.js
  - Nest JS
  - Google Api
  - Documents
---

## Project Description
GenDocs V3 is an integrated document automation platform built for the School of Software Engineering at the Technical University of Ambato. It replaced a manual, copy-paste workflow for administrative paperwork — letters, certificates, formal academic documents — with a templated, event-driven pipeline that talks to the Google Docs API and delivers finished documents via email and in-app notifications.

## Business Impact
- **70% reduction in document generation time:** Report generation dropped from ~30s synchronous waits to ~9s end-to-end by moving Google Docs API work into BullMQ workers — students and staff stop blocking on slow PDFs.
- **200+ documents/month sustained** with zero queue backlog: the worker architecture absorbs request bursts during enrollment and graduation windows without timing out the web tier.
- **Administrative cycle time collapsed:** Document requests that previously required staff to manually fill templates now self-serve end-to-end, freeing administrative hours for higher-value work.
- **Auditable + role-scoped:** Every generated document is traceable to a requester and approver, satisfying the faculty's internal audit requirements.

## Technologies Used
- **Frontend:** Next.js (TypeScript)
- **Backend:** NestJS (TypeScript)
- **Database:** Google Firestore
- **Integrations:** Google APIs (Docs / Drive) for template-based document generation
- **Queue Management:** NestJS + BullMQ for async background processing
- **Containers:** Docker
- **CI/CD:** GitHub Actions
- **Communications:** WebSockets for real-time notifications, SMTP for email delivery

## Key Features
- **Dynamic Document Generation:** Templated Google Docs with variables replaced at runtime per request.
- **Event-Driven Async Processing:** BullMQ queues absorb load spikes and prevent slow Google API latency from blocking the web tier.
- **Role-Based Access Control:** Students, staff, and admins each see only the documents and actions their role permits.
- **Real-Time Notifications:** WebSocket updates keep users informed of request progress without polling.
- **Cloud-Native Integrations:** Google Docs / Drive APIs handle template rendering and final document storage.

## Conclusions
GenDocs V3 demonstrates that even academic administrative workflows benefit from production-grade architecture: a BullMQ queue, a typed NestJS backend, and clear role boundaries together turn a slow manual process into a self-service system that scales through every enrollment and graduation cycle.
