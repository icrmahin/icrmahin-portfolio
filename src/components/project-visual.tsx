import type { Project } from "@/content/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover === "hibbullah") {
    return (
      <div className="project-visual visual-hibbullah" aria-label="Illustrative visual for Hibbullah">
        <div className="visual-topline">
          <span>PRODUCT / 001</span>
          <span>2026</span>
        </div>
        <span className="visual-cross" aria-hidden="true">+</span>
        <div className="hibbullah-lockup">
          <span className="hibbullah-mark">h.</span>
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
    <div className="project-visual visual-pathways" aria-label="Illustrative visual for DigitalPathways">
      <div className="visual-topline">
        <span>PRODUCT / 002</span>
        <span>IN DEVELOPMENT</span>
      </div>
      <div className="pathway-orbit pathway-orbit-one" />
      <div className="pathway-orbit pathway-orbit-two" />
      <div className="pathway-note pathway-note-main">
        <span>LEARNING PATH / 01</span>
        <strong>Find your next step.</strong>
        <i />
        <i />
      </div>
      <div className="pathway-note pathway-note-side">
        <span>PROGRESS</span>
        <strong>03 <small>/ 08</small></strong>
      </div>
      <span className="visual-index">02 — CURRENTLY BUILDING</span>
    </div>
  );
}
