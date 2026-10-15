import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import {
  KubioBenefitIcon,
  KubioFeatureIcon,
  KubioServiceIcon,
} from "@/components/sections/kubio-theme-customization/kubio-icons";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { kubioThemeCustomizationContent } from "@/content/kubio-theme-customization";

export function KubioThemeCustomizationPage() {
  const brandsContent = {
    heading: kubioThemeCustomizationContent.brands.heading,
    slug: kubioThemeCustomizationContent.brands.slug,
  };

  const featuresContent = {
    eyebrow: kubioThemeCustomizationContent.features.eyebrow,
    heading: kubioThemeCustomizationContent.features.heading,
    description: kubioThemeCustomizationContent.features.description,
    boxes: kubioThemeCustomizationContent.features.items.map((item) => ({
      icon: <KubioFeatureIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const servicesContent = {
    eyebrow: kubioThemeCustomizationContent.services.eyebrow,
    heading: kubioThemeCustomizationContent.services.heading,
    description: kubioThemeCustomizationContent.services.description,
    items: kubioThemeCustomizationContent.services.items.map((item) => ({
      iconSvg: <KubioServiceIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  const benefitsContent = {
    eyebrow: kubioThemeCustomizationContent.benefits.eyebrow,
    heading: kubioThemeCustomizationContent.benefits.heading,
    description: kubioThemeCustomizationContent.benefits.description,
    boxes: kubioThemeCustomizationContent.benefits.items.map((item) => ({
      icon: <KubioBenefitIcon name={item.iconName} />,
      title: item.title,
      description: item.description,
    })),
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero */}
      <ThemeHeroSection content={kubioThemeCustomizationContent.hero} />

      {/* 2. Client Brands */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={kubioThemeCustomizationContent.brands.heading}
        items={kubioThemeCustomizationContent.brands.items}
      />

      {/* 3. Features of Kubio Theme */}
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

      {/* 5. Benefits of Kubio Theme Customization */}
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        variant="green"
      />

      {/* 6. Why Choose Dynamic Dreamz */}
      <EvaluationFrameworkSection
        content={kubioThemeCustomizationContent.whyChoose}
      />

      {/* 7. WordPress Theme Customization Portfolio */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={kubioThemeCustomizationContent.portfolio}
        sectionId="our_work"
      />

      {/* 8. Client Testimonials */}
      <HappyClientSection
        description={kubioThemeCustomizationContent.testimonials.description}
        eyebrow={kubioThemeCustomizationContent.testimonials.eyebrow}
        heading={kubioThemeCustomizationContent.testimonials.heading}
      />

      {/* 9. Frequently Asked Questions */}
      <SplitFaqSection
        idPrefix="kubio-faq"
        items={kubioThemeCustomizationContent.faqs}
      />
    </div>
  );
}
