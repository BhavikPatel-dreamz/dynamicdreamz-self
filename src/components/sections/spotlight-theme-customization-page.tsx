import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { spotlightThemeCustomizationContent } from "@/content/spotlight-theme-customization";

export function SpotlightThemeCustomizationPage() {
  const brandsContent = {
    heading: spotlightThemeCustomizationContent.brands.title,
    slug: "spotlight-theme-customization",
  };

  const benefitsContent = {
    heading: spotlightThemeCustomizationContent.benefits.title,
    description: spotlightThemeCustomizationContent.benefits.subtitle,
    items: spotlightThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: spotlightThemeCustomizationContent.services.title,
    description: spotlightThemeCustomizationContent.services.subtitle,
    items: spotlightThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: spotlightThemeCustomizationContent.portfolio.title,
    description: spotlightThemeCustomizationContent.portfolio.subtitle,
    items: spotlightThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={spotlightThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={spotlightThemeCustomizationContent.brands.title}
        items={spotlightThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={spotlightThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={spotlightThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="spotlight-faq"
        items={spotlightThemeCustomizationContent.faqs}
      />
    </div>
  );
}
