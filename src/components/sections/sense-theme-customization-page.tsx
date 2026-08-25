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
      <ThemeHeroSection
        content={senseThemeCustomizationContent.hero}
        imageStretchesOnDesktop
        tabletImageHalfWidth
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={senseThemeCustomizationContent.brands.title}
      />
      <ThemeFeaturesSection content={senseThemeCustomizationContent.features} />
      <ShopifyReasonsSection
        carouselFullBleed
        carouselItemClassName="basis-[calc(100vw-82px)] min-[576px]:basis-[458px] min-[767px]:basis-[246px] min-[768px]:basis-[308px] min-[992px]:basis-[427px] min-[1200px]:basis-[537px] min-[1400px]:basis-[627px]"
        cardMinHeightClassName="min-h-[305px]"
        content={benefitsContent}
        layout="carousel"
        preserveHeadingBreaks
      />
      <ShopifyServicesSection
        content={servicesContent}
        preserveDesktopTypography
        variant="liveTheme"
      />
      <ThemeWhyChooseSection
        content={senseThemeCustomizationContent.whyChoose}
        preserveDesktopTypography
        preserveLiveIconSize
        variant="top-icon-mobile"
      />
      <FaqSection
        className="faq-sec pt-20 pb-20 max-[991px]:pt-[50px] max-[991px]:pb-[50px]"
        idPrefix="sense-theme-faq"
        items={senseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
