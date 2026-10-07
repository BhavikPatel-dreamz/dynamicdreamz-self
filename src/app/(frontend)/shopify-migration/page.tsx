import { ShopifyMigrationPage } from "@/components/sections/shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyMigrationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyMigration;

export default function ShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyMigrationPageSchema()),
        }}
      />
      <ShopifyMigrationPage />
    </main>
  );
}
