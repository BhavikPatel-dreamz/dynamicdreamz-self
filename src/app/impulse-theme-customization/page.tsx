import { ImpulseThemeCustomizationPage } from "@/components/sections/impulse-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createImpulseThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.impulseThemeCustomization;

export default function ImpulseThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="impulse-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createImpulseThemeCustomizationPageSchema()),
        }}
      />
      <ImpulseThemeCustomizationPage />
    </main>
  );
}
