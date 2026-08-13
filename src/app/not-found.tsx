import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="grid min-h-[760px] place-items-center px-0 pt-[150px] pb-20 text-center"
    >
      <Container>
        <p className="mb-4 font-bold text-brand-red uppercase">404 — Page not found</p>
        <h1 className="mx-auto mb-6 max-w-[760px] text-[56px] leading-[1.1] max-[767px]:text-[34px]">
          This page has moved or doesn&apos;t exist.
        </h1>
        <p className="mx-auto max-w-[640px]">
          Return to the Dynamic Dreamz homepage or tell us what you&apos;re looking
          to build.
        </p>
        <div className="mt-8 flex justify-center gap-3.5 max-[390px]:flex-col">
          <ButtonLink variant="dark" href="/">
            Back to home
          </ButtonLink>
          <ButtonLink variant="outline" href="/contact-us">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
