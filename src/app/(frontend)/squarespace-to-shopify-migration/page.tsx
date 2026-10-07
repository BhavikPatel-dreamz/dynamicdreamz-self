import { SquarespaceToShopifyMigrationPage } from "@/components/sections/squarespace-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createSquarespaceToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.squarespaceToShopifyMigration;

export default function SquarespaceToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="squarespace-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSquarespaceToShopifyMigrationPageSchema()),
        }}
      />
      <SquarespaceToShopifyMigrationPage />
    </main>
  );
}
