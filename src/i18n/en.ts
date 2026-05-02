import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    siteTitle: "Jair Mera | Full Stack Engineer · Node.js · AWS",
    siteDescription:
      "Portfolio of Jair Mera — Full Stack Engineer focused on Node.js, NestJS, Ruby on Rails, AWS Serverless, and React. AWS Certified Solutions Architect — Associate.",
    aboutTitle: "About | Jair Mera",
    aboutDescription:
      "Learn more about Jair Mera, Full Stack Engineer specializing in Node.js, AWS Serverless, and AI-accelerated development.",
    workTitle: "Projects | Jair Mera",
    workDescription: "Learn about Jair Mera's most recent projects",
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
    roleBadge: "Full Stack Engineer · Node.js · Rails · React/Next · AWS",
    awsCertPill: "AWS Certified Solutions Architect — Associate",
    awsCertVerifyUrl:
      "https://www.credly.com/badges/dae7f5e9-0d0a-456d-a8bf-3476394740cc",
    headlinePart1: "Engineering ",
    headlineHighlight1: "End-to-End SaaS",
    headlinePart2: " Products with ",
    headlineHighlight2: "Serverless Architectures",
    headlinePart3: " and AI-Accelerated Workflows",
    subheadline:
      "Full Stack Engineer focused on **Node.js** (NestJS/Express), **Ruby on Rails**, and **React/Next.js**. Building scalable APIs, event-driven systems, and SaaS web apps. Currently at **Senirop**, working on **TAPinto.net**.",
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
        title: "Full Ownership",
        icon: "layers",
        description:
          "I own features end-to-end: from Postgres schema design to React component architecture to CI/CD pipeline. No handovers, no excuses.",
      },
      {
        title: "Testing-First",
        icon: "shield",
        highlight: true,
        highlightLabel: "Core",
        description:
          "Automated testing isn't an afterthought. Jest unit tests, Playwright E2E, and thorough debugging are baked into my workflow from day one.",
      },
      {
        title: "Ship Fast, Ship Right",
        icon: "rocket",
        description:
          "Migrated a full ERP to Clean Architecture in under 2 weeks. Speed without sacrificing quality — measurable through code reviews and test coverage.",
      },
    ],
  },
  techStack: {
    title: "Tech Stack",
    subtitle:
      "Building scalable applications with type-safe, battle-tested technologies.",
    coreLabel: "Core Engineering",
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
        title: "Cofounder & Back End Developer",
        company: "Development Dynamics (Contract)",
        date: "Mar 2024 - Aug 2024",
        badges: ["NestJS", "TypeScript", "Jest", "Jira"],
        points: [
          "Designed and implemented 15+ RESTful API endpoints using NestJS + TypeScript, including data models, DTOs, guards, and business logic from scratch.",
          "Established the testing culture: wrote 50+ Jest unit/integration tests, achieving >85% coverage on critical API paths.",
          "Drove sprint planning and backlog grooming in Jira, shipping 2-week sprints consistently while managing technical scope with non-technical co-founders.",
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
    subtitle: "Technologies and tools I use daily to build high-quality software.",
    dailyLabel: "Daily",
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
        title: "Core Stack",
        icon: "code",
        skills: [
          { name: "TypeScript", color: "#3178c6" },
          { name: "JavaScript", color: "#f7df1e" },
          { name: "React 18/19", color: "#61dafb" },
          { name: "Next.js", color: "#ffffff" },
        ],
      },
      {
        title: "AI Power Tools",
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
        issuedLabel: "April 2026", // TODO during Task 33: replace with exact Credly issue date
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
    subtitle: "Highlights from my professional career and personal achievements.",
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
        title: "AI Code Quality Validator",
        shortDesc:
          "Internal tool to evaluate and benchmark LLM code generation quality.",
        longDesc:
          "Developed an internal system to audit code generated by AI models. Built automated validation pipelines using AST analysis that process hundreds of code snippets daily, ensuring outputs met rigorous technical standards defined by Senior Tech Leads. Used to benchmark and improve AI-generated code quality across the team.",
        tech: ["Node.js", "AST Analysis", "TypeScript", "AI Evaluation"],
        confidential: true,
        image: "/assets/code-validator.webp",
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
  contact: {
    title: "Let's Build Something at Scale",
    subtitle:
      "Looking for a Full Stack Engineer who owns features end-to-end and builds scalable backend services? Let's talk.",
    cta: "Send Me a Message",
    mailtoSubject: "Contact from Portfolio",
    mailtoBody: "Hi Jair,\n\nI found your portfolio and would like to discuss...",
  },
  footer: {
    copyright: (year: number) => `© ${year} Jair Mera.`,
    builtWith: "Built with",
  },
  about: {
    h1Part1: "About ",
    h1Highlight: "Me",
    paragraph1:
      "Thanks for stopping by. I'm Jair Mera, a backend-leaning Full Stack Engineer based in Ecuador with a passion for building scalable Node.js services on AWS, leveraging serverless architectures, and accelerating delivery with AI tooling.",
    paragraph2:
      "I've always been passionate about technology. Since childhood, I've been fascinated by computers, which led me to pursue Software Engineering in 2021. Today, I combine my technical expertise with AI-powered tools to deliver high-quality, production-ready solutions faster.",
    portraitAlt: "Jair Mera at work",
    backgroundTitle: "Background",
    educationTitle: "Education",
    universityName: "Technical University of Ambato",
    universityDegree: "Software Engineering (2021 - Present)",
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
    englishLevel: "(B2)",
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
