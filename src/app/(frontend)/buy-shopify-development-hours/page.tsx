import { BuyShopifyDevelopmentHoursPage } from "@/components/sections/buy-shopify-development-hours-page";
import { pageMetadata } from "@/data/seo";
import {
  createBuyShopifyDevelopmentHoursPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.buyShopifyDevelopmentHours;

export default function BuyShopifyDevelopmentHoursRoute() {
  return (
    <main id="main-content" data-page="buy-shopify-development-hours">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBuyShopifyDevelopmentHoursPageSchema()),
        }}
      />
      <BuyShopifyDevelopmentHoursPage />
    </main>
  );
}
