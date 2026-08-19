import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { senseThemeCustomizationContent } from "@/content/sense-theme-customization";

export function SenseThemeCustomizationPage() {
  const brandsContent = {
    heading: senseThemeCustomizationContent.brands.title,
    ariaLabel: "Brands that trust Dynamic Dreamz for Sense theme customization",
    slug: "sense-theme-customization",
  };

  const benefitsContent = {
    heading: senseThemeCustomizationContent.benefits.title,
    description: senseThemeCustomizationContent.benefits.subtitle,
    items: senseThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: senseThemeCustomizationContent.services.title,
    description: senseThemeCustomizationContent.services.subtitle,
    items: senseThemeCustomizationContent.services.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={senseThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={senseThemeCustomizationContent.brands.title}
        items={senseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={senseThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={senseThemeCustomizationContent.whyChoose} />
      <FaqSection
        className="faq-sec pt-20 pb-20 max-[991px]:pt-[50px] max-[991px]:pb-[50px]"
        idPrefix="sense-theme-faq"
        items={senseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
