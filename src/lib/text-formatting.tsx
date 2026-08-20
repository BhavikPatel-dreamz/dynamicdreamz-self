import { Fragment, type ReactNode } from "react";

/**
 * Formats a string containing `<br>`, `<br/>`, or `<br />` HTML tags into React JSX.
 * When `brClassName` is provided, applies that class to the `<br />` element
 * (e.g. "max-[1199px]:hidden" or "max-[991px]:hidden").
 */
function parseInlineFormatting(text: string): ReactNode {
  if (!text.includes("<strong") && !text.includes("<b")) {
    return text;
  }

  const parts = text.split(/(<\/?strong>|<\/?b>)/gi);
  let isBold = false;

  return (
    <>
      {parts.map((part, index) => {
        const lower = part.toLowerCase();
        if (lower === "<strong>" || lower === "<b>") {
          isBold = true;
          return null;
        }
        if (lower === "</strong>" || lower === "</b>") {
          isBold = false;
          return null;
        }
        return isBold ? (
          <strong className="font-semibold text-ink" key={`bold-${index}`}>
            {part}
          </strong>
        ) : (
          <Fragment key={`txt-${index}`}>{part}</Fragment>
        );
      })}
    </>
  );
}

export function formatBrText(text: string, brClassName?: string): ReactNode {
  if (!text) return "";
  if (!text.includes("<br") && !text.includes("<strong") && !text.includes("<b")) {
    return text;
  }

  const parts = text.split(/<br\s*\/?>/i);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`part-${index}`}>
          {parseInlineFormatting(part)}
          {index < parts.length - 1 ? (
            brClassName ? <br className={brClassName} /> : <br />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
