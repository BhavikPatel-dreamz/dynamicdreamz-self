import type { ReactNode } from "react";

import {
  AstraBenefitIcon,
  AstraFeatureIcon,
} from "@/components/sections/astra-theme-customization/astra-icons";
import {
  BlocksyBenefitIcon,
  BlocksyFeatureIcon,
} from "@/components/sections/blocksy-theme-customization/blocksy-icons";
import {
  BloghashBenefitIcon,
  BloghashFeatureIcon,
} from "@/components/sections/bloghash-theme-customization/bloghash-icons";
import {
  ExtendableBenefitIcon,
  ExtendableFeatureIcon,
} from "@/components/sections/extendable-theme-customization/extendable-icons";
import {
  GeneratepressBenefitIcon,
  GeneratepressFeatureIcon,
} from "@/components/sections/generatepress-theme-customization/generatepress-icons";
import {
  GoBenefitIcon,
  GoFeatureIcon,
} from "@/components/sections/go-theme-customization/go-icons";
import {
  HelloBizBenefitIcon,
  HelloBizFeatureIcon,
} from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";
import {
  HelloElementorBenefitIcon,
  HelloElementorFeatureIcon,
} from "@/components/sections/hello-elementor-theme-customization/hello-elementor-icons";
import {
  InspiroBenefitIcon,
  InspiroFeatureIcon,
} from "@/components/sections/inspiro-theme-customization/inspiro-icons";
import {
  KadenceBenefitIcon,
  KadenceFeatureIcon,
} from "@/components/sections/kadence-theme-customization/kadence-icons";
import {
  KubioBenefitIcon,
  KubioFeatureIcon,
} from "@/components/sections/kubio-theme-customization/kubio-icons";
import {
  NeveBenefitIcon,
  NeveFeatureIcon,
} from "@/components/sections/neve-theme-customization/neve-icons";
import {
  NewsbloggerBenefitIcon,
  NewsbloggerFeatureIcon,
} from "@/components/sections/newsblogger-theme-customization/newsblogger-icons";
import {
  OceanwpBenefitIcon,
  OceanwpFeatureIcon,
} from "@/components/sections/oceanwp-theme-customization/oceanwp-icons";
import {
  PopularfxBenefitIcon,
  PopularfxFeatureIcon,
} from "@/components/sections/popularfx-theme-customization/popularfx-icons";
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
import {
  RoyalElementorKitBenefitIcon,
  RoyalElementorKitFeatureIcon,
} from "@/components/sections/royal-elementor-kit-theme-customization/royal-elementor-kit-icons";
import {
  YithWonderBenefitIcon,
  YithWonderFeatureIcon,
} from "@/components/sections/yith-wonder-theme-customization/yith-wonder-icons";
import { ThemeServiceIcon } from "@/components/ui/theme-service-icons";

export function resolveThemeIconDirect(
  slug: string,
  kind: "feature" | "benefit" | "service",
  name: string,
): ReactNode | null {
  if (kind === "service") {
    return <ThemeServiceIcon name={name} />;
  }

  const clean = slug.replace(/-theme-customization$/, "");

  switch (clean) {
    case "astra":
      return kind === "feature" ? (
        <AstraFeatureIcon name={name as Parameters<typeof AstraFeatureIcon>[0]["name"]} />
      ) : (
        <AstraBenefitIcon name={name as Parameters<typeof AstraBenefitIcon>[0]["name"]} />
      );
    case "blocksy":
      return kind === "feature" ? (
        <BlocksyFeatureIcon name={name as Parameters<typeof BlocksyFeatureIcon>[0]["name"]} />
      ) : (
        <BlocksyBenefitIcon name={name as Parameters<typeof BlocksyBenefitIcon>[0]["name"]} />
      );
    case "bloghash":
      return kind === "feature" ? (
        <BloghashFeatureIcon name={name as Parameters<typeof BloghashFeatureIcon>[0]["name"]} />
      ) : (
        <BloghashBenefitIcon name={name as Parameters<typeof BloghashBenefitIcon>[0]["name"]} />
      );
    case "extendable":
      return kind === "feature" ? (
        <ExtendableFeatureIcon name={name as Parameters<typeof ExtendableFeatureIcon>[0]["name"]} />
      ) : (
        <ExtendableBenefitIcon name={name as Parameters<typeof ExtendableBenefitIcon>[0]["name"]} />
      );
    case "generatepress":
      return kind === "feature" ? (
        <GeneratepressFeatureIcon name={name as Parameters<typeof GeneratepressFeatureIcon>[0]["name"]} />
      ) : (
        <GeneratepressBenefitIcon name={name as Parameters<typeof GeneratepressBenefitIcon>[0]["name"]} />
      );
    case "go":
      return kind === "feature" ? (
        <GoFeatureIcon name={name as Parameters<typeof GoFeatureIcon>[0]["name"]} />
      ) : (
        <GoBenefitIcon name={name as Parameters<typeof GoBenefitIcon>[0]["name"]} />
      );
    case "hello-biz":
      return kind === "feature" ? (
        <HelloBizFeatureIcon name={name as Parameters<typeof HelloBizFeatureIcon>[0]["name"]} />
      ) : (
        <HelloBizBenefitIcon name={name as Parameters<typeof HelloBizBenefitIcon>[0]["name"]} />
      );
    case "hello-elementor":
      return kind === "feature" ? (
        <HelloElementorFeatureIcon name={name as Parameters<typeof HelloElementorFeatureIcon>[0]["name"]} />
      ) : (
        <HelloElementorBenefitIcon name={name as Parameters<typeof HelloElementorBenefitIcon>[0]["name"]} />
      );
    case "inspiro":
      return kind === "feature" ? (
        <InspiroFeatureIcon name={name as Parameters<typeof InspiroFeatureIcon>[0]["name"]} />
      ) : (
        <InspiroBenefitIcon name={name as Parameters<typeof InspiroBenefitIcon>[0]["name"]} />
      );
    case "kadence":
      return kind === "feature" ? (
        <KadenceFeatureIcon name={name as Parameters<typeof KadenceFeatureIcon>[0]["name"]} />
      ) : (
        <KadenceBenefitIcon name={name as Parameters<typeof KadenceBenefitIcon>[0]["name"]} />
      );
    case "kubio":
      return kind === "feature" ? (
        <KubioFeatureIcon name={name as Parameters<typeof KubioFeatureIcon>[0]["name"]} />
      ) : (
        <KubioBenefitIcon name={name as Parameters<typeof KubioBenefitIcon>[0]["name"]} />
      );
    case "neve":
      return kind === "feature" ? (
        <NeveFeatureIcon name={name as Parameters<typeof NeveFeatureIcon>[0]["name"]} />
      ) : (
        <NeveBenefitIcon name={name as Parameters<typeof NeveBenefitIcon>[0]["name"]} />
      );
    case "newsblogger":
      return kind === "feature" ? (
        <NewsbloggerFeatureIcon name={name as Parameters<typeof NewsbloggerFeatureIcon>[0]["name"]} />
      ) : (
        <NewsbloggerBenefitIcon name={name as Parameters<typeof NewsbloggerBenefitIcon>[0]["name"]} />
      );
    case "oceanwp":
      return kind === "feature" ? (
        <OceanwpFeatureIcon name={name as Parameters<typeof OceanwpFeatureIcon>[0]["name"]} />
      ) : (
        <OceanwpBenefitIcon name={name as Parameters<typeof OceanwpBenefitIcon>[0]["name"]} />
      );
    case "popularfx":
      return kind === "feature" ? (
        <PopularfxFeatureIcon name={name as Parameters<typeof PopularfxFeatureIcon>[0]["name"]} />
      ) : (
        <PopularfxBenefitIcon name={name as Parameters<typeof PopularfxBenefitIcon>[0]["name"]} />
      );
    case "royal-elementor-kit":
      return kind === "feature" ? (
        <RoyalElementorKitFeatureIcon name={name as Parameters<typeof RoyalElementorKitFeatureIcon>[0]["name"]} />
      ) : (
        <RoyalElementorKitBenefitIcon name={name as Parameters<typeof RoyalElementorKitBenefitIcon>[0]["name"]} />
      );
    case "yith-wonder":
      return kind === "feature" ? (
        <YithWonderFeatureIcon name={name as Parameters<typeof YithWonderFeatureIcon>[0]["name"]} />
      ) : (
        <YithWonderBenefitIcon name={name as Parameters<typeof YithWonderBenefitIcon>[0]["name"]} />
      );
    default:
      return null;
  }
}

export function resolveThemeIcon(
  iconName?: string | null,
  themeSlug?: string | null,
  kind?: "feature" | "benefit" | "service" | null,
): ReactNode | null {
  if (!iconName) return null;

  if (iconName.startsWith("theme:")) {
    const parts = iconName.split(":");
    if (parts.length >= 4) {
      const slug = parts[1];
      const k = parts[2] as "feature" | "benefit" | "service";
      const name = parts[3];
      return resolveThemeIconDirect(slug, k, name);
    }
  }

  if (themeSlug && kind) {
    const cleanSlug = themeSlug.replace(/-theme-customization$/, "");
    return resolveThemeIconDirect(cleanSlug, kind, iconName);
  }

  if (kind === "service") {
    return <ThemeServiceIcon name={iconName} />;
  }

  if (iconName.startsWith("mobile:") || iconName.startsWith("mobile-")) {
    return resolveMobileAppIcon(iconName);
  }

  return null;
}

export function resolveMobileAppIcon(name?: string | null): ReactNode | null {
  if (!name) return null;
  const clean = name
    .toLowerCase()
    .replace(/^(mobile:|mobile-)/, "")
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const kebab = clean.replace(/\s+/g, "-");

  switch (kebab) {
    case "utility":
    case "utility-business-apps":
    case "business-utility-apps":
      return <UtilityBusinessAppsIcon />;

    case "consumer":
    case "consumer-mobile-apps":
    case "consumer-applications":
    case "consumer-products":
      return <ConsumerMobileAppsIcon />;

    case "booking":
    case "booking-service-apps":
    case "booking-on-demand-apps":
    case "booking-on-demand":
      return <BookingServiceAppsIcon />;

    case "marketplace":
    case "marketplace-platform-apps":
    case "marketplace-apps":
      return <MarketplacePlatformAppsIcon />;

    case "ecommerce":
    case "ecommerce-mobile-apps":
    case "ecommerce-apps":
      return <EcommerceMobileAppsIcon />;

    case "shopify":
    case "shopify-to-app":
    case "shopify-android-apps":
    case "shopify-mobile-apps":
    case "shopify-ios-apps":
    case "shopify-cross-platform":
    case "shopify-cross-platform-development":
    case "shopify-cross-platform-extensions":
    case "extensions":
    case "shopify-store-to-mobile-app":
      return <ShopifyStoreToMobileAppIcon />;

    case "prototyping":
    case "discovery":
    case "ui-ux":
    case "product-discovery-ui-ux":
    case "prototyping-wireframes-mockups":
    case "prototyping-wireframes-ui-ux":
    case "product-discovery-wireframes-ui-ux":
      return <ProductDiscoveryUiUxIcon />;

    case "native-ios":
    case "native-android":
    case "ios":
    case "native-ios-app-development":
    case "native-android-app-development":
    case "ios-app-development":
      return <IosAppDevelopmentIcon />;

    case "android-ui-ux":
    case "mobile-ui-ux":
    case "cross-platform":
    case "cross":
    case "design-dev":
    case "android-ui-ux-design":
    case "mobile-ui-ux-design":
    case "cross-platform-app-development":
    case "in-house-team-end-to-end-collaboration":
    case "in-house-team":
    case "collaboration":
      return <CrossPlatformAppDevelopmentIcon />;

    case "backend":
    case "backend-apis-integrations":
    case "backend-api-integration":
    case "backend-api-development":
    case "full-stack-storefront-architecture":
    case "full-stack":
      return <BackendApisIntegrationsIcon />;

    case "google-play":
    case "google-play-deployment-support":
    case "app-maintenance-support":
    case "app-maintenance":
    case "qa":
    case "qa-launch-support":
    case "qa-app-store-play-store-launch-support":
      return <QaLaunchSupportIcon />;

    case "shield":
    case "testing-shield":
    case "disciplined-testing-across-devices-os-versions":
    case "disciplined-testing":
    case "device-testing":
      return <TestingShieldIcon />;

    case "update":
    case "lifecycle-update":
    case "built-for-product-evolution":
    case "product-evolution":
      return <LifecycleUpdateIcon />;

    case "react-native":
    case "react-native-app-development":
      return <ReactNativeAppDevelopmentIcon />;

    case "flutter":
    case "flutter-app-development":
      return <FlutterAppDevelopmentIcon />;

    case "native-modules":
    case "native-module-sdk-integration":
      return <NativeModuleSdkIntegrationIcon />;

    case "qa-updates":
    case "qa-testing":
    case "qa-maintenance-app-updates":
    case "app-testing-quality-assurance":
    case "app-testing-qa":
      return <QaMaintenanceAppUpdatesIcon />;

    case "existing-app":
    case "customization":
    case "existing-app-customization":
      return <ExistingAppCustomizationIcon />;

    case "android":
    case "android-app-development":
      return <AndroidAppDevelopmentIcon />;

    default:
      return null;
  }
}
