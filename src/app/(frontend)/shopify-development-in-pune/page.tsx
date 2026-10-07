import { ShopifyDevelopmentInPunePage } from "@/components/sections/shopify-development-in-pune-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInPunePageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInPune;

export default function ShopifyDevelopmentInPuneRoute() {
  return (
    <main id="main-content" data-page="shopify-development-in-pune">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInPunePageSchema()),
        }}
      />
      <ShopifyDevelopmentInPunePage />
    </main>
  );
}
