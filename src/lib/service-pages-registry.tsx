import type { ServicePageEntry } from "./registry/types";
import { companyPagesRegistry } from "./registry/company-pages";
import { coreServicesRegistry } from "./registry/core-services";
import { industriesRegistry } from "./registry/industries";
import { mobileAppsRegistry } from "./registry/mobile-apps";
import { shopifyCitiesRegistry } from "./registry/shopify-cities";
import { shopifyMigrationsRegistry } from "./registry/shopify-migrations";
import { shopifyThemesRegistry } from "./registry/shopify-themes";
import { thankYouRegistry } from "./registry/thank-you";
import { wordpressCitiesRegistry } from "./registry/wordpress-cities";
import { wordpressThemesRegistry } from "./registry/wordpress-themes";

const allEntries: readonly ServicePageEntry[] = [
  ...companyPagesRegistry,
  ...coreServicesRegistry,
  ...shopifyCitiesRegistry,
  ...wordpressCitiesRegistry,
  ...shopifyThemesRegistry,
  ...wordpressThemesRegistry,
  ...shopifyMigrationsRegistry,
  ...industriesRegistry,
  ...mobileAppsRegistry,
  ...thankYouRegistry,
];

const servicePagesMap = new Map<string, ServicePageEntry>(
  allEntries.map((entry) => [entry.slug, entry]),
);

export function getServicePageEntry(slug: string): ServicePageEntry | undefined {
  return servicePagesMap.get(slug);
}

export function getAllServicePageSlugs(): string[] {
  return Array.from(servicePagesMap.keys());
}
