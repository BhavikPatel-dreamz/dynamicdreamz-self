import { WixToShopifyMigrationPage } from "@/components/sections/wix-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createWixToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wixToShopifyMigration;

export default function WixToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="wix-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWixToShopifyMigrationPageSchema()),
        }}
      />
      <WixToShopifyMigrationPage />
    </main>
  );
}
