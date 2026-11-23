import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/class-names";
import { getBlockBackgroundCategory, shouldCollapseTopPadding } from "@/lib/section-spacing";
import { appmakerHeroCoBranding } from "@/content/appmaker-shopify-mobile-app-development";
import { mobileAppSharedCopy } from "@/content/common";
import { shopifyPlusAgencyWhyChoose } from "@/content/shopify-plus-agency";
import { shopifyMigrationWhyChoose, shopifyMigrationServicesContent } from "@/content/shopify-migration";
import { fullStackDevelopmentTechnologiesContent } from "@/content/full-stack-development";

// Active Section Components
import {
  ContactHeroSection,
  ContactOfficesSection,
  ContactDetailsSection,
} from "@/components/sections/contact-page";
const ContactFormSection = dynamic(() =>
  import("@/components/sections/contact-page").then((m) => m.ContactFormSection),
);
const FormBlock = dynamic(() =>
  import("@/components/sections/form-section").then((m) => m.FormBlock),
);
const RequestQuotePage = dynamic(() =>
  import("@/components/sections/request-quote-page").then((m) => m.RequestQuotePage),
);
const CareerApplyNowPage = dynamic(() =>
  import("@/components/sections/career-apply-now/career-apply-now-page").then(
    (m) => m.CareerApplyNowPage,
  ),
);
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { CityPageHeroSection } from "@/components/sections/city-page-hero-section";
import { SplitImageHeroSection } from "@/components/sections/split-image-hero-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";

// Universal Master Blocks Section Components
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { HomeFaqSection } from "@/components/sections/home/home-faq-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { ImageCtaSection } from "@/components/sections/image-cta-section";
import { WhiteLabelFinalCtaSection } from "@/components/sections/white-label/white-label-closing-sections";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-card";
import { getPayloadAdaptedTestimonials } from "@/lib/payload";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { resolveThemeIcon } from "@/lib/theme-icon-resolver";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ProofCounterSection } from "@/components/sections/proof-counter-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import { ShopifyTeamBoxesSection } from "@/components/sections/shopify-team-boxes-section";
import { ShopifyPlusProofSection } from "@/components/sections/shopify-plus-agency/shopify-plus-proof-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import { ShopifyHorizontalProcessSection } from "@/components/sections/shopify-horizontal-process-section";
import { NumberedProcessTimelineSection } from "@/components/sections/numbered-process-timeline-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { AboutTimelineSection } from "@/components/sections/about/about-timeline-section";
import { AboutFoundersSection } from "@/components/sections/about/about-founders-section";
import { LifeGallerySection } from "@/components/sections/life-dynamicdreamz/life-gallery-section";
import { OurWorkProjectsSection } from "@/components/sections/our-work/our-work-projects-section";
import { ShopifyHoursComparisonSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-content-sections";
import { ShopifyCroBarriersSection } from "@/components/sections/shopify-cro/shopify-cro-barriers-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { DeliveryModelComparisonSection } from "@/components/sections/white-label-shopify/delivery-model-comparison-section";
import { ShopifyB2BApproachSection } from "@/components/sections/shopify-b2b/shopify-b2b-approach-section";
import { ResourcesHubSection } from "@/components/sections/resources/resources-hub-section";

// Extended Master Block Section Components (Phase 2.5 Variants)
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { CareerHeroSection } from "@/components/sections/career/career-hero-section";
import { LifeHeroSection } from "@/components/sections/life-dynamicdreamz/life-hero-section";
import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section";
import { ShopifyHoursHeroSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-hero-section";
import { IndustryHeroSection } from "@/components/sections/industry/industry-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { CredentialEvidenceSection } from "@/components/sections/shopify-certified-developers/credential-evidence-section";
import { MigrationProcessSection } from "@/components/sections/migration-process-section";
import { ShopifyAppProcessSection } from "@/components/sections/shopify-mobile-app/shopify-app-process-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { TechnologiesWorkWithSection } from "@/components/sections/technologies-work-with-section";
import { AiServicesGridSection } from "@/components/sections/ai-services-grid-section";
import { ShopifyAppFeaturesSection } from "@/components/sections/shopify-mobile-app/shopify-app-features-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { ShopifyThemesGridSection } from "@/components/sections/shopify-theme-customization/shopify-themes-grid-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { CaseStudyCardsSection } from "@/components/sections/shopify-plus-agency/case-study-cards-section";
import { WhiteLabelPartnerSection } from "@/components/sections/home/white-label-partner-section";
import { TwoColImageWithTextSection } from "@/components/sections/two-col-image-with-text-section";
import { SeoSafeMigrationSection } from "@/components/sections/shopify-migration/seo-safe-migration-section";
import { ThemeCustomizationApproachSection } from "@/components/sections/theme-customization-approach-section";
import { resolveMigrationIcon } from "@/lib/migration-icon-resolver";
import { IndustryCustomDevelopmentSection } from "@/components/sections/industry/industry-custom-development-section";

// Phase 2.5 Signature Block Section Components
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { ShopifyPlusAgencySection } from "@/components/sections/home/shopify-plus-agency-section";
import { CommerceSolutionsSection } from "@/components/sections/home/commerce-solutions-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { CredentialTabsSection } from "@/components/sections/shopify-certified-developers/credential-tabs-section";
import { PartnerDirectoryProofSection } from "@/components/sections/shopify-certified-developers/partner-directory-proof-section";
import { ShopifyCroAssessmentSection } from "@/components/sections/shopify-cro/shopify-cro-assessment-section";
import { ShopifySupportScenariosSection } from "@/components/sections/white-label-shopify/shopify-support-scenarios-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { AboutValuesSection } from "@/components/sections/about/about-values-section";
import { WorkCultureSection } from "@/components/sections/life-dynamicdreamz/work-culture-section";
import { LifeHiringSection } from "@/components/sections/life-dynamicdreamz/life-hiring-section";
import { CareerOpportunitiesSection } from "@/components/sections/career/career-opportunities-section";
import { ShopifyHoursTasksSection } from "@/components/sections/buy-shopify-development-hours/shopify-hours-content-sections";
import { ShopifyMobileAppComparisonSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-comparison-section";
import { ShopifyMobileAppHeroSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { ShopifyMobileAppDtcSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-dtc-section";
import { ShopifyMobileAppExperienceSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section";
import { ShopifyMobileAppWorkSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import { resolveMobileAppIcon, resolveServiceIcon } from "@/lib/theme-icon-resolver";
import { TextBoxSection } from "@/components/sections/shopify-plus-agency/text-box-section";
import { RecentArchitecturePatternsSection } from "@/components/sections/recent-architecture-patterns-section";
import { TechKeywordSection } from "@/components/sections/tech-keyword-section";
import { ShopifyAppsHeroSection, ShopifyAppsGridSection } from "@/components/sections/shopify-apps-page";
import { RisksShopifyTopics } from "@/components/sections/risks-shopify-topics";
import { DesignReasonsSection } from "@/components/sections/white-label-website-design/design-reasons-section";
import { WhiteLabelServicesSection } from "@/components/sections/white-label/white-label-services-section";
import { WhiteLabelWhySection } from "@/components/sections/white-label/white-label-proof-section";

// Phase 2.5 Canonical Content Fallbacks
import { shopifyPlusAgencyContent } from "@/content/home";
import { commerceSolutions } from "@/content/home-client";
import { shopifyCredentialTabs, shopifyPartnerDirectoryProof } from "@/content/shopify-certified-developers";
import { shopifyCroAssessment } from "@/content/shopify-cro-agency";
import { whiteLabelShopifyScenarios } from "@/content/white-label-shopify-development";
import { aboutStory } from "@/content/about";
import { hiringCallout } from "@/content/life-dynamicdreamz";
import { shopifyMobileAppCaseStudies } from "@/content/shopify-mobile-app-development";

// Common CMS Types
export type CmsMedia =
  | {
      id?: string | number;
      url?: string;
      alt?: string;
      width?: number;
      height?: number;
      mimeType?: string;
    }
  | string;

function resolveMediaUrl(media?: CmsMedia | null): string {
  if (!media) return "";
  if (typeof media === "string") return media;
  return media.url || "";
}

function resolveMediaAlt(media?: CmsMedia | null, fallback = ""): string {
  if (!media || typeof media === "string") return fallback;
  return media.alt?.trim() || fallback;
}

function parseTextOrArray(val: unknown): string | readonly string[] {
  if (!val) return "";
  if (Array.isArray(val)) return val;
  if (typeof val !== "string") return String(val);
  const trimmed = val.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed;
    } catch {}
  }
  if (trimmed.startsWith("{\"") && trimmed.endsWith("\"}")) {
    try {
      const parts = trimmed
        .slice(1, -1)
        .split(/","/)
        .map((p) => p.replace(/^"|"$/g, "").replace(/\\"/g, '"'));
      if (parts.length > 0) return parts.length === 1 ? parts[0] : parts;
    } catch {}
  }
  if (trimmed.startsWith("{\\\"") && trimmed.endsWith("\\\"}")) {
    try {
      const unescaped = trimmed.replace(/\\"/g, '"');
      const parts = unescaped
        .slice(1, -1)
        .split(/","/)
        .map((p) => p.replace(/^"|"$/g, ""));
      if (parts.length > 0) return parts.length === 1 ? parts[0] : parts;
    } catch {}
  }
  return val;
}

function toText(val: unknown): string {
  const parsed = parseTextOrArray(val);
  return Array.isArray(parsed) ? parsed.join(" ") : (parsed as string) || "";
}

// ---------------------------------------------------------------------------
// Block Interfaces (Matching Active Payload CMS Blocks in Pages.ts)
// ---------------------------------------------------------------------------

export interface BlockServiceHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  variant?:
    | "home"
    | "video"
    | "tablet-slider"
    | "image"
    | "reviews"
    | "centered"
    | "text-only"
    | "theme"
    | "about"
    | "career"
    | "life"
    | "our-work"
    | "resources"
    | "buy-hours"
    | "industry"
    | "mobile-app"
    | "default"
    | "shopify-plus-experts"
    | "migration";
  mobileBadgeLayout?: "divided" | "row";
  backgroundColor?: "cream" | "white";
  eyebrows?: readonly (string | { text?: string; id?: string | number })[];
  eyebrow?: string;
  eyebrowSpans?: readonly { text?: string }[];
  title: string;
  titleAccent?: string;
  titleAccentTag?: "i" | "span";
  titleAccentPosition?: "start" | "end";
  subtitle?: string;
  lead?: string;
  body?: string;
  description?: string;
  secondaryDescription?: string;
  paragraphs?: readonly (string | { text?: string; id?: string | number })[];
  cta?: string;
  ctaHref?: string;
  primaryCta?: {
    label?: string;
    href?: string;
  };
  secondaryCta?: {
    label?: string;
    href?: string;
    target?: string;
  };
  // Media - Video
  video?: string;
  videoSrc?: string;
  videoPoster?: CmsMedia;
  videoPosterSrc?: string;
  videoLogo?: {
    logo?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  // Media - Image
  image?: CmsMedia;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageBlend?: "normal" | "darken";
  imageAlignment?: "center" | "bottom";
  // Media - Tablet Slider
  slides?: readonly {
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  topBadge?: {
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  bottomBadge?: {
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  bgShape?: CmsMedia;
  bgShapeSrc?: string;
  // Media - Centered & Reviews
  showReviews?: boolean;
  maxWidth?: "default" | "wide";
  coBranding?: {
    enabled?: boolean;
    leftLogo?: { logo?: CmsMedia; src?: string; alt?: string; width?: number; height?: number };
    separator?: { logo?: CmsMedia; src?: string; alt?: string; width?: number; height?: number };
    rightLogo?: { logo?: CmsMedia; src?: string; alt?: string; width?: number; height?: number };
  };
  // Proof Badges
  badges?: readonly {
    logo?: CmsMedia;
    src?: string;
    name?: string;
    alt?: string;
    href?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockContactHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  quickLinks?: readonly { label: string; href: string }[];
}

export interface BlockContactForm {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  form?: any;
}

export interface BlockForm {
  __component?: string;
  blockType?: string;
  id?: string | number;
  form?: any;
  enableIntro?: boolean;
  introContent?: any;
  eyebrow?: string;
  title?: string;
  description?: string;
  containerWidth?: "standard" | "narrow" | "wide";
}

export interface BlockContactOffices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  directionsLabel?: string;
  offices?: readonly {
    city: string;
    address: string;
    phone: string;
    phoneHref: string;
    directionsHref: string;
  }[];
}

export interface BlockContactDetails {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
}

export interface BlockRequestQuoteHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heroTitle?: string;
  heroDescription?: string;
  formTitle?: string;
  form?: any;
  counters?: readonly {
    label: string;
    count: string;
    unit?: string;
  }[];
  badges?: readonly {
    href?: string;
    ariaLabel?: string;
    logo?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  testimonials?: readonly {
    name: string;
    quote: string;
    avatar?: CmsMedia;
  }[];
  budgetOptions?: readonly { option: string }[];
}

export interface BlockCareerApply {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
  form?: any;
}

export interface BlockBrandPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  variant?: "slider" | "grid" | "home" | "integrations" | "tools-grid" | "tech-stack";
  heading?: string;
  description?: string;
  density?: "standard" | "compact" | "flexible";
  mobileSpacing?: "standard" | "spacious";
  showHeading?: boolean;
  brands?: readonly {
    name?: string;
    row?: "1" | "2";
    logo?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    href?: string;
  }[];
}

export interface BlockFaqAccordion {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  idPrefix?: string;
  variant?: "split" | "home";
  iconVariant?: "circle-cross" | "default";
  animateOnReveal?: boolean;
  faqs?: readonly {
    question: string;
    answer: string;
  }[];
}

export interface BlockCtaBanner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  variant?: "gradient" | "image" | "white-label" | "home-white-label" | "two-col-cta";
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: {
    label?: string;
    href?: string;
    target?: string;
  };
  backgroundImage?: CmsMedia;
  backgroundImageSrc?: string;
  imagePosition?: "left" | "right";
  image?: CmsMedia;
  imageSrc?: string;
  imageAlt?: string;
  bullets?: readonly (string | { text?: string })[];
}

export interface BlockTestimonialsCarousel {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  variant?: "classic" | "client-stories" | "home";
  hasTopPadding?: boolean;
  items?: readonly {
    name: string;
    company?: string;
    quote: string;
    videoId?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    logo?: CmsMedia;
    logoSrc?: string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
  }[];
}

export interface BlockServicesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?:
    | "stage-services"
    | "theme-boxes"
    | "agency-services"
    | "migration-services"
    | "ai-services"
    | "app-features"
    | "industries-grid"
    | "theme-catalog";
  cardVariant?: "green" | "yellow" | "transparent" | "services-box";
  columns?: string;
  headerLayout?: "centered" | "split";
  className?: string;
  sectionId?: string;
  sixCards?: boolean;
  lastColFull?: boolean;
  isRoundedNumber?: boolean;
  bottomNote?: string;
  banner?: {
    badge?: string;
    title?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  services?: readonly {
    tag?: string;
    number?: string;
    badge?: string;
    title: string;
    description?: string;
    pills?: readonly (string | { text?: string })[];
    bullets?: readonly (string | { text?: string })[];
    iconName?: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
    ctaLabel?: string;
    ctaHref?: string;
  }[];
}

export interface BlockPortfolioShowcase {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?: "default" | "liveGrid" | "case-studies-slider" | "case-studies-cards";
  columns?: "2" | "3" | "4";
  headerLayout?: "split" | "centered";
  cardVariant?: "default" | "ourWorkRefresh";
  hideCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  platformMark?: {
    image?: CmsMedia;
    src?: string;
    width?: number;
    height?: number;
  };
  items?: readonly {
    name: string;
    href?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    category?: string;
    metrics?: string;
  }[];
}

export interface BlockProofStats {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  sectionId?: string;
  variant?:
    | "counters-bar"
    | "city-counters"
    | "team-boxes"
    | "shopify-plus-proof"
    | "why-choose-migration"
    | "why-choose-boxes"
    | "white-label-counters"
    | "credential-evidence";
  columns?: string;
  theme?: "light" | "dark" | "white" | "warm" | string;
  eyebrowVariant?: "dash" | "pill";
  counters?: readonly {
    value: string;
    suffix?: string;
    label: string;
    subLabel?: string;
  }[];
  boxes?: readonly {
    number?: string;
    title: string;
    description?: string;
    badgeText?: string;
    iconName?: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
  partnerHeading?: string;
  partnerDescription?: string;
  partnerLogo?: CmsMedia;
  partnerLogoSrc?: string;
  partnerLogoAlt?: string;
  logoHref?: string;
}

export interface BlockProcessTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  sectionId?: string;
  cardVariant?: "white" | "pista";
  variant?:
    | "development-process"
    | "migration-grid"
    | "horizontal-process"
    | "numbered-timeline"
    | "migration-process"
    | "app-process"
    | "white-label-process";
  columns?: "3" | "4";
  eyebrowVariant?: "dash" | "pill";
  isBgTransparent?: boolean;
  steps?: readonly {
    step?: string;
    title: string;
    description?: string;
    bullets?: readonly (string | { text?: string })[];
  }[];
}

export interface BlockPricingTable {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?: "tiers" | "hours";
  plans?: readonly {
    label: string;
    badge?: string;
    price: string;
    period?: string;
    description?: string;
    bullets?: readonly (string | { text?: string })[];
    ctaLabel?: string;
    ctaHref?: string;
  }[];
}

export interface BlockAboutTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  milestones?: {
    year?: string;
    description?: string;
    image?: CmsMedia;
    imageSrc?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockAboutFounders {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  founders?: {
    name: string;
    role: string;
    bio?: string;
    image?: CmsMedia;
    imageSrc?: string;
    alt?: string;
    linkedin?: string;
  }[];
}

export interface BlockLifeGallery {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  images?: {
    caption?: string;
    image?: CmsMedia;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockOurWorkProjects {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockHoursComparison {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  badge?: string;
}

export interface BlockCroBarriers {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: {
    title: string;
    icon?: CmsMedia;
    iconSrc?: string;
    alt?: string;
  }[];
}

export interface BlockEvaluationFramework {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  theme?: "white" | "cyan";
  items?: {
    number?: string;
    title: string;
    description: string;
  }[];
}

export interface BlockWhiteLabelDelivery {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  primaryCta?: {
    label?: string;
    href?: string;
  };
  secondaryCta?: {
    label?: string;
    href?: string;
    target?: string;
  };
}

export interface BlockB2bArchitecture {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  approaches?: {
    badge?: string;
    title: string;
    description?: string;
    points?: { text: string }[];
    isHighlighted?: boolean;
  }[];
  proofs?: {
    title: string;
    description?: string;
  }[];
}

export interface BlockResourcesHub {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  points?: { text: string }[];
}

export interface BlockThemeFeaturesBanner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly (string | { text?: string })[];
}

export interface BlockAiEmpoweredDelivery {
  __component?: string;
  blockType?: string;
  id?: string | number;
  variant?: "default" | "dark-green";
  eyebrow?: string;
  heading: string;
  description: string;
  callout?: string;
  cta?: {
    label?: string;
    href?: string;
  };
  address?: {
    title?: string;
    address?: string;
    link?: {
      label?: string;
      href?: string;
    };
  };
  tools?: readonly {
    name: string;
    description: string;
  }[];
}

export interface BlockShopifyPlusAgencySplit {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: readonly (string | { text?: string })[];
  videoSrc?: string;
  counters?: readonly {
    value: string;
    label: string;
    note?: string;
    tone?: "green" | "stone" | "peach" | "lime";
  }[];
}

export interface BlockCommerceSolutionsAccordion {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  solutions?: readonly {
    title: string;
    summary: string;
    body: string;
    href: string;
    cta: string;
  }[];
}

export interface BlockSelectedWorkVideo {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockInsightsBlogGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockCredentialTabs {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    tabId?: string;
    label: string;
    eyebrow?: string;
    title: string;
    description: string;
    details?: readonly {
      label: string;
      value: string;
    }[];
  }[];
}

export interface BlockPartnerDirectoryProof {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  href?: string;
  items?: readonly {
    kind?: "text" | "rating" | "image";
    label: string;
    value?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
  }[];
}

export interface BlockShopifyCroAssessment {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  points?: readonly (string | { text?: string })[];
}

export interface BlockShopifySupportScenarios {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    scenarioId?: string;
    kicker?: string;
    heading: string;
    description: string;
    features?: readonly (string | { text?: string })[];
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  }[];
}

export interface BlockAboutStory {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  caption?: string;
  videoId?: string;
  videoTitle?: string;
  poster?: CmsMedia;
  posterSrc?: string;
  posterAlt?: string;
  overlay?: CmsMedia;
  overlaySrc?: string;
}

export interface BlockAboutValues {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface BlockLifeCultureHiring {
  __component?: string;
  blockType?: string;
  id?: string | number;
  variant?: "culture" | "hiring";
  title: string;
  description?: string;
  cta?: string;
  href?: string;
  image?: CmsMedia;
  imageSrc?: string;
  imageAlt?: string;
  values?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockCareerOpportunities {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface BlockShopifyHoursTasks {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly (string | { text?: string })[];
}

export interface BlockMobileAppComparison {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  tableHeaders?: readonly (string | { text?: string })[];
  rows?: readonly {
    title: string;
    subtitle?: string;
    appBuilder: string;
    custom: string;
  }[];
}

export interface BlockSeoSafeMigration {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  sectionId?: string;
  tags?: readonly (string | { tag?: string })[];
  urlMappings?: readonly {
    source: string;
    statusCode?: string;
    target: string;
  }[];
  checks?: readonly (string | { text?: string })[];
}

export interface BlockThemeCustomizationApproach {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  sectionId?: string;
  approaches?: readonly {
    badge?: string;
    title?: string;
    description?: string;
    logo?: CmsMedia | null;
    logoSrc?: string;
    logoAlt?: string;
    isHighlighted?: boolean;
    points?: readonly (
      | string
      | {
          text?: string;
          label?: string;
          value?: string;
          ratingImage?: CmsMedia | null;
          ratingImageSrc?: string;
        }
    )[];
  }[];
}

export interface BlockMigrationProcess {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  sectionId?: string;
  titleAlign?: "left" | "center";
  variant?: "cards" | "default";
  steps?: readonly {
    stepNumber: string;
    title: string;
    description?: string;
    subBoxes?: readonly {
      title?: string;
      description?: string;
      items?: readonly (string | { text?: string })[];
    }[];
    categories?: readonly {
      title?: string;
      items?: readonly (string | { text?: string })[];
    }[];
  }[];
}

export interface BlockIndustryCustomDevelopment {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description: string;
  items?: readonly (string | { text?: string })[];
}

export interface BlockShopifyAppBenefits {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  items?: readonly {
    title?: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockShopifyMobileAppDtc {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  cards?: readonly {
    tag?: string;
    title: string;
    description: string;
    showBadges?: boolean;
  }[];
}

export interface BlockShopifyMobileAppExperience {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  columns?: "3" | "4";
  moments?: readonly {
    step: string;
    title: string;
    description: string;
    points?: readonly (string | { text?: string })[];
  }[];
}

export interface BlockMobileAppWork {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
  secondaryCta?: {
    label?: string;
    href?: string;
    ariaLabel?: string;
  };
  items?: readonly {
    name: string;
    category?: string;
    image?: CmsMedia;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
  }[];
}

export interface BlockTextBox {
  __component?: string;
  blockType?: "text-box";
  id?: string | number;
  heading: string;
  subheading?: string;
  paragraphs?: readonly { text: string }[];
  listItems?: readonly { item: string }[];
  variant?: "green" | "cream";
}

export interface BlockArchitecturePatterns {
  __component?: string;
  blockType?: "architecture-patterns";
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  items?: readonly {
    label: string;
    title: string;
    description: string;
    stack: string;
  }[];
}

export interface BlockTechKeywords {
  __component?: string;
  blockType?: "tech-keywords";
  id?: string | number;
  eyebrow?: string;
  heading: string;
  introText?: string;
  highlightedText?: string;
  bodyText?: string;
}

export interface BlockShopifyAppsDirectory {
  __component?: string;
  blockType?: "shopify-apps-directory";
  id?: string | number;
  title?: string;
  apps?: readonly {
    title: string;
    additionalInfo?: string;
    description?: string;
    image?: CmsMedia;
    imageSrc?: string;
    alt?: string;
    href: string;
  }[];
}

export interface BlockRisksShopifyTopics {
  __component?: string;
  blockType?: "risks-shopify-topics";
  id?: string | number;
  items?: readonly {
    topicId: string;
    label: string;
    heading: string;
    introParagraphs?: readonly { text: string }[];
    paragraphs?: readonly { text: string }[];
    bullets?: readonly { label: string; text: string }[];
    closingParagraphs?: readonly { text: string }[];
  }[];
}

export interface BlockDesignReasons {
  __component?: string;
  blockType?: "design-reasons";
  id?: string | number;
  title: string;
  description: string;
  items?: readonly {
    title: string;
    description: string;
  }[];
}

export interface BlockWhiteLabelServices {
  __component?: string;
  blockType?: "white-label-services";
  id?: string | number;
  eyebrow?: string;
  title: string;
  description?: string;
  idPrefix?: string;
  showCta?: boolean;
  ctaLabel?: string;
  services?: readonly {
    title: string;
    description: string;
    icon?: CmsMedia;
    iconSrc?: string;
    href?: string;
    linkLabel?: string;
  }[];
}

export interface BlockWhiteLabelStats {
  __component?: string;
  blockType?: "white-label-stats";
  id?: string | number;
  stats?: readonly {
    value: string;
    label: string;
  }[];
}

export interface BlockWhiteLabelWhy {
  __component?: string;
  blockType?: "white-label-why";
  id?: string | number;
  eyebrow?: string;
  title: string;
  reasons?: readonly {
    title: string;
    description: string;
  }[];
}

export type CmsSectionBlock =
  | BlockServiceHero
  | BlockBrandPartners
  | BlockFaqAccordion
  | BlockCtaBanner
  | BlockTestimonialsCarousel
  | BlockServicesGrid
  | BlockPortfolioShowcase
  | BlockProofStats
  | BlockProcessTimeline
  | BlockPricingTable
  | BlockAboutTimeline
  | BlockAboutFounders
  | BlockLifeGallery
  | BlockOurWorkProjects
  | BlockHoursComparison
  | BlockCroBarriers
  | BlockEvaluationFramework
  | BlockWhiteLabelDelivery
  | BlockB2bArchitecture
  | BlockResourcesHub
  | BlockThemeFeaturesBanner
  | BlockAiEmpoweredDelivery
  | BlockShopifyPlusAgencySplit
  | BlockCommerceSolutionsAccordion
  | BlockSelectedWorkVideo
  | BlockInsightsBlogGrid
  | BlockCredentialTabs
  | BlockPartnerDirectoryProof
  | BlockShopifyCroAssessment
  | BlockShopifySupportScenarios
  | BlockAboutStory
  | BlockAboutValues
  | BlockLifeCultureHiring
  | BlockCareerOpportunities
  | BlockShopifyHoursTasks
  | BlockMobileAppComparison
  | BlockSeoSafeMigration
  | BlockThemeCustomizationApproach
  | BlockMigrationProcess
  | BlockIndustryCustomDevelopment
  | BlockShopifyAppBenefits
  | BlockShopifyMobileAppDtc
  | BlockShopifyMobileAppExperience
  | BlockMobileAppWork
  | BlockTextBox
  | BlockArchitecturePatterns
  | BlockTechKeywords
  | BlockShopifyAppsDirectory
  | BlockRisksShopifyTopics
  | BlockDesignReasons
  | BlockWhiteLabelServices
  | BlockWhiteLabelStats
  | BlockWhiteLabelWhy
  | BlockContactHero
  | BlockContactForm
  | BlockForm
  | BlockContactOffices
  | BlockContactDetails
  | BlockRequestQuoteHero
  | BlockCareerApply;

// ---------------------------------------------------------------------------
// BlockRenderer Component
// ---------------------------------------------------------------------------

export interface BlockRendererProps {
  sections?: readonly CmsSectionBlock[] | null;
  testimonials?: readonly HappyClientTestimonialItem[];
}

async function CmsTestimonialsCarousel({
  block,
  providedTestimonials,
  fallbackItems,
}: {
  block: BlockTestimonialsCarousel;
  providedTestimonials?: readonly HappyClientTestimonialItem[];
  fallbackItems?: readonly HappyClientTestimonialItem[];
}) {
  const collectionTestimonials =
    providedTestimonials && providedTestimonials.length > 0
      ? providedTestimonials
      : await getPayloadAdaptedTestimonials();

  // Prefer the global testimonials collection; if empty (e.g. database down), fall back to block items or local defaults:
  const items =
    collectionTestimonials.length > 0
      ? collectionTestimonials
      : fallbackItems && fallbackItems.length > 0
        ? fallbackItems
        : undefined;

  return (
    <HappyClientSection
      eyebrow={block.eyebrow}
      heading={parseTextOrArray(block.heading)}
      description={parseTextOrArray(block.description)}
      variant={block.variant === "client-stories" ? "client-stories" : undefined}
      hasTopPadding={block.hasTopPadding || block.variant === "home"}
      items={items}
    />
  );
}

export function BlockRenderer({ sections, testimonials }: BlockRendererProps) {
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((block, index) => {
        const rawType =
          (block as { blockType?: string }).blockType ||
          (block as { __component?: string }).__component ||
          "";
        const normalizedType = rawType.replace(/^sections\./, "");
        const blockKey = `${rawType || "block"}-${(block as { id?: string | number }).id || index}`;

        const prevBlock = index > 0 ? sections[index - 1] : undefined;
        const currentBg = getBlockBackgroundCategory(block);

        // Intelligently drop redundant top padding only when appropriate (never after heroes or for standalone sections)
        const shouldRemoveTopPadding = shouldCollapseTopPadding(block, prevBlock, index);

        const renderedBlock = (() => {
          switch (normalizedType) {
          // Master Service Hero (and legacy video alias)
          case "service-hero":
          case "service-hero-video": {
            const shBlock = block as BlockServiceHero;
            const isAppmaker = Boolean(
              shBlock.title?.includes("Appmaker") ||
                shBlock.title?.includes("Shopify Store into a Mobile App"),
            );
            const isShopifyPlusExperts =
              shBlock.variant === "shopify-plus-experts";

            const variant = isShopifyPlusExperts
              ? "video"
              : shBlock.variant || "video";

            const isWhiteBg = shBlock.backgroundColor === "white";

            const rawEyebrows =
              shBlock.eyebrows && shBlock.eyebrows.length > 0
                ? shBlock.eyebrows
                : shBlock.eyebrowSpans && shBlock.eyebrowSpans.length > 0
                ? shBlock.eyebrowSpans
                : shBlock.eyebrow
                ? [shBlock.eyebrow]
                : [];

            const eyebrows = rawEyebrows
              .map((e) => (typeof e === "string" ? e : e?.text || ""))
              .filter(Boolean);

            const paragraphs = (shBlock.paragraphs ?? [])
              .map((p) => (typeof p === "string" ? p : p?.text || ""))
              .filter(Boolean);

            const badges = (shBlock.badges ?? [])
              .filter((b) => Boolean(b.name || b.alt || b.src || b.logo))
              .map((b) => ({
                name: b.name || "",
                src: resolveMediaUrl(b.logo) || b.src || "",
                alt: b.alt || b.name || "",
                href: b.href || "#",
                width: b.width || 120,
                height: b.height || 44,
              }));

            const primaryCta = shBlock.primaryCta?.label
              ? {
                  label: shBlock.primaryCta.label,
                  href: shBlock.primaryCta.href || "/request-a-quote",
                }
              : shBlock.cta
              ? {
                  label: shBlock.cta,
                  href: shBlock.ctaHref || "/request-a-quote",
                }
              : undefined;

            const secondaryCtaTarget =
              shBlock.secondaryCta?.target ??
              (shBlock.secondaryCta?.href?.startsWith("http") ? "_blank" : undefined);

            const secondaryCta = shBlock.secondaryCta?.label
              ? {
                  label: shBlock.secondaryCta.label,
                  href: shBlock.secondaryCta.href || "",
                  target: secondaryCtaTarget,
                }
              : undefined;

            const videoSrc =
              shBlock.videoSrc ||
              shBlock.video ||
              (isShopifyPlusExperts || variant === "video"
                ? "/assets/home/why-dynamic-dreamz.mp4"
                : undefined);

            const imageUrl =
              resolveMediaUrl(shBlock.image) || shBlock.imageSrc || "";

            // 0. Home Hero Variant
            if (variant === "home") {
              const proofBadges =
                badges.length > 0
                  ? badges.map((b) => ({
                      src: b.src,
                      alt: b.alt,
                      href: b.href,
                      width: b.width,
                      height: b.height,
                    }))
                  : undefined;

              return (
                <HomeHeroSection
                  key={blockKey}
                  established={eyebrows[0]}
                  partnerBadge={eyebrows[1]}
                  title={shBlock.title}
                  description={shBlock.description || undefined}
                  discoveryCta={primaryCta?.label}
                  discoveryCtaHref={primaryCta?.href}
                  shopifyWorkCta={secondaryCta?.label}
                  shopifyWorkCtaHref={secondaryCta?.href}
                  proofLogos={proofBadges}
                />
              );
            }

            // Phase 2.5 Extended Hero Variants
            if (variant === "theme") {
              return (
                <ThemeHeroSection
                  key={blockKey}
                  content={{
                    eyebrow: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    ctaText: primaryCta?.label,
                    ctaHref: primaryCta?.href,
                    secondaryCtaText: secondaryCta?.label,
                    secondaryCtaHref: secondaryCta?.href,
                    secondaryCtaTarget: secondaryCta?.target ?? secondaryCtaTarget,
                    image: {
                      src:
                        imageUrl ||
                        "/assets/services/theme-customization-hero-mockup.webp",
                      alt:
                        shBlock.imageAlt ||
                        resolveMediaAlt(shBlock.image, shBlock.title),
                      width: shBlock.imageWidth || 570,
                      height: shBlock.imageHeight || 480,
                    },
                  }}
                />
              );
            }

            if (variant === "about") {
              return (
                <AboutHeroSection
                  key={blockKey}
                  title={shBlock.title}
                  description={shBlock.description}
                />
              );
            }

            if (variant === "career") {
              return (
                <CareerHeroSection
                  key={blockKey}
                  eyebrow={eyebrows[0]}
                  title={shBlock.title}
                  description={shBlock.description}
                  badges={badges.length > 0 ? badges : undefined}
                />
              );
            }

            if (variant === "life") {
              return (
                <LifeHeroSection
                  key={blockKey}
                  lead={shBlock.lead}
                  description={shBlock.description}
                  image={
                    imageUrl
                      ? { url: imageUrl, alt: shBlock.imageAlt }
                      : null
                  }
                  imageAlt={shBlock.imageAlt}
                />
              );
            }

            if (variant === "our-work") {
              return (
                <OurWorkHeroSection
                  key={blockKey}
                  content={{
                    eyebrow: eyebrows[0],
                    title: shBlock.title,
                    description: shBlock.description || "",
                    primaryCta,
                    secondaryCta,
                  }}
                  proofLogos={badges.length > 0 ? badges : undefined}
                />
              );
            }

            if (variant === "resources") {
              return (
                <ResourcesHeroSection
                  key={blockKey}
                  title={shBlock.title}
                  description={shBlock.description}
                />
              );
            }

            if (variant === "buy-hours") {
              return <ShopifyHoursHeroSection key={blockKey} />;
            }

            if (variant === "industry") {
              return (
                <IndustryHeroSection
                  key={blockKey}
                  variant={shBlock.backgroundColor === "white" ? "white" : "gradient"}
                  showEyebrow={eyebrows.length > 0}
                  showCta={Boolean(primaryCta?.label)}
                  eyebrow={eyebrows[0]}
                  title={shBlock.title}
                  description={shBlock.description}
                  ctaLabel={primaryCta?.label}
                  ctaHref={primaryCta?.href}
                  image={
                    imageUrl
                      ? {
                          src: imageUrl,
                          alt:
                            shBlock.imageAlt ||
                            resolveMediaAlt(shBlock.image, shBlock.title),
                          width: shBlock.imageWidth || 684,
                          height: shBlock.imageHeight || 550,
                        }
                      : undefined
                  }
                />
              );
            }

            if (variant === "mobile-app") {
              const slides = (shBlock.slides ?? []).map((s) => ({
                src: resolveMediaUrl(s.image) || s.src || "",
                alt: s.alt || "",
                width: s.width || 224,
                height: s.height || 487,
              }));

              const heroBadges = badges.map((b) => ({
                src: b.src,
                alt: b.alt,
                href: b.href,
                width: b.width,
                height: b.height,
              }));

              return (
                <ShopifyMobileAppHeroSection
                  key={blockKey}
                  content={{
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    titleAccent: shBlock.titleAccent,
                    description: shBlock.description || "",
                    primaryCta: primaryCta || {
                      label: mobileAppSharedCopy.discussApp,
                      href: "/request-quote",
                    },
                    secondaryCta,
                    badges: heroBadges.length > 0 ? heroBadges : undefined,
                    mobileBadgeLayout:
                      heroBadges.length === 3
                        ? "row"
                        : (shBlock as { mobileBadgeLayout?: "divided" | "row" }).mobileBadgeLayout || "divided",
                    slides: slides.length > 0 ? slides : [],
                  }}
                />
              );
            }

            // 1. Tablet Slider Variant
            if (variant === "tablet-slider") {
              const slides = (shBlock.slides ?? []).map((s) => ({
                src: resolveMediaUrl(s.image) || s.src || "",
                alt: s.alt || "",
                width: s.width || 1600,
                height: s.height || 2380,
              }));
              const topBadgeUrl =
                resolveMediaUrl(shBlock.topBadge?.image) || shBlock.topBadge?.src;
              const bottomBadgeUrl =
                resolveMediaUrl(shBlock.bottomBadge?.image) ||
                shBlock.bottomBadge?.src;
              const bgShapeSrc =
                resolveMediaUrl(shBlock.bgShape) || shBlock.bgShapeSrc;

              return (
                <CityPageHeroSection
                  key={blockKey}
                  content={{
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    titleHighlight: shBlock.titleAccent,
                    subtitle: shBlock.subtitle,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    primaryCta,
                    secondaryCta,
                    badges: badges.length > 0 ? badges : undefined,
                    tabletSlider:
                      slides.length > 0
                        ? {
                            slides,
                            topBadge: topBadgeUrl
                              ? {
                                  src: topBadgeUrl,
                                  alt: shBlock.topBadge?.alt || "",
                                  width: shBlock.topBadge?.width || 346,
                                  height: shBlock.topBadge?.height || 212,
                                }
                              : undefined,
                            bottomBadge: bottomBadgeUrl
                              ? {
                                  src: bottomBadgeUrl,
                                  alt: shBlock.bottomBadge?.alt || "",
                                  width: shBlock.bottomBadge?.width || 260,
                                  height: shBlock.bottomBadge?.height || 252,
                                }
                              : undefined,
                            bgShapeSrc: bgShapeSrc || undefined,
                          }
                        : undefined,
                  }}
                />
              );
            }

            // 2. Centered Variant (with optional Co-branding & Review cards)
            if (variant === "centered") {
              const isAppmaker =
                shBlock.title?.includes("App in Minutes");

              const isRisks =
                shBlock.maxWidth === "wide" ||
                shBlock.title?.includes("Risks Of Shopify Outsourcing");

              const coBranding = shBlock.coBranding?.enabled
                ? {
                    leftLogo: {
                      src:
                        resolveMediaUrl(shBlock.coBranding.leftLogo?.logo) ||
                        shBlock.coBranding.leftLogo?.src ||
                        "/assets/brand/appmaker-logo.webp",
                      alt: shBlock.coBranding.leftLogo?.alt || "Partner",
                      width: shBlock.coBranding.leftLogo?.width || 147,
                      height: shBlock.coBranding.leftLogo?.height || 37,
                    },
                    separator: {
                      src:
                        resolveMediaUrl(shBlock.coBranding.separator?.logo) ||
                        shBlock.coBranding.separator?.src ||
                        "/assets/brand/appmaker-cross-icon.webp",
                      alt: shBlock.coBranding.separator?.alt || "Partnership",
                      width: shBlock.coBranding.separator?.width || 29,
                      height: shBlock.coBranding.separator?.height || 29,
                    },
                    rightLogo: {
                      src:
                        resolveMediaUrl(shBlock.coBranding.rightLogo?.logo) ||
                        shBlock.coBranding.rightLogo?.src ||
                        "/assets/brand/dd-logo.svg",
                      alt: shBlock.coBranding.rightLogo?.alt || "Dynamic Dreamz",
                      width: shBlock.coBranding.rightLogo?.width || 130,
                      height: shBlock.coBranding.rightLogo?.height || 39,
                    },
                  }
                : isAppmaker
                ? appmakerHeroCoBranding
                : undefined;

              return (
                <ServiceHeroSection
                  key={blockKey}
                  variant="centered"
                  showReviews={shBlock.showReviews ?? !isRisks}
                  content={{
                    title: shBlock.title,
                    titleAccent: shBlock.titleAccent,
                    subheading: shBlock.subtitle,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    paragraphs: paragraphs.length > 0 ? paragraphs : shBlock.description ? [shBlock.description] : undefined,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    secondaryCta,
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    coBranding,
                    maxWidthClassName: isRisks ? "max-w-[830px]" : "max-w-[770px]",
                  }}
                />
              );
            }

            // 3. Reviews Split Variant
            if (variant === "reviews") {
              return (
                <ServiceHeroSection
                  key={blockKey}
                  className={
                    isWhiteBg
                      ? "inner-hero-sec relative overflow-hidden bg-white pt-[158px] pb-[55px] max-[992px]:pt-[100px]"
                      : "hero-new-section relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16"
                  }
                  showReviews={true}
                  content={{
                    title: shBlock.title,
                    titleAccent: shBlock.titleAccent,
                    subheading: shBlock.subtitle,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    paragraphs: paragraphs.length > 0 ? paragraphs : shBlock.description ? [shBlock.description] : undefined,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    secondaryCta,
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    badges: badges.length > 0 ? badges : undefined,
                  }}
                />
              );
            }

            // 4. Image Bottom Aligned (Theme Customization Template)
            if (variant === "image" && shBlock.imageAlignment === "bottom") {
              return (
                <SplitImageHeroSection
                  key={blockKey}
                  className={
                    isWhiteBg
                      ? "theme-customize-hero relative overflow-hidden bg-white pt-[91px] pb-0 max-[992px]:pt-16 max-[768px]:pt-16"
                      : "theme-customize-hero relative overflow-hidden bg-[#f7f4e9] pt-[91px] pb-0 max-[992px]:pt-16 max-[768px]:pt-16"
                  }
                  wrapperClassName="wrapper flex flex-wrap items-end justify-between max-[1200px]:flex-col max-[1200px]:items-center max-[992px]:flex-col"
                  textColumnClassName="left-col z-1 flex w-[51%] max-[1400px]:w-1/2 flex-col items-start justify-center py-[60px] max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:text-center max-[1200px]:pt-15 max-[1200px]:pb-[30px] max-[992px]:py-10"
                  textClassName="hero-content w-full"
                  titleClassName="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]"
                  descriptionClassName="my-2.5 font-sans text-base font-medium leading-[28px] text-[#535353] max-[1200px]:mx-auto max-[1200px]:text-sm max-[1200px]:leading-6 max-[768px]:mt-3 max-[768px]:text-sm"
                  mediaColumnClassName="right-col flex w-[43.182%] items-end justify-center max-[1400px]:w-[48%] max-[1200px]:w-full max-[1200px]:mt-6 max-[1200px]:hidden"
                  mediaClassName="image-block flex w-full items-end justify-center pt-[60px] max-[1200px]:pt-0"
                  imageClassName="block h-auto w-full max-w-[570px] object-contain object-bottom mx-auto"
                  btnGroupClassName="max-[1400px]:flex-nowrap"
                  content={{
                    eyebrow: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    secondaryCtaLabel: secondaryCta?.label,
                    secondaryCtaHref: secondaryCta?.href,
                    secondaryCtaTarget: secondaryCta?.target ?? secondaryCtaTarget,
                    image: {
                      src: imageUrl,
                      alt:
                        shBlock.imageAlt ||
                        resolveMediaAlt(shBlock.image, shBlock.title),
                      width: shBlock.imageWidth || 570,
                      height: shBlock.imageHeight || 480,
                    },
                  }}
                />
              );
            }

            // 5. Text Only Variant
            if (variant === "text-only") {
              return (
                <CityPageHeroSection
                  key={blockKey}
                  content={{
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    titleHighlight: shBlock.titleAccent,
                    subtitle: shBlock.subtitle,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    primaryCta,
                    secondaryCta,
                    badges: badges.length > 0 ? badges : undefined,
                  }}
                />
              );
            }

            // 6. Video with Floating Partner Badge (or isShopifyPlusExperts)
            const hasVideoLogo =
              Boolean(shBlock.videoLogo?.logo || shBlock.videoLogo?.src) ||
              isShopifyPlusExperts;

            if (hasVideoLogo) {
              const videoLogoUrl =
                resolveMediaUrl(shBlock.videoLogo?.logo) ||
                shBlock.videoLogo?.src ||
                "/assets/platforms/shopify-plus-white.svg";
              return (
                <ServiceHeroSection
                  key={blockKey}
                  content={{
                    title: shBlock.title,
                    titleAccent: shBlock.titleAccent,
                    subheading: shBlock.subtitle,
                    description: shBlock.description,
                    paragraphs: paragraphs.length > 0 ? paragraphs : shBlock.description ? [shBlock.description] : undefined,
                    ctaLabel:
                      isAppmaker && (!primaryCta?.label || primaryCta.label === "Let's Talk")
                        ? "start your free trial today!"
                        : primaryCta?.label,
                    ctaHref:
                      isAppmaker && (!primaryCta?.href || primaryCta.href === "/request-a-quote")
                        ? "/request-quote"
                        : primaryCta?.href,
                    secondaryCta,
                    eyebrows: eyebrows.length > 0 ? eyebrows : undefined,
                    videoSrc: videoSrc || "/assets/home/why-dynamic-dreamz.mp4",
                    videoLogo: {
                      src: videoLogoUrl,
                      alt: shBlock.videoLogo?.alt || "Shopify Plus",
                      width: shBlock.videoLogo?.width || 143,
                      height: shBlock.videoLogo?.height || 30,
                    },
                    badges: badges.length > 0 ? badges : undefined,
                  }}
                  videoLogoClassName="left-[-90px]"
                />
              );
            }

            // 7. Standard Service Hero Video / Image Section
            const wrapperClass =
              (shBlock as { wrapperClassName?: string }).wrapperClassName ||
              (shBlock.variant === "migration"
                ? "hero-shopify-migration"
                : undefined);

            const imageClass =
              shBlock.imageBlend === "darken"
                ? "mix-blend-darken"
                : undefined;

            return (
              <ServiceHeroVideoSection
                rightColClassName="max-[992px]:inline-block max-[992px]:w-[70%] max-[768px]:hidden"
                key={blockKey}
                className={isWhiteBg ? "bg-white" : undefined}
                titleAccentTag={shBlock.titleAccentTag}
                titleAccentPosition={shBlock.titleAccentPosition}
                wrapperClassName={wrapperClass}
                content={{
                  title: shBlock.title,
                  titleAccent: shBlock.titleAccent,
                  subtitle: shBlock.subtitle,
                  lead: shBlock.lead,
                  description: shBlock.description,
                  body: shBlock.body,
                  paragraphs: paragraphs.length > 0 ? paragraphs : shBlock.description ? [shBlock.description] : undefined,
                  cta: primaryCta?.label,
                  ctaHref: primaryCta?.href,
                  secondaryCta,
                  eyebrowSpans: eyebrows.length > 0 ? eyebrows : undefined,
                  video: (variant === "video" || !imageUrl) ? videoSrc : undefined,
                  videoPoster: resolveMediaUrl(shBlock.videoPoster) || shBlock.videoPosterSrc,
                  image: imageUrl
                    ? {
                        src: imageUrl,
                        alt:
                          shBlock.imageAlt ||
                          resolveMediaAlt(shBlock.image, shBlock.title),
                        width: shBlock.imageWidth || 684,
                        height: shBlock.imageHeight || 550,
                        className: imageClass,
                      }
                    : undefined,
                  badges: badges.length > 0 ? badges : undefined,
                }}
              />
            );
          }

          // Block 2: Brand Partners
          case "brand-partners": {
            const bpBlock = block as BlockBrandPartners;
            const brands = (bpBlock.brands ?? [])
              .map((b) => {
                const src = resolveMediaUrl(b.logo) || b.src;
                if (!src) return null;
                return {
                  name: b.name || b.alt || "",
                  src,
                  alt: b.alt || b.name || "",
                  width: b.width || 120,
                  height: b.height || 44,
                  href: b.href || "#",
                };
              })
              .filter((b): b is NonNullable<typeof b> => Boolean(b && b.src));

            if (bpBlock.variant === "home") {
              return (
                <BrandPartnersSection
                  key={blockKey}
                  heading={bpBlock.heading}
                  description={bpBlock.description}
                  items={brands.length > 0 ? brands : undefined}
                />
              );
            }

            if (bpBlock.variant === "integrations") {
              return <IntegrationsSection key={blockKey} title={bpBlock.heading} />;
            }

            if (bpBlock.variant === "tools-grid") {
              const row1 = (bpBlock.brands ?? [])
                .filter((b) => (b as { row?: string }).row !== "2")
                .map((b) => ({
                  name: b.name || b.alt || "",
                  image: resolveMediaUrl(b.logo) || b.src || "",
                }))
                .filter((t) => Boolean(t.image));
              const row2 = (bpBlock.brands ?? [])
                .filter((b) => (b as { row?: string }).row === "2")
                .map((b) => ({
                  name: b.name || b.alt || "",
                  image: resolveMediaUrl(b.logo) || b.src || "",
                }))
                .filter((t) => Boolean(t.image));
              const rows = [row1, row2];

              return (
                <WhiteLabelToolsSection
                  key={blockKey}
                  title={bpBlock.heading}
                  description={bpBlock.description}
                  rows={row1.length > 0 || row2.length > 0 ? rows : undefined}
                />
              );
            }

            if (bpBlock.variant === "tech-stack") {
              return (
                <TechnologiesWorkWithSection
                  key={blockKey}
                  content={{
                    heading: bpBlock.heading || fullStackDevelopmentTechnologiesContent.heading,
                    description: bpBlock.description || fullStackDevelopmentTechnologiesContent.description,
                    categories: fullStackDevelopmentTechnologiesContent.categories,
                  }}
                />
              );
            }

            const cleanHeading = bpBlock.heading
              ? bpBlock.heading
                  .replace(/<br\s*\/?>/gi, " ")
                  .replace(/[\r\n]+/g, " ")
                  .replace(/\s+/g, " ")
                  .trim()
              : undefined;

            return (
              <IndustryBrandsSection
                key={blockKey}
                heading={cleanHeading}
                density={bpBlock.density || "standard"}
                mobileSpacing={bpBlock.mobileSpacing || "standard"}
                showHeading={bpBlock.showHeading ?? true}
                content={{
                  slug: (bpBlock as { slug?: string }).slug || "brand-partners",
                  ariaLabel: cleanHeading || "Brand Partners",
                }}
                items={brands}
              />
            );
          }

          // Block 3: FAQ Accordion
          case "faq-accordion": {
            const faBlock = block as BlockFaqAccordion;
            if (faBlock.variant === "home") {
              return <HomeFaqSection key={blockKey} />;
            }

            const faqs = (faBlock.faqs ?? []).map((f) => {
              let answer: string | readonly string[] = f.answer;
              let listItems = (f as any).listItems;
              let listPosition = (f as any).listPosition;

              if (typeof f.answer === "string") {
                const trimmed = f.answer.trim();
                if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
                  try {
                    const parsed = JSON.parse(trimmed);
                    if (parsed && typeof parsed === "object") {
                      if (Array.isArray(parsed)) {
                        answer = parsed;
                      } else {
                        if (parsed.answer) answer = parsed.answer;
                        if (parsed.listItems) listItems = parsed.listItems;
                        if (parsed.listPosition) listPosition = parsed.listPosition;
                      }
                    }
                  } catch {
                    // Not valid JSON, check for PostgreSQL text array format {"item1", "item2"}
                    if (trimmed.startsWith("{\"") && trimmed.endsWith("\"}")) {
                      const inner = trimmed.slice(1, -1);
                      const parts = inner
                        .split(/","/)
                        .map((p) => p.replace(/^"|"$/g, "").replace(/\\"/g, '"'));
                      answer = parts;
                    }
                  }
                }
              }

              return {
                question: f.question,
                answer,
                listItems,
                listPosition,
              };
            });

            const faqDesc = parseTextOrArray(faBlock.description);
            return (
              <SplitFaqSection
                key={blockKey}
                idPrefix={faBlock.idPrefix || "faq"}
                sectionId={(faBlock as { sectionId?: string }).sectionId || undefined}
                eyebrow={faBlock.eyebrow}
                heading={parseTextOrArray(faBlock.heading)}
                description={Array.isArray(faqDesc) ? faqDesc.join(" ") : faqDesc || undefined}
                iconVariant={faBlock.iconVariant || "circle-cross"}
                animateOnReveal={faBlock.animateOnReveal}
                items={faqs}
              />
            );
          }

          // Block 4: CTA Banner
          case "cta-banner": {
            const cbBlock = block as BlockCtaBanner;
            const ctaLabel =
              cbBlock.ctaLabel === null || cbBlock.ctaLabel === ""
                ? ""
                : (cbBlock.ctaLabel?.trim() ?? "Let's Talk");
            const ctaHref =
              cbBlock.ctaHref === null || cbBlock.ctaHref === ""
                ? ""
                : (cbBlock.ctaHref?.trim() ?? "/request-a-quote");

            if (cbBlock.variant === "image") {
              const bgImage =
                resolveMediaUrl(cbBlock.backgroundImage) ||
                cbBlock.backgroundImageSrc ||
                "/assets/services/cta-bg.webp";
              return (
                <ImageCtaSection
                  key={blockKey}
                  heading={cbBlock.heading}
                  description={cbBlock.description || ""}
                  ctaLabel={ctaLabel}
                  ctaHref={ctaHref}
                  backgroundImage={bgImage}
                />
              );
            }

            if (cbBlock.variant === "white-label") {
              return (
                <WhiteLabelFinalCtaSection
                  key={blockKey}
                  variant="certifiedDevelopers"
                  cta={{
                    title: cbBlock.heading,
                    description: cbBlock.description || "",
                    label: ctaLabel,
                  }}
                  ctaHref={ctaHref}
                />
              );
            }

            if (cbBlock.variant === "home-white-label") {
              const bullets = (cbBlock.bullets ?? [])
                .map((b) => (typeof b === "string" ? b : b?.text || ""))
                .filter(Boolean);
              return (
                <WhiteLabelPartnerSection
                  key={blockKey}
                  content={{
                    eyebrow: cbBlock.eyebrow,
                    title: cbBlock.heading,
                    description: cbBlock.description,
                    bullets: bullets.length > 0 ? bullets : undefined,
                    ctaLabel: ctaLabel,
                    ctaHref: ctaHref,
                  }}
                />
              );
            }

            if (cbBlock.variant === "two-col-cta") {
              const bullets = (cbBlock.bullets ?? [])
                .map((b) => (typeof b === "string" ? b : b?.text || ""))
                .filter(Boolean);
              const imageUrl =
                resolveMediaUrl(cbBlock.image) ||
                cbBlock.imageSrc ||
                "/assets/services/cta-bg.webp";
              return (
                <TwoColImageWithTextSection
                  key={blockKey}
                  heading={cbBlock.heading}
                  description={cbBlock.description || ""}
                  image={{
                    src: imageUrl,
                    alt:
                      cbBlock.imageAlt ||
                      resolveMediaAlt(cbBlock.image, cbBlock.heading),
                    width: 469,
                    height: 500,
                  }}
                  imagePosition={cbBlock.imagePosition || "left"}
                  bullets={bullets.length > 0 ? bullets : undefined}
                  cta={
                    ctaLabel && ctaHref
                      ? { label: ctaLabel, href: ctaHref }
                      : undefined
                  }
                />
              );
            }

            return (
              <CtaBannerSection
                key={blockKey}
                heading={cbBlock.heading}
                description={cbBlock.description}
                ctaLabel={ctaLabel}
                ctaHref={ctaHref}
              />
            );
          }

          // Block 5: Testimonials Carousel
          case "testimonials-carousel": {
            const tcBlock = block as BlockTestimonialsCarousel;
            const blockItems = (tcBlock.items ?? []).map((item) => ({
              name: item.name,
              company: item.company || "",
              quote: item.quote,
              videoId: item.videoId || "",
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              imageAlt: item.imageAlt || item.name || "",
              logo: resolveMediaUrl(item.logo) || item.logoSrc || undefined,
              logoAlt: item.logoAlt || item.company || undefined,
              logoWidth: item.logoWidth || 120,
              logoHeight: item.logoHeight || 40,
            }));

            return (
              <CmsTestimonialsCarousel
                key={blockKey}
                block={tcBlock}
                providedTestimonials={testimonials}
                fallbackItems={blockItems}
              />
            );
          }

          // Block 6: Services Grid
          case "services-grid": {
            const sgBlock = block as BlockServicesGrid;
            const services = sgBlock.services ?? [];

            if (sgBlock.variant === "theme-boxes") {
              const customClass = (sgBlock as { className?: string }).className || ((sgBlock as { removeBottomPadding?: boolean }).removeBottomPadding ? "pb-0" : undefined);
              return (
                <ThemeCustomizationServicesSection
                  key={blockKey}
                  className={customClass}
                  id={sgBlock.sectionId || undefined}
                  variant={sgBlock.cardVariant === "yellow" || sgBlock.cardVariant === "transparent" ? sgBlock.cardVariant : "green"}
                  isRoundedNumber={sgBlock.isRoundedNumber}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description,
                    bottomNote: sgBlock.bottomNote,
                    boxes: services.map((s) => {
                      const sAny = s as { iconName?: string };
                      const themeIcon = sAny.iconName
                        ? resolveServiceIcon(
                            sAny.iconName,
                            (sgBlock as { themeSlug?: string }).themeSlug,
                            (sgBlock as { iconKind?: "feature" | "benefit" | "service" }).iconKind ||
                              (sgBlock.cardVariant === "yellow" ? "feature" : "benefit"),
                          ) ||
                          resolveThemeIcon(
                            sAny.iconName,
                            (sgBlock as { themeSlug?: string }).themeSlug,
                            (sgBlock as { iconKind?: "feature" | "benefit" | "service" }).iconKind ||
                              (sgBlock.cardVariant === "yellow" ? "feature" : "benefit"),
                          ) ||
                          resolveMobileAppIcon(sAny.iconName) ||
                          resolveMigrationIcon(
                            sAny.iconName,
                            (sgBlock as { themeSlug?: string }).themeSlug,
                          )
                        : resolveMobileAppIcon(s.title);
                      return {
                        number: s.number || undefined,
                        badge: s.badge || undefined,
                        title: s.title,
                        description: s.description || undefined,
                        icon: themeIcon || resolveMediaUrl(s.icon) || s.iconSrc || undefined,
                        iconAlt: s.iconAlt || undefined,
                      };
                    }),
                  }}
                />
              );
            }

            if (sgBlock.variant === "agency-services") {
              const cardVariant = sgBlock.cardVariant === "services-box" ? "services-box" : "default";
              const cols = sgBlock.columns ? (parseInt(sgBlock.columns, 10) as 2 | 3 | 4) : 2;
              const paddingClass =
                (sgBlock as { className?: string }).className ||
                ((sgBlock as { removeBottomPadding?: boolean }).removeBottomPadding
                  ? "pb-0"
                  : cardVariant === "services-box"
                    ? "pb-20"
                    : undefined);
              return (
                <AgencyServicesSection
                  key={blockKey}
                  id={sgBlock.sectionId || "services"}
                  cardVariant={cardVariant}
                  columns={cols}
                  hideCta={cardVariant === "services-box"}
                  showDescription={true}
                  headerLayout={sgBlock.headerLayout === "split" ? "split" : undefined}
                  className={paddingClass}
                  preserveBreaks={(sgBlock as { preserveBreaks?: boolean }).preserveBreaks}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description || "",
                    items: services.map((s) => {
                      const themeIcon = (s as { iconName?: string }).iconName
                        ? resolveServiceIcon(
                            (s as { iconName?: string }).iconName,
                            (sgBlock as { themeSlug?: string }).themeSlug,
                            "service",
                          ) ||
                          resolveThemeIcon(
                            (s as { iconName?: string }).iconName,
                            (sgBlock as { themeSlug?: string }).themeSlug,
                            "service",
                          )
                        : null;
                      return {
                        title: s.title,
                        description: s.description || "",
                        tag: s.tag,
                        icon: resolveMediaUrl(s.icon) || s.iconSrc || undefined,
                        iconAlt: s.iconAlt || (typeof s.title === "string" ? s.title : "Service Icon"),
                        iconSvg: themeIcon || undefined,
                        href: s.ctaHref || undefined,
                        pills: (s.pills ?? [])
                          .map((p) => (typeof p === "string" ? p : p.text || ""))
                          .filter(Boolean),
                        cta:
                          s.ctaLabel && s.ctaHref
                            ? { label: s.ctaLabel, href: s.ctaHref }
                            : null,
                      };
                    }),
                  }}
                />
              );
            }

            if (sgBlock.variant === "migration-services") {
              const bannerFallback = shopifyMigrationServicesContent.banner;
              const hasBanner = Boolean(sgBlock.banner?.title || bannerFallback);
              const banner = hasBanner
                ? {
                    badge: sgBlock.banner?.badge || bannerFallback.badge,
                    title: sgBlock.banner?.title || bannerFallback.title,
                    description: sgBlock.banner?.description || bannerFallback.description,
                    ctaLabel: sgBlock.banner?.ctaLabel || bannerFallback.ctaLabel,
                    ctaHref: sgBlock.banner?.ctaHref || bannerFallback.ctaHref,
                  }
                : undefined;

              const itemsToRender =
                services.length > 0
                  ? services.map((s) => {
                      const fallbackItem = shopifyMigrationServicesContent.items.find(
                        (item) => item.title.trim().toLowerCase() === s.title?.trim().toLowerCase()
                      );

                      return {
                        title: s.title || fallbackItem?.title || "",
                        description: s.description || fallbackItem?.description || "",
                        image:
                          resolveMediaUrl(s.icon) ||
                          s.iconSrc ||
                          fallbackItem?.image ||
                          "",
                        imageAlt: s.iconAlt || fallbackItem?.imageAlt || s.title || "",
                        href: s.ctaHref || fallbackItem?.href || "#",
                        ctaLabel: s.ctaLabel || fallbackItem?.ctaLabel || "Explore migration",
                      };
                    })
                  : shopifyMigrationServicesContent.items;

              return (
                <ShopifyMigrationServicesSection
                  key={blockKey}
                  id={sgBlock.sectionId || undefined}
                  eyebrow={sgBlock.eyebrow || shopifyMigrationServicesContent.eyebrow}
                  heading={sgBlock.heading || shopifyMigrationServicesContent.heading}
                  description={sgBlock.description || shopifyMigrationServicesContent.description}
                  banner={banner}
                  items={itemsToRender}
                />
              );
            }

            if (sgBlock.variant === "ai-services") {
              return (
                <AiServicesGridSection
                  key={blockKey}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description,
                    items: services.map((s) => ({
                      label: s.tag || s.number,
                      title: s.title,
                      description: s.description || "",
                      useCases: (s.bullets ?? [])
                        .map((b) => (typeof b === "string" ? b : b?.text || ""))
                        .filter(Boolean)
                        .join(", "),
                    })),
                  }}
                />
              );
            }

            if (sgBlock.variant === "app-features") {
              const half = Math.ceil(services.length / 2);
              const left = services.slice(0, half).map((s) => ({
                icon:
                  resolveMediaUrl(s.icon) ||
                  s.iconSrc ||
                  "/assets/services/shopify-mobile-app-development/features/features_icon_1.svg",
                iconAlt: s.iconAlt || s.title,
                title: s.title,
                description: s.description || "",
              }));
              const right = services.slice(half).map((s) => ({
                icon:
                  resolveMediaUrl(s.icon) ||
                  s.iconSrc ||
                  "/assets/services/shopify-mobile-app-development/features/features_icon_4.svg",
                iconAlt: s.iconAlt || s.title,
                title: s.title,
                description: s.description || "",
              }));
              const centerImageSrc =
                resolveMediaUrl((sgBlock as { image?: CmsMedia }).image) ||
                (sgBlock as { imageSrc?: string }).imageSrc ||
                (sgBlock.heading?.includes("App Maker")
                  ? "/assets/services/shopify-mobile-app-development/features/app-features-img.webp"
                  : "/assets/services/shopify-mobile-app-development/features/center_phone_img.webp");
              const isAppmakerImg = centerImageSrc.includes("app-features-img");
              return (
                <ShopifyAppFeaturesSection
                  key={blockKey}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    centerImage: {
                      src: centerImageSrc,
                      alt: (sgBlock as { imageAlt?: string }).imageAlt || "App Features",
                      width: isAppmakerImg ? 374 : 388,
                      height: isAppmakerImg ? 518 : 600,
                    },
                    leftFeatures: left,
                    rightFeatures: right,
                  }}
                />
              );
            }

            if (sgBlock.variant === "industries-grid") {
              return (
                <IndustriesServedSection
                  key={blockKey}
                  variant="grid"
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description,
                    items: services.map((s) => ({
                      image:
                        resolveMediaUrl(s.icon) ||
                        s.iconSrc ||
                        "/assets/clients/fashion.webp",
                      imageAlt: s.iconAlt || s.title,
                      title: s.title,
                      eyebrow: s.tag,
                      description: s.description || "",
                      href: s.ctaHref,
                    })),
                  }}
                />
              );
            }

            if (sgBlock.variant === "theme-catalog") {
              return (
                <ShopifyThemesGridSection
                  key={blockKey}
                  variant="pista"
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    title: sgBlock.heading,
                    subtitle: sgBlock.description || "",
                    items: services.map((s) => ({
                      title: s.title,
                      image:
                        resolveMediaUrl(s.icon) ||
                        s.iconSrc ||
                        "/assets/services/theme-customization-hero-mockup.webp",
                      alt: s.iconAlt || s.title,
                      href: s.ctaHref,
                      ctaText: s.ctaLabel,
                    })),
                  }}
                />
              );
            }

            return (
              <ShopifyStageServicesSection
                key={blockKey}
                sixCards={sgBlock.sixCards}
                lastColFull={sgBlock.lastColFull}
                content={{
                  eyebrow: sgBlock.eyebrow,
                  heading: sgBlock.heading,
                  description: sgBlock.description || "",
                  items: services.map((s) => ({
                    tag: s.tag,
                    title: s.title,
                    description: s.description || "",
                    pills: (s.pills ?? [])
                      .map((p) => (typeof p === "string" ? p : p.text || ""))
                      .filter(Boolean),
                    cta:
                      s.ctaLabel && s.ctaHref
                        ? { label: s.ctaLabel, href: s.ctaHref }
                        : null,
                  })),
                }}
              />
            );
          }

          // Block 7: Portfolio Showcase
          case "portfolio-showcase": {
            const psBlock = block as BlockPortfolioShowcase;

            if (psBlock.variant === "case-studies-slider") {
              return (
                <ServicesCaseStudiesSection
                  key={blockKey}
                  eyebrow={psBlock.eyebrow}
                  heading={parseTextOrArray(psBlock.heading)}
                  description={parseTextOrArray(psBlock.description)}
                  className="py-20 max-[992px]:py-15 max-[768px]:py-10"
                  items={(psBlock.items ?? []).map((item, idx) => {
                    const itemAny = item as { tags?: string; description?: string };
                    const fallbackItem = shopifyMobileAppCaseStudies.items[idx];
                    return {
                      title: item.name,
                      href: item.href || fallbackItem?.href || "#",
                      image: resolveMediaUrl(item.image) || item.imageSrc || fallbackItem?.image || "",
                      imageAlt: item.imageAlt || item.name,
                      technology: item.metrics || fallbackItem?.technology || "Shopify",
                      industry: item.category || fallbackItem?.industry || "Ecommerce",
                      description:
                        (item as any).description ||
                        itemAny.description ||
                        (fallbackItem as any)?.description,
                      tags: itemAny.tags
                        ? itemAny.tags
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean)
                        : fallbackItem?.tags,
                    };
                  })}
                />
              );
            }

            if (psBlock.variant === "case-studies-cards") {
              return (
                <CaseStudyCardsSection
                  key={blockKey}
                  content={{
                    eyebrow: psBlock.eyebrow,
                    heading: psBlock.heading,
                    description: psBlock.description,
                    items: (psBlock.items ?? []).map((item) => ({
                      name: item.name,
                      image: resolveMediaUrl(item.image) || item.imageSrc || "",
                      imageAlt: item.imageAlt || item.name,
                      href: item.href || "#",
                      platform: item.metrics || "Shopify Plus",
                      industry: item.category || "Ecommerce",
                    })),
                  }}
                />
              );
            }

            const items = (psBlock.items ?? []).map((item) => {
              const itemAny = item as {
                platformMark?: {
                  image?: CmsMedia;
                  src?: string;
                  width?: number;
                  height?: number;
                };
              };
              return {
                name: item.name,
                href: item.href || undefined,
                image: resolveMediaUrl(item.image) || item.imageSrc || "",
                imageAlt: item.imageAlt || item.name,
                category: item.category || undefined,
                platformMark: itemAny.platformMark
                  ? {
                      src:
                        resolveMediaUrl(itemAny.platformMark.image) ||
                        itemAny.platformMark.src ||
                        "",
                      width: itemAny.platformMark.width || 44,
                      height: itemAny.platformMark.height || 44,
                    }
                  : undefined,
              };
            });

            const platformMark = psBlock.platformMark
              ? {
                  src:
                    resolveMediaUrl(psBlock.platformMark.image) ||
                    psBlock.platformMark.src ||
                    "",
                  width: psBlock.platformMark.width || 130,
                  height: psBlock.platformMark.height || 36,
                }
              : undefined;

            const cols = psBlock.columns
              ? (parseInt(psBlock.columns, 10) as 2 | 3 | 4)
              : 4;

            return (
              <PortfolioShowcaseSection
                key={blockKey}
                sectionId={(psBlock as { sectionId?: string }).sectionId || undefined}
                className={
                  (psBlock as { removeTopPadding?: boolean }).removeTopPadding
                    ? "pt-0 max-[992px]:pt-0 max-[768px]:pt-0"
                    : undefined
                }
                columns={cols}
                headerLayout={psBlock.headerLayout || "split"}
                cardVariant={psBlock.cardVariant || "default"}
                hideCta={psBlock.hideCta}
                ctaLabel={psBlock.ctaLabel}
                ctaHref={psBlock.ctaHref}
                content={{
                  eyebrow: psBlock.eyebrow,
                  heading: psBlock.heading || "Selected Ecommerce Work",
                  description: psBlock.description,
                  platformMark,
                  ctaLabel: psBlock.ctaLabel,
                  ctaHref: psBlock.ctaHref,
                  secondaryCtaLabel: psBlock.secondaryCtaLabel,
                  secondaryCtaHref: psBlock.secondaryCtaHref,
                  items,
                }}
              />
            );
          }

          // Block 8: Proof & Stats
          case "proof-stats": {
            const prBlock = block as BlockProofStats;

            if (prBlock.variant === "city-counters") {
              return (
                <CityPageCounterSection
                  key={blockKey}
                  eyebrowVariant={prBlock.eyebrowVariant || "dash"}
                  content={{
                    eyebrow: prBlock.eyebrow,
                    heading: prBlock.heading || "",
                    description: prBlock.description || "",
                    items: (prBlock.counters ?? []).map((c) => ({
                      value: `${c.value}${c.suffix || ""}`,
                      label: c.label,
                      subLabel: c.subLabel,
                    })),
                  }}
                />
              );
            }

            if (prBlock.variant === "team-boxes") {
              return (
                <ShopifyTeamBoxesSection
                  key={blockKey}
                  content={{
                    eyebrow: prBlock.eyebrow,
                    heading: prBlock.heading || "",
                    description: prBlock.description || "",
                    items: (prBlock.boxes ?? []).map((b) => ({
                      title: b.title,
                      description: b.description || "",
                    })),
                  }}
                />
              );
            }

            if (prBlock.variant === "shopify-plus-proof") {
              const proofContent = {
                eyebrow: prBlock.eyebrow || shopifyPlusAgencyWhyChoose.eyebrow,
                heading: prBlock.heading || shopifyPlusAgencyWhyChoose.heading,
                intro: prBlock.description || shopifyPlusAgencyWhyChoose.intro,
                text: shopifyPlusAgencyWhyChoose.text,
                stats:
                  (prBlock.counters ?? []).length > 0
                    ? (prBlock.counters ?? []).map(
                        (c) => `${c.value}${c.suffix || ""} ${c.label}`,
                      )
                    : shopifyPlusAgencyWhyChoose.stats,
              };
              return <ShopifyPlusProofSection key={blockKey} content={proofContent} />;
            }

            if (prBlock.variant === "why-choose-migration") {
              const defaultMobileIcons = ["cross-platform", "backend", "shield", "update"];
              const items =
                (prBlock.boxes ?? []).length > 0
                  ? (prBlock.boxes ?? []).map((b, idx) => {
                      const iconName =
                        b.iconName ||
                        (b.badgeText && b.badgeText !== "cross"
                          ? b.badgeText
                          : defaultMobileIcons[idx] || b.badgeText);
                      const iconSvg = iconName
                        ? resolveMobileAppIcon(iconName)
                        : b.title
                        ? resolveMobileAppIcon(b.title)
                        : undefined;
                      return {
                        title: b.title,
                        description: b.description || "",
                        icon: b.badgeText || "certified",
                        iconSvg,
                      };
                    })
                  : shopifyMigrationWhyChoose.items;

              const stats =
                (prBlock.counters ?? []).length > 0
                  ? (prBlock.counters ?? []).map((c) => ({
                      value: `${c.value}${c.suffix || ""}`,
                      label: c.label,
                    }))
                  : shopifyMigrationWhyChoose.stats;

              const migrationContent = {
                ...shopifyMigrationWhyChoose,
                eyebrow: prBlock.eyebrow || shopifyMigrationWhyChoose.eyebrow,
                heading: toText(prBlock.heading) || shopifyMigrationWhyChoose.heading,
                description:
                  toText(prBlock.description) || shopifyMigrationWhyChoose.description,
                partnerHeading:
                  (prBlock as { partnerHeading?: string }).partnerHeading ||
                  shopifyMigrationWhyChoose.partnerHeading,
                partnerDescription:
                  (prBlock as { partnerDescription?: string }).partnerDescription ||
                  shopifyMigrationWhyChoose.partnerDescription,
                partnerLogo:
                  resolveMediaUrl((prBlock as { partnerLogo?: CmsMedia }).partnerLogo) ||
                  (prBlock as { partnerLogoSrc?: string }).partnerLogoSrc ||
                  shopifyMigrationWhyChoose.partnerLogo,
                partnerLogoAlt:
                  (prBlock as { partnerLogoAlt?: string }).partnerLogoAlt ||
                  shopifyMigrationWhyChoose.partnerLogoAlt,
                logoHref:
                  (prBlock as { logoHref?: string }).logoHref ||
                  shopifyMigrationWhyChoose.logoHref,
                items,
                stats,
              };
              return (
                <WhyChooseShopifyMigrationSection
                  key={blockKey}
                  content={migrationContent}
                />
              );
            }

            if (prBlock.variant === "why-choose-boxes") {
              const cols = prBlock.columns
                ? (parseInt(prBlock.columns, 10) as 3 | 4 | 5)
                : 5;
              const theme = (prBlock.theme as "light" | "dark" | "white" | "warm") || "light";
              const eyebrowVariant = prBlock.eyebrowVariant || "dash";

              return (
                <CityWhyChooseBoxesSection
                  key={blockKey}
                  id={prBlock.sectionId || undefined}
                  columns={cols}
                  theme={theme}
                  eyebrowVariant={eyebrowVariant}
                  content={{
                    eyebrow: prBlock.eyebrow,
                    heading: prBlock.heading || "",
                    description: prBlock.description,
                    items: (prBlock.boxes ?? []).map((b) => {
                      const bAny = b as { iconName?: string };
                      const iconNode = bAny.iconName
                        ? resolveMigrationIcon(
                            bAny.iconName,
                            (prBlock as { themeSlug?: string }).themeSlug,
                          )
                        : undefined;
                      return {
                        title: b.title,
                        description: b.description || "",
                        subtitle: b.badgeText || b.number,
                        icon: iconNode ? undefined : resolveMediaUrl(b.icon) || b.iconSrc || undefined,
                        iconNode: iconNode || undefined,
                        iconAlt: b.iconAlt || (typeof b.title === "string" ? b.title : "Icon"),
                      };
                    }),
                  }}
                />
              );
            }

            if (prBlock.variant === "white-label-counters") {
              return (
                <WhiteLabelCounterSection
                  key={blockKey}
                  counters={(prBlock.counters ?? []).map((c) => ({
                    value: `${c.value}${c.suffix || ""}`,
                    label: c.label,
                  }))}
                />
              );
            }

            if (prBlock.variant === "credential-evidence") {
              return (
                <CredentialEvidenceSection
                  key={blockKey}
                  content={{
                    eyebrow: prBlock.eyebrow,
                    heading: prBlock.heading || "",
                    description: prBlock.description || "",
                    items: (prBlock.boxes ?? []).map((b) => ({
                      title: b.title,
                      count: b.number || "01",
                      image:
                        resolveMediaUrl(b.icon) ||
                        b.iconSrc ||
                        "/assets/proof/shopify-badge.webp",
                      imageAlt: b.iconAlt || b.title,
                      href: "#",
                    })),
                  }}
                />
              );
            }

            return (
              <ProofCounterSection
                key={blockKey}
                content={{
                  eyebrow: prBlock.eyebrow,
                  heading: (parseTextOrArray(prBlock.heading) as string) || prBlock.heading,
                  description: (parseTextOrArray(prBlock.description) as string) || prBlock.description,
                  stats: (prBlock.counters ?? []).map((c) => ({
                    value: c.value,
                    suffix: c.suffix,
                    label: c.label,
                  })),
                }}
              />
            );
          }

          // Block 9: Process Timeline
          case "process-timeline": {
            const ptBlock = block as BlockProcessTimeline;
            const steps = ptBlock.steps ?? [];

            if (ptBlock.variant === "migration-grid") {
              const variant = (ptBlock as { cardVariant?: "white" | "pista" }).cardVariant || "pista";
              return (
                <ShopifyMigrationNumberedGridSection
                  key={blockKey}
                  id={(ptBlock as { sectionId?: string }).sectionId || undefined}
                  variant={variant}
                  eyebrow={ptBlock.eyebrow}
                  heading={ptBlock.heading}
                  description={ptBlock.description}
                  className={shouldRemoveTopPadding ? "pt-0" : undefined}
                  items={steps.map((s, idx) => ({
                    number: s.step || String(idx + 1).padStart(2, "0"),
                    title: s.title,
                    description: s.description || "",
                  }))}
                />
              );
            }

            if (ptBlock.variant === "horizontal-process") {
              return (
                <ShopifyHorizontalProcessSection
                  key={blockKey}
                  content={{
                    eyebrow: ptBlock.eyebrow,
                    heading: ptBlock.heading,
                    description: ptBlock.description || "",
                    steps: steps.map((s) => ({
                      title: s.title,
                      description: s.description || "",
                    })),
                  }}
                />
              );
            }

            if (ptBlock.variant === "numbered-timeline") {
              return (
                <NumberedProcessTimelineSection
                  key={blockKey}
                  eyebrow={ptBlock.eyebrow}
                  heading={ptBlock.heading}
                  description={ptBlock.description}
                  items={steps.map((s) => s.title)}
                />
              );
            }

            if (ptBlock.variant === "migration-process") {
              return (
                <MigrationProcessSection
                  key={blockKey}
                  id={(ptBlock as { sectionId?: string }).sectionId || "migration-process"}
                  variant="cards"
                  content={{
                    eyebrow: ptBlock.eyebrow,
                    heading: ptBlock.heading,
                    description: ptBlock.description,
                    steps: steps.map((s, idx) => ({
                      stepNumber: s.step || `0${idx + 1}`,
                      title: s.title,
                      description: s.description || "",
                    })),
                  }}
                />
              );
            }

            if (ptBlock.variant === "app-process") {
              const appProcessDefaultIcons = [
                "/assets/services/shopify-mobile-app-development/process/signup-icon.svg",
                "/assets/services/shopify-mobile-app-development/process/customize-app-icon.svg",
                "/assets/services/shopify-mobile-app-development/process/connect-store-icon.svg",
                "/assets/services/shopify-mobile-app-development/process/publish-icon.svg",
              ];
              return (
                <ShopifyAppProcessSection
                  key={blockKey}
                  content={{
                    eyebrow: ptBlock.eyebrow,
                    heading: parseTextOrArray(ptBlock.heading),
                    steps: steps.map((s, idx) => ({
                      title: s.title,
                      description: s.description || "",
                      icon:
                        resolveMediaUrl((s as { icon?: CmsMedia }).icon) ||
                        (s as { iconSrc?: string }).iconSrc ||
                        (s as { imageSrc?: string }).imageSrc ||
                        appProcessDefaultIcons[idx] ||
                        appProcessDefaultIcons[0],
                      iconAlt: (s as { iconAlt?: string }).iconAlt || s.title,
                    })),
                  }}
                />
              );
            }

            if (ptBlock.variant === "white-label-process") {
              return (
                <WhiteLabelProcessSection
                  key={blockKey}
                  eyebrow={ptBlock.eyebrow}
                  title={parseTextOrArray(ptBlock.heading)}
                  description={parseTextOrArray(ptBlock.description)}
                  note={(ptBlock as { note?: string }).note || (typeof ptBlock.description === "string" ? ptBlock.description : "")}
                  steps={steps.map((s, idx) => ({
                    step: s.step || String(idx + 1).padStart(2, "0"),
                    title: s.title,
                    description: s.description || "",
                  }))}
                />
              );
            }

            const cols = ptBlock.columns
              ? (parseInt(ptBlock.columns, 10) as 3 | 4)
              : 4;

            return (
              <OurDevelopmentProcessSection
                key={blockKey}
                columns={cols}
                eyebrowVariant={ptBlock.eyebrowVariant || "dash"}
                isBgTransparent={ptBlock.isBgTransparent}
                content={{
                  eyebrow: ptBlock.eyebrow,
                  heading: ptBlock.heading,
                  description: ptBlock.description,
                  steps: steps.map((s) => ({
                    step: s.step || "",
                    title: s.title,
                    description: s.description || "",
                  })),
                }}
              />
            );
          }

          // Block 10: Pricing Table
          case "pricing-table": {
            const prBlock = block as BlockPricingTable;
            const items = (prBlock.plans ?? []).map((p) => ({
              label: p.label,
              badge: p.badge || "",
              price: p.price,
              description: p.description || "",
              bullets: (p.bullets ?? [])
                .map((b) => (typeof b === "string" ? b : b.text || ""))
                .filter(Boolean),
              ctaLabel: p.ctaLabel || "Get Started",
              ctaHref: p.ctaHref || "/request-a-quote",
            }));

            return (
              <PricingTableSection
                key={blockKey}
                content={{
                  eyebrow: prBlock.eyebrow,
                  heading: (parseTextOrArray(prBlock.heading) as string) || prBlock.heading,
                  description: (parseTextOrArray(prBlock.description) as string) || prBlock.description,
                  items,
                }}
              />
            );
          }

          // Contact Us Page Blocks
          case "contact-hero": {
            const chBlock = block as BlockContactHero;
            return (
              <ContactHeroSection
                description={chBlock.description}
                eyebrow={chBlock.eyebrow}
                key={blockKey}
                quickLinks={chBlock.quickLinks}
                title={chBlock.title}
              />
            );
          }

          case "contact-form": {
            const cfBlock = block as BlockContactForm;
            return (
              <ContactFormSection
                description={cfBlock.description}
                eyebrow={cfBlock.eyebrow}
                form={cfBlock.form}
                key={blockKey}
                title={cfBlock.title}
              />
            );
          }

          case "form-block":
          case "form": {
            const fbBlock = block as BlockForm;
            return (
              <FormBlock
                containerWidth={fbBlock.containerWidth}
                description={fbBlock.description}
                enableIntro={fbBlock.enableIntro}
                eyebrow={fbBlock.eyebrow}
                form={fbBlock.form}
                introContent={fbBlock.introContent}
                key={blockKey}
                title={fbBlock.title}
              />
            );
          }

          case "contact-offices": {
            const coBlock = block as BlockContactOffices;
            return (
              <ContactOfficesSection
                description={coBlock.description}
                directionsLabel={coBlock.directionsLabel}
                eyebrow={coBlock.eyebrow}
                key={blockKey}
                offices={coBlock.offices}
                title={coBlock.title}
              />
            );
          }

          case "contact-details": {
            const cdBlock = block as BlockContactDetails;
            return (
              <ContactDetailsSection
                eyebrow={cdBlock.eyebrow}
                key={blockKey}
                title={cdBlock.title}
              />
            );
          }

          // Request a Quote Page Hero Block
          case "request-quote-hero": {
            const rqBlock = block as BlockRequestQuoteHero;
            const customBadges =
              rqBlock.badges && rqBlock.badges.length > 0
                ? rqBlock.badges.map((b) => ({
                    href: b.href || "#",
                    ariaLabel: b.ariaLabel,
                    image: resolveMediaUrl(b.logo) || b.src || "",
                    alt: b.alt || "",
                    width:
                      typeof b.logo === "object" && b.logo?.width
                        ? b.logo.width
                        : b.width,
                    height:
                      typeof b.logo === "object" && b.logo?.height
                        ? b.logo.height
                        : b.height,
                  }))
                : undefined;

            const customTestimonials =
              rqBlock.testimonials && rqBlock.testimonials.length > 0
                ? rqBlock.testimonials.map((t) => ({
                    name: t.name,
                    quote: t.quote,
                    avatar: resolveMediaUrl(t.avatar) || (t as any).avatarSrc || undefined,
                  }))
                : undefined;

            const hero =
              rqBlock.heroTitle || rqBlock.heroDescription || rqBlock.formTitle
                ? {
                    title: rqBlock.heroTitle || "",
                    description: rqBlock.heroDescription || "",
                    formTitle: rqBlock.formTitle || "",
                  }
                : undefined;

            const counters =
              rqBlock.counters && rqBlock.counters.length > 0
                ? rqBlock.counters.map((c) => ({
                    label: c.label,
                    count: c.count,
                    unit: c.unit,
                  }))
                : undefined;

            const budgetOptions =
              rqBlock.budgetOptions && rqBlock.budgetOptions.length > 0
                ? rqBlock.budgetOptions.map((b) => b.option)
                : undefined;

            return (
              <RequestQuotePage
                badges={customBadges}
                budgetOptions={budgetOptions}
                counters={counters}
                form={rqBlock.form}
                hero={hero}
                key={blockKey}
                testimonials={customTestimonials}
              />
            );
          }

          // Career Apply Now Block
          case "career-apply": {
            const caBlock = block as BlockCareerApply;
            return (
              <CareerApplyNowPage
                emailAddress={caBlock.emailAddress}
                emailHref={caBlock.emailHref}
                emailLabel={caBlock.emailLabel}
                form={caBlock.form}
                heading={caBlock.heading}
                key={blockKey}
                note={caBlock.note}
                phoneHref={caBlock.phoneHref}
                phoneLabel={caBlock.phoneLabel}
                phoneNumber={caBlock.phoneNumber}
              />
            );
          }

          // Dedicated Signature Blocks (Phase 2)
          case "about-timeline": {
            const atBlock = block as BlockAboutTimeline;
            const milestones = atBlock.milestones?.map((m) => {
              const mediaUrl = resolveMediaUrl(m.image);
              return {
                year: m.year || "",
                description: m.description || "",
                image: mediaUrl || m.imageSrc || "",
                alt: m.alt || resolveMediaAlt(m.image, m.year || "Milestone"),
                width: m.width || 400,
                height: m.height || 260,
              };
            });

            return (
              <AboutTimelineSection
                key={blockKey}
                title={atBlock.title || undefined}
                description={atBlock.description || undefined}
                milestones={milestones && milestones.length > 0 ? milestones : undefined}
              />
            );
          }

          case "about-founders": {
            const afBlock = block as BlockAboutFounders;
            const founders = afBlock.founders?.map((f) => {
              const mediaUrl = resolveMediaUrl(f.image);
              return {
                name: f.name,
                role: f.role,
                bio: f.bio || "",
                image: mediaUrl || f.imageSrc || "",
                alt: f.alt || resolveMediaAlt(f.image, f.name),
                linkedin: f.linkedin || "",
              };
            });

            return (
              <AboutFoundersSection
                key={blockKey}
                eyebrow={afBlock.eyebrow || undefined}
                title={afBlock.title || undefined}
                descriptions={afBlock.description ? [afBlock.description] : undefined}
                founders={founders && founders.length > 0 ? founders : undefined}
              />
            );
          }

          case "life-gallery": {
            const lgBlock = block as BlockLifeGallery;
            const images = lgBlock.images?.map((item) => {
              const mediaUrl = resolveMediaUrl(item.image);
              return {
                src: mediaUrl || item.src || "",
                alt: item.alt || resolveMediaAlt(item.image, item.caption || ""),
                width: item.width || 334,
                height: item.height || 406,
              };
            });

            return (
              <LifeGallerySection
                key={blockKey}
                images={images && images.length > 0 ? images : undefined}
              />
            );
          }

          case "our-work-projects": {
            const owpBlock = block as BlockOurWorkProjects;
            return (
              <OurWorkProjectsSection
                key={blockKey}
                eyebrow={owpBlock.eyebrow || undefined}
                title={owpBlock.title || undefined}
                description={owpBlock.description || undefined}
              />
            );
          }

          case "hours-comparison": {
            const hcBlock = block as BlockHoursComparison;
            return (
              <ShopifyHoursComparisonSection
                key={blockKey}
                eyebrow={hcBlock.eyebrow || undefined}
                heading={hcBlock.heading || undefined}
                description={hcBlock.description || undefined}
                badge={hcBlock.badge || undefined}
              />
            );
          }

          case "cro-barriers": {
            const cbBlock = block as BlockCroBarriers;
            const items = cbBlock.items?.map((item) => {
              const iconUrl = resolveMediaUrl(item.icon);
              return {
                title: item.title,
                icon: iconUrl || item.iconSrc || "",
                alt: item.alt || resolveMediaAlt(item.icon, item.title),
              };
            });

            return (
              <ShopifyCroBarriersSection
                key={blockKey}
                content={{
                  eyebrow: cbBlock.eyebrow || undefined,
                  heading: cbBlock.heading,
                  description: cbBlock.description || "",
                  items: items && items.length > 0 ? items : [],
                }}
              />
            );
          }

          case "evaluation-framework": {
            const efBlock = block as BlockEvaluationFramework;
            const items = efBlock.items?.map((item) => ({
              number: item.number || undefined,
              title: item.title,
              description: item.description,
            }));

            return (
              <EvaluationFrameworkSection
                key={blockKey}
                id={(efBlock as { sectionId?: string }).sectionId || undefined}
                className={(efBlock as { className?: string }).className || undefined}
                theme={efBlock.theme || "white"}
                content={{
                  eyebrow: efBlock.eyebrow || undefined,
                  heading: efBlock.heading,
                  description: efBlock.description || undefined,
                  items: items && items.length > 0 ? items : [],
                }}
              />
            );
          }

          case "white-label-delivery": {
            const wldBlock = block as BlockWhiteLabelDelivery;
            return (
              <DeliveryModelComparisonSection
                key={blockKey}
                eyebrow={wldBlock.eyebrow || undefined}
                heading={wldBlock.heading || undefined}
                description={wldBlock.description || undefined}
                primaryCta={
                  wldBlock.primaryCta?.label && wldBlock.primaryCta?.href
                    ? { label: wldBlock.primaryCta.label, href: wldBlock.primaryCta.href }
                    : undefined
                }
                secondaryCta={
                  wldBlock.secondaryCta?.label && wldBlock.secondaryCta?.href
                    ? { label: wldBlock.secondaryCta.label, href: wldBlock.secondaryCta.href }
                    : undefined
                }
              />
            );
          }

          case "b2b-architecture": {
            const b2bBlock = block as BlockB2bArchitecture;
            const approaches = b2bBlock.approaches?.map((app) => ({
              badge: app.badge || undefined,
              title: app.title,
              description: app.description || "",
              points: app.points?.map((p) => p.text) || [],
              isHighlighted: app.isHighlighted ?? false,
            }));
            const proofs = b2bBlock.proofs?.map((prf) => ({
              title: prf.title,
              description: prf.description || "",
            }));

            return (
              <ShopifyB2BApproachSection
                key={blockKey}
                content={{
                  eyebrow: b2bBlock.eyebrow || undefined,
                  heading: b2bBlock.heading,
                  description: b2bBlock.description || "",
                  approaches: approaches && approaches.length > 0 ? approaches : [],
                  proofs: proofs && proofs.length > 0 ? proofs : [],
                }}
              />
            );
          }

          case "resources-hub": {
            const rhBlock = block as BlockResourcesHub;
            const points = rhBlock.points?.map((p) => p.text);

            return (
              <ResourcesHubSection
                key={blockKey}
                title={rhBlock.title || undefined}
                points={points && points.length > 0 ? points : undefined}
              />
            );
          }

          case "theme-features-banner": {
            const tfBlock = block as BlockThemeFeaturesBanner;
            const items = (tfBlock.items ?? [])
              .map((i) => (typeof i === "string" ? i : i?.text || ""))
              .filter(Boolean);

            return (
              <ThemeFeaturesBannerSection
                key={blockKey}
                content={{
                  eyebrow: tfBlock.eyebrow,
                  title: tfBlock.heading,
                  heading: tfBlock.heading,
                  description: tfBlock.description,
                  items,
                }}
              />
            );
          }

          case "ai-empowered-delivery": {
            const aedBlock = block as BlockAiEmpoweredDelivery;
            const tools = (aedBlock.tools ?? []).map((t) => ({
              name: t.name,
              description: t.description,
            }));

            const address = aedBlock.address?.title
              ? {
                  title: aedBlock.address.title,
                  address: aedBlock.address.address || "",
                  link: {
                    label: aedBlock.address.link?.label || "View contact details",
                    href: aedBlock.address.link?.href || "/contact-us",
                  },
                }
              : undefined;

            return (
              <AiEmpoweredDeliverySection
                key={blockKey}
                variant={aedBlock.variant || "default"}
                content={{
                  eyebrow: aedBlock.eyebrow,
                  heading: aedBlock.heading,
                  description: aedBlock.description,
                  callout: aedBlock.callout,
                  cta:
                    aedBlock.cta?.label && aedBlock.cta?.href
                      ? { label: aedBlock.cta.label, href: aedBlock.cta.href }
                      : undefined,
                  tools,
                  address,
                }}
              />
            );
          }

          case "home-shopify-plus-agency": {
            const hspaBlock = block as BlockShopifyPlusAgencySplit;
            const paragraphs = (hspaBlock.paragraphs ?? [])
              .map((p) => (typeof p === "string" ? p : p?.text || ""))
              .filter(Boolean);
            const counters = (hspaBlock.counters ?? []).map((c) => ({
              value: c.value,
              label: c.label,
              note: c.note,
              tone: c.tone || "green",
            }));

            return (
              <ShopifyPlusAgencySection
                key={blockKey}
                content={{
                  eyebrow: hspaBlock.eyebrow || shopifyPlusAgencyContent.eyebrow,
                  title: hspaBlock.title || shopifyPlusAgencyContent.title,
                  intro: hspaBlock.intro || shopifyPlusAgencyContent.intro,
                  paragraphs:
                    paragraphs.length > 0
                      ? paragraphs
                      : shopifyPlusAgencyContent.paragraphs,
                  counters:
                    counters.length > 0
                      ? counters
                      : shopifyPlusAgencyContent.counters,
                  videoSrc:
                    hspaBlock.videoSrc || shopifyPlusAgencyContent.videoSrc,
                }}
              />
            );
          }

          case "home-commerce-solutions": {
            const hcsBlock = block as BlockCommerceSolutionsAccordion;
            const solutions = (hcsBlock.solutions ?? []).map((s) => ({
              title: s.title,
              summary: s.summary,
              body: s.body,
              href: s.href,
              cta: s.cta || "Learn More",
            }));

            return (
              <CommerceSolutionsSection
                key={blockKey}
                title={hcsBlock.title}
                description={hcsBlock.description}
                solutions={solutions.length > 0 ? solutions : commerceSolutions}
              />
            );
          }

          case "home-selected-work": {
            const hswBlock = block as BlockSelectedWorkVideo;

            return (
              <SelectedWorkSection
                key={blockKey}
                title={hswBlock.title}
                description={hswBlock.description}
                ctaLabel={hswBlock.ctaLabel}
                ctaHref={hswBlock.ctaHref}
              />
            );
          }

          case "home-insights": {
            const hiBlock = block as BlockInsightsBlogGrid;

            return (
              <InsightsSection
                key={blockKey}
                title={hiBlock.title}
                ctaLabel={hiBlock.ctaLabel}
                ctaHref={hiBlock.ctaHref}
              />
            );
          }

          case "credential-tabs": {
            const ctBlock = block as BlockCredentialTabs;
            const items = (ctBlock.items ?? []).map((item) => ({
              id: item.tabId || item.title.toLowerCase().replace(/\s+/g, "-"),
              label: item.label,
              eyebrow: item.eyebrow || "",
              title: item.title,
              description: item.description,
              details: (item.details ?? []).map((d) => ({
                label: d.label,
                value: d.value,
              })),
            }));

            return (
              <CredentialTabsSection
                key={blockKey}
                content={{
                  eyebrow: ctBlock.eyebrow,
                  heading: ctBlock.heading,
                  description: ctBlock.description || "",
                  items: items.length > 0 ? items : shopifyCredentialTabs.items,
                }}
              />
            );
          }

          case "partner-directory-proof": {
            const pdpBlock = block as BlockPartnerDirectoryProof;
            const items = (pdpBlock.items ?? []).map((item) => {
              if (item.kind === "image") {
                return {
                  kind: "image" as const,
                  image:
                    resolveMediaUrl(item.image) ||
                    item.imageSrc ||
                    "/assets/proof/shopify-badge.webp",
                  imageAlt: item.imageAlt || item.label,
                  label: item.label,
                };
              }
              return {
                kind: (item.kind || "text") as "rating" | "text",
                value: item.value || "",
                label: item.label,
              };
            });

            return (
              <PartnerDirectoryProofSection
                key={blockKey}
                content={{
                  heading: pdpBlock.heading,
                  description: pdpBlock.description || "",
                  href: pdpBlock.href || shopifyPartnerDirectoryProof.href,
                  items:
                    items.length > 0
                      ? items
                      : shopifyPartnerDirectoryProof.items,
                }}
              />
            );
          }

          case "cro-assessment": {
            const caBlock = block as BlockShopifyCroAssessment;
            const points = (caBlock.points ?? [])
              .map((p) => (typeof p === "string" ? p : p?.text || ""))
              .filter(Boolean);

            return (
              <ShopifyCroAssessmentSection
                key={blockKey}
                content={{
                  heading: caBlock.heading,
                  description: caBlock.description || "",
                  points:
                    points.length > 0 ? points : shopifyCroAssessment.points,
                  cta: {
                    label: caBlock.ctaLabel || shopifyCroAssessment.cta.label,
                    href: caBlock.ctaHref || shopifyCroAssessment.cta.href,
                  },
                }}
              />
            );
          }

          case "support-scenarios": {
            const ssBlock = block as BlockShopifySupportScenarios;
            const items = (ssBlock.items ?? []).map((item) => ({
              id: item.scenarioId || item.heading.toLowerCase().replace(/\s+/g, "-"),
              title: item.heading,
              kicker: item.kicker,
              heading: item.heading,
              description: item.description,
              features: (item.features ?? [])
                .map((f) => (typeof f === "string" ? f : f?.text || ""))
                .filter(Boolean),
              primaryCta: {
                label: item.primaryCtaLabel || "Discuss Scenario",
                href: item.primaryCtaHref || "/request-a-quote",
              },
              secondaryCta: {
                label: item.secondaryCtaLabel || "View Details",
                href: item.secondaryCtaHref || "/contact-us",
              },
            }));

            return (
              <ShopifySupportScenariosSection
                key={blockKey}
                content={{
                  eyebrow: ssBlock.eyebrow,
                  heading: ssBlock.heading,
                  description: ssBlock.description,
                  items:
                    items.length > 0 ? items : whiteLabelShopifyScenarios.items,
                }}
              />
            );
          }

          case "about-story": {
            const asBlock = block as BlockAboutStory;
            const poster =
              resolveMediaUrl(asBlock.poster) ||
              asBlock.posterSrc ||
              aboutStory.poster;
            const overlay =
              resolveMediaUrl(asBlock.overlay) ||
              asBlock.overlaySrc ||
              aboutStory.overlay;

            return (
              <AboutStorySection
                key={blockKey}
                title={asBlock.title}
                description={asBlock.description}
                caption={asBlock.caption || aboutStory.caption}
                videoId={asBlock.videoId || aboutStory.videoId}
                videoTitle={asBlock.videoTitle || aboutStory.videoTitle}
                poster={poster}
                posterAlt={asBlock.posterAlt || aboutStory.posterAlt}
                overlay={overlay}
              />
            );
          }

          case "about-values": {
            const avBlock = block as BlockAboutValues;
            const values = (avBlock.values ?? []).map((v) => ({
              title: v.title,
              description: v.description,
              iconName: v.iconName,
            }));

            return (
              <AboutValuesSection
                key={blockKey}
                title={avBlock.title}
                description={avBlock.description}
                values={values.length > 0 ? values : undefined}
              />
            );
          }

          case "life-culture-hiring": {
            const lchBlock = block as BlockLifeCultureHiring;

            if (lchBlock.variant === "hiring") {
              const imageUrl =
                resolveMediaUrl(lchBlock.image) ||
                lchBlock.imageSrc ||
                hiringCallout.image.src;

              return (
                <LifeHiringSection
                  key={blockKey}
                  title={lchBlock.title}
                  description={lchBlock.description}
                  cta={lchBlock.cta || hiringCallout.cta}
                  href={lchBlock.href || hiringCallout.href}
                  image={imageUrl}
                  imageAlt={lchBlock.imageAlt || hiringCallout.image.alt}
                />
              );
            }

            const values = (lchBlock.values ?? []).map((v) => ({
              title: v.title,
              description: v.description,
              icon: resolveMediaUrl(v.icon) || v.iconSrc,
              alt: v.iconAlt,
            }));

            return (
              <WorkCultureSection
                key={blockKey}
                title={lchBlock.title}
                description={lchBlock.description}
                values={values.length > 0 ? values : undefined}
              />
            );
          }

          case "career-opportunities": {
            const coBlock = block as BlockCareerOpportunities;

            return (
              <CareerOpportunitiesSection
                key={blockKey}
                eyebrow={coBlock.eyebrow}
                title={coBlock.title}
                description={coBlock.description}
              />
            );
          }

          case "hours-tasks": {
            return <ShopifyHoursTasksSection key={blockKey} />;
          }

          case "mobile-app-comparison": {
            const macBlock = block as BlockMobileAppComparison;
            const tableHeaders = (macBlock.tableHeaders ?? [])
              .map((h) => (typeof h === "string" ? h : h?.text || ""))
              .filter(Boolean);
            const rows = (macBlock.rows ?? []).map((r) => ({
              title: r.title,
              subtitle: r.subtitle || "",
              appBuilder: r.appBuilder,
              custom: r.custom,
            }));

            return (
              <ShopifyMobileAppComparisonSection
                key={blockKey}
                content={{
                  eyebrow: macBlock.eyebrow,
                  heading: parseTextOrArray(macBlock.heading),
                  description: macBlock.description || "",
                  tableHeaders:
                    tableHeaders.length > 0
                      ? tableHeaders
                      : [
                          "Features & Capabilities",
                          "Shopify App Builders",
                          "Custom Shopify Mobile App (Dynamic Dreamz)",
                        ],
                  rows: rows.length > 0 ? rows : [],
                }}
              />
            );
          }

          case "seo-safe-migration": {
            const ssmBlock = block as BlockSeoSafeMigration;
            const tags = (ssmBlock.tags ?? [])
              .map((t) => (typeof t === "string" ? t : t.tag || ""))
              .filter(Boolean);
            const checks = (ssmBlock.checks ?? [])
              .map((c) => (typeof c === "string" ? c : c.text || ""))
              .filter(Boolean);
            const urlMappings = (ssmBlock.urlMappings ?? []).map((m) => ({
              source: m.source,
              statusCode: m.statusCode || "301 Moved Permanently",
              target: m.target,
            }));

            return (
              <SeoSafeMigrationSection
                key={blockKey}
                id={ssmBlock.sectionId || undefined}
                content={{
                  eyebrow: ssmBlock.eyebrow || undefined,
                  heading: ssmBlock.heading,
                  description: ssmBlock.description || "",
                  tags,
                  urlMappings,
                  checks,
                }}
              />
            );
          }

          case "theme-customization-approach": {
            const tcaBlock = block as BlockThemeCustomizationApproach;
            const approaches = (tcaBlock.approaches ?? []).map((app) => {
              const points = (app.points ?? []).map((pt) => {
                if (typeof pt === "string") return pt;
                if (!pt.label && pt.text) return pt.text;
                const ratingImgUrl = resolveMediaUrl(pt.ratingImage) || pt.ratingImageSrc;
                return {
                  label: pt.label || "",
                  value: pt.value || "",
                  ratingImage: ratingImgUrl
                    ? {
                        src: ratingImgUrl,
                        alt: "Verified Customer Rating Stars",
                        width: 108,
                        height: 20,
                      }
                    : undefined,
                };
              });

              const logoUrl = resolveMediaUrl(app.logo) || app.logoSrc;

              return {
                badge: app.badge || undefined,
                title: app.title || undefined,
                description: app.description || undefined,
                isHighlighted: app.isHighlighted ?? false,
                logo: logoUrl
                  ? {
                      src: logoUrl,
                      alt: app.logoAlt || app.title || "Logo",
                      width: 178,
                      height: 40,
                    }
                  : undefined,
                points,
              };
            });

            return (
              <ThemeCustomizationApproachSection
                key={blockKey}
                id={tcaBlock.sectionId || undefined}
                content={{
                  eyebrow: tcaBlock.eyebrow || undefined,
                  heading: tcaBlock.heading,
                  description: tcaBlock.description || "",
                  approaches,
                }}
              />
            );
          }

          case "migration-process": {
            const mpBlock = block as unknown as BlockMigrationProcess;
            return (
              <MigrationProcessSection
                key={blockKey}
                id={mpBlock.sectionId || "migration-process"}
                variant={mpBlock.variant || "cards"}
                titleAlign={(mpBlock as { titleAlign?: "left" | "center" }).titleAlign || undefined}
                content={{
                  eyebrow: mpBlock.eyebrow,
                  heading: mpBlock.heading,
                  description: mpBlock.description,
                  steps: (mpBlock.steps ?? []).map((step) => ({
                    stepNumber: step.stepNumber,
                    title: step.title,
                    description: step.description || "",
                    subBoxes: (step.subBoxes ?? []).map((box) => ({
                      title: box.title || undefined,
                      description: box.description || undefined,
                      items: (box.items ?? []).map((item) =>
                        typeof item === "string" ? item : item.text || "",
                      ),
                    })),
                    categories: (step.categories ?? []).map((cat) => ({
                      title: cat.title || "",
                      items: (cat.items ?? []).map((item) =>
                        typeof item === "string" ? item : item.text || "",
                      ),
                    })),
                  })),
                }}
              />
            );
          }

          case "industry-custom-dev": {
            const icdBlock = block as unknown as BlockIndustryCustomDevelopment;
            const items = (icdBlock.items ?? [])
              .map((item) => (typeof item === "string" ? item : item.text || ""))
              .filter(Boolean);
            return (
              <IndustryCustomDevelopmentSection
                key={blockKey}
                content={{
                  eyebrow: icdBlock.eyebrow,
                  heading: icdBlock.heading || "",
                  description: icdBlock.description || "",
                  items,
                }}
              />
            );
          }

          case "shopify-app-benefits": {
            const sabBlock = block as BlockShopifyAppBenefits;
            const items = (sabBlock.items ?? []).map((item) => ({
              title: item.title,
              description: item.description,
              icon: resolveMediaUrl(item.icon) || item.iconSrc || "",
              iconAlt: item.iconAlt || item.title || "",
            }));

            return (
              <ShopifyAppBenefitsSection
                key={blockKey}
                content={{
                  heading: toText(sabBlock.heading),
                  description: sabBlock.description,
                  items,
                }}
              />
            );
          }

          case "shopify-mobile-app-dtc": {
            const smdBlock = block as BlockShopifyMobileAppDtc;
            const paragraphs = smdBlock.description
              ? smdBlock.description.split("\n\n").map((p) => p.trim()).filter(Boolean)
              : undefined;
            const cards = (smdBlock.cards ?? []).map((card, idx) => ({
              tag: card.tag,
              title: card.title,
              description: card.description,
              badges: card.showBadges && (idx === 1 || card.tag?.includes("Proof"))
                ? [
                    {
                      src: "/assets/proof/clutch-rating.svg",
                      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
                      href: "https://clutch.co/profile/dynamic-dreamz",
                      width: 111,
                      height: 44,
                    },
                    {
                      src: "/assets/proof/trustpilot-rating.svg",
                      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
                      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
                      width: 148,
                      height: 50,
                    },
                  ]
                : undefined,
            }));

            return (
              <ShopifyMobileAppDtcSection
                key={blockKey}
                content={{
                  eyebrow: smdBlock.eyebrow,
                  heading: parseTextOrArray(smdBlock.heading),
                  paragraphs: paragraphs && paragraphs.length > 0 ? paragraphs : undefined,
                  cards,
                }}
              />
            );
          }

          case "shopify-mobile-app-experience": {
            const smeBlock = block as BlockShopifyMobileAppExperience;
            const moments = (smeBlock.moments ?? []).map((m) => ({
              step: m.step,
              title: m.title,
              description: m.description,
              points: (m.points ?? []).map((p) => (typeof p === "string" ? p : p.text || "")).filter(Boolean),
            }));

            const cols = (smeBlock.columns === "3" ? 3 : 4) as 3 | 4;

            return (
              <ShopifyMobileAppExperienceSection
                key={blockKey}
                columns={cols}
                content={{
                  eyebrow: smeBlock.eyebrow,
                  heading: parseTextOrArray(smeBlock.heading),
                  description: smeBlock.description || "",
                  moments,
                }}
              />
            );
          }

          case "mobile-app-work": {
            const mawBlock = block as BlockMobileAppWork;
            const items = (mawBlock.items ?? []).map((item) => {
              const appLinks = [];
              if (item.playStoreUrl) {
                appLinks.push({
                  platform: "android" as const,
                  label: mobileAppSharedCopy.androidApp,
                  url: item.playStoreUrl,
                  href: item.playStoreUrl,
                  icon: "/assets/our-work/platforms/android-icon.svg",
                  iconAlt: "Android",
                });
              }
              if (item.appStoreUrl) {
                appLinks.push({
                  platform: "ios" as const,
                  label: mobileAppSharedCopy.iosApp,
                  url: item.appStoreUrl,
                  href: item.appStoreUrl,
                  icon: "/assets/our-work/platforms/app-store-ios.svg",
                  iconAlt: "iOS",
                });
              }

              return {
                name: item.name,
                category: item.category,
                image: resolveMediaUrl(item.image) || item.imageSrc || "",
                imageAlt: item.imageAlt || item.name,
                href: item.href || (appLinks.length > 0 ? null : "#"),
                appLinks: appLinks.length > 0 ? appLinks : undefined,
              };
            });

            return (
              <ShopifyMobileAppWorkSection
                key={blockKey}
                className={shouldRemoveTopPadding ? "pt-0" : undefined}
                content={{
                  eyebrow: mawBlock.eyebrow,
                  heading: toText(mawBlock.heading),
                  description: toText(mawBlock.description) || undefined,
                  ctaLabel: mawBlock.ctaLabel || "View our work",
                  ctaHref: mawBlock.ctaHref || "/our-work",
                  ctaAriaLabel: mawBlock.ctaAriaLabel,
                  secondaryCta: mawBlock.secondaryCta?.label
                    ? {
                        label: mawBlock.secondaryCta.label,
                        href: mawBlock.secondaryCta.href || "#",
                        ariaLabel: mawBlock.secondaryCta.ariaLabel,
                      }
                    : undefined,
                  items,
                }}
              />
            );
          }

          case "text-box": {
            const tb = block as BlockTextBox;
            const paragraphs = (tb.paragraphs ?? []).map((p) => p.text).filter(Boolean);
            const listItems = (tb.listItems ?? []).map((i) => i.item).filter(Boolean);
            return (
              <TextBoxSection
                key={blockKey}
                heading={tb.heading}
                subheading={tb.subheading}
                paragraphs={paragraphs.length > 0 ? paragraphs : undefined}
                listItems={listItems.length > 0 ? listItems : undefined}
                variant={tb.variant || "green"}
              />
            );
          }

          case "architecture-patterns": {
            const ap = block as BlockArchitecturePatterns;
            return (
              <RecentArchitecturePatternsSection
                key={blockKey}
                content={{
                  eyebrow: ap.eyebrow,
                  heading: ap.heading,
                  description: ap.description,
                  items: (ap.items ?? []).map((i) => ({
                    label: i.label,
                    title: i.title,
                    description: i.description,
                    stack: i.stack,
                  })),
                }}
              />
            );
          }

          case "tech-keywords": {
            const tk = block as BlockTechKeywords;
            return (
              <TechKeywordSection
                key={blockKey}
                content={{
                  eyebrow: tk.eyebrow,
                  heading: tk.heading,
                  introText: tk.introText,
                  highlightedText: tk.highlightedText,
                  bodyText: tk.bodyText,
                }}
              />
            );
          }

          case "shopify-apps-directory": {
            const sad = block as BlockShopifyAppsDirectory;
            return (
              <div key={blockKey} className="overflow-x-clip font-sans" data-page="shopify-apps">
                <ShopifyAppsHeroSection title={sad.title} />
                <ShopifyAppsGridSection
                  apps={(sad.apps ?? []).map((app) => ({
                    id: (app as any).id || (app.href ? app.href.replace(/[^a-zA-Z0-9]/g, "-") : app.title),
                    title: app.title,
                    additionalInfo: app.additionalInfo || "",
                    description: app.description || "",
                    image: resolveMediaUrl(app.image) || app.imageSrc || "",
                    alt: app.alt || app.title,
                    href: app.href,
                  }))}
                />
              </div>
            );
          }

          case "risks-shopify-topics": {
            const rst = block as BlockRisksShopifyTopics;
            return (
              <RisksShopifyTopics
                key={blockKey}
                items={(rst.items ?? []).map((item) => ({
                  id: item.topicId,
                  label: item.label,
                  heading: item.heading,
                  introParagraphs: (item.introParagraphs ?? []).map((p) => p.text),
                  paragraphs: (item.paragraphs ?? []).map((p) => p.text),
                  bullets: (item.bullets ?? []).map((b) => ({ label: b.label, text: b.text })),
                  closingParagraphs: (item.closingParagraphs ?? []).map((p) => p.text),
                }))}
              />
            );
          }

          case "design-reasons": {
            const dr = block as BlockDesignReasons;
            return (
              <DesignReasonsSection
                key={blockKey}
                title={dr.title}
                description={dr.description}
                items={(dr.items ?? []).map((i) => ({
                  title: i.title,
                  description: i.description,
                }))}
              />
            );
          }

          case "white-label-services": {
            const wls = block as BlockWhiteLabelServices;
            return (
              <WhiteLabelServicesSection
                key={blockKey}
                eyebrow={wls.eyebrow}
                title={wls.title}
                description={wls.description}
                idPrefix={wls.idPrefix}
                showCta={wls.showCta ?? true}
                ctaLabel={wls.ctaLabel}
                services={(wls.services ?? []).map((s) => ({
                  title: s.title,
                  description: s.description,
                  icon: resolveMediaUrl(s.icon) || s.iconSrc || "/assets/icons/gradient-check.svg",
                  href: s.href || undefined,
                  linkLabel: s.linkLabel || undefined,
                }))}
              />
            );
          }

          case "white-label-stats": {
            const wlst = block as BlockWhiteLabelStats;
            return (
              <WhiteLabelCounterSection
                key={blockKey}
                counters={(wlst.stats ?? []).map((s) => ({
                  value: s.value,
                  label: s.label,
                }))}
              />
            );
          }

          case "white-label-why": {
            const wlw = block as BlockWhiteLabelWhy;
            return (
              <WhiteLabelWhySection
                key={blockKey}
                eyebrow={wlw.eyebrow}
                title={wlw.title}
                reasons={(wlw.reasons ?? []).map((r) => ({
                  title: r.title,
                  description: r.description,
                }))}
              />
            );
          }

          default:
            return null;
        }
      })();

      if (!renderedBlock) return null;

      return (
        <div
          key={blockKey}
          data-block-type={normalizedType}
          data-block-bg={currentBg}
          className={cn(
            shouldRemoveTopPadding &&
              "[&>section]:!pt-0 [&>div>section]:!pt-0 [&>section]:max-[992px]:!pt-0 [&>section]:max-[768px]:!pt-0",
          )}
        >
          {renderedBlock}
        </div>
      );
    })}
    </>
  );
}

export const RenderBlocks = BlockRenderer;
export type RenderBlocksProps = BlockRendererProps;
