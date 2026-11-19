import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Nothing here.<span className="hero-serif">Not even a draft.</span></h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link className="button button-primary" href="/">Return home ↗</Link>
    </main>
  );
}
