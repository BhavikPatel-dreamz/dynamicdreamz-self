import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { colorblockThemeCustomizationContent } from "@/content/colorblock-theme-customization";

export function ColorblockThemeCustomizationPage() {
  const brandsContent = {
    heading: colorblockThemeCustomizationContent.brands.title,
    slug: "colorblock-theme-customization",
  };

  const servicesContent = {
    heading: colorblockThemeCustomizationContent.services.heading,
    description: colorblockThemeCustomizationContent.services.description,
    items: colorblockThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: colorblockThemeCustomizationContent.whyChoose.eyebrow,
    heading: colorblockThemeCustomizationContent.whyChoose.heading,
    description: colorblockThemeCustomizationContent.whyChoose.description,
    items: colorblockThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: colorblockThemeCustomizationContent.portfolio.eyebrow,
    heading: colorblockThemeCustomizationContent.portfolio.heading,
    description: colorblockThemeCustomizationContent.portfolio.description,
    items: colorblockThemeCustomizationContent.portfolio.items,
    ctaLabel: colorblockThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: colorblockThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={colorblockThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={colorblockThemeCustomizationContent.brands.title}
        items={colorblockThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={colorblockThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={colorblockThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={colorblockThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={portfolioContent}
        eyebrow={colorblockThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={colorblockThemeCustomizationContent.faqsHeading}
        idPrefix="colorblock-faq"
        items={colorblockThemeCustomizationContent.faqs}
      />
    </div>
  );
}
