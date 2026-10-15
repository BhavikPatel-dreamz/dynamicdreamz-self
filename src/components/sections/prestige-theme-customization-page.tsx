import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { prestigeThemeCustomizationContent } from "@/content/prestige-theme-customization";

export function PrestigeThemeCustomizationPage() {
  const brandsContent = {
    heading: prestigeThemeCustomizationContent.brands.title,
    slug: "prestige-theme-customization",
  };

  const servicesContent = {
    heading: prestigeThemeCustomizationContent.services.heading,
    description: prestigeThemeCustomizationContent.services.description,
    items: prestigeThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: prestigeThemeCustomizationContent.whyChoose.eyebrow,
    heading: prestigeThemeCustomizationContent.whyChoose.heading,
    description: prestigeThemeCustomizationContent.whyChoose.description,
    items: prestigeThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: prestigeThemeCustomizationContent.portfolio.eyebrow,
    heading: prestigeThemeCustomizationContent.portfolio.heading,
    description: prestigeThemeCustomizationContent.portfolio.description,
    items: prestigeThemeCustomizationContent.portfolio.items,
    ctaLabel: prestigeThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: prestigeThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={prestigeThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        heading={prestigeThemeCustomizationContent.brands.title}
        items={prestigeThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={prestigeThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={prestigeThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={prestigeThemeCustomizationContent.services.eyebrow}
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
        eyebrow={prestigeThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={prestigeThemeCustomizationContent.faqsHeading}
        idPrefix="prestige-faq"
        items={prestigeThemeCustomizationContent.faqs}
      />
    </div>
  );
}
