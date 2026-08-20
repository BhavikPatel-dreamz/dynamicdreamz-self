import { PopularfxThemeCustomizationPage } from "@/components/sections/popularfx-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createPopularfxThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.popularfxThemeCustomization;

export default function PopularfxThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="popularfx-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createPopularfxThemeCustomizationPageSchema()),
        }}
      />
      <PopularfxThemeCustomizationPage />
    </main>
  );
}
