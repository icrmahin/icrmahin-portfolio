import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectVisual project={project} />
      <div className="project-card-copy">
        <p className="project-category">{project.category}</p>
        <div className="project-card-title-row">
          <h3>{project.title}</h3>
          {project.published ? (
            <span aria-hidden="true" className="project-arrow">↗</span>
          ) : (
            <span className="project-status">In progress</span>
          )}
        </div>
        <p className="project-summary">{project.summary}</p>
        {project.published ? (
          <span className="project-read-link">
            Read the case study <span aria-hidden="true">↗</span>
          </span>
        ) : null}
      </div>
    </>
  );

  return (
    <article className={"project-card project-card-" + project.cover}>
      {project.published ? (
        <Link
          aria-label={"Read the " + project.title + " case study"}
          className="project-card-link"
          href={"/work/" + project.slug}
        >
          {content}
        </Link>
      ) : (
        <div className="project-card-static">{content}</div>
      )}
    </article>
  );
}
