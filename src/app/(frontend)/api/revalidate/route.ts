import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

interface StrapiWebhookPayload {
  event?: string;
  model?: string;
  entry?: {
    id?: number | string;
    slug?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export async function POST(req: NextRequest) {
  const querySecret = req.nextUrl.searchParams.get("secret");
  const headerSecret = req.headers.get("x-strapi-revalidate-secret");
  const expectedSecret = process.env.STRAPI_REVALIDATE_SECRET;

  if (
    !expectedSecret ||
    (querySecret !== expectedSecret && headerSecret !== expectedSecret)
  ) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const queryTag = req.nextUrl.searchParams.get("tag");
  const queryPath = req.nextUrl.searchParams.get("path");

  if (queryTag) {
    revalidateTag(queryTag, "max");
  }

  if (queryPath) {
    revalidatePath(queryPath);
  }

  let payload: StrapiWebhookPayload = {};
  try {
    payload = await req.json();
  } catch {
    payload = {};
  }

  const rawModel = payload.model || "";
  const model = rawModel.includes("::")
    ? rawModel.split("::")[1].split(".")[0]
    : rawModel;
  const slug = payload.entry?.slug;
  const event = payload.event;

  if (model === "global") {
    revalidateTag("global-settings", "max");
    revalidatePath("/", "layout");
  } else if (model === "page") {
    revalidateTag("pages", "max");
    if (slug) {
      revalidateTag(`page-${slug}`, "max");
      revalidatePath(slug === "home" ? "/" : `/${slug}`);
    } else {
      revalidatePath("/", "layout");
    }
  } else if (model === "article" || model === "blog") {
    revalidateTag("blogs", "max");
    revalidatePath("/blogs");
    if (slug) {
      revalidateTag(`blog-${slug}`, "max");
      revalidatePath(`/blogs/${slug}`);
    }
  } else if (model === "case-study") {
    revalidateTag("case-studies", "max");
    revalidatePath("/case-studies");
    if (slug) {
      revalidateTag(`case-study-${slug}`, "max");
      revalidatePath(`/case-studies/${slug}`);
    }
  } else if (model === "testimonial") {
    revalidateTag("testimonials", "max");
    revalidatePath("/", "layout");
  }

  return NextResponse.json({
    revalidated: true,
    model: model || undefined,
    slug: slug || undefined,
    event: event || undefined,
    tag: queryTag || undefined,
    path: queryPath || undefined,
    now: Date.now(),
  });
}

export async function GET(req: NextRequest) {
  const querySecret = req.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.STRAPI_REVALIDATE_SECRET;

  if (!expectedSecret || querySecret !== expectedSecret) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const tag = req.nextUrl.searchParams.get("tag");
  const path = req.nextUrl.searchParams.get("path");

  if (tag) {
    revalidateTag(tag, "max");
  }

  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    tag: tag || undefined,
    path: path || undefined,
    now: Date.now(),
  });
}
