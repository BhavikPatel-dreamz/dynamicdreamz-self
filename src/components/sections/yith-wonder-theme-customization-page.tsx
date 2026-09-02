import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { yithWonderThemeCustomizationContent } from "@/content/yith-wonder-theme-customization";

export function YithWonderThemeCustomizationPage() {
  const brandsContent = {
    heading: yithWonderThemeCustomizationContent.brands.title,
    slug: "yith-wonder-theme-customization",
  };

  const benefitsContent = {
    heading: yithWonderThemeCustomizationContent.benefits.title,
    description: yithWonderThemeCustomizationContent.benefits.subtitle,
    items: yithWonderThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: yithWonderThemeCustomizationContent.services.title,
    description: yithWonderThemeCustomizationContent.services.subtitle,
    items: yithWonderThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: yithWonderThemeCustomizationContent.portfolio.title,
    description: yithWonderThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: yithWonderThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={yithWonderThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={yithWonderThemeCustomizationContent.brands.title}
        items={yithWonderThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={yithWonderThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={yithWonderThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="yith-wonder-faq"
        items={yithWonderThemeCustomizationContent.faqs}
      />
    </div>
  );
}
