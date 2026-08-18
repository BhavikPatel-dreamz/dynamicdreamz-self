import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerAwards, footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 17 14" width="17" height="14">
      <path d="M15 0H1.667C.75 0 0 .75 0 1.667v10c0 .916.75 1.666 1.667 1.666H15c.917 0 1.667-.75 1.667-1.666v-10C16.667.75 15.917 0 15 0Zm-.333 3.542L9.217 6.95a1.67 1.67 0 0 1-1.767 0L2 3.542a.7.7 0 0 1 .75-1.2l5.583 3.491 5.584-3.491a.7.7 0 0 1 .75 1.2Z" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 19" width="14" height="19">
      <path d="m2.18.555 1.506-.463a2.14 2.14 0 0 1 2.57 1.192l1.056 2.39a2.14 2.14 0 0 1-.493 2.486L5.21 7.685c-.216.208-.052 1.019.736 2.407.788 1.39 1.398 1.939 1.679 1.853l2.107-.655a2.14 2.14 0 0 1 2.361.807l1.502 2.117a2.14 2.14 0 0 1-.264 2.855l-1.16 1.118a2.91 2.91 0 0 1-2.861.683c-2.433-.757-4.686-3.005-6.79-6.712C.413 8.446-.384 5.315.171 2.757A2.91 2.91 0 0 1 2.18.555Z" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <rect width="20" height="20" rx="4" fill="currentColor" />
      <path d="M5 8h2.2v7H5V8Zm1.1-3.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM8.5 8h2.1v1c.4-.7 1.2-1.2 2.3-1.2 2.2 0 2.6 1.4 2.6 3.3V15h-2.2v-3.5c0-1.2-.3-2-1.2-2-1 0-1.4.8-1.4 2V15H8.5V8Z" fill="#f7f4e9" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
      <rect width="18" height="18" rx="5" fill="currentColor" />
      <circle cx="9" cy="9" r="3.2" fill="none" stroke="#f7f4e9" strokeWidth="1.8" />
      <circle cx="13.4" cy="4.6" r="1" fill="#f7f4e9" />
    </svg>
  );
}

function ContactDetails() {
  return (
    <div className="border-t border-ink/10 pt-[15px] max-[991px]:border-0 max-[991px]:pt-0">
      <address className="flex flex-col gap-[15px] not-italic">
        <a className="flex items-center text-sm leading-5 font-medium text-[rgba(40,40,40,0.8)] transition-colors duration-300 hover:text-[#282828] focus-visible:text-[#282828]" href={`mailto:${siteConfig.email}`}>
          <span className="mr-2.5 flex w-[18px] shrink-0 items-center justify-center text-[#111111]"><MailIcon /></span>
          <span>{siteConfig.email}</span>
        </a>
        <a className="flex items-center text-sm leading-5 font-medium text-[rgba(40,40,40,0.8)] transition-colors duration-300 hover:text-[#282828] focus-visible:text-[#282828]" href={siteConfig.phoneHref}>
          <span className="mr-2.5 flex w-[18px] shrink-0 items-center justify-center text-[#111111]"><PhoneIcon /></span>
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </address>
      <div className="mt-5 flex items-center gap-2.5">
        <a className="flex transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href={siteConfig.social.linkedin} target="_blank" rel="nofollow noopener noreferrer" aria-label="Dynamic Dreamz on LinkedIn"><LinkedinIcon /></a>
        <a className="flex transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href={siteConfig.social.instagram} target="_blank" rel="nofollow noopener noreferrer" aria-label="Dynamic Dreamz on Instagram"><InstagramIcon /></a>
      </div>
    </div>
  );
}

function FooterMenu({ index }: { index: number }) {
  const group = footerNavigation[index];
  return (
    <nav aria-label={`${group.label} links`}>
      <h3 className="mb-2.5 font-sans text-lg leading-[30px] font-bold">{group.label}</h3>
      <ul className="m-0 list-none p-0">
        {group.links.map((link, linkIndex) => (
          <li className={linkIndex > 0 ? "mt-2" : undefined} key={`${link.label}-${link.href}`}>
            <Link className="text-sm leading-[166.182%] font-medium tracking-[-0.28px] text-ink/80 capitalize transition-colors duration-300 hover:text-ink focus-visible:text-ink" href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PartnershipMenus() {
  return <div className="flex flex-col gap-[30px]"><FooterMenu index={3} /><FooterMenu index={4} /></div>;
}

function MoreServices() {
  return <div className="flex flex-col gap-[15px]"><FooterMenu index={5} /><ContactDetails /></div>;
}

export function SiteFooter() {
  return (
    <footer className="bg-cream text-ink">
      <Container className="hidden pt-15 min-[1200px]:flex min-[1200px]:justify-between">
        <div className="w-[172px]"><FooterMenu index={0} /></div>
        <div className="w-[200px] min-[1400px]:w-[238px]"><FooterMenu index={1} /></div>
        <div className="w-[200px] min-[1400px]:w-[235px]"><FooterMenu index={2} /></div>
        <div className="w-[259px]"><PartnershipMenus /></div>
        <div className="w-[220px]"><MoreServices /></div>
      </Container>

      <Container className="hidden grid-cols-3 gap-x-10 gap-y-[38px] pt-10 min-[992px]:max-[1199px]:grid">
        <FooterMenu index={0} /><FooterMenu index={1} /><FooterMenu index={2} /><PartnershipMenus /><MoreServices />
      </Container>

      <Container className="hidden pt-10 max-[991px]:block">
        <ContactDetails />
        <div className="mt-5">
          {footerNavigation.map((group) => (
            <details className="group/footer border-b border-ink/10" key={group.label}>
              <summary className="flex cursor-pointer list-none items-center justify-between py-[18px] text-base leading-[1.66] font-bold [&::-webkit-details-marker]:hidden">
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
                      <li className="leading-[30.4px]" key={`${link.label}-${link.href}`}>
                        <Link className="text-sm leading-5 font-medium text-ink/80 capitalize transition-colors duration-300 hover:text-ink focus-visible:text-ink" href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>

      <Container className="grid grid-cols-6 gap-3 pt-[50px] max-[991px]:grid-cols-2 max-[991px]:gap-5 max-[991px]:pt-[35px] max-[767px]:gap-4 max-[767px]:pt-[30px]" aria-label="Partner and review profiles">
        {footerAwards.map((award) => (
          <a className="flex h-[81px] items-center justify-center rounded-[20px] bg-white px-[18px] py-4 max-[991px]:rounded-[10px] max-[767px]:h-[60px] max-[767px]:border max-[767px]:border-[#efefef]/20 max-[767px]:px-[13px] max-[767px]:py-[5px]" href={award.href} target="_blank" rel="nofollow noopener noreferrer" key={award.src} aria-label={award.alt}>
            <Image src={award.src} alt={award.alt} width={award.width} height={award.height} />
          </a>
        ))}
      </Container>

      <Container>
        <div className="flex items-center justify-between pt-[30px] pb-[15px] max-[991px]:pt-10 max-[991px]:pb-5 max-[767px]:mt-10 max-[767px]:flex-col max-[767px]:justify-center max-[767px]:border-t max-[767px]:border-[#efefef]/20 max-[767px]:pt-10 max-[767px]:text-center">
          <p className="text-sm leading-5 font-normal text-ink">© 2026 <Link className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href="/">{siteConfig.legalName}.</Link> All rights reserved.</p>
          <div className="flex max-[767px]:mt-2.5">
            <Link className="relative mr-2.5 inline-block pr-3.75 text-sm leading-5 font-normal text-ink transition-colors duration-300 after:absolute after:-top-px after:right-0 after:content-['|'] hover:text-brand-red focus-visible:text-brand-red" href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
            <Link className="inline-block text-sm leading-5 font-normal text-ink transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
