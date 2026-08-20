import { SquareToShopifyMigrationPage } from "@/components/sections/square-to-shopify-migration-page";
import { pageMetadata } from "@/data/seo";
import {
  createSquareToShopifyMigrationPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.squareToShopifyMigration;

export default function SquareToShopifyMigrationRoute() {
  return (
    <main id="main-content" data-page="square-to-shopify-migration">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSquareToShopifyMigrationPageSchema()),
        }}
      />
      <SquareToShopifyMigrationPage />
    </main>
  );
}
