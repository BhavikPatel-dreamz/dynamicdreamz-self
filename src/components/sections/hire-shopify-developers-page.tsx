import { ServiceHeroVideoSection } from "@/components/sections/service-hero-video-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { OurDevelopmentProcessSection } from "@/components/sections/our-development-process-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { ShopifyStageServicesSection } from "@/components/sections/shopify-stage-services-section";
import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  HireShopifyIcon,
  type HireShopifyIconName,
} from "@/components/sections/hire-shopify-developers/hire-shopify-icons";
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
    <div className="font-sans leading-[30.4px]">
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
        className="our-development-process bg-transparent"
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
        className="our-work-sec pt-0 pb-20 max-[992px]:pb-[60px]"
        columns={4}
        content={hireShopifyContent.work}
        sectionId="our_work"
      />
      <PricingTableSection content={hireShopifyContent.pricing} />
      <div id="shopify-testimonials">
        <HappyClientSection
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
