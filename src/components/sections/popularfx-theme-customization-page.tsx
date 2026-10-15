import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  PopularfxBenefitIcon,
  PopularfxFeatureIcon,
  PopularfxServiceIcon,
} from "@/components/sections/popularfx-theme-customization/popularfx-icons";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { popularfxThemeCustomizationContent } from "@/content/popularfx-theme-customization";

export function PopularfxThemeCustomizationPage() {
  const brandsContent = {
    heading: popularfxThemeCustomizationContent.brands.heading,
    slug: popularfxThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: popularfxThemeCustomizationContent.features.eyebrow,
    heading: popularfxThemeCustomizationContent.features.heading,
    description: popularfxThemeCustomizationContent.features.description,
    boxes: popularfxThemeCustomizationContent.features.items.map((item) => ({
      icon: <PopularfxFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: popularfxThemeCustomizationContent.services.eyebrow,
    heading: popularfxThemeCustomizationContent.services.heading,
    description: popularfxThemeCustomizationContent.services.description,
    items: popularfxThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <PopularfxServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: popularfxThemeCustomizationContent.benefits.eyebrow,
    heading: popularfxThemeCustomizationContent.benefits.heading,
    description: popularfxThemeCustomizationContent.benefits.description,
    boxes: popularfxThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <PopularfxBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={popularfxThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={popularfxThemeCustomizationContent.brands.heading}
        items={popularfxThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of PopularFX Theme */}
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

      {/* 5. Benefits of PopularFX Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={popularfxThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={popularfxThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="popularfx-faq"
        items={popularfxThemeCustomizationContent.faqs}
      />
    </div>
  );
}
