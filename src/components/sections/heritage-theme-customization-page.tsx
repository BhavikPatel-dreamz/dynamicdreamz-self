import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { heritageThemeCustomizationContent } from "@/content/heritage-theme-customization";

export function HeritageThemeCustomizationPage() {
  const brandsContent = {
    heading: heritageThemeCustomizationContent.brands.title,
    slug: "heritage-theme-customization",
  };

  const servicesContent = {
    heading: heritageThemeCustomizationContent.services.heading,
    description: heritageThemeCustomizationContent.services.description,
    items: heritageThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: heritageThemeCustomizationContent.whyChoose.eyebrow,
    heading: heritageThemeCustomizationContent.whyChoose.heading,
    description: heritageThemeCustomizationContent.whyChoose.description,
    items: heritageThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: heritageThemeCustomizationContent.portfolio.eyebrow,
    heading: heritageThemeCustomizationContent.portfolio.heading,
    description: heritageThemeCustomizationContent.portfolio.description,
    items: heritageThemeCustomizationContent.portfolio.items,
    ctaLabel: heritageThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: heritageThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={heritageThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={heritageThemeCustomizationContent.brands.title}
        items={heritageThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={heritageThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={heritageThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={heritageThemeCustomizationContent.services.eyebrow}
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
        eyebrow={heritageThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={heritageThemeCustomizationContent.faqsHeading}
        idPrefix="heritage-faq"
        items={heritageThemeCustomizationContent.faqs}
      />
    </div>
  );
}
