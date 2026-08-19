import { ShopifyDevelopmentAgencyPage } from "@/components/sections/shopify-development-agency-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyDevelopmentAgencyPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentAgency;

export default function ShopifyDevelopmentAgencyRoute() {
  return (
    <main data-page="shopify-development-agency" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentAgencyPageSchema()),
        }}
        type="application/ld+json"
      />
      <ShopifyDevelopmentAgencyPage />
    </main>
  );
}
