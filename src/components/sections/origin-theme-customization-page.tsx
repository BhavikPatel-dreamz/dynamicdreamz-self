import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { originThemeCustomizationContent } from "@/content/origin-theme-customization";

export function OriginThemeCustomizationPage() {
  const brandsContent = {
    heading: originThemeCustomizationContent.brands.title,
    slug: "origin-theme-customization",
  };

  const servicesContent = {
    heading: originThemeCustomizationContent.services.heading,
    description: originThemeCustomizationContent.services.description,
    items: originThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: originThemeCustomizationContent.whyChoose.eyebrow,
    heading: originThemeCustomizationContent.whyChoose.heading,
    description: originThemeCustomizationContent.whyChoose.description,
    items: originThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: originThemeCustomizationContent.portfolio.eyebrow,
    heading: originThemeCustomizationContent.portfolio.heading,
    description: originThemeCustomizationContent.portfolio.description,
    items: originThemeCustomizationContent.portfolio.items,
    ctaLabel: originThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: originThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={originThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={originThemeCustomizationContent.brands.title}
        items={originThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={originThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={originThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={originThemeCustomizationContent.services.eyebrow}
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
        eyebrow={originThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={originThemeCustomizationContent.faqsHeading}
        idPrefix="origin-faq"
        items={originThemeCustomizationContent.faqs}
      />
    </div>
  );
}
