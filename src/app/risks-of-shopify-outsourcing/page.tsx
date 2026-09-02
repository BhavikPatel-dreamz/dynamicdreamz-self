import { RisksOfShopifyOutsourcingPage } from "@/components/sections/risks-of-shopify-outsourcing-page";
import { pageMetadata } from "@/data/seo";
import { createRisksOfShopifyOutsourcingPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.risksOfShopifyOutsourcing;

export default function RisksOfShopifyOutsourcingRoute() {
  return (
    <main data-page="risks-of-shopify-outsourcing" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createRisksOfShopifyOutsourcingPageSchema()),
        }}
        type="application/ld+json"
      />
      <RisksOfShopifyOutsourcingPage />
    </main>
  );
}

