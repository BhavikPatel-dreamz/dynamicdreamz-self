import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerAwards, footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 26 19" width="26" height="19">
      <path
        d="M25 2.41667v14.1666c0 .3758-.1405.7361-.3905 1.0018A1.3 1.3 0 0 1 23.6667 18H2.3333a1.3 1.3 0 0 1-.9428-.4149A1.46 1.46 0 0 1 1 16.5833V2.41667m24 0c0-.37573-.1405-.73606-.3905-1.00174A1.3 1.3 0 0 0 23.6667 1H2.3333a1.3 1.3 0 0 0-.9428.41493A1.46 1.46 0 0 0 1 2.41667m24 0L14.7067 11.5301a2.58 2.58 0 0 1-3.4134 0L1 2.41667"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 25 25" width="25" height="25">
      <path
        d="M7.316 17.686A24.5 24.5 0 0 1 1.291 8.22c-.712-1.944-.06-4.08 1.405-5.545l.907-.905a2.63 2.63 0 0 1 3.713 0l2.122 2.122a2.63 2.63 0 0 1 0 3.714l-.522.522a2.25 2.25 0 0 0 0 3.183l4.774 4.775a2.25 2.25 0 0 0 3.183 0l.523-.522a2.63 2.63 0 0 1 3.714 0l2.122 2.122a2.63 2.63 0 0 1 0 3.713l-.905.905c-1.465 1.466-3.601 2.119-5.545 1.407a24.5 24.5 0 0 1-9.466-6.025Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 39 39" width="39" height="39">
      <circle cx="19.5" cy="19.5" r="19.5" fill="currentColor" />
      <path d="M12 16.5h3.2V27H12V16.5Zm1.6-5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.7 5h3.1V18c.5-.9 1.6-1.8 3.3-1.8 3.3 0 3.9 2.1 3.9 5V27h-3.3v-5.2c0-1.8-.4-3-1.8-3-1.5 0-2 1.2-2 3V27h-3.2V16.5Z" fill="#f7f4e9" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 39 39" width="39" height="39">
      <circle cx="19.5" cy="19.5" r="19.5" fill="currentColor" />
      <rect x="11.5" y="11.5" width="16" height="16" rx="4" fill="none" stroke="#f7f4e9" strokeWidth="1.8" />
      <circle cx="19.5" cy="19.5" r="4" fill="none" stroke="#f7f4e9" strokeWidth="1.8" />
      <circle cx="24.7" cy="14.5" r="1" fill="#f7f4e9" />
    </svg>
  );
}

function ContactDetails({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={cn(!mobile && "mt-[38px]")}>
      <h3 className="mb-4 font-sans text-lg leading-[1.66182] font-bold max-[991px]:mb-[15px] max-[991px]:leading-[25.92px]">
        Connect with us
      </h3>
      <address className="flex flex-col gap-4 not-italic">
        <a
          className="flex min-h-8 items-center text-sm leading-5 font-normal text-ink transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[767px]:min-h-6"
          href={`mailto:${siteConfig.email}`}
        >
          <span className="mr-[9px] flex h-8 w-8 shrink-0 items-center justify-center max-[767px]:mr-[5px] max-[767px]:h-6 max-[767px]:w-6 [&_svg]:h-auto [&_svg]:w-6 max-[767px]:[&_svg]:w-[18px]">
            <MailIcon />
          </span>
          <span>{siteConfig.email}</span>
        </a>
        <a
          className="flex min-h-8 items-center text-sm leading-5 font-normal text-ink transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[767px]:min-h-6"
          href={siteConfig.phoneHref}
        >
          <span className="mr-[9px] flex h-8 w-8 shrink-0 items-center justify-center max-[767px]:mr-[5px] max-[767px]:h-6 max-[767px]:w-6 [&_svg]:h-auto [&_svg]:w-6 max-[767px]:[&_svg]:w-[18px]">
            <PhoneIcon />
          </span>
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </address>
      <div className={cn("flex gap-3 [&_svg]:h-[39px] [&_svg]:w-[39px]", mobile ? "mt-[30px] max-[767px]:mt-5 max-[767px]:[&_svg]:h-8 max-[767px]:[&_svg]:w-8" : "mt-[30px]")}>
        <a
          className="flex rounded-full transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Dynamic Dreamz on LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          className="flex rounded-full transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
          href={siteConfig.social.instagram}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Dynamic Dreamz on Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

function FooterMenu({ index }: { index: number }) {
  const group = footerNavigation[index];

  return (
    <nav aria-label={`${group.label} links`}>
      <h3 className="mb-4 font-sans text-lg leading-[1.66182] font-bold">{group.label}</h3>
      <ul className="m-0 list-none p-0">
        {group.links.map((link, linkIndex) => (
          <li className={cn(linkIndex > 0 && "mt-3.5")} key={link.href}>
            <Link
              className="text-sm leading-[1.66182] font-medium tracking-[-0.28px] text-ink opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="min-h-[852px] bg-cream text-ink max-[991px]:min-h-[1023.7px] max-[767px]:min-h-[978.3px]">
      <Container footer className="hidden grid-cols-[240px_545px_260px] justify-between pt-[60px] pb-0 min-[992px]:grid">
        <div className="flex flex-col">
          <FooterMenu index={0} />
          <ContactDetails />
        </div>
        <div className="flex justify-between gap-[45px] [&>nav:first-child]:w-60 [&>nav:last-child]:w-[265px]">
          <FooterMenu index={1} />
          <FooterMenu index={2} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterMenu index={3} />
          <FooterMenu index={4} />
          <FooterMenu index={5} />
        </div>
      </Container>

      <Container footer className="hidden min-h-[631.3px] pt-10 max-[991px]:block max-[767px]:min-h-0">
        <ContactDetails mobile />
        <div className="mt-5">
          {footerNavigation.map((group) => (
            <details className="group/footer border-b border-ink/10" key={group.label}>
              <summary className="flex cursor-pointer items-center justify-between py-[18px] text-base leading-[1.66] font-bold">
                <span>{group.label}</span>
                <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
                  <span className="absolute top-[5px] left-0 h-0.5 w-3 bg-black" />
                  <span className="absolute top-0 left-[5px] h-3 w-0.5 bg-black transition-opacity duration-300 group-open/footer:opacity-0" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-in-out group-open/footer:grid-rows-[1fr]">
                <div className="min-h-0 overflow-hidden">
                  <ul className="m-0 list-none p-0 pb-[18px]">
                    {group.links.map((link) => (
                      <li className="leading-[30.4px]" key={link.href}>
                        <Link
                          className="text-sm leading-5 font-normal text-[#252c15] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>

      <Container
        footer
        className="grid grid-cols-6 gap-3 pt-[55px] pb-0 min-[768px]:max-[991px]:min-h-[302px] min-[768px]:max-[991px]:grid-cols-2 max-[991px]:pt-[35px] max-[767px]:grid-cols-2 max-[767px]:pt-[30px]"
        aria-label="Partner and review profiles"
      >
        {footerAwards.map((award) => (
          <a
            className="flex h-20 items-center justify-center rounded-[20px] border border-[#efefef]/20 bg-white px-[18px] py-4 max-[991px]:h-[81px] max-[991px]:rounded-[10px] max-[767px]:h-[60px] max-[767px]:px-[13px] max-[767px]:py-[5px]"
            href={award.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            key={award.src}
            aria-label={award.alt}
          >
            <Image
              className="h-auto w-auto max-h-12 object-contain max-[767px]:max-h-10"
              src={award.src}
              alt={award.alt}
              width={award.width}
              height={award.height}
            />
          </a>
        ))}
      </Container>

      <Container footer className="flex min-h-[125px] items-center justify-between pt-16 pb-[39px] min-[768px]:max-[991px]:min-h-[90.4px] min-[768px]:max-[991px]:[&_a]:leading-[30.4px] min-[768px]:max-[991px]:[&_p]:leading-[30.4px] max-[991px]:pt-10 max-[991px]:pb-5 max-[767px]:min-h-0 max-[767px]:flex-col max-[767px]:justify-center max-[767px]:gap-[15px] max-[767px]:border-t max-[767px]:border-[#efefef]/20 max-[767px]:text-center">
        <p className="text-sm leading-5 font-normal text-ink max-[767px]:leading-5">
          © 2026 <Link className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href="/">{siteConfig.legalName}.</Link> All rights reserved.
        </p>
        <div className="flex max-[767px]:mt-2.5">
          <Link className="relative mr-2.5 inline-block pr-2.5 text-sm leading-5 font-normal text-ink transition-[color,opacity] duration-300 after:absolute after:top-[-1px] after:right-[-4px] after:content-['|'] hover:text-brand-red hover:opacity-80 focus-visible:text-brand-red focus-visible:opacity-80" href="/terms-of-service/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>
          <Link className="inline-block text-sm leading-5 font-normal text-ink transition-[color,opacity] duration-300 hover:text-brand-red hover:opacity-80 focus-visible:text-brand-red focus-visible:opacity-80" href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
