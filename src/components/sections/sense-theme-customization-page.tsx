import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { senseThemeCustomizationContent } from "@/content/sense-theme-customization";

export function SenseThemeCustomizationPage() {
  const brandsContent = {
    heading: senseThemeCustomizationContent.brands.title,
    slug: "sense-theme-customization",
  };

  const servicesContent = {
    heading: senseThemeCustomizationContent.services.heading,
    description: senseThemeCustomizationContent.services.description,
    items: senseThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: senseThemeCustomizationContent.whyChoose.eyebrow,
    heading: senseThemeCustomizationContent.whyChoose.heading,
    description: senseThemeCustomizationContent.whyChoose.description,
    items: senseThemeCustomizationContent.whyChoose.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={senseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={senseThemeCustomizationContent.brands.title}
        items={senseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={senseThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={senseThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={senseThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <SplitFaqSection
        heading={senseThemeCustomizationContent.faqsHeading}
        idPrefix="sense-faq"
        items={senseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
