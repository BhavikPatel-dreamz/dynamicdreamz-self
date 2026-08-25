import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { kubioThemeCustomizationContent } from "@/content/kubio-theme-customization";

export function KubioThemeCustomizationPage() {
  const brandsContent = {
    heading: kubioThemeCustomizationContent.brands.title,
    slug: "kubio-theme-customization",
  };

  const benefitsContent = {
    heading: kubioThemeCustomizationContent.benefits.title,
    description: kubioThemeCustomizationContent.benefits.subtitle,
    items: kubioThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: kubioThemeCustomizationContent.services.title,
    description: kubioThemeCustomizationContent.services.subtitle,
    items: kubioThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: kubioThemeCustomizationContent.portfolio.title,
    description: kubioThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: kubioThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={kubioThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={kubioThemeCustomizationContent.brands.title}
        items={kubioThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={kubioThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={kubioThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[991px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[991px]:pb-[50px]"
        idPrefix="kubio-faq"
        items={kubioThemeCustomizationContent.faqs}
      />
    </div>
  );
}
