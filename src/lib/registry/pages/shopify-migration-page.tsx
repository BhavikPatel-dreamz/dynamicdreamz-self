import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { ServicesCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { SeoSafeMigrationSection } from "@/components/blocks/MigrationDataChecklistBlock";
import { ShopifyMigrationNumberedGridSection } from "@/components/blocks/ProcessWorkflowBlock";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { WhyChooseShopifyMigrationSection } from "@/components/blocks/WhyChooseUsBlock";
import {
  shopifyMigrationBrands,
  shopifyMigrationCaseStudies,
  shopifyMigrationFaqsContent,
  shopifyMigrationHero,
  shopifyMigrationPortfolio,
  shopifyMigrationProcess,
  shopifyMigrationScope,
  shopifyMigrationSeoSafe,
  shopifyMigrationServicesContent,
  shopifyMigrationTestimonials,
  shopifyMigrationWhyChoose,
} from "@/content/shopify-migration";

export function ShopifyMigrationPage() {
  return (
    <div>
      {/* 1. Hero */}
      <ServiceHeroVideoSection
        content={shopifyMigrationHero}
        wrapperClassName="hero-shopify-migration"
      />

      {/* 2. Client Logos */}
      <IndustryBrandsSection
        content={shopifyMigrationBrands}
        heading={shopifyMigrationBrands.heading}
        items={shopifyMigrationBrands.items}
      />

      {/* 3. Platform-Specific Shopify Migration */}
      <ShopifyMigrationServicesSection
        banner={shopifyMigrationServicesContent.banner}
        description={shopifyMigrationServicesContent.description}
        eyebrow={shopifyMigrationServicesContent.eyebrow}
        heading={shopifyMigrationServicesContent.heading}
        id="explore_migration_options"
        items={shopifyMigrationServicesContent.items}
      />

      {/* 4. Migration Scope */}
      <ShopifyMigrationNumberedGridSection
        description={shopifyMigrationScope.description}
        eyebrow={shopifyMigrationScope.eyebrow}
        heading={shopifyMigrationScope.heading}
        items={shopifyMigrationScope.items}
        variant={shopifyMigrationScope.variant}
      />

      {/* 5. Shopify Migration Process */}
      <ShopifyMigrationNumberedGridSection
        description={shopifyMigrationProcess.description}
        eyebrow={shopifyMigrationProcess.eyebrow}
        heading={shopifyMigrationProcess.heading}
        items={shopifyMigrationProcess.items}
        variant={shopifyMigrationProcess.variant}
      />

      {/* 6. SEO-Safe Shopify Migration */}
      <SeoSafeMigrationSection content={shopifyMigrationSeoSafe} />

      {/* 7. Why Choose Dynamic Dreamz for Shopify Migration */}
      <WhyChooseShopifyMigrationSection content={shopifyMigrationWhyChoose} />

      {/* 8. Portfolio of Shopify Migration */}
      <PortfolioShowcaseSection
        columns={4}
        content={shopifyMigrationPortfolio}
        sectionId="our_work"
        variant="liveGrid"
      />

      {/* 9. Client Stories / Testimonials */}
      <HappyClientSection
        description={shopifyMigrationTestimonials.description}
        eyebrow={shopifyMigrationTestimonials.eyebrow}
        heading={shopifyMigrationTestimonials.heading}
        items={shopifyMigrationTestimonials.items}
      />

      {/* 10. Case Studies */}
      <ServicesCaseStudiesSection
        description={shopifyMigrationCaseStudies.description}
        eyebrow={shopifyMigrationCaseStudies.eyebrow}
        heading={shopifyMigrationCaseStudies.heading}
        items={shopifyMigrationCaseStudies.items}
      />

      {/* 11. FAQs */}
      <SplitFaqSection
        description={shopifyMigrationFaqsContent.description}
        eyebrow={shopifyMigrationFaqsContent.eyebrow}
        heading={shopifyMigrationFaqsContent.heading}
        idPrefix="shopify-migration-faq"
        items={shopifyMigrationFaqsContent.items}
      />
    </div>
  );
}
