import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import { SeoSafeMigrationSection } from "@/components/sections/shopify-migration/seo-safe-migration-section";
import { EvaluationFrameworkSection } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";

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
    <div className="font-sans leading-[30.4px]">
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
