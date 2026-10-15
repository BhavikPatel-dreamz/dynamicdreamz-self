import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { horizonThemeCustomizationContent } from "@/content/horizon-theme-customization";

export function HorizonThemeCustomizationPage() {
  const brandsContent = {
    heading: horizonThemeCustomizationContent.brands.title,
    slug: "horizon-theme-customization",
  };

  const servicesContent = {
    heading: horizonThemeCustomizationContent.services.heading,
    description: horizonThemeCustomizationContent.services.description,
    items: horizonThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: horizonThemeCustomizationContent.whyChoose.eyebrow,
    heading: horizonThemeCustomizationContent.whyChoose.heading,
    description: horizonThemeCustomizationContent.whyChoose.description,
    items: horizonThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: horizonThemeCustomizationContent.portfolio.eyebrow,
    heading: horizonThemeCustomizationContent.portfolio.heading,
    description: horizonThemeCustomizationContent.portfolio.description,
    items: horizonThemeCustomizationContent.portfolio.items,
  };

  return (
    <div>
      <ThemeHeroSection content={horizonThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={horizonThemeCustomizationContent.brands.title}
        items={horizonThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={horizonThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={horizonThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={horizonThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        eyebrow={horizonThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={horizonThemeCustomizationContent.faqsHeading}
        idPrefix="horizon-faq"
        items={horizonThemeCustomizationContent.faqs}
      />
    </div>
  );
}
