import Image from "next/image";

import { Container } from "@/components/ui/container";
import { hireWordPressProcess } from "@/content/hire-wordpress-developers";

export type HiringProcessContent = {
  heading: string;
  description: string;
  items: readonly {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
  }[];
};

export function HiringProcessSection({
  content = hireWordPressProcess,
  showStepNumbers = false,
}: {
  content?: HiringProcessContent;
  showStepNumbers?: boolean;
}) {
  return (
    <section className="hiring-process-sec py-20 max-[991px]:py-12.5 max-[767px]:py-12.5">
      <Container>
        <div className="text-center">
          <h2 className="mb-[15px] font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-8.25 max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
          <p className="text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6.25">
            {content.description}
          </p>
        </div>

        <ol className="mt-[55px] grid grid-cols-4 max-[991px]:grid-cols-2 max-[991px]:gap-y-[30px] max-[767px]:mt-[30px] max-[767px]:grid-cols-1">
          {content.items.map((item, index) => {
            const hasDesktopConnector = index < content.items.length - 1;

            return (
              <li className="relative px-2.5 text-center max-[991px]:px-5 max-[767px]:px-0" key={item.title}>
                <div
                  className={`relative mx-auto mb-7 flex size-[94px] items-center justify-center rounded-[15px] bg-[linear-gradient(150.82deg,#15c064_36.2%,#00d1ff_76.83%)] p-0.5 shadow-[0_4px_15.7px_0_rgba(5,205,220,0.1)] max-[767px]:size-[70px] ${
                    hasDesktopConnector
                      ? "after:absolute after:top-[47px] after:left-[calc(100%+13px)] after:-z-1 after:h-0.5 after:w-[calc(100%+78px)] after:bg-[linear-gradient(90deg,transparent,transparent_50%,#fff_50%,#fff_100%),linear-gradient(90deg,#15c064,#15c064,#15c064,#00d1ff,#00d1ff)] after:bg-[length:12px_3px,100%_3px] max-[1199px]:after:w-[calc(100%+22px)] max-[991px]:after:hidden"
                      : ""
                  }`}
                >
                  <span className="flex size-full items-center justify-center rounded-[13px] bg-white">
                    <Image
                      alt={item.iconAlt}
                      className="size-12 object-contain max-[767px]:size-[35px]"
                      height={48}
                      src={item.icon}
                      width={48}
                    />
                  </span>
                  {showStepNumbers ? (
                    <span className="absolute -top-[13px] -right-[13px] flex size-[34px] items-center justify-center rounded-full border-[3px] border-white bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] text-lg leading-[26px] font-bold text-white max-[767px]:-top-3 max-[767px]:-right-3 max-[767px]:size-[30px] max-[767px]:text-base max-[767px]:leading-[23px]">
                      {index + 1}
                    </span>
                  ) : null}
                </div>
                <h3 className="mb-3 font-sans text-lg leading-[26px] font-bold text-ink max-[767px]:text-base max-[767px]:leading-[23.04px]">
                  {item.title}
                </h3>
                <p className="text-center text-base leading-[27px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6 max-[767px]:tracking-[0.28px]">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
