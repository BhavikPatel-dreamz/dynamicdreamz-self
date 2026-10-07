import { UpgradeToShopifyPlusPage } from "@/components/sections/upgrade-to-shopify-plus-page";
import { pageMetadata } from "@/data/seo";
import {
  createUpgradeToShopifyPlusPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.upgradeToShopifyPlus;

export default function UpgradeToShopifyPlusRoute() {
  return (
    <main id="main-content" data-page="upgrade-to-shopify-plus">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createUpgradeToShopifyPlusPageSchema()),
        }}
      />
      <UpgradeToShopifyPlusPage />
    </main>
  );
}
