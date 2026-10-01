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
  androidAppDevelopmentHero,
  androidAppDevelopmentBrands,
  androidAppDevelopmentBrandsCopy,
  androidAppDevelopmentWorkflowDelivery,
  androidAppDevelopmentWhatWeBuildCopy,
  androidAppDevelopmentWhatWeBuildBoxes,
  androidAppDevelopmentLifecycleServicesCopy,
  androidAppDevelopmentLifecycleServicesBoxes,
  androidAppDevelopmentTechStack,
  androidAppDevelopmentProcessCopy,
  androidAppDevelopmentProcessSteps,
  androidAppDevelopmentPortfolio,
  androidAppDevelopmentPricing,
  androidAppDevelopmentWhyChooseCopy,
  androidAppDevelopmentTestimonialsCopy,
  androidAppDevelopmentFaqCopy,
  androidAppDevelopmentFaqs,
} from "@/content/android-app-development";

// Live yellow "What We Build" box icons.
const whatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-android-apps" />,
];

// Live green "Android App Development Services" box icons.
const lifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="prototyping" />,
  <IosAppDevelopmentIcon key="native-android" />,
  <CrossPlatformAppDevelopmentIcon key="android-ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaMaintenanceAppUpdatesIcon key="qa" />,
  <QaLaunchSupportIcon key="google-play" />,
  <ExistingAppCustomizationIcon key="existing-app" />,
  <ShopifyStoreToMobileAppIcon key="shopify-cross-platform" />,
];

const whyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

export function AndroidAppDevelopmentPage() {
  const whatWeBuildContent = {
    ...androidAppDevelopmentWhatWeBuildCopy,
    boxes: androidAppDevelopmentWhatWeBuildBoxes.map((box, index) => ({
      ...box,
      icon: whatWeBuildIcons[index],
    })),
  };

  const lifecycleContent = {
    ...androidAppDevelopmentLifecycleServicesCopy,
    boxes: androidAppDevelopmentLifecycleServicesBoxes.map((box, index) => ({
      ...box,
      icon: lifecycleIcons[index],
    })),
  };

  const whyChooseContent = {
    ...androidAppDevelopmentWhyChooseCopy,
    items: androidAppDevelopmentWhyChooseCopy.items.map((item, index) => ({
      ...item,
      iconSvg: whyChooseIcons[index],
    })),
  };

  return (
    <div className="font-sans leading-[30px]">
      {/* 1. Hero Section */}
      <ShopifyMobileAppHeroSection content={androidAppDevelopmentHero} />

      {/* 2. Client Brands Strip */}
      <IndustryBrandsSection
        content={{
          slug: "android-app-development",
          ariaLabel: androidAppDevelopmentBrandsCopy.ariaLabel,
        }}
        heading={androidAppDevelopmentBrandsCopy.heading}
        items={androidAppDevelopmentBrands}
        density="flexible"
      />

      {/* 3. Custom Android Development */}
      <AiEmpoweredDeliverySection
        content={androidAppDevelopmentWorkflowDelivery}
        variant="dark-green"
      />

      {/* 4. What We Build */}
      <ThemeCustomizationServicesSection
        content={whatWeBuildContent}
        variant="yellow"
      />

      {/* 5. Android App Development Services */}
      <ThemeCustomizationServicesSection
        content={lifecycleContent}
        variant="green"
      />

      {/* 6. Architecture & Technology */}
      <AiEmpoweredDeliverySection
        content={androidAppDevelopmentTechStack}
        variant="dark-green"
      />

      {/* 7. Our App Development Process */}
      <ShopifyMigrationNumberedGridSection
        description={androidAppDevelopmentProcessCopy.description}
        eyebrow={androidAppDevelopmentProcessCopy.eyebrow}
        heading={androidAppDevelopmentProcessCopy.heading}
        items={androidAppDevelopmentProcessSteps}
      />

      {/* 8. Portfolio */}
      <ShopifyMobileAppWorkSection
        className="pt-0"
        content={androidAppDevelopmentPortfolio}
      />

      {/* 9. Engagement & Pricing */}
      <PricingTableSection content={androidAppDevelopmentPricing} />

      {/* 10. Why Dynamic Dreamz */}
      <WhyChooseShopifyMigrationSection content={whyChooseContent} />

      {/* 11. Client Stories Testimonials */}
      <HappyClientSection
        className="pt-[80px] max-[992px]:pt-[50px]"
        description={androidAppDevelopmentTestimonialsCopy.description}
        eyebrow={androidAppDevelopmentTestimonialsCopy.eyebrow}
        heading={androidAppDevelopmentTestimonialsCopy.heading}
        variant="client-stories"
      />

      {/* 12. FAQ Section */}
      <SplitFaqSection
        className="faq-sec bg-[#fafaf7] py-[60px] max-[991px]:py-10"
        description={androidAppDevelopmentFaqCopy.description}
        eyebrow={androidAppDevelopmentFaqCopy.eyebrow}
        heading={androidAppDevelopmentFaqCopy.heading}
        iconVariant="circle-cross"
        idPrefix="android-app-development-faq"
        items={androidAppDevelopmentFaqs}
        sectionId="android-app-development-faq-section"
      />
    </div>
  );
}
