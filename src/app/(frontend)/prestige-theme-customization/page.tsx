import { PrestigeThemeCustomizationPage } from "@/components/sections/prestige-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createPrestigeThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.prestigeThemeCustomization;

export default function PrestigeThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="prestige-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPrestigeThemeCustomizationPageSchema()),
        }}
      />
      <PrestigeThemeCustomizationPage />
    </main>
  );
}
