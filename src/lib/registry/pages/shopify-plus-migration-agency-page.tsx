import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/blocks/ProcessWorkflowBlock";
import { SeoSafeMigrationSection } from "@/components/blocks/MigrationDataChecklistBlock";
import { EvaluationFrameworkSection } from "@/components/blocks/WhyChooseUsBlock";
import { WhyChooseShopifyMigrationSection } from "@/components/blocks/WhyChooseUsBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { ServicesCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";

import {
  plusAgencyHeroContent,
  plusAgencyBrands,
  plusAgencyServicesContent,
  plusAgencyScopeContent,
  plusAgencySeoSafeContent,
  plusAgencyProcessContent,
  plusAgencyWhyChooseContent,
  plusAgencyPricingContent,
  plusAgencyTestimonials,
  plusAgencyCaseStudies,
  plusAgencyFaqsContent,
} from "@/content/shopify-plus-migration-agency";

export function ShopifyPlusMigrationAgencyPage() {
  return (
    <div>
      {/* 1. Hero */}
      <ServiceHeroVideoSection
        content={plusAgencyHeroContent}
        wrapperClassName="hero-shopify-migration"
      />

      {/* 2. Client Brand Logos */}
      <IndustryBrandsSection
        content={{
          slug: "shopify-plus-migration-agency",
        }}
        heading={plusAgencyBrands.heading}
        items={plusAgencyBrands.items}
      />

      {/* 3. Platform Migration Options */}
      <ShopifyMigrationServicesSection
        description={plusAgencyServicesContent.description}
        eyebrow={plusAgencyServicesContent.eyebrow}
        heading={plusAgencyServicesContent.heading}
        id="explore_migration_options"
        items={plusAgencyServicesContent.items}
      />

      {/* 4. What We Migrate (Scope) */}
      <ShopifyMigrationNumberedGridSection
        description={plusAgencyScopeContent.description}
        eyebrow={plusAgencyScopeContent.eyebrow}
        heading={plusAgencyScopeContent.heading}
        id="what-we-migrate"
        items={plusAgencyScopeContent.items}
        variant={plusAgencyScopeContent.variant}
      />

      {/* 5. SEO-Safe Migration */}
      <SeoSafeMigrationSection
        content={plusAgencySeoSafeContent}
      />

      {/* 6. Migration Process */}
      <EvaluationFrameworkSection
        content={plusAgencyProcessContent}
        id="our-migration-process"
      />

      {/* 7. Why Choose Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={plusAgencyWhyChooseContent} />

      {/* 8. Engagement & Pricing */}
      <PricingTableSection content={plusAgencyPricingContent} />

      {/* 9. Client Stories / Testimonials */}
      <HappyClientSection
        hasTopPadding={true}
        description={plusAgencyTestimonials.description}
        eyebrow={plusAgencyTestimonials.eyebrow}
        heading={plusAgencyTestimonials.heading}
        items={plusAgencyTestimonials.items}
      />

      {/* 10. Migration Case Studies */}
      <ServicesCaseStudiesSection
        description={plusAgencyCaseStudies.description}
        eyebrow={plusAgencyCaseStudies.eyebrow}
        heading={plusAgencyCaseStudies.heading}
        items={plusAgencyCaseStudies.items}
      />

      {/* 11. FAQs */}
      <SplitFaqSection
        description={plusAgencyFaqsContent.description}
        eyebrow={plusAgencyFaqsContent.eyebrow}
        heading={plusAgencyFaqsContent.heading}
        idPrefix="shopify-plus-migration-faq"
        items={plusAgencyFaqsContent.items}
      />
    </div>
  );
}
