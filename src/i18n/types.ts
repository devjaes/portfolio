export type Locale = "en" | "es";

export const LOCALES: readonly Locale[] = ["en", "es"] as const;

export const DEFAULT_LOCALE: Locale = "en";

export interface ExperienceEntry {
  title: string;
  company: string;
  date: string;
  badges: string[];
  current?: boolean;
  relatedProjects?: string;
  points: string[];
}

export interface SkillCategory {
  title: string;
  icon: "code" | "sparkles" | "server" | "terminal";
  highlight?: boolean;
  dailyBadge?: string;
  skills: { name: string; color?: string }[];
}

export interface PhilosophyCard {
  title: string;
  icon: "layers" | "shield" | "rocket";
  description: string;
  highlight?: boolean;
  highlightLabel?: string;
}

export interface FeaturedProject {
  title: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  link?: string;
  slug?: string;
  confidential?: boolean;
  confidentialLabel?: string;
  image?: string;
}

export interface WorkStat {
  value: string;
  label: string;
}

export interface WorkCard {
  title: string;
  context?: string;
  description: string;
  tech: string[];
  highlight?: string;
  stats?: WorkStat[];
  link?: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
}

export interface Work {
  flagshipTitle: string;
  flagshipSubtitle: string;
  moreTitle: string;
  moreSubtitle: string;
  earlierTitle: string;
  earlierSubtitle: string;
  viewProjectLabel: string;
  currentlyBuildingTitle: string;
  currentlyBuildingSubtitle: string;
  inProgressLabel: string;
  building: WorkCard[];
  flagship: WorkCard[];
  more: WorkCard[];
  earlier: WorkCard[];
}

export interface Cert {
  title: string;
  issuer: string;
  issuedLabel: string;
  statusLabel: string;
  skills: string[];
  verifyLabel: string;
  verifyUrl: string;
  badgeImage: string;
  badgeAlt: string;
}

export interface Translations {
  meta: {
    siteTitle: string;
    siteDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    workTitle: string;
    workDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    about: string;
    menuLabel: string;
  };
  hero: {
    roleBadge: string;
    awsCertPill: string;
    awsCertVerifyUrl: string;
    locationPill: string;
    headlinePart1: string;
    headlineHighlight1: string;
    headlinePart2: string;
    headlineHighlight2: string;
    headlinePart3: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
    portraitAlt: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    cards: PhilosophyCard[];
  };
  techStack: {
    title: string;
    subtitle: string;
    coreLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    currentLabel: string;
    relatedProjectsLabel: string;
    entries: ExperienceEntry[];
  };
  skills: {
    title: string;
    subtitle: string;
    dailyLabel: string;
    categories: SkillCategory[];
  };
  certifications: {
    title: string;
    subtitle: string;
    activeLabel: string;
    issuedLabel: string;
    skillsCoveredLabel: string;
    verifyLabel: string;
    items: Cert[];
  };
  featured: {
    title: string;
    subtitle: string;
    confidentialLabel: string;
    projects: FeaturedProject[];
  };
  work: Work;
  archive: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  footer: {
    copyright: (year: number) => string;
    builtWith: string;
  };
  about: {
    h1Part1: string;
    h1Highlight: string;
    paragraph1: string;
    paragraph2: string;
    portraitAlt: string;
    backgroundTitle: string;
    educationTitle: string;
    universityName: string;
    universityDegree: string;
    highSchoolName: string;
    highSchoolDegree: string;
    honorsTitle: string;
    honor1Title: string;
    honor1Desc: string;
    honor2Title: string;
    honor2Desc: string;
    languagesTitle: string;
    spanishLabel: string;
    spanishLevel: string;
    englishLabel: string;
    englishLevel: string;
    softTitle: string;
    softCards: { title: string; description: string }[];
  };
  notFound: {
    title: string;
    subtitle: string;
    cta: string;
  };
  langToggle: {
    en: string;
    es: string;
    ariaLabel: string;
  };
  workPage: {
    title: string;
    subtitle: string;
    backLink: string;
  };
}
