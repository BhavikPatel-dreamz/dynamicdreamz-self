import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { neveThemeCustomizationContent } from "@/content/neve-theme-customization";

export function NeveThemeCustomizationPage() {
  const brandsContent = {
    heading: neveThemeCustomizationContent.brands.title,
    slug: "neve-theme-customization",
  };

  const benefitsContent = {
    heading: neveThemeCustomizationContent.benefits.title,
    description: neveThemeCustomizationContent.benefits.subtitle,
    items: neveThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: neveThemeCustomizationContent.services.title,
    description: neveThemeCustomizationContent.services.subtitle,
    items: neveThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: neveThemeCustomizationContent.portfolio.title,
    description: neveThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: neveThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={neveThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={neveThemeCustomizationContent.brands.title}
        items={neveThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={neveThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={neveThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="neve-faq"
        items={neveThemeCustomizationContent.faqs}
      />
    </div>
  );
}
