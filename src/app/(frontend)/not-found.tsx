import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { notFoundCopy } from "@/content/common";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="grid min-h-[760px] place-items-center px-0 pt-[150px] pb-20 text-center"
    >
      <Container>
        <p className="mb-4 font-bold text-brand-red uppercase">{notFoundCopy.eyebrow}</p>
        <h1 className="mx-auto mb-6 max-w-[760px] text-[56px] leading-[1.1] max-[767px]:text-[34px]">
          {notFoundCopy.title}
        </h1>
        <p className="mx-auto max-w-[640px]">
          {notFoundCopy.description}
        </p>
        <div className="mt-8 flex justify-center gap-3.5 max-[390px]:flex-col">
          <ButtonLink variant="dark" href="/">
            {notFoundCopy.homeCta}
          </ButtonLink>
          <ButtonLink variant="outline" href="/contact-us">
            {notFoundCopy.contactCta}
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
