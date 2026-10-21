import type { ReactNode } from "react";

import {
  HappyClientSection,
  type HappyClientTestimonialItem,
} from "@/components/sections/happy-client-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import {
  MigrationProcessSection,
  type MigrationProcessContent,
} from "@/components/sections/migration-process-section";
import {
  ServiceHeroVideoSection,
  type ServiceHeroVideoContent,
} from "@/components/sections/service-hero-video-section";
import {
  EvaluationFrameworkSection,
  type EvaluationFrameworkContent,
} from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import type { ClientLogoSliderItem } from "@/components/ui/client-logo-slider";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type ShopifyMigrationLandingTemplateProps = {
  hero: ServiceHeroVideoContent;
  brands: {
    heading: string;
    items: readonly ClientLogoSliderItem[];
    slug: string;
  };
  whyMigrate: {
    id?: string;
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    boxes: readonly {
      icon: ReactNode;
      title: string;
      description: string;
    }[];
    variant?: "yellow" | "transparent" | "green";
  };
  comparison?: ReactNode;
  secondaryServices?: {
    id?: string;
    eyebrow?: string;
    heading: string | readonly string[];
    description: string | readonly string[];
    boxes: readonly {
      icon: ReactNode;
      title: string;
      description: string;
    }[];
    variant?: "yellow" | "transparent" | "green";
  };
  process: MigrationProcessContent;
  whyChoose?: EvaluationFrameworkContent;
  whyChooseId?: string;
  testimonials: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items?: readonly HappyClientTestimonialItem[];
  };
  faq: {
    idPrefix: string;
    items: readonly FaqAccordionItem[];
    heading?: string;
  };
  children?: ReactNode;
};

export function ShopifyMigrationLandingTemplate({
  hero,
  brands,
  whyMigrate,
  comparison,
  secondaryServices,
  process,
  whyChoose,
  whyChooseId = "why-choose-dynamic-dreamz",
  testimonials,
  faq,
  children,
}: ShopifyMigrationLandingTemplateProps) {
  return (
    <div>
      {/* 1. Hero Section */}
      <ServiceHeroVideoSection content={hero} />

      {/* 2. Brand Partners Section */}
      <IndustryBrandsSection
        content={{
          slug: brands.slug,
        }}
        heading={brands.heading}
        items={brands.items}
      />

      {/* 3. Primary Migration Services / Why Migrate */}
      <ThemeCustomizationServicesSection
        content={{
          eyebrow: whyMigrate.eyebrow,
          heading: whyMigrate.heading,
          description: whyMigrate.description,
          boxes: whyMigrate.boxes,
        }}
        id={whyMigrate.id ?? "why-migrate"}
        variant={whyMigrate.variant ?? "yellow"}
      />

      {/* 3b. Platform Comparison (if present) */}
      {comparison}

      {/* 4. Secondary Migration Services (if present) */}
      {secondaryServices ? (
        <ThemeCustomizationServicesSection
          content={{
            eyebrow: secondaryServices.eyebrow,
            heading: secondaryServices.heading,
            description: secondaryServices.description,
            boxes: secondaryServices.boxes,
          }}
          id={secondaryServices.id ?? "benefits"}
          variant={secondaryServices.variant ?? "transparent"}
        />
      ) : null}

      {/* 5. Migration Process */}
      <MigrationProcessSection
        content={process}
        id="migration-process"
        variant="cards"
      />

      {/* 6. Why Choose (if present) */}
      {whyChoose ? (
        <EvaluationFrameworkSection
          content={whyChoose}
          id={whyChooseId}
        />
      ) : null}

      {/* 7. Testimonials */}
      <HappyClientSection
        description={testimonials.description}
        eyebrow={testimonials.eyebrow}
        heading={testimonials.heading}
        items={testimonials.items}
      />

      {/* 8. Frequently Asked Questions */}
      <SplitFaqSection
        heading={faq.heading}
        idPrefix={faq.idPrefix}
        items={faq.items}
        sectionId="faqs"
      />

      {children}
    </div>
  );
}
