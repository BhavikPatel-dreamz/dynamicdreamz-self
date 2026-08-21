import { cn } from "@/lib/class-names";

type SplitSectionHeadingProps = {
  heading: string;
  description?: string;
  paragraphs?: readonly string[];
  headingId: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  dark?: boolean;
};

export function SplitSectionHeading({
  heading,
  description,
  paragraphs,
  headingId,
  className,
  titleClassName,
  textClassName,
  dark = false,
}: SplitSectionHeadingProps) {
  const body = paragraphs ?? (description ? [description] : []);

  return (
    <header
      className={cn(
        "flex items-center justify-between max-[991px]:flex-col max-[991px]:text-center",
        className,
      )}
    >
      <div className={cn("w-[46%] max-[991px]:w-full", titleClassName)}>
        <h2
          className={cn(
            "font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[991px]:mb-[15px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]",
            dark ? "text-white" : "text-ink",
          )}
          id={headingId}
        >
          {heading}
        </h2>
      </div>
      <div className={cn("w-[50%] max-[991px]:w-full", textClassName)}>
        {body.map((paragraph) => (
          <p
            className={cn(
              "text-base leading-[30.4px] font-medium not-last:mb-2.5",
              dark ? "text-white/80" : "text-muted",
            )}
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </header>
  );
}
