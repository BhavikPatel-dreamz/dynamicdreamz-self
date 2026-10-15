import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  ExtendableBenefitIcon,
  ExtendableFeatureIcon,
  ExtendableServiceIcon,
} from "@/components/sections/extendable-theme-customization/extendable-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { extendableThemeCustomizationContent } from "@/content/extendable-theme-customization";

export function ExtendableThemeCustomizationPage() {
  const brandsContent = {
    heading: extendableThemeCustomizationContent.brands.heading,
    slug: extendableThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: extendableThemeCustomizationContent.features.eyebrow,
    heading: extendableThemeCustomizationContent.features.heading,
    description: extendableThemeCustomizationContent.features.description,
    boxes: extendableThemeCustomizationContent.features.items.map((item) => ({
      icon: <ExtendableFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: extendableThemeCustomizationContent.services.eyebrow,
    heading: extendableThemeCustomizationContent.services.heading,
    description: extendableThemeCustomizationContent.services.description,
    items: extendableThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <ExtendableServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: extendableThemeCustomizationContent.benefits.eyebrow,
    heading: extendableThemeCustomizationContent.benefits.heading,
    description: extendableThemeCustomizationContent.benefits.description,
    boxes: extendableThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <ExtendableBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={extendableThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={extendableThemeCustomizationContent.brands.heading}
        items={extendableThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Extendable Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our Extendable Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of Extendable Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={extendableThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={extendableThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={extendableThemeCustomizationContent.testimonials.description}
        eyebrow={extendableThemeCustomizationContent.testimonials.eyebrow}
        heading={extendableThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="extendable-faq"
        items={extendableThemeCustomizationContent.faqs}
      />
    </div>
  );
}
