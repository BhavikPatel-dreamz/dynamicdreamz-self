import type { ReactNode } from "react";

import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import {
  PortfolioShowcaseSection,
  type PortfolioShowcaseItem,
} from "@/components/sections/portfolio-showcase-section";
import {
  EvaluationFrameworkSection,
  type EvaluationFrameworkContent,
} from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import {
  ThemeHeroSection,
  type ThemeHeroContent,
} from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeServiceIcon } from "@/components/ui/theme-service-icons";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

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
  portfolio: {
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    items: readonly PortfolioShowcaseItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  testimonials?: {
    eyebrow?: string;
    heading: string;
    description?: string;
  };
  faqsHeading?: string;
  faqs: readonly FaqAccordionItem[];
};

export type WordPressThemeCustomizationTemplateProps = {
  content: WordPressThemeCustomizationContent;
  renderFeatureIcon: (iconName: string) => ReactNode;
  renderServiceIcon?: (iconName: string) => ReactNode;
  renderBenefitIcon: (iconName: string) => ReactNode;
  slug: string;
  faqIdPrefix: string;
  benefitsVariant?: "yellow" | "green";
  children?: ReactNode;
};

export function WordPressThemeCustomizationTemplate({
  content,
  renderFeatureIcon,
  renderServiceIcon = (name) => <ThemeServiceIcon name={name} />,
  renderBenefitIcon,
  slug,
  faqIdPrefix,
  benefitsVariant = "green",
  children,
}: WordPressThemeCustomizationTemplateProps) {
  const brandsContent = {
    heading: content.brands.heading,
    slug: content.brands.slug ?? slug,
  };

  const featuresContent = {
    eyebrow: content.features.eyebrow,
    heading: content.features.heading,
    description: content.features.description,
    boxes: content.features.items.map((item) => ({
      icon: renderFeatureIcon(item.iconName),
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: content.services.eyebrow,
    heading: content.services.heading,
    description: content.services.description,
    items: content.services.items.map((item) => ({
      iconSvg: renderServiceIcon(item.iconName),
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: content.benefits.eyebrow,
    heading: content.benefits.heading,
    description: content.benefits.description,
    boxes: content.benefits.items.map((item) => ({
      icon: renderBenefitIcon(item.iconName),
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={content.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={content.brands.heading}
        items={content.brands.items}
      />

      {/* 3. Features */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant={benefitsVariant}
      />

      {/* 6. Why Choose */}
      <EvaluationFrameworkSection content={content.whyChoose} />

      {/* 7. Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={content.portfolio}
        sectionId="our_work"
      />

      {/* 8. Testimonials (if present) */}
      {content.testimonials ? (
        <HappyClientSection
          description={content.testimonials.description}
          eyebrow={content.testimonials.eyebrow}
          heading={content.testimonials.heading}
        />
      ) : null}

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        heading={content.faqsHeading}
        idPrefix={faqIdPrefix}
        items={content.faqs}
      />

      {children}
    </div>
  );
}
