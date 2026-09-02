import { BigCommerceToShopifyMigrationPage } from "@/components/sections/bigcommerce-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createBigCommerceToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.bigcommerceToShopifyMigration;

export default function BigCommerceToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="bigcommerce-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBigCommerceToShopifyMigrationPageSchema()),
        }}
      />
      <BigCommerceToShopifyMigrationPage />
    </main>
  );
}
