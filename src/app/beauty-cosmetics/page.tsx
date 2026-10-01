import { BeautyCosmeticsPage } from "@/components/sections/beauty-cosmetics-page";
import { pageMetadata } from "@/data/seo";
import { createBeautyCosmeticsPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.beautyCosmetics;

export default function BeautyCosmeticsRoute() {
  return (
    <main id="main-content" data-page="beauty-cosmetics">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBeautyCosmeticsPageSchema()),
        }}
      />
      <BeautyCosmeticsPage />
    </main>
  );
}
