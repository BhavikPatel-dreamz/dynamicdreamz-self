import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { impulseThemeCustomizationContent } from "@/content/impulse-theme-customization";

export function ImpulseThemeCustomizationPage() {
  const brandsContent = {
    heading: impulseThemeCustomizationContent.brands.title,
    slug: "impulse-theme-customization",
  };

  const benefitsContent = {
    heading: impulseThemeCustomizationContent.benefits.title,
    description: impulseThemeCustomizationContent.benefits.subtitle,
    items: impulseThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: impulseThemeCustomizationContent.services.title,
    description: impulseThemeCustomizationContent.services.subtitle,
    items: impulseThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: impulseThemeCustomizationContent.portfolio.title,
    description: impulseThemeCustomizationContent.portfolio.subtitle,
    items: [],
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection
        content={impulseThemeCustomizationContent.hero}
        imageStretchesOnDesktop
        tabletImageHalfWidth
        tabletImageTopSpacing
      />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={impulseThemeCustomizationContent.brands.title}
        items={impulseThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={impulseThemeCustomizationContent.features} />
      <ShopifyReasonsSection
        carouselFullBleed
        carouselItemClassName="basis-[calc(100vw-82px)] min-[576px]:basis-[458px] min-[767px]:basis-[246px] min-[768px]:basis-[308px] min-[992px]:basis-[427px] min-[1200px]:basis-[537px] min-[1400px]:basis-[627px]"
        cardMinHeightClassName="min-h-[340px]"
        content={benefitsContent}
        layout="carousel"
        preserveHeadingBreaks
      />
      <AgencyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection
        content={impulseThemeCustomizationContent.whyChoose}
        preserveLiveIconSize
        variant="top-icon-mobile"
      />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
        descriptionBreakClassName="hidden"
        eyebrow={impulseThemeCustomizationContent.portfolioEyebrow}
        eyebrowClassName="min-[992px]:hidden"
        headerLayout="split"
        itemsClassName="mb-20 max-[992px]:mb-[30px]"
      />
      <SplitFaqSection
        idPrefix="impulse-theme-faq"
        items={impulseThemeCustomizationContent.faqs}
      />
    </div>
  );
}
