import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover === "hibbullah") {
    return (
      <div className="project-visual visual-hibbullah">
        <div className="hibbullah-mark">
          <Image
            alt="Hibbullah logo"
            height={112}
            sizes="88px"
            src="/images/hibbullah-logo.png"
            width={112}
          />
        </div>
        <p>One pharmacy. Two connected experiences.</p>
      </div>
    );
  }

  return (
    <div className="project-visual visual-pathways">
      <div className="pathways-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="pathways-name">DigitalPathways</div>
      <p>In development</p>
    </div>
  );
}
