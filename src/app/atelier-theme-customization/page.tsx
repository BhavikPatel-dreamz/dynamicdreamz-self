import { AtelierThemeCustomizationPage } from "@/components/sections/atelier-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createAtelierThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.atelierThemeCustomization;

export default function AtelierThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="atelier-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createAtelierThemeCustomizationPageSchema()),
        }}
      />
      <AtelierThemeCustomizationPage />
    </main>
  );
}
