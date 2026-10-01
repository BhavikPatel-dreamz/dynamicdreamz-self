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
  jewelleryAccessoriesBrands,
  jewelleryAccessoriesBrandsConfig,
  jewelleryAccessoriesBrandsHeading,
  jewelleryAccessoriesCaseStudies,
  jewelleryAccessoriesChallenges,
  jewelleryAccessoriesCustomDev,
  jewelleryAccessoriesFaqEyebrow,
  jewelleryAccessoriesFaqHeading,
  jewelleryAccessoriesFaqs,
  jewelleryAccessoriesHero,
  jewelleryAccessoriesPortfolio,
  jewelleryAccessoriesSolutions,
  jewelleryAccessoriesTechnologies,
  jewelleryAccessoriesTestimonials,
  jewelleryAccessoriesWhyChoose,
} from "@/content/jewellery-accessories";

export function JewelleryAccessoriesPage() {
  return (
    <>
      <ServiceHeroVideoSection content={jewelleryAccessoriesHero} />
      <IndustryBrandsSection
        content={jewelleryAccessoriesBrandsConfig}
        heading={jewelleryAccessoriesBrandsHeading}
        items={jewelleryAccessoriesBrands}
      />
      <ServicesCaseStudiesSection
        description={jewelleryAccessoriesCaseStudies.description}
        eyebrow={jewelleryAccessoriesCaseStudies.eyebrow}
        heading={jewelleryAccessoriesCaseStudies.heading}
        hideCardDescription={false}
        items={jewelleryAccessoriesCaseStudies.items}
      />
      <ThemeCustomizationServicesSection
        content={jewelleryAccessoriesChallenges}
        variant="transparent"
      />
      <ThemeCustomizationServicesSection
        content={jewelleryAccessoriesSolutions}
        variant="green"
      />
      <IndustryCustomDevelopmentSection content={jewelleryAccessoriesCustomDev} />
      <WhiteLabelToolsSection
        description={jewelleryAccessoriesTechnologies.description}
        rows={jewelleryAccessoriesTechnologies.rows}
        title={jewelleryAccessoriesTechnologies.title}
      />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={jewelleryAccessoriesPortfolio}
        hideCta={true}
        sectionId="our_work"
        showMobileArrow={true}
      />
      <WhyChooseShopifyMigrationSection content={jewelleryAccessoriesWhyChoose} />
      <HappyClientSection
        className="pt-20 max-[992px]:pt-12.5"
        description={jewelleryAccessoriesTestimonials.description}
        eyebrow={jewelleryAccessoriesTestimonials.eyebrow}
        heading={jewelleryAccessoriesTestimonials.heading}
        items={jewelleryAccessoriesTestimonials.items}
      />
      <SplitFaqSection
        eyebrow={jewelleryAccessoriesFaqEyebrow}
        heading={jewelleryAccessoriesFaqHeading}
        idPrefix="jewellery-accessories-faq"
        items={jewelleryAccessoriesFaqs}
      />
    </>
  );
}
