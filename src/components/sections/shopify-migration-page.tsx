import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { SeoSafeMigrationSection } from "@/components/sections/shopify-migration/seo-safe-migration-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import { ShopifyMigrationServicesSection } from "@/components/sections/shopify-migration/shopify-migration-services-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
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
    <div className="font-sans leading-[30.4px]">
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
        className="our-work-sec py-20 max-[992px]:py-[50px]"
        columns={4}
        content={shopifyMigrationPortfolio}
        sectionId="our_work"
        variant="liveGrid"
      />

      {/* 9. Client Stories / Testimonials */}
      <HappyClientSection
        className="pt-0 max-[992px]:pt-0"
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
        answerClassName="!text-base !font-medium !leading-7 !text-[#535353] max-[1199px]:!text-sm max-[1199px]:!leading-6"
        className="faq-sec"
        description={shopifyMigrationFaqsContent.description}
        eyebrow={shopifyMigrationFaqsContent.eyebrow}
        heading={shopifyMigrationFaqsContent.heading}
        idPrefix="shopify-migration-faq"
        items={shopifyMigrationFaqsContent.items}
      />
    </div>
  );
}
