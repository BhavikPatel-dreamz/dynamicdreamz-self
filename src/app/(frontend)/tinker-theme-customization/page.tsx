import { TinkerThemeCustomizationPage } from "@/components/sections/tinker-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createTinkerThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.tinkerThemeCustomization;

export default function TinkerThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="tinker-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createTinkerThemeCustomizationPageSchema()),
        }}
      />
      <TinkerThemeCustomizationPage />
    </main>
  );
}
