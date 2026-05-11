---
title: GenDocs V3
publishDate: 2023-12-30 00:00:00
img: /assets/gendocs.jpg
isMain: true
img_alt: GenDocs V3
description: |
  Sistema event-driven de gestión documental (Next.js + NestJS + BullMQ) para la Facultad de Ingeniería de Software. Reduje el tiempo de generación de reportes de ~30 s a ~9 s (70 % más rápido) y absorbí >200 documentos/mes sin backlog de cola al mover la carga pesada de Google Docs API a workers BullMQ.
tags:
  - Desarrollo Web
  - Next.js
  - Nest JS
  - Google Api
  - Documentos
---

## Descripción del proyecto
GenDocs V3 es una plataforma integrada de automatización documental para la Facultad de Ingeniería de Software de la Universidad Técnica de Ambato. Reemplazó un flujo manual de copy-paste para documentos administrativos — oficios, certificados, documentos académicos formales — por un pipeline event-driven con plantillas que interactúa con la Google Docs API y entrega documentos por correo y notificaciones in-app.

## Impacto de negocio
- **70 % de reducción en tiempo de generación:** La generación de reportes bajó de ~30 s síncronos a ~9 s end-to-end al mover la carga de Google Docs API a workers BullMQ — estudiantes y staff dejan de bloquearse esperando PDFs lentos.
- **200+ documentos/mes sostenidos** sin backlog de cola: la arquitectura de workers absorbe ráfagas en periodos de matrícula y graduación sin timeouts en la capa web.
- **Tiempo de ciclo administrativo colapsado:** Solicitudes que antes requerían que el personal llenara plantillas a mano ahora son self-service de extremo a extremo, liberando horas administrativas para trabajo de mayor valor.
- **Auditable y por rol:** Cada documento generado es trazable a solicitante y aprobador, cumpliendo los requisitos internos de auditoría de la facultad.

## Tecnologías utilizadas
- **Frontend:** Next.js (TypeScript)
- **Backend:** NestJS (TypeScript)
- **Base de datos:** Google Firestore
- **Integraciones:** Google APIs (Docs / Drive) para generación de documentos basada en plantillas
- **Gestión de colas:** NestJS + BullMQ para procesamiento asíncrono
- **Contenedores:** Docker
- **CI/CD:** GitHub Actions
- **Comunicaciones:** WebSockets para notificaciones en tiempo real, SMTP para entrega por correo

## Características clave
- **Generación dinámica de documentos:** Plantillas de Google Docs con variables reemplazadas por solicitud.
- **Procesamiento asíncrono event-driven:** Las colas BullMQ absorben picos y evitan que la latencia de Google API bloquee la capa web.
- **Control de acceso por rol:** Estudiantes, personal y administradores ven solo los documentos y acciones permitidos por su rol.
- **Notificaciones en tiempo real:** WebSockets mantienen al usuario informado del progreso sin polling.
- **Integraciones cloud-native:** Google Docs / Drive APIs manejan el render de plantillas y el almacenamiento final.

## Conclusiones
GenDocs V3 demuestra que incluso flujos administrativos académicos se benefician de arquitectura production-grade: una cola BullMQ, un backend NestJS tipado y límites claros por rol convierten un proceso manual lento en un sistema self-service que escala en cada ciclo de matrícula y graduación.
