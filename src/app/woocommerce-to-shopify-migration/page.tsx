import { WooCommerceToShopifyMigrationPage } from "@/components/sections/woocommerce-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createWooCommerceToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.woocommerceToShopifyMigration;

export default function WooCommerceToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="woocommerce-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWooCommerceToShopifyMigrationPageSchema()),
        }}
      />
      <WooCommerceToShopifyMigrationPage />
    </main>
  );
}
