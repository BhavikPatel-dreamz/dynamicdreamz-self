import Image from "next/image";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type MilestoneItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  value: number | string;
  suffix?: string;
  countLabel: string;
};

export type MilestonesSectionProps = {
  heading: string;
  description: string;
  items: readonly MilestoneItem[];
  className?: string;
};

export function MilestonesSection({
  heading,
  description,
  items,
  className,
}: MilestonesSectionProps) {
  return (
    <section
      aria-labelledby="milestones-title"
      className={cn("bg-[#f9fafb] py-20 max-[767px]:py-[60px]", className)}
      data-section="milestones"
      id="milestones"
    >
      <Container>
        <header className="mx-auto mb-[50px] max-w-[850px] text-center max-[767px]:mb-[30px]">
          <h2
            className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]"
            id="milestones-title"
          >
            {heading}
          </h2>
          <p className="mt-2.5 text-lg font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-3 items-start gap-[30px] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {items.map((item, index) => (
            <article className={cn("h-full", index === 1 && "mt-[60px] max-[991px]:mt-0")} key={item.title}>
              <div className="h-full rounded-[15px] bg-[linear-gradient(150.82deg,#15c064_36.2%,#00d1ff_76.83%)] p-0.5 shadow-[0_4px_15.7px_rgba(5,205,220,0.1)]">
                <div className="flex h-full flex-col justify-between rounded-[13px] bg-white p-6 pb-[30px] max-[767px]:p-5">
                  <div>
                    <Image
                      alt={item.iconAlt}
                      className="mb-[30px] size-[90px] object-contain max-[767px]:mb-[15px] max-[767px]:size-[60px]"
                      height={90}
                      src={item.icon}
                      width={90}
                    />
                    <h3 className="mb-2.5 font-sans text-lg font-bold leading-6 text-ink">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base font-medium leading-[30.88px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-[30px] border-t border-[#e8e8e8] pt-[30px] max-[767px]:mt-5 max-[767px]:pt-5">
                    <p className="m-0 text-[36px] font-semibold leading-9 text-ink max-[767px]:text-[30px]">
                      {item.value}
                      {item.suffix}
                    </p>
                    <span className="font-sans text-base font-medium leading-6 text-muted">
                      {item.countLabel}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
