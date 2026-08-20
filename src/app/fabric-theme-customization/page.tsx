import { FabricThemeCustomizationPage } from "@/components/sections/fabric-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createFabricThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.fabricThemeCustomization;

export default function FabricThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="fabric-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createFabricThemeCustomizationPageSchema()),
        }}
      />
      <FabricThemeCustomizationPage />
    </main>
  );
}
