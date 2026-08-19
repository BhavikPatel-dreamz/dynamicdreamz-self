import { ShopifyCroAgencyPage } from "@/components/sections/shopify-cro-agency-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyCroPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyCro;

export default function ShopifyCroAgencyRoute() {
  return (
    <main id="main-content" data-page="shopify-cro-agency">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyCroPageSchema()),
        }}
      />
      <ShopifyCroAgencyPage />
    </main>
  );
}
