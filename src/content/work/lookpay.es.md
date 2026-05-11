---
title: LookPay — Simulación de pagos con reconocimiento facial
publishDate: 2022-05-02 00:00:00
img: /assets/lookpay.png
isMain: true
img_alt: LookPay — Simulación de pagos con reconocimiento facial
description: |
  Simulador de pagos con IA (Next.js + Spring Boot + AWS Rekognition) que autentica transacciones por verificación facial en <2 s de extremo a extremo, eliminando la necesidad de contraseña o tarjeta en el punto de venta. Diseñado para demostrar cómo la auth biométrica reduce la fricción del checkout y la superficie de fraude.
tags:
  - TypeScript
  - Inteligencia Artificial
  - Sistemas de pago
  - Next.js
  - Spring Boot
---

## Descripción del proyecto
LookPay es un simulador de autenticación de pagos que reemplaza PINs y validaciones card-not-present por un único escaneo facial. El kiosco (Next.js) captura el rostro del cliente, el servicio Spring Boot lo envía a AWS Rekognition para hacer match contra una identidad inscrita, y la transacción se aprueba o rechaza en menos de dos segundos — sin escribir contraseña.

## Impacto de negocio
- **Autenticación <2 s** de extremo a extremo (captura → match Rekognition → aprobación), frente a 15–30 s típicos en flujos con contraseña + 2FA.
- **>95 % de precisión** en el match facial sobre el dataset de enrollment, calibrando umbrales de confianza de Rekognition y UX guiada por iluminación.
- **Reduce superficie de ataque:** Sin PINs, sin datos de banda magnética, sin secretos compartidos en el dispositivo — solo se persiste el resultado de la verificación.
- **Pensado para mostrar el ROI de la auth biométrica** a stakeholders del sector financiero evaluando checkout sin fricción.

## Tecnologías utilizadas
- **Frontend:** Next.js (TypeScript)
- **Backend:** Java Spring Boot
- **Reconocimiento facial:** AWS Rekognition (CompareFaces API)
- **Base de datos:** PostgreSQL
- **Seguridad:** Transporte cifrado, URLs firmadas de corta duración para subida, validación de umbral en el servidor

## Características clave
- **Validación facial:** AWS Rekognition compara captura en vivo vs identidad inscrita con umbral de confianza configurable.
- **UX de checkout sin fricción:** Kiosco Next.js guía al usuario por la captura en una sola pantalla.
- **Monitoreo de transacciones:** Logs auditables de aprobación/rechazo para análisis de fraude.
- **Pipeline consciente de privacidad:** Los frames no se persisten luego del match — solo decisión y metadata de auditoría.

## Conclusiones
LookPay validó que la auth biométrica puede colapsar la fricción del checkout sin sacrificar seguridad — una prueba de concepto útil para equipos fintech evaluando AWS Rekognition en sus flujos de PoS o pasarela de pagos.
