import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  YithWonderBenefitIcon,
  YithWonderFeatureIcon,
  YithWonderServiceIcon,
} from "@/components/sections/yith-wonder-theme-customization/yith-wonder-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { yithWonderThemeCustomizationContent } from "@/content/yith-wonder-theme-customization";

export function YithWonderThemeCustomizationPage() {
  const brandsContent = {
    heading: yithWonderThemeCustomizationContent.brands.heading,
    slug: yithWonderThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: yithWonderThemeCustomizationContent.features.eyebrow,
    heading: yithWonderThemeCustomizationContent.features.heading,
    description: yithWonderThemeCustomizationContent.features.description,
    boxes: yithWonderThemeCustomizationContent.features.items.map((item) => ({
      icon: <YithWonderFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: yithWonderThemeCustomizationContent.services.eyebrow,
    heading: yithWonderThemeCustomizationContent.services.heading,
    description: yithWonderThemeCustomizationContent.services.description,
    items: yithWonderThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <YithWonderServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: yithWonderThemeCustomizationContent.benefits.eyebrow,
    heading: yithWonderThemeCustomizationContent.benefits.heading,
    description: yithWonderThemeCustomizationContent.benefits.description,
    boxes: yithWonderThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <YithWonderBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={yithWonderThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        density="flexible"
        heading={yithWonderThemeCustomizationContent.brands.heading}
        items={yithWonderThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of YITH Wonder Theme */}
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

      {/* 5. Benefits of YITH Wonder Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={yithWonderThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={yithWonderThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={yithWonderThemeCustomizationContent.testimonials.description}
        eyebrow={yithWonderThemeCustomizationContent.testimonials.eyebrow}
        heading={yithWonderThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="yith-wonder-theme-faq"
        items={yithWonderThemeCustomizationContent.faqs}
      />
    </div>
  );
}
