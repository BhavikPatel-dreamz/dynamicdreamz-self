import Image from "next/image";
import Link from "next/link";

import { footerAwards, footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 26 20" width="26" height="20">
      <path d="M2 2h22v16H2V2Zm1 1 10 8 10-8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 25 25" width="25" height="25">
      <path d="M7 2 3.5 5.5c-1.4 1.4-.8 4.8 3.8 9.4s8 5.2 9.4 3.8l3.5-3.5-4-4-2.5 2.5c-1.6-.6-3.6-2.6-4.2-4.2L12 7 7 2Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
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

function ContactDetails() {
  return (
    <div className="footer-contact">
      <h3>Connect with us</h3>
      <address>
        <a href={`mailto:${siteConfig.email}`}>
          <MailIcon />
          <span>{siteConfig.email}</span>
        </a>
        <a href={siteConfig.phoneHref}>
          <PhoneIcon />
          <span>{siteConfig.phoneDisplay}</span>
        </a>
      </address>
      <div className="footer-social-links">
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Dynamic Dreamz on LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
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
    <nav className="footer-menu" aria-label={`${group.label} links`}>
      <h3>{group.label}</h3>
      <ul>
        {group.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-desktop">
        <div className="footer-column">
          <FooterMenu index={0} />
          <ContactDetails />
        </div>
        <FooterMenu index={1} />
        <FooterMenu index={2} />
        <div className="footer-column footer-column-stacked">
          <FooterMenu index={3} />
          <FooterMenu index={4} />
          <FooterMenu index={5} />
        </div>
      </div>

      <div className="container footer-mobile">
        <ContactDetails />
        <div className="footer-mobile-menus">
          {footerNavigation.map((group) => (
            <details key={group.label}>
              <summary>
                <span>{group.label}</span>
                <span aria-hidden="true">+</span>
              </summary>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>

      <div className="container footer-awards" aria-label="Partner and review profiles">
        {footerAwards.map((award) => (
          <a
            href={award.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            key={award.src}
            aria-label={award.alt}
          >
            <Image
              src={award.src}
              alt={award.alt}
              width={award.width}
              height={award.height}
            />
          </a>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>
          © 2026 <Link href="/">{siteConfig.legalName}.</Link> All rights reserved.
        </p>
        <div>
          <Link href="/terms-of-service/">Terms of Service</Link>
          <span aria-hidden="true">|</span>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
