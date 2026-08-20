import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { astraThemeCustomizationContent } from "@/content/astra-theme-customization";

export function AstraThemeCustomizationPage() {
  const brandsContent = {
    heading: astraThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Astra theme customization",
    slug: "astra-theme-customization",
  };

  const benefitsContent = {
    heading: astraThemeCustomizationContent.benefits.title,
    description: astraThemeCustomizationContent.benefits.subtitle,
    items: astraThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: astraThemeCustomizationContent.services.title,
    description: astraThemeCustomizationContent.services.subtitle,
    items: astraThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: astraThemeCustomizationContent.portfolio.title,
    description: astraThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: astraThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={astraThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={astraThemeCustomizationContent.brands.title}
        items={astraThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={astraThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={astraThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="astra-theme-faq"
        items={astraThemeCustomizationContent.faqs}
      />
    </div>
  );
}
