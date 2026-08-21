import { SpotlightThemeCustomizationPage } from "@/components/sections/spotlight-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createSpotlightThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.spotlightThemeCustomization;

export default function SpotlightThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="spotlight-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSpotlightThemeCustomizationPageSchema()),
        }}
      />
      <SpotlightThemeCustomizationPage />
    </main>
  );
}
