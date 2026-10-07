import { SportsOutdoorsPage } from "@/components/sections/sports-outdoors-page";
import { pageMetadata } from "@/data/seo";
import { createSportsOutdoorsPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.sportsOutdoors;

export default function SportsOutdoorsRoute() {
  return (
    <main id="main-content" data-page="sports-outdoors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createSportsOutdoorsPageSchema()),
        }}
      />
      <SportsOutdoorsPage />
    </main>
  );
}
