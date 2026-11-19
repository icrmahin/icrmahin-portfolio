import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title + " — Selected work",
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="case-study shell">
      <div className="case-back-row">
        <Link className="text-link" href="/#work">
          ← Back to selected work
        </Link>
        <span className="eyebrow">{project.number} / {project.category.toUpperCase()}</span>
      </div>

      <header className="case-header">
        <p className="eyebrow" data-reveal>
          {project.status.toUpperCase()} <span>·</span> {project.year}
        </p>
        <h1 data-reveal>
          {project.title}<span className="case-title-period">.</span>
        </h1>
        <p className="case-summary" data-reveal>{project.summary}</p>

        <div className="case-meta-grid" data-reveal>
          <div>
            <span>MY ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>TECHNOLOGY</span>
            <p>{project.stack.join(" · ")}</p>
          </div>
          <div>
            <span>STATUS</span>
            <p>{project.status}</p>
          </div>
        </div>
      </header>

      <div className="case-visual" data-hero-art>
        <ProjectVisual project={project} />
      </div>

      <div className="case-content">
        <section data-reveal>
          <p className="eyebrow">01 / OVERVIEW</p>
          <h2>What it is</h2>
          <p>{project.overview}</p>
        </section>

        <section data-reveal>
          <p className="eyebrow">02 / THE PROBLEM SPACE</p>
          <h2>What needed attention</h2>
          <p>{project.challenge}</p>
        </section>

        <section data-reveal>
          <p className="eyebrow">03 / APPROACH</p>
          <h2>How I approached it</h2>
          <div className="case-approach-list">
            {project.approach.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal>
          <p className="eyebrow">04 / SCOPE</p>
          <h2>What is in the product</h2>
          <ul className="case-outcomes">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="case-end" data-reveal>
        <span className="eyebrow">NEXT</span>
        <Link href="/#contact">Have a good problem? Let&apos;s talk ↗</Link>
      </div>
    </article>
  );
}
