import type { ReactNode } from "react";

import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityPageCounterSection } from "@/components/sections/city-page-counter-section";
import {
  CityPageHeroSection,
  type CityPageHeroContent,
} from "@/components/sections/city-page-hero-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import {
  HappyClientSection,
  type HappyClientTestimonialItem,
} from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { CityPageCounterContent } from "@/components/sections/city-page-counter-section";
import type { CityWhyChooseBoxesContent } from "@/components/sections/city-why-choose-boxes-section";
import type { AgencyServicesContent } from "@/components/sections/agency-services-section";
import type { OurDevelopmentProcessContent } from "@/components/sections/our-development-process-section";
import type { PortfolioShowcaseItem } from "@/components/sections/portfolio-showcase-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type ShopifyCityLandingContent = {
  sectionCopy: {
    faqHeading: string;
    portfolioCta: string;
    portfolioEyebrow: string;
    testimonialsEyebrow: string;
  };
  hero: CityPageHeroContent;
  brands: {
    title: string;
    items: readonly ClientLogoSliderItem[];
  };
  counter: CityPageCounterContent;
  whyChoose: CityWhyChooseBoxesContent;
  services: AgencyServicesContent;
  process: OurDevelopmentProcessContent;
  whyDynamicDreamz: CityWhyChooseBoxesContent;
  portfolio: {
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaHref?: string;
  };
  testimonials: {
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly HappyClientTestimonialItem[];
  };
  faqs: readonly FaqAccordionItem[];
  ctaBanner: {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export type ShopifyCityLandingTemplateProps = {
  content: ShopifyCityLandingContent;
  slug: string;
  faqIdPrefix: string;
  children?: ReactNode;
};

export function ShopifyCityLandingTemplate({
  content,
  slug,
  faqIdPrefix,
  children,
}: ShopifyCityLandingTemplateProps) {
  const brandsContent = {
    heading: content.brands.title,
    slug,
  };

  const portfolioContent = {
    heading: content.portfolio.heading,
    description: content.portfolio.description,
    items: content.portfolio.items,
  };

  return (
    <div>
      <CityPageHeroSection content={content.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={content.brands.title}
        items={content.brands.items}
      />
      <CityPageCounterSection
        content={content.counter}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        content={content.whyChoose}
        eyebrowVariant="dash"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={content.services}
        eyebrow={content.services.eyebrow}
        hideCta={true}
        id="services"
        showDescription={true}
      />
      <OurDevelopmentProcessSection
        content={content.process}
        eyebrowVariant="dash"
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={content.whyDynamicDreamz}
        eyebrowVariant="dash"
        theme="white"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        ctaHref={content.portfolio.ctaHref}
        ctaLabel={content.sectionCopy.portfolioCta}
        eyebrow={content.sectionCopy.portfolioEyebrow}
        headerLayout="split"
      />
      <HappyClientSection
        description={content.testimonials.description}
        eyebrow={content.sectionCopy.testimonialsEyebrow}
        heading={content.testimonials.heading}
        items={content.testimonials.items}
      />
      <SplitFaqSection
        heading={content.sectionCopy.faqHeading}
        idPrefix={faqIdPrefix}
        items={content.faqs}
      />
      <CtaBannerSection
        ctaHref={content.ctaBanner.ctaHref}
        ctaLabel={content.ctaBanner.ctaLabel}
        heading={content.ctaBanner.heading}
      />
      {children}
    </div>
  );
}
