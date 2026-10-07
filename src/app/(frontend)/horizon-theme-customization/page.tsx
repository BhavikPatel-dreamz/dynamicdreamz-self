import { HorizonThemeCustomizationPage } from "@/components/sections/horizon-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createHorizonThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.horizonThemeCustomization;

export default function HorizonThemeCustomizationRoute() {
  return (
    <main data-page="horizon-theme-customization" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHorizonThemeCustomizationPageSchema()),
        }}
        type="application/ld+json"
      />
      <HorizonThemeCustomizationPage />
    </main>
  );
}
