import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  HelloElementorBenefitIcon,
  HelloElementorFeatureIcon,
  HelloElementorServiceIcon,
} from "@/components/sections/hello-elementor-theme-customization/hello-elementor-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { helloElementorThemeCustomizationContent } from "@/content/hello-elementor-theme-customization";

export function HelloElementorThemeCustomizationPage() {
  const brandsContent = {
    heading: helloElementorThemeCustomizationContent.brands.heading,
    slug: helloElementorThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: helloElementorThemeCustomizationContent.features.eyebrow,
    heading: helloElementorThemeCustomizationContent.features.heading,
    description: helloElementorThemeCustomizationContent.features.description,
    boxes: helloElementorThemeCustomizationContent.features.items.map((item) => ({
      icon: <HelloElementorFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: helloElementorThemeCustomizationContent.services.eyebrow,
    heading: helloElementorThemeCustomizationContent.services.heading,
    description: helloElementorThemeCustomizationContent.services.description,
    items: helloElementorThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <HelloElementorServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: helloElementorThemeCustomizationContent.benefits.eyebrow,
    heading: helloElementorThemeCustomizationContent.benefits.heading,
    description: helloElementorThemeCustomizationContent.benefits.description,
    boxes: helloElementorThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <HelloElementorBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={helloElementorThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={helloElementorThemeCustomizationContent.brands.heading}
        items={helloElementorThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Hello Elementor Theme */}
      <ThemeCustomizationServicesSection
        content={featuresContent}
        variant="yellow"
      />

      {/* 4. Our Hello Elementor Theme Customization Services */}
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        id="services"
      />

      {/* 5. Benefits of Hello Elementor Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={helloElementorThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={helloElementorThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={helloElementorThemeCustomizationContent.testimonials.description}
        eyebrow={helloElementorThemeCustomizationContent.testimonials.eyebrow}
        heading={helloElementorThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="hello-elementor-faq"
        items={helloElementorThemeCustomizationContent.faqs}
      />
    </div>
  );
}
