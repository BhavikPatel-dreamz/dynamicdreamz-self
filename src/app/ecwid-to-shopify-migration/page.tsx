import { EcwidToShopifyMigrationPage } from "@/components/sections/ecwid-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createEcwidToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.ecwidToShopifyMigration;

export default function EcwidToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="ecwid-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createEcwidToShopifyMigrationPageSchema()),
        }}
      />
      <EcwidToShopifyMigrationPage />
    </main>
  );
}
