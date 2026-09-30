import { ShopifyMobileAppHeroSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-hero-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { AiEmpoweredDeliverySection } from "@/components/sections/ai-empowered-delivery-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { ShopifyMigrationNumberedGridSection } from "@/components/sections/shopify-migration/shopify-migration-numbered-grid-section";
import { ShopifyMobileAppWorkSection } from "@/components/sections/shopify-mobile-app/shopify-mobile-app-work-section";
import { PricingTableSection } from "@/components/sections/shopify-plus-agency/pricing-table-section";
import { WhyChooseShopifyMigrationSection } from "@/components/sections/why-choose-shopify-migration-section";
import { HappyClientSection } from "@/components/sections/happy-client-section";
import { SplitFaqSection } from "@/components/sections/split-faq-section";

import {
  UtilityBusinessAppsIcon,
  ConsumerMobileAppsIcon,
  BookingServiceAppsIcon,
  MarketplacePlatformAppsIcon,
  EcommerceMobileAppsIcon,
  ShopifyStoreToMobileAppIcon,
  ProductDiscoveryUiUxIcon,
  IosAppDevelopmentIcon,
  AndroidAppDevelopmentIcon,
  CrossPlatformAppDevelopmentIcon,
  BackendApisIntegrationsIcon,
  QaLaunchSupportIcon,
  TestingShieldIcon,
  LifecycleUpdateIcon,
} from "@/components/sections/mobile-application/mobile-app-icons";

import {
  mobileAppHero,
  mobileAppBrands,
  mobileAppBrandsCopy,
  mobileAppWorkflowDelivery,
  mobileAppWhatWeBuildCopy,
  mobileAppWhatWeBuildBoxes,
  mobileAppLifecycleServicesCopy,
  mobileAppLifecycleServicesBoxes,
  mobileAppTechStack,
  mobileAppProcessCopy,
  mobileAppProcessSteps,
  mobileAppPortfolio,
  mobileAppPricing,
  mobileAppWhyChooseCopy,
  mobileAppTestimonialsCopy,
  mobileAppFaqCopy,
  mobileApplicationDevelopmentFaqs,
} from "@/content/mobile-application-development";

const whatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const lifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="discovery" />,
  <IosAppDevelopmentIcon key="ios" />,
  <AndroidAppDevelopmentIcon key="android" />,
  <CrossPlatformAppDevelopmentIcon key="cross-platform" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaLaunchSupportIcon key="qa" />,
];

const whyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

export function MobileApplicationDevelopmentPage() {
  const whatWeBuildContent = {
    ...mobileAppWhatWeBuildCopy,
    boxes: mobileAppWhatWeBuildBoxes.map((box, index) => ({
      ...box,
      icon: whatWeBuildIcons[index],
    })),
  };

  const lifecycleContent = {
    ...mobileAppLifecycleServicesCopy,
    boxes: mobileAppLifecycleServicesBoxes.map((box, index) => ({
      ...box,
      icon: lifecycleIcons[index],
    })),
  };

  const whyChooseContent = {
    ...mobileAppWhyChooseCopy,
    items: mobileAppWhyChooseCopy.items.map((item, index) => ({
      ...item,
      iconSvg: whyChooseIcons[index],
    })),
  };

  return (
    <div className="font-sans leading-[30px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={mobileAppHero} />

      {/* 2. Client Brands Strip */}
      <IndustryBrandsSection
        content={{
          slug: "mobile-application-development",
          ariaLabel: mobileAppBrandsCopy.ariaLabel,
        }}
        heading={mobileAppBrandsCopy.heading}
        items={mobileAppBrands}
        density="flexible"
      />

      {/* 3. More Than Ecommerce Apps (Workflow Architecture) */}
      <AiEmpoweredDeliverySection
        content={mobileAppWorkflowDelivery}
        variant="dark-green"
      />

      {/* 4. What Kind of Mobile Apps Can We Build? */}
      <ThemeCustomizationServicesSection
        content={whatWeBuildContent}
        variant="yellow"
      />

      {/* 5. End-to-End Services for the Mobile Product Lifecycle */}
      <ThemeCustomizationServicesSection
        content={lifecycleContent}
        variant="green"
      />

      {/* 6. Architecture & Technology */}
      <AiEmpoweredDeliverySection
        content={mobileAppTechStack}
        variant="dark-green"
      />

      {/* 7. Our App Development Process */}
      <ShopifyMigrationNumberedGridSection
        className="pt-0 bg-white"
        description={mobileAppProcessCopy.description}
        eyebrow={mobileAppProcessCopy.eyebrow}
        heading={mobileAppProcessCopy.heading}
        items={mobileAppProcessSteps}
        variant="white"
      />

      {/* 8. Portfolio */}
      <ShopifyMobileAppWorkSection
        className="pt-0"
        content={mobileAppPortfolio}
      />

      {/* 9. Engagement & Pricing */}
      <PricingTableSection content={mobileAppPricing} />

      {/* 10. Why Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={whyChooseContent} />

      {/* 11. Client Stories Testimonials */}
      <HappyClientSection
        className="pt-[80px] max-[992px]:pt-[50px]"
        description={mobileAppTestimonialsCopy.description}
        eyebrow={mobileAppTestimonialsCopy.eyebrow}
        heading={mobileAppTestimonialsCopy.heading}
        variant="client-stories"
      />

      {/* 12. FAQ Section */}
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10"
        description={mobileAppFaqCopy.description}
        eyebrow={mobileAppFaqCopy.eyebrow}
        heading={mobileAppFaqCopy.heading}
        iconVariant="circle-cross"
        idPrefix="mobile-application-development-faq"
        items={mobileApplicationDevelopmentFaqs}
        layout="split"
        sectionId="mobile-application-development-faq-section"
      />
    </div>
  );
}
