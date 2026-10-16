import { CtaBannerSection } from "@/components/blocks/QuoteRequestCTABlock";
import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { ServiceHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { ShopifyAppBenefitsSection } from "@/components/blocks/KeyBenefitsGridBlock";
import { ShopifyAppFeaturesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
import { ShopifyAppProcessSection } from "@/components/blocks/ProcessWorkflowBlock";
import { SplitFaqSection } from "@/components/blocks/FaqSectionBlock";
import { appmakerShopifyMobileAppDevelopmentContent } from "@/content/appmaker-shopify-mobile-app-development";

export function AppmakerShopifyMobileAppPage() {
  const { hero, brands, benefits, features, process, faqs, faqCopy, ctaBanner } =
    appmakerShopifyMobileAppDevelopmentContent;

  const brandsContent = {
    heading: brands.title,
    slug: "appmaker-shopify-mobile-app-development",
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <ServiceHeroSection
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
