import Image from "next/image";
import Link from "next/link";

import { footerAwards, footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

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

function ContactDetails() {
  return (
    <div className="footer-contact">
      <h3>Connect with us</h3>
      <address>
        <a href={`mailto:${siteConfig.email}`}>
          <span className="footer-contact-icon">
            <MailIcon />
          </span>
          <span>{siteConfig.email}</span>
        </a>
        <a href={siteConfig.phoneHref}>
          <span className="footer-contact-icon">
            <PhoneIcon />
          </span>
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
        <div className="footer-service-columns">
          <FooterMenu index={1} />
          <FooterMenu index={2} />
        </div>
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
                <span className="footer-accordion-icon" aria-hidden="true" />
              </summary>
              <div className="footer-mobile-menu-panel">
                <div className="footer-mobile-menu-panel-inner">
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
          <Link href="/terms-of-service/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>
          <Link href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
