import { BloghashThemeCustomizationPage } from "@/components/sections/bloghash-theme-customization-page";
import { pageMetadata } from "@/data/seo";
import { createBloghashThemeCustomizationPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.bloghashThemeCustomization;

export default function BloghashThemeCustomizationRoute() {
  return (
    <main id="main-content" data-page="bloghash-theme-customization">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBloghashThemeCustomizationPageSchema()),
        }}
      />
      <BloghashThemeCustomizationPage />
    </main>
  );
}
