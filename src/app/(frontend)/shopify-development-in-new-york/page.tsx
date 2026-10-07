import { ShopifyDevelopmentInNewYorkPage } from "@/components/sections/shopify-development-in-new-york-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInNewYorkPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInNewYork;

export default function ShopifyDevelopmentInNewYorkRoute() {
  return (
    <main data-page="shopify-development-in-new-york" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInNewYorkPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentInNewYorkPage />
    </main>
  );
}
