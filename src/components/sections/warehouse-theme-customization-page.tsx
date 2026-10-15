import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { warehouseThemeCustomizationContent } from "@/content/warehouse-theme-customization";

export function WarehouseThemeCustomizationPage() {
  const brandsContent = {
    heading: warehouseThemeCustomizationContent.brands.title,
    slug: "warehouse-theme-customization",
  };

  const servicesContent = {
    heading: warehouseThemeCustomizationContent.services.heading,
    description: warehouseThemeCustomizationContent.services.description,
    items: warehouseThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: warehouseThemeCustomizationContent.whyChoose.eyebrow,
    heading: warehouseThemeCustomizationContent.whyChoose.heading,
    description: warehouseThemeCustomizationContent.whyChoose.description,
    items: warehouseThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: warehouseThemeCustomizationContent.portfolio.eyebrow,
    heading: warehouseThemeCustomizationContent.portfolio.heading,
    description: warehouseThemeCustomizationContent.portfolio.description,
    items: warehouseThemeCustomizationContent.portfolio.items,
    ctaLabel: warehouseThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: warehouseThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={warehouseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={warehouseThemeCustomizationContent.brands.title}
        items={warehouseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={warehouseThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={warehouseThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={warehouseThemeCustomizationContent.services.eyebrow}
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
        eyebrow={warehouseThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={warehouseThemeCustomizationContent.faqsHeading}
        idPrefix="warehouse-faq"
        items={warehouseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
