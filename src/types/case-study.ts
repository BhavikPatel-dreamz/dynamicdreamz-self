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

export type CaseStudyDetail = {
  slug: string;
  clientName: string;
  title: string;
  summary: string;
  industry: string;
  technology: string;
  location: string;
  archive: CaseStudyArchiveContent;
  hero: {
    image: CaseStudyImage;
  };
  sections: CaseStudyNarrativeSection[];
  wireframes: CaseStudyShowcase | null;
  colors: CaseStudyColor[];
  typefaces: CaseStudyTypeface[];
  design: CaseStudyDesignShowcase | null;
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
};
