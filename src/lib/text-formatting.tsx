import { Fragment, type ReactNode } from "react";

/**
 * Formats a string containing `<br>`, `<br/>`, or `<br />` HTML tags into React JSX.
 * When `brClassName` is provided, applies that class to the `<br />` element
 * (e.g. "max-[1199px]:hidden" or "max-[991px]:hidden").
 */
export function formatBrText(text: string, brClassName?: string): ReactNode {
  if (!text) return "";
  if (!text.includes("<br")) {
    return text;
  }

  const parts = text.split(/<br\s*\/?>/i);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`part-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            brClassName ? <br className={brClassName} /> : <br />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
