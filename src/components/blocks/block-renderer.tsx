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

export interface BlockHero {
  __component?: string;
  blockType?: string;
  id?: string | number;
  title: string;
  description?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  eyebrows?: readonly string[];
  image?: CmsMedia | null;
  showReviews?: boolean;
  variant?: "split" | "centered";
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
  testimonials?: readonly {
    id?: string | number;
    authorName: string;
    company?: string;
    quote: string;
    videoId?: string;
    avatar?: CmsMedia | null;
    logo?: CmsMedia | null;
    logoAlt?: string;
  }[];
}

export interface BlockCaseStudies {
  __component?: string;
  blockType?: string;
  id?: string | number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  caseStudies?: readonly {
    id?: string | number;
    title: string;
    slug: string;
    thumbnail?: CmsMedia | null;
    heroImage?: CmsMedia | null;
    technology?: string;
    industry?: string;
    tags?: readonly string[];
  }[];
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

            return (
              <ServiceHeroSection
                content={{
                  title: heroBlock.title,
                  description: heroBlock.description || "",
                  subheading: heroBlock.subheading,
                  ctaLabel: heroBlock.ctaLabel,
                  ctaHref: heroBlock.ctaHref,
                  eyebrows: heroBlock.eyebrows,
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
            const items: HappyClientTestimonialItem[] | undefined =
              clientBlock.testimonials && clientBlock.testimonials.length > 0
                ? clientBlock.testimonials.map((testimonial) => ({
                    name: testimonial.authorName,
                    company: testimonial.company || "",
                    quote: testimonial.quote,
                    videoId: testimonial.videoId || "",
                    image:
                      resolveMediaUrl(testimonial.avatar) ||
                      "/assets/testimonials/placeholder.webp",
                    imageAlt: testimonial.authorName,
                    logo: resolveMediaUrl(testimonial.logo) || undefined,
                    logoAlt:
                      testimonial.logoAlt ||
                      (testimonial.company ? `${testimonial.company} logo` : undefined),
                  }))
                : undefined;

            return (
              <HappyClientSection
                description={clientBlock.description}
                eyebrow={clientBlock.eyebrow}
                heading={clientBlock.heading}
                items={items}
                key={blockKey}
              />
            );
          }

          case "case-studies": {
            const csBlock = block as BlockCaseStudies;
            const caseStudiesList = csBlock.caseStudies ?? [];
            const items: CaseStudyPreviewItem[] = caseStudiesList.map((caseStudy) => {
              const media = caseStudy.thumbnail || caseStudy.heroImage;
              return {
                title: caseStudy.title,
                href: `/case-studies/${caseStudy.slug}`,
                image: resolveMediaUrl(media) || "/assets/case-studies/placeholder.webp",
                imageAlt: resolveMediaAlt(media, caseStudy.title),
                technology: caseStudy.technology || "",
                industry: caseStudy.industry || "",
                tags: caseStudy.tags || [],
              };
            });

            return (
              <ServicesCaseStudiesSection
                description={csBlock.description}
                eyebrow={csBlock.eyebrow}
                heading={csBlock.heading || sharedUiCopy.portfolioEyebrow}
                items={items}
                key={blockKey}
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
