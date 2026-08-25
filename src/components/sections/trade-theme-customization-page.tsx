import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { tradeThemeCustomizationContent } from "@/content/trade-theme-customization";

export function TradeThemeCustomizationPage() {
  const brandsContent = {
    heading: tradeThemeCustomizationContent.brands.title,
    slug: "trade-theme-customization",
  };

  const benefitsContent = {
    heading: tradeThemeCustomizationContent.benefits.title,
    description: tradeThemeCustomizationContent.benefits.subtitle,
    items: tradeThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: tradeThemeCustomizationContent.services.title,
    description: tradeThemeCustomizationContent.services.subtitle,
    items: tradeThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: tradeThemeCustomizationContent.portfolio.title,
    description: tradeThemeCustomizationContent.portfolio.subtitle,
    items: tradeThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={tradeThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={tradeThemeCustomizationContent.brands.title}
        items={tradeThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={tradeThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={tradeThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="trade-faq"
        items={tradeThemeCustomizationContent.faqs}
      />
    </div>
  );
}
