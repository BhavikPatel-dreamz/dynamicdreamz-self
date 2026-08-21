import { ShopifyCertifiedDevelopersPage } from "@/components/sections/shopify-certified-developers-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyCertifiedDevelopersPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyCertifiedDevelopers;

export default function ShopifyCertifiedDevelopersRoute() {
  return (
    <main id="main-content" data-page="shopify-certified-developers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyCertifiedDevelopersPageSchema()),
        }}
      />
      <ShopifyCertifiedDevelopersPage />
    </main>
  );
}
