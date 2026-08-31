import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { bloghashThemeCustomizationContent } from "@/content/bloghash-theme-customization";

export function BloghashThemeCustomizationPage() {
  const brandsContent = {
    heading: bloghashThemeCustomizationContent.brands.title,
    slug: "bloghash-theme-customization",
  };

  const benefitsContent = {
    heading: bloghashThemeCustomizationContent.benefits.title,
    description: bloghashThemeCustomizationContent.benefits.subtitle,
    items: bloghashThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: bloghashThemeCustomizationContent.services.title,
    description: bloghashThemeCustomizationContent.services.subtitle,
    items: bloghashThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: bloghashThemeCustomizationContent.portfolio.title,
    description: bloghashThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: bloghashThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={bloghashThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={bloghashThemeCustomizationContent.brands.title}
        items={bloghashThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={bloghashThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={bloghashThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="bloghash-faq"
        items={bloghashThemeCustomizationContent.faqs}
      />
    </div>
  );
}
