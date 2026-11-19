import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover === "hibbullah") {
    return (
      <div className="project-visual visual-hibbullah">
        <div className="project-visual-topline">
          <span>PROJECT / 001</span>
          <span>{project.year}</span>
        </div>

        <div className="project-brand-lockup">
          <div className="hibbullah-logo-plate">
            <Image
              alt="Hibbullah logo"
              height={112}
              sizes="(max-width: 680px) 72px, 112px"
              src="/images/hibbullah-logo.png"
              width={112}
            />
          </div>
          <div className="project-brand-copy">
            <strong>Hibbullah</strong>
            <span>PHARMACY COMMERCE</span>
          </div>
        </div>

        <div className="project-visual-bottomline">
          <span>ANDROID APP</span>
          <span>CUSTOMER + SHOP OPERATIONS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-pathways">
      <div className="project-visual-topline">
        <span>PROJECT / 002</span>
        <span>IN DEVELOPMENT</span>
      </div>

      <div className="digitalpathways-lockup">
        <span className="digitalpathways-index">02</span>
        <strong>
          Digital
          <span>Pathways</span>
        </strong>
        <p>AN EVOLVING PRODUCT PROJECT</p>
      </div>

      <div className="project-visual-bottomline">
        <span>PRODUCT DEVELOPMENT</span>
        <span>WORK IN PROGRESS</span>
      </div>
    </div>
  );
}
