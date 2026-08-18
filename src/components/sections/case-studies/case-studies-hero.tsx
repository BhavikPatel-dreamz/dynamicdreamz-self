import { Container } from "@/components/ui/container";
import { caseStudiesContent } from "@/content/case-studies";

export function CaseStudiesHero() {
  const { hero } = caseStudiesContent;

  return (
    <section className="inner-hero-sec relative overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-[200px] pb-[130px] max-[991px]:pt-[170px] max-[991px]:pb-[80px]">
      <Container className="min-[1200px]:max-w-[1140px] min-[1300px]:!max-w-[1240px]">
        <div className="inner-hero-content mx-auto max-w-[770px] text-center">
          <h1 className="mb-6 inline-block font-montserrat text-[50px] font-bold leading-[66px] tracking-[-1px] text-[#090909] max-[991px]:text-[38px] max-[991px]:leading-[60px] max-[767px]:text-[28px] max-[767px]:leading-[40px]">
            {hero.title}
          </h1>
          <p className="m-0 font-sans text-[18px] font-medium leading-[34.2px] text-[#535353] max-[767px]:text-[16px] max-[767px]:leading-[28px]">
            {hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
