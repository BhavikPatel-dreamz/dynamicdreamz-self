import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  hireWordPressAdvantages,
  hireWordPressReasons,
} from "@/content/hire-wordpress-developers";

export function WordPressReasonsSection() {
  return (
    <section className="pt-0 pb-20 max-[767px]:pb-[60px]">
      <Container>
        <h2 className="mx-auto mb-[45px] max-w-[720px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
          {hireWordPressReasons.heading}
        </h2>

        <div className="grid grid-cols-3 gap-[15px] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {hireWordPressReasons.items.map((item) => (
            <article
              className="flex min-h-[145px] items-center rounded-[15px] border-[1.5px] border-[#efefef] bg-white p-[25px] max-[1199px]:p-5 max-[767px]:min-h-0"
              key={item.description}
            >
              <Image
                alt={item.iconAlt}
                className="mr-5 size-[52px] shrink-0 object-contain max-[991px]:mr-[15px] max-[991px]:size-10"
                height={52}
                src={item.icon}
                width={52}
              />
              <p className="text-sm leading-[25px] font-normal text-muted">
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
    <section className="pb-20 max-[767px]:pb-[60px]">
      <Container>
        <h2 className="mb-[45px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:mb-[30px] max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
          {hireWordPressAdvantages.heading}
        </h2>

        <div className="grid grid-cols-3 border-t border-l border-[#ececec] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {hireWordPressAdvantages.items.map((item) => (
            <article
              className="flex min-h-[190px] flex-col items-center justify-center border-r border-b border-[#ececec] px-7 py-[30px] text-center max-[991px]:px-5 max-[767px]:min-h-0"
              key={item.title}
            >
              <Image
                alt={item.iconAlt}
                className="mb-5 size-[62px] object-contain"
                height={62}
                src={item.icon}
                width={62}
              />
              <h3 className="max-w-[260px] font-sans text-base leading-6 font-bold text-ink">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-[50px] text-center max-[767px]:mt-[35px]">
          <ButtonLink href="/request-quote" variant="primary">
            inquire now
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
