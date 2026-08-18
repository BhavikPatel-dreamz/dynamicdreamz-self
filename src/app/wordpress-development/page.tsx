import { WordPressDevelopmentPage } from "@/components/sections/wordpress-development-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopment;

export default function WordPressDevelopmentRoute() {
  return (
    <main id="main-content" data-page="wordpress-development">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentPageSchema()),
        }}
      />
      <WordPressDevelopmentPage />
    </main>
  );
}
