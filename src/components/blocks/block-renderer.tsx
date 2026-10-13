import React from "react";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { FeaturesGridSection } from "@/components/sections/features-grid-section";
import {
  HappyClientSection,
  type HappyClientTestimonialItem,
} from "@/components/sections/happy-client-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { ProofCounterSection } from "@/components/sections/proof-counter-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import {
  ServicesCaseStudiesSection,
  type CaseStudyPreviewItem,
} from "@/components/sections/services-case-studies-section";
import { BrandPartnersSection } from "@/components/sections/home/brand-partners-section";
import { HomeHeroSection } from "@/components/sections/home/home-hero-section";
import { ShopifyPlusAgencySection } from "@/components/sections/home/shopify-plus-agency-section";
import { WhiteLabelPartnerSection } from "@/components/sections/home/white-label-partner-section";
import { CommerceSolutionsSection } from "@/components/sections/home/commerce-solutions-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { IntegrationsSection } from "@/components/sections/home/integrations-section";
import { InsightsSection } from "@/components/sections/home/insights-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { TechnologiesWorkWithSection } from "@/components/sections/technologies-work-with-section";
import { TwoColImageWithTextSection } from "@/components/sections/two-col-image-with-text-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { SiteMapPage } from "@/components/sections/site-map-page";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { AboutTimelineSection } from "@/components/sections/about/about-timeline-section";
import { AboutFoundersSection } from "@/components/sections/about/about-founders-section";
import { AboutTeamSection } from "@/components/sections/about/about-team-section";
import { AboutValuesSection } from "@/components/sections/about/about-values-section";
import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { OurWorkProjectsSection } from "@/components/sections/our-work/our-work-projects-section";
import { OurWorkCaseStudiesSection } from "@/components/sections/our-work/our-work-case-studies-section";
import {
  ContactHeroSection,
  ContactFormSection,
  ContactOfficesSection,
  ContactDetailsSection,
} from "@/components/sections/contact-page";
import { BookDiscoveryCallPage } from "@/components/sections/book-a-discovery-call-page";
import { RequestQuotePage } from "@/components/sections/request-quote-page";
import { CareerHeroSection } from "@/components/sections/career/career-hero-section";
import { CareerOpportunitiesSection } from "@/components/sections/career/career-opportunities-section";
import { CareerBenefitIcon } from "@/components/sections/career/career-benefit-icons";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { CareerApplyNowPage } from "@/components/sections/career-apply-now/career-apply-now-page";
import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";

export type CmsMedia =
  | {
      url?: string | null;
      alt?: string | null;
      width?: number | null;
      height?: number | null;
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

function extractYoutubeId(val?: string): string {
  if (!val) return "";
  const trimmed = val.trim();
  if (!trimmed.includes("/") && !trimmed.includes(".")) return trimmed;
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
  );
  return match ? match[1] : trimmed;
}

export interface BlockHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  establishedText?: string;
  partnerBadgeText?: string;
  secondaryCta?: {
    label?: string;
    href?: string;
  };
  proofBadges?: readonly {
    name?: string;
    href?: string;
    logo?: CmsMedia | null;
    alt?: string;
  }[];
  eyebrows?: readonly (string | { text?: string; id?: string | number })[];
  image?: CmsMedia | null;
  showReviews?: boolean;
  variant?: "split" | "centered" | "home";
}

export interface BlockProofCounters {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  counters?: readonly {
    id?: string | number;
    label: string;
    value?: number;
    display?: string;
    suffix?: string;
  }[];
}

export interface BlockFaqAccordion {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  faqs?: readonly {
    id?: string | number;
    question: string;
    answer: string;
  }[];
}

export interface BlockCtaBanner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  btnText?: string;
  btnUrl?: string;
}

export interface BlockFeaturesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  features?: readonly {
    id?: string | number;
    title: string;
    description: string;
    icon?: CmsMedia | null;
    linkText?: string;
    linkUrl?: string;
  }[];
}

export interface BlockProcessTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  steps?: readonly {
    id?: string | number;
    stepNumber?: string;
    title: string;
    description?: string;
  }[];
}

export interface BlockHappyClients {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  testimonials?: readonly (
    | string
    | number
    | {
        id?: string | number;
        authorName?: string;
        clientName?: string;
        name?: string;
        company?: string;
        quote?: string | readonly string[];
        content?: string | readonly string[];
        videoId?: string;
        videoUrl?: string;
        avatar?: CmsMedia | null;
        image?: CmsMedia | null;
        logo?: CmsMedia | null;
        companyLogo?: CmsMedia | null;
        logoAlt?: string;
      }
  )[];
}

export interface BlockCaseStudies {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  caseStudies?: readonly (
    | string
    | number
    | {
        id?: string | number;
        title?: string;
        slug?: string;
        thumbnail?: CmsMedia | null;
        heroImage?: CmsMedia | null;
        technology?: string;
        industry?: string;
        tags?: readonly string[];
      }
  )[];
}

export interface BlockBrandPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  description?: string;
  variant?: "grid" | "slider";
  logos?: readonly {
    id?: string | number;
    name?: string;
    logo?: CmsMedia | null;
    url?: string;
  }[];
}

export interface BlockPricingModels {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  models?: readonly {
    id?: string | number;
    label: string;
    badge?: string;
    price: string;
    description?: string;
    bullets?: readonly (string | { text?: string })[];
    ctaLabel: string;
    ctaHref: string;
  }[];
}

export interface BlockTechnologiesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  categories?: readonly {
    id?: string | number;
    category: string;
    technologies?: readonly (
      | string
      | {
          id?: string | number;
          name?: string;
          icon?: CmsMedia | null;
        }
    )[];
  }[];
}

export interface BlockTwoColImageWithText {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description: string;
  image?: CmsMedia | null;
  imagePosition?: "left" | "right";
  bullets?: readonly (string | { text?: string })[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockIndustriesGrid {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  description?: string;
  variant?: "grid" | "carousel";
  industries?: readonly {
    id?: string | number;
    title: string;
    eyebrow?: string;
    description?: string;
    image?: CmsMedia | null;
    href?: string;
  }[];
}

export interface BlockLegalContent {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading: string;
  intro?: string;
  containerWidth?: "narrow" | "standard" | "full";
  sections?: readonly {
    id?: string | number;
    title: string;
    level?: "2" | "3";
    paragraphs?: readonly { text: string }[];
    items?: readonly { text: string; boldPrefix?: string }[];
    closingParagraphs?: readonly { text: string }[];
  }[];
  contactInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    phoneHref?: string;
    address?: string;
    addressHref?: string;
  };
}

export interface BlockSiteMapDirectory {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading: string;
  description?: string;
  groups?: readonly {
    id?: string | number;
    title?: string;
    links?: readonly {
      id?: string | number;
      label: string;
      href: string;
    }[];
  }[];
}

export interface BlockShopifyPlusAgency {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  intro?: string;
  paragraphs?: readonly { text: string }[];
  counters?: readonly {
    value: string;
    label: string;
    note?: string;
    tone?: "green" | "stone" | "peach" | "lime";
  }[];
  videoSrc?: string;
}

export interface BlockWhiteLabelPartner {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  bullets?: readonly { text: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockCommerceSolutions {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  solutions?: readonly {
    title: string;
    summary: string;
    body: string;
    href?: string;
    cta?: string;
  }[];
}

export interface BlockSelectedWork {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockTestimonialsCarousel {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockIntegrationsPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
}

export interface BlockLatestInsights {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlockAboutHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  deliveryTitle?: string;
  statistics?: readonly { label: string; value: string }[];
}

export interface BlockAboutStory {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  caption?: string;
  videoId?: string;
  videoTitle?: string;
  poster?: CmsMedia | null;
  posterAlt?: string;
  overlay?: CmsMedia | null;
}

export interface BlockAboutTimeline {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  milestones?: readonly {
    year?: string;
    description?: string;
    image?: CmsMedia | null;
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
  descriptions?: readonly { text: string }[];
  founders?: readonly {
    name: string;
    role: string;
    biography?: string;
    image?: CmsMedia | null;
    alt?: string;
    linkedIn?: string;
  }[];
}

export interface BlockAboutTeam {
  __component?: string;
  blockType?: string;
  id?: string | number;
  keyManagers?: readonly {
    name: string;
    role: string;
    image?: CmsMedia | null;
    alt?: string;
  }[];
  departmentLeaders?: readonly {
    name: string;
    role: string;
    image?: CmsMedia | null;
    alt?: string;
  }[];
}

export interface BlockAboutValues {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title?: string;
  description?: string;
  values?: readonly {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface BlockOurWorkHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  showcaseImages?: readonly {
    image?: CmsMedia | null;
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

export interface BlockOurWorkCaseStudies {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockContactHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  quickLinks?: readonly { label: string; href: string }[];
}

export interface BlockContactForm {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockContactOffices {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
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
  title?: string;
}

export interface BlockDiscoveryCall {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  host?: {
    name: string;
    role: string;
    image?: CmsMedia | null;
    imageAlt?: string;
  };
  benefits?: readonly {
    icon?: string;
    title: string;
    description: string;
  }[];
  calendar?: {
    heading?: string;
    details?: string;
    src?: string;
    iframeTitle?: string;
  };
}

export interface BlockRequestQuoteHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heroTitle?: string;
  heroDescription?: string;
  formTitle?: string;
  counters?: readonly { label: string; count: string; unit?: string }[];
  badges?: readonly {
    href?: string;
    ariaLabel?: string;
    logo?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  testimonials?: readonly {
    name: string;
    quote: string;
    avatar?: CmsMedia | null;
  }[];
  budgetOptions?: readonly { option: string }[];
}

export interface BlockCareerHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
  badges?: readonly {
    href?: string;
    alt?: string;
    logo?: CmsMedia | null;
    width?: number;
    height?: number;
  }[];
  scrollingImages?: readonly {
    image?: CmsMedia | null;
    alt?: string;
    width?: number;
    height?: number;
  }[];
}

export interface BlockCareerOpportunities {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface BlockCareerPerks {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  perks?: readonly {
    title: string;
    iconName: string;
  }[];
}

export interface BlockCareerApply {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
}

export type CmsSectionBlock =
  | BlockHero
  | BlockProofCounters
  | BlockFaqAccordion
  | BlockCtaBanner
  | BlockFeaturesGrid
  | BlockProcessTimeline
  | BlockHappyClients
  | BlockCaseStudies
  | BlockBrandPartners
  | BlockPricingModels
  | BlockTechnologiesGrid
  | BlockTwoColImageWithText
  | BlockIndustriesGrid
  | BlockLegalContent
  | BlockSiteMapDirectory
  | BlockShopifyPlusAgency
  | BlockWhiteLabelPartner
  | BlockCommerceSolutions
  | BlockSelectedWork
  | BlockTestimonialsCarousel
  | BlockIntegrationsPartners
  | BlockLatestInsights
  | BlockAboutHero
  | BlockAboutStory
  | BlockAboutTimeline
  | BlockAboutFounders
  | BlockAboutTeam
  | BlockAboutValues
  | BlockOurWorkHero
  | BlockOurWorkProjects
  | BlockOurWorkCaseStudies
  | BlockContactHero
  | BlockContactForm
  | BlockContactOffices
  | BlockContactDetails
  | BlockDiscoveryCall
  | BlockRequestQuoteHero
  | BlockCareerHero
  | BlockCareerOpportunities
  | BlockCareerPerks
  | BlockCareerApply
  | { [key: string]: unknown; __component?: string; blockType?: string; id?: string | number };

export interface BlockRendererProps {
  sections?: readonly CmsSectionBlock[] | null;
}

/**
 * Universal Block Renderer for Headless CMS.
 * Dynamically resolves and renders modular CMS section blocks
 * to their corresponding production React components.
 */
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
        const blockKey = `${rawType || "block"}-${block.id || index}`;

        switch (normalizedType) {
          case "hero": {
            const heroBlock = block as BlockHero;
            if (heroBlock.variant === "home") {
              const proofLogos =
                heroBlock.proofBadges && heroBlock.proofBadges.length > 0
                  ? heroBlock.proofBadges.map((badge) => ({
                      src: resolveMediaUrl(badge.logo),
                      alt: badge.alt || badge.name || "",
                      href: badge.href || "#",
                      width:
                        typeof badge.logo === "object" && badge.logo?.width
                          ? badge.logo.width
                          : 136,
                      height:
                        typeof badge.logo === "object" && badge.logo?.height
                          ? badge.logo.height
                          : 44,
                    }))
                  : undefined;

              return (
                <HomeHeroSection
                  description={heroBlock.description}
                  discoveryCta={heroBlock.ctaLabel}
                  discoveryCtaHref={heroBlock.ctaHref}
                  established={heroBlock.establishedText}
                  key={blockKey}
                  partnerBadge={heroBlock.partnerBadgeText}
                  proofLogos={proofLogos}
                  shopifyWorkCta={heroBlock.secondaryCta?.label}
                  shopifyWorkCtaHref={heroBlock.secondaryCta?.href}
                  title={heroBlock.title}
                />
              );
            }

            const imageUrl = resolveMediaUrl(heroBlock.image);
            const heroImage = imageUrl
              ? {
                  src: imageUrl,
                  alt: resolveMediaAlt(heroBlock.image, heroBlock.title),
                  width:
                    typeof heroBlock.image === "object" && heroBlock.image?.width
                      ? heroBlock.image.width
                      : 684,
                  height:
                    typeof heroBlock.image === "object" && heroBlock.image?.height
                      ? heroBlock.image.height
                      : 550,
                }
              : undefined;

            const eyebrows = heroBlock.eyebrows
              ? heroBlock.eyebrows
                  .map((item) => (typeof item === "string" ? item : item?.text || ""))
                  .filter(Boolean)
              : undefined;

            return (
              <ServiceHeroSection
                content={{
                  title: heroBlock.title,
                  description: heroBlock.description || "",
                  subheading: heroBlock.subheading,
                  ctaLabel: heroBlock.ctaLabel,
                  ctaHref: heroBlock.ctaHref,
                  eyebrows: eyebrows && eyebrows.length > 0 ? eyebrows : undefined,
                  image: heroImage,
                }}
                key={blockKey}
                showReviews={heroBlock.showReviews !== false}
                variant={heroBlock.variant || "split"}
              />
            );
          }

          case "proof-counters": {
            const counterBlock = block as BlockProofCounters;
            const countersList = counterBlock.counters ?? [];
            const stats = countersList.map((counter) => {
              const parsedValue =
                typeof counter.value === "number"
                  ? counter.value
                  : parseInt(
                      counter.display ? counter.display.replace(/\D/g, "") : "0",
                      10,
                    ) || 0;

              const derivedSuffix =
                counter.suffix ??
                (counter.display ? counter.display.replace(/^\d+/, "") : "");

              return {
                value: parsedValue,
                suffix: derivedSuffix,
                label: counter.label,
              };
            });

            return (
              <ProofCounterSection
                content={{
                  heading: counterBlock.heading,
                  description: counterBlock.description || "",
                  stats,
                }}
                key={blockKey}
              />
            );
          }

          case "faq-accordion": {
            const faqBlock = block as BlockFaqAccordion;
            const faqsList = faqBlock.faqs ?? [];
            const items = faqsList.map((faq, faqIdx) => ({
              id: faq.id ? `faq-${block.id}-${faq.id}` : `faq-${block.id}-${faqIdx}`,
              question: faq.question,
              answer: faq.answer,
            }));

            return (
              <SplitFaqSection
                description={faqBlock.description}
                eyebrow={faqBlock.eyebrow}
                heading={faqBlock.heading}
                idPrefix={`faq-${block.id || index}`}
                items={items}
                key={blockKey}
              />
            );
          }

          case "cta-banner": {
            const ctaBlock = block as BlockCtaBanner;
            return (
              <CtaBannerSection
                ctaHref={ctaBlock.btnUrl}
                ctaLabel={ctaBlock.btnText}
                description={ctaBlock.description}
                heading={ctaBlock.heading}
                key={blockKey}
              />
            );
          }

          case "features-grid": {
            const featureBlock = block as BlockFeaturesGrid;
            const featuresList = featureBlock.features ?? [];
            const features = featuresList.map((feature) => ({
              title: feature.title,
              description: feature.description,
              icon: resolveMediaUrl(feature.icon) || undefined,
              iconAlt: resolveMediaAlt(feature.icon, feature.title),
              linkText: feature.linkText,
              linkUrl: feature.linkUrl,
            }));

            return (
              <FeaturesGridSection
                description={featureBlock.description}
                eyebrow={featureBlock.eyebrow}
                features={features}
                heading={featureBlock.heading}
                key={blockKey}
              />
            );
          }

          case "process-timeline": {
            const processBlock = block as BlockProcessTimeline;
            const stepsList = processBlock.steps ?? [];
            const steps = stepsList.map((step, stepIdx) => ({
              step: step.stepNumber || String(stepIdx + 1).padStart(2, "0"),
              title: step.title,
              description: step.description || "",
            }));

            return (
              <OurDevelopmentProcessSection
                content={{
                  heading: processBlock.heading,
                  eyebrow: processBlock.eyebrow,
                  description: "",
                  steps,
                }}
                key={blockKey}
              />
            );
          }

          case "happy-clients": {
            const clientBlock = block as BlockHappyClients;
            const rawTestimonials = clientBlock.testimonials ?? [];
            const mappedItems: HappyClientTestimonialItem[] = [];

            for (const testimonial of rawTestimonials) {
              if (!testimonial || typeof testimonial !== "object") continue;
              const t = testimonial as {
                authorName?: string;
                clientName?: string;
                name?: string;
                company?: string;
                quote?: string | readonly string[];
                content?: string | readonly string[];
                videoId?: string;
                videoUrl?: string;
                avatar?: CmsMedia | null;
                image?: CmsMedia | null;
                logo?: CmsMedia | null;
                companyLogo?: CmsMedia | null;
                logoAlt?: string;
              };

              const name = t.authorName || t.clientName || t.name || "";
              const quote = t.quote || t.content || "";
              const videoId = extractYoutubeId(t.videoId || t.videoUrl || "");
              const avatarMedia = t.avatar || t.image;
              const logoMedia = t.logo || t.companyLogo;

              mappedItems.push({
                name,
                company: t.company || "",
                quote,
                videoId,
                image:
                  resolveMediaUrl(avatarMedia) ||
                  "/assets/testimonials/brandon.webp",
                imageAlt: resolveMediaAlt(avatarMedia, name || "Client testimonial"),
                logo: resolveMediaUrl(logoMedia) || undefined,
                logoAlt:
                  t.logoAlt ||
                  (t.company ? `${t.company} logo` : undefined),
              });
            }

            return (
              <HappyClientSection
                description={clientBlock.description}
                eyebrow={clientBlock.eyebrow}
                heading={clientBlock.heading}
                items={mappedItems.length > 0 ? mappedItems : undefined}
                key={blockKey}
              />
            );
          }

          case "case-studies-block":
          case "case-studies": {
            const csBlock = block as BlockCaseStudies;
            const rawCaseStudies = csBlock.caseStudies ?? [];
            const mappedCaseStudies: CaseStudyPreviewItem[] = [];

            for (const caseStudy of rawCaseStudies) {
              if (!caseStudy || typeof caseStudy !== "object") continue;
              const cs = caseStudy as {
                title?: string;
                slug?: string;
                thumbnail?: CmsMedia | null;
                heroImage?: CmsMedia | null;
                technology?: string;
                industry?: string;
                tags?: readonly string[];
              };
              if (!cs.slug && !cs.title) continue;
              const media = cs.thumbnail || cs.heroImage;
              mappedCaseStudies.push({
                title: cs.title || "",
                href: `/case-studies/${cs.slug || ""}`,
                image: resolveMediaUrl(media) || "/assets/case-studies/gnc-india.webp",
                imageAlt: resolveMediaAlt(media, cs.title || ""),
                technology: cs.technology || "",
                industry: cs.industry || "",
                tags: cs.tags || [],
              });
            }

            return (
              <ServicesCaseStudiesSection
                description={csBlock.description}
                eyebrow={csBlock.eyebrow}
                heading={csBlock.heading || sharedUiCopy.portfolioEyebrow}
                items={mappedCaseStudies}
                key={blockKey}
              />
            );
          }

          case "brand-partners": {
            const bpBlock = block as BlockBrandPartners;
            const rawLogos = bpBlock.logos ?? [];
            const mappedLogos: { src: string; alt: string; width: number; height: number }[] = [];

            for (const item of rawLogos) {
              if (!item || typeof item !== "object") continue;
              const name = item.name || "Brand Partner";
              mappedLogos.push({
                src: resolveMediaUrl(item.logo) || "/assets/brand/dynamic-dreamz-logo.svg",
                alt: resolveMediaAlt(item.logo, name),
                width: typeof item.logo === "object" && item.logo?.width ? item.logo.width : 160,
                height: typeof item.logo === "object" && item.logo?.height ? item.logo.height : 60,
              });
            }

            return (
              <BrandPartnersSection
                description={bpBlock.description}
                heading={bpBlock.heading}
                items={mappedLogos.length > 0 ? mappedLogos : undefined}
                key={blockKey}
              />
            );
          }

          case "pricing-models": {
            const pmBlock = block as BlockPricingModels;
            const items = (pmBlock.models ?? []).map((m) => ({
              label: m.label,
              badge: m.badge || "",
              price: m.price,
              description: m.description || "",
              bullets: m.bullets
                ?.map((b) => (typeof b === "string" ? b : b?.text || ""))
                .filter(Boolean),
              ctaLabel: m.ctaLabel,
              ctaHref: m.ctaHref,
            }));

            return (
              <PricingTableSection
                content={{
                  eyebrow: pmBlock.eyebrow,
                  heading: pmBlock.heading,
                  description: pmBlock.description,
                  items,
                }}
                key={blockKey}
              />
            );
          }

          case "technologies-grid": {
            const techBlock = block as BlockTechnologiesGrid;
            const categories = (techBlock.categories ?? []).map((cat) => ({
              category: cat.category,
              technologies: (cat.technologies ?? [])
                .map((t) => (typeof t === "string" ? t : t?.name || ""))
                .filter(Boolean),
            }));

            return (
              <TechnologiesWorkWithSection
                content={{
                  eyebrow: techBlock.eyebrow,
                  heading: techBlock.heading,
                  description: techBlock.description,
                  categories,
                }}
                key={blockKey}
              />
            );
          }

          case "image-with-text": {
            const iwtBlock = block as BlockTwoColImageWithText;
            const imageUrl = resolveMediaUrl(iwtBlock.image);
            const bullets = iwtBlock.bullets
              ? iwtBlock.bullets
                  .map((b) => (typeof b === "string" ? b : b?.text || ""))
                  .filter(Boolean)
              : undefined;

            return (
              <TwoColImageWithTextSection
                bullets={bullets && bullets.length > 0 ? bullets : undefined}
                cta={
                  iwtBlock.ctaLabel && iwtBlock.ctaHref
                    ? { label: iwtBlock.ctaLabel, href: iwtBlock.ctaHref }
                    : undefined
                }
                description={iwtBlock.description}
                heading={iwtBlock.heading}
                image={{
                  src: imageUrl || "/assets/og/homepage.png",
                  alt: resolveMediaAlt(iwtBlock.image, iwtBlock.heading),
                  width:
                    typeof iwtBlock.image === "object" && iwtBlock.image?.width
                      ? iwtBlock.image.width
                      : 500,
                  height:
                    typeof iwtBlock.image === "object" && iwtBlock.image?.height
                      ? iwtBlock.image.height
                      : 400,
                }}
                imagePosition={iwtBlock.imagePosition || "left"}
                key={blockKey}
              />
            );
          }

          case "industries-grid": {
            const indBlock = block as BlockIndustriesGrid;
            const items = (indBlock.industries ?? []).map((ind) => ({
              title: ind.title,
              eyebrow: ind.eyebrow,
              description: ind.description || "",
              image: resolveMediaUrl(ind.image) || "/assets/shopify-plus-agency/industries/fashion-apparel.webp",
              imageAlt: resolveMediaAlt(ind.image, ind.title),
              href: ind.href,
            }));

            return (
              <IndustriesServedSection
                content={{
                  eyebrow: indBlock.eyebrow,
                  heading: indBlock.heading,
                  description: indBlock.description,
                  items,
                }}
                key={blockKey}
                variant={indBlock.variant || "grid"}
              />
            );
          }

          case "legal-content": {
            const legalBlock = block as BlockLegalContent;
            const sectionsList = legalBlock.sections ?? [];
            const containerClass =
              legalBlock.containerWidth === "narrow"
                ? "max-w-[800px] mx-auto"
                : legalBlock.containerWidth === "full"
                  ? "w-full"
                  : undefined;

            return (
              <React.Fragment key={blockKey}>
                <section
                  aria-labelledby={`legal-title-${block.id || index}`}
                  className="overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[992px]:pt-[140px] max-[992px]:pb-[46px]"
                >
                  <Container className={containerClass}>
                    {legalBlock.eyebrow ? (
                      <span className="text-brand-red mb-2 block font-montserrat text-xs font-bold uppercase tracking-wider">
                        {legalBlock.eyebrow}
                      </span>
                    ) : null}
                    <h1
                      className="inline-block max-w-full font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
                      id={`legal-title-${block.id || index}`}
                    >
                      {legalBlock.heading}
                    </h1>
                  </Container>
                </section>

                <section
                  aria-label="Legal policy details"
                  className="py-20 max-[992px]:py-[50px]"
                >
                  <Container className={containerClass}>
                    {legalBlock.intro ? (
                      <p className="mb-6 text-base leading-[30.4px] font-medium text-muted">
                        {legalBlock.intro}
                      </p>
                    ) : null}

                    {sectionsList.map((section, sIdx) => {
                      const Heading = section.level === "3" ? "h3" : "h2";
                      const headingClass =
                        section.level === "3"
                          ? "mb-2.5 font-sans text-lg leading-[28.8px] font-bold tracking-[-0.36px] text-ink max-[767px]:text-base max-[767px]:leading-[26px]"
                          : "mb-6 font-sans text-2xl leading-[31.2px] font-bold tracking-[-0.48px] text-ink max-[767px]:text-xl max-[767px]:leading-[31.2px]";

                      return (
                        <div key={section.title || sIdx}>
                          <Heading className={headingClass}>{section.title}</Heading>
                          {section.paragraphs?.map((p, pIdx) => (
                            <p
                              className="mb-6 text-base leading-[30.4px] font-medium text-muted"
                              key={pIdx}
                            >
                              {p.text}
                            </p>
                          ))}
                          {section.items && section.items.length > 0 ? (
                            <ul className="mb-6 ml-5 list-disc pl-0 text-base leading-[27px] font-medium tracking-[0.32px] text-muted">
                              {section.items.map((item, itemIdx) => (
                                <li
                                  className={
                                    itemIdx < section.items!.length - 1
                                      ? "mb-[18px]"
                                      : undefined
                                  }
                                  key={itemIdx}
                                >
                                  {item.boldPrefix ? (
                                    <>
                                      <strong>{item.boldPrefix}</strong>{" "}
                                    </>
                                  ) : null}
                                  <span>{item.text}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {section.closingParagraphs?.map((cp, cpIdx) => (
                            <p
                              className="mb-6 text-base leading-[30.4px] font-medium text-muted"
                              key={cpIdx}
                            >
                              {cp.text}
                            </p>
                          ))}
                        </div>
                      );
                    })}

                    {legalBlock.contactInfo?.email ? (
                      <div className="mb-6 text-base leading-[30.4px] font-medium text-muted">
                        {legalBlock.contactInfo.name ? (
                          <h3 className="mb-2.5 font-sans text-lg leading-[28.8px] font-bold tracking-[-0.36px] text-ink max-[767px]:text-base max-[767px]:leading-[26px]">
                            {legalBlock.contactInfo.name}
                          </h3>
                        ) : null}
                        <address className="not-italic">
                          {legalBlock.contactInfo.email ? (
                            <p>
                              <a
                                className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red"
                                href={`mailto:${legalBlock.contactInfo.email}`}
                              >
                                {legalBlock.contactInfo.email}
                              </a>
                            </p>
                          ) : null}
                          {legalBlock.contactInfo.phone ? (
                            <p>
                              <a
                                className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red"
                                href={
                                  legalBlock.contactInfo.phoneHref ||
                                  `tel:${legalBlock.contactInfo.phone}`
                                }
                              >
                                {legalBlock.contactInfo.phone}
                              </a>
                            </p>
                          ) : null}
                          {legalBlock.contactInfo.address ? (
                            <p>
                              {legalBlock.contactInfo.addressHref ? (
                                <a
                                  className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red"
                                  href={legalBlock.contactInfo.addressHref}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  {legalBlock.contactInfo.address}
                                </a>
                              ) : (
                                legalBlock.contactInfo.address
                              )}
                            </p>
                          ) : null}
                        </address>
                      </div>
                    ) : null}
                  </Container>
                </section>
              </React.Fragment>
            );
          }

          case "sitemap-directory": {
            const smapBlock = block as BlockSiteMapDirectory;
            const customLinks = smapBlock.groups?.flatMap((g) =>
              (g.links ?? []).map((l) => ({ label: l.label, href: l.href })),
            );

            return (
              <SiteMapPage
                key={blockKey}
                links={
                  customLinks && customLinks.length > 0 ? customLinks : undefined
                }
              />
            );
          }

          case "shopify-plus-agency-overview": {
            const spaBlock = block as BlockShopifyPlusAgency;
            return (
              <ShopifyPlusAgencySection
                content={{
                  eyebrow: spaBlock.eyebrow,
                  title: spaBlock.title,
                  intro: spaBlock.intro,
                  paragraphs: spaBlock.paragraphs?.map((p) => p.text).filter(Boolean),
                  counters: spaBlock.counters?.map((c) => ({
                    value: c.value,
                    label: c.label,
                    note: c.note,
                    tone: c.tone,
                  })),
                  videoSrc: spaBlock.videoSrc,
                }}
                key={blockKey}
              />
            );
          }

          case "white-label-partner-banner": {
            const wlpBlock = block as BlockWhiteLabelPartner;
            return (
              <WhiteLabelPartnerSection
                content={{
                  eyebrow: wlpBlock.eyebrow,
                  title: wlpBlock.title,
                  description: wlpBlock.description,
                  bullets: wlpBlock.bullets?.map((b) => b.text).filter(Boolean),
                  ctaLabel: wlpBlock.ctaLabel,
                  ctaHref: wlpBlock.ctaHref,
                }}
                key={blockKey}
              />
            );
          }

          case "commerce-solutions": {
            const csBlock = block as BlockCommerceSolutions;
            const solutions = csBlock.solutions?.map((s) => ({
              title: s.title,
              summary: s.summary,
              body: s.body,
              href: s.href || "#",
              cta: s.cta || "LEARN MORE",
            }));

            return (
              <CommerceSolutionsSection
                description={csBlock.description}
                key={blockKey}
                solutions={solutions && solutions.length > 0 ? solutions : undefined}
                title={csBlock.title}
              />
            );
          }

          case "selected-work-marquee": {
            const swBlock = block as BlockSelectedWork;
            return (
              <SelectedWorkSection
                ctaHref={swBlock.ctaHref}
                ctaLabel={swBlock.ctaLabel}
                description={swBlock.description}
                key={blockKey}
                title={swBlock.title}
              />
            );
          }

          case "testimonials-carousel": {
            const tcBlock = block as BlockTestimonialsCarousel;
            return (
              <TestimonialsSection
                description={tcBlock.description}
                eyebrow={tcBlock.eyebrow}
                key={blockKey}
                title={tcBlock.title}
              />
            );
          }

          case "integrations-partners": {
            const ipBlock = block as BlockIntegrationsPartners;
            return (
              <IntegrationsSection
                key={blockKey}
                title={ipBlock.title}
              />
            );
          }

          case "latest-insights": {
            const liBlock = block as BlockLatestInsights;
            return (
              <InsightsSection
                ctaHref={liBlock.ctaHref}
                ctaLabel={liBlock.ctaLabel}
                key={blockKey}
                title={liBlock.title}
              />
            );
          }

          case "about-hero": {
            const ahBlock = block as BlockAboutHero;
            return (
              <AboutHeroSection
                deliveryTitle={ahBlock.deliveryTitle}
                description={ahBlock.description}
                key={blockKey}
                statistics={ahBlock.statistics}
                title={ahBlock.title}
              />
            );
          }

          case "about-story": {
            const asBlock = block as BlockAboutStory;
            const posterUrl = resolveMediaUrl(asBlock.poster);
            const overlayUrl = resolveMediaUrl(asBlock.overlay);
            return (
              <AboutStorySection
                caption={asBlock.caption}
                description={asBlock.description}
                key={blockKey}
                overlay={overlayUrl || undefined}
                poster={posterUrl || undefined}
                posterAlt={asBlock.posterAlt || undefined}
                title={asBlock.title}
                videoId={asBlock.videoId}
                videoTitle={asBlock.videoTitle}
              />
            );
          }

          case "about-timeline": {
            const atBlock = block as BlockAboutTimeline;
            const customMilestones = atBlock.milestones?.map((m) => ({
              year: m.year || "",
              description: m.description || "",
              image: resolveMediaUrl(m.image) || "/assets/about/timeline/established-2006.webp",
              alt: m.alt || "",
              width: m.width || 312,
              height: m.height || 232,
            }));

            return (
              <AboutTimelineSection
                description={atBlock.description}
                key={blockKey}
                milestones={customMilestones}
                title={atBlock.title}
              />
            );
          }

          case "about-founders": {
            const afBlock = block as BlockAboutFounders;
            const customFounders = afBlock.founders?.map((f) => ({
              name: f.name,
              role: f.role,
              biography: f.biography,
              image: resolveMediaUrl(f.image) || "/assets/about/team/virag-shah.jpg",
              alt: f.alt || f.name,
              linkedIn: f.linkedIn,
            }));

            return (
              <AboutFoundersSection
                descriptions={afBlock.descriptions?.map((d) => d.text).filter(Boolean)}
                eyebrow={afBlock.eyebrow}
                founders={customFounders}
                key={blockKey}
                title={afBlock.title}
              />
            );
          }

          case "about-team": {
            const atmBlock = block as BlockAboutTeam;
            const customKeyManagers = atmBlock.keyManagers?.map((m) => ({
              name: m.name,
              role: m.role,
              image: resolveMediaUrl(m.image) || "/assets/about/team/tejal-parekh.jpg",
              alt: m.alt || m.name,
            }));
            const customDeptLeaders = atmBlock.departmentLeaders?.map((l) => ({
              name: l.name,
              role: l.role,
              image: resolveMediaUrl(l.image) || "/assets/about/team/mukesh-patel.jpg",
              alt: l.alt || l.name,
            }));

            return (
              <AboutTeamSection
                departmentLeaders={customDeptLeaders}
                key={blockKey}
                keyManagers={customKeyManagers}
              />
            );
          }

          case "about-values": {
            const avBlock = block as BlockAboutValues;
            return (
              <AboutValuesSection
                description={avBlock.description}
                key={blockKey}
                title={avBlock.title}
                values={avBlock.values}
              />
            );
          }

          case "our-work-hero": {
            const owhBlock = block as BlockOurWorkHero;
            const customShowcaseImages =
              owhBlock.showcaseImages && owhBlock.showcaseImages.length > 0
                ? owhBlock.showcaseImages.map((img) => ({
                    src: resolveMediaUrl(img.image),
                    alt: img.alt || "",
                    width:
                      typeof img.image === "object" && img.image?.width
                        ? img.image.width
                        : img.width,
                    height:
                      typeof img.image === "object" && img.image?.height
                        ? img.image.height
                        : img.height,
                  }))
                : undefined;

            return (
              <OurWorkHeroSection
                content={{
                  eyebrow: owhBlock.eyebrow || "",
                  title: owhBlock.title || "",
                  description: owhBlock.description || "",
                  primaryCta: owhBlock.primaryCta
                    ? {
                        label: owhBlock.primaryCta.label || "",
                        href: owhBlock.primaryCta.href || "",
                      }
                    : undefined,
                  secondaryCta: owhBlock.secondaryCta
                    ? {
                        label: owhBlock.secondaryCta.label || "",
                        href: owhBlock.secondaryCta.href || "",
                      }
                    : undefined,
                }}
                fullBleedShowcaseAtTablet
                key={blockKey}
                layout="caseStudiesLive"
                showcaseImages={customShowcaseImages}
                typography="liveMontserrat"
              />
            );
          }

          case "our-work-projects": {
            const owpBlock = block as BlockOurWorkProjects;
            return (
              <OurWorkProjectsSection
                description={owpBlock.description}
                eyebrow={owpBlock.eyebrow}
                key={blockKey}
                title={owpBlock.title}
              />
            );
          }

          case "our-work-case-studies": {
            const owcsBlock = block as BlockOurWorkCaseStudies;
            return (
              <OurWorkCaseStudiesSection
                description={owcsBlock.description}
                eyebrow={owcsBlock.eyebrow}
                key={blockKey}
                title={owcsBlock.title}
              />
            );
          }

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
                key={blockKey}
                title={cfBlock.title}
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

          case "discovery-call": {
            const dcBlock = block as BlockDiscoveryCall;
            const hostImage = resolveMediaUrl(dcBlock.host?.image) || "/assets/discovery-call/discovery-call-host.webp";
            const callContent = {
              eyebrow: dcBlock.eyebrow || "",
              title: dcBlock.title || "",
              description: dcBlock.description || "",
              host: {
                name: dcBlock.host?.name || "",
                role: dcBlock.host?.role || "",
                image: hostImage,
                imageAlt: dcBlock.host?.imageAlt || dcBlock.host?.name || "",
              },
              benefits: (dcBlock.benefits ?? []).map((b) => ({
                icon: b.icon || "✓",
                title: b.title,
                description: b.description,
              })),
              calendar: {
                heading: dcBlock.calendar?.heading || "",
                details: dcBlock.calendar?.details || "",
                src: dcBlock.calendar?.src || "",
                iframeTitle: dcBlock.calendar?.iframeTitle || "",
              },
            };

            return (
              <BookDiscoveryCallPage
                content={callContent}
                key={blockKey}
              />
            );
          }

          case "request-quote-hero": {
            const rqBlock = block as BlockRequestQuoteHero;
            const customBadges =
              rqBlock.badges && rqBlock.badges.length > 0
                ? rqBlock.badges.map((b) => ({
                    href: b.href || "#",
                    ariaLabel: b.ariaLabel,
                    image: resolveMediaUrl(b.logo),
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
              rqBlock.heroTitle || rqBlock.heroDescription
                ? {
                    title: rqBlock.heroTitle || "",
                    description: rqBlock.heroDescription || "",
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
                hero={hero}
                key={blockKey}
                testimonials={customTestimonials}
              />
            );
          }

          case "career-hero": {
            const carhBlock = block as BlockCareerHero;
            const customBadges =
              carhBlock.badges && carhBlock.badges.length > 0
                ? carhBlock.badges.map((b) => ({
                    href: b.href || "#",
                    alt: b.alt || "",
                    src: resolveMediaUrl(b.logo),
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

            const customScrollingImages =
              carhBlock.scrollingImages && carhBlock.scrollingImages.length > 0
                ? carhBlock.scrollingImages.map((img) => ({
                    src: resolveMediaUrl(img.image),
                    alt: img.alt || "",
                    width:
                      typeof img.image === "object" && img.image?.width
                        ? img.image.width
                        : img.width,
                    height:
                      typeof img.image === "object" && img.image?.height
                        ? img.image.height
                        : img.height,
                  }))
                : undefined;

            return (
              <CareerHeroSection
                badges={customBadges}
                description={carhBlock.description}
                eyebrow={carhBlock.eyebrow}
                key={blockKey}
                scrollingImages={customScrollingImages}
                title={carhBlock.title}
              />
            );
          }

          case "career-opportunities": {
            const caroBlock = block as BlockCareerOpportunities;
            return (
              <CareerOpportunitiesSection
                description={caroBlock.description}
                eyebrow={caroBlock.eyebrow}
                key={blockKey}
                title={caroBlock.title}
              />
            );
          }

          case "career-perks": {
            const carpBlock = block as BlockCareerPerks;
            return (
              <ThemeCustomizationServicesSection
                className="transparent"
                content={{
                  eyebrow: carpBlock.eyebrow,
                  heading: carpBlock.heading || "",
                  description: carpBlock.description || "",
                  boxes: (carpBlock.perks ?? []).map((box) => ({
                    title: box.title,
                    icon: <CareerBenefitIcon name={box.iconName} />,
                  })),
                }}
                id="workplace-benefits"
                key={blockKey}
                variant="yellow"
              />
            );
          }

          case "career-apply": {
            const caBlock = block as BlockCareerApply;
            return (
              <CareerApplyNowPage
                emailAddress={caBlock.emailAddress}
                emailHref={caBlock.emailHref}
                emailLabel={caBlock.emailLabel}
                heading={caBlock.heading}
                key={blockKey}
                note={caBlock.note}
                phoneHref={caBlock.phoneHref}
                phoneLabel={caBlock.phoneLabel}
                phoneNumber={caBlock.phoneNumber}
              />
            );
          }

          default: {
            if (process.env.NODE_ENV !== "production") {
              console.warn(`Unrecognized dynamic block type: ${rawType}`);
            }
            return null;
          }
        }
      })}
    </>
  );
}
