import { RitualThemeCustomizationPage } from "@/components/sections/ritual-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createRitualThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.ritualThemeCustomization;

export default function RitualThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="ritual-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createRitualThemeCustomizationPageSchema()),
        }}
      />
      <RitualThemeCustomizationPage />
    </main>
  );
}
