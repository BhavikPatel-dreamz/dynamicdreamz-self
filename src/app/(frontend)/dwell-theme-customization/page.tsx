import { DwellThemeCustomizationPage } from "@/components/sections/dwell-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createDwellThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.dwellThemeCustomization;

export default function DwellThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="dwell-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createDwellThemeCustomizationPageSchema()),
        }}
      />
      <DwellThemeCustomizationPage />
    </main>
  );
}
