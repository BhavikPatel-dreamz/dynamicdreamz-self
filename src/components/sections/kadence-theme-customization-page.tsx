import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { kadenceThemeCustomizationContent } from "@/content/kadence-theme-customization";

export function KadenceThemeCustomizationPage() {
  const brandsContent = {
    heading: kadenceThemeCustomizationContent.brands.title,
    slug: "kadence-theme-customization",
  };

  const benefitsContent = {
    heading: kadenceThemeCustomizationContent.benefits.title,
    description: kadenceThemeCustomizationContent.benefits.subtitle,
    items: kadenceThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: kadenceThemeCustomizationContent.services.title,
    description: kadenceThemeCustomizationContent.services.subtitle,
    items: kadenceThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: kadenceThemeCustomizationContent.portfolio.title,
    description: kadenceThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: kadenceThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={kadenceThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={kadenceThemeCustomizationContent.brands.title}
        items={kadenceThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={kadenceThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={kadenceThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="kadence-theme-faq"
        items={kadenceThemeCustomizationContent.faqs}
      />
    </div>
  );
}
