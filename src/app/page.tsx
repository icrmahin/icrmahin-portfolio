import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="hero-kicker">
            Product thinking <span aria-hidden="true">·</span> Interface design{" "}
            <span aria-hidden="true">·</span> Engineering
          </p>
          <h1>
            Make the useful thing <em>real.</em>
          </h1>
          <p className="hero-summary">
            I&apos;m Mahin — an independent product builder. I work from the
            first product decision through interface design and implementation,
            turning early ideas into software people can use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
            </a>
            <Link className="text-link" href="/about">
              About Mahin <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-location">Based in Dhaka, Bangladesh</p>
        </div>

        <figure className="hero-figure">
          <Image
            alt="A. Mahin wearing clear glasses outdoors"
            className="hero-portrait"
            height={864}
            priority
            sizes="(max-width: 760px) 220px, 360px"
            src="/images/mahin-portrait.webp"
            width={720}
          />
          <figcaption>
            <span>A. Mahin</span>
            <span>Product builder</span>
          </figcaption>
        </figure>
      </section>

      <section className="work-section shell" id="work">
        <header className="section-heading">
          <div>
            <h2>Selected work</h2>
            <p>
              Products and tools shaped through product decisions, interface
              design, and implementation.
            </p>
          </div>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="practice-section">
        <div className="shell practice-inner">
          <div className="practice-copy">
            <h2>Good product work starts before the interface.</h2>
            <p>
              I care about understanding the real problem, choosing a clear
              direction, and making the experience and the underlying system
              work together. The visual details matter, but they have to serve
              something useful.
            </p>
            <Link className="text-link" href="/about">
              How I work <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="practice-focus">
            <div>
              <h3>Product direction</h3>
              <p>Clarifying the user, the business need, and the constraints.</p>
            </div>
            <div>
              <h3>Interface design</h3>
              <p>Shaping clear flows, readable layouts, and useful feedback.</p>
            </div>
            <div>
              <h3>Engineering</h3>
              <p>Building the product and the systems that make it dependable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div>
          <h2>Have a product to build?</h2>
          <p>
            Tell me what you are trying to make, who it is for, and where you
            are stuck. We can start with the problem.
          </p>
        </div>
        <a className="button button-primary" href={"mailto:" + site.email}>
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
