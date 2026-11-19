import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover === "hibbullah") {
    return (
      <div className="project-visual visual-hibbullah">
        <div className="visual-topline">
          <span>PRODUCT / 001</span>
          <span>2026</span>
        </div>
        <span className="visual-cross" aria-hidden="true">+</span>
        <div className="hibbullah-lockup">
          <span className="hibbullah-mark">
            <Image
              alt="Hibbullah logo"
              fill
              sizes="(max-width: 680px) 70px, 112px"
              src="/images/hibbullah-logo.png"
            />
          </span>
          <div>
            <strong>Hibbullah</strong>
            <small>PHARMACY COMMERCE</small>
          </div>
        </div>
        <div className="visual-sticker visual-sticker-green">ORDERS / STOCK / SALES</div>
        <div className="visual-paper-tab">ANDROID APP</div>
        <span className="visual-index">01 — SELECTED WORK</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-pathways">
      <div className="visual-topline">
        <span>PRODUCT / 002</span>
        <span>IN DEVELOPMENT</span>
      </div>
      <div className="pathway-composition">
        <span className="pathway-orbit pathway-orbit-one" aria-hidden="true" />
        <span className="pathway-orbit pathway-orbit-two" aria-hidden="true" />
        <span className="pathway-index">02</span>
        <strong>Digital<span>Pathways</span></strong>
        <small>AN EVOLVING PRODUCT PROJECT</small>
      </div>
      <span className="visual-index">02 — CURRENTLY BUILDING</span>
    </div>
  );
}
