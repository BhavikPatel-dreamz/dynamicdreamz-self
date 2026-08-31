import Image from "next/image";

import { Container } from "@/components/ui/container";
import { aboutSectionCopy, founders } from "@/content/about";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-[34px]" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="17" fill="#0A66C2" />
      <path fill="white" d="M11.7 14.2h3.1V24h-3.1v-9.8Zm1.55-4.87a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM16.73 14.2h2.98v1.34h.04c.41-.79 1.43-1.62 2.94-1.62 3.15 0 3.73 2.07 3.73 4.77V24h-3.1v-4.71c0-1.12-.02-2.57-1.57-2.57-1.57 0-1.81 1.22-1.81 2.49V24h-3.1v-9.8Z" />
    </svg>
  );
}

export function AboutFoundersSection() {
  return (
    <section data-about="founders" aria-labelledby="about-founders-title" className="pt-20 max-[1199px]:pt-[60px]">
      <Container>
        <header className="mx-auto mb-10 max-w-[680px] text-center max-[1199px]:mb-[30px] max-[992px]:mb-5">
          <h2 id="about-founders-title" className="mb-6 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
            {aboutSectionCopy.foundersTitle}
          </h2>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[1199px]:text-base max-[1199px]:leading-[30.4px]">
            {aboutSectionCopy.foundersDescription[0]}
            <br />
            {aboutSectionCopy.foundersDescription[1]}
          </p>
        </header>

        <div className="-mx-2 flex flex-wrap max-[767px]:mx-0">
          {founders.map((founder) => (
            <article className="mb-[30px] w-1/3 px-2 text-center max-[767px]:w-full max-[767px]:px-0" key={founder.name}>
              <div className="relative mb-[-5px] pb-[125%] max-[767px]:mb-0">
                <Image className="rounded-[20px] object-cover" src={founder.image} alt={founder.alt} fill sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 31vw, 370px" />
              </div>
              <div className="pt-6 pr-[29px] pl-6 max-[1199px]:px-0 max-[1199px]:pt-5 max-[992px]:pt-[15px]">
                <h3 className="mb-[5px] text-xl leading-[27px] font-bold max-[1199px]:text-[18px]">{founder.name}</h3>
                <p className="mb-4 text-[15px] leading-[22px] font-medium text-muted italic">{founder.role}</p>
                <p className="mb-4 text-base leading-6 font-medium text-muted max-[1199px]:text-[14px]">{founder.biography}</p>
                <a
                  className="mx-auto flex h-[39px] w-[34px] items-start rounded-full max-[1199px]:h-[38px] [&_circle]:transition-colors [&_circle]:duration-300 hover:[&_circle]:fill-brand-red"
                  href={founder.linkedIn}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`${founder.name} LinkedIn profile`}
                >
                  <LinkedInIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
