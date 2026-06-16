---
title: FoppyAI — Finanzas Personales por Voz
publishDate: 2025-09-01 00:00:00
img: /assets/foppy.png
isMain: false
img_alt: Agente de voz de finanzas personales FoppyAI
description: |
  Agente de voz con IA para finanzas personales, construido sobre nuestro prototipo de hackathon Fopymes (3er lugar, Hatary Shunko Fintech Innovation). Whisper STT + ruteo de intención con GPT sobre un backend multi-agente permiten registrar transacciones, metas y presupuestos por voz. Equipo de dos.
tags:
  - Next.js
  - Hono
  - Drizzle
  - OpenAI Whisper
  - Integración IA
---

## Origen
FoppyAI nació de **Fopymes**, el prototipo que un compañero y yo construimos para el hackathon Hatary Shunko Fintech Innovation, donde obtuvo el **3er lugar**. Después del evento, los dos seguimos construyendo sobre ese prototipo con más tiempo y dedicación, convirtiendo el demo en una aplicación de finanzas personales más completa.

## Problema
Registrar gastos a mano es tan tedioso que la gente deja de hacerlo. Quisimos una interfaz de voz en español para capturar una transacción, meta de ahorro o presupuesto en una sola frase hablada.

## Arquitectura
El audio se graba en el cliente Next.js y se envía a un backend Hono sobre Bun. **OpenAI Whisper** transcribe el habla en español; **GPT-4o-mini** clasifica la intención (transacción, meta o presupuesto) y extrae campos estructurados. Un conjunto de servicios de agente normaliza y valida los datos antes de devolverlos a la UI para confirmación. El backend sigue una arquitectura hexagonal (puertos/adaptadores) con Drizzle ORM sobre PostgreSQL.

## Mi rol
Fui el contribuidor dominante — alrededor del **73% de los commits de backend y 68% de frontend**. Construí el módulo de voz (puertos/adaptadores, el orquestador multi-agente, los adaptadores de Whisper y GPT, la capa de validación) y el hook de captura de audio y la UI de voz del frontend.

*Alcance: un prototipo enfocado de hackathon — español, ruteo de voz a intención sobre tres flujos, con backend probado — construido como integración de IA aplicada en un contexto fintech.*
