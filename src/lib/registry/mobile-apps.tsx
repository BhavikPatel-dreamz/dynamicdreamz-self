import type { ServicePageEntry } from "./types";
import {
  AndroidAppDevelopmentIcon,
  BackendApisIntegrationsIcon,
  BookingServiceAppsIcon,
  ConsumerMobileAppsIcon,
  CrossPlatformAppDevelopmentIcon,
  EcommerceMobileAppsIcon,
  ExistingAppCustomizationIcon,
  FlutterAppDevelopmentIcon,
  IosAppDevelopmentIcon,
  LifecycleUpdateIcon,
  MarketplacePlatformAppsIcon,
  NativeModuleSdkIntegrationIcon,
  ProductDiscoveryUiUxIcon,
  QaLaunchSupportIcon,
  QaMaintenanceAppUpdatesIcon,
  ReactNativeAppDevelopmentIcon,
  ShopifyStoreToMobileAppIcon,
  TestingShieldIcon,
  UtilityBusinessAppsIcon,
} from "@/components/sections/mobile-application/mobile-app-icons";
import { MobileAppLandingTemplate } from "@/components/sections/mobile-app-landing-template";
import { pageMetadata } from "@/data/seo";
import {
  createAndroidAppDevelopmentPageSchema,
  createCrossPlatformAppDevelopmentPageSchema,
  createIosAppDevelopmentPageSchema,
  createMobileApplicationDevelopmentPageSchema,
} from "@/lib/schema";
import {
  androidAppDevelopmentBrands,
  androidAppDevelopmentBrandsCopy,
  androidAppDevelopmentFaqCopy,
  androidAppDevelopmentFaqs,
  androidAppDevelopmentHero,
  androidAppDevelopmentLifecycleServicesBoxes,
  androidAppDevelopmentLifecycleServicesCopy,
  androidAppDevelopmentPortfolio,
  androidAppDevelopmentPricing,
  androidAppDevelopmentProcessCopy,
  androidAppDevelopmentProcessSteps,
  androidAppDevelopmentTechStack,
  androidAppDevelopmentTestimonialsCopy,
  androidAppDevelopmentWhatWeBuildBoxes,
  androidAppDevelopmentWhatWeBuildCopy,
  androidAppDevelopmentWhyChooseCopy,
  androidAppDevelopmentWorkflowDelivery,
} from "@/content/android-app-development";
import {
  crossPlatformAppDevelopmentBrands,
  crossPlatformAppDevelopmentBrandsCopy,
  crossPlatformAppDevelopmentFaqCopy,
  crossPlatformAppDevelopmentFaqs,
  crossPlatformAppDevelopmentHero,
  crossPlatformAppDevelopmentLifecycleServicesBoxes,
  crossPlatformAppDevelopmentLifecycleServicesCopy,
  crossPlatformAppDevelopmentPortfolio,
  crossPlatformAppDevelopmentPricing,
  crossPlatformAppDevelopmentProcessCopy,
  crossPlatformAppDevelopmentProcessSteps,
  crossPlatformAppDevelopmentTechStack,
  crossPlatformAppDevelopmentTestimonialsCopy,
  crossPlatformAppDevelopmentWhatWeBuildBoxes,
  crossPlatformAppDevelopmentWhatWeBuildCopy,
  crossPlatformAppDevelopmentWhyChooseCopy,
  crossPlatformAppDevelopmentWorkflowDelivery,
} from "@/content/cross-platform-app-development";
import {
  iosAppDevelopmentBrands,
  iosAppDevelopmentBrandsCopy,
  iosAppDevelopmentFaqCopy,
  iosAppDevelopmentFaqs,
  iosAppDevelopmentHero,
  iosAppDevelopmentLifecycleServicesBoxes,
  iosAppDevelopmentLifecycleServicesCopy,
  iosAppDevelopmentPortfolio,
  iosAppDevelopmentPricing,
  iosAppDevelopmentProcessCopy,
  iosAppDevelopmentProcessSteps,
  iosAppDevelopmentTechStack,
  iosAppDevelopmentTestimonialsCopy,
  iosAppDevelopmentWhatWeBuildBoxes,
  iosAppDevelopmentWhatWeBuildCopy,
  iosAppDevelopmentWhyChooseCopy,
  iosAppDevelopmentWorkflowDelivery,
} from "@/content/ios-app-development";
import {
  mobileAppBrands,
  mobileAppBrandsCopy,
  mobileAppFaqCopy,
  mobileApplicationDevelopmentFaqs,
  mobileAppHero,
  mobileAppLifecycleServicesBoxes,
  mobileAppLifecycleServicesCopy,
  mobileAppPortfolio,
  mobileAppPricing,
  mobileAppProcessCopy,
  mobileAppProcessSteps,
  mobileAppTechStack,
  mobileAppTestimonialsCopy,
  mobileAppWhatWeBuildBoxes,
  mobileAppWhatWeBuildCopy,
  mobileAppWhyChooseCopy,
  mobileAppWorkflowDelivery,
} from "@/content/mobile-application-development";

const androidWhatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-android-apps" />,
];

const androidLifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="prototyping" />,
  <IosAppDevelopmentIcon key="native-android" />,
  <CrossPlatformAppDevelopmentIcon key="android-ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaMaintenanceAppUpdatesIcon key="qa" />,
  <QaLaunchSupportIcon key="google-play" />,
  <ExistingAppCustomizationIcon key="existing-app" />,
  <ShopifyStoreToMobileAppIcon key="shopify-cross-platform" />,
];

const androidWhyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

const crossPlatformWhatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const crossPlatformLifecycleIcons = [
  <ReactNativeAppDevelopmentIcon key="react-native" />,
  <FlutterAppDevelopmentIcon key="flutter" />,
  <ProductDiscoveryUiUxIcon key="ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <NativeModuleSdkIntegrationIcon key="native-modules" />,
  <QaMaintenanceAppUpdatesIcon key="qa-updates" />,
];

const crossPlatformWhyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

const iosWhatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const iosLifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="prototyping" />,
  <IosAppDevelopmentIcon key="native-ios" />,
  <CrossPlatformAppDevelopmentIcon key="ui-ux" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaMaintenanceAppUpdatesIcon key="qa-testing" />,
  <QaLaunchSupportIcon key="maintenance" />,
  <ExistingAppCustomizationIcon key="customization" />,
  <ShopifyStoreToMobileAppIcon key="extensions" />,
];

const iosWhyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="design-dev" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

const mobileAppWhatWeBuildIcons = [
  <UtilityBusinessAppsIcon key="utility" />,
  <ConsumerMobileAppsIcon key="consumer" />,
  <BookingServiceAppsIcon key="booking" />,
  <MarketplacePlatformAppsIcon key="marketplace" />,
  <EcommerceMobileAppsIcon key="ecommerce" />,
  <ShopifyStoreToMobileAppIcon key="shopify-to-app" />,
];

const mobileAppLifecycleIcons = [
  <ProductDiscoveryUiUxIcon key="discovery" />,
  <IosAppDevelopmentIcon key="ios" />,
  <AndroidAppDevelopmentIcon key="android" />,
  <CrossPlatformAppDevelopmentIcon key="cross-platform" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <QaLaunchSupportIcon key="qa" />,
];

const mobileAppWhyChooseIcons = [
  <CrossPlatformAppDevelopmentIcon key="cross" />,
  <BackendApisIntegrationsIcon key="backend" />,
  <TestingShieldIcon key="shield" />,
  <LifecycleUpdateIcon key="update" />,
];

export const mobileAppsRegistry: readonly ServicePageEntry[] = [
  {
    slug: "android-app-development",
    metadata: pageMetadata.androidAppDevelopment,
    getSchema: createAndroidAppDevelopmentPageSchema,
    render: () => (
      <MobileAppLandingTemplate
          brands={{
            ariaLabel: androidAppDevelopmentBrandsCopy.ariaLabel,
            heading: androidAppDevelopmentBrandsCopy.heading,
            items: androidAppDevelopmentBrands,
            slug: "android-app-development",
          }}
          faq={{
            description: androidAppDevelopmentFaqCopy.description,
            eyebrow: androidAppDevelopmentFaqCopy.eyebrow,
            heading: androidAppDevelopmentFaqCopy.heading,
            idPrefix: "android-app-development-faq",
            items: androidAppDevelopmentFaqs,
            sectionId: "android-app-development-faq-section",
          }}
          hero={androidAppDevelopmentHero}
          lifecycleServices={{
            ...androidAppDevelopmentLifecycleServicesCopy,
            boxes: androidAppDevelopmentLifecycleServicesBoxes.map((box, index) => ({
              ...box,
              icon: androidLifecycleIcons[index],
            })),
          }}
          portfolio={androidAppDevelopmentPortfolio}
          pricing={androidAppDevelopmentPricing}
          process={{
            description: androidAppDevelopmentProcessCopy.description,
            eyebrow: androidAppDevelopmentProcessCopy.eyebrow,
            heading: androidAppDevelopmentProcessCopy.heading,
            items: androidAppDevelopmentProcessSteps,
          }}
          techStack={androidAppDevelopmentTechStack}
          testimonials={androidAppDevelopmentTestimonialsCopy}
          whatWeBuild={{
            ...androidAppDevelopmentWhatWeBuildCopy,
            boxes: androidAppDevelopmentWhatWeBuildBoxes.map((box, index) => ({
              ...box,
              icon: androidWhatWeBuildIcons[index],
            })),
          }}
          whyChoose={{
            ...androidAppDevelopmentWhyChooseCopy,
            items: androidAppDevelopmentWhyChooseCopy.items.map((item, index) => ({
              ...item,
              iconSvg: androidWhyChooseIcons[index],
            })),
          }}
          workflowDelivery={androidAppDevelopmentWorkflowDelivery}
        />
    ),
  },
  {
    slug: "cross-platform-app-development",
    metadata: pageMetadata.crossPlatformAppDevelopment,
    getSchema: createCrossPlatformAppDevelopmentPageSchema,
    render: () => (
      <MobileAppLandingTemplate
          brands={{
            ariaLabel: crossPlatformAppDevelopmentBrandsCopy.ariaLabel,
            heading: crossPlatformAppDevelopmentBrandsCopy.heading,
            items: crossPlatformAppDevelopmentBrands,
            slug: "cross-platform-app-development",
          }}
          faq={{
            description: crossPlatformAppDevelopmentFaqCopy.description,
            eyebrow: crossPlatformAppDevelopmentFaqCopy.eyebrow,
            heading: crossPlatformAppDevelopmentFaqCopy.heading,
            idPrefix: "cross-platform-app-development-faq",
            items: crossPlatformAppDevelopmentFaqs,
            sectionId: "cross-platform-app-development-faq-section",
          }}
          hero={crossPlatformAppDevelopmentHero}
          lifecycleServices={{
            ...crossPlatformAppDevelopmentLifecycleServicesCopy,
            boxes: crossPlatformAppDevelopmentLifecycleServicesBoxes.map(
              (box, index) => ({
                ...box,
                icon: crossPlatformLifecycleIcons[index],
              }),
            ),
          }}
          portfolio={crossPlatformAppDevelopmentPortfolio}
          pricing={crossPlatformAppDevelopmentPricing}
          process={{
            description: crossPlatformAppDevelopmentProcessCopy.description,
            eyebrow: crossPlatformAppDevelopmentProcessCopy.eyebrow,
            heading: crossPlatformAppDevelopmentProcessCopy.heading,
            items: crossPlatformAppDevelopmentProcessSteps,
          }}
          techStack={crossPlatformAppDevelopmentTechStack}
          testimonials={crossPlatformAppDevelopmentTestimonialsCopy}
          whatWeBuild={{
            ...crossPlatformAppDevelopmentWhatWeBuildCopy,
            boxes: crossPlatformAppDevelopmentWhatWeBuildBoxes.map(
              (box, index) => ({
                ...box,
                icon: crossPlatformWhatWeBuildIcons[index],
              }),
            ),
          }}
          whyChoose={{
            ...crossPlatformAppDevelopmentWhyChooseCopy,
            items: crossPlatformAppDevelopmentWhyChooseCopy.items.map(
              (item, index) => ({
                ...item,
                iconSvg: crossPlatformWhyChooseIcons[index],
              }),
            ),
          }}
          workflowDelivery={crossPlatformAppDevelopmentWorkflowDelivery}
        />
    ),
  },
  {
    slug: "ios-app-development",
    metadata: pageMetadata.iosAppDevelopment,
    getSchema: createIosAppDevelopmentPageSchema,
    render: () => (
      <MobileAppLandingTemplate
          brands={{
            ariaLabel: iosAppDevelopmentBrandsCopy.ariaLabel,
            heading: iosAppDevelopmentBrandsCopy.heading,
            items: iosAppDevelopmentBrands,
            slug: "ios-app-development",
          }}
          faq={{
            description: iosAppDevelopmentFaqCopy.description,
            eyebrow: iosAppDevelopmentFaqCopy.eyebrow,
            heading: iosAppDevelopmentFaqCopy.heading,
            idPrefix: "ios-app-development-faq",
            items: iosAppDevelopmentFaqs,
            sectionId: "ios-app-development-faq-section",
          }}
          hero={iosAppDevelopmentHero}
          lifecycleServices={{
            ...iosAppDevelopmentLifecycleServicesCopy,
            boxes: iosAppDevelopmentLifecycleServicesBoxes.map((box, index) => ({
              ...box,
              icon: iosLifecycleIcons[index],
            })),
          }}
          portfolio={iosAppDevelopmentPortfolio}
          pricing={iosAppDevelopmentPricing}
          process={{
            description: iosAppDevelopmentProcessCopy.description,
            eyebrow: iosAppDevelopmentProcessCopy.eyebrow,
            heading: iosAppDevelopmentProcessCopy.heading,
            items: iosAppDevelopmentProcessSteps,
          }}
          techStack={iosAppDevelopmentTechStack}
          testimonials={iosAppDevelopmentTestimonialsCopy}
          whatWeBuild={{
            ...iosAppDevelopmentWhatWeBuildCopy,
            boxes: iosAppDevelopmentWhatWeBuildBoxes.map((box, index) => ({
              ...box,
              icon: iosWhatWeBuildIcons[index],
            })),
          }}
          whyChoose={{
            ...iosAppDevelopmentWhyChooseCopy,
            items: iosAppDevelopmentWhyChooseCopy.items.map((item, index) => ({
              ...item,
              iconSvg: iosWhyChooseIcons[index],
            })),
          }}
          workflowDelivery={iosAppDevelopmentWorkflowDelivery}
        />
    ),
  },
  {
    slug: "mobile-application-development",
    metadata: pageMetadata.mobileApplicationDevelopment,
    getSchema: createMobileApplicationDevelopmentPageSchema,
    render: () => (
      <MobileAppLandingTemplate
          brands={{
            ariaLabel: mobileAppBrandsCopy.ariaLabel,
            heading: mobileAppBrandsCopy.heading,
            items: mobileAppBrands,
            slug: "mobile-application-development",
          }}
          faq={{
            description: mobileAppFaqCopy.description,
            eyebrow: mobileAppFaqCopy.eyebrow,
            heading: mobileAppFaqCopy.heading,
            idPrefix: "mobile-application-development-faq",
            items: mobileApplicationDevelopmentFaqs,
            sectionId: "mobile-application-development-faq-section",
          }}
          hero={mobileAppHero}
          lifecycleServices={{
            ...mobileAppLifecycleServicesCopy,
            boxes: mobileAppLifecycleServicesBoxes.map((box, index) => ({
              ...box,
              icon: mobileAppLifecycleIcons[index],
            })),
          }}
          portfolio={mobileAppPortfolio}
          pricing={mobileAppPricing}
          process={{
            description: mobileAppProcessCopy.description,
            eyebrow: mobileAppProcessCopy.eyebrow,
            heading: mobileAppProcessCopy.heading,
            items: mobileAppProcessSteps,
            variant: "white",
          }}
          techStack={mobileAppTechStack}
          testimonials={mobileAppTestimonialsCopy}
          whatWeBuild={{
            ...mobileAppWhatWeBuildCopy,
            boxes: mobileAppWhatWeBuildBoxes.map((box, index) => ({
              ...box,
              icon: mobileAppWhatWeBuildIcons[index],
            })),
          }}
          whyChoose={{
            ...mobileAppWhyChooseCopy,
            items: mobileAppWhyChooseCopy.items.map((item, index) => ({
              ...item,
              iconSvg: mobileAppWhyChooseIcons[index],
            })),
          }}
          workflowDelivery={mobileAppWorkflowDelivery}
        />
    ),
  },
];
