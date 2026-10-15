import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  HelloBizBenefitIcon,
  HelloBizFeatureIcon,
  HelloBizServiceIcon,
} from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { helloBizThemeCustomizationContent } from "@/content/hello-biz-theme-customization";

export function HelloBizThemeCustomizationPage() {
  const brandsContent = {
    heading: helloBizThemeCustomizationContent.brands.heading,
    slug: helloBizThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: helloBizThemeCustomizationContent.features.eyebrow,
    heading: helloBizThemeCustomizationContent.features.heading,
    description: helloBizThemeCustomizationContent.features.description,
    boxes: helloBizThemeCustomizationContent.features.items.map((item) => ({
      icon: <HelloBizFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: helloBizThemeCustomizationContent.services.eyebrow,
    heading: helloBizThemeCustomizationContent.services.heading,
    description: helloBizThemeCustomizationContent.services.description,
    items: helloBizThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <HelloBizServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: helloBizThemeCustomizationContent.benefits.eyebrow,
    heading: helloBizThemeCustomizationContent.benefits.heading,
    description: helloBizThemeCustomizationContent.benefits.description,
    boxes: helloBizThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <HelloBizBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div>
      {/* 1. Hero */}
      <ThemeHeroSection content={helloBizThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={helloBizThemeCustomizationContent.brands.heading}
        items={helloBizThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Hello Biz Theme */}
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

      {/* 5. Benefits of Hello Biz Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={helloBizThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={helloBizThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={helloBizThemeCustomizationContent.testimonials.description}
        eyebrow={helloBizThemeCustomizationContent.testimonials.eyebrow}
        heading={helloBizThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="hellobiz-faq"
        items={helloBizThemeCustomizationContent.faqs}
      />
    </div>
  );
}
