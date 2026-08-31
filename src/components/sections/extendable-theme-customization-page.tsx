import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { extendableThemeCustomizationContent } from "@/content/extendable-theme-customization";

export function ExtendableThemeCustomizationPage() {
  const brandsContent = {
    heading: extendableThemeCustomizationContent.brands.title,
    slug: "extendable-theme-customization",
  };

  const benefitsContent = {
    heading: extendableThemeCustomizationContent.benefits.title,
    description: extendableThemeCustomizationContent.benefits.subtitle,
    items: extendableThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: extendableThemeCustomizationContent.services.title,
    description: extendableThemeCustomizationContent.services.subtitle,
    items: extendableThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: extendableThemeCustomizationContent.portfolio.title,
    description: extendableThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: extendableThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={extendableThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={extendableThemeCustomizationContent.brands.title}
        items={extendableThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={extendableThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={extendableThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="extendable-faq"
        items={extendableThemeCustomizationContent.faqs}
      />
    </div>
  );
}
