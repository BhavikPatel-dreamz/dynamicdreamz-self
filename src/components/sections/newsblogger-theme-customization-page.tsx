import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { newsbloggerThemeCustomizationContent } from "@/content/newsblogger-theme-customization";

export function NewsbloggerThemeCustomizationPage() {
  const brandsContent = {
    heading: newsbloggerThemeCustomizationContent.brands.title,
    slug: "newsblogger-theme-customization",
  };

  const benefitsContent = {
    heading: newsbloggerThemeCustomizationContent.benefits.title,
    description: newsbloggerThemeCustomizationContent.benefits.subtitle,
    items: newsbloggerThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: newsbloggerThemeCustomizationContent.services.title,
    description: newsbloggerThemeCustomizationContent.services.subtitle,
    items: newsbloggerThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: newsbloggerThemeCustomizationContent.portfolio.title,
    description: newsbloggerThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: newsbloggerThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={newsbloggerThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={newsbloggerThemeCustomizationContent.brands.title}
        items={newsbloggerThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={newsbloggerThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={newsbloggerThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="newsblogger-faq"
        items={newsbloggerThemeCustomizationContent.faqs}
      />
    </div>
  );
}
