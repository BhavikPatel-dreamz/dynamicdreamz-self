import { WebflowDevelopmentPage } from "@/components/sections/webflow-development-page";
import { pageMetadata } from "@/data/seo";
import { createWebflowDevelopmentPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.webflowDevelopment;

export default function WebflowDevelopmentRoute() {
  return (
    <main data-page="webflow-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWebflowDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <WebflowDevelopmentPage />
    </main>
  );
}
