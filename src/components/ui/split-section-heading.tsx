import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type SplitSectionHeadingProps = {
  heading: string;
  description?: string;
  paragraphs?: readonly string[];
  headingId?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  dark?: boolean;
  variant?: "centered" | "default" | "portfolio" | "services";
};

function removeBreakTags(text: string) {
  return text.replace(/<br\s*\/?>/gi, " ");
}

export function SplitSectionHeading({
  heading,
  description,
  paragraphs,
  headingId,
  eyebrow,
  eyebrowClassName,
  className,
  titleClassName,
  textClassName,
  dark = false,
  variant = "default",
}: SplitSectionHeadingProps) {
  const body = paragraphs ?? (description ? [description] : []);
  const services = variant === "services";
  const portfolio = variant === "portfolio";

  if (variant === "centered") {
    return (
      <header className={cn("mx-auto max-w-[900px] text-center", className)}>
        <h2
          className={cn(
            "font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]",
            dark ? "text-white" : "text-ink",
            titleClassName,
          )}
          id={headingId}
        >
          {formatBrText(heading, "max-[1199px]:hidden")}
        </h2>
        {body.length > 0 ? (
          <div className={textClassName}>
            {body.map((paragraph) => (
              <p
                className={cn(
                  "mt-2.5 font-sans text-sm font-normal leading-6",
                  dark ? "text-white/80" : "text-muted",
                )}
                key={paragraph}
              >
                {formatBrText(paragraph, "max-[1199px]:hidden")}
              </p>
            ))}
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header
      className={cn(
        "flex items-end justify-between max-[992px]:flex-col",
        services
          ? "max-[992px]:items-start max-[992px]:text-left"
          : portfolio
            ? "items-end max-[992px]:items-end max-[992px]:text-center"
          : "max-[992px]:text-center",
        className,
      )}
    >
      <div
        className={cn(
          services ? "w-[48%]" : portfolio ? "w-[50%]" : "w-[46%]",
          "max-[992px]:w-full",
          titleClassName,
        )}
      >
        {eyebrow ? (
          <Eyebrow
            align={portfolio ? "responsive-center" : "start"}
            className={cn("mb-5", eyebrowClassName)}
            lineThickness="thin"
            lineWidth="fixed"
          >
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          className={cn(
            services || portfolio
              ? "font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]"
              : "font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] max-[992px]:mb-[15px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
            dark ? "text-white" : "text-ink",
          )}
          id={headingId}
        >
          {formatBrText(removeBreakTags(heading))}
        </h2>
      </div>
      {body.length > 0 ? (
        <div
          className={cn(
            services || portfolio ? "w-[48%]" : "w-[50%]",
            "max-[992px]:w-full",
            textClassName,
          )}
        >
          {body.map((paragraph) => (
            <p
              className={cn(
                services
                  ? "font-sans xl:text-base text-sm font-medium leading-6"
                  : portfolio
                    ? "font-sans text-[16px] font-medium leading-7 max-[992px]:mt-3.75 max-[992px]:text-sm max-[992px]:leading-[24px] max-[767px]:text-sm max-[767px]:leading-6"
                  : "xl:text-base text-sm font-medium leading-6 not-last:mb-2.5",
                dark ? "text-white/80" : "text-muted",
              )}
              key={paragraph}
            >
              {formatBrText(removeBreakTags(paragraph))}
            </p>
          ))}
        </div>
      ) : null}
    </header>
  );
}
