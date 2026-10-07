import { HelloBizThemeCustomizationPage } from "@/components/sections/hello-biz-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createHelloBizThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.helloBizThemeCustomization;

export default function HelloBizThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="hello-biz-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHelloBizThemeCustomizationPageSchema()),
        }}
      />
      <HelloBizThemeCustomizationPage />
    </main>
  );
}
