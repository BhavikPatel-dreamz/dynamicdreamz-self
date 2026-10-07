import { ShopifyPlusAgencyPage } from "@/components/sections/shopify-plus-agency-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyPlusAgencyPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyPlus;

export default function ShopifyPlusAgencyRoute() {
  return (
    <main id="main-content" data-page="shopify-plus-agency">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyPlusAgencyPageSchema()),
        }}
      />
      <ShopifyPlusAgencyPage />
    </main>
  );
}