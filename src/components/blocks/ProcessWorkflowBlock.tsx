import React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";
import { formatBrText } from "@/lib/text-formatting";

export type ProcessStepItem = {
  step: string;
  title: string;
  description: string;
};

export type OurDevelopmentProcessContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: readonly ProcessStepItem[];
};

export type ProcessWorkflowBlockProps = {
  content?: any;
  id?: string;
  eyebrowVariant?: "pill" | "dash";
  columns?: 3 | 4;
  className?: string;
  steps?: readonly any[];
  items?: readonly any[];
  title?: string | readonly string[];
  heading?: string | readonly string[];
  description?: string | readonly string[];
  eyebrow?: string;
  headingId?: string;
  layout?: string;
  note?: string | readonly string[];
  variant?: string;
  [key: string]: any;
};

export type OurDevelopmentProcessSectionProps = ProcessWorkflowBlockProps;
export type NumberedProcessTimelineSectionProps = ProcessWorkflowBlockProps;

export function ProcessWorkflowBlock({
  content,
  id = "development-process",
  columns,
  className,
  steps,
  items,
  title,
  heading,
  description,
  eyebrow,
}: ProcessWorkflowBlockProps) {
  const resolvedHeading = heading ?? content?.heading ?? title ?? "";
  const resolvedEyebrow = eyebrow ?? content?.eyebrow;
  const resolvedDesc = description ?? content?.description;
  const resolvedSteps = steps ?? content?.steps ?? items ?? content?.items ?? [];
  const is3Col = columns === 3 || resolvedSteps.length === 6;
  const isHireProcess = typeof resolvedHeading === "string" && resolvedHeading.toLowerCase().includes("hiring");
  const bg = isHireProcess ? "bg-transparent" : "bg-[#fafaf7]";

  return (
    <section
      id={id}
      className={cn("our-development-process py-20 max-[992px]:py-[50px]", bg, className)}
    >
      <Container>
        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-12 flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col max-[991px]:gap-4"
        >
          <div className="title max-w-[620px]">
            {resolvedEyebrow && (
              <div className="eyebrow mb-3">
                <span className="font-montserrat text-sm font-semibold uppercase text-brand-red">
                  {resolvedEyebrow}
                </span>
              </div>
            )}
            <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.4] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
              {formatBrText(resolvedHeading)}
            </h2>
          </div>
          {resolvedDesc && (
            <div className="section_text max-w-[560px]">
              <p className="font-sans text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(resolvedDesc)}
              </p>
            </div>
          )}
        </div>

        <div data-aos="fade-up" className="wrapper flex flex-wrap">
          {resolvedSteps.map((item: any, idx: number) => {
            const stepNum = item.step ?? item.number ?? item.stepNumber ?? (idx + 1).toString().padStart(2, "0");
            return (
              <div
                key={stepNum}
                className={cn(
                  is3Col
                    ? cn(
                        "item border-[rgba(40,40,40,0.11)] p-5",
                        "min-[1200px]:w-1/3 min-[1200px]:border-t min-[1200px]:border-r",
                        idx < 3 ? "min-[1200px]:border-b-0" : "min-[1200px]:border-b",
                        idx % 3 === 0 && "min-[1200px]:border-l",
                        "max-[1199px]:w-1/2 max-[1199px]:border-b",
                        idx < 2 ? "max-[1199px]:border-t" : "max-[1199px]:border-t-0",
                        idx % 2 === 0
                          ? "max-[1199px]:border-l max-[1199px]:border-r-0"
                          : "max-[1199px]:border-l max-[1199px]:border-r",
                        "max-[767px]:w-full max-[767px]:border-t max-[767px]:border-r max-[767px]:border-b-0 max-[767px]:border-l max-[767px]:p-[18px] max-[767px]:last:border-b",
                      )
                    : cn(
                        "item w-1/4 border-t border-r border-b border-[rgba(40,40,40,0.11)] p-5",
                        idx === 0 && "border-l",
                        "max-[1199px]:w-1/2 max-[1199px]:[&:nth-child(n+3)]:border-t-0 max-[1199px]:[&:nth-child(odd)]:border-l",
                        "max-[767px]:w-full max-[767px]:border-t max-[767px]:border-r max-[767px]:border-b-0 max-[767px]:border-l max-[767px]:p-[18px] max-[767px]:last:border-b",
                      ),
                )}
              >
                <span className="mb-[15px] block font-montserrat text-xs font-semibold uppercase text-brand-red">
                  {stepNum}
                </span>
                <h3 className="mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[991px]:text-[18px] max-[991px]:leading-[26px]">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-medium leading-[22px] text-[#535353]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export {
  ProcessWorkflowBlock as OurDevelopmentProcessSection,
  ProcessWorkflowBlock as NumberedProcessTimelineSection,
  ProcessWorkflowBlock as ShopifyHorizontalProcessSection,
  ProcessWorkflowBlock as ShopifyMigrationNumberedGridSection,
  ProcessWorkflowBlock as ThemeCustomizationApproachSection,
  ProcessWorkflowBlock as ShopifyCroProcessSection,
  ProcessWorkflowBlock as WhiteLabelProcessSection,
  ProcessWorkflowBlock as ShopifyAppProcessSection,
  ProcessWorkflowBlock as MigrationProcessSection,
};
