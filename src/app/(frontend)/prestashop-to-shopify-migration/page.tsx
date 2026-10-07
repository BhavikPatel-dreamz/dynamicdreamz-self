import { PrestashopToShopifyMigrationPage } from "@/components/sections/prestashop-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createPrestashopToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.prestashopToShopifyMigration;

export default function PrestashopToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="prestashop-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPrestashopToShopifyMigrationPageSchema()),
        }}
      />
      <PrestashopToShopifyMigrationPage />
    </main>
  );
}
