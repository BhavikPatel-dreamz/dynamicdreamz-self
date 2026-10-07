import { AstraThemeCustomizationPage } from "@/components/sections/astra-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createAstraThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.astraThemeCustomization;

export default function AstraThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="astra-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createAstraThemeCustomizationPageSchema()),
        }}
      />
      <AstraThemeCustomizationPage />
    </main>
  );
}
