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
  beautyCosmeticsBrands,
  beautyCosmeticsBrandsConfig,
  beautyCosmeticsBrandsHeading,
  beautyCosmeticsCaseStudies,
  beautyCosmeticsChallenges,
  beautyCosmeticsCustomDev,
  beautyCosmeticsFaqEyebrow,
  beautyCosmeticsFaqHeading,
  beautyCosmeticsFaqs,
  beautyCosmeticsHero,
  beautyCosmeticsPortfolio,
  beautyCosmeticsSolutions,
  beautyCosmeticsTechnologies,
  beautyCosmeticsTestimonials,
  beautyCosmeticsWhyChoose,
} from "@/content/beauty-cosmetics";

export function BeautyCosmeticsPage() {
  return (
    <>
      <ServiceHeroVideoSection content={beautyCosmeticsHero} />
      <IndustryBrandsSection
        content={beautyCosmeticsBrandsConfig}
        heading={beautyCosmeticsBrandsHeading}
        items={beautyCosmeticsBrands}
      />
      <ServicesCaseStudiesSection
        description={beautyCosmeticsCaseStudies.description}
        eyebrow={beautyCosmeticsCaseStudies.eyebrow}
        heading={beautyCosmeticsCaseStudies.heading}
        hideCardDescription={false}
        items={beautyCosmeticsCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={beautyCosmeticsChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={beautyCosmeticsSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={beautyCosmeticsCustomDev} />
      <WhiteLabelToolsSection
        description={beautyCosmeticsTechnologies.description}
        rows={beautyCosmeticsTechnologies.rows}
        title={beautyCosmeticsTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={beautyCosmeticsPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={beautyCosmeticsWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={beautyCosmeticsTestimonials.description}
        eyebrow={beautyCosmeticsTestimonials.eyebrow}
        heading={beautyCosmeticsTestimonials.heading}
        items={beautyCosmeticsTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={beautyCosmeticsFaqEyebrow}
        heading={beautyCosmeticsFaqHeading}
        idPrefix="beauty-cosmetics-faq"
        items={beautyCosmeticsFaqs}
      />
    </>
  );
}
