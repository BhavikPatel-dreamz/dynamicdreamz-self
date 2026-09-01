import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { warehouseThemeCustomizationContent } from "@/content/warehouse-theme-customization";

export function WarehouseThemeCustomizationPage() {
  const brandsContent = {
    heading: warehouseThemeCustomizationContent.brands.title,
    slug: "warehouse-theme-customization",
  };

  const benefitsContent = {
    heading: warehouseThemeCustomizationContent.benefits.title,
    description: warehouseThemeCustomizationContent.benefits.subtitle,
    items: warehouseThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: warehouseThemeCustomizationContent.services.title,
    description: warehouseThemeCustomizationContent.services.subtitle,
    items: warehouseThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: warehouseThemeCustomizationContent.portfolio.title,
    description: warehouseThemeCustomizationContent.portfolio.subtitle,
    items: warehouseThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={warehouseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={warehouseThemeCustomizationContent.brands.title}
        items={warehouseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={warehouseThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={warehouseThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="warehouse-faq"
        items={warehouseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
