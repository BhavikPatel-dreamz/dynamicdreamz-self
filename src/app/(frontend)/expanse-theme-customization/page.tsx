import { ExpanseThemeCustomizationPage } from "@/components/sections/expanse-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createExpanseThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.expanseThemeCustomization;

export default function ExpanseThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="expanse-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createExpanseThemeCustomizationPageSchema()),
        }}
      />
      <ExpanseThemeCustomizationPage />
    </main>
  );
}
