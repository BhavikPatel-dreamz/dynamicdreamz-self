import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="container">
        <p className="eyebrow">404 — Page not found</p>
        <h1>This page has moved or doesn&apos;t exist.</h1>
        <p>
          Return to the Dynamic Dreamz homepage or tell us what you&apos;re looking
          to build.
        </p>
        <div className="not-found-actions">
          <Link className="button button-dark" href="/">
            Back to home
          </Link>
          <Link className="button button-outline" href="/contact-us/">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
