import Image from "next/image";
import Link from "next/link";

import { ExpertiseAccordion } from "@/components/sections/expertise-accordion";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import {
  clientLogos,
  companyStats,
  insights,
  integrationLogoRows,
  mobileClientLogoRows,
  projects,
  proofLogos,
  showcaseImages,
  type ImageItem,
  type Project,
} from "@/content/home";
import { siteConfig } from "@/data/site";

function DiagonalArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
      <path
        d="M3 13 13 3M6 3h7v7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ClientLogo({ logo, decorative = false }: { logo: ImageItem; decorative?: boolean }) {
  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
    />
  );
}

function ShowcaseSet({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="showcase-set" aria-hidden={decorative || undefined}>
      <div className="showcase-item showcase-item-wide">
        <Image
          src={showcaseImages[0].src}
          alt={decorative ? "" : showcaseImages[0].alt}
          width={showcaseImages[0].width}
          height={showcaseImages[0].height}
          sizes="(max-width: 767px) 362px, 548px"
        />
      </div>
      <div className="showcase-item showcase-item-pair">
        {[showcaseImages[1], showcaseImages[2]].map((image) => (
          <span key={image.src}>
            <Image
              src={image.src}
              alt={decorative ? "" : image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 767px) 105px, 266px"
            />
          </span>
        ))}
      </div>
      {showcaseImages.slice(3).map((image) => (
        <div className="showcase-item showcase-item-wide" key={image.src}>
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 362px, 548px"
          />
        </div>
      ))}
    </div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === "video") {
    return (
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
        <source src={project.media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={project.media.src}
      alt={project.media.alt}
      width={668}
      height={469}
      sizes="(max-width: 767px) calc(100vw - 50px), 50vw"
    />
  );
}

function ProjectList({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="project-list" aria-hidden={decorative || undefined}>
      {projects.map((project) => (
        <a
          className="project-card"
          key={project.name}
          href={project.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          tabIndex={decorative ? -1 : undefined}
        >
          <span className="project-image">
            <ProjectMedia project={project} />
          </span>
          <span className="project-title">
            {project.name}
            <DiagonalArrowIcon />
          </span>
        </a>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-inner">
          <p className="hero-badge">
            <span>EST. 2006</span>
            <span>Shopify Platinum Partner</span>
          </p>
          <h1>Shopify Plus &amp; Complete Shopify Solutions for Global Brands and Agencies</h1>
          <p className="hero-copy">
            Dynamic Dreamz helps DTC brands, B2B merchants and agencies build,
            migrate and scale on Shopify with expertise in custom development,
            B2B, checkout customization, integrations, CRO and ongoing support.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href={siteConfig.quotePath}>
              Book a discovery call
            </Link>
            <Link className="button button-outline" href="/our-work/">
              View our Shopify work
            </Link>
          </div>
          <div className="proof-grid" aria-label="Partnerships and independent review profiles">
            {proofLogos.map((logo) => (
              <a
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-section">
        <div className="container">
          <div className="brand-heading">
            <h2>Partnering with Ambitious Brands</h2>
            <p>
              Selected brands our teams have supported across Shopify, Shopify
              Plus and digital commerce.
            </p>
          </div>
          <div className="client-logo-grid">
            {clientLogos.map((logo) => (
              <div className="client-logo" key={logo.src}>
                <ClientLogo logo={logo} />
              </div>
            ))}
          </div>
        </div>
        <div className="client-logo-marquee" aria-hidden="true">
          {mobileClientLogoRows.map((row, index) => (
            <div className={`client-logo-row row-${index + 1}`} key={index}>
              {[0, 1, 2].map((set) => (
                <div className="client-logo-row-set" key={set}>
                  {row.map((logo) => (
                    <span key={`${set}-${logo.src}`}>
                      <ClientLogo logo={logo} decorative />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="agency-section">
        <div className="container">
          <div className="agency-card">
            <div className="agency-content">
              <h2>Globally Trusted Web &amp; App Development Agency</h2>
              <p>
                With sharp custom design, smooth development, and long-term
                support, build a brand that scales worldwide.
              </p>
              <ul className="stats-grid">
                {companyStats.map((stat) => (
                  <li key={stat.label}>
                    <Image src={stat.icon} alt="" width={42} height={42} aria-hidden="true" />
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="showcase-window">
              <div className="showcase-track">
                <ShowcaseSet />
                <ShowcaseSet decorative />
                <ShowcaseSet decorative />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container expertise-grid">
          <div className="expertise-intro">
            <h2>Our Expertise</h2>
            <p>
              From strategy and design to development and long-term support, we
              help brands build, scale, and maintain high-performing digital
              products. Our expertise spans Shopify development, custom
              websites, and mobile applications, with a strong focus on
              performance, usability, and business growth.
            </p>
            <p>
              To accelerate delivery without compromising quality, our teams
              use modern AI-powered tools such as Cursor, ChatGPT, Claude,
              Lovable, Bolt, and n8n, alongside proven development processes.
            </p>
          </div>
          <ExpertiseAccordion />
        </div>
      </section>

      <section className="work-section">
        <div className="container work-heading">
          <h2>Selected Shopify Plus &amp; Enterprise Ecommerce Work</h2>
          <p>
            Explore Shopify and Shopify Plus projects across beauty, fashion,
            B2B, wholesale, international commerce and large-catalogue
            ecommerce.
          </p>
        </div>
        <div className="project-marquee" aria-label="Selected ecommerce work">
          <div className="project-track">
            <ProjectList />
            <ProjectList decorative />
          </div>
        </div>
        <div className="section-action">
          <Link className="button button-light" href="/our-work/">
            View our work
          </Link>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonial-heading">
            <h2>Brands That Have Grown With Us</h2>
            <p>
              Hear from founders, ecommerce teams and agency partners who rely
              on Dynamic Dreamz for Shopify builds, migrations, mobile apps,
              ongoing development and long-term technical support.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="integrations-section">
        <div className="container">
          <div className="integrations-heading">
            <h2>Platforms and Integrations We Work With</h2>
            <p>
              Our teams work across the Shopify ecosystem to implement
              subscriptions, reviews, retention, customer support, search, B2B,
              payments and operational integrations.
            </p>
          </div>
        </div>
        <div className="integration-marquee" aria-label="Platforms and integrations">
          {integrationLogoRows.map((row, index) => (
            <div className={`integration-row integration-row-${index + 1}`} key={index}>
              {[0, 1, 2].map((set) => (
                <div className="integration-logo-set" key={set} aria-hidden={set > 0 || undefined}>
                  {row.map((logo) => (
                    <span key={`${set}-${logo.src}`}>
                      <ClientLogo logo={logo} decorative={set > 0} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="insights-section">
        <div className="container">
          <div className="insights-heading">
            <h2>Featured Shopify Insights</h2>
            <p>
              Practical guidance on Shopify Plus, migration, B2B, CRO, mobile
              commerce, performance and integrations from our in-house
              specialists.
            </p>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.href}>
                <div className="insight-inner">
                  <Link className="insight-image" href={insight.href}>
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      width={1504}
                      height={1137}
                      sizes="(max-width: 991px) 40vw, 33vw"
                    />
                  </Link>
                  <div className="insight-content">
                    <div className="insight-meta">
                      <Link href="/category/shopify/">
                        <span>Shopify</span>
                      </Link>
                      <time dateTime={insight.date}>{insight.displayDate}</time>
                    </div>
                    <h3>
                      <Link href={insight.href}>{insight.title}</Link>
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button-dark" href="/blog/">
              View all blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
