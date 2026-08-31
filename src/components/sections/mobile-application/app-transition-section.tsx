import Image from "next/image";

import { Container } from "@/components/ui/container";

export type AppTransitionStep = {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconWidth?: number;
  iconHeight?: number;
};

export type AppTransitionContent = {
  heading: string;
  steps: readonly [AppTransitionStep, AppTransitionStep, AppTransitionStep, AppTransitionStep];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type AppTransitionSectionProps = {
  content: AppTransitionContent;
};

function TransitionCard({ step }: { step: AppTransitionStep }) {
  return (
    <article className="relative flex-1 overflow-hidden rounded-[20px] bg-[linear-gradient(113.35deg,rgba(21,192,100,0.1)_26.6%,rgba(0,209,255,0.1)_83.87%)] px-7 pt-10 pb-[34px] max-[1199px]:px-5 max-[1199px]:pt-[30px] max-[1199px]:pb-[25px] max-[992px]:w-[calc(50%-7px)] max-[767px]:w-full">
      <span
        aria-hidden="true"
        className="absolute top-7 right-7 text-[60px] leading-none font-bold text-black opacity-[0.06]"
      >
        {step.number}
      </span>
      <div className="mb-[25px] flex size-[60px] items-center justify-center rounded-[10px] bg-[#121212] max-[1199px]:mb-[15px]">
        <Image
          alt={step.iconAlt}
          className="h-auto w-auto"
          height={step.iconHeight ?? 30}
          src={step.icon}
          width={step.iconWidth ?? 30}
        />
      </div>
      <h3 className="mb-3 font-sans text-lg leading-[25px] font-bold text-ink">
        {step.title}
      </h3>
      <p className="text-base leading-[30px] font-medium text-muted">{step.description}</p>
    </article>
  );
}

export function AppTransitionSection({ content }: AppTransitionSectionProps) {
  const [first, second, third, fourth] = content.steps;

  return (
    <section className="py-20" aria-labelledby="mobile-app-transition-title">
      <Container>
        <h2
          className="mb-[50px] font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
          id="mobile-app-transition-title"
        >
          {content.heading}
        </h2>

        <div className="-m-3 flex flex-wrap max-[1199px]:-m-[7px] max-[992px]:m-0">
          <div className="flex w-1/3 flex-col p-3 max-[1199px]:p-[7px] max-[992px]:w-full max-[992px]:flex-row max-[992px]:justify-between max-[992px]:p-0 max-[767px]:flex-wrap max-[767px]:gap-[15px]">
            <TransitionCard step={first} />
            <div className="h-6 shrink-0 max-[1199px]:h-3.5 max-[992px]:hidden" />
            <TransitionCard step={second} />
          </div>

          <div className="flex w-1/3 p-3 max-[1199px]:p-[7px] max-[992px]:my-6 max-[992px]:w-full max-[992px]:justify-center max-[992px]:p-0">
            <Image
              alt={content.image.alt}
              className="h-full w-full rounded-[20px] object-cover max-[992px]:h-auto max-[992px]:w-auto max-[992px]:max-w-[392px]"
              height={content.image.height}
              sizes="(max-width: 991px) 392px, 33vw"
              src={content.image.src}
              width={content.image.width}
            />
          </div>

          <div className="flex w-1/3 flex-col p-3 max-[1199px]:p-[7px] max-[992px]:w-full max-[992px]:flex-row max-[992px]:justify-between max-[992px]:p-0 max-[767px]:flex-wrap max-[767px]:gap-[15px]">
            <TransitionCard step={third} />
            <div className="h-6 shrink-0 max-[1199px]:h-3.5 max-[992px]:hidden" />
            <TransitionCard step={fourth} />
          </div>
        </div>
      </Container>
    </section>
  );
}
