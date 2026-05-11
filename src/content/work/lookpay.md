---
title: LookPay — Facial-Recognition Payment Simulation
publishDate: 2022-05-02 00:00:00
img: /assets/lookpay.png
isMain: true
img_alt: LookPay — Facial-Recognition Payment Simulation
description: |
  AI-powered payment simulator (Next.js + Spring Boot + AWS Rekognition) that authenticates transactions via facial verification in <2s end-to-end, removing the need for password or card entry at the point of sale. Built to demonstrate how biometric auth shrinks checkout friction and card-fraud surface area.
tags:
  - TypeScript
  - Artificial Intelligence
  - Payment Systems
  - Next.js
  - Spring Boot
---

## Project Description
LookPay is a payment-authentication simulator that replaces PINs and card-not-present checks with a single facial scan. The user-facing kiosk (Next.js) captures the customer's frame, the Spring Boot service forwards it to AWS Rekognition for face matching against an enrolled identity, and the transaction is approved or rejected in under two seconds — all without typing a password.

## Business Impact
- **Sub-2-second authentication** end-to-end (camera capture → Rekognition match → approval), versus 15–30s typical for password + 2FA flows at the same kiosk.
- **>95% face-match accuracy** on the enrollment dataset by tuning Rekognition confidence thresholds + lighting guidance UX.
- **Removes card/password attack surface:** No PINs, no magstripe data, no shared secrets stored on device — only the verification result is persisted.
- **Built to show the ROI of biometric auth** to financial-sector stakeholders evaluating frictionless checkout.

## Technologies Used
- **Frontend:** Next.js (TypeScript)
- **Backend:** Java Spring Boot
- **Facial Recognition:** AWS Rekognition (CompareFaces API)
- **Database:** PostgreSQL
- **Security:** Encrypted transport, short-lived signed URLs for image upload, server-side confidence-threshold enforcement

## Key Features
- **Facial Validation:** AWS Rekognition compares live capture vs enrolled identity with configurable confidence threshold.
- **Frictionless Checkout UX:** Next.js kiosk guides the user through capture in one screen.
- **Transaction Monitoring:** Auditable logs of approval/rejection events for fraud-pattern analysis.
- **Privacy-Aware Pipeline:** Raw frames are not persisted post-match — only the match decision and audit metadata.

## Conclusions
LookPay validated that biometric auth can collapse checkout friction without sacrificing security — a useful proof-of-concept for fintech teams looking to layer AWS Rekognition into existing PoS or payment-gateway flows.
