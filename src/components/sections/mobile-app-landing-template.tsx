import type { ReactNode } from "react";

import {
  AiEmpoweredDeliverySection,
  type AiEmpoweredDeliveryContent,
} from "@/components/sections/ai-empowered-delivery-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import {
  PricingTableSection,
  type PricingEngagementContent,
} from "@/components/sections/shopify-plus-agency/pricing-table-section";
import {
  ShopifyMigrationNumberedGridSection,
  type NumberedGridItem,
} from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import {
  ShopifyMobileAppHeroSection,
  type MobileAppHeroContent,
} from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import {
  ShopifyMobileAppWorkSection,
  type MobileAppWorkContent,
} from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  ThemeCustomizationServicesSection,
  type ThemeCustomizationServicesContent,
} from "@/components/sections/theme-customization-services-section";
import {
  WhyChooseShopifyMigrationSection,
  type WhyChooseMigrationContent,
} from "@/components/sections/why-choose-shopify-migration-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type MobileAppLandingTemplateProps = {
  hero: MobileAppHeroContent;
  brands: {
    heading: string;
    items: readonly ClientLogoSliderItem[];
    slug: string;
    ariaLabel?: string;
  };
  workflowDelivery: AiEmpoweredDeliveryContent;
  whatWeBuild: ThemeCustomizationServicesContent;
  lifecycleServices: ThemeCustomizationServicesContent;
  techStack: AiEmpoweredDeliveryContent;
  process: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: readonly NumberedGridItem[];
    variant?: "white" | "pista";
  };
  portfolio: MobileAppWorkContent;
  pricing: PricingEngagementContent;
  whyChoose: WhyChooseMigrationContent;
  testimonials: {
    eyebrow?: string;
    heading?: string | readonly string[];
    description?: string | readonly string[];
  };
  faq: {
    eyebrow?: string;
    heading: string;
    description?: string;
    idPrefix: string;
    items: readonly FaqAccordionItem[];
    sectionId?: string;
  };
  children?: ReactNode;
};

export function MobileAppLandingTemplate({
  hero,
  brands,
  workflowDelivery,
  whatWeBuild,
  lifecycleServices,
  techStack,
  process,
  portfolio,
  pricing,
  whyChoose,
  testimonials,
  faq,
  children,
}: MobileAppLandingTemplateProps) {
  return (
    <div className="font-sans leading-[30px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={hero} />

      {/* 2. Client Brands Strip */}
      <IndustryBrandsSection
        content={{
          slug: brands.slug,
          ariaLabel: brands.ariaLabel,
        }}
        heading={brands.heading}
        items={brands.items}
        density="flexible"
      />

      {/* 3. Workflow Delivery */}
      <AiEmpoweredDeliverySection
        content={workflowDelivery}
        variant="dark-green"
      />

      {/* 4. What We Build */}
      <ThemeCustomizationServicesSection
        content={whatWeBuild}
        variant="yellow"
      />

      {/* 5. Lifecycle Services */}
      <ThemeCustomizationServicesSection
        content={lifecycleServices}
        variant="green"
      />

      {/* 6. Tech Stack */}
      <AiEmpoweredDeliverySection
        content={techStack}
        variant="dark-green"
      />

      {/* 7. App Development Process */}
      <ShopifyMigrationNumberedGridSection
        description={process.description}
        eyebrow={process.eyebrow}
        heading={process.heading}
        items={process.items}
        variant={process.variant}
      />

      {/* 8. Portfolio */}
      <ShopifyMobileAppWorkSection content={portfolio} />

      {/* 9. Engagement & Pricing */}
      <PricingTableSection content={pricing} />

      {/* 10. Why Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={whyChoose} />

      {/* 11. Client Stories Testimonials */}
      <HappyClientSection
        hasTopPadding={true}
        description={testimonials.description}
        eyebrow={testimonials.eyebrow}
        heading={testimonials.heading}
        variant="client-stories"
      />

      {/* 12. FAQ Section */}
      <SplitFaqSection
        description={faq.description}
        eyebrow={faq.eyebrow}
        heading={faq.heading}
        iconVariant="circle-cross"
        idPrefix={faq.idPrefix}
        items={faq.items}
        sectionId={faq.sectionId}
      />

      {children}
    </div>
  );
}
