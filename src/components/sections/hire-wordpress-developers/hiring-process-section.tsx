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
    <section className="py-20 max-[991px]:py-[60px] max-[767px]:py-[50px]">
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[35px]">
          <h2 className="font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
          <p className="mt-2.5 text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {content.description}
          </p>
        </div>

        <ol className="grid grid-cols-4 gap-y-[45px] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 max-[767px]:gap-y-[38px]">
          {content.items.map((item, index) => {
            const hasDesktopConnector = index < content.items.length - 1;
            const hasTabletConnector = index % 2 === 0;

            return (
              <li className="relative px-4 text-center" key={item.title}>
                <div
                  className={`relative mx-auto mb-5 flex size-[94px] items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,#10d69d,#19d2ed)] p-px ${
                    hasDesktopConnector
                      ? "after:absolute after:top-1/2 after:left-[calc(100%+15px)] after:w-[calc((1180px-376px)/4)] after:border-t after:border-dashed after:border-[#20d9ca] max-[1199px]:after:w-[calc((960px-376px)/4)]"
                      : ""
                  } ${
                    hasTabletConnector
                      ? "max-[991px]:after:block max-[991px]:after:w-[calc((720px-188px)/2)]"
                      : "max-[991px]:after:hidden"
                  } max-[991px]:after:hidden`}
                >
                  <span className="flex size-full items-center justify-center rounded-[10px] bg-white">
                    <Image
                      alt={item.iconAlt}
                      className="h-12 w-12 object-contain"
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
                <h3 className="mb-2 font-sans text-base leading-[22px] font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mx-auto max-w-[220px] text-sm leading-6 font-normal text-muted">
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
