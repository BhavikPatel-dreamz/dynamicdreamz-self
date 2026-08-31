import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { royalElementorKitThemeCustomizationContent } from "@/content/royal-elementor-kit-theme-customization";

export function RoyalElementorKitThemeCustomizationPage() {
  const brandsContent = {
    heading: royalElementorKitThemeCustomizationContent.brands.title,
    slug: "royal-elementor-kit-theme-customization",
  };

  const benefitsContent = {
    heading: royalElementorKitThemeCustomizationContent.benefits.title,
    description: royalElementorKitThemeCustomizationContent.benefits.subtitle,
    items: royalElementorKitThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: royalElementorKitThemeCustomizationContent.services.title,
    description: royalElementorKitThemeCustomizationContent.services.subtitle,
    items: royalElementorKitThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: royalElementorKitThemeCustomizationContent.portfolio.title,
    description: royalElementorKitThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: royalElementorKitThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={royalElementorKitThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={royalElementorKitThemeCustomizationContent.brands.title}
        items={royalElementorKitThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={royalElementorKitThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={royalElementorKitThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="royal-elementor-kit-faq"
        items={royalElementorKitThemeCustomizationContent.faqs}
      />
    </div>
  );
}
