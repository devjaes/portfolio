---
title: Titan Training — Visión por Computadora para Ciclistas MTB
publishDate: 2026-01-06 00:00:00
img: /assets/stock-4.jpg
isMain: false
img_alt: Pipeline de visión por computadora para detección de ciclistas MTB
description: |
  Prototipo de visión por computadora para detección de ciclistas de downhill MTB y clasificación de atributos: detección con YOLOv11 alimentando un clasificador multi-label EfficientNet-B2 (116 atributos entrenables). Construido en solitario, PyTorch + exportación ONNX. Prototipo, actualmente pausado.
tags:
  - Python
  - YOLOv11
  - EfficientNet-B2
  - PyTorch
  - Visión por Computadora
---

## Objetivo
Automatizar la identificación y extracción de atributos de fotos de competencias de MTB downhill: detectar corredores y bicicletas, luego clasificar atributos (colores de casco, marcas de bicicleta, números de competidor, texto de atuendo) para hacer buscables grandes conjuntos de fotos.

## Pipeline
Arquitectura de dos etapas: **YOLOv11m** detecta nueve clases de objetos (corredor, casco, bicicleta, número de competidor, elementos de texto, …) y produce cajas y máscaras de segmentación. Un backbone **EfficientNet-B2** con cabeza multi-label clasifica luego **116 atributos entrenables** por imagen (`BCEWithLogitsLoss` con pesos de clase positivos calculados automáticamente, umbral de inferencia ajustable). Ambos modelos soportan **exportación ONNX**, con inferencia modular de una imagen y por lotes.

## Estado (pausado)
La arquitectura central y el pipeline de entrenamiento están listos (notebook de Colab, configs YAML, entrenamiento e inferencia modulares). El proyecto se pausó cuando se canceló el sistema descendente al que iba a alimentar.

*Alcance: un prototipo basado en notebook sobre un dataset pequeño — su valor es la amplitud, un pipeline funcional de detección + clasificación multi-label junto a mi trabajo de backend y LLM.*
