import type { Translations } from "./types";

export const es: Translations = {
  meta: {
    siteTitle:
      "Jair Mera | Ingeniero Full Stack · Ruby on Rails · TypeScript / NestJS / Next.js",
    siteDescription:
      "Portafolio de Jair Mera — Ingeniero Full Stack especializado en Ruby on Rails y TypeScript (NestJS / Next.js), con experiencia en AWS Serverless. AWS Certified Solutions Architect — Associate. Construyo SaaS y APIs escalables para equipos remotos del mercado de EE. UU.",
    aboutTitle:
      "Sobre mí | Jair Mera — Ingeniero Full Stack (Ruby on Rails & TypeScript)",
    aboutDescription:
      "Ingeniero Full Stack especializado en Ruby on Rails, TypeScript (NestJS / Next.js) y AWS Serverless. AWS Certified Solutions Architect — Associate. Basado en Ecuador (EST / UTC-5), acostumbrado a equipos remotos async-first en EE. UU.",
    workTitle:
      "Proyectos | Jair Mera — Trabajo en Ruby on Rails, React y Node.js",
    workDescription:
      "Proyectos seleccionados en Ruby on Rails, React/Next.js y Node.js de Jair Mera — SaaS de alto tráfico, ERPs empresariales y sistemas event-driven entregados para clientes del mercado de EE. UU.",
    notFoundTitle: "404 | Jair Mera",
    notFoundDescription: "Página no encontrada.",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre mí",
    menuLabel: "Abrir menú",
    building: "Construyendo",
    contact: "Contacto",
    statusOpen: "DISPONIBLE",
    commandLabel: "Paleta de comandos (⌘K)",
  },
  hero: {
    roleBadge:
      "Ingeniero Full Stack · Ruby on Rails · TypeScript / NestJS / Next.js · AWS Certified",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    locationPill: "Ecuador (EST / UTC-5)",
    headlinePart1: "",
    headlineHighlight1: "SaaS de extremo a extremo",
    headlinePart2: " sobre ",
    headlineHighlight2: "AWS serverless",
    headlinePart3: ". Desarrollo asistido por IA en el día a día.",
    subheadline:
      "Ingeniero Full Stack especializado en **Ruby on Rails** y **TypeScript** (NestJS / Next.js), con experiencia en **AWS Serverless**. Construyo APIs escalables, sistemas event-driven y aplicaciones SaaS para el mercado de EE. UU. Actualmente en **Senirop**, enviando funcionalidades en **TAPinto.net** (~2M visitas/mes).",
    primaryCta: "Ver proyectos",
    secondaryCta: "Descargar CV",
    socialProof: "Conecta conmigo",
    portraitAlt: "Jair Mera - Ingeniero Full Stack",
    headline: "Ingeniero Full-Stack · Ruby · TypeScript · Go\nAWS Certified.",
    tagline: "Construyendo sistemas en producción a escala. Enfoque backend.",
    subLead:
      "Enviando **TAPinto.net** (~2M visitas/mes) — plataforma de noticias de EE. UU., remoto desde Ecuador.",
    awsChip: "AWS SAA — CERTIFICADO ↗",
    viewExperienceCta: "Ver experiencia",
  },
  philosophy: {
    title: "Cómo trabajo",
    subtitle: "Principios que guían cada línea de código que escribo.",
    cards: [
      {
        title: "Ownership de extremo a extremo",
        icon: "layers",
        description:
          "Hago suyas las features de extremo a extremo: del esquema y la capa de servicios en Rails API a los componentes en React/Next.js y CI/CD en AWS. Contratos de API estrictos, hooks personalizados y patrones de componentes escalables — sin handovers, sin bloqueos.",
      },
      {
        title: "Testing primero",
        icon: "shield",
        highlight: true,
        highlightLabel: "Esencial",
        description:
          "El testing no es opcional. RSpec + Jest en la capa unitaria, Playwright en la capa de integración — cada feature sale con la cobertura que la respalda. Refactorizar sigue barato; producción sigue tranquila.",
      },
      {
        title: "Entregar rápido y bien",
        icon: "rocket",
        description:
          "Migré un ERP legacy a Clean Architecture en menos de 2 semanas — Rails API + React, cero pérdida de datos, ~60 % menos deuda técnica. Flujo asistido por IA (Claude Code, Cursor, Copilot) que comprime el ramp time, nunca reemplaza el criterio de ingeniería.",
      },
    ],
  },
  techStack: {
    title: "Stack técnico",
    subtitle:
      "Construyendo aplicaciones escalables con tecnologías type-safe y probadas en batalla.",
    coreLabel: "Núcleo Full Stack",
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
        title: "Desarrollador Backend",
        company: "Development Dynamics (Contrato)",
        date: "Mar 2024 - Ago 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Diseñé e implementé 15+ endpoints REST con NestJS + TypeScript, incluyendo modelos de datos, DTOs, guards y lógica de negocio desde cero.",
          "Establecí la cultura de testing: escribí 50+ pruebas unitarias y de integración con Jest, alcanzando >85 % de cobertura en rutas críticas de la API.",
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
      {
        title: "Desarrollador Full Stack Freelance",
        company: "Freelance",
        date: "Oct 2022 - Jun 2023",
        badges: ["React", "Spring Boot", "PostgreSQL"],
        points: [
          "Construí un sistema de gestión de inventario para una ferretería con React + Spring Boot y PostgreSQL — control de stock, catálogo de productos y registros transaccionales.",
          "Entregué una app de seguimiento de órdenes de trabajo para un taller mecánico (React + Spring Boot + PostgreSQL) para registrar y dar seguimiento a las actividades de reparación hasta su finalización.",
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
          { name: "Ruby on Rails", color: "#cc0000" },
          { name: "Node.js", color: "#68a063" },
          { name: "NestJS", color: "#e0234e" },
          { name: "Express", color: "#ffffff" },
          { name: "Golang", color: "#00ADD8" },
          { name: "REST APIs", color: "#22d3ee" },
          { name: "BullMQ", color: "#dc2626" },
          { name: "PostgreSQL", color: "#336791" },
          { name: "MongoDB", color: "#47A248" },
          { name: "AWS Lambda", color: "#ff9900" },
          { name: "S3", color: "#ff9900" },
          { name: "DynamoDB", color: "#4053d6" },
          { name: "SQS / SNS", color: "#ff4f8b" },
          { name: "Serverless Framework", color: "#fd5750" },
        ],
      },
      {
        title: "Frontend",
        icon: "code",
        highlight: true,
        skills: [
          { name: "React 18/19", color: "#61dafb" },
          { name: "Next.js", color: "#ffffff" },
          { name: "TypeScript", color: "#3178c6" },
          { name: "JavaScript", color: "#f7df1e" },
          { name: "Zustand", color: "#818cf8" },
          { name: "TanStack Query", color: "#ff4154" },
          { name: "TanStack React Router", color: "#73b6ff" },
          { name: "TanStack Forms", color: "#d2fc6fff" },
          { name: "React Hook Form", color: "#a4ea59ff" },
          { name: "Zod", color: "#e81b82ff" },
          { name: "Yup", color: "#d5bd0dff" },
          { name: "Tailwind CSS", color: "#06b6d4" },
          { name: "Vite", color: "#646cff" },
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
          { name: "MCPs", color: "#fc8686ff" },
          { name: "Agentic Workflows", color: "#6e46a9ff" },
          { name: "Spec driven development", color: "#68d168ff" },
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
          { name: "GitLab CI", color: "#fc6d26" },
          { name: "AWS EC2", color: "#3e91f6ff" },
          { name: "AWS ECS", color: "#fdaa3eff" },
          { name: "AWS ECR", color: "#ff880eff" },
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
        issuedLabel: "29 de abril de 2026",
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
        image: "/assets/tapinto.webp",
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
    subtitle:
      "Proyectos previos que muestran mi crecimiento como desarrollador.",
    viewAll: "Ver todos los proyectos",
  },
  work: {
    flagshipTitle: "Trabajo destacado",
    flagshipSubtitle:
      "Proyectos flagship — escala de producción, impacto medido.",
    moreTitle: "Más trabajo",
    moreSubtitle:
      "Builds recientes en fintech, auth, visión por computadora y sistemas en tiempo real.",
    earlierTitle: "Proyectos anteriores",
    earlierSubtitle:
      "El archivo — trabajo fundacional, conservado para el registro.",
    viewProjectLabel: "Ver caso de estudio",
    currentlyBuildingTitle: "Construyendo ahora",
    currentlyBuildingSubtitle:
      "Flagship en progreso — analítica de mercado event-driven.",
    inProgressLabel: "En progreso · flagship",
    statusLabels: {
      ship: "ENVIADO",
      build: "EN CURSO",
      paused: "PAUSADO",
      down: "CAÍDO",
    },
    earlierColumns: {
      sym: "Sím",
      project: "Proyecto",
      what: "Qué",
      signal: "Señal",
      stack: "Stack",
      year: "Año",
    },
    building: [
      {
        title: "Tickbase",
        context: "PLATAFORMA DE ANALÍTICA DE TRADING CUANTITATIVO",
        description:
          "Plataforma de analítica de mercado event-driven: TypeScript / NestJS + un microservicio en Go + pgvector + TimescaleDB. Ingesta concurrente de datos de mercado (goroutines y channels en Go), RAG sobre notas de trading, y reportes semanales agénticos.",
        tech: ["TypeScript", "NestJS", "Go", "pgvector", "TimescaleDB"],
        symbol: "TKBS",
        status: "build",
      },
    ],
    flagship: [
      {
        title: "TAPinto.net",
        context: "SENIROP · PRODUCCIÓN · EQUIPO US EN INGLÉS",
        description:
          "Contribuidor full-stack en una plataforma de noticias de alto tráfico en EE. UU. Construí módulos CMS complejos para 12+ tipos de contenido, ajusté jobs en background, optimicé capas de caché y performance hotspots, e integré ad-serving dinámico y pasarelas de pago.",
        tech: [
          "Ruby on Rails",
          "React",
          "PostgreSQL",
          "Background Jobs",
          "Caché",
        ],
        symbol: "TAPI",
        status: "ship",
        viz: "up",
        vizLabel: "Tráfico · tendencia",
        stats: [
          { value: "~2M/mes", label: "Visitas mensuales", green: true },
          { value: "12+", label: "Tipos de contenido CMS" },
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.webp",
        imageAlt: "Plataforma de noticias TAPinto.net",
      },
      {
        title: "ERP de exportación Lideser",
        context: "CLIENTE SENIROP · ARQUITECTO LÍDER",
        description:
          "Arquitecté la migración de un ERP de exportación legacy monolítico a una Clean Architecture moderna (Rails API + React) en un plazo récord de dos semanas. Diseñé la estrategia de migración de PostgreSQL para garantizar cero pérdida de datos.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        symbol: "LDSR",
        status: "ship",
        viz: "down",
        vizLabel: "Deuda técnica · burndown",
        stats: [
          { value: "<2 sem", label: "Migración completa", green: true },
          {
            value: "~60%",
            label: "Menos deuda técnica",
            green: true,
            diff: true,
          },
        ],
        image: "/assets/lideser.png",
        imageAlt: "ERP de exportación Lideser",
        link: "https://lideser.com/web/",
      },
      {
        title: "Gendocs V3",
        context: "UNIV. TÉCNICA DE AMBATO · LÍDER SCRUM DE 4",
        description:
          "Sistema event-driven de gestión documental que maneja miles de documentos académicos. Implementé procesamiento asíncrono con colas BullMQ, sacando la generación de reportes de la ruta de request y colapsando la latencia.",
        tech: ["Next.js", "NestJS", "BullMQ", "PostgreSQL", "Event-Driven"],
        symbol: "GDOC",
        status: "ship",
        viz: "down",
        vizLabel: "Latencia · 30s→9s",
        stats: [
          { value: "70%", label: "Generación más rápida", green: true },
          { value: "30s→9s", label: "Latencia de reporte", green: true },
        ],
        slug: "nested/gendocsv3",
        image: "/assets/gendocs.jpg",
        imageAlt: "Automatización documental Gendocs V3",
      },
    ],
    more: [
      {
        title: "FoppyAI",
        context: "EQUIPO DE 2 · PROYECTO POST-HACKATHON",
        description:
          "Agente de voz con IA para finanzas personales, construido sobre nuestro prototipo de hackathon Fopymes: Whisper STT + ruteo de intención con GPT sobre un backend multi-agente permiten registrar transacciones, metas y presupuestos por voz.",
        tech: ["Next.js", "Hono", "Drizzle", "OpenAI Whisper"],
        highlight: "3er lugar — Hatary Shunko Fintech Innovation",
        symbol: "HTRY",
        status: "ship",
        slug: "hatary-shunko",
        image: "/assets/foppy.png",
        imageAlt: "Agente de voz financiero FoppyAI",
      },
      {
        title: "Securis",
        context: "CAPSTONE UNIVERSITARIO · ARQUITECTO LÍDER",
        description:
          "Plataforma de documentos segura con SSO de Microsoft OAuth, SQL Server Dynamic Data Masking, un interceptor de logging con redacción, y una capa propia de cifrado + compresión para payloads punto a punto.",
        tech: ["NestJS", "Vue 3", "SQL Server", "MS OAuth"],
        highlight: "SSO + enmascaramiento de datos en BD",
        symbol: "SCRS",
        status: "ship",
        slug: "securis",
        image: "/assets/securis.png",
        imageAlt: "Plataforma de documentos segura Securis",
      },
      {
        title: "Cementerios",
        context: "TECH LEAD · EQUIPO MULTIFUNCIONAL",
        description:
          "Sistema de gestión cementerial que modela el ciclo de vida de nichos — inventario, propiedad e herencia, pagos y procedimientos de inhumación. Entregado como Tech Lead.",
        tech: ["Next.js 15", "NestJS", "PostgreSQL", "AWS S3"],
        highlight: "Lideré la entrega como Tech Lead",
        symbol: "CMTR",
        status: "ship",
        slug: "cementerios",
        image: "/assets/cementerios.png",
        imageAlt: "Sistema de gestión cementerial",
      },
      {
        title: "Titan Training",
        context: "PROTOTIPO CV · PAUSADO",
        description:
          "Prototipo de visión por computadora para detección de ciclistas de downhill MTB y clasificación de atributos: detección YOLOv11 alimentando un clasificador multi-label EfficientNet-B2. Prototipo; proyecto pausado.",
        tech: ["Python", "YOLOv11", "EfficientNet-B2", "PyTorch"],
        highlight: "Pipeline detección + clasificación (prototipo)",
        symbol: "TITN",
        status: "paused",
        slug: "titan-training",
        image: "/assets/titan_training.jpeg",
        imageAlt: "Visión por computadora Titan Training",
      },
      {
        title: "La Jefecita",
        context: "OPERACIÓN DE RESTAURANTE EN TIEMPO REAL",
        description:
          "Plataforma de restaurante por rol con una capa WebSocket que mantiene el estado de las órdenes consistente entre meseros, cocina y caja en cada dispositivo del local.",
        tech: ["Next.js", "NestJS", "WebSockets", "Stripe"],
        highlight: "−30% errores de toma de orden",
        symbol: "JFCT",
        status: "ship",
        slug: "lajefecita",
        image: "/assets/jefecita.jpg",
        imageAlt: "Plataforma de restaurante La Jefecita",
      },
    ],
    earlier: [
      {
        title: "LookPay",
        context: "PROYECTO TEMPRANO",
        description:
          "Simulación de pago con reconocimiento facial con match en menos de 2s, explorando flujos de auth biométrica sin contraseñas.",
        tech: ["Next.js", "Spring Boot", "AWS Rekognition"],
        symbol: "LKPY",
        status: "ship",
        highlight: "<2s auth",
        year: "2022",
        slug: "lookpay",
        image: "/assets/lookpay.png",
        imageAlt: "Pago con reconocimiento facial LookPay",
      },
      {
        title: "POS SRI",
        context: "PROYECTO TEMPRANO",
        description:
          "Punto de venta para comerciantes ecuatorianos con gestión de inventario y facturación electrónica validada por el SRI.",
        tech: ["Spring Boot", "Next.js", "PostgreSQL"],
        symbol: "SRIP",
        status: "ship",
        highlight: "100% válido SRI",
        year: "2023",
        slug: "pos-system",
        image: "/assets/possytem.png",
        imageAlt: "Sistema de punto de venta SRI",
      },
      {
        title: "UTA Web App",
        context: "PROYECTO TEMPRANO",
        description:
          "Rediseño de landing institucional en Astro + React para la Universidad Técnica de Ambato. Desplegado en Vercel.",
        tech: ["Astro", "React", "Tailwind"],
        symbol: "UTAW",
        status: "ship",
        highlight: "Lighthouse 95+",
        year: "2023",
        slug: "uta-web-app",
        image: "/assets/uta-web-app.png",
        imageAlt: "Landing institucional UTA",
      },
      {
        title: "Ambivalence",
        context: "PROYECTO TEMPRANO",
        description:
          "Plataforma e-commerce de dos apps (tienda + admin) para una marca de ropa. Next.js + Prisma + Clerk.",
        tech: ["Next.js", "Prisma", "Clerk"],
        symbol: "AMBV",
        status: "ship",
        highlight: "<1.5s LCP",
        year: "2023",
        slug: "ambivalence",
        image: "/assets/ambivalence.jpg",
        imageAlt: "Tienda e-commerce Ambivalence",
      },
    ],
  },
  aboutPage: {
    dashboardLabel: "← Dashboard",
    crumbCurrent: "about",
    cardName: "Jair Mera",
    cardRole: "INGENIERO FULL-STACK · ENFOQUE BACKEND",
    cardStatus: "DISPONIBLE",
    qstats: [
      { label: "BASE", value: "Ambato, EC" },
      { label: "ZONA", value: "UTC−5" },
      { label: "CERT", value: "AWS SAA" },
      { label: "FOCO", value: "Fintech" },
    ],
    kicker: "// whoami",
    headline: "Ingeniero al que le gustan las partes poco glamorosas.",
    paragraphs: [
      "Soy un ingeniero full-stack de **Ambato, Ecuador**, que trabaja backend-first en Ruby, TypeScript y Go. Las partes del trabajo que más disfruto son las que nadie captura en pantalla — **esquemas, colas y migraciones** — las decisiones que determinan si un sistema se mantiene tranquilo bajo carga.",
      "La mayor parte de mi trabajo ha sido ingeniería de producto de extremo a extremo: liderar un equipo Scrum en **Gendocs V3**, enviar features en **TAPinto.net** con un equipo de EE. UU. en inglés, y arquitectar la migración de dos semanas del **ERP de exportación Lideser**. Soy **AWS Certified Solutions Architect**, y cada vez más orientado a **fintech** — Tickbase es hacia donde va eso.",
      "Estoy terminando mi carrera de Ingeniería de Software en la Universidad Técnica de Ambato y estoy **abierto a roles remotos** con equipos de producto de EE. UU. / U. E.",
    ],
    honorsTitle: "Premios y reconocimientos",
    honorsSub: "Resultados competitivos — algoritmos e IA aplicada.",
    awards: [
      {
        place: "1",
        suffix: "er",
        tier: "gold",
        title: "Algorithm Challenge",
        org: "UNIVERSIDAD TÉCNICA DE AMBATO",
        desc: "Obtuve el primer lugar resolviendo problemas algorítmicos complejos contrarreloj — estructuras de datos, optimización y corrección bajo presión.",
        when: "ABR 2023",
      },
      {
        place: "3",
        suffix: "er",
        tier: "bronze",
        title: "Concurso Avanzado de Programación",
        org: "HATARY SHUNKO INNOVATION",
        desc: "Tercer lugar construyendo una solución financiera con integración de IA — el proyecto que se convirtió en FoppyAI y me orientó hacia fintech.",
        when: "ABR 2025",
      },
    ],
    backgroundTitle: "Trayectoria",
    backgroundSub: "Educación, idiomas y certificación.",
    educationLabel: "Educación",
    eduDegree: "Ingeniería de Software",
    eduOrg: "Universidad Técnica de Ambato",
    eduYears: "2021 — Dic 2026 (estimado)",
    eduProgressPct: "90%",
    eduProgressLabel: "≈ 90% COMPLETO · GRADUACIÓN DIC 2026",
    languagesLabel: "Idiomas",
    languages: [
      { name: "Español", level: "NATIVO", pct: "100%" },
      { name: "Inglés", level: "PROFESIONAL", pct: "85%" },
    ],
    certLabel: "Certificación",
    certTitle: "AWS Solutions Architect — Associate",
    certStatus: "EMITIDA ABR 2026 · ACTIVA",
    ctaKicker: "Hablemos",
    ctaTitle: "Abierto a roles remotos con equipos de EE. UU. / U. E.",
    viewWorkLabel: "Ver proyectos →",
  },
  heroCard: {
    barSymbol: "MERA:FS",
    barStatus: "DISPONIBLE ▲",
    photoTag: "INGENIERO FULL-STACK",
    metaLabel: "ENFOQUE BACKEND",
    statusTitle: "ESTADO",
    statusLine1: "abierto a remoto",
    statusLine2: "construyendo Tickbase",
    stackLabel: "STACK",
    stackValue: "Ruby · TS · Go",
    certLabel: "CERT",
    certValue: "AWS SAA",
    zoneLabel: "ZONA",
    zoneValue: "UTC−5",
  },
  tickbase: {
    statusLabel: "EN PROGRESO · FLAGSHIP",
    archTitle: "Arquitectura del sistema",
    dataFlowLabel: "FLUJO DE DATOS →",
    archLinkLabel: "Ver diagrama de arquitectura",
    metrics: [
      { value: "Go + TS", label: "Políglota" },
      { value: "RAG", label: "Notas de trading" },
      { value: "Agéntico", label: "Reportes semanales" },
    ],
    columns: [
      {
        cap: "Ingesta",
        nodes: [
          {
            name: "Ingesta de mercado",
            badge: "Go",
            desc: "Goroutines concurrentes traen datos de mercado en vivo; fan-in con backpressure.",
          },
          {
            name: "Event Bus",
            badge: "Cola",
            desc: "Desacopla la ingesta del procesamiento — stream de eventos reproducible.",
          },
        ],
      },
      {
        cap: "Almacenar",
        nodes: [
          {
            name: "TimescaleDB",
            badge: "TS",
            desc: "Hypertables para series tick/OHLC; agregados continuos.",
          },
          {
            name: "pgvector",
            badge: "RAG",
            desc: "Embeddings sobre notas de trading para recuperación semántica.",
          },
        ],
      },
      {
        cap: "Servir y razonar",
        nodes: [
          {
            name: "NestJS API",
            badge: "TS",
            desc: "Gateway tipado — consultas, auth y orquestación de la capa de agentes.",
            accent: true,
          },
          {
            name: "Reportes agénticos",
            badge: "LLM",
            desc: "Una corrida semanal compila RAG + métricas en un reporte escrito.",
            accent: true,
          },
        ],
      },
    ],
  },
  watching: {
    title: "Lo que sigo",
    subtitle: "Mercados que observo, lecturas que sigo — cerca del dominio.",
    chartSymbol: "XAU/USD",
    chartMeta: "ORO · SPOT",
    chartPrice: "2,412.80",
    chartChange: "▲ +0.74%  +17.60",
    chartNote: "// PLACEHOLDER ILUSTRATIVO — NO ES DATA EN VIVO.",
    chartLive: "en vivo",
    readingTitle: "Lista de lectura",
    reading: [
      { title: "The Pragmatic Engineer", tag: "INGENIERÍA" },
      { title: "Bits about Money", tag: "FINTECH" },
      { title: "Money Stuff — Matt Levine", tag: "MERCADOS" },
      { title: "Engineering at Scale", tag: "SISTEMAS" },
    ],
  },
  tweaks: {
    toggleLabel: "Ajustes",
    accentLabel: "Acento",
    gridLabel: "Cuadrícula de fondo",
    gridOff: "Off",
    gridSubtle: "Sutil",
    gridStrong: "Fuerte",
    densityLabel: "Densidad",
    densityComfortable: "Cómoda",
    densityCompact: "Compacta",
  },
  commandPalette: {
    placeholder: "escribe un comando…  prueba: ls projects",
    openLabel: "Abrir paleta de comandos",
    navHint: "navegar",
    runHint: "ejecutar",
    escHint: "cerrar",
    emptyLabel: "ningún comando coincide",
    descriptions: {
      whoami: "resaltar la tarjeta de identidad",
      "ls projects": "ir a Trabajo destacado",
      "ls building": "ir a Tickbase",
      "cat tickbase": "abrir la arquitectura de Tickbase",
      "cat experience": "ir a Experiencia",
      contact: "ir a contacto",
      github: "abrir GitHub ↗",
      linkedin: "abrir LinkedIn ↗",
      "theme green": "acento verde",
      "theme cyan": "acento cian",
      "theme amber": "acento ámbar",
      "density comfortable": "espaciado cómodo",
      "density compact": "espaciado compacto",
      "grid off": "sin cuadrícula de fondo",
      "grid subtle": "cuadrícula sutil",
      "grid strong": "cuadrícula fuerte",
      help: "listar todos los comandos",
      clear: "cerrar la paleta",
    },
  },
  contact: {
    title: "Construyamos algo a escala",
    subtitle:
      "¿Buscas un Ingeniero Full Stack que tome ownership de las features de extremo a extremo y construya servicios backend escalables? Hablemos.",
    cta: "Envíame un mensaje",
    mailtoSubject: "Contacto desde el portafolio",
    mailtoBody:
      "Hola Jair,\n\nEncontré tu portafolio y me gustaría conversar sobre...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Construido con",
  },
  about: {
    h1Part1: "Sobre ",
    h1Highlight: "mí",
    paragraph1:
      "Gracias por pasar. Soy Jair Mera, un Ingeniero Full Stack con enfoque backend, basado en Ecuador. Construyo SaaS y APIs en producción con Ruby on Rails y TypeScript (NestJS / Next.js), sistemas event-driven y arquitecturas serverless sobre AWS — donde soy Solutions Architect certificado.",
    paragraph2:
      "Siempre me ha apasionado la tecnología. Desde niño me fascinaron las computadoras, lo que me llevó a estudiar Ingeniería de Software en 2021. Hoy me enfoco en entregar software listo para producción con arquitectura limpia y testing sólido, usando herramientas de IA para ir más rápido sin recortar el criterio de ingeniería.",
    portraitAlt: "Jair Mera trabajando",
    backgroundTitle: "Trayectoria",
    educationTitle: "Educación",
    universityName: "Universidad Técnica de Ambato",
    universityDegree:
      "Ingeniería de Software (2021 - Fecha estimada de graduación: Diciembre 2026)",
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
    englishLevel:
      "(Altamente competente — comunicación diaria async/sync con EE. UU.)",
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
