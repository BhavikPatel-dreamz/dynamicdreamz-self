import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { generatepressThemeCustomizationContent } from "@/content/generatepress-theme-customization";

export function GeneratepressThemeCustomizationPage() {
  const brandsContent = {
    heading: generatepressThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for GeneratePress theme customization",
    slug: "generatepress-theme-customization",
  };

  const benefitsContent = {
    heading: generatepressThemeCustomizationContent.benefits.title,
    description: generatepressThemeCustomizationContent.benefits.subtitle,
    items: generatepressThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: generatepressThemeCustomizationContent.services.title,
    description: generatepressThemeCustomizationContent.services.subtitle,
    items: generatepressThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: generatepressThemeCustomizationContent.portfolio.title,
    description: generatepressThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: generatepressThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={generatepressThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={generatepressThemeCustomizationContent.brands.title}
        items={generatepressThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={generatepressThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={generatepressThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
        ctaHref="/our-work"
        ctaLabel="View our work"
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="generatepress-faq"
        items={generatepressThemeCustomizationContent.faqs}
      />
    </div>
  );
}
