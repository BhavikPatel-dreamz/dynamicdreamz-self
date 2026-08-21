import { ShopifyMaintenanceServicesPage } from "@/components/sections/shopify-maintenance-services-page";
import { pageMetadata } from "@/data/seo";
import {
  createShopifyMaintenanceServicesPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.shopifyMaintenanceServices;

export default function ShopifyMaintenanceServicesRoute() {
  return (
    <main id="main-content" data-page="shopify-maintenance-services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createShopifyMaintenanceServicesPageSchema()),
        }}
      />
      <ShopifyMaintenanceServicesPage />
    </main>
  );
}
