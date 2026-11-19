import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <Link
        aria-label={`Explore ${project.title}`}
        className="project-card-link"
        href={`/work/${project.slug}`}
      >
        <ProjectVisual project={project} />
        <div className="project-card-copy">
          <div className="project-card-meta">
            <span>{project.number} / {project.category}</span>
            <span className={project.published ? "status-dot" : "status-dot status-pending"}>
              {project.status}
            </span>
          </div>
          <div className="project-card-title-row">
            <h3>{project.title}</h3>
            <span aria-hidden="true" className="project-arrow">↗</span>
          </div>
          <p>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
