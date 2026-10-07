import { ResourcesPage } from "@/components/sections/resources-page";
import { pageMetadata } from "@/data/seo";
import { createResourcesPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.resources;

export default function ResourcesRoute() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createResourcesPageSchema()) }}
      />
      <ResourcesPage />
    </main>
  );
}
