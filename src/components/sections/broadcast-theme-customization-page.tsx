import { AgencyServicesSection } from "@/components/sections/agency-services-section";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { ThemeFeaturesBannerSection } from "@/components/sections/theme-customization/theme-features-banner-section";
import { ThemeHeroSection } from "@/components/sections/theme-customization/theme-hero-section";
import { broadcastThemeCustomizationContent } from "@/content/broadcast-theme-customization";

export function BroadcastThemeCustomizationPage() {
  const brandsContent = {
    heading: broadcastThemeCustomizationContent.brands.title,
    slug: "broadcast-theme-customization",
  };

  const servicesContent = {
    heading: broadcastThemeCustomizationContent.services.heading,
    description: broadcastThemeCustomizationContent.services.description,
    items: broadcastThemeCustomizationContent.services.items,
  };

  const whyChooseContent = {
    eyebrow: broadcastThemeCustomizationContent.whyChoose.eyebrow,
    heading: broadcastThemeCustomizationContent.whyChoose.heading,
    description: broadcastThemeCustomizationContent.whyChoose.description,
    items: broadcastThemeCustomizationContent.whyChoose.items,
  };

  const portfolioContent = {
    eyebrow: broadcastThemeCustomizationContent.portfolio.eyebrow,
    heading: broadcastThemeCustomizationContent.portfolio.heading,
    description: broadcastThemeCustomizationContent.portfolio.description,
    items: broadcastThemeCustomizationContent.portfolio.items,
    ctaLabel: broadcastThemeCustomizationContent.portfolio.ctaLabel,
    ctaHref: broadcastThemeCustomizationContent.portfolio.ctaHref,
  };

  return (
    <div>
      <ThemeHeroSection content={broadcastThemeCustomizationContent.hero} />
      <IndustryBrandsSection
        content={brandsContent}
        density="compact"
        heading={broadcastThemeCustomizationContent.brands.title}
        items={broadcastThemeCustomizationContent.brands.items}
      />
      <ThemeFeaturesBannerSection
        content={broadcastThemeCustomizationContent.features}
      />
      <CityWhyChooseBoxesSection
        columns={3}
        content={broadcastThemeCustomizationContent.benefits}
        eyebrowVariant="dash"
        theme="warm"
      />
      <AgencyServicesSection
        cardVariant="services-box"
        columns={2}
        content={servicesContent}
        eyebrow={broadcastThemeCustomizationContent.services.eyebrow}
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
        eyebrow={broadcastThemeCustomizationContent.portfolio.eyebrow}
        headerLayout="split"
        hideCta={false}
        itemsClassName="max-[1199px]:grid-cols-3 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1"
        sectionId="our_work"
        showMobileArrow={true}
      />
      <SplitFaqSection
        heading={broadcastThemeCustomizationContent.faqsHeading}
        idPrefix="broadcast-faq"
        items={broadcastThemeCustomizationContent.faqs}
      />
    </div>
  );
}
