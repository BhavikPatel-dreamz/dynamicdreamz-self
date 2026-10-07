import { BroadcastThemeCustomizationPage } from "@/components/sections/broadcast-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createBroadcastThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.broadcastThemeCustomization;

export default function BroadcastThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="broadcast-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBroadcastThemeCustomizationPageSchema()),
        }}
      />
      <BroadcastThemeCustomizationPage />
    </main>
  );
}
