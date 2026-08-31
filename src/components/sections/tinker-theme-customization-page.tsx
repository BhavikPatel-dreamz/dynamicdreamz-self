import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { tinkerThemeCustomizationContent } from "@/content/tinker-theme-customization";

export function TinkerThemeCustomizationPage() {
  const brandsContent = {
    heading: tinkerThemeCustomizationContent.brands.title,
    slug: "tinker-theme-customization",
  };

  const benefitsContent = {
    heading: tinkerThemeCustomizationContent.benefits.title,
    description: tinkerThemeCustomizationContent.benefits.subtitle,
    items: tinkerThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: tinkerThemeCustomizationContent.services.title,
    description: tinkerThemeCustomizationContent.services.subtitle,
    items: tinkerThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: tinkerThemeCustomizationContent.portfolio.title,
    description: tinkerThemeCustomizationContent.portfolio.subtitle,
    items: tinkerThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={tinkerThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={tinkerThemeCustomizationContent.brands.title}
        items={tinkerThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={tinkerThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={tinkerThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="tinker-faq"
        items={tinkerThemeCustomizationContent.faqs}
      />
    </div>
  );
}
