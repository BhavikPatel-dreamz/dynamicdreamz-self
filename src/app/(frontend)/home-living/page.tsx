import { HomeLivingPage } from "@/components/sections/home-living-page";
import { pageMetadata } from "@/data/seo";
import { createHomeLivingPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.homeLiving;

export default function HomeLivingRoute() {
  return (
    <main id="main-content" data-page="home-living">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createHomeLivingPageSchema()),
        }}
      />
      <HomeLivingPage />
    </main>
  );
}
