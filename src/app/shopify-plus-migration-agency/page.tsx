import { ShopifyPlusMigrationAgencyPage } from "@/components/sections/shopify-plus-migration-agency-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyPlusMigrationAgencyPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyPlusMigrationAgency;

export default function ShopifyPlusMigrationAgencyRoute() {
  return (
    <main id="main-content" data-page="shopify-plus-migration-agency">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyPlusMigrationAgencyPageSchema()),
        }}
      />
      <ShopifyPlusMigrationAgencyPage />
    </main>
  );
}
