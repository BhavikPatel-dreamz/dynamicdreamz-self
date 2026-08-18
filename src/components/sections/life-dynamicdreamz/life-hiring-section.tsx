import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { hiringCallout } from "@/content/life-dynamicdreamz";

export function LifeHiringSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]" data-life="hiring">
      <Container>
        <div
          className="flex justify-between max-[991px]:flex-col-reverse"
          data-life="hiring-layout"
        >
          <div className="w-[47.8%] max-[1199px]:w-[45%] max-[991px]:mt-[50px] max-[991px]:w-full max-[991px]:text-center">
            <div className="pb-[5px] max-[991px]:pb-[10.4px] min-[1200px]:ml-[-60px]">
              <Image
                className="h-auto w-full"
                src={hiringCallout.image.src}
                alt={hiringCallout.image.alt}
                width={hiringCallout.image.width}
                height={hiringCallout.image.height}
                sizes="(max-width: 991px) calc(100vw - 40px), 605px"
              />
            </div>
          </div>

          <div className="mt-[65px] w-[47%] max-[1199px]:mt-0 max-[1199px]:w-1/2 max-[991px]:w-full max-[991px]:text-center">
            <h2 className="mb-[10px] text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
              {hiringCallout.title}
            </h2>
            <p className="mb-[30px] text-[18px] leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
              {hiringCallout.description}
            </p>
            <div className="h-[54px] max-[991px]:h-[52.4px]">
              <ButtonLink
                className="!min-h-[49px] !px-6 !py-[15px] !text-base !leading-[normal] max-[991px]:!min-h-[42px] max-[991px]:!py-3 max-[991px]:!text-sm"
                href={hiringCallout.href}
                variant="primary"
              >
                {hiringCallout.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
