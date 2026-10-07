import { BlocksyThemeCustomizationPage } from "@/components/sections/blocksy-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createBlocksyThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.blocksyThemeCustomization;

export default function BlocksyThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="blocksy-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBlocksyThemeCustomizationPageSchema()),
        }}
      />
      <BlocksyThemeCustomizationPage />
    </main>
  );
}
