import { type NextRequest, NextResponse } from "next/server";
import { revalidateApiCopy } from "@/content/common";
import { safeRevalidatePath, safeRevalidateTag } from "@/lib/revalidate";

export async function POST(req: NextRequest) {
  const secret =
    req.headers.get("x-revalidate-secret") ||
    req.nextUrl.searchParams.get("secret");
  if (
    secret !== process.env.PAYLOAD_SECRET &&
    secret !== process.env.PAYLOAD_PREVIEW_SECRET
  ) {
    return NextResponse.json(
      { message: revalidateApiCopy.invalidToken },
      { status: 401 },
    );
  }

  const { path, tag, type, profile } = await req.json().catch(() => ({}));
  if (path && typeof path === "string") {
    if (type === "layout" || type === "page") {
      safeRevalidatePath(path, type);
    } else {
      safeRevalidatePath(path);
    }
  }
  if (tag && typeof tag === "string") {
    safeRevalidateTag(tag, profile || "max");
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function GET(req: NextRequest) {
  const secret =
    req.headers.get("x-revalidate-secret") ||
    req.nextUrl.searchParams.get("secret");
  if (
    secret !== process.env.PAYLOAD_SECRET &&
    secret !== process.env.PAYLOAD_PREVIEW_SECRET
  ) {
    return NextResponse.json(
      { message: revalidateApiCopy.invalidToken },
      { status: 401 },
    );
  }

  const path = req.nextUrl.searchParams.get("path");
  const tag = req.nextUrl.searchParams.get("tag");
  const type = req.nextUrl.searchParams.get("type") as "page" | "layout" | null;
  const profile = req.nextUrl.searchParams.get("profile") || "max";

  if (path) {
    if (type === "layout" || type === "page") {
      safeRevalidatePath(path, type);
    } else {
      safeRevalidatePath(path);
    }
  }
  if (tag) {
    safeRevalidateTag(tag, profile);
  }

  return NextResponse.json({ revalidated: true, path, tag, now: Date.now() });
}
