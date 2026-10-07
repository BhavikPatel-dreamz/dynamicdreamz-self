import { RoyalElementorKitThemeCustomizationPage } from "@/components/sections/royal-elementor-kit-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createRoyalElementorKitThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.royalElementorKitThemeCustomization;

export default function RoyalElementorKitThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="royal-elementor-kit-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createRoyalElementorKitThemeCustomizationPageSchema()),
        }}
      />
      <RoyalElementorKitThemeCustomizationPage />
    </main>
  );
}
