import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { atelierThemeCustomizationContent } from "@/content/atelier-theme-customization";

export function AtelierThemeCustomizationPage() {
  const brandsContent = {
    heading: atelierThemeCustomizationContent.brands.title,
    slug: "atelier-theme-customization",
  };

  const benefitsContent = {
    heading: atelierThemeCustomizationContent.benefits.title,
    description: atelierThemeCustomizationContent.benefits.subtitle,
    items: atelierThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: atelierThemeCustomizationContent.services.title,
    description: atelierThemeCustomizationContent.services.subtitle,
    items: atelierThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: atelierThemeCustomizationContent.portfolio.title,
    description: atelierThemeCustomizationContent.portfolio.subtitle,
    items: atelierThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={atelierThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={atelierThemeCustomizationContent.brands.title}
        items={atelierThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={atelierThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={atelierThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="atelier-faq"
        items={atelierThemeCustomizationContent.faqs}
      />
    </div>
  );
}
