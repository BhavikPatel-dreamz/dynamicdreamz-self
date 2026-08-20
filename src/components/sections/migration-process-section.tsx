import Image from "next/image";

import { Container } from "@/components/ui/container";
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
  steps: readonly MigrationProcessStepItem[];
};

export type MigrationProcessSectionProps = {
  content: MigrationProcessContent;
  className?: string;
  id?: string;
};

function StepItem({ step }: { step: MigrationProcessStepItem }) {
  return (
    <div className="migration-step-box border-b-[1.5px] border-[#efefef] first:border-t-[1.5px]">
      <article className="migration-step-details flex items-start py-8 max-[767px]:block max-[767px]:py-5">
        {/* Desktop Step Counter */}
        <div className="icon mr-[46px] w-[75px] min-w-[75px] text-center max-[767px]:hidden">
          <span className="inline-block rounded-[50px] border border-[#efefef] bg-clip-text px-[15px] pt-[7px] pb-[4px] text-[16px] font-bold leading-[19.84px] text-transparent bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)]">
            Step
          </span>
          <span className="mt-2 block font-sans text-[50px] font-bold leading-[62px] text-transparent bg-clip-text bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)]">
            {step.stepNumber}
          </span>
        </div>

        {/* Mobile Step Header */}
        <div className="hidden max-[767px]:mb-3 max-[767px]:flex max-[767px]:items-center max-[767px]:gap-2.5">
          <span className="rounded-[50px] border border-[#efefef] bg-clip-text px-2.5 py-0.5 text-xs font-bold text-transparent bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)]">
            Step
          </span>
          <span className="font-sans text-[26px] font-bold leading-none text-transparent bg-clip-text bg-[linear-gradient(96.7deg,#15c064_37.46%,#00d1ff_120.9%)]">
            {step.stepNumber}
          </span>
        </div>

        {/* Step Content */}
        <div className="text flex-1">
          <h3 className="mb-2.5 font-sans text-[20px] font-bold leading-[28px] text-ink max-[767px]:text-lg max-[767px]:leading-[26px]">
            {formatBrText(step.title, "max-[767px]:hidden")}
          </h3>
          <p className="text-base font-medium leading-[27.2px] tracking-[0.02em] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
            {formatBrText(step.description, "max-[767px]:hidden")}
          </p>
        </div>
      </article>

      {/* Nested Categories (e.g. Step 4 & 5) */}
      {step.categories && step.categories.length > 0 && (
        <div className="migration-list border-t border-[#efefef] pt-8 pb-8 max-[767px]:pt-5 max-[767px]:pb-5">
          {step.categories.map((cat) => (
            <div className="mb-6 last:mb-0" key={cat.title}>
              <h4 className="mb-2.5 font-sans text-[18px] font-bold leading-[27.72px] text-[#282828] max-[767px]:text-base">
                {cat.title}
              </h4>
              <ul className="space-y-4">
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
    </div>
  );
}

export function MigrationProcessSection({
  content,
  className = "migration-process-step-sec mb-20 max-[767px]:mb-[50px]",
  id = "migration-process",
}: MigrationProcessSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title mb-10 max-w-[850px] max-[767px]:mb-6">
          <h2 className="mb-1.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
        </div>

        <div className="migration-process-inner">
          {content.steps.map((step) => (
            <StepItem key={step.stepNumber} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
