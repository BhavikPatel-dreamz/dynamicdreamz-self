import { SenseThemeCustomizationPage } from "@/components/sections/sense-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createSenseThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.senseThemeCustomization;

export default function SenseThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="sense-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSenseThemeCustomizationPageSchema()),
        }}
      />
      <SenseThemeCustomizationPage />
    </main>
  );
}
