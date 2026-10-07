import { CrossPlatformAppDevelopmentPage } from "@/components/sections/cross-platform-app-development-page";
import { pageMetadata } from "@/data/seo";
import { createCrossPlatformAppDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.crossPlatformAppDevelopment;

export default function CrossPlatformAppDevelopmentRoute() {
  return (
    <main data-page="cross-platform-app-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCrossPlatformAppDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <CrossPlatformAppDevelopmentPage />
    </main>
  );
}
