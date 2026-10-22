import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ThemeCustomizationApproachPoint =
  | string
  | {
      label: string;
      value: string;
      ratingImage?: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    };

export type ThemeCustomizationApproachCard = {
  badge?: string;
  title?: string;
  description?: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  points: readonly ThemeCustomizationApproachPoint[];
  isHighlighted?: boolean;
};

export type ThemeCustomizationApproachContent = {
  eyebrow?: string;
  heading: string;
  description: string;
  approaches: readonly ThemeCustomizationApproachCard[];
};

export type ThemeCustomizationApproachSectionProps = {
  content: ThemeCustomizationApproachContent;
  className?: string;
  id?: string;
};

export function ThemeCustomizationApproachSection({
  content,
  className,
  id,
}: ThemeCustomizationApproachSectionProps) {
  return (
    <section
      className={cn(
        "choose-the-right-approach py-20 max-[992px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />

        <div
          className="wrapper grid grid-cols-2 gap-4 max-[1199px]:block max-[1199px]:space-y-4"
          data-aos="fade-up"
        >
          {content.approaches.map((item, itemIdx) => {
            const cardKey =
              item.title ?? item.logo?.alt ?? `approach-${itemIdx}`;
            return (
              <div
                className={cn(
                  "block rounded-[24px] border border-[rgba(40,40,40,0.11)] p-[30px] pb-[18px] max-[767px]:rounded-[20px] max-[767px]:p-6 max-[767px]:pb-3",
                  item.isHighlighted
                    ? "left-block bg-[#eff4ef]"
                    : "right-block bg-white",
                )}
                data-aos="fade-up"
                key={cardKey}
              >
                <div className="top-title">
                  {item.logo ? (
                    <div className="flex h-10 items-center">
                      <Image
                        alt={item.logo.alt}
                        className="h-10 w-auto"
                        height={item.logo.height}
                        src={item.logo.src}
                        width={item.logo.width}
                      />
                    </div>
                  ) : (
                    <>
                      {item.badge && (
                        <span className="mb-2.5 block font-montserrat text-xs font-medium uppercase tracking-[0.5px] text-[#ad5151]">
                          {item.badge}
                        </span>
                      )}
                      {item.title && (
                        <h3 className="mb-2 font-display text-[22px] font-medium leading-tight text-ink max-[767px]:text-lg">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="font-sans text-sm font-medium leading-[22px] text-[#535353]">
                          {item.description}
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="bullet-points mt-[25px]">
                  <ul className="m-0 list-none p-0">
                    {item.points.map((point, pointIdx) => {
                      const isString = typeof point === "string";
                      const pointKey = isString ? point : point.label;
                      const hasRating =
                        !isString && Boolean(point.ratingImage);

                      return (
                        <li
                          className={cn(
                            "relative border-t border-[rgba(40,40,40,0.11)] py-3 pl-[22px] font-sans text-sm font-normal leading-6 text-[#535353]",
                            hasRating && "flex items-center gap-[5px]",
                          )}
                          key={`${pointKey}-${pointIdx}`}
                        >
                          <svg
                            aria-hidden="true"
                            className="absolute left-0 top-3.5 size-4 shrink-0"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M12.25 5L6.75 10.5L4 7.75"
                              stroke="#AD5151"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.2"
                            />
                          </svg>

                          {isString ? (
                            <span>{point}</span>
                          ) : hasRating ? (
                            <>
                              <strong className="font-bold text-[#282828]">
                                {point.label}:
                              </strong>
                              <span className="rating-img inline-flex">
                                <Image
                                  alt={point.ratingImage!.alt}
                                  className="max-w-[92px] h-auto"
                                  height={point.ratingImage!.height}
                                  src={point.ratingImage!.src}
                                  width={point.ratingImage!.width}
                                />
                              </span>
                              <span>{point.value}</span>
                            </>
                          ) : (
                            <>
                              <strong className="font-bold text-[#282828]">
                                {point.label}:
                              </strong>{" "}
                              <span>{point.value}</span>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
