import { BeYoursThemeCustomizationPage } from "@/components/sections/be-yours-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createBeYoursThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.beYoursThemeCustomization;

export default function BeYoursThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="be-yours-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBeYoursThemeCustomizationPageSchema()),
        }}
      />
      <BeYoursThemeCustomizationPage />
    </main>
  );
}
