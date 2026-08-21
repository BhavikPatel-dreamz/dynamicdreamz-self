import { StilettoThemeCustomizationPage } from "@/components/sections/stiletto-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createStilettoThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.stilettoThemeCustomization;

export default function StilettoThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="stiletto-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createStilettoThemeCustomizationPageSchema()),
        }}
      />
      <StilettoThemeCustomizationPage />
    </main>
  );
}
