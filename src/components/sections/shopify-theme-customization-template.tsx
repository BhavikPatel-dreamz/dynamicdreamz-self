import type { ReactNode } from "react";

import {
  AgencyServicesSection,
  type AgencyServicesContent,
} from "@/components/sections/agency-services-section";
import {
  CityWhyChooseBoxesSection,
  type CityWhyChooseBoxesContent,
} from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import {
  PortfolioShowcaseSection,
  type PortfolioShowcaseItem,
} from "@/components/sections/portfolio-showcase-section";
import {
  EvaluationFrameworkSection,
  type EvaluationFrameworkContent,
} from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import {
  ThemeFeaturesBannerSection,
  type ThemeFeaturesBannerContent,
} from "@/components/sections/theme-customization/theme-features-banner-section";
import {
  ThemeHeroSection,
  type ThemeHeroContent,
} from "@/components/sections/theme-customization/theme-hero-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

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

export type ShopifyThemeCustomizationTemplateProps = {
  content: ShopifyThemeCustomizationContent;
  slug: string;
  faqIdPrefix: string;
  brandsDensity?: "standard" | "compact" | "flexible";
  children?: ReactNode;
};

export function ShopifyThemeCustomizationTemplate({
  content,
  slug,
  faqIdPrefix,
  brandsDensity,
  children,
}: ShopifyThemeCustomizationTemplateProps) {
  const brandsContent = {
    heading: content.brands.title,
    slug,
  };

  const servicesContent = {
    heading: content.services.heading,
    description: content.services.description,
    items: content.services.items,
  };

  const whyChooseContent = {
    eyebrow: content.whyChoose.eyebrow,
    heading: content.whyChoose.heading,
    description: content.whyChoose.description,
    items: content.whyChoose.items,
  };

  const portfolioContent = content.portfolio
    ? {
        eyebrow: content.portfolio.eyebrow,
        heading: content.portfolio.heading,
        description: content.portfolio.description,
        items: content.portfolio.items,
        ctaLabel: content.portfolio.ctaLabel,
        ctaHref: content.portfolio.ctaHref,
      }
    : null;

  return (
    <div>
      <ThemeHeroSection content={content.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density={brandsDensity}
        heading={content.brands.title}
        items={content.brands.items}
      />
      <ThemeFeaturesBannerSection content={content.features} />
      <CityWhyChooseBoxesSection
        columns={3}
        content={content.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        className="pb-0"
        columns={2}
        content={servicesContent}
        eyebrow={content.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      {portfolioContent ? (
        <PortfolioShowcaseSection
          cardVariant="ourWorkRefresh"
          className="pt-0"
          columns={4}
          content={portfolioContent}
          eyebrow={content.portfolio?.eyebrow}
          headerLayout="split"
          hideCta={false}
          sectionId="our_work"
        />
      ) : null}
      <SplitFaqSection
        heading={content.faqsHeading}
        idPrefix={faqIdPrefix}
        items={content.faqs}
        bgOffWhite
      />
      {children}
    </div>
  );
}
