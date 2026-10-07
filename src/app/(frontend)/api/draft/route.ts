import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const path = searchParams.get("path");

  if (
    secret !== process.env.PAYLOAD_PREVIEW_SECRET &&
    secret !== process.env.PAYLOAD_SECRET
  ) {
    return new Response("Invalid preview token", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  let redirectUrl = "/";
  if (path && path.startsWith("/") && !path.startsWith("//") && !path.includes("://")) {
    redirectUrl = path;
  } else if (slug) {
    const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
    redirectUrl = cleanSlug === "home" ? "/" : `/${cleanSlug}`;
  }

  if (redirectUrl !== "/" && redirectUrl.endsWith("/")) {
    redirectUrl = redirectUrl.replace(/\/+$/, "") || "/";
  }

  redirect(redirectUrl);
}
