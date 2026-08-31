import { FaqSection } from "@/components/sections/faq-section";
import { ShopifyReasonsSection } from "@/components/sections/hire-shopify-developers/shopify-proof-sections";
import { ShopifyServicesSection } from "@/components/sections/hire-shopify-developers/shopify-services-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ThemeFeaturesSection } from "@/components/sections/theme-customization/theme-features-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { ThemeWhyChooseSection } from "@/components/sections/theme-customization/theme-why-choose-section";
import { beYoursThemeCustomizationContent } from "@/content/be-yours-theme-customization";

export function BeYoursThemeCustomizationPage() {
  const brandsContent = {
    heading: beYoursThemeCustomizationContent.brands.title,
    slug: "be-yours-theme-customization",
  };

  const benefitsContent = {
    heading: beYoursThemeCustomizationContent.benefits.title,
    description: beYoursThemeCustomizationContent.benefits.subtitle,
    items: beYoursThemeCustomizationContent.benefits.items,
  };

  const servicesContent = {
    heading: beYoursThemeCustomizationContent.services.title,
    description: beYoursThemeCustomizationContent.services.subtitle,
    items: beYoursThemeCustomizationContent.services.items,
  };

  const portfolioContent = {
    heading: beYoursThemeCustomizationContent.portfolio.title,
    description: beYoursThemeCustomizationContent.portfolio.subtitle,
    items: beYoursThemeCustomizationContent.portfolio.items,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={beYoursThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={beYoursThemeCustomizationContent.brands.title}
        items={beYoursThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesSection content={beYoursThemeCustomizationContent.features} />
      <ShopifyReasonsSection content={benefitsContent} />
      <ShopifyServicesSection content={servicesContent} />
      <ThemeWhyChooseSection content={beYoursThemeCustomizationContent.whyChoose} />
      <PortfolioShowcaseSection
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        content={portfolioContent}
      />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[992px]:pb-[50px]"
        idPrefix="beyours-faq"
        items={beYoursThemeCustomizationContent.faqs}
      />
    </div>
  );
}
