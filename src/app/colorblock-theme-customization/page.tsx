import { ColorblockThemeCustomizationPage } from "@/components/sections/colorblock-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createColorblockThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.colorblockThemeCustomization;

export default function ColorblockThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="colorblock-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createColorblockThemeCustomizationPageSchema()),
        }}
      />
      <ColorblockThemeCustomizationPage />
    </main>
  );
}
