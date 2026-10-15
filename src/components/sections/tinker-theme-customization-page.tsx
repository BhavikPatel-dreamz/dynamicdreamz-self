import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { tinkerThemeCustomizationContent } from "@/content/tinker-theme-customization";

export function TinkerThemeCustomizationPage() {
  const brandsContent = {
    heading: tinkerThemeCustomizationContent.brands.title,
    slug: "tinker-theme-customization",
  };

  const servicesContent = {
    heading: tinkerThemeCustomizationContent.services.heading,
    description: tinkerThemeCustomizationContent.services.description,
    items: tinkerThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: tinkerThemeCustomizationContent.whyChoose.eyebrow,
    heading: tinkerThemeCustomizationContent.whyChoose.heading,
    description: tinkerThemeCustomizationContent.whyChoose.description,
    items: tinkerThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: tinkerThemeCustomizationContent.portfolio.eyebrow,
    heading: tinkerThemeCustomizationContent.portfolio.heading,
    description: tinkerThemeCustomizationContent.portfolio.description,
    items: tinkerThemeCustomizationContent.portfolio.items,
    ctaLabel: tinkerThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: tinkerThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={tinkerThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={tinkerThemeCustomizationContent.brands.title}
        items={tinkerThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={tinkerThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={tinkerThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={tinkerThemeCustomizationContent.services.eyebrow}
        id="services"
      />
      <EvaluationFrameworkSection
        content={whyChooseContent}
        id="why-choose"
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={3}
        content={portfolioContent}
        eyebrow={tinkerThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={tinkerThemeCustomizationContent.faqsHeading}
        idPrefix="tinker-faq"
        items={tinkerThemeCustomizationContent.faqs}
      />
    </div>
  );
}
