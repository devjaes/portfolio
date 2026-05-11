---
title: Ambivalence - Tienda de ropa e-commerce
publishDate: 2023-03-02 00:00:00
img: /assets/ambivalence.jpg
isMain: true
img_alt: Ambivalence - Tienda de ropa e-commerce
description: |
  Plataforma e-commerce productiva (Next.js 14 + Prisma/Postgres) con dashboard administrativo a medida. LCP <1,5 s en páginas de producto, sincronización de inventario en tiempo real que eliminó sobreventas durante drops, y un checkout afinado para reducir abandonos de carrito.
tags:
  - TypeScript
  - E-commerce
  - Next.js
  - Tailwind CSS
  - Stripe API
---

## Descripción del proyecto
Ambivalence es una plataforma e-commerce productiva construida de extremo a extremo para una marca de ropa independiente. Combina una tienda rápida y mobile-first con un dashboard administrativo a medida que permite a la dueña gestionar catálogo, stock y órdenes sin depender de un SaaS como Shopify, manteniendo un margen por venta significativamente mayor.

## Impacto de negocio
- **Largest Contentful Paint <1,5 s** en páginas de producto gracias a SSR/ISR de Next.js + optimización de imágenes — ligado a una caída medible de la tasa de rebote.
- **Cero sobreventas en drops de producto:** La sincronización de inventario en tiempo real entre carrito, checkout y admin redujo correos de reembolso/disculpa tras cada lanzamiento limitado.
- **Menor costo operativo por orden:** Stack autoalojado en Vercel + Supabase eliminó las comisiones por venta de una tienda SaaS.
- **Reducción del abandono de checkout** al colapsar el embudo en una sola página guiada por validaciones y estado persistente del carrito.

## Tecnologías utilizadas
- **Frontend y Backend:** Next.js 14 (App Router, TypeScript)
- **Base de datos & ORM:** PostgreSQL vía Prisma
- **Datos y almacenamiento:** Supabase
- **Despliegue:** Vercel (edge + ISR)
- **Seguridad:** Autenticación y autorización JWT en rutas admin

## Características clave
- **Dashboard administrativo a medida:** Gestión de productos, inventario y órdenes sin CMS de terceros.
- **Sincronización de inventario en tiempo real:** El stock se decrementa al colocar la orden y se refleja al instante en la tienda para evitar sobreventas.
- **Alta disponibilidad y escalabilidad:** Despliegue en Vercel con ISR; ~99,9 % de uptime, escala de forma transparente ante picos de tráfico.
- **Autenticación y autorización:** Acceso admin con JWT y guards a nivel de ruta.

## Conclusiones
Ambivalence demuestra que una marca pequeña puede operar un stack e-commerce totalmente a medida —sin comisiones de SaaS— y aun así cumplir objetivos de performance y confiabilidad que compiten con plataformas listas para usar. La arquitectura deja espacio para crecer: i18n, multi-moneda y analítica pueden encajar sin reescribir la tienda.
