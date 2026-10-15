import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { startupThemeCustomizationContent } from "@/content/startup-theme-customization";

export function StartupThemeCustomizationPage() {
  const brandsContent = {
    heading: startupThemeCustomizationContent.brands.title,
    slug: "startup-theme-customization",
  };

  const servicesContent = {
    heading: startupThemeCustomizationContent.services.heading,
    description: startupThemeCustomizationContent.services.description,
    items: startupThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: startupThemeCustomizationContent.whyChoose.eyebrow,
    heading: startupThemeCustomizationContent.whyChoose.heading,
    description: startupThemeCustomizationContent.whyChoose.description,
    items: startupThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: startupThemeCustomizationContent.portfolio.eyebrow,
    heading: startupThemeCustomizationContent.portfolio.heading,
    description: startupThemeCustomizationContent.portfolio.description,
    items: startupThemeCustomizationContent.portfolio.items,
    ctaLabel: startupThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: startupThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={startupThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={startupThemeCustomizationContent.brands.title}
        items={startupThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={startupThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={startupThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={startupThemeCustomizationContent.services.eyebrow}
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
        eyebrow={startupThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={startupThemeCustomizationContent.faqsHeading}
        idPrefix="startup-faq"
        items={startupThemeCustomizationContent.faqs}
      />
    </div>
  );
}
