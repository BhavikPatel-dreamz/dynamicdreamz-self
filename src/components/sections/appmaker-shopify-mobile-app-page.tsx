import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ShopifyAppBenefitsSection } from "@/components/sections/shopify-mobile-app/shopify-app-benefits-section";
import { ShopifyAppFeaturesSection } from "@/components/sections/shopify-mobile-app/shopify-app-features-section";
import { ShopifyAppProcessSection } from "@/components/sections/shopify-mobile-app/shopify-app-process-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";
import { appmakerShopifyMobileAppDevelopmentContent } from "@/content/appmaker-shopify-mobile-app-development";

export function AppmakerShopifyMobileAppPage() {
  const { hero, brands, benefits, features, process, faqs, faqCopy, ctaBanner } =
    appmakerShopifyMobileAppDevelopmentContent;

  const brandsContent = {
    heading: brands.title,
    slug: "appmaker-shopify-mobile-app-development",
  };

  return (
    <div className="font-sans leading-[30.4px]">
      {/* 1. Hero Section */}
      <ServiceHeroSection
        className="inner-hero-sec full-width-sec relative overflow-hidden bg-white pt-[210px] pb-[55px] max-[992px]:pt-[100px]"
        content={hero}
        variant="centered"
      />

      {/* 2. Brands Slider */}
      <IndustryBrandsSection
        content={brandsContent}
        heading={brands.title}
        items={brands.items}
      />

      {/* 3. Key Benefits of Shopify Appmaker */}
      <ShopifyAppBenefitsSection content={benefits} />

      {/* 4. Features of Shopify App Maker */}
      <ShopifyAppFeaturesSection content={features} />

      {/* 5. How Does the Shopify App Maker Work? */}
      <ShopifyAppProcessSection content={process} />

      {/* 6. FAQ Section */}
      <SplitFaqSection
        idPrefix="appmaker-faq"
        heading={faqCopy.heading}
        items={faqs}
        answerClassName="!text-base !leading-[28px] max-[1199px]:!text-sm max-[1199px]:!leading-[24px] !font-medium !text-[#535353]"
      />

      {/* 7. Bottom CTA Banner */}
      <CtaBannerSection
        ctaHref={ctaBanner.ctaHref}
        ctaLabel={ctaBanner.ctaLabel}
        heading={ctaBanner.heading}
      />
    </div>
  );
}
