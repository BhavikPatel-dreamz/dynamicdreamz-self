import type { ReactNode } from "react";

import {
  MigrationPlatformIcon,
  type MigrationPlatformIconName,
} from "@/components/sections/migration-platform-icons";
import {
  MagentoMigrationIcon,
  type MagentoMigrationIconName,
} from "@/components/sections/magento-to-shopify/magento-migration-icons";
import {
  MagentoPlusIcon,
  type MagentoPlusIconName,
} from "@/components/sections/magento-to-shopify-plus/magento-plus-icons";
import {
  WooCommerceMigrationIcon,
  type WooCommerceMigrationIconName,
} from "@/components/sections/woocommerce-to-shopify/woocommerce-migration-icons";

const MIGRATION_PLATFORM_ICONS = new Set<string>([
  "user-friendly-platform",
  "extensive-customization",
  "powerful-app-ecosystem",
  "built-for-scalability",
  "secure-reliable",
  "advanced-ecommerce-features",
  "access-to-shopify-s-app-store",
  "improved-customer-experience",
  "better-marketing-sales-tools",
  "better-sales-marketing-tools",
  "powerful-app-ecosystem-2",
  "better-payment-options",
  "24-7-customer-support",
  "easy-store-management",
  "better-scalability",
  "faster-performance",
  "advanced-customization",
  "secure-reliable-2",
  "better-checkout-experience",
  "encrypted-data-transfer",
  "comprehensive-backup-plans",
  "secure-server-environment",
  "data-integrity-checks",
  "compliance-with-shopify-s-security-standards",
  "better-seo-marketing",
  "greater-control-over-your-store",
  "multiple-sales-channels",
  "seo-and-marketing-tools",
  "seo-redirects",
  "app-integration",
  "store-testing",
  "performance-optimization",
  "data-mapping-cleanup",
  "feature-compatibility",
  "seo-considerations",
  "payment-and-shipping",
  "data-transfer",
  "seo-settings",
  "link",
  "ecwid-data-cleanup",
  "theme-design-considerations",
  "feature-differences",
  "integration-with-third-party-app",
  "etsy-seo-settings",
]);

const MAGENTO_MIGRATION_ICONS = new Set<string>([
  "clock-unsupported",
  "reduce-costs",
  "store-performance",
  "easy-to-manage",
  "scalable-growth",
  "enhanced-security",
]);

const MAGENTO_PLUS_ICONS = new Set<string>([
  "no-server-management",
  "no-reindexing",
  "no-security-issues",
  "multiple-stores-feature",
  "built-in-b2b-module",
  "best-checkout-experience",
  "ease-of-use",
  "24-7-support",
  "simplified-operations",
  "scalability",
  "advanced-features",
  "cost-efficiency",
  "products-categories",
  "customer-data",
  "orders-transactions",
  "content",
  "seo-settings",
  "audit-plan",
  "custom-design",
  "development",
  "data-migration",
  "testing",
  "launch",
]);

const WOOCOMMERCE_MIGRATION_ICONS = new Set<string>([
  "faster-loading",
  "reduced-overhead",
  "zero-maintenance",
  "enterprise-security",
  "seamless-integrations",
  "omnichannel-selling",
]);

export function resolveMigrationIcon(
  iconName?: string | null,
  platform?: string,
): ReactNode | null {
  if (!iconName) return null;

  if (platform?.includes("magento-to-shopify-plus") || platform?.includes("magento-plus")) {
    if (MAGENTO_PLUS_ICONS.has(iconName)) {
      return <MagentoPlusIcon name={iconName as MagentoPlusIconName} />;
    }
  }

  if (platform?.includes("magento") && !platform?.includes("plus")) {
    if (MAGENTO_MIGRATION_ICONS.has(iconName)) {
      return <MagentoMigrationIcon name={iconName as MagentoMigrationIconName} />;
    }
  }

  if (platform?.includes("woocommerce")) {
    if (WOOCOMMERCE_MIGRATION_ICONS.has(iconName)) {
      return <WooCommerceMigrationIcon name={iconName as WooCommerceMigrationIconName} />;
    }
  }

  if (MIGRATION_PLATFORM_ICONS.has(iconName)) {
    return <MigrationPlatformIcon name={iconName as MigrationPlatformIconName} />;
  }

  if (MAGENTO_PLUS_ICONS.has(iconName)) {
    return <MagentoPlusIcon name={iconName as MagentoPlusIconName} />;
  }

  if (MAGENTO_MIGRATION_ICONS.has(iconName)) {
    return <MagentoMigrationIcon name={iconName as MagentoMigrationIconName} />;
  }

  if (WOOCOMMERCE_MIGRATION_ICONS.has(iconName)) {
    return <WooCommerceMigrationIcon name={iconName as WooCommerceMigrationIconName} />;
  }

  return null;
}
