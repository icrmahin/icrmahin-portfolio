import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

const practiceNotes = [
  {
    number: "01",
    title: "Product thinking",
    detail: "Find the real problem before reaching for a solution.",
    className: "practice-note-yellow",
  },
  {
    number: "02",
    title: "Interface design",
    detail: "Make complex things feel clear, calm, and considered.",
    className: "practice-note-lilac",
  },
  {
    number: "03",
    title: "Engineering",
    detail: "Turn the design into software that works in the real world.",
    className: "practice-note-green",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero shell" id="top">
        <div className="hero-meta" data-reveal>
          <span className="eyebrow-pill">INDEPENDENT PRODUCT BUILDER</span>
          <span className="hero-location">{site.location.toUpperCase()}</span>
        </div>

        <div className="hero-stage">
          <p className="hand-note hero-note-left" data-reveal>well, hello there.</p>
          <p className="sticker hero-sticker hero-sticker-yellow" data-reveal>DESIGN THE DETAILS</p>
          <p className="sticker hero-sticker hero-sticker-green" data-reveal>MAKE IT USEFUL</p>

          <div className="hero-center">
            <p className="hero-kicker" data-reveal>
              PRODUCT THINKING <span>/</span> DESIGN <span>/</span> ENGINEERING
            </p>

            <h1 data-reveal>
              <span className="hero-name-frame">
                <span className="hero-name">MAHIN</span>
                <sup>001</sup>
              </span>
            </h1>

            <p className="hero-tagline" data-reveal>
              I make software that <em>gets out of your way.</em>
            </p>
            <p className="hero-summary" data-reveal>
              I turn ideas and messy workflows into thoughtful digital products — from the first product decision to working software.
            </p>

            <div className="hero-actions" data-reveal>
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↘</span>
              </a>
              <Link className="text-link" href="/about">
                A little about me <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-reveal>
            <span className="photo-tape" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                alt="A. Mahin wearing clear glasses outdoors"
                className="hero-portrait"
                height={864}
                preload
                sizes="(max-width: 680px) 112px, 158px"
                src="/images/mahin-portrait.webp"
                width={720}
              />
              <span className="portrait-index">MAHIN / 001</span>
            </div>
          </div>

          <p className="hand-note hero-note-right" data-reveal>small details. real outcomes.</p>
        </div>

        <div className="hero-bottomline" data-reveal>
          <span>THINK CLEARLY. BUILD DELIBERATELY.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section aria-label="Personal visual signature" className="cover-section shell">
        <div className="cover-image" data-hero-art>
          <Image
            alt="Pixel-art autumn horizon created for the icrmahin portfolio"
            className="cover-art"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1160px"
            src="/images/autumn-cover.webp"
          />
          <span className="cover-image-caption">A LITTLE BIT OF MY WORLD / 2026</span>
        </div>
        <div className="cover-caption">
          <span>AN INDEPENDENT PRACTICE</span>
          <span>IDEAS → INTERFACES → SOFTWARE</span>
        </div>
      </section>

      <section className="work-section section shell" id="work">
        <header className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Things I&apos;ve <em>put into motion.</em></h2>
          </div>
          <p className="section-detail">
            A small selection of products I&apos;ve been shaping, designing, and building.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="work-footnote" data-reveal>
          No invented metrics or padded case studies. I publish the details that the work can support.
        </p>
      </section>

      <section className="about-section section shell" id="about">
        <div className="about-image-wrap" data-reveal>
          <span className="about-tape about-tape-one" aria-hidden="true" />
          <span className="about-tape about-tape-two" aria-hidden="true" />
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
          <p className="eyebrow" data-reveal>02 / A LITTLE ABOUT ME</p>
          <h2 data-reveal>
            Design-minded.
            <span className="about-serif">Engineering-focused.</span>
          </h2>
          <p data-reveal>
            I&apos;m Mahin, an independent product builder from Bangladesh. I work across product thinking, interface design, and software engineering.
          </p>
          <p data-reveal>
            I enjoy taking an unclear idea, finding the part that matters, and shaping it into something coherent and useful. I care about the small details, but not at the expense of shipping.
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

      <section className="practice-section section" id="approach">
        <div className="shell">
          <header className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">03 / HOW I WORK</p>
              <h2>From first thought to <em>finished work.</em></h2>
            </div>
            <p className="section-detail">
              A practical loop. Not a ceremony.
            </p>
          </header>

          <div className="practice-board">
            {practiceNotes.map((note) => (
              <article className={"practice-note " + note.className} data-reveal key={note.number}>
                <span className="practice-number">{note.number}</span>
                <h3>{note.title}</h3>
                <p>{note.detail}</p>
                <span className="practice-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="playground-section section shell" id="playground">
        <header className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">04 / PLAYGROUND</p>
            <h2>Room to <em>experiment.</em></h2>
          </div>
          <p className="section-detail">
            The side of building that doesn&apos;t always become a project.
          </p>
        </header>

        <div className="playground-board">
          <div className="playground-image" data-reveal>
            <Image
              alt="Pixel-art portrait in a warm sunset landscape"
              className="playground-pixel"
              fill
              sizes="(max-width: 760px) 100vw, 540px"
              src="/images/pixel-portrait.webp"
            />
            <span className="playground-image-tag">NOTES FROM THE WORKBENCH</span>
          </div>
          <div className="playground-notes">
            <p className="hand-note">not everything needs a roadmap.</p>
            <h3>Small tests. Odd ideas. Better details.</h3>
            <p>
              I keep space for interface experiments, motion studies, and small tools. The useful ones eventually find their way into the work.
            </p>
            <a className="text-link" href={site.github} rel="noreferrer" target="_blank">
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
            <span className="playground-sticker">STAY CURIOUS</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="contact-smiley" aria-hidden="true">
            <span />
            <span />
            <i />
          </div>
          <p className="eyebrow" data-reveal>05 / HAVE SOMETHING IN MIND?</p>
          <h2 data-reveal>
            LET&apos;S TALK<span>.</span>
          </h2>
          <div className="contact-bottom" data-reveal>
            <p>
              Have a product to shape or a problem worth solving? Tell me what you&apos;re working on.
            </p>
            <a className="button button-dark" href={"mailto:" + site.email}>
              {site.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
