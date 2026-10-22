import { ServiceHeroVideoSection } from "@/components/blocks/ServiceHeroBlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { OurDevelopmentProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { WhyChooseShopifyMigrationSection } from "@/components/blocks/WhyChooseUsBlock";
import { ShopifyStageServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { AiEmpoweredDeliverySection } from "@/components/blocks/PerformanceBenchmarksBlock";
import { PortfolioShowcaseSection } from "@/components/blocks/PortfolioSnippetsBlock";
import { PricingTableSection } from "@/components/blocks/EngagementModelsBlock";
import { HappyClientSection } from "@/components/blocks/TestimonialsSliderBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { HireShopifyIcon, type HireShopifyIconName } from "@/lib/icons/hire-shopify-icons";
import { hireShopifyContent } from "@/content/hire-shopify-developers";

export function HireShopifyDevelopersPage() {
  const whyChooseContent = {
    eyebrow: hireShopifyContent.whyChoose.eyebrow,
    heading: hireShopifyContent.whyChoose.heading,
    description: hireShopifyContent.whyChoose.description,
    boxes: hireShopifyContent.whyChoose.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <HireShopifyIcon name={box.iconKey as HireShopifyIconName} />,
    })),
  };

  const advantagesContent = {
    eyebrow: hireShopifyContent.advantages.eyebrow,
    heading: hireShopifyContent.advantages.heading,
    description: hireShopifyContent.advantages.description,
    boxes: hireShopifyContent.advantages.boxes.map((box) => ({
      title: box.title,
      description: box.description,
      icon: <HireShopifyIcon name={box.iconKey as HireShopifyIconName} />,
    })),
  };

  return (
    <div>
      <ServiceHeroVideoSection content={hireShopifyContent.hero} />
      <IndustryBrandsSection
        content={hireShopifyContent.brands}
        heading={hireShopifyContent.brands.heading}
        items={hireShopifyContent.brands.items}
      />
      <ThemeCustomizationServicesSection
        content={whyChooseContent}
        variant="yellow"
      />
      <OurDevelopmentProcessSection
        content={hireShopifyContent.process}
      />
      <WhyChooseShopifyMigrationSection
        content={hireShopifyContent.whyHireExperts}
      />
      <ShopifyStageServicesSection
        content={hireShopifyContent.capabilities}
        lastColFull
      />
      <ThemeCustomizationServicesSection
        content={advantagesContent}
        variant="green"
      />
      <AiEmpoweredDeliverySection content={hireShopifyContent.aiTools} />
      <PortfolioShowcaseSection
        cardVariant="ourWorkRefresh"
        className="pt-0 max-[991px]:pt-0"
        columns={4}
        content={hireShopifyContent.work}
        sectionId="our_work"
      />
      <PricingTableSection content={hireShopifyContent.pricing} />
      <div id="shopify-testimonials">
        <HappyClientSection
          hasTopPadding={true}
          description={hireShopifyContent.testimonials.description}
          eyebrow={hireShopifyContent.testimonials.eyebrow}
          heading={hireShopifyContent.testimonials.heading}
        />
      </div>
      <SplitFaqSection
        heading={hireShopifyContent.faqs.heading}
        idPrefix="hire-shopify-developers-faq"
        items={hireShopifyContent.faqs.items}
      />
    </div>
  );
}
