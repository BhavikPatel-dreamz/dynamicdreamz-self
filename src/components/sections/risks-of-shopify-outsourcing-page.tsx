import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ImageCtaSection } from "@/components/sections/image-cta-section";
import { RisksShopifyTopics } from "@/components/sections/risks-shopify-topics";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
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
        className="inner-hero-sec relative overflow-hidden bg-white pt-[190px] pb-[130px] max-[1199px]:pt-[140px] max-[1199px]:pb-[60px] max-[767px]:pt-[120px]"
        content={{
          ...risksShopifyOutsourcingHero,
          maxWidthClassName: "max-w-[830px]",
        }}
        headingClassName="!font-montreal-medium !font-medium !tracking-[0]"
        showReviews={false}
        variant="centered"
        bodyClassName="!mt-2 !mb-0 !text-base !font-normal !leading-[30.4px]"
      />
      <RisksShopifyTopics items={risksShopifyOutsourcingTopics} />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[50px]"
        idPrefix="risks-shopify-faq"
        items={risksShopifyOutsourcingFaqs}
      />
      <ImageCtaSection
        backgroundImage="/assets/backgrounds/think-migration.png"
        className="thinking-migration-box"
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
