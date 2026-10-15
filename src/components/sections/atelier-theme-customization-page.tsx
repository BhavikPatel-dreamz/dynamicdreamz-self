import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { atelierThemeCustomizationContent } from "@/content/atelier-theme-customization";

export function AtelierThemeCustomizationPage() {
  const brandsContent = {
    heading: atelierThemeCustomizationContent.brands.title,
    slug: "atelier-theme-customization",
  };

  const servicesContent = {
    heading: atelierThemeCustomizationContent.services.heading,
    description: atelierThemeCustomizationContent.services.description,
    items: atelierThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: atelierThemeCustomizationContent.whyChoose.eyebrow,
    heading: atelierThemeCustomizationContent.whyChoose.heading,
    description: atelierThemeCustomizationContent.whyChoose.description,
    items: atelierThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: atelierThemeCustomizationContent.portfolio.eyebrow,
    heading: atelierThemeCustomizationContent.portfolio.heading,
    description: atelierThemeCustomizationContent.portfolio.description,
    items: atelierThemeCustomizationContent.portfolio.items,
    ctaLabel: atelierThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: atelierThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={atelierThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={atelierThemeCustomizationContent.brands.title}
        items={atelierThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={atelierThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={atelierThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={atelierThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={3}
        content={portfolioContent}
        eyebrow={atelierThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={atelierThemeCustomizationContent.faqsHeading}
        idPrefix="atelier-faq"
        items={atelierThemeCustomizationContent.faqs}
      />
    </div>
  );
}
