import { WordPressDevelopmentInAhmedabadPage } from "@/components/sections/wordpress-development-in-ahmedabad-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInAhmedabadPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInAhmedabad;

export default function WordPressDevelopmentInAhmedabadRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-ahmedabad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInAhmedabadPageSchema()),
        }}
      />
      <WordPressDevelopmentInAhmedabadPage />
    </main>
  );
}
