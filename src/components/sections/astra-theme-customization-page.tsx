import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  AstraBenefitIcon,
  AstraFeatureIcon,
  AstraServiceIcon,
} from "@/components/sections/astra-theme-customization/astra-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { astraThemeCustomizationContent } from "@/content/astra-theme-customization";

export function AstraThemeCustomizationPage() {
  const brandsContent = {
    heading: astraThemeCustomizationContent.brands.heading,
    slug: astraThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: astraThemeCustomizationContent.features.eyebrow,
    heading: astraThemeCustomizationContent.features.heading,
    description: astraThemeCustomizationContent.features.description,
    boxes: astraThemeCustomizationContent.features.items.map((item) => ({
      icon: <AstraFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: astraThemeCustomizationContent.services.eyebrow,
    heading: astraThemeCustomizationContent.services.heading,
    description: astraThemeCustomizationContent.services.description,
    items: astraThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <AstraServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: astraThemeCustomizationContent.benefits.eyebrow,
    heading: astraThemeCustomizationContent.benefits.heading,
    description: astraThemeCustomizationContent.benefits.description,
    boxes: astraThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <AstraBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={astraThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={astraThemeCustomizationContent.brands.heading}
        items={astraThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Astra Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our Astra Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of Astra Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={astraThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={astraThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={astraThemeCustomizationContent.testimonials.description}
        eyebrow={astraThemeCustomizationContent.testimonials.eyebrow}
        heading={astraThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="astra-theme-faq"
        items={astraThemeCustomizationContent.faqs}
      />
    </div>
  );
}
