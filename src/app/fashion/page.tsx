import { IndustryPage } from "@/components/sections/industry/industry-page";
import { fashionIndustryPage } from "@/content/fashion";
import { pageMetadata } from "@/data/seo";
import { createFashionPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.fashion;

export default function FashionRoute() {
  return (
    <main id="main-content" data-page="fashion">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createFashionPageSchema()),
        }}
      />
      <IndustryPage content={fashionIndustryPage} />
    </main>
  );
}
