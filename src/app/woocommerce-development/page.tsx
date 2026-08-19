import { WooCommerceDevelopmentPage } from "@/components/sections/woocommerce-development-page";
import { pageMetadata } from "@/data/seo";
import { createWooCommerceDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.woocommerceDevelopment;

export default function WooCommerceDevelopmentRoute() {
  return (
    <main data-page="woocommerce-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWooCommerceDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <WooCommerceDevelopmentPage />
    </main>
  );
}
