import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  BlocksyBenefitIcon,
  BlocksyFeatureIcon,
  BlocksyServiceIcon,
} from "@/components/sections/blocksy-theme-customization/blocksy-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { blocksyThemeCustomizationContent } from "@/content/blocksy-theme-customization";

export function BlocksyThemeCustomizationPage() {
  const brandsContent = {
    heading: blocksyThemeCustomizationContent.brands.heading,
    slug: blocksyThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: blocksyThemeCustomizationContent.features.eyebrow,
    heading: blocksyThemeCustomizationContent.features.heading,
    description: blocksyThemeCustomizationContent.features.description,
    boxes: blocksyThemeCustomizationContent.features.items.map((item) => ({
      icon: <BlocksyFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: blocksyThemeCustomizationContent.services.eyebrow,
    heading: blocksyThemeCustomizationContent.services.heading,
    description: blocksyThemeCustomizationContent.services.description,
    items: blocksyThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <BlocksyServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: blocksyThemeCustomizationContent.benefits.eyebrow,
    heading: blocksyThemeCustomizationContent.benefits.heading,
    description: blocksyThemeCustomizationContent.benefits.description,
    boxes: blocksyThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <BlocksyBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={blocksyThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={blocksyThemeCustomizationContent.brands.heading}
        items={blocksyThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Blocksy Theme */}
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

      {/* 5. Benefits of Blocksy Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={blocksyThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={blocksyThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={blocksyThemeCustomizationContent.testimonials.description}
        eyebrow={blocksyThemeCustomizationContent.testimonials.eyebrow}
        heading={blocksyThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="blocksy-faq"
        items={blocksyThemeCustomizationContent.faqs}
      />
    </div>
  );
}
