import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryCustomDevelopmentSection } from "@/components/sections/industry/industry-custom-development-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhiteLabelToolsSection } from "@/components/sections/white-label/white-label-tools-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import {
  foodBeveragesBrands,
  foodBeveragesBrandsConfig,
  foodBeveragesBrandsHeading,
  foodBeveragesCaseStudies,
  foodBeveragesChallenges,
  foodBeveragesCustomDev,
  foodBeveragesFaqEyebrow,
  foodBeveragesFaqHeading,
  foodBeveragesFaqs,
  foodBeveragesHero,
  foodBeveragesPortfolio,
  foodBeveragesSolutions,
  foodBeveragesTechnologies,
  foodBeveragesTestimonials,
  foodBeveragesWhyChoose,
} from "@/content/food-beverages";

export function FoodBeveragesPage() {
  return (
    <>
      <ServiceHeroVideoSection content={foodBeveragesHero} />
      <IndustryBrandsSection
        content={foodBeveragesBrandsConfig}
        heading={foodBeveragesBrandsHeading}
        items={foodBeveragesBrands}
      />
      <ServicesCaseStudiesSection
        description={foodBeveragesCaseStudies.description}
        eyebrow={foodBeveragesCaseStudies.eyebrow}
        heading={foodBeveragesCaseStudies.heading}
        hideCardDescription={false}
        items={foodBeveragesCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={foodBeveragesChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={foodBeveragesSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={foodBeveragesCustomDev} />
      <WhiteLabelToolsSection
        description={foodBeveragesTechnologies.description}
        rows={foodBeveragesTechnologies.rows}
        title={foodBeveragesTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={foodBeveragesPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={foodBeveragesWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={foodBeveragesTestimonials.description}
        eyebrow={foodBeveragesTestimonials.eyebrow}
        heading={foodBeveragesTestimonials.heading}
        items={foodBeveragesTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={foodBeveragesFaqEyebrow}
        heading={foodBeveragesFaqHeading}
        idPrefix="food-beverages-faq"
        items={foodBeveragesFaqs}
      />
    </>
  );
}
