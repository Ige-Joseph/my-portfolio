import { projects, type Project } from '../data/projects';
import './Projects.css';

const statusColors: Record<string, string> = {
  Production: '#4fffb0',
  'In Progress': '#ffd166',
  Archived: '#888',
  'Open Source': '#7b61ff',
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Systems I've engineered</h2>
          </div>
          <p className="section-subtitle">
            Production-grade backend systems built for reliability, distributed scale, and engineering depth.
          </p>
        </div>

        <div className="projects__featured">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="projects__grid">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className={`project-card glass-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__top">
        <div className="project-card__meta">
          <span className="project-card__status" style={{ color: statusColors[project.status] }}>
            <span className="project-card__status-dot" style={{ background: statusColors[project.status] }} />
            {project.status}
          </span>
          <span className={`project-card__context project-card__context--${project.context.toLowerCase()}`}>
            {project.context}
          </span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <div className="project-card__links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__desc">{project.description}</p>
      </div>

      {/* System Flow Diagram */}
      {project.systemFlow && featured && (
        <div className="project-card__flow">
          <span className="project-card__flow-label">{project.systemFlow.label}</span>
          <div className="flow-diagram">
            {project.systemFlow.nodes.map((node, i) => (
              <div key={node} className="flow-diagram__item">
                <div
                  className="flow-node"
                  style={{ '--node-color': project.color || 'var(--accent-primary)' } as React.CSSProperties}
                >
                  {node}
                </div>
                {i < project.systemFlow!.nodes.length - 1 && (
                  <div className="flow-arrow" style={{ '--arrow-color': project.color || 'var(--accent-primary)' } as React.CSSProperties}>
                    <div className="flow-arrow__line" />
                    <div className="flow-arrow__head" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {project.highlights.length > 0 && featured && (
        <ul className="project-card__highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>
              <span className="project-card__bullet" style={{ background: project.color || 'var(--accent-primary)' }} />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="project-card__tags">
        {(featured ? project.tags : project.tags.slice(0, 4)).map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div
        className="project-card__glow"
        style={{ background: `radial-gradient(ellipse at 0% 100%, ${project.color || 'var(--accent-primary)'}14 0%, transparent 65%)` }}
      />
    </div>
  );
}

function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function ExternalIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;
}
