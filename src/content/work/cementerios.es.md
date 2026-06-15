---
title: Cementerios — Sistema de Gestión Cementerial
publishDate: 2025-03-01 00:00:00
img: /assets/stock-3.jpg
isMain: false
img_alt: Sistema de gestión cementerial
description: |
  Sistema de gestión cementerial que modela el ciclo de vida de nichos — inventario, propiedad e herencia, pagos y procedimientos de inhumación. Entregado como Project Manager sobre un equipo multifuncional. Next.js 15 + NestJS 11 + PostgreSQL + AWS S3.
tags:
  - Gestión de Proyecto
  - Next.js 15
  - NestJS
  - PostgreSQL
  - AWS S3
---

## El sistema
Cementerios gestiona el ciclo de vida completo de los nichos. Los bloques generan automáticamente cuadrículas de nichos; cada nicho pasa por estados — disponible → reservado → vendido → ocupado — con reversiones para exhumaciones. El dominio es genuinamente complejo: propiedad e herencia multi-propietario, flujos de pago con recibos en PDF, y procedimientos de inhumación/exhumación validados (autorización sanitaria, pago, verificación de propietario). Un mapa interactivo muestra el estado en vivo de bloques/nichos. Stack: Next.js 15 + React 19 en frontend, NestJS 11 + PostgreSQL en backend, AWS S3 para archivos.

## Mi rol (Project Manager)
Lideré el proyecto como **Project Manager**, no como tech lead. Mi aporte fue organizacional: coordinar un equipo multifuncional (frontend, backend y pasantes), correr ceremonias, priorizar el backlog y gestionar el alcance, y ser el punto de integración — cada pull request se fusionó a través de mí. Los tech leads reales de la implementación fueron compañeros en backend y frontend.

## Complejidad de dominio
No es un CRUD. Modela lógica de negocio cementerial: bloques regulares (venta por nicho) vs. mausoleos (venta como unidad familiar), sucesión e herencia de propiedad, y cadenas de validación que deben pasar antes de poder registrar una inhumación.

*Mi aporte aquí fue liderazgo y entrega sobre un equipo de varias personas y un dominio complejo.*
