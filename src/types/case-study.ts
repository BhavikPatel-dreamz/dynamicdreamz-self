export type CaseStudyImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudyShowcase = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  desktopImage: CaseStudyImage;
  mobileImage?: CaseStudyImage;
};

export type CaseStudyArchiveContent = {
  title: string;
  technology: string;
  industry: string;
  excerpt: string;
  tags?: string[];
};

export type CaseStudyKeyMetricItem = {
  stat: string;
  label: string;
};

export type CaseStudyKeyMetrics = {
  heading: string;
  items: CaseStudyKeyMetricItem[];
};

export type CaseStudyChallengeItem = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudyChallenge = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: CaseStudyChallengeItem[];
};

export type CaseStudySolutionItem = {
  number: string;
  text: string;
};

export type CaseStudySolutions = {
  eyebrow?: string;
  heading: string;
  lead: string;
  items: CaseStudySolutionItem[];
};

export type CaseStudyKeyFeatureTable = {
  headers: string[];
  rows: string[][];
};

export type CaseStudyKeyFeatureItem = {
  number: string;
  title: string;
  description?: string;
  label?: string;
  table?: CaseStudyKeyFeatureTable;
};

export type CaseStudyKeyFeatures = {
  eyebrow?: string;
  heading: string;
  description?: string;
  isTwoColumn?: boolean;
  items: CaseStudyKeyFeatureItem[];
};

export type CaseStudyPlatformArchitectureNode = {
  variant?: "primary" | "accent" | "default";
  category: string;
  title: string;
};

export type CaseStudyPlatformArchitectureRow = {
  showArrowAfter?: boolean;
  nodes: CaseStudyPlatformArchitectureNode[];
};

export type CaseStudyPlatformArchitecture = {
  eyebrow?: string;
  heading: string;
  description?: string;
  coreRuleLabel?: string;
  coreRuleText?: string;
  flowRows: CaseStudyPlatformArchitectureRow[];
};

export type CaseStudyPerformanceRow = {
  title: string;
  detail: string;
  metric: string;
};

export type CaseStudySecurityItem = {
  title: string;
  description: string;
};

export type CaseStudyPerformanceSecurity = {
  eyebrow?: string;
  heading: string;
  description?: string;
  leftTitle: string;
  leftSubtitle?: string;
  leftDescription?: string;
  leftRows: CaseStudyPerformanceRow[];
  leftNote?: string;
  rightTitle?: string;
  rightDescription?: string;
  rightItems?: CaseStudySecurityItem[];
  rightNote?: string;
};

export type CaseStudyMeasuredResultItem = {
  stat: string;
  label: string;
  note?: string;
};

export type CaseStudyMeasuredResults = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: CaseStudyMeasuredResultItem[];
};

export type CaseStudyTeamChip = {
  count: string;
  role: string;
};

export type CaseStudyProcessStep = {
  number: string;
  text: string;
};

export type CaseStudyTeamProcess = {
  eyebrow?: string;
  heading: string;
  teamChips: CaseStudyTeamChip[];
  processHeading: string;
  processDescription?: string;
  processSteps: CaseStudyProcessStep[];
};

export type CaseStudyProjectDeliveryItem = {
  category?: string;
  name: string;
};

export type CaseStudyProjectDelivery = {
  eyebrow?: string;
  heading: string;
  items: CaseStudyProjectDeliveryItem[];
};

export type CaseStudyProjectTakeawayParagraph = {
  text: string;
  highlight?: boolean;
};

export type CaseStudyProjectTakeaway = {
  eyebrow?: string;
  heading: string;
  paragraphs: CaseStudyProjectTakeawayParagraph[];
};

export type CaseStudyCustomSectionItem = {
  title?: string;
  description?: string;
  number?: string;
  note?: string;
};

export type CaseStudyCustomSection = {
  eyebrow?: string;
  heading: string;
  lead?: string;
  description?: string;
  items?: CaseStudyCustomSectionItem[];
  takeaways?: string[];
};

export type CaseStudyDetail = {
  slug: string;
  clientName: string;
  title: string;
  summary: string;
  projectTitle?: string;
  industry: string;
  technology: string;
  location: string;
  websiteUrl?: string;
  heroEyebrows?: string[];
  archive: CaseStudyArchiveContent;
  hero: {
    image: CaseStudyImage;
  };
  keyMetrics?: CaseStudyKeyMetrics;
  showcaseTop?: CaseStudyShowcase;
  challenge?: CaseStudyChallenge;
  solutions?: CaseStudySolutions;
  platformArchitecture?: CaseStudyPlatformArchitecture;
  keyFeatures?: CaseStudyKeyFeatures;
  performanceSecurity?: CaseStudyPerformanceSecurity;
  showcaseBottom?: CaseStudyShowcase;
  measuredResults?: CaseStudyMeasuredResults;
  teamProcess?: CaseStudyTeamProcess;
  projectDelivery?: CaseStudyProjectDelivery;
  projectTakeaway?: CaseStudyProjectTakeaway;
  relatedCaseStudies?: string[];
  customSections?: CaseStudyCustomSection[];
  seo: {
    title: string;
    description: string;
    lastModified: string;
  };
};

export type CaseStudyItem = {
  slug: string;
  title: string;
  technology: string;
  industry: string;
  excerpt: string;
  image: string;
  alt: string;
  href: string;
  tags: readonly string[];
};
