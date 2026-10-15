import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { refreshThemeCustomizationContent } from "@/content/refresh-theme-customization";

export function RefreshThemeCustomizationPage() {
  const brandsContent = {
    heading: refreshThemeCustomizationContent.brands.title,
    slug: "refresh-theme-customization",
  };

  const servicesContent = {
    heading: refreshThemeCustomizationContent.services.heading,
    description: refreshThemeCustomizationContent.services.description,
    items: refreshThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: refreshThemeCustomizationContent.whyChoose.eyebrow,
    heading: refreshThemeCustomizationContent.whyChoose.heading,
    description: refreshThemeCustomizationContent.whyChoose.description,
    items: refreshThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: refreshThemeCustomizationContent.portfolio.eyebrow,
    heading: refreshThemeCustomizationContent.portfolio.heading,
    description: refreshThemeCustomizationContent.portfolio.description,
    items: refreshThemeCustomizationContent.portfolio.items,
    ctaLabel: refreshThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: refreshThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={refreshThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={refreshThemeCustomizationContent.brands.title}
        items={refreshThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={refreshThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={refreshThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={refreshThemeCustomizationContent.services.eyebrow}
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
        eyebrow={refreshThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={refreshThemeCustomizationContent.faqsHeading}
        idPrefix="refresh-faq"
        items={refreshThemeCustomizationContent.faqs}
      />
    </div>
  );
}
