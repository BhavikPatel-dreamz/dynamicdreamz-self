import { ShopifyDevelopmentInDelhiPage } from "@/components/sections/shopify-development-in-delhi-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInDelhiPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInDelhi;

export default function ShopifyDevelopmentInDelhiRoute() {
  return (
    <main id="main-content" data-page="shopify-development-in-delhi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInDelhiPageSchema()),
        }}
      />
      <ShopifyDevelopmentInDelhiPage />
    </main>
  );
}
