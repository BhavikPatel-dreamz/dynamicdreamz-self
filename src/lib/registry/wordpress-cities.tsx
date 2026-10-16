import { WordPressCityLandingTemplate } from "./templates";
import { wordpressDevelopmentAhmedabadContent } from "@/content/wordpress-development-in-ahmedabad";
import { wordpressDevelopmentBangaloreContent } from "@/content/wordpress-development-in-bangalore";
import { wordpressDevelopmentDelhiContent } from "@/content/wordpress-development-in-delhi";
import { wordpressDevelopmentMumbaiContent } from "@/content/wordpress-development-in-mumbai";
import { wordpressDevelopmentNoidaContent } from "@/content/wordpress-development-in-noida";
import { wordpressDevelopmentPuneContent } from "@/content/wordpress-development-in-pune";
import { pageMetadata } from "@/data/seo";
import {
  createWordPressDevelopmentInAhmedabadPageSchema,
  createWordPressDevelopmentInBangalorePageSchema,
  createWordPressDevelopmentInDelhiPageSchema,
  createWordPressDevelopmentInMumbaiPageSchema,
  createWordPressDevelopmentInNoidaPageSchema,
  createWordPressDevelopmentInPunePageSchema,
} from "@/lib/schema";
import type { ServicePageEntry } from "@/lib/registry/types";

export const wordpressCitiesRegistry: readonly ServicePageEntry[] = [
  {
    slug: "wordpress-development-in-ahmedabad",
    metadata: pageMetadata.wordpressDevelopmentInAhmedabad,
    getSchema: createWordPressDevelopmentInAhmedabadPageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentAhmedabadContent}
        faqIdPrefix="ahmedabad-faq"
        slug="wordpress-development-in-ahmedabad"
      />
    ),
  },
  {
    slug: "wordpress-development-in-bangalore",
    metadata: pageMetadata.wordpressDevelopmentInBangalore,
    getSchema: createWordPressDevelopmentInBangalorePageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentBangaloreContent}
        faqIdPrefix="bangalore-faq"
        slug="wordpress-development-in-bangalore"
      />
    ),
  },
  {
    slug: "wordpress-development-in-delhi",
    metadata: pageMetadata.wordpressDevelopmentInDelhi,
    getSchema: createWordPressDevelopmentInDelhiPageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentDelhiContent}
        faqIdPrefix="delhi-faq"
        slug="wordpress-development-in-delhi"
      />
    ),
  },
  {
    slug: "wordpress-development-in-mumbai",
    metadata: pageMetadata.wordpressDevelopmentInMumbai,
    getSchema: createWordPressDevelopmentInMumbaiPageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentMumbaiContent}
        faqIdPrefix="mumbai-faq"
        slug="wordpress-development-in-mumbai"
      />
    ),
  },
  {
    slug: "wordpress-development-in-noida",
    metadata: pageMetadata.wordpressDevelopmentInNoida,
    getSchema: createWordPressDevelopmentInNoidaPageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentNoidaContent}
        faqIdPrefix="noida-faq"
        slug="wordpress-development-in-noida"
      />
    ),
  },
  {
    slug: "wordpress-development-in-pune",
    metadata: pageMetadata.wordpressDevelopmentInPune,
    getSchema: createWordPressDevelopmentInPunePageSchema,
    render: () => (
      <WordPressCityLandingTemplate
        content={wordpressDevelopmentPuneContent}
        faqIdPrefix="pune-faq"
        slug="wordpress-development-in-pune"
      />
    ),
  },
];
