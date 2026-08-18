import { ShopifyThemeCustomizationPage } from "@/components/sections/shopify-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyThemeCustomization;

export default function ShopifyThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="shopify-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyThemeCustomizationPageSchema()),
        }}
      />
      <ShopifyThemeCustomizationPage />
    </main>
  );
}
