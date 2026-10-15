import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  NeveBenefitIcon,
  NeveFeatureIcon,
  NeveServiceIcon,
} from "@/components/sections/neve-theme-customization/neve-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { neveThemeCustomizationContent } from "@/content/neve-theme-customization";

export function NeveThemeCustomizationPage() {
  const brandsContent = {
    heading: neveThemeCustomizationContent.brands.heading,
    slug: neveThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: neveThemeCustomizationContent.features.eyebrow,
    heading: neveThemeCustomizationContent.features.heading,
    description: neveThemeCustomizationContent.features.description,
    boxes: neveThemeCustomizationContent.features.items.map((item) => ({
      icon: <NeveFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: neveThemeCustomizationContent.services.eyebrow,
    heading: neveThemeCustomizationContent.services.heading,
    description: neveThemeCustomizationContent.services.description,
    items: neveThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <NeveServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: neveThemeCustomizationContent.benefits.eyebrow,
    heading: neveThemeCustomizationContent.benefits.heading,
    description: neveThemeCustomizationContent.benefits.description,
    boxes: neveThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <NeveBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={neveThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={neveThemeCustomizationContent.brands.heading}
        items={neveThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Neve Theme */}
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

      {/* 5. Benefits of Neve Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={neveThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={neveThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={neveThemeCustomizationContent.testimonials.description}
        eyebrow={neveThemeCustomizationContent.testimonials.eyebrow}
        heading={neveThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="neve-faq"
        items={neveThemeCustomizationContent.faqs}
      />
    </div>
  );
}
