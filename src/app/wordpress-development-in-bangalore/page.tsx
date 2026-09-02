import { WordPressDevelopmentInBangalorePage } from "@/components/sections/wordpress-development-in-bangalore-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInBangalorePageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInBangalore;

export default function WordPressDevelopmentInBangaloreRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-bangalore">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInBangalorePageSchema()),
        }}
      />
      <WordPressDevelopmentInBangalorePage />
    </main>
  );
}
