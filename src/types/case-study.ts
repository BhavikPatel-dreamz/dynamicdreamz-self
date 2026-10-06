export type CaseStudyImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudyCard = {
  heading: string;
  html: string;
  image: CaseStudyImage | null;
};

export type CaseStudyNarrativeSection = {
  heading: string;
  html: string;
  image: CaseStudyImage | null;
  cards: CaseStudyCard[];
};

export type CaseStudyShowcase = {
  heading: string;
  html: string;
  image: CaseStudyImage | null;
};

export type CaseStudyDesignShowcase = CaseStudyShowcase & {
  backgroundImage?: string;
};

export type CaseStudyColor = {
  label: string;
  value: string;
};

export type CaseStudyTypeface = {
  image: CaseStudyImage | null;
  html: string;
};

export type CaseStudyArchiveContent = {
  title: string;
  technology: string;
  industry: string;
  excerpt: string;
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

export type CaseStudyKeyFeatureItem = {
  number: string;
  title: string;
  description?: string;
};

export type CaseStudyKeyFeatures = {
  eyebrow?: string;
  heading: string;
  isTwoColumn?: boolean;
  items: CaseStudyKeyFeatureItem[];
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

export type CaseStudyCustomSection = {
  className: string;
  html: string;
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
  sections: CaseStudyNarrativeSection[];
  wireframes: CaseStudyShowcase | null;
  colors: CaseStudyColor[];
  typefaces: CaseStudyTypeface[];
  design: CaseStudyDesignShowcase | null;
  keyMetrics?: CaseStudyKeyMetrics;
  challenge?: CaseStudyChallenge;
  solutions?: CaseStudySolutions;
  keyFeatures?: CaseStudyKeyFeatures;
  projectDelivery?: CaseStudyProjectDelivery;
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
