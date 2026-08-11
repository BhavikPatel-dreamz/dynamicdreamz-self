import Image from "next/image";

import { Container } from "@/components/ui/container";
import { departmentLeaders, keyManagers, type AboutPerson } from "@/content/about";

function TeamGrid({ people }: { people: AboutPerson[] }) {
  return (
    <div className="-mx-2 flex flex-wrap max-[767px]:mx-0">
      {people.map((person) => (
        <article className="mb-[30px] w-1/4 px-2 text-center max-[991px]:w-1/3 max-[767px]:w-full max-[767px]:px-0" key={person.name}>
          <div className="relative mb-[-5px] pb-[125%] max-[767px]:mb-0">
            <Image className="rounded-[20px] object-cover" src={person.image} alt={person.alt} fill sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) 31vw, 273px" />
          </div>
          <div className="mt-6 max-[1199px]:mt-5 max-[991px]:mt-[15px]">
            <h3 className="mb-[5px] text-xl leading-[27px] font-bold max-[1199px]:text-[18px]">{person.name}</h3>
            <p className="text-[15px] leading-[22px] font-medium text-muted italic max-[1199px]:mx-7 max-[991px]:mx-2.5 max-[767px]:mx-0">{person.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function AboutTeamSection() {
  return (
    <section data-about="team" aria-label="Dynamic Dreamz management and department leaders">
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <TeamGrid people={keyManagers} />
        <TeamGrid people={departmentLeaders} />
      </Container>
    </section>
  );
}
