import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={"project-card project-card-" + project.cover} data-reveal>
      <Link
        aria-label={"Read the " + project.title + " case study"}
        className="project-card-link"
        href={"/work/" + project.slug}
      >
        <ProjectVisual project={project} />

        <div className="project-card-copy">
          <div className="project-card-meta">
            <span className="project-number">{project.number} / {project.category}</span>
            <span className={project.published ? "status-label status-published" : "status-label status-pending"}>
              <i aria-hidden="true" />
              {project.status}
            </span>
          </div>
          <div className="project-card-title-row">
            <h3>{project.title}</h3>
            <span aria-hidden="true" className="project-arrow">↗</span>
          </div>
          <p>{project.summary}</p>
          <span className="project-read-link">Read the case study <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
