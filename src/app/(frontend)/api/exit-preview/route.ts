import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

function resolveRedirectPath(req: NextRequest): string {
  const queryRedirect =
    req.nextUrl.searchParams.get("redirect") ||
    req.nextUrl.searchParams.get("path");

  if (queryRedirect) {
    if (
      queryRedirect.startsWith("/") &&
      !queryRedirect.startsWith("//") &&
      !queryRedirect.includes("://")
    ) {
      return queryRedirect;
    }
  }

  const referer = req.headers.get("referer");
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.origin === req.nextUrl.origin) {
        return refererUrl.pathname;
      }
    } catch {
      // Ignore URL parse error and fall back to root
    }
  }

  return "/";
}

export async function GET(req: NextRequest) {
  const draft = await draftMode();
  draft.disable();

  const target = resolveRedirectPath(req);
  redirect(target);
}

export async function POST(req: NextRequest) {
  const draft = await draftMode();
  draft.disable();

  const target = resolveRedirectPath(req);
  redirect(target);
}
