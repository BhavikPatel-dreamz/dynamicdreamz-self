import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { goThemeCustomizationContent } from "@/content/go-theme-customization";

export function GoThemeCustomizationPage() {
  const brandsContent = {
    heading: goThemeCustomizationContent.brands.title,
    slug: "go-theme-customization",
  };

  const benefitsContent = {
    heading: goThemeCustomizationContent.benefits.title,
    description: goThemeCustomizationContent.benefits.subtitle,
    items: goThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: goThemeCustomizationContent.services.title,
    description: goThemeCustomizationContent.services.subtitle,
    items: goThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: goThemeCustomizationContent.portfolio.title,
    description: goThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: goThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={goThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={goThemeCustomizationContent.brands.title}
        items={goThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={goThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={goThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="go-theme-faq"
        items={goThemeCustomizationContent.faqs}
      />
    </div>
  );
}
