import { WordPressDevelopmentInNoidaPage } from "@/components/sections/wordpress-development-in-noida-page";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInNoidaPageSchema,
  serializeJsonLd,
} from "@/lib/schema";

export const metadata = pageMetadata.wordpressDevelopmentInNoida;

export default function WordPressDevelopmentInNoidaRoute() {
  return (
    <main id="main-content" data-page="wordpress-development-in-noida">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createWordPressDevelopmentInNoidaPageSchema()),
        }}
      />
      <WordPressDevelopmentInNoidaPage />
    </main>
  );
}
