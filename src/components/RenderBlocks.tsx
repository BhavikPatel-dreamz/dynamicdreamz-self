import React from "react";
import dynamic from "next/dynamic";
import { appmakerHeroCoBranding } from "@/content/appmaker-shopify-mobile-app-development";
import { shopifyPlusAgencyWhyChoose } from "@/content/shopify-plus-agency";
import { shopifyMigrationWhyChoose } from "@/content/shopify-migration";
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
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
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
    | "default"
    | "shopify-plus-experts"
    | "migration";
  backgroundColor?: "cream" | "white";
  eyebrows?: readonly (string | { text?: string; id?: string | number })[];
  eyebrow?: string;
  eyebrowSpans?: readonly { text?: string }[];
  title: string;
  titleAccent?: string;
  titleAccentTag?: "i" | "span";
  titleAccentClassName?: string;
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
  };
  // Media - Video
  video?: string;
  videoSrc?: string;
  videoPoster?: CmsMedia;
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
  imageClassName?: string;
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
  wrapperClassName?: string;
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
  cardVariant?: "green" | "yellow" | "transparent";
  sixCards?: boolean;
  lastColFull?: boolean;
  isRoundedNumber?: boolean;
  bottomNote?: string;
  services?: readonly {
    tag?: string;
    number?: string;
    badge?: string;
    title: string;
    description?: string;
    pills?: readonly (string | { text?: string })[];
    bullets?: readonly (string | { text?: string })[];
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
  variant?:
    | "counters-bar"
    | "city-counters"
    | "team-boxes"
    | "shopify-plus-proof"
    | "why-choose-migration"
    | "why-choose-boxes"
    | "white-label-counters"
    | "credential-evidence";
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
    icon?: CmsMedia;
    iconSrc?: string;
    iconAlt?: string;
  }[];
}

export interface BlockProcessTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?:
    | "development-process"
    | "migration-grid"
    | "horizontal-process"
    | "numbered-timeline"
    | "migration-process"
    | "app-process";
  columns?: "3" | "4";
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
}

export function BlockRenderer({ sections }: BlockRendererProps) {
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

        switch (normalizedType) {
          // Master Service Hero (and legacy video alias)
          case "service-hero":
          case "service-hero-video": {
            const shBlock = block as BlockServiceHero;
            const isShopifyPlusExperts =
              shBlock.variant === "shopify-plus-experts" ||
              shBlock.wrapperClassName?.includes("shopify-plus-experts");

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

            const secondaryCta = shBlock.secondaryCta?.label
              ? {
                  label: shBlock.secondaryCta.label,
                  href: shBlock.secondaryCta.href || "",
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
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
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
                shBlock.wrapperClassName?.includes("appmaker") ||
                shBlock.wrapperClassName?.includes("full-width-sec") ||
                shBlock.title?.includes("App in Minutes");

              const isRisks =
                shBlock.maxWidth === "wide" ||
                shBlock.wrapperClassName?.includes("max-w-[830px]") ||
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
                    paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
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
                    paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
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
                  textColumnClassName="left-col z-1 flex w-[51%] flex-col items-start justify-center py-[60px] max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:text-center max-[1200px]:pt-15 max-[1200px]:pb-[30px] max-[992px]:py-10"
                  textClassName="hero-content w-full"
                  titleClassName="mb-2.5 font-montreal-medium text-[50px] font-normal leading-[60px] tracking-normal text-ink max-[1200px]:text-[40px] max-[1200px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-[40px]"
                  descriptionClassName="my-2.5 font-sans text-base font-medium leading-[28px] text-[#535353] max-[1200px]:mx-auto max-[1200px]:text-sm max-[1200px]:leading-6 max-[768px]:mt-3 max-[768px]:text-sm"
                  mediaColumnClassName="right-col flex w-[43.182%] items-end justify-center max-[1400px]:w-[48%] max-[1200px]:w-full max-[1200px]:mt-6 max-[1200px]:hidden"
                  mediaClassName="image-block flex w-full items-end justify-center pt-[60px] max-[1200px]:pt-0"
                  imageClassName="block h-auto w-full max-w-[570px] object-contain object-bottom mx-auto"
                  content={{
                    eyebrow: eyebrows.length > 0 ? eyebrows : undefined,
                    title: shBlock.title,
                    description: shBlock.description || "",
                    secondaryDescription: shBlock.secondaryDescription,
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
                    secondaryCtaLabel: secondaryCta?.label,
                    secondaryCtaHref: secondaryCta?.href,
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
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
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
                    paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
                    ctaLabel: primaryCta?.label,
                    ctaHref: primaryCta?.href,
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
              shBlock.variant === "migration"
                ? "hero-shopify-migration"
                : shBlock.wrapperClassName;

            const imageClass =
              shBlock.imageBlend === "darken"
                ? "mix-blend-darken"
                : shBlock.imageClassName;

            return (
              <ServiceHeroVideoSection
                key={blockKey}
                className={isWhiteBg ? "bg-white" : undefined}
                titleAccentTag={shBlock.titleAccentTag}
                titleAccentClassName={shBlock.titleAccentClassName}
                titleAccentPosition={shBlock.titleAccentPosition}
                wrapperClassName={wrapperClass}
                content={{
                  title: shBlock.title,
                  titleAccent: shBlock.titleAccent,
                  subtitle: shBlock.subtitle,
                  lead: shBlock.lead,
                  description: shBlock.description,
                  body: shBlock.body,
                  paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
                  cta: primaryCta?.label,
                  ctaHref: primaryCta?.href,
                  secondaryCta,
                  eyebrowSpans: eyebrows.length > 0 ? eyebrows : undefined,
                  video: (variant === "video" || !imageUrl) ? videoSrc : undefined,
                  videoPoster: resolveMediaUrl(shBlock.videoPoster),
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
            const brands = (bpBlock.brands ?? []).map((b) => ({
              name: b.name || "",
              src: resolveMediaUrl(b.logo) || b.src || "",
              alt: b.alt || b.name || "",
              width: b.width || 120,
              height: b.height || 44,
              href: b.href || "#",
            }));

            if (bpBlock.variant === "home") {
              return (
                <BrandPartnersSection
                  key={blockKey}
                  heading={bpBlock.heading}
                  description={bpBlock.description}
                  items={brands}
                />
              );
            }

            if (bpBlock.variant === "integrations") {
              return <IntegrationsSection key={blockKey} title={bpBlock.heading} />;
            }

            if (bpBlock.variant === "tools-grid") {
              return (
                <WhiteLabelToolsSection
                  key={blockKey}
                  title={bpBlock.heading}
                  description={bpBlock.description}
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

            return (
              <IndustryBrandsSection
                key={blockKey}
                heading={bpBlock.heading}
                density={bpBlock.density || "standard"}
                mobileSpacing={bpBlock.mobileSpacing || "standard"}
                showHeading={bpBlock.showHeading ?? true}
                content={{
                  slug: "brand-partners",
                  ariaLabel: bpBlock.heading || "Brand Partners",
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

            const faqs = (faBlock.faqs ?? []).map((f) => ({
              question: f.question,
              answer: f.answer,
            }));

            return (
              <SplitFaqSection
                key={blockKey}
                idPrefix={faBlock.idPrefix || "faq"}
                eyebrow={faBlock.eyebrow}
                heading={faBlock.heading}
                description={faBlock.description}
                iconVariant={faBlock.iconVariant || "circle-cross"}
                animateOnReveal={faBlock.animateOnReveal}
                items={faqs}
              />
            );
          }

          // Block 4: CTA Banner
          case "cta-banner": {
            const cbBlock = block as BlockCtaBanner;
            const ctaHref = cbBlock.ctaHref || "/request-a-quote";
            const ctaLabel = cbBlock.ctaLabel || "Let's Talk";

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
            if (tcBlock.variant === "home") {
              return (
                <TestimonialsSection
                  key={blockKey}
                  eyebrow={tcBlock.eyebrow}
                  title={tcBlock.heading}
                  description={tcBlock.description}
                />
              );
            }

            const items = (tcBlock.items ?? []).map((item) => ({
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
              <HappyClientSection
                key={blockKey}
                eyebrow={tcBlock.eyebrow}
                heading={tcBlock.heading}
                description={tcBlock.description}
                variant={tcBlock.variant === "client-stories" ? "client-stories" : undefined}
                hasTopPadding={tcBlock.hasTopPadding}
                items={items}
              />
            );
          }

          // Block 6: Services Grid
          case "services-grid": {
            const sgBlock = block as BlockServicesGrid;
            const services = sgBlock.services ?? [];

            if (sgBlock.variant === "theme-boxes") {
              return (
                <ThemeCustomizationServicesSection
                  key={blockKey}
                  variant={sgBlock.cardVariant || "green"}
                  isRoundedNumber={sgBlock.isRoundedNumber}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description,
                    bottomNote: sgBlock.bottomNote,
                    boxes: services.map((s) => ({
                      number: s.number,
                      badge: s.badge,
                      title: s.title,
                      description: s.description,
                      icon: resolveMediaUrl(s.icon) || s.iconSrc,
                      iconAlt: s.iconAlt,
                    })),
                  }}
                />
              );
            }

            if (sgBlock.variant === "agency-services") {
              return (
                <AgencyServicesSection
                  key={blockKey}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    description: sgBlock.description || "",
                    items: services.map((s) => ({
                      title: s.title,
                      description: s.description || "",
                      tag: s.tag,
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

            if (sgBlock.variant === "migration-services") {
              return (
                <ShopifyMigrationServicesSection
                  key={blockKey}
                  eyebrow={sgBlock.eyebrow}
                  heading={sgBlock.heading}
                  description={sgBlock.description}
                  items={services.map((s) => ({
                    title: s.title,
                    description: s.description || "",
                    image: resolveMediaUrl(s.icon) || s.iconSrc || "/assets/services/shopify-migration-default.webp",
                    imageAlt: s.iconAlt || s.title,
                    href: s.ctaHref || "#",
                    ctaLabel: s.ctaLabel || "",
                  }))}
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
              return (
                <ShopifyAppFeaturesSection
                  key={blockKey}
                  content={{
                    eyebrow: sgBlock.eyebrow,
                    heading: sgBlock.heading,
                    centerImage: {
                      src: "/assets/services/shopify-mobile-app-development/features/center_phone_img.webp",
                      alt: "App Features",
                      width: 388,
                      height: 600,
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
                  heading={psBlock.heading}
                  description={psBlock.description}
                  items={(psBlock.items ?? []).map((item) => ({
                    title: item.name,
                    href: item.href || "#",
                    image: resolveMediaUrl(item.image) || item.imageSrc || "",
                    imageAlt: item.imageAlt || item.name,
                    technology: item.metrics || "Shopify",
                    industry: item.category || "Ecommerce",
                  }))}
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

            const items = (psBlock.items ?? []).map((item) => ({
              name: item.name,
              href: item.href,
              image: resolveMediaUrl(item.image) || item.imageSrc || "",
              imageAlt: item.imageAlt || item.name,
              category: item.category,
            }));

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
              const migrationContent = {
                ...shopifyMigrationWhyChoose,
                eyebrow: prBlock.eyebrow || shopifyMigrationWhyChoose.eyebrow,
                heading: prBlock.heading || shopifyMigrationWhyChoose.heading,
                description:
                  prBlock.description || shopifyMigrationWhyChoose.description,
              };
              return (
                <WhyChooseShopifyMigrationSection
                  key={blockKey}
                  content={migrationContent}
                />
              );
            }

            if (prBlock.variant === "why-choose-boxes") {
              return (
                <CityWhyChooseBoxesSection
                  key={blockKey}
                  content={{
                    eyebrow: prBlock.eyebrow,
                    heading: prBlock.heading || "",
                    description: prBlock.description,
                    items: (prBlock.boxes ?? []).map((b) => ({
                      title: b.title,
                      description: b.description || "",
                      subtitle: b.badgeText || b.number,
                      icon: resolveMediaUrl(b.icon) || b.iconSrc,
                      iconAlt: b.iconAlt || b.title,
                    })),
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
                  heading: prBlock.heading,
                  description: prBlock.description,
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
              return (
                <ShopifyMigrationNumberedGridSection
                  key={blockKey}
                  eyebrow={ptBlock.eyebrow}
                  heading={ptBlock.heading}
                  description={ptBlock.description}
                  items={steps.map((s) => ({
                    number: s.step || "",
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
              return (
                <ShopifyAppProcessSection
                  key={blockKey}
                  content={{
                    eyebrow: ptBlock.eyebrow,
                    heading: ptBlock.heading,
                    steps: steps.map((s) => ({
                      title: s.title,
                      description: s.description || "",
                      icon: "/assets/services/shopify-mobile-app-development/process/process_icon_1.svg",
                      iconAlt: s.title,
                    })),
                  }}
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
                  heading: prBlock.heading,
                  description: prBlock.description,
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
                    avatar: resolveMediaUrl(t.avatar),
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
              title: item.number ? `${item.number} ${item.title}` : item.title,
              description: item.description,
            }));

            return (
              <EvaluationFrameworkSection
                key={blockKey}
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

          default:
            return null;
        }
      })}
    </>
  );
}

export const RenderBlocks = BlockRenderer;
export type RenderBlocksProps = BlockRendererProps;
