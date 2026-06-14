---
title: Securis — Plataforma de Documentos Segura
publishDate: 2025-01-15 00:00:00
img: /assets/stock-2.jpg
isMain: false
img_alt: Plataforma de documentos segura Securis
description: |
  Plataforma de gestión documental segura con SSO de Microsoft OAuth, SQL Server Dynamic Data Masking para protección a nivel de campo, y un interceptor de logging con redacción. Arquitecto principal; construida con NestJS + Vue 3.
tags:
  - NestJS
  - Vue 3
  - SQL Server
  - Microsoft OAuth
  - Seguridad
---

## Problema
Securis fue un capstone enfocado en seguridad: un sistema de gestión documental que necesitaba SSO institucional, flujos de documentos por rol (borrador → enviado → recibido), firmas electrónicas con códigos QR, y protección de datos sensibles a nivel de base de datos.

## Arquitectura
- **Autenticación:** Microsoft OAuth (estrategia Passport, single/multi-tenant) con sesiones JWT y flujo de recuperación de contraseña.
- **Protección a nivel de base de datos:** **SQL Server Dynamic Data Masking** sobre ~10 campos sensibles en 5 tablas, con dos roles de base de datos — un admin con `UNMASK` y un usuario de solo lectura que siempre ve valores enmascarados. Esta es la verdadera ganancia de seguridad, y es raro verla implementada en esta capa.
- **Logging:** un interceptor NestJS personalizado que redacta los headers `Authorization` / `Cookie` y limpia contraseñas y tokens de los cuerpos de request/response, con trazado por request.
- **Cifrado + compresión:** una capa propia punto a punto que cifra y comprime los payloads en tránsito, usando tres árboles Huffman independientes entre frontend, backend y base de datos, de modo que la misma entrada se codifica distinto en cada salto.
- **Frontend:** Vue 3 + Vite, Pinia, editor de texto enriquecido Tiptap, y generación de QR para firmas.

## Mi rol
Fui el **arquitecto principal y propietario inicial**: setup del proyecto, la estructura de módulos NestJS, la configuración de Dynamic Data Masking, el interceptor de logging y la codificación Huffman. Dos compañeros contribuyeron el flujo de auth y el módulo de documentos.

## Notas honestas
Lo destacable es el Dynamic Data Masking a nivel de base de datos junto con el interceptor con redacción — protección de datos real y consciente del rol, en la capa que más importa.
