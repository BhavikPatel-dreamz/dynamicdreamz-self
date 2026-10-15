import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { publisherThemeCustomizationContent } from "@/content/publisher-theme-customization";

export function PublisherThemeCustomizationPage() {
  const brandsContent = {
    heading: publisherThemeCustomizationContent.brands.title,
    slug: "publisher-theme-customization",
  };

  const servicesContent = {
    heading: publisherThemeCustomizationContent.services.heading,
    description: publisherThemeCustomizationContent.services.description,
    items: publisherThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: publisherThemeCustomizationContent.whyChoose.eyebrow,
    heading: publisherThemeCustomizationContent.whyChoose.heading,
    description: publisherThemeCustomizationContent.whyChoose.description,
    items: publisherThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: publisherThemeCustomizationContent.portfolio.eyebrow,
    heading: publisherThemeCustomizationContent.portfolio.heading,
    description: publisherThemeCustomizationContent.portfolio.description,
    items: publisherThemeCustomizationContent.portfolio.items,
    ctaLabel: publisherThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: publisherThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={publisherThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={publisherThemeCustomizationContent.brands.title}
        items={publisherThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={publisherThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={publisherThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={publisherThemeCustomizationContent.services.eyebrow}
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
        eyebrow={publisherThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={publisherThemeCustomizationContent.faqsHeading}
        idPrefix="publisher-faq"
        items={publisherThemeCustomizationContent.faqs}
      />
    </div>
  );
}
