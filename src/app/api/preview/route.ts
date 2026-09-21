import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";

import { getPageBySlug } from "@/lib/strapi";

export async function GET(req: NextRequest) {
  const querySecret = req.nextUrl.searchParams.get("secret");
  const headerSecret = req.headers.get("x-strapi-preview-secret");
  const expectedSecret = process.env.STRAPI_PREVIEW_SECRET;

  if (
    !expectedSecret ||
    (querySecret !== expectedSecret && headerSecret !== expectedSecret)
  ) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const rawSlug = req.nextUrl.searchParams.get("slug") || "";
  const rawPath = req.nextUrl.searchParams.get("path") || "";
  const rawModel = req.nextUrl.searchParams.get("model") || "page";

  const model = rawModel.includes("::")
    ? rawModel.split("::")[1].split(".")[0]
    : rawModel;

  let targetPath = "/";

  if (rawPath) {
    targetPath = rawPath;
  } else {
    const cleanSlug = rawSlug.trim().replace(/^\/+|\/+$/g, "");

    if (model === "page") {
      if (cleanSlug === "home" || cleanSlug === "") {
        targetPath = "/";
      } else {
        const page = await getPageBySlug(cleanSlug, { preview: true });
        if (!page) {
          return NextResponse.json(
            { error: "Page not found in CMS" },
            { status: 404 },
          );
        }
        targetPath = `/${cleanSlug}`;
      }
    } else if (model === "article" || model === "blog") {
      targetPath = cleanSlug ? `/blogs/${cleanSlug}` : "/blogs";
    } else if (model === "case-study") {
      targetPath = cleanSlug ? `/case-studies/${cleanSlug}` : "/case-studies";
    } else if (model === "global") {
      targetPath = "/";
    } else if (cleanSlug) {
      targetPath = `/${cleanSlug}`;
    }
  }

  // Prevent open redirect vulnerabilities
  if (
    !targetPath.startsWith("/") ||
    targetPath.startsWith("//") ||
    targetPath.includes("://")
  ) {
    targetPath = "/";
  }

  const draft = await draftMode();
  draft.enable();

  redirect(targetPath);
}

export async function POST(req: NextRequest) {
  const querySecret = req.nextUrl.searchParams.get("secret");
  const headerSecret = req.headers.get("x-strapi-preview-secret");
  const expectedSecret = process.env.STRAPI_PREVIEW_SECRET;

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const bodySecret = typeof body.secret === "string" ? body.secret : undefined;

  if (
    !expectedSecret ||
    (querySecret !== expectedSecret &&
      headerSecret !== expectedSecret &&
      bodySecret !== expectedSecret)
  ) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const rawSlug =
    (typeof body.slug === "string" ? body.slug : undefined) ||
    req.nextUrl.searchParams.get("slug") ||
    "";
  const rawPath =
    (typeof body.path === "string" ? body.path : undefined) ||
    req.nextUrl.searchParams.get("path") ||
    "";
  const rawModel =
    (typeof body.model === "string" ? body.model : undefined) ||
    req.nextUrl.searchParams.get("model") ||
    "page";

  const model = rawModel.includes("::")
    ? rawModel.split("::")[1].split(".")[0]
    : rawModel;

  let targetPath = "/";

  if (rawPath) {
    targetPath = rawPath;
  } else {
    const cleanSlug = rawSlug.trim().replace(/^\/+|\/+$/g, "");

    if (model === "page") {
      if (cleanSlug === "home" || cleanSlug === "") {
        targetPath = "/";
      } else {
        const page = await getPageBySlug(cleanSlug, { preview: true });
        if (!page) {
          return NextResponse.json(
            { error: "Page not found in CMS" },
            { status: 404 },
          );
        }
        targetPath = `/${cleanSlug}`;
      }
    } else if (model === "article" || model === "blog") {
      targetPath = cleanSlug ? `/blogs/${cleanSlug}` : "/blogs";
    } else if (model === "case-study") {
      targetPath = cleanSlug ? `/case-studies/${cleanSlug}` : "/case-studies";
    } else if (model === "global") {
      targetPath = "/";
    } else if (cleanSlug) {
      targetPath = `/${cleanSlug}`;
    }
  }

  if (
    !targetPath.startsWith("/") ||
    targetPath.startsWith("//") ||
    targetPath.includes("://")
  ) {
    targetPath = "/";
  }

  const draft = await draftMode();
  draft.enable();

  redirect(targetPath);
}
