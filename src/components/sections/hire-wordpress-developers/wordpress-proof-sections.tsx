import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  hireWordPressAdvantages,
  hireWordPressReasons,
} from "@/content/hire-wordpress-developers";
import { cn } from "@/lib/class-names";

function advantageDividerClasses(index: number) {
  const desktopRight = index % 3 !== 2;
  const desktopBottom = index < 3;
  const tabletRight = index % 2 === 0;
  const tabletBottom = index < 4;
  const mobileBottom = index < hireWordPressAdvantages.items.length - 1;

  return cn(
    desktopRight && "border-r",
    desktopBottom && "border-b",
    desktopRight !== tabletRight &&
      (tabletRight ? "max-[991px]:border-r" : "max-[991px]:border-r-0"),
    desktopBottom !== tabletBottom &&
      (tabletBottom ? "max-[991px]:border-b" : "max-[991px]:border-b-0"),
    tabletRight && "max-[767px]:border-r-0",
    tabletBottom !== mobileBottom &&
      (mobileBottom ? "max-[767px]:border-b" : "max-[767px]:border-b-0"),
  );
}

export function WordPressReasonsSection() {
  return (
    <section className="pt-0 pb-20 max-[991px]:pb-[50px]">
      <Container>
        <h2 className="mx-auto mb-[50px] max-w-[720px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:max-w-[550px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px] h-full">
          {hireWordPressReasons.heading}
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-[991px]:gap-x-5 max-[767px]:grid-cols-1">
          {hireWordPressReasons.items.map((item) => (
            <article
              className="text-content flex items-center rounded-[15px] border-[1.5px] border-[#efefef] bg-white px-8 py-[33px] max-[1199px]:p-5 max-[991px]:items-start"
              key={item.description}
            >
              <Image
                alt={item.iconAlt}
                className="mr-5 size-[50px] shrink-0 object-contain max-[1199px]:mr-[15px] max-[1199px]:size-[45px] max-[991px]:mt-[3px] max-[991px]:size-10"
                height={52}
                src={item.icon}
                width={52}
              />
              <p className="lg:text-lg text-base leading-[27px] font-medium text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WordPressAdvantagesSection() {
  return (
    <section className="Advantage-section pb-20 max-[991px]:pb-[60px]">
      <Container>
        <h2 className="mb-[60px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:mb-10 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
          {hireWordPressAdvantages.heading}
        </h2>

        <div className="grid grid-cols-3 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {hireWordPressAdvantages.items.map((item, index) => (
            <article
              className={cn(
                "flex flex-col items-center justify-center border-[#ececec] px-8 py-[35px] text-center max-[1199px]:px-5 max-[1199px]:py-[30px] max-[767px]:px-0 max-[767px]:py-5",
                advantageDividerClasses(index),
              )}
              key={item.title}
            >
              <Image
                alt={item.iconAlt}
                className="mb-5 size-[62px] object-contain"
                height={62}
                src={item.icon}
                width={62}
              />
              <h3 className="max-w-[260px] font-sans text-lg leading-6 font-bold text-ink">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-[46px] text-center max-[767px]:mt-[35px]">
          <ButtonLink href="/request-quote" variant="primary">
            inquire now
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
