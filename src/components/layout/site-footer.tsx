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
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
      <circle cx="19.5" cy="19.5" r="19.5" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6027 23.776C27.6027 24.2785 27.5037 24.7761 27.3114 25.2404C27.1191 25.7047 26.8372 26.1265 26.4819 26.4819C26.1265 26.8372 25.7047 27.1191 25.2404 27.3114C24.7761 27.5037 24.2785 27.6027 23.776 27.6027H15.3573C14.8548 27.6027 14.3572 27.5037 13.8929 27.3114C13.4287 27.1191 13.0068 26.8372 12.6515 26.4819C12.2961 26.1265 12.0143 25.7047 11.822 25.2404C11.6296 24.7761 11.5307 24.2785 11.5307 23.776V15.3573C11.5307 14.3424 11.9338 13.3691 12.6515 12.6515C13.3691 11.9338 14.3424 11.5307 15.3573 11.5307H23.776C24.2785 11.5307 24.7761 11.6296 25.2404 11.822C25.7047 12.0143 26.1265 12.2961 26.4819 12.6515C26.8372 13.0068 27.1191 13.4287 27.3114 13.8929C27.5037 14.3572 27.6027 14.8548 27.6027 15.3573V23.776ZM17.0155 15.7486C17.7706 15.244 18.6585 14.9747 19.5667 14.9747C20.7845 14.9747 21.9525 15.4585 22.8137 16.3196C23.6749 17.1808 24.1587 18.3488 24.1587 19.5667C24.1587 20.4749 23.8894 21.3627 23.3848 22.1178C22.8802 22.873 22.163 23.4616 21.3239 23.8091C20.4849 24.1567 19.5616 24.2476 18.6708 24.0704C17.7801 23.8933 16.9618 23.4559 16.3196 22.8137C15.6774 22.1715 15.2401 21.3533 15.0629 20.4625C14.8857 19.5718 14.9767 18.6485 15.3242 17.8094C15.6718 16.9703 16.2603 16.2531 17.0155 15.7486ZM25.4959 15.2298C25.622 15.041 25.6893 14.8191 25.6893 14.592C25.6893 14.2875 25.5684 13.9955 25.3531 13.7802C25.1378 13.5649 24.8458 13.444 24.5413 13.444C24.3143 13.444 24.0923 13.5113 23.9035 13.6375C23.7148 13.7636 23.5676 13.9429 23.4807 14.1527C23.3938 14.3624 23.3711 14.5933 23.4154 14.816C23.4597 15.0387 23.569 15.2432 23.7296 15.4038C23.8901 15.5643 24.0947 15.6736 24.3174 15.7179C24.5401 15.7622 24.7709 15.7395 24.9807 15.6526C25.1904 15.5657 25.3697 15.4186 25.4959 15.2298Z"
        fill="#F7F4E9"
      />
      <path
        d="M19.5667 22.628C18.9612 22.628 18.3693 22.4485 17.8659 22.1121C17.3624 21.7757 16.9701 21.2976 16.7384 20.7382C16.5067 20.1788 16.446 19.5633 16.5642 18.9694C16.6823 18.3756 16.9738 17.8301 17.402 17.402C17.8301 16.9738 18.3756 16.6823 18.9694 16.5642C19.5633 16.446 20.1788 16.5067 20.7382 16.7384C21.2976 16.9701 21.7757 17.3624 22.1121 17.8659C22.4485 18.3693 22.628 18.9612 22.628 19.5667C22.6255 20.3778 22.3021 21.155 21.7286 21.7286C21.155 22.3021 20.3778 22.6255 19.5667 22.628Z"
        fill="#F7F4E9"
      />
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
          <span className="mr-[9px] flex h-8 w-8 shrink-0 items-center justify-center max-[767px]:mr-[5px]">
            <PhoneIcon />
          </span>
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </address>
      <div className={cn("flex gap-3.5 [&_svg]:h-[39px] [&_svg]:w-[39px]", mobile ? "mt-[30px] max-[767px]:mt-5 max-[767px]:[&_svg]:h-8 max-[767px]:[&_svg]:w-8" : "mt-[30px]")}>
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
    <footer className="min-h-213 bg-cream text-ink max-[991px]:min-h-[1023.7px] max-[767px]:min-h-[978.3px]">
      <Container footer className="hidden grid-cols-[240px_545px_260px] justify-between pt-15 pb-0 min-[1200px]:grid">
        <div className="flex flex-col">
          <FooterMenu index={0} />
          <ContactDetails />
        </div>
        <div className="flex justify-between gap-11.25 [&>nav:first-child]:w-60 [&>nav:last-child]:w-66.25">
          <FooterMenu index={1} />
          <FooterMenu index={2} />
        </div>
        <div className="flex flex-col gap-8">
          <FooterMenu index={3} />
          <FooterMenu index={4} />
          <FooterMenu index={5} />
        </div>
      </Container>

      <Container footer className="hidden grid-cols-3 gap-x-11.25 gap-y-9.5 pt-15 max-[1199px]:pt-10 pb-0 min-[992px]:max-[1199px]:grid">
        <div className="flex flex-col">
          <FooterMenu index={0} />
          <ContactDetails />
        </div>
        <FooterMenu index={1} />
        <FooterMenu index={2} />
        <FooterMenu index={3} />
        <FooterMenu index={4} />
        <FooterMenu index={5} />
      </Container>

      <Container footer className="hidden min-h-[631.3px] pt-10 max-[991px]:block max-[767px]:min-h-0">
        <ContactDetails mobile />
        <div className="mt-5">
          {footerNavigation.map((group) => (
            <details className="group/footer border-b border-ink/10" key={group.label}>
              <summary className="flex cursor-pointer items-center justify-between py-4.5 text-base leading-[1.66] font-bold">
                <span>{group.label}</span>
                <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
                  <span className="absolute top-1.25 left-0 h-0.5 w-3 bg-black" />
                  <span className="absolute top-0 left-1.25 h-3 w-0.5 bg-black transition-opacity duration-300 group-open/footer:opacity-0" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-in-out group-open/footer:grid-rows-[1fr]">
                <div className="min-h-0 overflow-hidden">
                  <ul className="m-0 list-none p-0 pb-4.5">
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
        className="grid grid-cols-6 gap-3 pt-13.75 pb-0 min-[768px]:max-[991px]:grid-cols-2 max-[991px]:pt-8.75 max-[767px]:grid-cols-2 max-[767px]:pt-7.5"
        aria-label="Partner and review profiles"
      >
        {footerAwards.map((award) => (
          <a
            className="flex items-center justify-center rounded-[20px] border border-[#efefef]/20 bg-white px-4.5 py-4  max-[991px]:rounded-[10px] max-[767px]:px-3.25 max-[767px]:1.25"
            href={award.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            key={award.src}
            aria-label={award.alt}
          >
            <Image
              className="object-contain"
              src={award.src}
              alt={award.alt}
              width={award.width}
              height={award.height}
            />
          </a>
        ))}
      </Container>

      <Container footer className="flex items-center justify-between pt-16 md:pt-16 pb-9.75 md:pb-5 min-[768px]:max-[991px]:min-h-[90.4px] min-[768px]:max-[991px]:[&_a]:leading-[30.4px] min-[768px]:max-[991px]:[&_p]:leading-[30.4px] max-[991px]:pt-10 max-[991px]:pb-5 max-[767px]:min-h-0 max-[767px]:flex-col max-[767px]:justify-center max-[767px]:3.75 max-[767px]:border-t max-[767px]:border-[#efefef]/20 max-[767px]:text-center">
        <p className="text-sm leading-5 font-normal text-ink max-[767px]:leading-5">
          © 2026 <Link className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href="/">{siteConfig.legalName}.</Link> All rights reserved.
        </p>
        <div className="flex max-[767px]:mt-2.5">
          <Link className="relative mr-2.5 inline-block pr-3.5 text-sm leading-5 font-normal text-ink transition-[color,opacity] duration-300 after:absolute after:-top-px after:right-0 after:content-['|'] hover:text-[#282828] hover:opacity-80 focus-visible:text-brand-red focus-visible:opacity-80" href="/terms-of-service/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>
          <Link className="inline-block text-sm leading-5 font-normal text-ink transition-[color,opacity] duration-300 hover:text-[#282828] hover:opacity-80 focus-visible:text-brand-red focus-visible:opacity-80" href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
