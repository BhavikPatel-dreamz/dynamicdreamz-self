import { DawnThemeCustomizationPage } from "@/components/sections/dawn-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createDawnThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.dawnThemeCustomization;

export default function DawnThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="dawn-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createDawnThemeCustomizationPageSchema()),
        }}
      />
      <DawnThemeCustomizationPage />
    </main>
  );
}
