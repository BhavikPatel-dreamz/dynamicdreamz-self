import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { Categories } from "./src/collections/Categories";
import { Authors } from "./src/collections/Authors";
import { Testimonials } from "./src/collections/Testimonials";
import { Articles } from "./src/collections/Articles";
import { CaseStudies } from "./src/collections/CaseStudies";

import { Navigation } from "./src/globals/Navigation";
import { SiteSettings } from "./src/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Authors,
    Testimonials,
    Articles,
    CaseStudies,
  ],
  globals: [
    Navigation,
    SiteSettings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/types/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
});
