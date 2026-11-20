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
        <p>About Mahin</p>
      </div>

      <div className="about-page-grid">
        <div className="about-page-copy">
          <h1>
            Curious by nature.
            <span className="about-serif">Product-minded by practice.</span>
          </h1>
          <p className="about-page-lead">
            I&apos;m A. Mahin — an independent product builder from Bangladesh.
          </p>
          <p>
            I work across product thinking, interface design, and software
            engineering. I enjoy taking an unclear idea, finding the problem
            worth solving, and shaping it into a product with a clear purpose.
          </p>
          <p>
            My design background makes me attentive to how software feels and
            how people move through it. Engineering gives me the tools to make
            those decisions real, connect the interface to dependable systems,
            and take responsibility for what ships.
          </p>
          <p>
            I value resilience, adaptability, and autonomy. They help me keep
            learning, change direction when evidence calls for it, and stay
            accountable for the result.
          </p>
          <div className="about-page-tags" aria-label="Areas of work">
            <span>Product direction</span>
            <span>Interface design</span>
            <span>Frontend engineering</span>
            <span>Mobile products</span>
          </div>
          <a className="button button-primary" href={"mailto:" + site.email}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="about-page-photo">
          <Image
            alt="Portrait of A. Mahin wearing clear glasses"
            height={864}
            sizes="(max-width: 760px) 250px, 320px"
            src="/images/mahin-portrait.webp"
            width={720}
          />
          <figcaption>A. Mahin · Dhaka, Bangladesh</figcaption>
        </figure>
      </div>

      <Link className="text-link about-page-back" href="/">
        ← Back to home
      </Link>
    </article>
  );
}
