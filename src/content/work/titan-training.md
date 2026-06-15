---
title: Titan Training — MTB Rider Computer Vision
publishDate: 2026-01-06 00:00:00
img: /assets/stock-4.jpg
isMain: false
img_alt: Computer-vision pipeline for MTB rider detection
description: |
  Computer-vision prototype for downhill MTB rider detection and attribute classification: YOLOv11 detection feeding an EfficientNet-B2 multi-label classifier (116 trainable attributes). Solo build, PyTorch + ONNX export. Prototype, currently paused.
tags:
  - Python
  - YOLOv11
  - EfficientNet-B2
  - PyTorch
  - Computer Vision
---

## Goal
Automate identification and attribute extraction from downhill mountain-bike event photos: detect riders and bikes, then classify attributes (helmet colors, bike brands, competitor numbers, apparel text) to make large photo sets searchable.

## Pipeline
A two-stage architecture: **YOLOv11m** detects nine object classes (rider, helmet, bike, competitor number, text elements, …) and produces boxes and segmentation masks. An **EfficientNet-B2** backbone with a multi-label head then classifies **116 trainable attributes** per image (`BCEWithLogitsLoss` with auto-computed positive-class weights, tunable inference threshold). Both models support **ONNX export**, with modular single-image and batch inference.

## Status (paused)
The core architecture and training pipeline are in place (Colab notebook, YAML configs, modular training and inference). The project was paused when the downstream system it was meant to feed was cancelled.

*Scope: a notebook-driven prototype on a small dataset — its value is breadth, a working detection + multi-label classification pipeline alongside my backend and LLM work.*
