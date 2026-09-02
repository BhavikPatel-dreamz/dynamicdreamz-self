import { ShopifyDevelopmentInTexasPage } from "@/components/sections/shopify-development-in-texas-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInTexasPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInTexas;

export default function ShopifyDevelopmentInTexasRoute() {
  return (
    <main data-page="shopify-development-in-texas" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInTexasPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentInTexasPage />
    </main>
  );
}
