import { CraftThemeCustomizationPage } from "@/components/sections/craft-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createCraftThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.craftThemeCustomization;

export default function CraftThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="craft-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createCraftThemeCustomizationPageSchema()),
        }}
      />
      <CraftThemeCustomizationPage />
    </main>
  );
}
