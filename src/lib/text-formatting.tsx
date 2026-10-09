import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Formats inline tags like `<strong>`, `<b>`, and `<a href="...">` within a text segment.
 * Defaults links to theme red styling matching live accordion content:
 * font-semibold text-[#ad5151] underline hover:no-underline
 */
function parseInlineFormatting(
  text: string,
  defaultLinkClassName = "font-semibold text-[#ad5151] underline hover:no-underline",
): ReactNode {
  if (
    !text.includes("<strong") &&
    !text.includes("<b") &&
    !text.includes("<a") &&
    !text.includes("<em") &&
    !text.includes("<i")
  ) {
    return text;
  }

  const tagRegex = /(<\/?(?:strong|b|em|i)\b[^>]*>|<a\b[^>]*>|<\/a>)/gi;
  const rawParts = text.split(tagRegex);

  const elements: ReactNode[] = [];
  let inLink: { href: string; target?: string; rel?: string; className?: string } | null = null;
  let linkChildren: ReactNode[] = [];
  let isBold = false;
  let isItalic = false;

  for (let i = 0; i < rawParts.length; i++) {
    const part = rawParts[i];
    if (!part) continue;

    const lower = part.toLowerCase();
    if (lower.startsWith("<a")) {
      const hrefMatch = part.match(/href=["']([^"']*)["']/i);
      const href = hrefMatch ? hrefMatch[1] : "";
      const targetMatch = part.match(/target=["']([^"']*)["']/i);
      const target = targetMatch ? targetMatch[1] : undefined;
      const relMatch = part.match(/rel=["']([^"']*)["']/i);
      const rel = relMatch ? relMatch[1] : undefined;
      const classMatch = part.match(/class(?:Name)?=["']([^"']*)["']/i);
      const customClass = classMatch ? classMatch[1] : undefined;
      inLink = { href, target, rel, className: customClass };
      linkChildren = [];
      continue;
    }

    if (lower === "</a>") {
      if (inLink) {
        const key = `link-${i}`;
        const href =
          inLink.href.startsWith("/") && inLink.href.length > 1
            ? inLink.href.replace(/\/+$/, "")
            : inLink.href;
        const linkClass = inLink.className ?? defaultLinkClassName;
        const isExternal =
          inLink.href.startsWith("http://") ||
          inLink.href.startsWith("https://") ||
          inLink.href.startsWith("mailto:") ||
          inLink.href.startsWith("tel:");
        const isAnchor = href.startsWith("#");

        if (isExternal) {
          elements.push(
            <a
              className={linkClass}
              href={href}
              key={key}
              rel={inLink.rel ?? "noopener noreferrer"}
              target={inLink.target ?? "_blank"}
            >
              {linkChildren}
            </a>,
          );
        } else if (isAnchor) {
          elements.push(
            <a className={linkClass} href={href} key={key}>
              {linkChildren}
            </a>,
          );
        } else {
          elements.push(
            <Link className={linkClass} href={href} key={key}>
              {linkChildren}
            </Link>,
          );
        }
        inLink = null;
        linkChildren = [];
      }
      continue;
    }

    if (lower === "<strong>" || lower === "<b>") {
      isBold = true;
      continue;
    }

    if (lower === "</strong>" || lower === "</b>") {
      isBold = false;
      continue;
    }

    if (lower === "<em>" || lower === "<i>") {
      isItalic = true;
      continue;
    }

    if (lower === "</em>" || lower === "</i>") {
      isItalic = false;
      continue;
    }

    // Text node
    let textNode: ReactNode = <Fragment key={`txt-${i}`}>{part}</Fragment>;
    if (isBold && isItalic) {
      textNode = (
        <strong className="font-semibold text-ink italic" key={`bold-italic-${i}`}>
          {part}
        </strong>
      );
    } else if (isBold) {
      textNode = (
        <strong className="font-semibold text-ink" key={`bold-${i}`}>
          {part}
        </strong>
      );
    } else if (isItalic) {
      textNode = (
        <em className="italic" key={`italic-${i}`}>
          {part}
        </em>
      );
    }

    if (inLink) {
      linkChildren.push(textNode);
    } else {
      elements.push(textNode);
    }
  }

  // Flush unclosed link if malformed HTML was passed
  if (inLink && linkChildren.length > 0) {
    const href =
      inLink.href.startsWith("/") && inLink.href.length > 1
        ? inLink.href.replace(/\/+$/, "")
        : inLink.href;
    const linkClass = inLink.className ?? defaultLinkClassName;
    elements.push(
      <Link className={linkClass} href={href} key="unclosed-link">
        {linkChildren}
      </Link>,
    );
  }

  return <>{elements}</>;
}

/**
 * Formats a string containing `<br>`, `<br/>`, or `<br />` HTML tags into React JSX.
 * When `brClassName` is provided, applies that class to the `<br />` element
 * (e.g. "max-[1199px]:hidden" or "max-[992px]:hidden").
 * Also supports inline `<strong>`, `<b>`, and `<a>` tags with live styling.
 */
export function formatBrText(
  text: string | readonly string[] | undefined | null,
  brClassName?: string,
  linkClassName?: string,
): ReactNode {
  if (!text) return "";
  const parts: readonly string[] =
    typeof text === "string" ? text.split(/<br\s*\/?>/i) : text;

  if (
    parts.length === 1 &&
    !parts[0].includes("<strong") &&
    !parts[0].includes("<b") &&
    !parts[0].includes("<a")
  ) {
    return parts[0];
  }

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`part-${index}`}>
          {parseInlineFormatting(part, linkClassName)}
          {index < parts.length - 1 ? (
            brClassName ? <br className={brClassName} /> : <br />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
