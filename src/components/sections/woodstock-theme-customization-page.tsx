import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { woodstockThemeCustomizationContent } from "@/content/woodstock-theme-customization";

export function WoodstockThemeCustomizationPage() {
  const brandsContent = {
    heading: woodstockThemeCustomizationContent.brands.title,
    slug: "woodstock-theme-customization",
  };

  const servicesContent = {
    heading: woodstockThemeCustomizationContent.services.heading,
    description: woodstockThemeCustomizationContent.services.description,
    items: woodstockThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: woodstockThemeCustomizationContent.whyChoose.eyebrow,
    heading: woodstockThemeCustomizationContent.whyChoose.heading,
    description: woodstockThemeCustomizationContent.whyChoose.description,
    items: woodstockThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: woodstockThemeCustomizationContent.portfolio.eyebrow,
    heading: woodstockThemeCustomizationContent.portfolio.heading,
    description: woodstockThemeCustomizationContent.portfolio.description,
    items: woodstockThemeCustomizationContent.portfolio.items,
    ctaLabel: woodstockThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: woodstockThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={woodstockThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={woodstockThemeCustomizationContent.brands.title}
        items={woodstockThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={woodstockThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={woodstockThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={woodstockThemeCustomizationContent.services.eyebrow}
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
        eyebrow={woodstockThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={woodstockThemeCustomizationContent.faqsHeading}
        idPrefix="woodstock-faq"
        items={woodstockThemeCustomizationContent.faqs}
      />
    </div>
  );
}
