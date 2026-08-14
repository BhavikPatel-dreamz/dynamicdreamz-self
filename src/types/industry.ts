export type IndustryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type IndustryDeliverable = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  width: number;
  height: number;
};

export type IndustrySolution = {
  title: string;
  subtitle: string;
  description: string;
  additionalDescriptions?: readonly string[];
  image: IndustryImage;
  imagePosition?: "start" | "end";
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
};

export type IndustryPortfolioItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  platformLogo: string;
  platformAlt: string;
  platformWidth: number;
  platformHeight: number;
};

export type IndustryPageContent = {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    descriptionBeforeBreak: string;
    descriptionAfterBreak: string;
    image: IndustryImage;
  };
  brands: {
    ariaLabel: string;
  };
  solutions: IndustrySolution | readonly IndustrySolution[];
  deliverables: {
    title: string;
    description: string;
    ariaLabel: string;
    items: readonly IndustryDeliverable[];
  };
  portfolio: {
    title: string;
    description: string;
    items: readonly IndustryPortfolioItem[];
  };
};
