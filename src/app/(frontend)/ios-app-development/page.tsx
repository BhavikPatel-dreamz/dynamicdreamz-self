import { IosAppDevelopmentPage } from "@/components/sections/ios-app-development-page";
import { pageMetadata } from "@/data/seo";
import { createIosAppDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.iosAppDevelopment;

export default function IosAppDevelopmentRoute() {
  return (
    <main data-page="ios-app-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createIosAppDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <IosAppDevelopmentPage />
    </main>
  );
}
