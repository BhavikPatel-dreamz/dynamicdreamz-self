import { ExtendableThemeCustomizationPage } from "@/components/sections/extendable-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createExtendableThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.extendableThemeCustomization;

export default function ExtendableThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="extendable-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createExtendableThemeCustomizationPageSchema()),
        }}
      />
      <ExtendableThemeCustomizationPage />
    </main>
  );
}
