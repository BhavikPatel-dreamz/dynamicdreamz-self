import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { ShopifyAppFeaturesSection } from "@/components/sections/shopify-mobile-app/shopify-app-features-section";
import { ShopifyAppProcessSection } from "@/components/sections/shopify-mobile-app/shopify-app-process-section";
import {
  shopifyMobileAppBenefits,
  shopifyMobileAppDevelopmentBrands,
  shopifyMobileAppDevelopmentCtaBanner,
  shopifyMobileAppDevelopmentFaqs,
  shopifyMobileAppDevelopmentHero,
  shopifyMobileAppFeatures,
  shopifyMobileAppProcess,
} from "@/content/shopify-mobile-app-development";

export function ShopifyMobileAppDevelopmentPage() {
  return (
    <div className="font-sans leading-[30.4px]">
      <ServiceHeroSection
        className="inner-hero-sec full-width-sec shopify-mobile-app-development relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[991px]:pt-[100px]"
        content={shopifyMobileAppDevelopmentHero}
        variant="centered"
      />
      <IndustryBrandsSection
        content={{
          slug: "shopify-mobile-app-development",
        }}
        items={shopifyMobileAppDevelopmentBrands}
      />
      <ShopifyAppBenefitsSection content={shopifyMobileAppBenefits} />
      <ShopifyAppFeaturesSection content={shopifyMobileAppFeatures} />
      <ShopifyAppProcessSection content={shopifyMobileAppProcess} />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="shopify-mobile-app-faq"
        items={shopifyMobileAppDevelopmentFaqs}
      />
      <CtaBannerSection
        ctaHref={shopifyMobileAppDevelopmentCtaBanner.ctaHref}
        ctaLabel={shopifyMobileAppDevelopmentCtaBanner.ctaLabel}
        heading={shopifyMobileAppDevelopmentCtaBanner.heading}
      />
    </div>
  );
}
