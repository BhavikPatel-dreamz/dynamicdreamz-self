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
  ReactNativeAppDevelopmentIcon,
  FlutterAppDevelopmentIcon,
  ProductDiscoveryUiUxIcon,
  BackendApisIntegrationsIcon,
  NativeModuleSdkIntegrationIcon,
  QaMaintenanceAppUpdatesIcon,
  CrossPlatformAppDevelopmentIcon,
  TestingShieldIcon,
  LifecycleUpdateIcon,
} from "@/components/sections/mobile-application/mobile-app-icons";

import {
  crossPlatformAppDevelopmentHero,
  crossPlatformAppDevelopmentBrands,
  crossPlatformAppDevelopmentBrandsCopy,
  crossPlatformAppDevelopmentWorkflowDelivery,
  crossPlatformAppDevelopmentWhatWeBuildCopy,
  crossPlatformAppDevelopmentWhatWeBuildBoxes,
  crossPlatformAppDevelopmentLifecycleServicesCopy,
  crossPlatformAppDevelopmentLifecycleServicesBoxes,
  crossPlatformAppDevelopmentTechStack,
  crossPlatformAppDevelopmentProcessCopy,
  crossPlatformAppDevelopmentProcessSteps,
  crossPlatformAppDevelopmentPortfolio,
  crossPlatformAppDevelopmentPricing,
  crossPlatformAppDevelopmentWhyChooseCopy,
  crossPlatformAppDevelopmentTestimonialsCopy,
  crossPlatformAppDevelopmentFaqCopy,
  crossPlatformAppDevelopmentFaqs,
} from "@/content/cross-platform-app-development";

const whatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const lifecycleIcons = [
  <ReactNativeAppDevelopmentIcon key="react-native" />,
  <FlutterAppDevelopmentIcon key="flutter" />,
  <ProductDiscoveryUiUxIcon key="ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <NativeModuleSdkIntegrationIcon key="native-modules" />,
  <QaMaintenanceAppUpdatesIcon key="qa-updates" />,
];

const whyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

export function CrossPlatformAppDevelopmentPage() {
  const whatWeBuildContent = {
    ...crossPlatformAppDevelopmentWhatWeBuildCopy,
    boxes: crossPlatformAppDevelopmentWhatWeBuildBoxes.map((box, index) => ({
      ...box,
      icon: whatWeBuildIcons[index],
    })),
  };

  const lifecycleContent = {
    ...crossPlatformAppDevelopmentLifecycleServicesCopy,
    boxes: crossPlatformAppDevelopmentLifecycleServicesBoxes.map(
      (box, index) => ({
        ...box,
        icon: lifecycleIcons[index],
      }),
    ),
  };

  const whyChooseContent = {
    ...crossPlatformAppDevelopmentWhyChooseCopy,
    items: crossPlatformAppDevelopmentWhyChooseCopy.items.map((item, index) => ({
      ...item,
      iconSvg: whyChooseIcons[index],
    })),
  };

  return (
    <div className="font-sans leading-[30px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={crossPlatformAppDevelopmentHero} />

      {/* 2. Client Brands Strip */}
      <IndustryBrandsSection
        content={{
          slug: "cross-platform-app-development",
          ariaLabel: crossPlatformAppDevelopmentBrandsCopy.ariaLabel,
        }}
        heading={crossPlatformAppDevelopmentBrandsCopy.heading}
        items={crossPlatformAppDevelopmentBrands}
        density="flexible"
      />

      {/* 3. One Product · Two Mobile Platforms */}
      <AiEmpoweredDeliverySection
        content={crossPlatformAppDevelopmentWorkflowDelivery}
        variant="dark-green"
      />

      {/* 4. What We Build */}
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
        content={crossPlatformAppDevelopmentTechStack}
        variant="dark-green"
      />

      {/* 7. Our App Development Process */}
      <ShopifyMigrationNumberedGridSection
        description={crossPlatformAppDevelopmentProcessCopy.description}
        eyebrow={crossPlatformAppDevelopmentProcessCopy.eyebrow}
        heading={crossPlatformAppDevelopmentProcessCopy.heading}
        items={crossPlatformAppDevelopmentProcessSteps}
      />

      {/* 8. Portfolio */}
      <ShopifyMobileAppWorkSection
        className="pt-0"
        content={crossPlatformAppDevelopmentPortfolio}
      />

      {/* 9. Engagement & Pricing */}
      <PricingTableSection content={crossPlatformAppDevelopmentPricing} />

      {/* 10. Why Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={whyChooseContent} />

      {/* 11. Client Stories Testimonials */}
      <HappyClientSection
        className="pt-[80px] max-[992px]:pt-[50px]"
        description={
          crossPlatformAppDevelopmentTestimonialsCopy.description
        }
        eyebrow={crossPlatformAppDevelopmentTestimonialsCopy.eyebrow}
        heading={crossPlatformAppDevelopmentTestimonialsCopy.heading}
        variant="client-stories"
      />

      {/* 12. FAQ Section */}
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10"
        description={crossPlatformAppDevelopmentFaqCopy.description}
        eyebrow={crossPlatformAppDevelopmentFaqCopy.eyebrow}
        heading={crossPlatformAppDevelopmentFaqCopy.heading}
        iconVariant="circle-cross"
        idPrefix="cross-platform-app-development-faq"
        items={crossPlatformAppDevelopmentFaqs}
        sectionId="cross-platform-app-development-faq-section"
      />
    </div>
  );
}
