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
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { TechnologiesWorkWithSection } from "@/components/sections/technologies-work-with-section";
import { TwoColImageWithTextSection } from "@/components/sections/two-col-image-with-text-section";
import { IndustriesServedSection } from "@/components/sections/shopify-plus-agency/industries-served-section";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
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

export interface BlockBrandPartners {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  description?: string;
  variant?: "grid" | "slider";
  logos?: readonly {
    id?: string | number;
    name: string;
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
    bullets?: readonly { text: string }[];
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
    technologies?: readonly {
      id?: string | number;
      name: string;
      icon?: CmsMedia | null;
    }[];
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
  bullets?: readonly { text: string }[];
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

export interface BlockRichTextContent {
  __component?: string;
  blockType?: string;
  id?: string | number;
  heading?: string;
  eyebrow?: string;
  containerWidth?: "narrow" | "standard" | "full";
  content?: unknown;
}

function serializeLexicalToHtml(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const obj = node as { root?: unknown; children?: unknown[]; text?: string; type?: string };
  if (obj.root) return serializeLexicalToHtml(obj.root);
  if (obj.text) return obj.text;
  if (Array.isArray(obj.children)) {
    const inner = obj.children.map(serializeLexicalToHtml).join("");
    if (obj.type === "paragraph") return `<p>${inner}</p>`;
    if (obj.type === "heading") return `<h3>${inner}</h3>`;
    if (obj.type === "list") return `<ul>${inner}</ul>`;
    if (obj.type === "listitem") return `<li>${inner}</li>`;
    return inner;
  }
  return "";
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
  | BlockRichTextContent
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

          case "case-studies-block":
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

          case "brand-partners": {
            const bpBlock = block as BlockBrandPartners;
            const logos = (bpBlock.logos ?? []).map((item) => ({
              src: resolveMediaUrl(item.logo) || "/assets/brand/default-logo.svg",
              alt: resolveMediaAlt(item.logo, item.name),
              width: typeof item.logo === "object" && item.logo?.width ? item.logo.width : 160,
              height: typeof item.logo === "object" && item.logo?.height ? item.logo.height : 60,
            }));

            return (
              <BrandPartnersSection
                description={bpBlock.description}
                heading={bpBlock.heading}
                items={logos.length > 0 ? logos : undefined}
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
              bullets: m.bullets?.map((b) => b.text),
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
              technologies: (cat.technologies ?? []).map((t) => t.name),
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

            return (
              <TwoColImageWithTextSection
                description={iwtBlock.description}
                heading={iwtBlock.heading}
                image={{
                  src: imageUrl || "/assets/services/default-service.webp",
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
              image: resolveMediaUrl(ind.image) || "/assets/industries/fashion.webp",
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

          case "rich-text-content": {
            const rtBlock = block as BlockRichTextContent;
            const html =
              typeof rtBlock.content === "string"
                ? rtBlock.content
                : serializeLexicalToHtml(rtBlock.content);

            const containerClass =
              rtBlock.containerWidth === "narrow"
                ? "max-w-[800px] mx-auto"
                : rtBlock.containerWidth === "full"
                  ? "w-full"
                  : "max-w-[1200px] mx-auto";

            return (
              <section className="bg-white py-16 max-[767px]:py-10" key={blockKey}>
                <Container>
                  <div className={containerClass}>
                    {rtBlock.eyebrow ? (
                      <span className="text-brand-red mb-2 block font-montserrat text-xs font-bold uppercase tracking-wider">
                        {rtBlock.eyebrow}
                      </span>
                    ) : null}
                    {rtBlock.heading ? (
                      <h2 className="text-ink mb-6 font-sans text-3xl font-bold max-[767px]:text-2xl">
                        {rtBlock.heading}
                      </h2>
                    ) : null}
                    <RichText html={html} />
                  </div>
                </Container>
              </section>
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
