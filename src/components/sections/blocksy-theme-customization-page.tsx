import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { blocksyThemeCustomizationContent } from "@/content/blocksy-theme-customization";

export function BlocksyThemeCustomizationPage() {
  const brandsContent = {
    heading: blocksyThemeCustomizationContent.brands.title,
    slug: "blocksy-theme-customization",
  };

  const benefitsContent = {
    heading: blocksyThemeCustomizationContent.benefits.title,
    description: blocksyThemeCustomizationContent.benefits.subtitle,
    items: blocksyThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: blocksyThemeCustomizationContent.services.title,
    description: blocksyThemeCustomizationContent.services.subtitle,
    items: blocksyThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: blocksyThemeCustomizationContent.portfolio.title,
    description: blocksyThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: blocksyThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={blocksyThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={blocksyThemeCustomizationContent.brands.title}
        items={blocksyThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={blocksyThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={blocksyThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="blocksy-faq"
        items={blocksyThemeCustomizationContent.faqs}
      />
    </div>
  );
}
