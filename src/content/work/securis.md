---
title: Securis — Secure Document Platform
publishDate: 2025-01-15 00:00:00
img: /assets/stock-2.jpg
isMain: false
img_alt: Securis secure document platform
description: |
  Secure document-management platform with Microsoft OAuth SSO, SQL Server Dynamic Data Masking for field-level protection, and a redacting logging interceptor. Lead architect; built with NestJS + Vue 3.
tags:
  - NestJS
  - Vue 3
  - SQL Server
  - Microsoft OAuth
  - Security
---

## Problem
Securis was a security-focused capstone: a document-management system that needed institutional SSO, role-scoped document workflows (draft → sent → received), electronic signatures with QR codes, and protection of sensitive data at the database level.

## Architecture
- **Authentication:** Microsoft OAuth (Passport strategy, single/multi-tenant) with JWT sessions and a password-reset flow.
- **Database-level protection:** **SQL Server Dynamic Data Masking** over ~10 sensitive fields across 5 tables, with two database roles — an admin with `UNMASK` and a read-only user that only ever sees masked values. This is the real security win, and it's rare to see implemented at this layer.
- **Logging:** a custom NestJS interceptor that redacts `Authorization` / `Cookie` headers and strips passwords and tokens out of request/response bodies, with per-request tracing.
- **Encryption + compression:** a custom point-to-point layer that encrypts and compresses payloads in transit, using three independent Huffman trees across frontend, backend, and database so the same input is encoded differently at each hop.
- **Frontend:** Vue 3 + Vite, Pinia, a Tiptap rich-text editor, and QR generation for signatures.

## My role
I was the **lead architect and initial owner**: project setup, the core NestJS module structure, the Dynamic Data Masking configuration, the logging interceptor, and the Huffman encoding. Two teammates contributed the auth flow and the documents module.

*The standout is the database-level Dynamic Data Masking paired with the redacting interceptor — genuine, role-aware data protection at the layer that matters most.*
