import type { Translations } from "./types";

export const es: Translations = {
  meta: {
    siteTitle: "Jair Mera | Ingeniero Full Stack · Node.js · AWS",
    siteDescription:
      "Portafolio de Jair Mera — Ingeniero Full Stack enfocado en Node.js, NestJS, Ruby on Rails, AWS Serverless y React. AWS Certified Solutions Architect — Associate.",
    aboutTitle: "Sobre mí | Jair Mera",
    aboutDescription:
      "Conoce más sobre Jair Mera, Ingeniero Full Stack especializado en Node.js, AWS Serverless y desarrollo acelerado por IA.",
    workTitle: "Proyectos | Jair Mera",
    workDescription: "Conoce los proyectos más recientes de Jair Mera",
    notFoundTitle: "404 | Jair Mera",
    notFoundDescription: "Página no encontrada.",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    menuLabel: "Abrir menú",
  },
  hero: {
    roleBadge: "Ingeniero Full Stack · Node.js · Rails · React/Next · AWS",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    headlinePart1: "Construyendo productos ",
    headlineHighlight1: "SaaS de extremo a extremo",
    headlinePart2: " con ",
    headlineHighlight2: "arquitecturas Serverless",
    headlinePart3: " y flujos acelerados por IA",
    subheadline:
      "Ingeniero Full Stack enfocado en **Node.js** (NestJS/Express), **Ruby on Rails** y **React/Next.js**. Construyo APIs escalables, sistemas event-driven y aplicaciones SaaS. Actualmente en **Senirop**, trabajando en **TAPinto.net**.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Descargar CV",
    socialProof: "Conecta conmigo",
    portraitAlt: "Jair Mera - Ingeniero Full Stack",
  },
  philosophy: {
    title: "Cómo trabajo",
    subtitle: "Principios que guían cada línea de código que escribo.",
    cards: [
      {
        title: "Ownership total",
        icon: "layers",
        description:
          "Hago suyas las features de extremo a extremo: desde el diseño del esquema en Postgres hasta la arquitectura de componentes en React y los pipelines de CI/CD. Sin handovers, sin excusas.",
      },
      {
        title: "Testing primero",
        icon: "shield",
        highlight: true,
        highlightLabel: "Esencial",
        description:
          "El testing automatizado no es una idea de último momento. Pruebas unitarias con Jest, E2E con Playwright y debugging riguroso forman parte de mi flujo desde el día uno.",
      },
      {
        title: "Entregar rápido y bien",
        icon: "rocket",
        description:
          "Migré un ERP completo a Clean Architecture en menos de 2 semanas. Velocidad sin sacrificar calidad — medible vía code reviews y cobertura de pruebas.",
      },
    ],
  },
  techStack: {
    title: "Stack técnico",
    subtitle:
      "Construyendo aplicaciones escalables con tecnologías type-safe y probadas en batalla.",
    coreLabel: "Core de ingeniería",
  },
  experience: {
    title: "Experiencia",
    subtitle:
      "Mi trayectoria construyendo aplicaciones escalables y trabajando con clientes internacionales.",
    currentLabel: "Actual",
    relatedProjectsLabel: "Ver proyectos relacionados con este rol",
    entries: [
      {
        title: "Ingeniero Full Stack",
        company: "Senirop (Consultoría)",
        date: "Nov 2024 - Actualidad",
        badges: ["React 19", "Ruby on Rails", "TypeScript", "PostgreSQL"],
        current: true,
        relatedProjects: "#projects",
        points: [
          "Diseñando y construyendo desde cero una plataforma CRM en React 19 + Rails API, definiendo patrones de componentes, hooks personalizados y contratos de API junto al equipo backend.",
          "Contribuidor full-stack en TAPinto.net (Ruby on Rails + React): envío de funcionalidades CMS para 12+ tipos de contenido, ajuste de jobs en background, performance hotspots y capas de caché para mantener veloz una plataforma de noticias de alto tráfico en EE. UU.",
          "Lideré una migración arquitectónica de <2 semanas de un ERP de exportación legacy (Lideser) de monolito a Clean Architecture (React + Rails API), reduciendo ~60 % de deuda técnica.",
          "Desarrollé un AI Code Quality Validator interno usando análisis AST para auditar código generado por LLMs frente a estándares de Senior Tech Leads.",
        ],
      },
      {
        title: "Cofundador & Desarrollador Backend",
        company: "Development Dynamics (Contrato)",
        date: "Mar 2024 - Ago 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Diseñé e implementé 15+ endpoints REST con NestJS + TypeScript, incluyendo modelos de datos, DTOs, guards y lógica de negocio desde cero.",
          "Establecí la cultura de testing: escribí 50+ pruebas unitarias y de integración con Jest, alcanzando >85 % de cobertura en rutas críticas de la API.",
          "Conduje sprint planning y backlog grooming en Jira, entregando sprints quincenales de forma sostenida y manejando alcance técnico con cofundadores no-técnicos.",
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Universidad Técnica de Ambato",
        date: "Dic 2023 - Sep 2024",
        badges: ["Next.js", "NestJS", "BullMQ", "PostgreSQL"],
        points: [
          "Lideré un equipo Scrum de 4 personas construyendo Gendocs V3, un sistema Next.js + NestJS para gestión de miles de documentos académicos.",
          "Implementé procesamiento asíncrono event-driven con colas BullMQ, reduciendo la generación de reportes de ~30 s a ~9 s (mejora del 70 %).",
        ],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Ambivalence Clothing",
        date: "Mar 2023 - May 2023",
        badges: ["Next.js 14", "TypeScript"],
        points: [
          "Diseñé y desarrollé una plataforma e-commerce completa con Next.js 14 y TypeScript, implementando catálogo, carrito y flujos de checkout.",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades técnicas",
    subtitle:
      "Tecnologías y herramientas que uso a diario para construir software de calidad.",
    dailyLabel: "Diario",
    categories: [
      {
        title: "Backend & Cloud",
        icon: "server",
        highlight: true,
        skills: [
          { name: "Node.js", color: "#68a063" },
          { name: "NestJS", color: "#e0234e" },
          { name: "Express", color: "#ffffff" },
          { name: "Ruby on Rails", color: "#cc0000" },
          { name: "PostgreSQL", color: "#336791" },
          { name: "AWS Lambda", color: "#ff9900" },
          { name: "Serverless Framework", color: "#fd5750" },
          { name: "DynamoDB", color: "#4053d6" },
          { name: "S3", color: "#ff9900" },
          { name: "SQS", color: "#ff4f8b" },
          { name: "SNS", color: "#ff4f8b" },
          { name: "CloudFormation / CDK", color: "#ff9900" },
        ],
      },
      {
        title: "Stack principal",
        icon: "code",
        skills: [
          { name: "TypeScript", color: "#3178c6" },
          { name: "JavaScript", color: "#f7df1e" },
          { name: "React 18/19", color: "#61dafb" },
          { name: "Next.js", color: "#ffffff" },
        ],
      },
      {
        title: "Herramientas de IA",
        icon: "sparkles",
        highlight: true,
        skills: [
          { name: "Claude Code", color: "#f97316" },
          { name: "Cursor", color: "#22d3ee" },
          { name: "Windsurf", color: "#a855f7" },
          { name: "GitHub Copilot", color: "#ffffff" },
        ],
      },
      {
        title: "Testing & DevOps",
        icon: "terminal",
        skills: [
          { name: "Playwright", color: "#2ead33" },
          { name: "Jest", color: "#c21325" },
          { name: "Docker", color: "#2496ed" },
          { name: "Git", color: "#f05032" },
          { name: "GitHub Actions", color: "#2088ff" },
        ],
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    subtitle: "Experiencia validada por programas reconocidos en la industria.",
    activeLabel: "Activa",
    issuedLabel: "Emitida",
    skillsCoveredLabel: "Áreas cubiertas",
    verifyLabel: "Verificar en Credly",
    items: [
      {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        issuedLabel: "Abril 2026", // TODO: replace with exact Credly date (Spanish month name)
        statusLabel: "Activa",
        skills: [
          "Arquitectura cloud",
          "Seguridad e IAM",
          "Escalabilidad",
          "Optimización de costos",
          "AWS Well-Architected Framework",
        ],
        verifyLabel: "Verificar en Credly",
        verifyUrl:
          "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
        badgeImage: "/assets/aws-saa-badge.png",
        badgeAlt: "Insignia AWS Certified Solutions Architect Associate",
      },
    ],
  },
  featured: {
    title: "Trabajo destacado",
    subtitle: "Highlights de mi carrera profesional y logros personales.",
    confidentialLabel: "Confidencial",
    projects: [
      {
        title: "TAPinto.net",
        shortDesc:
          "Plataforma de noticias de alto tráfico en EE. UU. con contribuciones full-stack en CMS, jobs y caché.",
        longDesc:
          "Contribuidor full-stack en una plataforma digital de noticias de alto tráfico que sirve a millones de usuarios. Construí módulos CMS para 12+ tipos de contenido, ajusté jobs en background, optimicé capas de caché y performance hotspots, e integré sistemas dinámicos de ad-serving y pasarelas de pago. Trabajo en un equipo distribuido en zonas horarias de EE. UU., con inglés como idioma principal.",
        tech: [
          "Ruby on Rails",
          "React",
          "PostgreSQL",
          "Background Jobs",
          "Caché",
          "Performance",
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.bmp",
      },
      {
        title: "ERP de exportación Lideser",
        shortDesc:
          "Migración arquitectónica en 2 semanas de un ERP legacy a Clean Architecture.",
        longDesc:
          "Arquitecto líder de la migración crítica de un ERP de gestión de exportaciones legacy. Llevé el sistema monolítico a una Clean Architecture moderna (Rails API + React) en un plazo récord de 2 semanas, reduciendo ~60 % de deuda técnica. Diseñé la estrategia de migración del esquema PostgreSQL para garantizar cero pérdida de datos.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        image: "/assets/lideser.png",
      },
      {
        title: "AI Code Quality Validator",
        shortDesc:
          "Herramienta interna para evaluar y comparar la calidad de código generado por LLMs.",
        longDesc:
          "Desarrollé un sistema interno para auditar código generado por modelos de IA. Construí pipelines automatizados de validación con análisis AST que procesan cientos de fragmentos al día, asegurando que las salidas cumplan con estándares técnicos rigurosos definidos por Senior Tech Leads. Se usa para medir y mejorar la calidad del código generado por IA en todo el equipo.",
        tech: ["Node.js", "Análisis AST", "TypeScript", "Evaluación IA"],
        confidential: true,
        image: "/assets/code-validator.webp",
      },
      {
        title: "Algoritmos premiados",
        shortDesc:
          "1er lugar en Algorithm Challenge y 3er lugar en Fintech Innovation Contest.",
        longDesc:
          "Reconocido por habilidades excepcionales de resolución de problemas con un 1er lugar en un prestigioso Algorithm Challenge y un 3er lugar en un Fintech Innovation Contest enfocado en integración de IA. Demostrando dominio en programación competitiva y soluciones innovadoras de tecnología financiera.",
        tech: ["Algoritmos", "Resolución de problemas", "TypeScript"],
        image: "/assets/at-work.jpg",
      },
    ],
  },
  archive: {
    title: "El archivo",
    subtitle: "Proyectos previos que muestran mi crecimiento como desarrollador.",
    viewAll: "Ver todos los proyectos",
  },
  contact: {
    title: "Construyamos algo a escala",
    subtitle:
      "¿Buscas un Ingeniero Full Stack que tome ownership de las features de extremo a extremo y construya servicios backend escalables? Hablemos.",
    cta: "Envíame un mensaje",
    mailtoSubject: "Contacto desde el portafolio",
    mailtoBody: "Hola Jair,\n\nEncontré tu portafolio y me gustaría conversar sobre...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Construido con",
  },
  about: {
    h1Part1: "Sobre ",
    h1Highlight: "mí",
    paragraph1:
      "Gracias por pasar. Soy Jair Mera, un Ingeniero Full Stack con enfoque backend, basado en Ecuador, apasionado por construir servicios escalables en Node.js sobre AWS, aprovechando arquitecturas serverless y acelerando la entrega con herramientas de IA.",
    paragraph2:
      "Siempre me ha apasionado la tecnología. Desde niño me fascinaron las computadoras, lo que me llevó a estudiar Ingeniería de Software en 2021. Hoy combino mi experiencia técnica con herramientas potenciadas por IA para entregar soluciones de alta calidad y listas para producción más rápido.",
    portraitAlt: "Jair Mera trabajando",
    backgroundTitle: "Trayectoria",
    educationTitle: "Educación",
    universityName: "Universidad Técnica de Ambato",
    universityDegree: "Ingeniería de Software (2021 - Actualidad)",
    highSchoolName: "Colegio Bolívar",
    highSchoolDegree: "Bachillerato en Ciencias",
    honorsTitle: "Premios y reconocimientos",
    honor1Title: "3er lugar - Concurso Avanzado de Programación",
    honor1Desc:
      "Hatary Shunko Innovation (Abr 2025) - Desarrollé una solución financiera con integración de IA",
    honor2Title: "1er lugar - Algorithm Challenge",
    honor2Desc:
      "Universidad Técnica de Ambato (Abr 2023) - Resolví problemas algorítmicos complejos",
    languagesTitle: "Idiomas",
    spanishLabel: "Español",
    spanishLevel: "(Nativo)",
    englishLabel: "Inglés",
    englishLevel: "(B2)",
    softTitle: "Lo que aporto al equipo",
    softCards: [
      {
        title: "Trabajo en equipo",
        description:
          "Experiencia liderando equipos Scrum y mentorizando a desarrolladores junior.",
      },
      {
        title: "Aprendizaje autónomo",
        description:
          "Explorando constantemente nuevas tecnologías y manteniéndome al día con la industria.",
      },
      {
        title: "Resolución de problemas",
        description:
          "Habilidades premiadas en pensamiento algorítmico y resolución de problemas complejos.",
      },
      {
        title: "Zonas horarias de Latinoamérica",
        description:
          "Basado en Ecuador (UTC-5). Hablante nativo de español, cómodo en equipos remotos en inglés en toda América.",
      },
    ],
  },
  notFound: {
    title: "Página no encontrada",
    subtitle: "La página que buscas no existe.",
    cta: "Volver al inicio",
  },
  langToggle: {
    en: "EN",
    es: "ES",
    ariaLabel: "Cambiar idioma",
  },
  workPage: {
    title: "Proyectos",
    subtitle:
      "Una colección de proyectos que muestran mi camino como Ingeniero Full Stack. Desde aplicaciones empresariales hasta experimentos personales.",
    backLink: "Volver a proyectos",
  },
};
