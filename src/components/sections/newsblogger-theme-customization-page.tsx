import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  NewsbloggerBenefitIcon,
  NewsbloggerFeatureIcon,
  NewsbloggerServiceIcon,
} from "@/components/sections/newsblogger-theme-customization/newsblogger-icons";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { newsbloggerThemeCustomizationContent } from "@/content/newsblogger-theme-customization";

export function NewsbloggerThemeCustomizationPage() {
  const brandsContent = {
    heading: newsbloggerThemeCustomizationContent.brands.heading,
    slug: newsbloggerThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: newsbloggerThemeCustomizationContent.features.eyebrow,
    heading: newsbloggerThemeCustomizationContent.features.heading,
    description: newsbloggerThemeCustomizationContent.features.description,
    boxes: newsbloggerThemeCustomizationContent.features.items.map((item) => ({
      icon: <NewsbloggerFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: newsbloggerThemeCustomizationContent.services.eyebrow,
    heading: newsbloggerThemeCustomizationContent.services.heading,
    description: newsbloggerThemeCustomizationContent.services.description,
    items: newsbloggerThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <NewsbloggerServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: newsbloggerThemeCustomizationContent.benefits.eyebrow,
    heading: newsbloggerThemeCustomizationContent.benefits.heading,
    description: newsbloggerThemeCustomizationContent.benefits.description,
    boxes: newsbloggerThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <NewsbloggerBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={newsbloggerThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={newsbloggerThemeCustomizationContent.brands.heading}
        items={newsbloggerThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of NewsBlogger Theme */}
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

      {/* 5. Benefits of NewsBlogger Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={newsbloggerThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={newsbloggerThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="newsblogger-theme-faq"
        items={newsbloggerThemeCustomizationContent.faqs}
      />
    </div>
  );
}
