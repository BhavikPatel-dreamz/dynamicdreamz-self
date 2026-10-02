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
  homeLivingBrands,
  homeLivingBrandsConfig,
  homeLivingBrandsHeading,
  homeLivingCaseStudies,
  homeLivingChallenges,
  homeLivingCustomDev,
  homeLivingFaqEyebrow,
  homeLivingFaqHeading,
  homeLivingFaqs,
  homeLivingHero,
  homeLivingPortfolio,
  homeLivingSolutions,
  homeLivingTechnologies,
  homeLivingTestimonials,
  homeLivingWhyChoose,
} from "@/content/home-living";

export function HomeLivingPage() {
  return (
    <>
      <ServiceHeroVideoSection content={homeLivingHero} />
      <IndustryBrandsSection
        content={homeLivingBrandsConfig}
        heading={homeLivingBrandsHeading}
        items={homeLivingBrands}
      />
      <ServicesCaseStudiesSection
        description={homeLivingCaseStudies.description}
        eyebrow={homeLivingCaseStudies.eyebrow}
        heading={homeLivingCaseStudies.heading}
        items={homeLivingCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={homeLivingChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={homeLivingSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={homeLivingCustomDev} />
      <WhiteLabelToolsSection
        description={homeLivingTechnologies.description}
        rows={homeLivingTechnologies.rows}
        title={homeLivingTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={homeLivingPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={homeLivingWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={homeLivingTestimonials.description}
        eyebrow={homeLivingTestimonials.eyebrow}
        heading={homeLivingTestimonials.heading}
        items={homeLivingTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={homeLivingFaqEyebrow}
        heading={homeLivingFaqHeading}
        idPrefix="home-living-faq"
        items={homeLivingFaqs}
      />
    </>
  );
}
