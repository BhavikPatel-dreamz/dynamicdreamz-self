import { ShopifyDevelopmentInMumbaiPage } from "@/components/sections/shopify-development-in-mumbai-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInMumbaiPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInMumbai;

export default function ShopifyDevelopmentInMumbaiRoute() {
  return (
    <main data-page="shopify-development-in-mumbai" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInMumbaiPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentInMumbaiPage />
    </main>
  );
}
