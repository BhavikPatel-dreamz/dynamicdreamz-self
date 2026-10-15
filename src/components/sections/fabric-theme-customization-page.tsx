import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { fabricThemeCustomizationContent } from "@/content/fabric-theme-customization";

export function FabricThemeCustomizationPage() {
  const brandsContent = {
    heading: fabricThemeCustomizationContent.brands.title,
    slug: "fabric-theme-customization",
  };

  const servicesContent = {
    heading: fabricThemeCustomizationContent.services.heading,
    description: fabricThemeCustomizationContent.services.description,
    items: fabricThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: fabricThemeCustomizationContent.whyChoose.eyebrow,
    heading: fabricThemeCustomizationContent.whyChoose.heading,
    description: fabricThemeCustomizationContent.whyChoose.description,
    items: fabricThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: fabricThemeCustomizationContent.portfolio.eyebrow,
    heading: fabricThemeCustomizationContent.portfolio.heading,
    description: fabricThemeCustomizationContent.portfolio.description,
    items: fabricThemeCustomizationContent.portfolio.items,
    ctaLabel: fabricThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: fabricThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={fabricThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={fabricThemeCustomizationContent.brands.title}
        items={fabricThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={fabricThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={fabricThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={fabricThemeCustomizationContent.services.eyebrow}
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
        eyebrow={fabricThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={fabricThemeCustomizationContent.faqsHeading}
        idPrefix="fabric-faq"
        items={fabricThemeCustomizationContent.faqs}
      />
    </div>
  );
}
