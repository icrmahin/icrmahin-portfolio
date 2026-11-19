import type { Project } from "@/content/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover === "hibbullah") {
    return (
      <div className="project-visual visual-hibbullah" aria-hidden="true">
        <div className="mock-browser-bar">
          <span /> <span /> <span />
          <i>hibbullah.app</i>
        </div>
        <div className="mock-store">
          <div className="mock-sidebar">
            <b>h.</b>
            <span /> <span /> <span /> <span />
          </div>
          <div className="mock-content">
            <div className="mock-topline"><b>Good morning</b><span>Overview ↗</span></div>
            <div className="mock-stat-row"><i /><i /><i /></div>
            <div className="mock-panel">
              <div className="mock-panel-title" />
              <div className="mock-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <span className="visual-caption">ILLUSTRATIVE UI STUDY</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-pathways" aria-hidden="true">
      <div className="pathway-orbit orbit-one" />
      <div className="pathway-orbit orbit-two" />
      <div className="pathway-card pathway-card-main">
        <span>LEARNING PATH / 01</span>
        <b>Find your next step.</b>
        <i />
        <i />
      </div>
      <div className="pathway-card pathway-card-side">
        <span>PROGRESS</span>
        <b>03 <small>/ 08</small></b>
      </div>
      <span className="visual-caption">VISUAL PLACEHOLDER · IN DEVELOPMENT</span>
    </div>
  );
}
