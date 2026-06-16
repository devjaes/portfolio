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
  green?: boolean;
  diff?: boolean;
}

export type WorkStatus = "ship" | "build" | "paused" | "down";

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
  symbol?: string;
  status?: WorkStatus;
  viz?: "up" | "down";
  vizLabel?: string;
  offline?: boolean;
  year?: string;
}

export interface ArchNode {
  name: string;
  badge: string;
  desc: string;
  accent?: boolean;
}

export interface ArchColumn {
  cap: string;
  nodes: ArchNode[];
}

export interface Tickbase {
  statusLabel: string;
  archTitle: string;
  dataFlowLabel: string;
  archLinkLabel: string;
  metrics: { value: string; label: string }[];
  columns: ArchColumn[];
}

export interface Watching {
  title: string;
  subtitle: string;
  chartSymbol: string;
  chartMeta: string;
  chartPrice: string;
  chartChange: string;
  chartNote: string;
  chartLive: string;
  readingTitle: string;
  reading: { title: string; tag: string }[];
}

export interface AboutAward {
  place: string;
  suffix: string;
  tier: "gold" | "bronze";
  title: string;
  org: string;
  desc: string;
  when: string;
}

export interface AboutPage {
  dashboardLabel: string;
  crumbCurrent: string;
  cardName: string;
  cardRole: string;
  cardStatus: string;
  qstats: { label: string; value: string }[];
  kicker: string;
  headline: string;
  paragraphs: string[];
  honorsTitle: string;
  honorsSub: string;
  awards: AboutAward[];
  backgroundTitle: string;
  backgroundSub: string;
  educationLabel: string;
  eduDegree: string;
  eduOrg: string;
  eduYears: string;
  eduProgressPct: string;
  eduProgressLabel: string;
  languagesLabel: string;
  languages: { name: string; level: string; pct: string }[];
  certLabel: string;
  certTitle: string;
  certStatus: string;
  ctaKicker: string;
  ctaTitle: string;
  viewWorkLabel: string;
}

export interface HeroCard {
  barSymbol: string;
  barStatus: string;
  photoTag: string;
  metaLabel: string;
  statusTitle: string;
  statusLine1: string;
  statusLine2: string;
  stackLabel: string;
  stackValue: string;
  certLabel: string;
  certValue: string;
  zoneLabel: string;
  zoneValue: string;
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
  statusLabels: { ship: string; build: string; paused: string; down: string };
  earlierColumns: { sym: string; project: string; what: string; signal: string; stack: string; year: string };
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
    building: string;
    contact: string;
    statusOpen: string;
    commandLabel: string;
    scrollTop: string;
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
    headline: string;
    tagline: string;
    subLead: string;
    awsChip: string;
    viewExperienceCta: string;
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
  aboutPage: AboutPage;
  heroCard: HeroCard;
  tickbase: Tickbase;
  watching: Watching;
  tweaks: {
    toggleLabel: string;
    accentLabel: string;
    gridLabel: string;
    gridOff: string;
    gridSubtle: string;
    gridStrong: string;
    densityLabel: string;
    densityComfortable: string;
    densityCompact: string;
  };
  commandPalette: {
    placeholder: string;
    openLabel: string;
    navHint: string;
    runHint: string;
    escHint: string;
    emptyLabel: string;
    descriptions: Record<string, string>;
  };
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
