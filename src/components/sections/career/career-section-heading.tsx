import { cn } from "@/lib/class-names";

type CareerSectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  variant?: "opportunities" | "benefits";
};

export function CareerSectionHeading({
  id,
  title,
  description,
  variant = "opportunities",
}: CareerSectionHeadingProps) {
  return (
    <header className="-mx-[15px] flex items-center justify-between max-[992px]:mx-0 max-[992px]:flex-col max-[992px]:text-center">
      <div
        className={cn(
          "px-[15px] max-[992px]:w-full max-[992px]:px-0",
          variant === "benefits"
            ? "w-[calc(45%-15px)]"
            : "w-[calc(39%-15px)]",
        )}
      >
        <h2
          id={id}
          className="text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[992px]:mb-6 max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "px-[15px] max-[992px]:w-full max-[992px]:px-0",
          variant === "benefits"
            ? "w-[calc(55%-15px)]"
            : "w-[calc(61%-15px)]",
        )}
      >
        <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
          {description}
        </p>
      </div>
    </header>
  );
}
