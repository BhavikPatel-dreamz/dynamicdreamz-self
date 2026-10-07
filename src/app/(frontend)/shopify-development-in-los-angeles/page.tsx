import { ShopifyDevelopmentInLosAngelesPage } from "@/components/sections/shopify-development-in-los-angeles-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInLosAngelesPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInLosAngeles;

export default function ShopifyDevelopmentInLosAngelesRoute() {
  return (
    <main data-page="shopify-development-in-los-angeles" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInLosAngelesPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentInLosAngelesPage />
    </main>
  );
}
