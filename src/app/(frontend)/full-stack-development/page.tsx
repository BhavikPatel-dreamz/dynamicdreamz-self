import { FullStackDevelopmentPage } from "@/components/sections/full-stack-development-page";
import { pageMetadata } from "@/data/seo";
import {
  createFullStackDevelopmentPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.fullStackDevelopment;

export default function FullStackDevelopmentRoute() {
  return (
    <main data-page="full-stack-development" id="main-content">
      <script
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createFullStackDevelopmentPageSchema()),
        }}
        type="application/ld+json"
      />
      <FullStackDevelopmentPage />
    </main>
  );
}
