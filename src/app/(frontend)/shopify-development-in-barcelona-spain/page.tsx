import { ShopifyDevelopmentInBarcelonaSpainPage } from "@/components/sections/shopify-development-in-barcelona-spain-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyDevelopmentBarcelonaPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentBarcelona;

export default function ShopifyDevelopmentBarcelonaRoute() {
  return (
    <main id="main-content" data-page="shopify-development-in-barcelona-spain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentBarcelonaPageSchema()),
        }}
      />
      <ShopifyDevelopmentInBarcelonaSpainPage />
    </main>
  );
}
