import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  InspiroBenefitIcon,
  InspiroFeatureIcon,
  InspiroServiceIcon,
} from "@/components/sections/inspiro-theme-customization/inspiro-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { inspiroThemeCustomizationContent } from "@/content/inspiro-theme-customization";

export function InspiroThemeCustomizationPage() {
  const brandsContent = {
    heading: inspiroThemeCustomizationContent.brands.heading,
    slug: inspiroThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: inspiroThemeCustomizationContent.features.eyebrow,
    heading: inspiroThemeCustomizationContent.features.heading,
    description: inspiroThemeCustomizationContent.features.description,
    boxes: inspiroThemeCustomizationContent.features.items.map((item) => ({
      icon: <InspiroFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    heading: inspiroThemeCustomizationContent.services.heading,
    description: inspiroThemeCustomizationContent.services.description,
    items: inspiroThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <InspiroServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: inspiroThemeCustomizationContent.benefits.eyebrow,
    heading: inspiroThemeCustomizationContent.benefits.heading,
    description: inspiroThemeCustomizationContent.benefits.description,
    boxes: inspiroThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <InspiroBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={inspiroThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={inspiroThemeCustomizationContent.brands.heading}
        items={inspiroThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Inspiro Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our WordPress Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
        preserveBreaks
      />

      {/* 5. Benefits of Inspiro Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={inspiroThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={inspiroThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={inspiroThemeCustomizationContent.testimonials.description}
        eyebrow={inspiroThemeCustomizationContent.testimonials.eyebrow}
        heading={inspiroThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="inspiro-theme-faq"
        items={inspiroThemeCustomizationContent.faqs}
      />
    </div>
  );
}
