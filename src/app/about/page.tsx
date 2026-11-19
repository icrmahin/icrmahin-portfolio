import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "More about A. Mahin's approach to product thinking, interface design, and software engineering.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — " + site.name,
    description: "The person and practice behind icrmahin.",
    url: getSiteUrl() + "/about",
    images: ["/images/mahin-portrait.webp"],
  },
};

export default function AboutPage() {
  return (
    <article className="about-page shell">
      <div className="about-page-topline">
        <p className="eyebrow">ABOUT / THE PERSON BEHIND THE WORK</p>
        <span className="hand-note">a few words about me.</span>
      </div>

      <div className="about-page-grid">
        <div className="about-page-copy">
          <p className="sticker sticker-yellow">A. MAHIN / DHAKA</p>
          <h1>
            Curious by nature.
            <span className="about-serif">Product-minded by practice.</span>
          </h1>
          <p className="about-page-lead">
            I&apos;m A. Mahin — an independent product builder from Bangladesh.
          </p>
          <p>
            I work across product thinking, interface design, and software
            engineering. I like the part where a vague idea becomes a clear
            problem, a useful interface, and eventually a working product.
          </p>
          <p>
            My design background makes me attentive to how software feels.
            Engineering gives me the tools to make those ideas real. I want to
            own the full process — from the first product decision through
            implementation and release — while staying honest about what each
            project actually needs.
          </p>
          <p>
            I value resilience, adaptability, and autonomy. They remind me to
            keep learning, adjust when the evidence changes, and take
            responsibility for the result.
          </p>
          <div className="about-page-tags">
            <span>Product thinking</span>
            <span>Interface design</span>
            <span>Frontend engineering</span>
            <span>Mobile products</span>
          </div>
          <a className="button button-primary" href={"mailto:" + site.email}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-page-photo" data-reveal>
          <span className="photo-tape" aria-hidden="true" />
          <Image
            alt="Portrait of A. Mahin wearing clear glasses"
            height={864}
            sizes="(max-width: 760px) 86vw, 430px"
            src="/images/mahin-portrait.webp"
            width={720}
          />
          <span className="portrait-index">MAHIN / DHAKA</span>
        </div>
      </div>

      <Link className="text-link about-page-back" href="/">
        ← Back to home
      </Link>
    </article>
  );
}
