import { ShopifyAppsPage } from "@/components/sections/shopify-apps-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyAppsPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyApps;

export default function ShopifyAppsRoute() {
  return (
    <main id="main-content" data-page="shopify-apps">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyAppsPageSchema()),
        }}
      />
      <ShopifyAppsPage />
    </main>
  );
}
