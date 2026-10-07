import { JewelleryAccessoriesPage } from "@/components/sections/jewellery-accessories-page";
import { pageMetadata } from "@/data/seo";
import { createJewelleryAccessoriesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.jewelleryAccessories;

export default function JewelleryAccessoriesRoute() {
  return (
    <main id="main-content" data-page="jewellery-accessories">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createJewelleryAccessoriesPageSchema()),
        }}
      />
      <JewelleryAccessoriesPage />
    </main>
  );
}
