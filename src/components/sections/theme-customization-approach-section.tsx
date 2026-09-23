import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

export type ThemeCustomizationApproachCard = {
  badge: string;
  title: string;
  description: string;
  points: readonly string[];
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

        <div className="wrapper grid grid-cols-2 gap-4 max-[1199px]:block max-[1199px]:space-y-4">
          {content.approaches.map((item) => (
            <div
              className={cn(
                "block rounded-[24px] border border-[rgba(40,40,40,0.11)] p-[30px] pb-[18px] max-[767px]:rounded-[20px] max-[767px]:p-6 max-[767px]:pb-3",
                item.isHighlighted
                  ? "left-block bg-[#eff4ef]"
                  : "right-block bg-white",
              )}
              key={item.title}
            >
              <div className="top-title">
                <span className="mb-2.5 block font-montserrat text-xs font-medium uppercase tracking-[0.5px] text-[#ad5151]">
                  {item.badge}
                </span>
                <h3 className="mb-2 font-sans text-[22px] font-bold leading-tight text-ink max-[767px]:text-lg">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-medium leading-[22px] text-[#535353]">
                  {item.description}
                </p>
              </div>

              <div className="bullet-points mt-[25px]">
                <ul className="m-0 list-none p-0">
                  {item.points.map((point) => (
                    <li
                      className="flex items-start gap-2.5 border-t border-[rgba(40,40,40,0.11)] py-3 font-sans text-sm font-medium leading-[22px] text-[#535353]"
                      key={point}
                    >
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
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
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
