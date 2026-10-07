import { ShopifyDevelopmentCompanyInChennaiPage } from "@/components/sections/shopify-development-company-in-chennai-page";
import { pageMetadata } from "@/data/seo";
import { createShopifyDevelopmentCompanyInChennaiPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.shopifyDevelopmentCompanyInChennai;

export default function ShopifyDevelopmentCompanyInChennaiRoute() {
  return (
    <main id="main-content" data-page="shopify-development-company-in-chennai">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyDevelopmentCompanyInChennaiPageSchema()),
        }}
      />
      <ShopifyDevelopmentCompanyInChennaiPage />
    </main>
  );
}
