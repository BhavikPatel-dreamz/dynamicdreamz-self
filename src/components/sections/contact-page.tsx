import Link from "next/link";

import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { contactPageContent } from "@/content/contact";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path
        d="M31.3304 16C31.3304 24.5629 24.4262 31.5 15.9152 31.5C7.40411 31.5 0.5 24.5629 0.5 16C0.5 7.43708 7.40411 0.5 15.9152 0.5C24.4262 0.5 31.3304 7.43708 31.3304 16Z"
        fill="white"
        stroke="#EFEFEF"
      />
      <path
        d="M18.5296 17.7422L18.1345 18.1179C18.1345 18.1179 17.194 19.0103 14.6278 16.5735C12.0616 14.1368 13.0021 13.2443 13.0021 13.2443L13.2505 13.0071C13.8645 12.4249 13.9227 11.4893 13.3868 10.8059L12.2926 9.41004C11.6292 8.56406 10.3482 8.45209 9.58837 9.17366L8.22495 10.4675C7.84893 10.8258 7.59709 11.2886 7.62748 11.8029C7.70564 13.1191 8.32916 15.9498 11.8063 19.2525C15.4945 22.7542 18.9552 22.8935 20.3698 22.7675C20.8179 22.7277 21.207 22.5104 21.5205 22.2118L22.7536 21.0407C23.5873 20.2503 23.3528 18.8942 22.2864 18.341L20.6277 17.4792C19.9278 17.116 19.0767 17.223 18.5296 17.7422Z"
        fill="#090909"
      />
    </svg>
  );
}

function DiagonalArrowIcon({ className = "ml-2.5 size-3" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path
        d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-[18px]">
      <path
        fill="currentColor"
        d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-[18px]">
      <path
        fill="currentColor"
        d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
      />
    </svg>
  );
}

export function ContactPage() {
  const { contactDetailsSection, formSection, hero, officesSection } = contactPageContent;

  return (
    <>
      {/* 1. Hero Section */}
      <section
        className="overflow-hidden bg-[#fbeed5] pt-[160px] pb-10 text-center max-[1199px]:pt-[120px] max-[991px]:pt-[110px] max-[991px]:pb-8"
        aria-labelledby="contact-page-title"
      >
        <Container>
          <div data-aos="fade-up" className="mx-auto max-w-[810px]">
            <Eyebrow align="center" className="mb-4">
              {hero.eyebrow}
            </Eyebrow>
            <h1
              id="contact-page-title"
              className="font-sans text-[50px] leading-[60px] font-bold tracking-[-1px] text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[810px] text-base leading-7 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {hero.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold uppercase max-[767px]:flex-nowrap max-[767px]:justify-start max-[767px]:overflow-x-auto max-[767px]:whitespace-nowrap max-[767px]:pb-2">
              {hero.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-[#252c15] pb-[3px] text-[#252c15] transition-colors duration-300 hover:border-brand-red hover:text-brand-red"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Message / Reach Out Section */}
      <section
        id="message"
        className="bg-[#fbeed5] pb-20 max-[991px]:pb-[60px] max-[767px]:pb-10"
        aria-labelledby="inquiry-title"
      >
        <Container>
          <div
            data-aos="fade-up"
            className="mx-auto max-w-[920px] overflow-hidden rounded-[30px] border border-[rgba(40,40,40,0.11)] bg-white shadow-[0_28px_70px_rgba(72,52,35,0.08)]"
          >
            <div className="border-b border-[rgba(40,40,40,0.11)] p-10 text-center max-[1199px]:p-[30px] max-[767px]:px-5 max-[767px]:py-[30px]">
              <Eyebrow align="center" className="mb-2">
                {formSection.eyebrow}
              </Eyebrow>
              <h2
                id="inquiry-title"
                className="mt-2 mb-2 font-sans text-[32px] leading-[42px] font-bold text-ink max-[991px]:text-[26px] max-[991px]:leading-[34px] max-[767px]:text-[22px] max-[767px]:leading-[30px]"
              >
                {formSection.title}
              </h2>
              <p className="text-base leading-7 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formSection.description}
              </p>
            </div>
            <div className="p-10 max-[1199px]:p-[30px] max-[767px]:px-5 max-[767px]:py-[30px]">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Our Offices Section */}
      <section
        id="offices"
        className="bg-[#eff4ef] py-20 max-[991px]:py-[60px] max-[767px]:py-10"
        aria-labelledby="offices-title"
      >
        <Container>
          <div
            data-aos="fade-up"
            className="mb-10 flex flex-wrap items-end justify-between max-[991px]:text-center"
          >
            <div className="w-full md:w-[48%]">
              <Eyebrow align="responsive-center" className="mb-2">
                {officesSection.eyebrow}
              </Eyebrow>
              <h2
                id="offices-title"
                className="font-sans text-[35px] leading-[48px] font-bold text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-8"
              >
                {officesSection.title}
              </h2>
            </div>
            <div className="w-full md:w-[48%] md:text-right max-[991px]:mt-3">
              <p className="text-base leading-7 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {officesSection.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] max-[991px]:gap-5 max-[767px]:grid-cols-1">
            {officesSection.offices.map((office) => (
              <article
                key={office.city}
                data-aos="fade-up"
                className="rounded-[20px] border-[1.5px] border-[#e4e4e4] bg-white p-8 max-[1199px]:p-5 max-[991px]:rounded-[12px]"
              >
                <h3 className="font-sans text-2xl leading-normal font-bold text-ink max-[991px]:text-lg">
                  {office.city}
                </h3>
                <address className="my-5 text-base leading-[26px] font-medium not-italic text-muted max-[991px]:my-3.5 max-[991px]:text-sm max-[991px]:leading-6">
                  {office.address}
                </address>
                <ul className="space-y-5 max-[991px]:space-y-3.5">
                  <li>
                    <a
                      href={office.phoneHref}
                      className="flex items-center text-base font-medium text-muted transition-colors duration-300 hover:text-ink max-[991px]:text-sm"
                    >
                      <span className="mr-2.5 shrink-0">
                        <PhoneIcon />
                      </span>
                      {office.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={office.directionsHref}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="group inline-flex items-center text-sm font-bold uppercase text-brand-red transition-colors duration-300 hover:text-ink"
                    >
                      {officesSection.directionsLabel}
                      <DiagonalArrowIcon className="ml-2.5 size-3 text-brand-red transition-colors group-hover:text-ink" />
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Contact Details Section */}
      <section
        id="contact-details"
        className="bg-white py-20 max-[991px]:py-[60px] max-[767px]:py-10"
        aria-labelledby="contact-details-title"
      >
        <Container>
          <div data-aos="fade-up" className="mb-10 text-center">
            <Eyebrow align="center" className="mb-2">
              {contactDetailsSection.eyebrow}
            </Eyebrow>
            <h2
              id="contact-details-title"
              className="font-sans text-[32px] leading-[42px] font-bold text-ink max-[991px]:text-[28px] max-[767px]:text-2xl"
            >
              {contactDetailsSection.title}
            </h2>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-[1.35fr_1.05fr_1fr_0.75fr] border-y border-[rgba(40,40,40,0.11)] max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1"
          >
            {/* Item 1: Sales */}
            <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-b max-[767px]:min-h-0 max-[767px]:border-r-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
              <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
                {contactDetailsSection.sales.label}
              </span>
              <a
                href={`mailto:${contactDetailsSection.sales.email}`}
                className="text-base leading-7 font-semibold text-ink break-words transition-colors hover:text-brand-red"
              >
                {contactDetailsSection.sales.email}
              </a>
              <a
                href={contactDetailsSection.sales.phoneHref}
                className="mt-[5px] text-sm leading-[22px] font-medium text-muted transition-colors hover:text-brand-red"
              >
                {contactDetailsSection.sales.phone}
              </a>
            </div>

            {/* Item 2: HR */}
            <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-r-0 max-[1199px]:border-b max-[767px]:min-h-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
              <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
                {contactDetailsSection.hr.label}
              </span>
              <a
                href={`mailto:${contactDetailsSection.hr.email}`}
                className="text-base leading-7 font-semibold text-ink break-words transition-colors hover:text-brand-red"
              >
                {contactDetailsSection.hr.email}
              </a>
              <a
                href={contactDetailsSection.hr.phoneHref}
                className="mt-[5px] text-sm leading-[22px] font-medium text-muted transition-colors hover:text-brand-red"
              >
                {contactDetailsSection.hr.phone}
              </a>
              <div className="mt-3">
                <Link
                  href={contactDetailsSection.hr.actionHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group inline-flex items-center text-xs font-semibold uppercase text-brand-red transition-colors hover:text-ink"
                >
                  {contactDetailsSection.hr.actionLabel}
                  <DiagonalArrowIcon className="ml-2.5 size-2.5 text-brand-red transition-colors group-hover:text-ink" />
                </Link>
              </div>
            </div>

            {/* Item 3: Discovery Call */}
            <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-b-0 max-[767px]:min-h-0 max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
              <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
                {contactDetailsSection.discoveryCall.label}
              </span>
              <Link
                href={contactDetailsSection.discoveryCall.actionHref}
                className="text-base leading-7 font-semibold text-ink transition-colors hover:text-brand-red"
              >
                {contactDetailsSection.discoveryCall.actionLabel}
              </Link>
              <span className="mt-[5px] text-sm leading-[22px] font-medium text-muted">
                {contactDetailsSection.discoveryCall.description}
              </span>
            </div>

            {/* Item 4: Social */}
            <div className="flex min-h-[138px] flex-col justify-start p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[767px]:min-h-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
              <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
                {contactDetailsSection.social.label}
              </span>
              <div className="mt-1 flex items-center gap-2.5">
                {contactDetailsSection.social.profiles.map((profile) => (
                  <div key={profile.href} className="text-center">
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={profile.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-[rgba(40,40,40,0.11)] text-ink transition-colors duration-300 hover:border-brand-red hover:text-brand-red"
                    >
                      {profile.name === "LinkedIn" ? <LinkedInIcon /> : <InstagramIcon />}
                    </a>
                    <span className="mt-[7px] block text-xs leading-normal font-medium text-muted">
                      {profile.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
