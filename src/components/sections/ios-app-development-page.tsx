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
  CrossPlatformAppDevelopmentIcon,
  BackendApisIntegrationsIcon,
  QaMaintenanceAppUpdatesIcon,
  QaLaunchSupportIcon,
  ExistingAppCustomizationIcon,
  TestingShieldIcon,
  LifecycleUpdateIcon,
} from "@/components/sections/mobile-application/mobile-app-icons";

import {
  iosAppDevelopmentHero,
  iosAppDevelopmentBrands,
  iosAppDevelopmentBrandsCopy,
  iosAppDevelopmentWorkflowDelivery,
  iosAppDevelopmentWhatWeBuildCopy,
  iosAppDevelopmentWhatWeBuildBoxes,
  iosAppDevelopmentLifecycleServicesCopy,
  iosAppDevelopmentLifecycleServicesBoxes,
  iosAppDevelopmentTechStack,
  iosAppDevelopmentProcessCopy,
  iosAppDevelopmentProcessSteps,
  iosAppDevelopmentPortfolio,
  iosAppDevelopmentPricing,
  iosAppDevelopmentWhyChooseCopy,
  iosAppDevelopmentTestimonialsCopy,
  iosAppDevelopmentFaqCopy,
  iosAppDevelopmentFaqs,
} from "@/content/ios-app-development";

const whatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const lifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="prototyping" />,
  <IosAppDevelopmentIcon key="native-ios" />,
  <CrossPlatformAppDevelopmentIcon key="ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaMaintenanceAppUpdatesIcon key="qa-testing" />,
  <QaLaunchSupportIcon key="maintenance" />,
  <ExistingAppCustomizationIcon key="customization" />,
  <ShopifyStoreToMobileAppIcon key="extensions" />,
];

const whyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="design-dev" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

export function IosAppDevelopmentPage() {
  const whatWeBuildContent = {
    ...iosAppDevelopmentWhatWeBuildCopy,
    boxes: iosAppDevelopmentWhatWeBuildBoxes.map((box, index) => ({
      ...box,
      icon: whatWeBuildIcons[index],
    })),
  };

  const lifecycleContent = {
    ...iosAppDevelopmentLifecycleServicesCopy,
    boxes: iosAppDevelopmentLifecycleServicesBoxes.map((box, index) => ({
      ...box,
      icon: lifecycleIcons[index],
    })),
  };

  const whyChooseContent = {
    ...iosAppDevelopmentWhyChooseCopy,
    items: iosAppDevelopmentWhyChooseCopy.items.map((item, index) => ({
      ...item,
      iconSvg: whyChooseIcons[index],
    })),
  };

  return (
    <div className="font-sans leading-[30px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={iosAppDevelopmentHero} />

      {/* 2. Client Brands Strip */}
      <IndustryBrandsSection
        content={{
          slug: "ios-app-development",
          ariaLabel: iosAppDevelopmentBrandsCopy.ariaLabel,
        }}
        heading={iosAppDevelopmentBrandsCopy.heading}
        items={iosAppDevelopmentBrands}
        density="flexible"
      />

      {/* 3. Custom iOS Development (Workflow Delivery) */}
      <AiEmpoweredDeliverySection
        content={iosAppDevelopmentWorkflowDelivery}
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
        content={iosAppDevelopmentTechStack}
        variant="dark-green"
      />

      {/* 7. Our App Development Process */}
      <ShopifyMigrationNumberedGridSection
        description={iosAppDevelopmentProcessCopy.description}
        eyebrow={iosAppDevelopmentProcessCopy.eyebrow}
        heading={iosAppDevelopmentProcessCopy.heading}
        items={iosAppDevelopmentProcessSteps}
      />

      {/* 8. Portfolio */}
      <ShopifyMobileAppWorkSection
        className="pt-0"
        content={iosAppDevelopmentPortfolio}
      />

      {/* 9. Engagement & Pricing */}
      <PricingTableSection content={iosAppDevelopmentPricing} />

      {/* 10. Why Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={whyChooseContent} />

      {/* 11. Client Stories Testimonials */}
      <HappyClientSection
        className="pt-[80px] max-[992px]:pt-[50px]"
        description={iosAppDevelopmentTestimonialsCopy.description}
        eyebrow={iosAppDevelopmentTestimonialsCopy.eyebrow}
        heading={iosAppDevelopmentTestimonialsCopy.heading}
        variant="client-stories"
      />

      {/* 12. FAQ Section */}
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10"
        description={iosAppDevelopmentFaqCopy.description}
        eyebrow={iosAppDevelopmentFaqCopy.eyebrow}
        heading={iosAppDevelopmentFaqCopy.heading}
        iconVariant="circle-cross"
        idPrefix="ios-app-development-faq"
        items={iosAppDevelopmentFaqs}
        sectionId="ios-app-development-faq-section"
      />
    </div>
  );
}
