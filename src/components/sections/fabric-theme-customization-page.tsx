import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { fabricThemeCustomizationContent } from "@/content/fabric-theme-customization";

export function FabricThemeCustomizationPage() {
  const brandsContent = {
    heading: fabricThemeCustomizationContent.brands.title,
    slug: "fabric-theme-customization",
  };

  const benefitsContent = {
    heading: fabricThemeCustomizationContent.benefits.title,
    description: fabricThemeCustomizationContent.benefits.subtitle,
    items: fabricThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: fabricThemeCustomizationContent.services.title,
    description: fabricThemeCustomizationContent.services.subtitle,
    items: fabricThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: fabricThemeCustomizationContent.portfolio.title,
    description: fabricThemeCustomizationContent.portfolio.subtitle,
    items: fabricThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={fabricThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={fabricThemeCustomizationContent.brands.title}
        items={fabricThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={fabricThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={fabricThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="fabric-faq"
        items={fabricThemeCustomizationContent.faqs}
      />
    </div>
  );
}
