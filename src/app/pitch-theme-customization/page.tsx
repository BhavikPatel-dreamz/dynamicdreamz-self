import { PitchThemeCustomizationPage } from "@/components/sections/pitch-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createPitchThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.pitchThemeCustomization;

export default function PitchThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="pitch-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPitchThemeCustomizationPageSchema()),
        }}
      />
      <PitchThemeCustomizationPage />
    </main>
  );
}
