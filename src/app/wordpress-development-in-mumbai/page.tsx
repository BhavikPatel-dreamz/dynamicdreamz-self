import { WordPressDevelopmentInMumbaiPage } from "@/components/sections/wordpress-development-in-mumbai-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInMumbaiPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInMumbai;

export default function WordPressDevelopmentInMumbaiRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-mumbai">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInMumbaiPageSchema()),
        }}
      />
      <WordPressDevelopmentInMumbaiPage />
    </main>
  );
}
