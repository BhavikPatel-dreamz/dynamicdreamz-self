import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { ServicesCaseStudiesSection } from "@/components/sections/services-case-studies-section";
import { WhiteLabelProcessSection } from "@/components/sections/white-label/white-label-process-section";
import { WhiteLabelCounterSection } from "@/components/sections/white-label-shopify/white-label-counter-section";
import { ShopifyMobileAppHeroSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import { ShopifyMobileAppDtcSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-dtc-section";
import { ShopifyMobileAppWorkSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import { ShopifyMobileAppComparisonSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-comparison-section";
import { ShopifyMobileAppExperienceSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section";
import {
  shopifyMobileAppCaseStudies,
  shopifyMobileAppComparison,
  shopifyMobileAppCounters,
  shopifyMobileAppDevelopmentCtaBanner,
  shopifyMobileAppDevelopmentFaqs,
  shopifyMobileAppDtcBrands,
  shopifyMobileAppExperience,
  shopifyMobileAppExploreWork,
  shopifyMobileAppFaqCopy,
  shopifyMobileAppHero,
  shopifyMobileAppProcess,
} from "@/content/shopify-mobile-app-development";

export function ShopifyMobileAppDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={shopifyMobileAppHero} />

      {/* 2. Stats / Counters Section */}
      <WhiteLabelCounterSection counters={shopifyMobileAppCounters} />

      {/* 3. DTC Brands / Why Dynamic Dreamz */}
      <ShopifyMobileAppDtcSection content={shopifyMobileAppDtcBrands} />

      {/* 4. Explore Our Work (Portfolio Apps) */}
      <ShopifyMobileAppWorkSection content={shopifyMobileAppExploreWork} />

      {/* 5. App Builder vs Custom Development Table */}
      <ShopifyMobileAppComparisonSection content={shopifyMobileAppComparison} />

      {/* 6. Shopping Moments / Experience */}
      <ShopifyMobileAppExperienceSection content={shopifyMobileAppExperience} />

      {/* 7. Case Studies */}
      <ServicesCaseStudiesSection
        containerClassName="min-[1400px]:max-w-[1408px] px-[15px]"
        eyebrow={shopifyMobileAppCaseStudies.eyebrow}
        heading={shopifyMobileAppCaseStudies.heading}
        description={shopifyMobileAppCaseStudies.description}
        items={shopifyMobileAppCaseStudies.items}
        hideCardDescription={true}
      />

      {/* 8. Process */}
      <WhiteLabelProcessSection
        containerClassName="min-[1400px]:max-w-[1408px] px-[15px]"
        eyebrow={shopifyMobileAppProcess.eyebrow}
        title={shopifyMobileAppProcess.title}
        description={shopifyMobileAppProcess.description}
        steps={shopifyMobileAppProcess.steps}
        note=""
      />

      {/* 9. FAQs */}
      <SplitFaqSection
        containerClassName="min-[1400px]:max-w-[1408px] px-[15px]"
        idPrefix="shopify-mobile-app-faq"
        sectionId="shopify-mobile-app-faq-section"
        className="faq-sec"
        eyebrow={shopifyMobileAppFaqCopy.eyebrow}
        heading={shopifyMobileAppFaqCopy.heading}
        headingBrClassName="max-[991px]:hidden"
        items={shopifyMobileAppDevelopmentFaqs}
        answerClassName="!text-base !leading-[28px] max-[1199px]:!text-sm max-[1199px]:!leading-[24px] !font-medium !text-[#535353]"
      />

      {/* 10. CTA Banner */}
      <CtaBannerSection
        containerClassName="min-[1400px]:max-w-[1408px] px-[15px]"
        ctaHref={shopifyMobileAppDevelopmentCtaBanner.ctaHref}
        ctaLabel={shopifyMobileAppDevelopmentCtaBanner.ctaLabel}
        heading={shopifyMobileAppDevelopmentCtaBanner.heading}
        headingClassName="!font-montreal-medium !font-normal !tracking-normal"
        buttonClassName="!rounded-[30px] !px-6 !py-[15px] !text-base !font-bold !min-h-[50px] !text-[#121212]"
      />
    </div>
  );
}
