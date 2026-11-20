import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/content/projects";
import { getSiteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return projects
    .filter((project) => project.published)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.published) {
    return { title: "Project not found" };
  }

  return {
    title: project.title + " — Selected work",
    description: project.summary,
    alternates: {
      canonical: "/work/" + project.slug,
    },
    openGraph: {
      title: project.title + " — " + site.name,
      description: project.summary,
      url: getSiteUrl() + "/work/" + project.slug,
      images: ["/images/hibbullah-logo.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <article className="case-study shell">
      <Link className="case-back" href="/#work">
        <span aria-hidden="true">←</span> Selected work
      </Link>

      <header className="case-intro">
        <div className="case-intro-copy">
          <p className="case-kicker">Case study <span>·</span> {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-lede">{project.summary}</p>
          <div className="case-actions">
            <a className="button button-primary" href={"mailto:" + site.email}>
              Discuss a similar product
            </a>
          </div>
        </div>
        <div className="case-intro-visual">
          <ProjectVisual project={project} />
        </div>
      </header>

      <dl className="case-facts">
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Platform</dt>
          <dd>{project.platform}</dd>
        </div>
        <div>
          <dt>Built with</dt>
          <dd>{project.stack.join(" · ")}</dd>
        </div>
      </dl>

      <section className="case-section case-brief">
        <div className="case-section-heading">
          <h2>The brief</h2>
          <p>What the product needed to do</p>
        </div>
        <div className="case-section-body">
          <p className="case-body-lead">{project.brief}</p>
          <h3>Constraints that shaped the product</h3>
          <ul className="case-constraint-list">
            {project.constraints.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <h2>Two connected experiences</h2>
          <p>One source of truth, two very different jobs</p>
        </div>
        <div className="case-section-body">
          <div className="case-surface-grid">
            {project.surfaces.map((surface) => (
              <section className="case-surface" key={surface.title}>
                <p className="case-surface-audience">{surface.audience}</p>
                <h3>{surface.title}</h3>
                <p>{surface.description}</p>
                <ul>
                  {surface.capabilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <h2>From discovery to fulfilment</h2>
          <p>The customer and operational journey</p>
        </div>
        <div className="case-section-body">
          <ol className="case-journey">
            {project.journey.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <h2>The system behind it</h2>
          <p>How the application and services fit together</p>
        </div>
        <div className="case-section-body">
          <div className="case-architecture" aria-label="Hibbullah technical architecture">
            <div className="architecture-clients">
              {project.architecture.slice(0, 2).map((node) => (
                <div className="architecture-node architecture-node-client" key={node.title}>
                  <h3>{node.title}</h3>
                  <p>{node.description}</p>
                </div>
              ))}
            </div>
            <div className="architecture-connector">
              <span>Typed requests and service calls</span>
            </div>
            <div className="architecture-node architecture-node-core">
              <h3>{project.architecture[2].title}</h3>
              <p>{project.architecture[2].description}</p>
            </div>
            <div className="architecture-connector">
              <span>Media kept separate from business data</span>
            </div>
            <div className="architecture-node architecture-node-media">
              <h3>{project.architecture[3].title}</h3>
              <p>{project.architecture[3].description}</p>
            </div>
          </div>
          <p className="case-diagram-note">
            This is a system map, not a screenshot of the product UI.
          </p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <h2>Engineering decisions</h2>
          <p>The choices that protect the experience and the business data</p>
        </div>
        <div className="case-section-body">
          <div className="case-decision-list">
            {project.decisions.map((decision) => (
              <article className="case-decision" key={decision.title}>
                <h3>{decision.title}</h3>
                <div>
                  <p><strong>The problem</strong>{decision.context}</p>
                  <p><strong>The implementation</strong>{decision.implementation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <h2>What was delivered</h2>
          <p>The implemented scope</p>
        </div>
        <div className="case-section-body">
          <ul className="case-delivered-list">
            {project.delivered.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="case-current-state">{project.currentState}</p>
        </div>
      </section>

      <div className="case-end">
        <div>
          <h2>Need a product built with this level of care?</h2>
          <p>Tell me about the people, the problem, and the constraints.</p>
        </div>
        <a className="button button-primary" href={"mailto:" + site.email}>
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
