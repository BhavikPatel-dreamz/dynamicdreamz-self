import type { ReactNode } from "react";

import {
  HappyClientSection,
  type HappyClientTestimonialItem,
} from "@/components/sections/happy-client-section";
import {
  IndustryBrandsSection,
} from "@/components/sections/industry/industry-brands-section";
import {
  IndustryCustomDevelopmentSection,
  type IndustryCustomDevelopmentContent,
} from "@/components/sections/industry/industry-custom-development-section";
import {
  PortfolioShowcaseSection,
  type PortfolioShowcaseSectionProps,
} from "@/components/sections/portfolio-showcase-section";
import {
  ServiceHeroVideoSection,
  type ServiceHeroVideoContent,
} from "@/components/sections/service-hero-video-section";
import {
  ServicesCaseStudiesSection,
  type CaseStudyPreviewItem,
} from "@/components/sections/services-case-studies-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  ThemeCustomizationServicesSection,
  type ThemeCustomizationServicesContent,
} from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import {
  WhyChooseShopifyMigrationSection,
  type WhyChooseMigrationContent,
} from "@/components/sections/why-choose-shopify-migration-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import type { WhiteLabelTool } from "@/types/white-label-service";

export type IndustryLandingTemplateProps = {
  hero: ServiceHeroVideoContent;
  brands: {
    config: {
      slug: string;
      brands?: {
        ariaLabel?: string;
      };
      ariaLabel?: string;
    };
    heading: string;
    items: readonly ClientLogoSliderItem[];
  };
  caseStudies?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: readonly CaseStudyPreviewItem[];
  };
  challenges: ThemeCustomizationServicesContent;
  solutions: ThemeCustomizationServicesContent;
  customDev: IndustryCustomDevelopmentContent;
  technologies: {
    title: string;
    description?: string;
    rows: readonly (readonly WhiteLabelTool[])[];
  };
  portfolio: PortfolioShowcaseSectionProps["content"];
  whyChoose: WhyChooseMigrationContent;
  testimonials?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items?: readonly HappyClientTestimonialItem[];
  };
  faq: {
    eyebrow?: string;
    heading: string;
    idPrefix: string;
    items: readonly FaqAccordionItem[];
  };
  children?: ReactNode;
};

export function IndustryLandingTemplate({
  hero,
  brands,
  caseStudies,
  challenges,
  solutions,
  customDev,
  technologies,
  portfolio,
  whyChoose,
  testimonials,
  faq,
  children,
}: IndustryLandingTemplateProps) {
  return (
    <>
      <ServiceHeroVideoSection content={hero} />
      <IndustryBrandsSection
        content={brands.config}
        heading={brands.heading}
        items={brands.items}
      />
      {caseStudies ? (
        <ServicesCaseStudiesSection
          description={caseStudies.description}
          eyebrow={caseStudies.eyebrow}
          heading={caseStudies.heading}
          items={caseStudies.items}
        />
      ) : null}
      <ThemeCustomizationServicesSection
        content={challenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={solutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={customDev} />
      <WhiteLabelToolsSection
        description={technologies.description}
        rows={technologies.rows}
        title={technologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={whyChoose} />
      {testimonials ? (
        <HappyClientSection
          hasTopPadding={true}
          description={testimonials.description}
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          items={testimonials.items}
        />
      ) : null}
      <SplitFaqSection
        eyebrow={faq.eyebrow}
        heading={faq.heading}
        idPrefix={faq.idPrefix}
        items={faq.items}
      />
      {children}
    </>
  );
}
