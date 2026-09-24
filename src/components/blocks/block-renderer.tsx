import React from "react";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { FeaturesGridSection } from "@/components/sections/features-grid-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { ProofCounterSection } from "@/components/sections/proof-counter-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { sharedUiCopy } from "@/content/common";
import {
  adaptStrapiTestimonial,
  getStrapiMediaAlt,
  getStrapiMediaUrl,
} from "@/lib/strapi";
import type {
  StrapiCaseStudy,
  StrapiCounterElement,
  StrapiFaqItemElement,
  StrapiFeatureItemElement,
  StrapiSectionBlock,
  StrapiTimelineStepElement,
} from "@/types/strapi";

export interface BlockRendererProps {
  sections?: readonly StrapiSectionBlock[] | null;
}

/**
 * Universal Block Renderer for Strapi Headless CMS.
 * Dynamically resolves and renders Strapi Dynamic Zone section blocks
 * to their corresponding production React components.
 */
export function BlockRenderer({ sections }: BlockRendererProps) {
  if (!sections || !Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((block, index) => {
        const blockKey = `${block.__component}-${block.id || index}`;

        switch (block.__component) {
          case "sections.hero": {
            const imageUrl = getStrapiMediaUrl(block.image);
            const heroImage = imageUrl
              ? {
                  src: imageUrl,
                  alt: getStrapiMediaAlt(block.image, block.title),
                  width: block.image?.width || 684,
                  height: block.image?.height || 550,
                }
              : undefined;

            return (
              <ServiceHeroSection
                content={{
                  title: block.title,
                  description: block.description || "",
                  subheading: block.subheading,
                  ctaLabel: block.ctaLabel,
                  ctaHref: block.ctaHref,
                  eyebrows: block.eyebrows,
                  image: heroImage,
                }}
                key={blockKey}
                showReviews={block.showReviews !== false}
                variant={block.variant || "split"}
              />
            );
          }

          case "sections.proof-counters": {
            const countersList: StrapiCounterElement[] = block.counters ?? [];
            const stats = countersList.map((counter: StrapiCounterElement) => {
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
                  heading: block.heading,
                  description: block.description || "",
                  stats,
                }}
                key={blockKey}
              />
            );
          }

          case "sections.faq-accordion": {
            const faqsList: StrapiFaqItemElement[] = block.faqs ?? [];
            const items = faqsList.map((faq: StrapiFaqItemElement, faqIdx: number) => ({
              id: faq.id ? `faq-${block.id}-${faq.id}` : `faq-${block.id}-${faqIdx}`,
              question: faq.question,
              answer: faq.answer,
            }));

            return (
              <SplitFaqSection
                description={block.description}
                eyebrow={block.eyebrow}
                heading={block.heading}
                idPrefix={`faq-${block.id || index}`}
                items={items}
                key={blockKey}
              />
            );
          }

          case "sections.cta-banner": {
            return (
              <CtaBannerSection
                ctaHref={block.btnUrl}
                ctaLabel={block.btnText}
                description={block.description}
                heading={block.heading}
                key={blockKey}
              />
            );
          }

          case "sections.features-grid": {
            const featuresList: StrapiFeatureItemElement[] = block.features ?? [];
            const features = featuresList.map((feature: StrapiFeatureItemElement) => ({
              title: feature.title,
              description: feature.description,
              icon: getStrapiMediaUrl(feature.icon) || undefined,
              iconAlt: getStrapiMediaAlt(feature.icon, feature.title),
              linkText: feature.linkText,
              linkUrl: feature.linkUrl,
            }));

            return (
              <FeaturesGridSection
                description={block.description}
                eyebrow={block.eyebrow}
                features={features}
                heading={block.heading}
                key={blockKey}
              />
            );
          }

          case "sections.process-timeline": {
            const stepsList: StrapiTimelineStepElement[] = block.steps ?? [];
            const steps = stepsList.map((step: StrapiTimelineStepElement, stepIdx: number) => ({
              step: step.stepNumber || String(stepIdx + 1).padStart(2, "0"),
              title: step.title,
              description: step.description || "",
            }));

            return (
              <OurDevelopmentProcessSection
                content={{
                  heading: block.heading,
                  eyebrow: block.eyebrow,
                  description: "",
                  steps,
                }}
                key={blockKey}
              />
            );
          }

          case "sections.happy-clients": {
            const items =
              block.testimonials && block.testimonials.length > 0
                ? block.testimonials.map(adaptStrapiTestimonial)
                : undefined;

            return (
              <HappyClientSection
                description={block.description}
                eyebrow={block.eyebrow}
                heading={block.heading}
                items={items}
                key={blockKey}
              />
            );
          }

          case "sections.case-studies": {
            const caseStudiesList: StrapiCaseStudy[] = block.caseStudies ?? [];
            const items = caseStudiesList.map((caseStudy: StrapiCaseStudy) => {
              const media = caseStudy.thumbnail || caseStudy.heroImage;
              return {
                title: caseStudy.title,
                href: `/case-studies/${caseStudy.slug}`,
                image:
                  getStrapiMediaUrl(media) ||
                  "/assets/case-studies/placeholder.webp",
                imageAlt: getStrapiMediaAlt(media, caseStudy.title),
                technology: caseStudy.technology || "",
                industry: caseStudy.industry || "",
                description: caseStudy.excerpt || "",
                tags: caseStudy.tags || [],
              };
            });

            return (
              <ServicesCaseStudiesSection
                description={block.description}
                eyebrow={block.eyebrow}
                heading={block.heading || sharedUiCopy.portfolioEyebrow}
                items={items}
                key={blockKey}
              />
            );
          }

          default: {
            if (process.env.NODE_ENV !== "production") {
              const unrecognized = block as { __component?: string };
              console.warn(
                `Unrecognized Strapi dynamic zone component: ${unrecognized.__component}`,
              );
            }
            return null;
          }
        }
      })}
    </>
  );
}
