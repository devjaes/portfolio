---
title: La Jefecita
publishDate: 2023-12-01 00:00:00
img: /assets/jefecita.jpg
isMain: true
img_alt: La Jefecita
description: |
  Plataforma full-stack de gestión de restaurantes (Next.js + NestJS + WebSockets) que redujo ~30% los errores de pedido y bajó el tiempo de ciclo cocina–caja de minutos a segundos mediante sincronización en tiempo real entre meseros, cocina y caja.
tags:
  - TypeScript
  - Next.js
  - Nest JS
  - Websockets
---

## Descripción del proyecto
La Jefecita es una plataforma full-stack de gestión de restaurantes diseñada para reemplazar tickets en papel y la comunicación informal entre meseros, cocina y caja. Unifica cuatro interfaces específicas por rol (mesero, cocinero, cajero, administrador) sobre una capa WebSocket que mantiene el estado del pedido consistente en todos los dispositivos del local.

## Impacto de negocio
- **Reducción de ~30 % en errores de pedido** al sustituir tickets manuscritos por flujos digitales por rol y confirmación inmediata de cocina.
- **Tiempo de entrega de tickets de minutos a segundos:** Las actualizaciones por WebSocket eliminaron el retraso del relevo cocina ⇄ caja, principal causa de platos tardíos.
- **Cero descuadres de caja al cierre:** Cada ticket pagado se concilia automáticamente entre pedido, pago (Stripe) y reporte de caja.
- **Fuente única de verdad** para menú, precios e inventario por rol, eliminando los costos de menús impresos desactualizados durante promociones.

## Tecnologías utilizadas
- **Frontend:** Next.js (TypeScript)
- **Backend:** NestJS (TypeScript)
- **Capa en tiempo real:** WebSockets (Socket.IO)
- **Pagos:** Stripe (sandbox)
- **Base de datos:** PostgreSQL
- **Seguridad:** Autenticación JWT y guards de autorización por rol

## Características clave
- **Gestión por rol:** UIs dedicadas para meseros, cocineros, cajeros y administradores, cada una acotada a las acciones y datos que ese rol necesita.
- **Sincronización de pedidos en tiempo real:** Eventos WebSocket propagan el estado del pedido (creado, en preparación, listo, servido, pagado) a toda pantalla relevante en <300 ms.
- **Integración de pagos segura:** Checkout con Stripe y logs auditables de transacción.
- **JWT y autorización:** Guards aplican los límites de rol en la capa API, no solo en la UI.

## Conclusiones
La Jefecita demostró que incluso una operación pequeña obtiene un ROI desproporcionado con un stack en tiempo real bien enfocado: menos errores por turno, mesas más rápidas y reconciliación financiera limpia. La arquitectura (API NestJS + clientes Next.js + gateway WebSocket + Postgres) escala sin fricción a despliegues multi-sucursal.
