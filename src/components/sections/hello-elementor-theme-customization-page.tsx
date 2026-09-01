import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { helloElementorThemeCustomizationContent } from "@/content/hello-elementor-theme-customization";

export function HelloElementorThemeCustomizationPage() {
  const brandsContent = {
    heading: helloElementorThemeCustomizationContent.brands.title,
    slug: "hello-elementor-theme-customization",
  };

  const benefitsContent = {
    heading: helloElementorThemeCustomizationContent.benefits.title,
    description: helloElementorThemeCustomizationContent.benefits.subtitle,
    items: helloElementorThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: helloElementorThemeCustomizationContent.services.title,
    description: helloElementorThemeCustomizationContent.services.subtitle,
    items: helloElementorThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: helloElementorThemeCustomizationContent.portfolio.title,
    description: helloElementorThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: helloElementorThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={helloElementorThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={helloElementorThemeCustomizationContent.brands.title}
        items={helloElementorThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={helloElementorThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={helloElementorThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <SplitFaqSection
        idPrefix="hello-elementor-faq"
        items={helloElementorThemeCustomizationContent.faqs}
      />
    </div>
  );
}
