import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Get to the real problem before deciding what to build.",
  },
  {
    number: "02",
    title: "Shape",
    description: "Turn complexity into a clear product direction and usable interface.",
  },
  {
    number: "03",
    title: "Engineer",
    description: "Build the system with deliberate architecture and attention to detail.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Finish the important parts, test them, and put the work into use.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero shell" id="top">
        <div className="hero-meta" data-reveal>
          <span>INDEPENDENT PRODUCT BUILDER</span>
          <span>{site.location.toUpperCase()}</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker" data-reveal>
              PRODUCT THINKING / DESIGN / ENGINEERING
            </p>
            <h1 data-reveal>
              Make things
              <span className="hero-serif">that matter.</span>
            </h1>
            <p className="hero-summary" data-reveal>
              I turn complex ideas into thoughtful digital products — from the first sketch to working software.
            </p>
            <div className="hero-actions" data-reveal>
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={`mailto:${site.email}`}>
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-reveal>
            <div className="portrait-frame">
              <Image
                alt="Portrait of A. Mahin wearing clear glasses and a black jacket"
                className="hero-portrait"
                height={864}
                preload
                src="/images/mahin-portrait.webp"
                width={720}
                sizes="(max-width: 760px) 72vw, 360px"
              />
              <span className="portrait-index">MAHIN / 001</span>
            </div>
            <div className="portrait-note">
              <span className="availability-indicator" />
              <span>Building independently</span>
            </div>
          </div>
        </div>

        <div className="hero-bottomline" data-reveal>
          <span>DESIGN WITH INTENT. ENGINEER WITH CARE.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="cover-section shell" aria-label="Personal visual identity">
        <div className="cover-image" data-hero-art>
          <Image
            alt="Pixel-art sunset over a distant city, with icrmahin and build, design, ship lettering"
            className="cover-art"
            fill
            sizes="(max-width: 1200px) 100vw, 1160px"
            src="/images/autumn-cover.webp"
          />
        </div>
        <div className="cover-caption">
          <span>AN INDEPENDENT PRACTICE</span>
          <span>IDEAS → INTERFACES → SOFTWARE</span>
        </div>
      </section>

      <section className="work-section section shell" id="work">
        <SectionHeading
          detail="A small selection of products and explorations I have been shaping and building."
          eyebrow="01 / SELECTED WORK"
          title="Built around real problems."
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <p className="work-footnote" data-reveal>
          I publish work when there is something meaningful to show. No inflated metrics, no imaginary case studies.
        </p>
      </section>

      <section className="approach-section section" id="approach">
        <div className="shell">
          <SectionHeading
            detail="A practical loop for taking an idea from uncertainty to something people can use."
            eyebrow="02 / HOW I WORK"
            title="Think clearly. Build deliberately."
          />
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-item" data-reveal key={item.number}>
                <span className="process-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section shell" id="about">
        <div className="about-image-wrap" data-reveal>
          <Image
            alt="Pixel-art portrait of Mahin against an autumn sunset"
            className="about-pixel-art"
            height={900}
            src="/images/pixel-portrait.webp"
            width={900}
            sizes="(max-width: 760px) 100vw, 440px"
          />
          <span className="about-image-label">A SMALL WINDOW INTO MY WORLD</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow" data-reveal>03 / A LITTLE ABOUT ME</p>
          <h2 data-reveal>
            Designer by instinct.
            <span className="hero-serif">Engineer by practice.</span>
          </h2>
          <p data-reveal>
            I&apos;m Mahin, an independent product builder working across product thinking, interface design, and software engineering.
          </p>
          <p data-reveal>
            I enjoy taking an unclear idea, understanding what actually matters, and shaping it into a product that feels coherent and works reliably. My focus is on useful details, sound decisions, and finishing what I start.
          </p>
          <div className="about-principles" data-reveal>
            <span>Curiosity</span>
            <span>Clarity</span>
            <span>Autonomy</span>
          </div>
          <Link className="text-link" href="/about">
            More about my approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow eyebrow-light" data-reveal>04 / HAVE SOMETHING IN MIND?</p>
          <h2 data-reveal>
            Let&apos;s make
            <span className="contact-serif">something useful.</span>
          </h2>
          <div className="contact-bottom" data-reveal>
            <p>Have a product to shape or a problem worth solving? Tell me what you&apos;re working on.</p>
            <a className="button button-light" href={`mailto:${site.email}`}>
              {site.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
