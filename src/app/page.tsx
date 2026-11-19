import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

const processSteps = [
  {
    number: "01",
    label: "UNDERSTAND",
    title: "Start with the problem",
    description:
      "Clarify who the product is for, what is getting in their way, and what a useful outcome looks like.",
    tone: "practice-note-yellow",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Make the experience clear",
    description:
      "Shape the information, flows, and interface before adding complexity that the product does not need.",
    tone: "practice-note-lilac",
  },
  {
    number: "03",
    label: "ENGINEER",
    title: "Build for real use",
    description:
      "Turn the direction into reliable software, test the details, and keep improving what ships.",
    tone: "practice-note-green",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero shell" id="top">
        <div className="hero-meta" data-hero-intro="meta">
          <span className="eyebrow-pill">INDEPENDENT PRODUCT BUILDER</span>
          <span className="hero-location">{site.location.toUpperCase()}</span>
        </div>

        <div className="hero-stage">
          <div className="hero-center">
            <p className="hero-kicker" data-hero-intro="kicker">
              PRODUCT THINKING <span>/</span> DESIGN <span>/</span> ENGINEERING
            </p>

            <h1 aria-label="Mahin" data-hero-intro="title">
              <span className="hero-name-frame">
                <span className="hero-name">MAHIN</span>
              </span>
            </h1>

            <p className="hero-tagline" data-hero-intro="tagline">
              Ideas into <em>working products.</em>
            </p>
            <p className="hero-summary" data-hero-intro="summary">
              I move between product thinking, interface design, and software
              engineering to take an idea from the first decision to a working
              release.
            </p>

            <div className="hero-actions" data-hero-intro="actions">
              <a className="button button-primary" href="#work">
                Selected work <span aria-hidden="true">↘</span>
              </a>
              <Link className="text-link" href="/about">
                A little about me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-hero-intro="portrait">
            <span className="photo-tape" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                alt="A. Mahin wearing clear glasses outdoors"
                className="hero-portrait"
                height={864}
                preload
                sizes="(max-width: 680px) 102px, 148px"
                src="/images/mahin-portrait.webp"
                width={720}
              />
              <span className="portrait-index">MAHIN / DHAKA</span>
            </div>
          </div>

          <p className="hand-note hero-note-right" data-hero-intro="note">
            design with intent.
          </p>
        </div>

        <div className="hero-bottomline" data-reveal>
          <span>THINK CLEARLY. BUILD DELIBERATELY.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section
        aria-labelledby="playground-title"
        className="playground-section section shell"
        id="playground"
      >
        <header className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / PLAYGROUND</p>
            <h2 id="playground-title">
              Just for <em>fun.</em>
            </h2>
          </div>
          <p className="section-detail">
            A little visual atmosphere outside the product work.
          </p>
        </header>

        <div className="playground-board playground-board-editorial">
          <div className="playground-image">
            <Image
              alt="Pixel-art autumn landscape made for the icrmahin portfolio"
              className="playground-pixel"
              fill
              sizes="(max-width: 760px) 100vw, 680px"
              src="/images/autumn-cover.webp"
              data-parallax-image
            />
            <span className="playground-image-tag">
              PERSONAL VISUAL / 001
            </span>
          </div>

          <div className="playground-notes" data-reveal>
            <p className="hand-note">outside the brief.</p>
            <h3>A little colour, texture, and personality.</h3>
            <p>
              Not every part of a creative practice needs to become a product.
              This is a small space for visual ideas and things I simply enjoy.
            </p>
            <a
              className="text-link"
              href={site.github}
              rel="noreferrer"
              target="_blank"
            >
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="playground-inset" data-reveal>
            <span className="photo-tape" aria-hidden="true" />
            <Image
              alt="Pixel-art portrait against a warm sunset landscape"
              height={900}
              sizes="(max-width: 760px) 90px, 140px"
              src="/images/pixel-portrait.webp"
              width={900}
            />
          </div>
        </div>
      </section>

      <section className="about-section section shell" id="about">
        <div className="about-image-wrap" data-reveal>
          <span className="about-tape" aria-hidden="true" />
          <Image
            alt="Pixel-art portrait of Mahin against an autumn sky"
            className="about-pixel-art"
            height={900}
            sizes="(max-width: 760px) 86vw, 440px"
            src="/images/pixel-portrait.webp"
            width={900}
          />
          <span className="about-image-label">A SMALL WINDOW INTO MY WORLD</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow" data-reveal>
            02 / ABOUT
          </p>
          <h2 data-reveal>
            Design-minded.
            <span className="about-serif">Engineering-focused.</span>
          </h2>
          <p data-reveal>
            I&apos;m Mahin, an independent product builder from Bangladesh. I
            work across product thinking, interface design, and software
            engineering.
          </p>
          <p data-reveal>
            I enjoy taking an unclear idea, finding the part that matters, and
            shaping it into something coherent and useful. I care about the
            details, but not at the expense of getting the product shipped.
          </p>
          <div className="about-principles" data-reveal>
            <span>Product thinking</span>
            <span>UI / UX</span>
            <span>Frontend</span>
            <span>Mobile</span>
            <span>Systems</span>
          </div>
          <Link className="text-link" href="/about">
            More about my approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="work-section section shell" id="work">
        <header className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">03 / CASE STUDIES</p>
            <h2>
              Selected <em>work.</em>
            </h2>
          </div>
          <p className="section-detail">
            A closer look at products I&apos;ve been designing and building.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="practice-section section" id="approach">
        <div className="shell">
          <header className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">04 / HOW I WORK</p>
              <h2>
                From first question to <em>finished product.</em>
              </h2>
            </div>
            <p className="section-detail">
              A practical process that keeps the problem, experience, and
              implementation connected.
            </p>
          </header>

          <div className="practice-board">
            {processSteps.map((step) => (
              <article
                className={"practice-note " + step.tone}
                data-reveal
                key={step.number}
              >
                <span className="practice-number">
                  {step.number} / {step.label}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner contact-inner-editorial">
          <p className="eyebrow" data-reveal>
            05 / CONTACT
          </p>
          <h2 data-reveal>
            Have a good idea?
            <span> Let&apos;s build it.</span>
          </h2>
          <div className="contact-bottom" data-reveal>
            <p>
              Have a product to shape or a problem worth solving? Tell me what
              you&apos;re working on.
            </p>
            <a className="button button-dark" href={"mailto:" + site.email}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
