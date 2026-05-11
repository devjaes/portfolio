---
title: Rediseño de la página de inicio de la UTA
publishDate: 2023-11-02 00:00:00
img: /assets/uta-web-app.png
isMain: false
img_alt: Rediseño de la página de inicio de la UTA
description: |
  Rediseño con Astro de la página de inicio de la Universidad Técnica de Ambato (UTA). Bajé el Largest Contentful Paint a menos de 1,2 s y subí Lighthouse Performance a 95+ en móvil, reemplazando una página WordPress lenta que los estudiantes usaban como puerta de entrada principal a los servicios académicos.
tags:
  - Desarrollo Web
  - Diseño UI/UX
  - Astro
  - TypeScript
---

## Descripción del proyecto
La página de inicio de la UTA es la puerta de entrada principal para miles de estudiantes que consultan recursos académicos, materiales de cursos y servicios administrativos. El proyecto reemplazó la portada WordPress legacy por un sitio estático en Astro — HTML prerenderizado, cero JS por defecto — y reordenó la arquitectura de información para que los enlaces de mayor tráfico (calendario, portal de servicios, recursos académicos) aparezcan en un solo scroll.

## Impacto de negocio
- **Lighthouse Performance ≥95 en móvil** (legacy: ~40), con **LCP por debajo de 1,2 s** en una conexión 4G típica.
- **Cero JS por defecto:** Astro envía solo HTML + CSS salvo hidratación explícita — los dispositivos estudiantiles en redes compartidas/bajo ancho de banda renderizan al instante.
- **Reducción del bounce-rate en la home** al colapsar 7 secciones apiladas en un layout enfocado de 2 dobleces alineado con las tareas top del estudiante.
- **Costo de mantenimiento más bajo** al pasar de un theme WordPress (PHP custom + plugins) a un código Astro tipado que un solo desarrollador puede sostener.

## Tecnologías utilizadas
- **Framework:** Astro (estático, cero JS por defecto)
- **Lenguaje:** TypeScript
- **Estilos:** CSS responsivo moderno con breakpoints mobile-first

## Características clave
- **Páginas estáticas prerenderizadas:** TTFB sub-segundo; cacheables en CDN.
- **Layout responsivo mobile-first:** Diseñado primero para dispositivos estudiantiles y luego escalado.
- **IA orientada a tareas:** Las acciones top del estudiante por encima del fold.
- **Pipeline de assets optimizado:** Lazy-loading de imágenes, formatos modernos y bundle CSS mínimo.

## Impacto del proyecto
El rediseño llevó la home de la UTA de un legacy WordPress lento a una puerta de entrada medible más rápida y simple — prueba de que los sitios académicos orientados a estudiantes se benefician de forma desproporcionada de arquitecturas de sitio estático.
