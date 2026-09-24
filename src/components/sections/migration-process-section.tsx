import Image from "next/image";

import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { formatBrText } from "@/lib/text-formatting";

import { cn } from "@/lib/class-names";

export type MigrationProcessCategory = {
  title: string;
  items: readonly string[];
};

export type MigrationProcessSubBox = {
  title?: string;
  description?: string;
  items?: readonly string[];
};

export type MigrationProcessStepItem = {
  stepNumber: string;
  title: string;
  description: string;
  categories?: readonly MigrationProcessCategory[];
  subBoxes?: readonly MigrationProcessSubBox[];
};

export type MigrationProcessContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: readonly MigrationProcessStepItem[];
};

export type MigrationProcessSectionProps = {
  content: MigrationProcessContent;
  className?: string;
  id?: string;
  titleAlign?: "left" | "center";
  variant?: "default" | "cards";
};

function StepItem({
  step,
  isFirst,
  isLast,
}: {
  step: MigrationProcessStepItem;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <>
      <div
        className={`migration-step-box border-[#efefef] ${isFirst ? "" : "border-t-[1.5px]"}`}
      >
        <article
          className={`migration-step-details flex items-center max-[767px]:items-start ${
            isLast
              ? "pt-8 pb-0 max-[767px]:pt-5"
              : "py-8 max-[767px]:py-5"
          }`}
        >
          {/* Desktop Step Counter */}
          <div className="icon mr-[46px] w-[75px] min-w-[75px] text-center max-[767px]:mr-[15px] max-[767px]:min-w-[55px]">
            <span className="step mb-1 block rounded-[50px] border border-[#efefef] bg-clip-text px-[15px] pt-[7px] pb-[4px] text-[16px] font-normal leading-[19.84px] text-transparent bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)] max-[767px]:px-2.5 max-[767px]:py-0.5 max-[767px]:text-xs">
              {sharedUiCopy.step}
            </span>
            <span className="number block font-sans text-[50px] font-normal leading-[62px] text-transparent bg-clip-text bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)] max-[767px]:text-[34px] max-[767px]:leading-tight">
              {step.stepNumber}
            </span>
          </div>

          {/* Step Content */}
          <div className="text w-[calc(100%-121px)] max-[767px]:w-[calc(100%-70px)]">
            <h3 className="mb-2.5 font-montreal-medium text-[20px] font-medium leading-[28px] text-ink max-[992px]:text-lg max-[992px]:leading-[26px]">
              {formatBrText(step.title, "max-[767px]:hidden")}
            </h3>
            <p className="text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
              {formatBrText(step.description, "max-[767px]:hidden")}
            </p>
          </div>
        </article>
      </div>

      {/* Nested Categories (e.g. Step 4 & 5) */}
      {step.categories && step.categories.length > 0 && (
        <div className="migration-list border-t-[1.5px] border-[#efefef] pt-8 max-[767px]:pt-5">
          {step.categories.map((cat) => (
            <div key={cat.title}>
              <h4 className="mb-2.5 font-sans text-[18px] font-bold leading-[27.72px] text-[#282828] max-[767px]:text-base">
                {cat.title}
              </h4>
              <ul className="mb-8">
                {cat.items.map((item, idx) => (
                  <li
                    className="relative pl-[34px] text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6"
                    key={idx}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="absolute top-[3px] left-0 size-[22px] object-contain"
                      height={22}
                      src="/assets/icons/gradient-check.svg"
                      width={22}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function MigrationProcessSection({
  content,
  className,
  id = "migration-process",
  titleAlign,
  variant = "default",
}: MigrationProcessSectionProps) {
  const defaultClassName =
    variant === "cards"
      ? "py-[50px]"
      : "migration-process-step-sec mb-20 max-[992px]:mb-[50px]";
  const resolvedClassName = className ?? defaultClassName;

  if (variant === "cards") {
    return (
      <section
        className={cn(
          "process-steps-section migration-process",
          resolvedClassName,
        )}
        id={id}
      >
        <Container>
          <div className="section_title_with_eyebrow mb-10 max-[767px]:mb-[30px]">
            <div className="title">
              {content.eyebrow ? (
                <div className="eyebrow relative mb-4 inline-flex items-center pl-10 font-montserrat text-sm font-semibold uppercase leading-[1.2] text-[#535353] before:absolute before:left-0 before:top-[7px] before:h-[2px] before:w-[30px] before:bg-brand-red before:content-[''] max-[767px]:pl-[23px] max-[767px]:text-xs max-[767px]:leading-[1.2] max-[767px]:before:top-[6px] max-[767px]:before:w-[15px]">
                  <span>{content.eyebrow}</span>
                </div>
              ) : null}
              <h2 className="m-0 font-montreal-medium text-[35px] font-normal leading-[49px] tracking-normal text-ink max-[991px]:mb-2.5 max-[991px]:text-[30px] max-[991px]:leading-[42px] max-[767px]:text-2xl max-[767px]:leading-[31.2px]">
                {formatBrText(content.heading, "max-[1199px]:hidden")}
              </h2>
            </div>
            {content.description ? (
              <div className="section_text mt-2.5 max-w-[850px]">
                <p className="font-montserrat text-sm font-normal leading-6 text-[#535353]">
                  {formatBrText(content.description)}
                </p>
              </div>
            ) : null}
          </div>

          <div className="steps-wrapper flex flex-wrap gap-4 max-[767px]:block">
            {content.steps.map((step, idx) => {
              const isStep1or2 = idx < 2;
              const isStep3 = idx === 2;
              const isStep4 = idx === 3;
              const isStep5 = idx === 4;
              const isStep6 = idx === 5;

              return (
                <div
                  className={cn(
                    "step rounded-[20px] border border-[rgba(40,40,40,0.11)] bg-white p-[25px] max-[991px]:p-5",
                    isStep1or2 &&
                      "w-full min-[1200px]:w-[calc(33.3333%-11px)] max-[1199px]:w-[calc(50%-8px)] max-[767px]:w-full max-[767px]:mb-4",
                    isStep3 &&
                      "w-full min-[1200px]:w-[calc(33.3333%-11px)] max-[1199px]:w-full max-[767px]:w-full max-[767px]:mb-4",
                    isStep4 && "w-full max-[767px]:mb-4",
                    isStep5 && "w-full max-[767px]:mb-4",
                    isStep6 && "w-full max-[767px]:mb-0",
                  )}
                  key={step.stepNumber}
                >
                  <div className="step-header">
                    <div className="step-number mb-2.5">
                      <span className="block font-montserrat text-xs font-semibold uppercase leading-6 text-brand-red">
                        {sharedUiCopy.step} {step.stepNumber}
                      </span>
                    </div>
                    <div className="step-content">
                      <h3 className="m-0 mb-2 font-montreal-medium text-[20px] font-normal leading-[28.8px] text-ink max-[991px]:text-[18px] max-[991px]:leading-[26px]">
                        {formatBrText(step.title)}
                      </h3>
                      <div className="step-description">
                        <p className="m-0 font-montserrat text-sm font-normal leading-6 text-[#535353]">
                          {formatBrText(step.description)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {step.subBoxes && step.subBoxes.length > 0 ? (
                    <div
                      className={cn(
                        "boxes-wrapper mt-[30px] gap-2.5 max-[991px]:mt-5",
                        isStep4 &&
                          "grid grid-cols-2 max-[1199px]:grid-cols-1 max-[767px]:block",
                        isStep5 &&
                          "grid grid-cols-4 max-[1199px]:grid-cols-2 max-[767px]:block",
                        isStep6 && "grid grid-cols-2 max-[767px]:block",
                      )}
                    >
                      {step.subBoxes.map((box, bIdx) => (
                        <div
                          className="box rounded-[20px] bg-[#FAFAF7] p-[25px] max-[991px]:p-5 max-[767px]:w-full max-[767px]:mb-2.5 max-[767px]:last:mb-0"
                          key={box.title ?? bIdx}
                        >
                          {box.title ? (
                            <h4 className="m-0 mb-2 font-montreal-medium text-[18px] font-normal leading-[25.92px] text-ink">
                              {box.title}
                            </h4>
                          ) : null}
                          {box.description ? (
                            <div className="box-description">
                              <p className="m-0 font-montserrat text-sm font-normal leading-[22px] text-[#535353]">
                                {box.description}
                              </p>
                            </div>
                          ) : null}
                          {box.items && box.items.length > 0 ? (
                            <div className="box-description">
                              <ul className="m-0 grid grid-cols-3 gap-2.5 p-0 list-none max-[1199px]:grid-cols-5 max-[991px]:grid-cols-4 max-[767px]:grid-cols-2 max-[575px]:block">
                                {box.items.map((item, iIdx) => (
                                  <li
                                    className="relative pl-[15px] font-montserrat text-sm font-normal leading-normal text-[#535353] before:absolute before:left-0 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-brand-red before:content-[''] max-[575px]:mb-[5px] max-[575px]:last:mb-0"
                                    key={iIdx}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  const isCentered =
    titleAlign === "center" ||
    (titleAlign === undefined &&
      (resolvedClassName.includes("text-center") ||
        Boolean(content.description)));

  return (
    <section className={resolvedClassName} id={id}>
      <Container>
        <div
          className={`title ${
            isCentered ? "text-center mx-auto max-w-[850px]" : ""
          } max-[767px]:mb-6`}
        >
          <h2 className="mb-1.5 font-montreal-medium text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px] text-center">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          {content.description && (
            <p className="mt-2.5 font-sans text-sm font-normal leading-[27.2px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(content.description, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div className="migration-process-inner">
          {content.steps.map((step, index) => (
            <StepItem
              isFirst={index === 0}
              isLast={index === content.steps.length - 1}
              key={step.stepNumber}
              step={step}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
