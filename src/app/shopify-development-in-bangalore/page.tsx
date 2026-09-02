import { ShopifyDevelopmentInBangalorePage } from "@/components/sections/shopify-development-in-bangalore-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInBangalorePageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInBangalore;

export default function ShopifyDevelopmentInBangaloreRoute() {
  return (
    <main id="main-content" data-page="shopify-development-in-bangalore">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInBangalorePageSchema()),
        }}
      />
      <ShopifyDevelopmentInBangalorePage />
    </main>
  );
}
