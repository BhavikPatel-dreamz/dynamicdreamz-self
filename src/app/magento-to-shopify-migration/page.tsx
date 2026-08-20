import { MagentoToShopifyMigrationPage } from "@/components/sections/magento-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createMagentoToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.magentoToShopifyMigration;

export default function MagentoToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="magento-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMagentoToShopifyMigrationPageSchema()),
        }}
      />
      <MagentoToShopifyMigrationPage />
    </main>
  );
}
