import { StartupThemeCustomizationPage } from "@/components/sections/startup-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createStartupThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.startupThemeCustomization;

export default function StartupThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="startup-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createStartupThemeCustomizationPageSchema()),
        }}
      />
      <StartupThemeCustomizationPage />
    </main>
  );
}
