import { HelloElementorThemeCustomizationPage } from "@/components/sections/hello-elementor-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createHelloElementorThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.helloElementorThemeCustomization;

export default function HelloElementorThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="hello-elementor-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHelloElementorThemeCustomizationPageSchema()),
        }}
      />
      <HelloElementorThemeCustomizationPage />
    </main>
  );
}
