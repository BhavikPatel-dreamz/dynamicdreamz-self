import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Parses inline Markdown syntax:
 * - Links: `[label](url)`
 * - Bold-italic: `***text***`
 * - Bold: `**text**`
 * - Italic: `*text*`
 *
 * Defaults links to theme red styling matching live accordion content:
 * font-semibold text-[#ad5151] underline hover:no-underline
 */
function parseInlineFormatting(
  text: string,
  defaultLinkClassName = "font-semibold text-[#ad5151] underline hover:no-underline",
): ReactNode {
  if (!text.includes("**") && !text.includes("*") && !text.includes("[")) {
    return text;
  }

  const tokenRegex =
    /(\[[^\]]+\]\([^)]+\)|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const rawParts = text.split(tokenRegex);

  const elements: ReactNode[] = [];

  for (let i = 0; i < rawParts.length; i++) {
    const part = rawParts[i];
    if (!part) continue;

    // Check markdown link: [label](href)
    const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLinkMatch) {
      const label = mdLinkMatch[1];
      const rawHref = mdLinkMatch[2].trim();
      const href =
        rawHref.startsWith("/") && rawHref.length > 1
          ? rawHref.replace(/\/+$/, "")
          : rawHref;
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");
      const isAnchor = href.startsWith("#");
      const key = `md-link-${i}`;

      if (isExternal) {
        elements.push(
          <a
            className={defaultLinkClassName}
            href={href}
            key={key}
            rel="noopener noreferrer"
            target="_blank"
          >
            {label}
          </a>,
        );
      } else if (isAnchor) {
        elements.push(
          <a className={defaultLinkClassName} href={href} key={key}>
            {label}
          </a>,
        );
      } else {
        elements.push(
          <Link className={defaultLinkClassName} href={href} key={key}>
            {label}
          </Link>,
        );
      }
      continue;
    }

    // Check markdown bold-italic: ***text***
    const mdBoldItalicMatch = part.match(/^\*\*\*([^*]+)\*\*\*$/);
    if (mdBoldItalicMatch) {
      elements.push(
        <strong className="font-semibold text-ink italic" key={`md-bi-${i}`}>
          {mdBoldItalicMatch[1]}
        </strong>,
      );
      continue;
    }

    // Check markdown bold: **text**
    const mdBoldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (mdBoldMatch) {
      elements.push(
        <strong className="font-semibold text-ink" key={`md-b-${i}`}>
          {mdBoldMatch[1]}
        </strong>,
      );
      continue;
    }

    // Check markdown italic: *text*
    const mdItalicMatch = part.match(/^\*([^*]+)\*$/);
    if (mdItalicMatch) {
      elements.push(
        <em className="italic" key={`md-i-${i}`}>
          {mdItalicMatch[1]}
        </em>,
      );
      continue;
    }

    // Plain text node
    elements.push(<Fragment key={`txt-${i}`}>{part}</Fragment>);
  }

  return <>{elements}</>;
}

/**
 * Formats a string or string array into React JSX.
 * When `text` is a string array (`string[]`), renders line breaks between elements.
 * When `brClassName` is provided, applies that class to the line break element
 * (e.g. "max-[1199px]:hidden" or "max-[992px]:hidden").
 * Also supports inline Markdown formatting (`**bold**`, `***bold-italic***`, `*italic*`, `[label](url)`).
 */
export function formatBrText(
  text: string | readonly string[] | undefined | null,
  brClassName?: string,
  linkClassName?: string,
): ReactNode {
  if (!text) return "";
  const parts: readonly string[] =
    typeof text === "string" ? [text] : text;

  if (
    parts.length === 1 &&
    !parts[0].includes("**") &&
    !parts[0].includes("*") &&
    !parts[0].includes("[")
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

export const formatText = formatBrText;
