import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    siteTitle:
      "Jair Mera | Full-Stack Engineer · Ruby on Rails · TypeScript / NestJS / Next.js",
    siteDescription:
      "Portfolio of Jair Mera — Full-Stack Engineer specializing in Ruby on Rails and TypeScript (NestJS / Next.js), with AWS Serverless experience. AWS Certified Solutions Architect — Associate. Building scalable SaaS and APIs for U.S.-market remote teams.",
    aboutTitle:
      "About | Jair Mera — Full-Stack Engineer (Ruby on Rails & TypeScript)",
    aboutDescription:
      "Full-Stack Engineer specializing in Ruby on Rails, TypeScript (NestJS / Next.js), and AWS Serverless. AWS Certified Solutions Architect — Associate. Based in Ecuador (EST / UTC-5), accustomed to async-first U.S. remote teams.",
    workTitle: "Projects | Jair Mera — Ruby on Rails, React & Node.js Work",
    workDescription:
      "Selected Ruby on Rails, React/Next.js, and Node.js projects by Jair Mera — high-traffic SaaS, enterprise ERPs, and event-driven systems delivered for U.S.-market clients.",
    notFoundTitle: "404 | Jair Mera",
    notFoundDescription: "Page not found.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    about: "About",
    menuLabel: "Toggle menu",
  },
  hero: {
    roleBadge:
      "Full-Stack Engineer · Ruby on Rails · TypeScript / NestJS / Next.js · AWS Certified",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    locationPill: "Ecuador (EST / UTC-5)",
    headlinePart1: "",
    headlineHighlight1: "End-to-end SaaS",
    headlinePart2: " on ",
    headlineHighlight2: "AWS serverless",
    headlinePart3: ". AI-assisted development in daily flow.",
    subheadline:
      "Full-Stack Engineer specializing in **Ruby on Rails** and **TypeScript** (NestJS / Next.js), with **AWS Serverless** experience. Building scalable APIs, event-driven systems, and SaaS web apps for the U.S. market. Currently at **Senirop**, shipping features on **TAPinto.net** (~2M monthly visits).",
    primaryCta: "View Work",
    secondaryCta: "Download CV",
    socialProof: "Connect with me",
    portraitAlt: "Jair Mera - Full Stack Engineer",
  },
  philosophy: {
    title: "How I Work",
    subtitle: "Principles that drive every line of code I write.",
    cards: [
      {
        title: "End-to-End Ownership",
        icon: "layers",
        description:
          "I own features end-to-end: Rails API schema and service layer through React/Next.js components and CI/CD on AWS. Strict API contracts, custom hooks, scalable component patterns — no handovers, no blockers.",
      },
      {
        title: "Testing-First",
        icon: "shield",
        highlight: true,
        highlightLabel: "Core",
        description:
          "Testing isn't optional. RSpec + Jest at the unit layer, Playwright at the integration layer — every feature ships with the coverage to back it. Refactoring stays cheap; production stays calm.",
      },
      {
        title: "Ship Fast, Ship Right",
        icon: "rocket",
        description:
          "Migrated a legacy ERP to Clean Architecture in under 2 weeks — Rails API + React, zero data loss, ~60% less tech debt. AI-assisted workflow (Claude Code, Cursor) compresses ramp time, never replaces engineering judgment.",
      },
    ],
  },
  techStack: {
    title: "Tech Stack",
    subtitle:
      "Building scalable applications with type-safe, battle-tested technologies.",
    coreLabel: "Full Stack Core",
  },
  experience: {
    title: "Experience",
    subtitle:
      "My professional journey building scalable applications and working with international clients.",
    currentLabel: "Current",
    relatedProjectsLabel: "See projects related to this role",
    entries: [
      {
        title: "Full Stack Engineer",
        company: "Senirop (Consultancy)",
        date: "Nov 2024 - Present",
        badges: ["React 19", "Ruby on Rails", "TypeScript", "PostgreSQL"],
        current: true,
        relatedProjects: "#projects",
        points: [
          "Architecting a greenfield CRM platform end-to-end in React 19 + Rails API, defining component patterns, custom hooks, and API contracts with the backend team.",
          "Full-stack contributor on TAPinto.net (Ruby on Rails + React), shipping CMS features across 12+ content types, tuning background jobs, performance hotspots, and cache layers to keep a high-traffic US news platform fast.",
          "Led a <2 week architectural migration of a legacy Export ERP (Lideser) from monolith to Clean Architecture (React + Rails API), reducing technical debt by ~60%.",
          "Built an internal AI Code Quality Validator using AST analysis to audit LLM-generated code against Senior Tech Lead standards.",
        ],
      },
      {
        title: "Back End Developer",
        company: "Development Dynamics (Contract)",
        date: "Mar 2024 - Aug 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Designed and implemented 15+ RESTful API endpoints using NestJS + TypeScript, including data models, DTOs, guards, and business logic from scratch.",
          "Established the testing culture: wrote 50+ Jest unit/integration tests, achieving >85% coverage on critical API paths.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Technical University of Ambato",
        date: "Dec 2023 - Sep 2024",
        badges: ["Next.js", "NestJS", "BullMQ", "PostgreSQL"],
        points: [
          "Led a 4-person Scrum team building Gendocs V3, a Next.js + NestJS document management system handling thousands of academic documents.",
          "Implemented event-driven async processing with BullMQ queues, reducing report generation from ~30s to ~9s (70% improvement).",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Ambivalence Clothing",
        date: "Mar 2023 - May 2023",
        badges: ["Next.js 14", "TypeScript"],
        points: [
          "Designed and developed a full e-commerce platform using Next.js 14 with TypeScript, implementing product catalog, cart, and checkout flows.",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    subtitle:
      "Technologies and tools I use daily to build high-quality software.",
    dailyLabel: "Daily",
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
        title: "AI Tooling",
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
    title: "Certifications",
    subtitle: "Validated expertise from industry-recognized programs.",
    activeLabel: "Active",
    issuedLabel: "Issued",
    skillsCoveredLabel: "Skills covered",
    verifyLabel: "Verify on Credly",
    items: [
      {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        issuedLabel: "April 29, 2026",
        statusLabel: "Active",
        skills: [
          "Cloud architecture",
          "Security & IAM",
          "Scalability",
          "Cost optimization",
          "AWS Well-Architected Framework",
        ],
        verifyLabel: "Verify on Credly",
        verifyUrl:
          "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
        badgeImage: "/assets/aws-saa-badge.png",
        badgeAlt: "AWS Certified Solutions Architect Associate badge",
      },
    ],
  },
  featured: {
    title: "Featured Work",
    subtitle:
      "Highlights from my professional career and personal achievements.",
    confidentialLabel: "Confidential",
    projects: [
      {
        title: "TAPinto.net",
        shortDesc:
          "High-traffic US news platform with full-stack contributions across CMS, jobs, and cache.",
        longDesc:
          "Full-stack contributor on a high-traffic US digital news platform serving millions of users. Engineered complex CMS modules for 12+ content types, tuned background jobs, optimized cache layers and performance hotspots, and integrated dynamic ad-serving systems and payment gateways. Operating in an English-first distributed team across US timezones.",
        tech: [
          "Ruby on Rails",
          "React",
          "PostgreSQL",
          "Background Jobs",
          "Caching",
          "Performance",
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.bmp",
      },
      {
        title: "Lideser Export ERP",
        shortDesc:
          "Architected a 2-week migration of a legacy ERP to Clean Architecture.",
        longDesc:
          "Lead Architect for the critical migration of a legacy Export Management ERP. Transitioned the monolithic system to a modern Clean Architecture (Rails API + React) in a record 2-week timeframe, reducing ~60% technical debt. Designed the PostgreSQL schema migration strategy to ensure zero data loss during the transition.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        image: "/assets/lideser.png",
      },
      {
        title: "Award-Winning Algorithms",
        shortDesc:
          "1st Place Algorithm Challenge & 3rd Place Fintech Innovation Contest.",
        longDesc:
          "Recognized for exceptional problem-solving skills with a 1st Place finish at a prestigious Algorithm Challenge and 3rd Place at a Fintech Innovation Contest focused on AI Integration. Demonstrated mastery in competitive programming and innovative financial technology solutions.",
        tech: ["Algorithms", "Problem Solving", "TypeScript"],
        image: "/assets/at-work.jpg",
      },
    ],
  },
  archive: {
    title: "The Archive",
    subtitle: "Previous projects showcasing my growth as a developer.",
    viewAll: "View all projects",
  },
  work: {
    flagshipTitle: "Selected Work",
    flagshipSubtitle: "Flagship projects — production scale, measured impact.",
    moreTitle: "More Work",
    moreSubtitle:
      "Recent builds across fintech, auth, computer vision, and real-time systems.",
    earlierTitle: "Earlier Projects",
    earlierSubtitle: "The archive — foundational work, kept for the record.",
    viewProjectLabel: "View case study",
    currentlyBuildingTitle: "Currently Building",
    currentlyBuildingSubtitle: "In active development.",
    inProgressLabel: "In progress",
    building: [
      {
        title: "Tickbase",
        context: "QUANTITATIVE TRADING ANALYTICS PLATFORM",
        description:
          "Event-driven market analytics platform: TypeScript / NestJS + a Go microservice + pgvector + TimescaleDB. Concurrent market-data ingestion (Go goroutines and channels), RAG over trading notes, and agentic weekly reports.",
        tech: ["TypeScript", "NestJS", "Go", "pgvector", "TimescaleDB"],
      },
    ],
    flagship: [
      {
        title: "TAPinto.net",
        context: "SENIROP · PRODUCTION · ENGLISH-FIRST US TEAM",
        description:
          "Full-stack contributor on a high-traffic US digital news platform. Engineered complex CMS modules across 12+ content types, tuned background jobs, optimized cache layers and performance hotspots, and integrated dynamic ad-serving and payment gateways.",
        tech: ["Ruby on Rails", "React", "PostgreSQL", "Background Jobs", "Caching"],
        stats: [
          { value: "~2M/mo", label: "Monthly visits" },
          { value: "12+", label: "CMS content types" },
        ],
        link: "https://www.tapinto.net/",
        image: "/assets/tapinto.bmp",
        imageAlt: "TAPinto.net news platform",
      },
      {
        title: "Gendocs V3",
        context: "TECH UNIV. AMBATO · 4-PERSON SCRUM LEAD",
        description:
          "Event-driven document management system handling thousands of academic documents. Implemented async processing with BullMQ queues, moving report generation off the request path and collapsing generation latency.",
        tech: ["Next.js", "NestJS", "BullMQ", "PostgreSQL", "Event-Driven"],
        stats: [
          { value: "70%", label: "Faster generation" },
          { value: "30s→9s", label: "Report latency" },
        ],
        slug: "nested/gendocsv3",
        image: "/assets/gendocs.jpg",
        imageAlt: "Gendocs V3 document automation",
      },
      {
        title: "Lideser Export ERP",
        context: "SENIROP CLIENT · LEAD ARCHITECT",
        description:
          "Architected the migration of a legacy monolithic Export Management ERP to a modern Clean Architecture (Rails API + React) in a record two-week window. Designed the PostgreSQL migration strategy to guarantee zero data loss.",
        tech: ["Clean Architecture", "Rails API", "PostgreSQL", "TypeScript"],
        stats: [
          { value: "<2 wk", label: "Full migration" },
          { value: "~60%", label: "Less tech debt" },
        ],
        image: "/assets/lideser.png",
        imageAlt: "Lideser Export ERP",
      },
    ],
    more: [
      {
        title: "FoppyAI",
        context: "TEAM OF 2 · POST-HACKATHON PROJECT",
        description:
          "AI voice agent for personal finance, built on our Fopymes hackathon prototype: Whisper STT + GPT intent routing over a multi-agent backend let users log transactions, goals, and budgets by voice.",
        tech: ["Next.js", "Hono", "Drizzle", "OpenAI Whisper"],
        highlight: "3rd place — Hatary Shunko Fintech Innovation",
        slug: "hatary-shunko",
        image: "/assets/stock-1.jpg",
        imageAlt: "FoppyAI voice finance agent",
      },
      {
        title: "Securis",
        context: "UNIVERSITY CAPSTONE · LEAD ARCHITECT",
        description:
          "Secure document platform with Microsoft OAuth SSO, SQL Server Dynamic Data Masking, a redacting logging interceptor, and a custom encryption + compression layer for point-to-point payloads.",
        tech: ["NestJS", "Vue 3", "SQL Server", "MS OAuth"],
        highlight: "SSO + database-level data masking",
        slug: "securis",
        image: "/assets/stock-2.jpg",
        imageAlt: "Securis secure document platform",
      },
      {
        title: "Cementerios",
        context: "PROJECT MANAGER · CROSS-FUNCTIONAL TEAM",
        description:
          "Cemetery management system modeling niche (burial-plot) lifecycle — inventory, ownership and inheritance, payments, and burial procedures. Delivered as Project Manager.",
        tech: ["Next.js 15", "NestJS", "PostgreSQL", "AWS S3"],
        highlight: "Led delivery as PM",
        slug: "cementerios",
        image: "/assets/stock-3.jpg",
        imageAlt: "Cementerios management system",
      },
      {
        title: "Titan Training",
        context: "CV PROTOTYPE · PAUSED",
        description:
          "Computer-vision prototype for downhill MTB rider detection and attribute classification: YOLOv11 detection feeding an EfficientNet-B2 multi-label classifier. Prototype; project paused.",
        tech: ["Python", "YOLOv11", "EfficientNet-B2", "PyTorch"],
        highlight: "Detection + classification pipeline (prototype)",
        slug: "titan-training",
        image: "/assets/stock-4.jpg",
        imageAlt: "Titan Training computer vision",
      },
      {
        title: "La Jefecita",
        context: "REAL-TIME RESTAURANT OPS",
        description:
          "Role-scoped restaurant platform with a WebSocket layer keeping order state consistent across waitstaff, kitchen, and cashier on every device on the floor.",
        tech: ["Next.js", "NestJS", "WebSockets", "Stripe"],
        highlight: "−30% order-entry errors",
        slug: "lajefecita",
        image: "/assets/jefecita.jpg",
        imageAlt: "La Jefecita restaurant platform",
      },
    ],
    earlier: [
      {
        title: "LookPay",
        context: "EARLY PROJECT",
        description:
          "Facial-recognition payment simulation with sub-2s face match, exploring password-less biometric auth flows.",
        tech: ["Next.js", "Spring Boot", "AWS Rekognition"],
        slug: "lookpay",
        image: "/assets/lookpay.png",
        imageAlt: "LookPay facial-recognition payment",
      },
      {
        title: "SRI-Compliant POS",
        context: "EARLY PROJECT",
        description:
          "Point-of-sale for Ecuadorian retailers with inventory management and SRI-validated electronic invoicing.",
        tech: ["Spring Boot", "Next.js", "PostgreSQL"],
        slug: "pos-system",
        image: "/assets/possytem.png",
        imageAlt: "SRI-compliant point-of-sale system",
      },
      {
        title: "UTA Web App",
        context: "EARLY PROJECT",
        description:
          "Astro + React institutional landing redesign for the Technical University of Ambato. Deployed on Vercel.",
        tech: ["Astro", "React", "Tailwind"],
        slug: "uta-web-app",
        image: "/assets/uta-web-app.png",
        imageAlt: "UTA institutional landing page",
      },
      {
        title: "Ambivalence",
        context: "EARLY PROJECT",
        description:
          "Two-app e-commerce platform (storefront + admin) for a clothing brand. Next.js + Prisma + Clerk.",
        tech: ["Next.js", "Prisma", "Clerk"],
        slug: "ambivalence",
        image: "/assets/ambivalence.jpg",
        imageAlt: "Ambivalence e-commerce store",
      },
    ],
  },
  contact: {
    title: "Let's Build Something at Scale",
    subtitle:
      "Looking for a Full Stack Engineer who owns features end-to-end and builds scalable backend services? Let's talk.",
    cta: "Send Me a Message",
    mailtoSubject: "Contact from Portfolio",
    mailtoBody:
      "Hi Jair,\n\nI found your portfolio and would like to discuss...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Built with",
  },
  about: {
    h1Part1: "About ",
    h1Highlight: "Me",
    paragraph1:
      "Thanks for stopping by. I'm Jair Mera, a backend-leaning Full-Stack Engineer based in Ecuador. I build production SaaS and APIs with Ruby on Rails and TypeScript (NestJS / Next.js), event-driven systems, and serverless architectures on AWS — where I'm a certified Solutions Architect.",
    paragraph2:
      "I've always been passionate about technology. Since childhood, I've been fascinated by computers, which led me to pursue Software Engineering in 2021. Today I focus on shipping production-ready software with clean architecture and solid testing, using AI tooling to move faster without cutting engineering corners.",
    portraitAlt: "Jair Mera at work",
    backgroundTitle: "Background",
    educationTitle: "Education",
    universityName: "Technical University of Ambato",
    universityDegree:
      "Software Engineering (2021 - Expected Graduation: December 2026)",
    highSchoolName: "Bolivar High School",
    highSchoolDegree: "Bachelor of Science",
    honorsTitle: "Honors & Awards",
    honor1Title: "3rd Place - Advanced Programming Contest",
    honor1Desc:
      "Hatary Shunko Innovation (Apr 2025) - Developed a financial solution with AI integration",
    honor2Title: "1st Place - Algorithm Challenge",
    honor2Desc:
      "Technical University of Ambato (Apr 2023) - Solved complex algorithmic problems",
    languagesTitle: "Languages",
    spanishLabel: "Spanish",
    spanishLevel: "(Native)",
    englishLabel: "English",
    englishLevel: "(Highly Proficient — Daily async/sync US communication)",
    softTitle: "What I Bring to the Table",
    softCards: [
      {
        title: "Team Collaboration",
        description:
          "Experience leading Scrum teams and mentoring junior developers.",
      },
      {
        title: "Self-Learning",
        description:
          "Constantly exploring new technologies and staying up-to-date with industry trends.",
      },
      {
        title: "Problem Solving",
        description:
          "Award-winning skills in algorithmic thinking and complex problem resolution.",
      },
      {
        title: "Latin America Time Zones",
        description:
          "Based in Ecuador (UTC-5). Native Spanish speaker, comfortable in English-first remote teams across the Americas.",
      },
    ],
  },
  notFound: {
    title: "Page not found",
    subtitle: "The page you're looking for doesn't exist.",
    cta: "Go home",
  },
  langToggle: {
    en: "EN",
    es: "ES",
    ariaLabel: "Switch language",
  },
  workPage: {
    title: "Projects",
    subtitle:
      "A collection of projects showcasing my journey as a Full Stack Engineer. From enterprise applications to personal experiments.",
    backLink: "Back to Projects",
  },
};
