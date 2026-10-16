import type { ServicePageEntry } from "./types";
import { AiServicesPage } from "./pages/ai-services-page";
import { AppmakerShopifyMobileAppPage } from "./pages/appmaker-shopify-mobile-app-page";
import { BigCommerceDevelopmentPage } from "./pages/bigcommerce-development-page";
import { BuyShopifyDevelopmentHoursPage } from "./pages/buy-shopify-development-hours-page";
import { DentalClinicWebsiteDevelopmentCompanyPage } from "./pages/dental-clinic-website-development-company-page";
import { FoodBeverageShopifyPlusAgencyPage } from "./pages/food-beverage-shopify-plus-agency-page";
import { FullStackDevelopmentPage } from "./pages/full-stack-development-page";
import { HireShopifyDevelopersPage } from "./pages/hire-shopify-developers-page";
import { HireWordPressDevelopersPage } from "./pages/hire-wordpress-developers-page";
import { MagentoDevelopmentPage } from "./pages/magento-development-page";
import { MagentoToShopifyPlusMigrationPage } from "./pages/magento-to-shopify-plus-migration-page";
import { MigratingThemeToOnlineStore20Page } from "./pages/migrating-theme-to-online-store-2-0-page";
import { PhpDevelopmentPage } from "./pages/php-development-page";
import { RisksOfShopifyOutsourcingPage } from "./pages/risks-of-shopify-outsourcing-page";
import { SeoServicesPage } from "./pages/seo-services-page";
import { ShopifyAppsPage } from "./pages/shopify-apps-page";
import { ShopifyCertifiedDevelopersPage } from "./pages/shopify-certified-developers-page";
import { ShopifyCroAgencyPage } from "./pages/shopify-cro-agency-page";
import { ShopifyDevelopmentAgencyPage } from "./pages/shopify-development-agency-page";
import { ShopifyExpertsPage } from "./pages/shopify-experts-page";
import { ShopifyMaintenanceServicesPage } from "./pages/shopify-maintenance-services-page";
import { ShopifyMigrationPage } from "./pages/shopify-migration-page";
import { ShopifyMobileAppDevelopmentPage } from "./pages/shopify-mobile-app-development-page";
import { ShopifyPlusAgencyPage } from "./pages/shopify-plus-agency-page";
import { ShopifyPlusMigrationAgencyPage } from "./pages/shopify-plus-migration-agency-page";
import { ShopifyThemeCustomizationPage } from "./pages/shopify-theme-customization-page";
import { UpgradeToShopifyPlusPage } from "./pages/upgrade-to-shopify-plus-page";
import { WebDesignPage } from "./pages/web-design-page";
import { WebflowDevelopmentPage } from "./pages/webflow-development-page";
import { WhiteLabelShopifyPage } from "./pages/white-label-shopify-page";
import { WhiteLabelWebsiteDesignPage } from "./pages/white-label-website-design-page";
import { WhiteLabelWordPressPage } from "./pages/white-label-wordpress-page";
import { WooCommerceDevelopmentPage } from "./pages/woocommerce-development-page";
import { WordPressDevelopmentCompanyPage } from "./pages/wordpress-development-company-page";
import { WordPressDevelopmentPage } from "./pages/wordpress-development-page";
import { WordPressThemeCustomizationPage } from "./pages/wordpress-theme-customization-page";
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
