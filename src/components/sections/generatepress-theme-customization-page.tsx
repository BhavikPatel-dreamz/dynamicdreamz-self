import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  GeneratepressBenefitIcon,
  GeneratepressFeatureIcon,
  GeneratepressServiceIcon,
} from "@/components/sections/generatepress-theme-customization/generatepress-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { generatepressThemeCustomizationContent } from "@/content/generatepress-theme-customization";

export function GeneratepressThemeCustomizationPage() {
  const brandsContent = {
    heading: generatepressThemeCustomizationContent.brands.heading,
    slug: generatepressThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: generatepressThemeCustomizationContent.features.eyebrow,
    heading: generatepressThemeCustomizationContent.features.heading,
    description: generatepressThemeCustomizationContent.features.description,
    boxes: generatepressThemeCustomizationContent.features.items.map((item) => ({
      icon: <GeneratepressFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: generatepressThemeCustomizationContent.services.eyebrow,
    heading: generatepressThemeCustomizationContent.services.heading,
    description: generatepressThemeCustomizationContent.services.description,
    items: generatepressThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <GeneratepressServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: generatepressThemeCustomizationContent.benefits.eyebrow,
    heading: generatepressThemeCustomizationContent.benefits.heading,
    description: generatepressThemeCustomizationContent.benefits.description,
    boxes: generatepressThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <GeneratepressBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={generatepressThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={generatepressThemeCustomizationContent.brands.heading}
        items={generatepressThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of GeneratePress Theme */}
      <ThemeCustomizationServicesSection content={featuresContent} variant="yellow" />

      {/* 4. Our GeneratePress Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of GeneratePress Theme Customization */}
      <ThemeCustomizationServicesSection content={benefitsContent} variant="green" />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection content={generatepressThemeCustomizationContent.whyChoose} />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={generatepressThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={generatepressThemeCustomizationContent.testimonials.description}
        eyebrow={generatepressThemeCustomizationContent.testimonials.eyebrow}
        heading={generatepressThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="generatepress-faq"
        items={generatepressThemeCustomizationContent.faqs}
      />
    </div>
  );
}
