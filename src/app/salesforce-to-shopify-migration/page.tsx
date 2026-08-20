import { SalesforceToShopifyMigrationPage } from "@/components/sections/salesforce-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createSalesforceToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.salesforceToShopifyMigration;

export default function SalesforceToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="salesforce-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSalesforceToShopifyMigrationPageSchema()),
        }}
      />
      <SalesforceToShopifyMigrationPage />
    </main>
  );
}
