import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  GoBenefitIcon,
  GoFeatureIcon,
  GoServiceIcon,
} from "@/components/sections/go-theme-customization/go-icons";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { goThemeCustomizationContent } from "@/content/go-theme-customization";

export function GoThemeCustomizationPage() {
  const brandsContent = {
    heading: goThemeCustomizationContent.brands.heading,
    slug: goThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: goThemeCustomizationContent.features.eyebrow,
    heading: goThemeCustomizationContent.features.heading,
    description: goThemeCustomizationContent.features.description,
    boxes: goThemeCustomizationContent.features.items.map((item) => ({
      icon: <GoFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: goThemeCustomizationContent.services.eyebrow,
    heading: goThemeCustomizationContent.services.heading,
    description: goThemeCustomizationContent.services.description,
    items: goThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <GoServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: goThemeCustomizationContent.benefits.eyebrow,
    heading: goThemeCustomizationContent.benefits.heading,
    description: goThemeCustomizationContent.benefits.description,
    boxes: goThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <GoBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={goThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={goThemeCustomizationContent.brands.heading}
        items={goThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Go Theme */}
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

      {/* 5. Benefits of Go Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={goThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={goThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="go-theme-faq"
        items={goThemeCustomizationContent.faqs}
      />
    </div>
  );
}
