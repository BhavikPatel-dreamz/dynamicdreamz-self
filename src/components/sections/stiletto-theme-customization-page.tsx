import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { stilettoThemeCustomizationContent } from "@/content/stiletto-theme-customization";

export function StilettoThemeCustomizationPage() {
  const brandsContent = {
    heading: stilettoThemeCustomizationContent.brands.title,
    slug: "stiletto-theme-customization",
  };

  const servicesContent = {
    heading: stilettoThemeCustomizationContent.services.heading,
    description: stilettoThemeCustomizationContent.services.description,
    items: stilettoThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: stilettoThemeCustomizationContent.whyChoose.eyebrow,
    heading: stilettoThemeCustomizationContent.whyChoose.heading,
    description: stilettoThemeCustomizationContent.whyChoose.description,
    items: stilettoThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: stilettoThemeCustomizationContent.portfolio.eyebrow,
    heading: stilettoThemeCustomizationContent.portfolio.heading,
    description: stilettoThemeCustomizationContent.portfolio.description,
    items: stilettoThemeCustomizationContent.portfolio.items,
    ctaLabel: stilettoThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: stilettoThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div className="font-sans leading-[30.4px]">
      <ThemeHeroSection content={stilettoThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={stilettoThemeCustomizationContent.brands.title}
        items={stilettoThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={stilettoThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={stilettoThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={stilettoThemeCustomizationContent.services.eyebrow}
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
        eyebrow={stilettoThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={stilettoThemeCustomizationContent.faqsHeading}
        idPrefix="stiletto-faq"
        items={stilettoThemeCustomizationContent.faqs}
      />
    </div>
  );
}
