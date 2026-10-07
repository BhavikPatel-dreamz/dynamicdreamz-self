import { ShopifyExpertsPage } from "@/components/sections/shopify-experts-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyExpertsPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyExperts;

export default function ShopifyExpertsRoute() {
  return (
    <main id="main-content" data-page="shopify-experts">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyExpertsPageSchema()),
        }}
      />
      <ShopifyExpertsPage />
    </main>
  );
}
