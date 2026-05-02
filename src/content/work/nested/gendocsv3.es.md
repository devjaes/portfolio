---
title: GenDocs V3
publishDate: 2023-12-30 00:00:00
img: /assets/gendocs.jpg
isMain: true
img_alt: GenDocs V3
description: |
  Desarrollamos una nueva forma innovadora de crear y gestionar documentos para fines administrativos y legales. El sistema está diseñado para ser intuitivo, con foco en velocidad y eficiencia.
tags:
  - Desarrollo Web
  - Next.js
  - Nest JS
  - Google Api
  - Documentos
---

## Descripción del proyecto
Gendocs es un sistema integrado diseñado para automatizar la generación de documentos administrativos en la Facultad de Ingeniería de Software. Fue desarrollado con el objetivo de simplificar la creación, gestión y distribución de documentos dentro de la institución, manejando eficientemente más de 200 documentos al mes.

## Tecnologías utilizadas
- **Frontend:** Next.js
- **Backend:** Nest.js
- **Base de datos:** Google Firestore
- **Integraciones:** Google APIs para manipulación de documentos
- **Gestión de colas:** Nest/Bull para procesamiento en background
- **Contenedores:** Docker
- **CI/CD:** GitHub Actions
- **Comunicaciones:** Websockets para notificaciones en tiempo real y servidor SMTP para correos

## Características clave
- **Generación dinámica de documentos:** Plantillas con variables reemplazadas en tiempo real.
- **Automatización de tareas:** Colas de jobs para optimizar la generación y distribución.
- **Gestión de usuarios y permisos:** Control de acceso por roles.
- **Notificaciones en tiempo real:** Websockets para informar a los usuarios sobre el estado de sus solicitudes.
- **Integraciones avanzadas:** Google API para crear documentos directamente en la nube.

## Impacto del proyecto
El desarrollo de Gendocs marcó un avance significativo en la gestión documental, reduciendo en un 70 % el tiempo de creación y distribución de documentos.
