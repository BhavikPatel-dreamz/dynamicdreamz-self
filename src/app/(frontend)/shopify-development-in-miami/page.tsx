import { ShopifyDevelopmentInMiamiPage } from "@/components/sections/shopify-development-in-miami-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInMiamiPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInMiami;

export default function ShopifyDevelopmentInMiamiRoute() {
  return (
    <main data-page="shopify-development-in-miami" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInMiamiPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentInMiamiPage />
    </main>
  );
}
