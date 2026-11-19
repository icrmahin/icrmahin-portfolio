import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <>
      <ProjectVisual project={project} />

      <div className="project-card-copy">
        <div className="project-card-meta">
          <span className="project-number">
            {project.number} / {project.category}
          </span>
          <span
            className={
              project.published
                ? "status-label status-published"
                : "status-label status-pending"
            }
          >
            <i aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <div className="project-card-title-row">
          <h3>{project.title}</h3>
          {project.published ? (
            <span aria-hidden="true" className="project-arrow">
              ↗
            </span>
          ) : null}
        </div>

        <p>{project.summary}</p>

        {project.published ? (
          <span className="project-read-link">
            Read the case study <span aria-hidden="true">↗</span>
          </span>
        ) : (
          <span className="project-progress">Details coming when ready</span>
        )}
      </div>
    </>
  );

  return (
    <article
      className={"project-card project-card-" + project.cover}
      data-project-card
    >
      {project.published ? (
        <Link
          aria-label={"Read the " + project.title + " case study"}
          className="project-card-link"
          href={"/work/" + project.slug}
        >
          {cardContent}
        </Link>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}
    </article>
  );
}
