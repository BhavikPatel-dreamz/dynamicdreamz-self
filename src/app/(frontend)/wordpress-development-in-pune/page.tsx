import { WordPressDevelopmentInPunePage } from "@/components/sections/wordpress-development-in-pune-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInPunePageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInPune;

export default function WordPressDevelopmentInPuneRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-pune">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInPunePageSchema()),
        }}
      />
      <WordPressDevelopmentInPunePage />
    </main>
  );
}
