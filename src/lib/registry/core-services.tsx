import type { ServicePageEntry } from "./types";
import { AiServicesPage } from "@/components/sections/ai-services-page";
import { AppmakerShopifyMobileAppPage } from "@/components/sections/appmaker-shopify-mobile-app-page";
import { BigCommerceDevelopmentPage } from "@/components/sections/bigcommerce-development-page";
import { BuyShopifyDevelopmentHoursPage } from "@/components/sections/buy-shopify-development-hours-page";
import { DentalClinicWebsiteDevelopmentCompanyPage } from "@/components/sections/dental-clinic-website-development-company-page";
import { FoodBeverageShopifyPlusAgencyPage } from "@/components/sections/food-beverage-shopify-plus-agency-page";
import { FullStackDevelopmentPage } from "@/components/sections/full-stack-development-page";
import { HireShopifyDevelopersPage } from "@/components/sections/hire-shopify-developers-page";
import { HireWordPressDevelopersPage } from "@/components/sections/hire-wordpress-developers-page";
import { MagentoDevelopmentPage } from "@/components/sections/magento-development-page";
import { MagentoToShopifyPlusMigrationPage } from "@/components/sections/magento-to-shopify-plus-migration-page";
import { MigratingThemeToOnlineStore20Page } from "@/components/sections/migrating-theme-to-online-store-2-0-page";
import { PhpDevelopmentPage } from "@/components/sections/php-development-page";
import { RisksOfShopifyOutsourcingPage } from "@/components/sections/risks-of-shopify-outsourcing-page";
import { SeoServicesPage } from "@/components/sections/seo-services-page";
import { ShopifyAppsPage } from "@/components/sections/shopify-apps-page";
import { ShopifyCertifiedDevelopersPage } from "@/components/sections/shopify-certified-developers-page";
import { ShopifyCroAgencyPage } from "@/components/sections/shopify-cro-agency-page";
import { ShopifyDevelopmentAgencyPage } from "@/components/sections/shopify-development-agency-page";
import { ShopifyExpertsPage } from "@/components/sections/shopify-experts-page";
import { ShopifyMaintenanceServicesPage } from "@/components/sections/shopify-maintenance-services-page";
import { ShopifyMigrationPage } from "@/components/sections/shopify-migration-page";
import { ShopifyMobileAppDevelopmentPage } from "@/components/sections/shopify-mobile-app-development-page";
import { ShopifyPlusAgencyPage } from "@/components/sections/shopify-plus-agency-page";
import { ShopifyPlusMigrationAgencyPage } from "@/components/sections/shopify-plus-migration-agency-page";
import { ShopifyThemeCustomizationPage } from "@/components/sections/shopify-theme-customization-page";
import { UpgradeToShopifyPlusPage } from "@/components/sections/upgrade-to-shopify-plus-page";
import { WebDesignPage } from "@/components/sections/web-design-page";
import { WebflowDevelopmentPage } from "@/components/sections/webflow-development-page";
import { WhiteLabelShopifyPage } from "@/components/sections/white-label-shopify-page";
import { WhiteLabelWebsiteDesignPage } from "@/components/sections/white-label-website-design-page";
import { WhiteLabelWordPressPage } from "@/components/sections/white-label-wordpress-page";
import { WooCommerceDevelopmentPage } from "@/components/sections/woocommerce-development-page";
import { WordPressDevelopmentCompanyPage } from "@/components/sections/wordpress-development-company-page";
import { WordPressDevelopmentPage } from "@/components/sections/wordpress-development-page";
import { WordPressThemeCustomizationPage } from "@/components/sections/wordpress-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import {
  createAiServicesPageSchema,
  createAppmakerShopifyMobileAppDevelopmentPageSchema,
  createBigCommerceDevelopmentPageSchema,
  createBuyShopifyDevelopmentHoursPageSchema,
  createDentalClinicWebsiteDevelopmentCompanyPageSchema,
  createFoodBeverageShopifyPlusAgencyPageSchema,
  createFullStackDevelopmentPageSchema,
  createHireShopifyDevelopersPageSchema,
  createHireWordPressDevelopersPageSchema,
  createMagentoDevelopmentPageSchema,
  createMagentoToShopifyPlusMigrationPageSchema,
  createMigratingThemeToOnlineStore20PageSchema,
  createPhpDevelopmentPageSchema,
  createRisksOfShopifyOutsourcingPageSchema,
  createSeoServicesPageSchema,
  createShopifyAppsPageSchema,
  createShopifyCertifiedDevelopersPageSchema,
  createShopifyCroPageSchema,
  createShopifyDevelopmentAgencyPageSchema,
  createShopifyExpertsPageSchema,
  createShopifyMaintenanceServicesPageSchema,
  createShopifyMigrationPageSchema,
  createShopifyMobileAppDevelopmentPageSchema,
  createShopifyPlusAgencyPageSchema,
  createShopifyPlusMigrationAgencyPageSchema,
  createShopifyThemeCustomizationPageSchema,
  createUpgradeToShopifyPlusPageSchema,
  createWebDesignPageSchema,
  createWebflowDevelopmentPageSchema,
  createWhiteLabelShopifyPageSchema,
  createWhiteLabelWebsiteDesignPageSchema,
  createWhiteLabelWordPressPageSchema,
  createWooCommerceDevelopmentPageSchema,
  createWordPressDevelopmentCompanyPageSchema,
  createWordPressDevelopmentPageSchema,
  createWordPressThemeCustomizationPageSchema,
} from "@/lib/schema";

export const coreServicesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "ai-services",
    metadata: pageMetadata.aiServices,
    getSchema: createAiServicesPageSchema,
    render: () => <AiServicesPage />,
  },
  {
    slug: "appmaker-shopify-mobile-app-development",
    metadata: pageMetadata.appmakerShopifyMobileAppDevelopment,
    getSchema: createAppmakerShopifyMobileAppDevelopmentPageSchema,
    render: () => <AppmakerShopifyMobileAppPage />,
  },
  {
    slug: "bigcommerce-development",
    metadata: pageMetadata.bigCommerceDevelopment,
    getSchema: createBigCommerceDevelopmentPageSchema,
    render: () => <BigCommerceDevelopmentPage />,
  },
  {
    slug: "buy-shopify-development-hours",
    metadata: pageMetadata.buyShopifyDevelopmentHours,
    getSchema: createBuyShopifyDevelopmentHoursPageSchema,
    render: () => <BuyShopifyDevelopmentHoursPage />,
  },
  {
    slug: "dental-clinic-website-development-company",
    metadata: pageMetadata.dentalClinicWebsiteDevelopmentCompany,
    getSchema: createDentalClinicWebsiteDevelopmentCompanyPageSchema,
    render: () => <DentalClinicWebsiteDevelopmentCompanyPage />,
  },
  {
    slug: "food-beverage-shopify-plus-agency",
    metadata: pageMetadata.foodBeverageShopifyPlusAgency,
    getSchema: createFoodBeverageShopifyPlusAgencyPageSchema,
    render: () => <FoodBeverageShopifyPlusAgencyPage />,
  },
  {
    slug: "full-stack-development",
    metadata: pageMetadata.fullStackDevelopment,
    getSchema: createFullStackDevelopmentPageSchema,
    render: () => <FullStackDevelopmentPage />,
  },
  {
    slug: "hire-shopify-developers",
    metadata: pageMetadata.hireShopifyDevelopers,
    getSchema: createHireShopifyDevelopersPageSchema,
    render: () => <HireShopifyDevelopersPage />,
  },
  {
    slug: "hire-wordpress-developers",
    metadata: pageMetadata.hireWordPressDevelopers,
    getSchema: createHireWordPressDevelopersPageSchema,
    render: () => <HireWordPressDevelopersPage />,
  },
  {
    slug: "magento-development",
    metadata: pageMetadata.magentoDevelopment,
    getSchema: createMagentoDevelopmentPageSchema,
    render: () => <MagentoDevelopmentPage />,
  },
  {
    slug: "magento-to-shopify-plus-migration",
    metadata: pageMetadata.magentoToShopifyPlusMigration,
    getSchema: createMagentoToShopifyPlusMigrationPageSchema,
    render: () => <MagentoToShopifyPlusMigrationPage />,
  },
  {
    slug: "migrating-a-theme-to-online-store-2-0",
    metadata: pageMetadata.migratingThemeToOnlineStore20,
    getSchema: createMigratingThemeToOnlineStore20PageSchema,
    render: () => <MigratingThemeToOnlineStore20Page />,
  },
  {
    slug: "php-development",
    metadata: pageMetadata.phpDevelopment,
    getSchema: createPhpDevelopmentPageSchema,
    render: () => <PhpDevelopmentPage />,
  },
  {
    slug: "risks-of-shopify-outsourcing",
    metadata: pageMetadata.risksOfShopifyOutsourcing,
    getSchema: createRisksOfShopifyOutsourcingPageSchema,
    render: () => <RisksOfShopifyOutsourcingPage />,
  },
  {
    slug: "seo-services",
    metadata: pageMetadata.seoServices,
    getSchema: createSeoServicesPageSchema,
    render: () => <SeoServicesPage />,
  },
  {
    slug: "shopify-apps",
    metadata: pageMetadata.shopifyApps,
    getSchema: createShopifyAppsPageSchema,
    render: () => <ShopifyAppsPage />,
  },
  {
    slug: "shopify-certified-developers",
    metadata: pageMetadata.shopifyCertifiedDevelopers,
    getSchema: createShopifyCertifiedDevelopersPageSchema,
    render: () => <ShopifyCertifiedDevelopersPage />,
  },
  {
    slug: "shopify-cro-agency",
    metadata: pageMetadata.shopifyCro,
    getSchema: createShopifyCroPageSchema,
    render: () => <ShopifyCroAgencyPage />,
  },
  {
    slug: "shopify-development-agency",
    metadata: pageMetadata.shopifyDevelopmentAgency,
    getSchema: createShopifyDevelopmentAgencyPageSchema,
    render: () => <ShopifyDevelopmentAgencyPage />,
  },
  {
    slug: "shopify-experts",
    metadata: pageMetadata.shopifyExperts,
    getSchema: createShopifyExpertsPageSchema,
    render: () => <ShopifyExpertsPage />,
  },
  {
    slug: "shopify-maintenance-services",
    metadata: pageMetadata.shopifyMaintenanceServices,
    getSchema: createShopifyMaintenanceServicesPageSchema,
    render: () => <ShopifyMaintenanceServicesPage />,
  },
  {
    slug: "shopify-migration",
    metadata: pageMetadata.shopifyMigration,
    getSchema: createShopifyMigrationPageSchema,
    render: () => <ShopifyMigrationPage />,
  },
  {
    slug: "shopify-mobile-app-development",
    metadata: pageMetadata.shopifyMobileAppDevelopment,
    getSchema: createShopifyMobileAppDevelopmentPageSchema,
    render: () => <ShopifyMobileAppDevelopmentPage />,
  },
  {
    slug: "shopify-plus-agency",
    metadata: pageMetadata.shopifyPlus,
    getSchema: createShopifyPlusAgencyPageSchema,
    render: () => <ShopifyPlusAgencyPage />,
  },
  {
    slug: "shopify-plus-migration-agency",
    metadata: pageMetadata.shopifyPlusMigrationAgency,
    getSchema: createShopifyPlusMigrationAgencyPageSchema,
    render: () => <ShopifyPlusMigrationAgencyPage />,
  },
  {
    slug: "shopify-theme-customization",
    metadata: pageMetadata.shopifyThemeCustomization,
    getSchema: createShopifyThemeCustomizationPageSchema,
    render: () => <ShopifyThemeCustomizationPage />,
  },
  {
    slug: "upgrade-to-shopify-plus",
    metadata: pageMetadata.upgradeToShopifyPlus,
    getSchema: createUpgradeToShopifyPlusPageSchema,
    render: () => <UpgradeToShopifyPlusPage />,
  },
  {
    slug: "web-design",
    metadata: pageMetadata.webDesign,
    getSchema: createWebDesignPageSchema,
    render: () => <WebDesignPage />,
  },
  {
    slug: "webflow-development",
    metadata: pageMetadata.webflowDevelopment,
    getSchema: createWebflowDevelopmentPageSchema,
    render: () => <WebflowDevelopmentPage />,
  },
  {
    slug: "white-label-shopify-development-services",
    metadata: pageMetadata.whiteLabelShopify,
    getSchema: createWhiteLabelShopifyPageSchema,
    render: () => <WhiteLabelShopifyPage />,
  },
  {
    slug: "white-label-website-design-services",
    metadata: pageMetadata.whiteLabelWebsiteDesign,
    getSchema: createWhiteLabelWebsiteDesignPageSchema,
    render: () => <WhiteLabelWebsiteDesignPage />,
  },
  {
    slug: "white-label-wordpress-development-services",
    metadata: pageMetadata.whiteLabelWordPress,
    getSchema: createWhiteLabelWordPressPageSchema,
    render: () => <WhiteLabelWordPressPage />,
  },
  {
    slug: "woocommerce-development",
    metadata: pageMetadata.woocommerceDevelopment,
    getSchema: createWooCommerceDevelopmentPageSchema,
    render: () => <WooCommerceDevelopmentPage />,
  },
  {
    slug: "wordpress-development",
    metadata: pageMetadata.wordpressDevelopment,
    getSchema: createWordPressDevelopmentPageSchema,
    render: () => <WordPressDevelopmentPage />,
  },
  {
    slug: "wordpress-development-company",
    metadata: pageMetadata.wordpressDevelopmentCompany,
    getSchema: createWordPressDevelopmentCompanyPageSchema,
    render: () => <WordPressDevelopmentCompanyPage />,
  },
  {
    slug: "wordpress-theme-customization-services",
    metadata: pageMetadata.wordPressThemeCustomization,
    getSchema: createWordPressThemeCustomizationPageSchema,
    render: () => <WordPressThemeCustomizationPage />,
  },
];
