import { LifeDynamicDreamzPage } from "@/components/sections/life-dynamicdreamz-page";
import { pageMetadata } from "@/data/seo";
import { createLifePageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.life;

export default function LifeDynamicDreamzRoute() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createLifePageSchema()),
        }}
      />
      <LifeDynamicDreamzPage />
    </main>
  );
}
