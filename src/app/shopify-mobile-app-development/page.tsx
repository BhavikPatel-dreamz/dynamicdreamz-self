import { ShopifyMobileAppDevelopmentPage } from "@/components/sections/shopify-mobile-app-development-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyMobileAppDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyMobileAppDevelopment;

export default function ShopifyMobileAppDevelopmentRoute() {
  return (
    <main data-page="shopify-mobile-app-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyMobileAppDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyMobileAppDevelopmentPage />
    </main>
  );
}
