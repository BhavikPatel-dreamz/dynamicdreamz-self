import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { oceanwpThemeCustomizationContent } from "@/content/oceanwp-theme-customization";

export function OceanwpThemeCustomizationPage() {
  const brandsContent = {
    heading: oceanwpThemeCustomizationContent.brands.title,
    slug: "oceanwp-theme-customization",
  };

  const benefitsContent = {
    heading: oceanwpThemeCustomizationContent.benefits.title,
    description: oceanwpThemeCustomizationContent.benefits.subtitle,
    items: oceanwpThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: oceanwpThemeCustomizationContent.services.title,
    description: oceanwpThemeCustomizationContent.services.subtitle,
    items: oceanwpThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: oceanwpThemeCustomizationContent.portfolio.title,
    description: oceanwpThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: oceanwpThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={oceanwpThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={oceanwpThemeCustomizationContent.brands.title}
        items={oceanwpThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={oceanwpThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={oceanwpThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="oceanwp-faq"
        items={oceanwpThemeCustomizationContent.faqs}
      />
    </div>
  );
}
