import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import {
  upgradeShopifyPlusAdvantage,
  upgradeShopifyPlusBrands,
  upgradeShopifyPlusCaseStudies,
  upgradeShopifyPlusFaqCopy,
  upgradeShopifyPlusFaqs,
  upgradeShopifyPlusHero,
  upgradeShopifyPlusKeepWhatWorks,
  upgradeShopifyPlusPortfolio,
  upgradeShopifyPlusPricing,
  upgradeShopifyPlusTurnCapabilities,
  upgradeShopifyPlusWhatWeImplement,
  upgradeShopifyPlusWhenPlusMakesSense,
  upgradeShopifyPlusWhyWorkWithUs,
} from "@/content/upgrade-to-shopify-plus";

export function UpgradeToShopifyPlusPage() {
  return (
    <div>
      {/* 1. Hero */}
      <ServiceHeroVideoSection
        content={upgradeShopifyPlusHero}
        titleAccentTag="span"
        titleAccentClassName="text-[#ad5151] font-normal not-italic"
      />

      {/* 2. Trusted by Leading Brands */}
      <IndustryBrandsSection
        content={{ slug: "upgrade-to-shopify-plus" }}
        heading={upgradeShopifyPlusBrands.heading}
        items={upgradeShopifyPlusBrands.items}
      />

      {/* 3. Keep what works. Upgrade the capabilities that matter. */}
      <AiEmpoweredDeliverySection
        content={upgradeShopifyPlusKeepWhatWorks}
        variant="dark-green"
      />

      {/* 4. When Shopify Plus Makes Sense */}
      <ThemeCustomizationServicesSection
        content={upgradeShopifyPlusWhenPlusMakesSense}
        id="plus-fit"
        variant="yellow"
      />

      {/* 5. Why Upgrade to Shopify Plus? / Advantages */}
      <OurDevelopmentProcessSection content={upgradeShopifyPlusAdvantage} />

      {/* 6. What Dynamic Dreamz can implement after the decision to upgrade */}
      <ThemeCustomizationServicesSection
        content={upgradeShopifyPlusWhatWeImplement}
        id="plus-services"
        variant="green"
      />

      {/* 7. Turn Plus capabilities into practical workflows */}
      <AiEmpoweredDeliverySection
        content={upgradeShopifyPlusTurnCapabilities}
        variant="default"
      />

      {/* 8. Why work with us on a Shopify Plus upgrade? */}
      <WhyChooseShopifyMigrationSection
        content={upgradeShopifyPlusWhyWorkWithUs}
        id="why-work-with-us"
      />

      {/* 9. Case Studies: Selected work where Shopify supports more complex commerce */}
      <ServicesCaseStudiesSection
        eyebrow={upgradeShopifyPlusCaseStudies.eyebrow}
        heading={upgradeShopifyPlusCaseStudies.heading}
        description={upgradeShopifyPlusCaseStudies.description}
        items={upgradeShopifyPlusCaseStudies.items}
      />

      {/* 10. Portfolio: Selected Shopify Experience */}
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        columns={4}
        content={upgradeShopifyPlusPortfolio}
        headerLayout="split"
        hideCta={true}
        sectionId="our_work"
        variant="liveGrid"
      />

      {/* 11. Flexible Shopify Engagements */}
      <PricingTableSection content={upgradeShopifyPlusPricing} />

      {/* 12. Questions growing Shopify brands ask before moving to Plus */}
      <SplitFaqSection
        eyebrow={upgradeShopifyPlusFaqCopy.eyebrow}
        heading={upgradeShopifyPlusFaqCopy.heading}
        idPrefix="upgrade-shopify-plus-faq"
        items={upgradeShopifyPlusFaqs}
      />
    </div>
  );
}
