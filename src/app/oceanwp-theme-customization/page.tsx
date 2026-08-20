import { OceanwpThemeCustomizationPage } from "@/components/sections/oceanwp-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createOceanwpThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.oceanwpThemeCustomization;

export default function OceanwpThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="oceanwp-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createOceanwpThemeCustomizationPageSchema()),
        }}
      />
      <OceanwpThemeCustomizationPage />
    </main>
  );
}
