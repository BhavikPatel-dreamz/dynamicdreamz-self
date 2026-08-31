import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { colorblockThemeCustomizationContent } from "@/content/colorblock-theme-customization";

export function ColorblockThemeCustomizationPage() {
  const brandsContent = {
    heading: colorblockThemeCustomizationContent.brands.title,
    slug: "colorblock-theme-customization",
  };

  const benefitsContent = {
    heading: colorblockThemeCustomizationContent.benefits.title,
    description: colorblockThemeCustomizationContent.benefits.subtitle,
    items: colorblockThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: colorblockThemeCustomizationContent.services.title,
    description: colorblockThemeCustomizationContent.services.subtitle,
    items: colorblockThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: colorblockThemeCustomizationContent.portfolio.title,
    description: colorblockThemeCustomizationContent.portfolio.subtitle,
    items: colorblockThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={colorblockThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={colorblockThemeCustomizationContent.brands.title}
        items={colorblockThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={colorblockThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={colorblockThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="colorblock-faq"
        items={colorblockThemeCustomizationContent.faqs}
      />
    </div>
  );
}
