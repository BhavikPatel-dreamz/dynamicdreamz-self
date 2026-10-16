import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { ImageCtaSection } from "@/components/blocks/QuoteRequestCTABlock";
import { RisksShopifyTopics } from "@/components/blocks/MigrationDataChecklistBlock";
import { ServiceHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import {
  risksShopifyOutsourcingCtas,
  risksShopifyOutsourcingFaqs,
  risksShopifyOutsourcingHero,
  risksShopifyOutsourcingTopics,
} from "@/content/risks-of-shopify-outsourcing";

export function RisksOfShopifyOutsourcingPage() {
  return (
    <div>
      <ServiceHeroSection
        content={{
          ...risksShopifyOutsourcingHero,
          maxWidthClassName: "max-w-[830px]",
        }}
        showReviews={false}
        variant="centered"
      />
      <RisksShopifyTopics items={risksShopifyOutsourcingTopics} />
      <SplitFaqSection
        idPrefix="risks-shopify-faq"
        items={risksShopifyOutsourcingFaqs}
      />
      <ImageCtaSection
        backgroundImage="/assets/backgrounds/think-migration.png"
        ctaHref={risksShopifyOutsourcingCtas.migration.ctaHref}
        ctaLabel={risksShopifyOutsourcingCtas.migration.ctaLabel}
        description={risksShopifyOutsourcingCtas.migration.description}
        heading={risksShopifyOutsourcingCtas.migration.heading}
      />
      <CtaBannerSection
        ctaHref={risksShopifyOutsourcingCtas.quote.ctaHref}
        ctaLabel={risksShopifyOutsourcingCtas.quote.ctaLabel}
        heading={risksShopifyOutsourcingCtas.quote.heading}
      />
    </div>
  );
}
