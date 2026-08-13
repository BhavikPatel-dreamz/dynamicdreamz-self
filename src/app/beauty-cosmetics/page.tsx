import { IndustryPage } from "@/components/sections/industry/industry-page";
import { beautyIndustryPage } from "@/content/beauty-cosmetics";
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
      <IndustryPage content={beautyIndustryPage} />
    </main>
  );
}
