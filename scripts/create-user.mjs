import { getPayload } from "payload";
import config from "@payload-config";

async function main() {
  const [, , email, password] = process.argv;
  if (!email || !password) {
    console.error(
      "Usage: node --env-file-if-exists=.env --import tsx scripts/create-user.mjs <email> <password>",
    );
    process.exit(1);
  }

  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
  });

  if (existing.totalDocs > 0) {
    console.log(`User ${email} already exists. Updating password...`);
    await payload.update({
      collection: "users",
      id: existing.docs[0].id,
      data: { password },
    });
    console.log(`Password updated for user ${email}`);
  } else {
    await payload.create({
      collection: "users",
      data: { email, password },
    });
    console.log(`Created user ${email} successfully!`);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error("Error managing user:", err);
  process.exit(1);
});
