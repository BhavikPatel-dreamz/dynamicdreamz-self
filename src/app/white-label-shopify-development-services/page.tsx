import { WhiteLabelShopifyPage } from "@/components/sections/white-label-shopify-page";
import { pageMetadata } from "@/data/seo";
import { createWhiteLabelShopifyPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.whiteLabelShopify;

export default function WhiteLabelShopifyDevelopmentServicesRoute() {
  return (
    <main id="main-content" data-page="white-label-shopify">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWhiteLabelShopifyPageSchema()),
        }}
      />
      <WhiteLabelShopifyPage />
    </main>
  );
}
