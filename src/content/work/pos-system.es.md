---
title: Sistema POS validado por SRI
publishDate: 2023-05-02 00:00:00
isMain: true
img: /assets/possytem.png
img_alt: Sistema POS validado por SRI
description: |
  POS en Spring Boot + PostgreSQL para pequeños comercios ecuatorianos. Reemplazó inventario en hojas de cálculo y reportes manuales de impuestos por un único sistema transaccional que emite facturas XML validadas por SRI en cada venta — eliminando la corrida de fin de mes para declarar y la fuente más común de drift de inventario.
tags:
  - Desarrollo Web
  - Next.js
  - Spring Boot
  - AWS S3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/BqeJK45yrGA?si=L1_15hNxnDjnX8TO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Descripción del proyecto
Un sistema POS completo para pequeños comercios ecuatorianos que operaban con hojas de cálculo, recibos en papel y declaraciones tributarias manuales a fin de mes. El sistema unifica inventario, ventas y generación de facturas XML validadas por SRI en un único flujo transaccional, con almacenamiento auditable en PostgreSQL y archivado de documentos en AWS S3.

## Impacto de negocio
- **Corrida de declaración mensual eliminada:** Cada venta genera la factura XML validada por SRI en tiempo real, por lo que la declaración mensual pasa de días de conciliación a un único export.
- **Drift de inventario reducido drásticamente:** El stock se decrementa en el punto de venta en lugar de en captura manual posterior, eliminando la principal causa de "stock fantasma" entre papel y realidad.
- **Latencia venta→recibo <1 s:** El cajero confirma → la factura se imprime + XML se archiva → el cliente sale. Sin esperas en sistemas externos.
- **100 % de cumplimiento SRI:** Cada factura pasa la validación del esquema XML en el momento de generarse, no en el envío — facturas inválidas nunca llegan a la autoridad tributaria.

## Tecnologías utilizadas
- **Frontend y Backend:** Java Spring Boot
- **Base de datos:** PostgreSQL
- **Reportería:** Generación de facturas XML validadas por SRI
- **Almacenamiento documental:** AWS S3 para facturas archivadas
- **Seguridad:** Accesos por rol (cajero, gerente, admin) con auditoría por transacción

## Características clave
- **Inventario en tiempo real:** El stock se actualiza con cada venta; alertas de stock bajo antes de perder ventas.
- **Procesamiento rápido:** Cierre de venta sub-segundo, manteniendo la fila en horas pico.
- **Reportes XML validados por SRI:** Facturas validadas por esquema y archivadas por transacción.
- **Seguridad por roles:** Cajero, gerente y admin aplicados a nivel de servicio con logs completos.

## Conclusiones
El POS reemplazó un flujo manual frágil por un único sistema transaccional auditable — demostrando que incluso pequeños comercios pueden operar sobre software compliance-ready sin presupuestos empresariales. La arquitectura (Spring Boot + Postgres + S3) escala limpiamente a cadenas multi-sucursal.
