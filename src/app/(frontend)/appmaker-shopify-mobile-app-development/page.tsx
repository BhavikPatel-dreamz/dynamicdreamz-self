import { AppmakerShopifyMobileAppPage } from "@/components/sections/appmaker-shopify-mobile-app-page";
import { pageMetadata } from "@/data/seo";
import { createAppmakerShopifyMobileAppDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.appmakerShopifyMobileAppDevelopment;

export default function AppmakerShopifyMobileAppDevelopmentRoute() {
  return (
    <main data-page="appmaker-shopify-mobile-app-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createAppmakerShopifyMobileAppDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <AppmakerShopifyMobileAppPage />
    </main>
  );
}
