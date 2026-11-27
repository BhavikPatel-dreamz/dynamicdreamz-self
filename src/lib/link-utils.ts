const HTTP_PROTOCOL_PATTERN = /^https?:\/\//i;
const SPECIAL_SCHEME_PATTERN = /^(?:mailto:|tel:|skype:)/i;

/**
 * Returns true when href uses http:// or https://.
 * Used sitewide so all HTTP(S) links automatically open in a new tab.
 */
export function isExternalHttpUrl(href?: string | null): boolean {
  if (typeof href !== "string") return false;
  return HTTP_PROTOCOL_PATTERN.test(href.trim());
}

/**
 * Returns true for non-navigation protocol URIs (mailto:, tel:, skype:)
 * that should render as a native <a> tag without forcing target="_blank".
 */
export function isSpecialProtocolUrl(href?: string | null): boolean {
  if (typeof href !== "string") return false;
  return SPECIAL_SCHEME_PATTERN.test(href.trim());
}

/**
 * Merges safe window-isolation tokens ("noopener", "noreferrer") into any
 * caller-supplied rel string without duplicating or dropping existing tokens
 * such as "nofollow".
 */
export function mergeNewTabRel(rel?: string): string {
  const tokens = (rel ?? "")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
  const merged = new Set(tokens);
  merged.add("noopener");
  merged.add("noreferrer");
  return Array.from(merged).join(" ");
}

export type ResolveLinkPropsInput = {
  href?: string | null;
  external?: boolean;
  target?: string;
  rel?: string;
};

export type ResolvedLinkProps = {
  normalizedHref: string;
  isHttpExternal: boolean;
  isSpecialScheme: boolean;
  isHashAnchor: boolean;
  isNativeAnchor: boolean;
  target?: string;
  rel?: string;
};

/**
 * Normalizes link attributes so every http(s) URL renders as a native <a>
 * opening in a new tab with safe rel attributes, protocol links (mailto:, tel:,
 * skype:) and hash anchors stay in the current context, and relative paths use
 * Next.js <Link>.
 */
export function resolveLinkProps({
  href,
  external,
  target,
  rel,
}: ResolveLinkPropsInput): ResolvedLinkProps {
  const normalizedHref = typeof href === "string" ? href.trim() : "";
  const isHttpExternal = isExternalHttpUrl(normalizedHref);
  const isSpecialScheme = isSpecialProtocolUrl(normalizedHref);
  const isHashAnchor = normalizedHref.startsWith("#");
  const isExplicitExternal = Boolean(external) && !isSpecialScheme && !isHashAnchor;
  const shouldOpenNewTab =
    isHttpExternal || isExplicitExternal || target === "_blank";

  return {
    normalizedHref,
    isHttpExternal,
    isSpecialScheme,
    isHashAnchor,
    isNativeAnchor:
      isHttpExternal || isSpecialScheme || isHashAnchor || Boolean(external),
    target: shouldOpenNewTab ? "_blank" : target,
    rel: shouldOpenNewTab ? mergeNewTabRel(rel) : rel,
  };
}
