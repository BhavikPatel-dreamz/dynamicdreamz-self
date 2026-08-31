import Image from "next/image";

import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";
import { formatBrText } from "@/lib/text-formatting";

export type MigrationProcessCategory = {
  title: string;
  items: readonly string[];
};

export type MigrationProcessStepItem = {
  stepNumber: string;
  title: string;
  description: string;
  categories?: readonly MigrationProcessCategory[];
};

export type MigrationProcessContent = {
  heading: string;
  description?: string;
  steps: readonly MigrationProcessStepItem[];
};

export type MigrationProcessSectionProps = {
  content: MigrationProcessContent;
  className?: string;
  id?: string;
  titleAlign?: "left" | "center";
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
  className = "migration-process-step-sec mb-20 max-[992px]:mb-[50px]",
  id = "migration-process",
  titleAlign,
}: MigrationProcessSectionProps) {
  const isCentered =
    titleAlign === "center" ||
    (titleAlign === undefined &&
      (className.includes("text-center") || Boolean(content.description)));

  return (
    <section className={className} id={id}>
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
            <p className="mt-2.5 font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
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
