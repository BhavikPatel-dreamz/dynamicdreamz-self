import { KubioThemeCustomizationPage } from "@/components/sections/kubio-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createKubioThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.kubioThemeCustomization;

export default function KubioThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="kubio-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createKubioThemeCustomizationPageSchema()),
        }}
      />
      <KubioThemeCustomizationPage />
    </main>
  );
}
