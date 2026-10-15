import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  KadenceBenefitIcon,
  KadenceFeatureIcon,
  KadenceServiceIcon,
} from "@/components/sections/kadence-theme-customization/kadence-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { kadenceThemeCustomizationContent } from "@/content/kadence-theme-customization";

export function KadenceThemeCustomizationPage() {
  const brandsContent = {
    heading: kadenceThemeCustomizationContent.brands.heading,
    slug: kadenceThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: kadenceThemeCustomizationContent.features.eyebrow,
    heading: kadenceThemeCustomizationContent.features.heading,
    description: kadenceThemeCustomizationContent.features.description,
    boxes: kadenceThemeCustomizationContent.features.items.map((item) => ({
      icon: <KadenceFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: kadenceThemeCustomizationContent.services.eyebrow,
    heading: kadenceThemeCustomizationContent.services.heading,
    description: kadenceThemeCustomizationContent.services.description,
    items: kadenceThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <KadenceServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: kadenceThemeCustomizationContent.benefits.eyebrow,
    heading: kadenceThemeCustomizationContent.benefits.heading,
    description: kadenceThemeCustomizationContent.benefits.description,
    boxes: kadenceThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <KadenceBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={kadenceThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={kadenceThemeCustomizationContent.brands.heading}
        items={kadenceThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Kadence Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our Kadence Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of Kadence Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={kadenceThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={kadenceThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={kadenceThemeCustomizationContent.testimonials.description}
        eyebrow={kadenceThemeCustomizationContent.testimonials.eyebrow}
        heading={kadenceThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="kadence-theme-faq"
        items={kadenceThemeCustomizationContent.faqs}
      />
    </div>
  );
}
