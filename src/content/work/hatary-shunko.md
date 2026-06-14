---
title: FoppyAI — Voice-Driven Personal Finance
publishDate: 2025-09-01 00:00:00
img: /assets/stock-1.jpg
isMain: false
img_alt: FoppyAI personal finance voice agent
description: |
  AI voice agent for personal finance, built on our Fopymes hackathon prototype (3rd place, Hatary Shunko Fintech Innovation). Whisper STT + GPT intent routing over a multi-agent backend let users log transactions, goals, and budgets by voice. Two-person team.
tags:
  - Next.js
  - Hono
  - Drizzle
  - OpenAI Whisper
  - AI Integration
---

## Origin
FoppyAI grew out of **Fopymes**, the prototype my teammate and I built for the Hatary Shunko Fintech Innovation hackathon, where it placed **3rd**. After the event, the two of us kept building on that prototype with more time and care, turning the demo into a more complete personal-finance application.

## Problem
Logging expenses by hand is tedious enough that people stop doing it. We wanted a Spanish-language voice interface so a user could capture a transaction, savings goal, or budget in a single spoken sentence.

## Architecture
Audio is recorded in the Next.js client and sent to a Hono backend running on Bun. **OpenAI Whisper** transcribes the Spanish speech; **GPT-4o-mini** classifies intent (transaction, goal, or budget) and extracts structured fields. A small set of agent services normalizes and validates the extracted data before it returns to the UI for confirmation. The backend follows a hexagonal (ports/adapters) layout with Drizzle ORM over PostgreSQL.

## My role
I was the dominant contributor — roughly **73% of backend and 68% of frontend commits**. I built the voice module (ports/adapters, the multi-agent orchestrator, the Whisper and GPT adapters, the validation layer) and the frontend audio-capture hook and voice UI.

## Honest limitations
- **Speech-to-text only** — there is no text-to-speech; responses are textual.
- **Hardcoded prompts** and a fixed set of three intents.
- **Spanish only**, no multilingual support.
- The backend has decent test coverage; the **frontend has none**.
- No observability around the AI calls.

It's an honest piece of applied AI integration in a fintech context — functional, not a polished product.
