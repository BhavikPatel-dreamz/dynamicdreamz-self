import { MagentoToShopifyPlusMigrationPage } from "@/components/sections/magento-to-shopify-plus-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createMagentoToShopifyPlusMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.magentoToShopifyPlusMigration;

export default function MagentoToShopifyPlusMigrationRoute() {
  return (
    <main id="main-content" data-page="magento-to-shopify-plus-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createMagentoToShopifyPlusMigrationPageSchema()),
        }}
      />
      <MagentoToShopifyPlusMigrationPage />
    </main>
  );
}
