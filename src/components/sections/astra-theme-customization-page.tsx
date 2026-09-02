import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { astraThemeCustomizationContent } from "@/content/astra-theme-customization";

export function AstraThemeCustomizationPage() {
  const brandsContent = {
    heading: astraThemeCustomizationContent.brands.title,
    slug: "astra-theme-customization",
  };

  const benefitsContent = {
    heading: astraThemeCustomizationContent.benefits.title,
    description: astraThemeCustomizationContent.benefits.subtitle,
    items: astraThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: astraThemeCustomizationContent.services.title,
    description: astraThemeCustomizationContent.services.subtitle,
    items: astraThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: astraThemeCustomizationContent.portfolio.title,
    description: astraThemeCustomizationContent.portfolio.subtitle,
    platformMark: {
      src: "/assets/platforms/wordpress-woocommerce-white.svg",
      width: 90,
      height: 26,
    },
    items: astraThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection
        content={astraThemeCustomizationContent.hero}
        descriptionClassName="mt-3 mb-4 text-sm font-normal leading-[24px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]"
        imageStretchesOnDesktop
        titleClassName="inline-block font-montreal-medium text-[50px] font-medium leading-[60px] tracking-[0] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[359px]:text-[34px] max-[359px]:leading-[44px]"
      />
      <IndustryBrandsSection
        content={brandsContent}
        heading={astraThemeCustomizationContent.brands.title}
        items={astraThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={astraThemeCustomizationContent.features} />
      <ShopifyReasonsSection
        carouselFullBleed
        className="shopify-customization-services-sec mb-0 bg-linear-[97.18deg] from-[#e8f9ef] from-[28.5%] to-[#e6fafd] to-[91.82%] py-20 max-[992px]:py-[60px]"
        content={benefitsContent}
        id="benefits-of-moving"
        layout="carousel"
      />
      <AgencyServicesSection
        content={servicesContent}
        headerTitleColumnClassName="w-[44%]"
        headerTextColumnClassName="w-[48%]"
      />
      <ThemeWhyChooseSection content={astraThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection content={portfolioContent} />
      <SplitFaqSection
        idPrefix="astra-theme-faq"
        items={astraThemeCustomizationContent.faqs}
      />
    </div>
  );
}
