import { ShopifyDevelopmentInHyderabadPage } from "@/components/sections/shopify-development-in-hyderabad-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyDevelopmentInHyderabadPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentInHyderabad;

export default function ShopifyDevelopmentInHyderabadRoute() {
  return (
    <main id="main-content" data-page="shopify-development-in-hyderabad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentInHyderabadPageSchema()),
        }}
      />
      <ShopifyDevelopmentInHyderabadPage />
    </main>
  );
}
