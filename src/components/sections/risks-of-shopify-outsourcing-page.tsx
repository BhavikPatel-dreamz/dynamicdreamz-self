import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { ImageCtaSection } from "@/components/sections/image-cta-section";
import { RisksShopifyTopics } from "@/components/sections/risks-shopify-topics";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import {
  risksShopifyOutsourcingCtas,
  risksShopifyOutsourcingFaqs,
  risksShopifyOutsourcingHero,
  risksShopifyOutsourcingTopics,
} from "@/content/risks-of-shopify-outsourcing";

export function RisksOfShopifyOutsourcingPage() {
  return (
    <div className="font-sans leading-[30.4px]">
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
