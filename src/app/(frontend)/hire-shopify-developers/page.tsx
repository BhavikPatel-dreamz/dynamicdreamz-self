import { HireShopifyDevelopersPage } from "@/components/sections/hire-shopify-developers-page";
import { pageMetadata } from "@/data/seo";
import { createHireShopifyDevelopersPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.hireShopifyDevelopers;

export default function HireShopifyDevelopersRoute() {
  return (
    <main id="main-content" data-page="hire-shopify-developers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHireShopifyDevelopersPageSchema()),
        }}
      />
      <HireShopifyDevelopersPage />
    </main>
  );
}
