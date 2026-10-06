import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import type { CollectionConfig } from "payload";

const usersCollection: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

export default buildConfig({
  admin: {
    user: "users",
  },
  collections: [usersCollection],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || "file:./payload.db",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "change-me-to-a-long-random-secret",
  typescript: {
    outputFile: "./src/payload-types.ts",
  },
});
