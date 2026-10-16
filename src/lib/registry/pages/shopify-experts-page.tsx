import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { WhyChooseShopifyMigrationSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { AiEmpoweredDeliverySection } from "@/components/blocks/PerformanceBenchmarksBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { shopifyExpertsContent } from "@/content/shopify-experts";

export function ShopifyExpertsPage() {
  return (
    <div>
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
