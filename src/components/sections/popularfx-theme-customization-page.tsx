import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { popularfxThemeCustomizationContent } from "@/content/popularfx-theme-customization";

export function PopularfxThemeCustomizationPage() {
  const brandsContent = {
    heading: popularfxThemeCustomizationContent.brands.title,
    slug: "popularfx-theme-customization",
  };

  const benefitsContent = {
    heading: popularfxThemeCustomizationContent.benefits.title,
    description: popularfxThemeCustomizationContent.benefits.subtitle,
    items: popularfxThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: popularfxThemeCustomizationContent.services.title,
    description: popularfxThemeCustomizationContent.services.subtitle,
    items: popularfxThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: popularfxThemeCustomizationContent.portfolio.title,
    description: popularfxThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: popularfxThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={popularfxThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={popularfxThemeCustomizationContent.brands.title}
        items={popularfxThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={popularfxThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={popularfxThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="popularfx-faq"
        items={popularfxThemeCustomizationContent.faqs}
      />
    </div>
  );
}
