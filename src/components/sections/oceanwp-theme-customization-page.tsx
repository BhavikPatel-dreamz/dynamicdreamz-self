import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  OceanwpBenefitIcon,
  OceanwpFeatureIcon,
  OceanwpServiceIcon,
} from "@/components/sections/oceanwp-theme-customization/oceanwp-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { oceanwpThemeCustomizationContent } from "@/content/oceanwp-theme-customization";

export function OceanwpThemeCustomizationPage() {
  const brandsContent = {
    heading: oceanwpThemeCustomizationContent.brands.heading,
    slug: oceanwpThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: oceanwpThemeCustomizationContent.features.eyebrow,
    heading: oceanwpThemeCustomizationContent.features.heading,
    description: oceanwpThemeCustomizationContent.features.description,
    boxes: oceanwpThemeCustomizationContent.features.items.map((item) => ({
      icon: <OceanwpFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: oceanwpThemeCustomizationContent.services.eyebrow,
    heading: oceanwpThemeCustomizationContent.services.heading,
    description: oceanwpThemeCustomizationContent.services.description,
    items: oceanwpThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <OceanwpServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: oceanwpThemeCustomizationContent.benefits.eyebrow,
    heading: oceanwpThemeCustomizationContent.benefits.heading,
    description: oceanwpThemeCustomizationContent.benefits.description,
    boxes: oceanwpThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <OceanwpBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={oceanwpThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={oceanwpThemeCustomizationContent.brands.heading}
        items={oceanwpThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of OceanWP Theme */}
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
      />

      {/* 5. Benefits of OceanWP Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={oceanwpThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={oceanwpThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={oceanwpThemeCustomizationContent.testimonials.description}
        eyebrow={oceanwpThemeCustomizationContent.testimonials.eyebrow}
        heading={oceanwpThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="oceanwp-faq"
        items={oceanwpThemeCustomizationContent.faqs}
      />
    </div>
  );
}
