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
  titleColumnClassName?: string;
  textClassName?: string;
  textColumnClassName?: string;
  dark?: boolean;
  variant?: "centered" | "default" | "portfolio" | "services" | "left";
  preserveBreaks?: boolean;
  aosAnimation?: string;
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
  titleColumnClassName,
  textClassName,
  textColumnClassName,
  dark = false,
  variant = "default",
  preserveBreaks = false,
  aosAnimation = "fade-up",
}: SplitSectionHeadingProps) {
  const body = paragraphs ?? (description ? [description] : []);
  const services = variant === "services";
  const portfolio = variant === "portfolio";
  const leftAligned = variant === "left";

  if (variant === "centered") {
    return (
      <header
        className={cn("mx-auto max-w-[900px] text-center", className)}
        data-aos={aosAnimation || undefined}
      >
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
        services || leftAligned
          ? "max-[992px]:items-start max-[992px]:text-left"
          : portfolio
            ? "items-end max-[992px]:items-end max-[992px]:text-center"
          : "max-[992px]:text-center",
        className,
      )}
      data-aos={aosAnimation || undefined}
    >
      <div
        className={cn(
          titleColumnClassName ??
            // Live `.section_title_with_eyebrow .title` is 44% wide until 991px.
            (services || leftAligned
              ? "w-[44%]"
              : portfolio
                ? "w-[50%]"
                : "w-[46%]"),
          // Live `.title` is a 14px/24px block. Its line box is the strut the
          // inline-flex `.eyebrow` aligns to, which produces the live 4px gap
          // between the title box and the eyebrow.
          "text-[14px] leading-6",
          "max-[991px]:w-full",
          titleClassName,
        )}
      >
        {eyebrow ? (
          <Eyebrow
            align={portfolio ? "responsive-center" : "start"}
            // Live `.eyebrow` is `display: inline-flex`, which keeps the inline
            // baseline gap that the live heading block measures (title 4185px →
            // eyebrow 4189px at 1440px). Live margin-bottom is 16px.
            as="span"
            className={cn("mb-4", eyebrowClassName)}
            lineThickness="thin"
            lineWidth="fixed"
          >
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          className={cn(
            services || portfolio || leftAligned
              ? "font-montreal-medium text-[35px] font-normal leading-[48.475px] tracking-normal max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]"
              : "font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] max-[992px]:mb-[15px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
            dark ? "text-white" : "text-ink",
          )}
          id={headingId}
        >
          {formatBrText(
            preserveBreaks ? heading : removeBreakTags(heading),
            "max-[767px]:hidden",
          )}
        </h2>
      </div>
      {body.length > 0 ? (
        <div
          className={cn(
            textColumnClassName ??
              // Live `.section_title_with_eyebrow .section_text` is 48.3% (50% ≤1199px).
              (services || portfolio || leftAligned
                ? "w-[48.3%] max-[1199px]:w-1/2"
                : "w-[50%]"),
            "max-[991px]:w-full",
            textClassName,
          )}
        >
          {body.map((paragraph) => (
            <p
              className={cn(
                services || leftAligned
                  ? "font-sans xl:text-base text-sm font-medium leading-7 max-[767px]:leading-6"
                  : portfolio
                    ? "font-sans text-[16px] font-medium leading-7 max-[992px]:mt-3.75 max-[992px]:text-sm max-[992px]:leading-[24px] max-[767px]:text-sm max-[767px]:leading-6"
                    : "xl:text-base text-sm font-medium leading-6 not-last:mb-2.5",
                dark ? "text-white/80" : "text-muted",
              )}
              key={paragraph}
            >
              {formatBrText(
                preserveBreaks ? paragraph : removeBreakTags(paragraph),
                "max-[767px]:hidden",
              )}
            </p>
          ))}
        </div>
      ) : null}
    </header>
  );
}
