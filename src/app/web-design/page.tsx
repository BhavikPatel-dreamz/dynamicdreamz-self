import { WebDesignPage } from "@/components/sections/web-design-page";
import { pageMetadata } from "@/data/seo";
import { createWebDesignPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.webDesign;

export default function WebDesign() {
  return (
    <main id="main-content" data-page="web-design">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWebDesignPageSchema()),
        }}
      />
      <WebDesignPage />
    </main>
  );
}
