import type { ReactNode } from "react";
import type { ClientLogoSliderItem } from "@/components/ui/CarouselSliderClient";
import type { FaqAccordionItem } from "@/components/ui/AccordionClient";

// ── Icon Name Types ──
export type BigCommerceIconName = string;
export type MagentoMigrationIconName = string;
export type MagentoPlusIconName = string;
export type MagentoServiceIconName = string;
export type MigrationPlatformIconName = string;
export type OnlineStore20IconName = string;
export type WooCommerceMigrationIconName = string;
export type AstraFeatureIconName = string;
export type AstraBenefitIconName = string;
export type AstraServiceIconName = string;
export type BlocksyFeatureIconName = string;
export type BlocksyBenefitIconName = string;
export type BlocksyServiceIconName = string;
export type BloghashFeatureIconName = string;
export type BloghashBenefitIconName = string;
export type BloghashServiceIconName = string;
export type ExtendableFeatureIconName = string;
export type ExtendableBenefitIconName = string;
export type ExtendableServiceIconName = string;
export type GeneratepressFeatureIconName = string;
export type GeneratepressBenefitIconName = string;
export type GeneratepressServiceIconName = string;
export type GoFeatureIconName = string;
export type GoBenefitIconName = string;
export type GoServiceIconName = string;
export type HelloBizFeatureIconName = string;
export type HelloBizBenefitIconName = string;
export type HelloBizServiceIconName = string;
export type HelloElementorFeatureIconName = string;
export type HelloElementorBenefitIconName = string;
export type HelloElementorServiceIconName = string;
export type InspiroFeatureIconName = string;
export type InspiroBenefitIconName = string;
export type InspiroServiceIconName = string;
export type KadenceFeatureIconName = string;
export type KadenceBenefitIconName = string;
export type KadenceServiceIconName = string;
export type KubioFeatureIconName = string;
export type KubioBenefitIconName = string;
export type KubioServiceIconName = string;
export type NeveFeatureIconName = string;
export type NeveBenefitIconName = string;
export type NeveServiceIconName = string;
export type NewsbloggerFeatureIconName = string;
export type NewsbloggerBenefitIconName = string;
export type NewsbloggerServiceIconName = string;
export type OceanwpFeatureIconName = string;
export type OceanwpBenefitIconName = string;
export type OceanwpServiceIconName = string;
export type PopularfxFeatureIconName = string;
export type PopularfxBenefitIconName = string;
export type PopularfxServiceIconName = string;
export type RoyalElementorKitFeatureIconName = string;
export type RoyalElementorKitBenefitIconName = string;
export type RoyalElementorKitServiceIconName = string;
export type YithWonderFeatureIconName = string;
export type YithWonderBenefitIconName = string;
export type YithWonderServiceIconName = string;

// ── Hero & Trust Types ──
export type HeroBadge = {
  label?: string;
  name?: string;
  icon?: string;
  src?: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};

export type ServiceHeroReviewItem = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  ratingText?: string;
  countText?: string;
  reviewUrl?: string;
  sourceText?: string;
  platform?: string;
  reviewCount?: string;
  rating?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  href?: string;
};

export type ServiceHeroCoBranding = {
  leftLogo: { src: string; alt: string; width: number; height: number };
  separator: { src: string; alt: string; width: number; height: number };
  rightLogo: { src: string; alt: string; width: number; height: number };
};

export type ServiceHeroContent = {
  title: string | readonly string[];
  description?: string | readonly string[];
  subheading?: string | readonly string[];
  secondaryDescription?: string | readonly string[];
  paragraphs?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageContainerClassName?: string;
  reviews?: readonly ServiceHeroReviewItem[];
  coBranding?: ServiceHeroCoBranding;
  maxWidthClassName?: string;
  eyebrows?: readonly string[];
  videoSrc?: string;
  badges?: readonly {
    name?: string;
    label?: string;
    src: string;
    href: string;
    alt: string;
    width: number;
    height: number;
  }[];
  videoLogo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ServiceHeroVideoContent = {
  eyebrow?: string;
  eyebrowSpans?: readonly [string, string] | readonly string[];
  title: string;
  titleAccent?: string;
  subtitle?: string;
  lead?: string;
  description?: string;
  body?: string;
  paragraphs?: readonly (string | readonly string[])[];
  cta?: string;
  ctaHref?: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
  video?: string;
  videoPoster?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };
  badges?: readonly HeroBadge[];
};

export type CityPageHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  label?: string;
  name?: string;
};

export type CityPageHeroSlide = {
  src?: string;
  image?: string;
  alt?: string;
  imageAlt?: string;
  title?: string;
  width?: number;
  height?: number;
};

export type CityPageHeroTabletSlider = {
  slides?: readonly CityPageHeroSlide[];
  items?: readonly CityPageHeroSlide[];
  topBadge?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bottomBadge?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bgShapeSrc?: string;
};

export type CityPageHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  badges?: readonly CityPageHeroBadge[];
  tabletSlider?: CityPageHeroTabletSlider;
};

export type CityPageCounterItem = {
  value: string;
  label: string;
  subLabel?: string;
};

export type CityPageCounterContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly CityPageCounterItem[];
};

export type CityWhyChooseBoxItem = {
  subtitle?: string;
  title: string | readonly string[];
  description: string | readonly string[];
  icon?: string;
  iconAlt?: string;
  iconNode?: ReactNode;
};

export type CityWhyChooseBoxesContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly CityWhyChooseBoxItem[];
};

// ── Service & Grid Types ──
export type FeatureGridItem = {
  title: string | readonly string[];
  description: string | readonly string[];
  icon?: string;
  iconAlt?: string;
  iconSvg?: ReactNode;
  linkText?: string;
  linkUrl?: string;
  href?: string;
  link?: string;
  bullets?: readonly string[];
};

export type ThemeCustomizationBox = {
  number?: string;
  icon?: ReactNode;
  iconWrapperClassName?: string;
  title: string | readonly string[];
  badge?: string;
  description?: string | readonly string[];
};

export type ThemeCustomizationServicesContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  boxes: readonly ThemeCustomizationBox[];
  bottomNote?: string;
};

export type NumberedGridItem = {
  number: string;
  title: string;
  description: string;
};

export type MigrationServiceCard = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel?: string;
};

export type StageServiceItem = {
  tag?: string;
  title: string;
  description: string;
  pills?: readonly string[];
  cta?: {
    label: string;
    href: string;
  } | null;
};

export type ShopifyStageServicesContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly StageServiceItem[];
};

export type TeamBoxItem = {
  title: string;
  description: string;
};

export type ShopifyTeamBoxesContent = {
  eyebrow?: string;
  heading: string;
  description: string | readonly string[];
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  items: readonly TeamBoxItem[];
};

export type CounterItem = {
  value: string;
  label: string;
};

export type WhiteLabelCounterContent = {
  heading?: string;
  counters: readonly CounterItem[];
};

export type AgencyServiceItem = {
  icon?: string;
  iconAlt?: string;
  iconSvg?: ReactNode;
  title: string | readonly string[];
  description: string | readonly string[];
  bullets?: readonly string[];
  href?: string;
  link?: string;
};

export type AgencyServicesContent = {
  eyebrow?: string;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  subtitle?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly any[];
  boxes?: readonly any[];
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  [key: string]: any;
};

export type TechnologyCategoryItem = {
  category: string;
  technologies: readonly string[];
};

export type TechnologiesWorkWithContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  categories: readonly TechnologyCategoryItem[];
};

export type EvaluationFrameworkItem = {
  title: string | readonly string[];
  description: string | readonly string[];
};

export type EvaluationFrameworkContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly EvaluationFrameworkItem[];
};

// ── Mobile App Types ──
export type MobileAppHeroBadge = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

export type MobileAppHeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MobileAppHeroContent = {
  eyebrows?: readonly string[];
  title: string;
  titleAccent?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  badges?: readonly MobileAppHeroBadge[];
  mobileBadgeLayout?: "divided" | "row";
  slides: readonly MobileAppHeroSlide[];
  frameImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type PortfolioAppLink = {
  platform?: "ios" | "android" | "web" | string;
  url?: string;
  label?: string;
  href?: string;
  icon?: string;
};

export type MobileAppWorkItem = {
  id?: string;
  name: string;
  category?: string;
  image: string;
  imageAlt: string;
  href?: string | null;
  appLinks?: readonly PortfolioAppLink[];
};

export type MobileAppWorkSecondaryCta = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export type MobileAppWorkContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly MobileAppWorkItem[];
  ctaHref: string;
  ctaLabel: string;
  ctaAriaLabel?: string;
  secondaryCta?: MobileAppWorkSecondaryCta;
};

export type ShopifyAppBenefitItem = {
  icon: string;
  iconAlt: string;
  title?: string;
  description: string;
};

export type ShopifyAppFeatureItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type ShopifyAppProcessStep = {
  icon?: string;
  iconAlt?: string;
  title: string | readonly string[];
  description: string | readonly string[];
};

// ── Pricing & Engagement Types ──
export type PricingEngagementItem = {
  label: string;
  badge: string;
  price: string;
  description: string;
  bullets?: readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export type PricingEngagementContent = {
  eyebrow?: string;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly any[];
  [key: string]: any;
};

// ── Process & Migration Types ──
export type ProcessStepItem = {
  step: string;
  title: string;
  description: string;
};

export type OurDevelopmentProcessContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: readonly ProcessStepItem[];
};

export type MigrationProcessCategory = {
  title: string;
  items: readonly string[];
};

export type MigrationProcessSubBox = {
  title?: string;
  description?: string;
  items?: readonly string[];
};

export type MigrationProcessStepItem = {
  stepNumber: string;
  title: string | readonly string[];
  description: string | readonly string[];
  categories?: readonly MigrationProcessCategory[];
  subBoxes?: readonly MigrationProcessSubBox[];
};

export type MigrationProcessContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  steps: readonly MigrationProcessStepItem[];
};

export type UrlMappingItem = {
  source: string;
  statusCode?: string;
  target: string;
};

export type SeoSafeMigrationContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  tags: readonly string[];
  urlMappings: readonly UrlMappingItem[];
  checks: readonly string[];
};

export type WhyChooseMigrationItem = {
  icon?:
    | "certified"
    | "verticals"
    | "team"
    | "design"
    | "expertise"
    | "qa"
    | "support"
    | "shopify-bag"
    | "custom-build"
    | "long-term-support"
    | string;
  iconSvg?: ReactNode;
  title?: string;
  description: string;
};

export type WhyChooseMigrationStat = {
  value: string;
  label: string;
};

export type WhyChooseMigrationContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly WhyChooseMigrationItem[];
  partnerLogo: string;
  partnerLogoAlt: string;
  logoHref?: string;
  partnerHeading: string;
  partnerDescription: string;
  stats: readonly WhyChooseMigrationStat[];
  partnerLink: {
    label: string;
    href: string;
  };
};

// ── Showcase, Testimonial & Case Study Types ──
export type PortfolioShowcaseItem = {
  name: string;
  href?: string | null;
  image: string;
  imageAlt: string;
  category?: string;
  platformMark?: { src: string; width: number; height: number };
};

export type PortfolioShowcaseSectionProps = {
  content: {
    heading: string | readonly string[];
    description?: string | readonly string[];
    eyebrow?: string;
    items: readonly PortfolioShowcaseItem[];
    category?: string;
    platformMark?: { src: string; width: number; height: number };
    ctaLabel?: string;
    ctaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
  columns?: 2 | 3 | 4;
  cardVariant?: "default" | "ourWorkRefresh";
  imageAspectClassName?: string;
  categoryClassName?: string;
  descriptionBreakClassName?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  headingBreakClassName?: string;
  headerLayout?: "centered" | "split";
  itemsClassName?: string;
  variant?: "default" | "liveGrid";
  sectionId?: string;
};

export type CaseStudyPreviewItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  technology: string;
  industry: string;
  tags?: readonly string[];
  ctaLabel?: string;
};

export type HappyClientTestimonialItem = {
  name: string;
  company: string;
  quote: string | readonly string[];
  videoId: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export type AiDeliveryTool = {
  name: string;
  description: string;
};

export type AiEmpoweredDeliveryContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  tools: readonly AiDeliveryTool[];
  callout?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type IndustriesServedContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  bottomDescription?: string;
  items: readonly {
    image: string;
    imageAlt: string;
    title: string;
    eyebrow?: string;
    description: string;
    href?: string;
  }[];
};

export type IndustryCustomDevelopmentContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  items: readonly string[];
};

export type PillListContent = {
  heading: string | readonly string[];
  items: readonly string[];
  description: string | readonly string[];
};

export type ArchitecturePatternItem = {
  label: string;
  title: string;
  description: string;
  stack: string;
};

export type RecentArchitecturePatternsContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly ArchitecturePatternItem[];
};

export type LetsBuildContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

export type ProofSectionItem = {
  title: string | readonly string[];
  description: string | readonly string[];
  icon: string;
  iconAlt: string;
};

export type ProofSectionContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  items: readonly ProofSectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
};

export type ThemeWhyChooseItem = {
  title: string | readonly string[];
  description: string | readonly string[];
  icon: string;
  iconAlt: string;
};

export type ThemeWhyChooseSectionProps = {
  content: {
    title: string | readonly string[];
    subtitle: string | readonly string[];
    items: readonly ThemeWhyChooseItem[];
  };
  backgroundVariant?: "gradient" | "white";
  id?: string;
  preserveDesktopTypography?: boolean;
  preserveLiveIconSize?: boolean;
  variant?: "left-icon" | "top-icon" | "top-icon-mobile";
};

export type ThemeCustomizationTechItem = {
  title?: string;
  name?: string;
  icon?: string;
  image?: string;
  alt?: string;
  gradient?: string;
};

export type ShopifyThemeTechSectionProps = {
  content: {
    title: string | readonly string[];
    subtitle?: string | readonly string[];
    bottomDescription?: string | readonly string[];
    items: readonly ThemeCustomizationTechItem[];
  };
  columns?: 3 | 5;
};

export type ThemeHeroContent = {
  eyebrow?: string | readonly string[];
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryCtaAriaLabel?: string;
  secondaryCtaTarget?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type ThemeFeaturesBannerContent = {
  eyebrow?: string;
  title?: string;
  heading?: string;
  description?: string;
  items: readonly string[];
};

// ── Template Types ──
export type ShopifyCityLandingContent = {
  sectionCopy?: {
    faqHeading?: string;
    portfolioCta?: string;
    portfolioEyebrow?: string;
    testimonialsEyebrow?: string;
    [key: string]: any;
  };
  hero: CityPageHeroContent;
  brands?: {
    title?: string;
    heading?: string;
    items: readonly ClientLogoSliderItem[];
  };
  counter?: CityPageCounterContent;
  counters?: CityPageCounterContent;
  whyChoose?: CityWhyChooseBoxesContent;
  whyChooseBoxes?: CityWhyChooseBoxesContent;
  services?: AgencyServicesContent;
  agencyServices?: AgencyServicesContent;
  process?: OurDevelopmentProcessContent;
  whyDynamicDreamz?: CityWhyChooseBoxesContent;
  portfolio?: any;
  testimonials?: any;
  faqs?: readonly FaqAccordionItem[];
  ctaBanner?: any;
  bookIntroCall?: any;
  reasons?: any;
};

export type ShopifyThemeCustomizationContent = {
  hero: ThemeHeroContent;
  brands: {
    title: string;
    items: readonly ClientLogoSliderItem[];
  };
  features: ThemeFeaturesBannerContent;
  benefits: CityWhyChooseBoxesContent;
  services: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: AgencyServicesContent["items"];
  };
  whyChoose: EvaluationFrameworkContent;
  portfolio?: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  faqsHeading: string;
  faqs: readonly FaqAccordionItem[];
};

export type WordPressThemeCustomizationContent = {
  hero: ThemeHeroContent;
  brands: {
    heading: string;
    slug?: string;
    items: readonly ClientLogoSliderItem[];
  };
  features: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  services: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly {
      iconName: string;
      title: string;
      description: string;
    }[];
  };
  whyChoose: EvaluationFrameworkContent;
  portfolio?: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  faqsHeading: string;
  faqs: readonly FaqAccordionItem[];
  testimonials: readonly HappyClientTestimonialItem[];
};

export type WordPressCityLandingContent = {
  sectionCopy?: {
    faqHeading?: string;
    portfolioCta?: string;
    portfolioEyebrow?: string;
    testimonialsEyebrow?: string;
    [key: string]: any;
  };
  hero: CityPageHeroContent;
  brands?: {
    title?: string;
    heading?: string;
    items: readonly ClientLogoSliderItem[];
  };
  counter?: CityPageCounterContent;
  counters?: CityPageCounterContent;
  process?: OurDevelopmentProcessContent;
  whyChooseBoxes?: CityWhyChooseBoxesContent;
  whyDynamicDreamz?: CityWhyChooseBoxesContent;
  agencyServices?: AgencyServicesContent;
  services?: AgencyServicesContent;
  portfolio?: any;
  testimonials?: any;
  faqsHeading?: string;
  faqs?: readonly FaqAccordionItem[];
  ctaBanner?: any;
  reasons?: any;
};
