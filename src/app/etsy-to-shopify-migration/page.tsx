import { EtsyToShopifyMigrationPage } from "@/components/sections/etsy-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createEtsyToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.etsyToShopifyMigration;

export default function EtsyToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="etsy-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createEtsyToShopifyMigrationPageSchema()),
        }}
      />
      <EtsyToShopifyMigrationPage />
    </main>
  );
}
