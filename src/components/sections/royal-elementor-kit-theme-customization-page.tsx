import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  RoyalElementorKitBenefitIcon,
  RoyalElementorKitFeatureIcon,
  RoyalElementorKitServiceIcon,
} from "@/components/sections/royal-elementor-kit-theme-customization/royal-elementor-kit-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { royalElementorKitThemeCustomizationContent } from "@/content/royal-elementor-kit-theme-customization";

export function RoyalElementorKitThemeCustomizationPage() {
  const brandsContent = {
    heading: royalElementorKitThemeCustomizationContent.brands.heading,
    slug: royalElementorKitThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: royalElementorKitThemeCustomizationContent.features.eyebrow,
    heading: royalElementorKitThemeCustomizationContent.features.heading,
    description: royalElementorKitThemeCustomizationContent.features.description,
    boxes: royalElementorKitThemeCustomizationContent.features.items.map((item) => ({
      icon: <RoyalElementorKitFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: royalElementorKitThemeCustomizationContent.services.eyebrow,
    heading: royalElementorKitThemeCustomizationContent.services.heading,
    description: royalElementorKitThemeCustomizationContent.services.description,
    items: royalElementorKitThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <RoyalElementorKitServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: royalElementorKitThemeCustomizationContent.benefits.eyebrow,
    heading: royalElementorKitThemeCustomizationContent.benefits.heading,
    description: royalElementorKitThemeCustomizationContent.benefits.description,
    boxes: royalElementorKitThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <RoyalElementorKitBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={royalElementorKitThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={royalElementorKitThemeCustomizationContent.brands.heading}
        items={royalElementorKitThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Royal Elementor Kit Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our Royal Elementor Kit Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of Royal Elementor Kit Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={royalElementorKitThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={royalElementorKitThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={royalElementorKitThemeCustomizationContent.testimonials.description}
        eyebrow={royalElementorKitThemeCustomizationContent.testimonials.eyebrow}
        heading={royalElementorKitThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="royal-elementor-kit-faq"
        items={royalElementorKitThemeCustomizationContent.faqs}
      />
    </div>
  );
}
