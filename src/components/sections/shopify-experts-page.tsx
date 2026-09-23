import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { HappyClientSection } from "@/components/sections/shopify-plus-agency/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { shopifyExpertsContent } from "@/content/shopify-experts";

export function ShopifyExpertsPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroVideoSection content={shopifyExpertsContent.hero} />
      <IndustryBrandsSection
        content={shopifyExpertsContent.brands}
        heading={shopifyExpertsContent.brands.heading}
        items={shopifyExpertsContent.brands.items}
      />
      <OurDevelopmentProcessSection content={shopifyExpertsContent.process} />
      <WhyChooseShopifyMigrationSection content={shopifyExpertsContent.whyChoose} />
      <ShopifyStageServicesSection
        content={shopifyExpertsContent.services}
        lastColFull
      />
      <ThemeCustomizationServicesSection
        content={shopifyExpertsContent.whyBrandsChoose}
      />
      <AiEmpoweredDeliverySection content={shopifyExpertsContent.aiTools} />
      <PortfolioShowcaseSection
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[60px]"
        content={shopifyExpertsContent.work}
        sectionId="our_work"
      />
      <PricingTableSection content={shopifyExpertsContent.pricing} />
      <div id="shopify-testimonials">
        <HappyClientSection
          description={shopifyExpertsContent.testimonials.description}
          eyebrow={shopifyExpertsContent.testimonials.eyebrow}
          heading={shopifyExpertsContent.testimonials.heading}
        />
      </div>
      <SplitFaqSection
        eyebrow={shopifyExpertsContent.faqs.eyebrow}
        heading={shopifyExpertsContent.faqs.heading}
        idPrefix="shopify-experts-faq"
        items={shopifyExpertsContent.faqs.items}
      />
    </div>
  );
}
