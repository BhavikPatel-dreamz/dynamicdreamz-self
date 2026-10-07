import { KadenceThemeCustomizationPage } from "@/components/sections/kadence-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createKadenceThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.kadenceThemeCustomization;

export default function KadenceThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="kadence-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createKadenceThemeCustomizationPageSchema()),
        }}
      />
      <KadenceThemeCustomizationPage />
    </main>
  );
}
