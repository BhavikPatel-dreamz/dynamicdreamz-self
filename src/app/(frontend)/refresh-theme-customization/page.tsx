import { RefreshThemeCustomizationPage } from "@/components/sections/refresh-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createRefreshThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.refreshThemeCustomization;

export default function RefreshThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="refresh-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createRefreshThemeCustomizationPageSchema()),
        }}
      />
      <RefreshThemeCustomizationPage />
    </main>
  );
}
