import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  BloghashBenefitIcon,
  BloghashFeatureIcon,
  BloghashServiceIcon,
} from "@/components/sections/bloghash-theme-customization/bloghash-icons";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { bloghashThemeCustomizationContent } from "@/content/bloghash-theme-customization";

export function BloghashThemeCustomizationPage() {
  const brandsContent = {
    heading: bloghashThemeCustomizationContent.brands.heading,
    slug: bloghashThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: bloghashThemeCustomizationContent.features.eyebrow,
    heading: bloghashThemeCustomizationContent.features.heading,
    description: bloghashThemeCustomizationContent.features.description,
    boxes: bloghashThemeCustomizationContent.features.items.map((item) => ({
      icon: <BloghashFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: bloghashThemeCustomizationContent.services.eyebrow,
    heading: bloghashThemeCustomizationContent.services.heading,
    description: bloghashThemeCustomizationContent.services.description,
    items: bloghashThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <BloghashServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: bloghashThemeCustomizationContent.benefits.eyebrow,
    heading: bloghashThemeCustomizationContent.benefits.heading,
    description: bloghashThemeCustomizationContent.benefits.description,
    boxes: bloghashThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <BloghashBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={bloghashThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={bloghashThemeCustomizationContent.brands.heading}
        items={bloghashThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of BlogHash Theme */}
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

      {/* 5. Benefits of BlogHash Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="yellow"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={bloghashThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={bloghashThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="bloghash-faq"
        items={bloghashThemeCustomizationContent.faqs}
      />
    </div>
  );
}
