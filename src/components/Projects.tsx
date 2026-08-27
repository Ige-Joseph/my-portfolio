import { projects, type Project } from '../data/projects';
import { projectsSection } from '../data/content';
import { section } from '../data/navigation';
import './Projects.css';

const meta = section('projects');

const statusClass: Record<string, string> = {
  Production: 'status--live',
  'Live · limited users': 'status--live',
  'In Progress': 'status--progress',
  Archived: 'status--archived',
  'Open Source': 'status--live',
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">{meta.num}</span>
          <span className="section-label">{meta.label}</span>
          <h2 className="section-title">{projectsSection.title}</h2>
        </div>

        <p className="section-subtitle projects__intro">
          {projectsSection.intro}
        </p>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i + 1} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================
// PROJECT ENTRY — a spec sheet entry, not a card
// ============================================================

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <article className="entry doc-grid" data-reveal>

      {/* Margin annotations */}
      <div className="doc-margin entry__margin">
        <span className="entry__index">{String(index).padStart(2, '0')}</span>
        <span className="entry__context">{project.context}</span>
        <span className="entry__year">{project.year}</span>
      </div>

      {/* Content column */}
      <div className="entry__content">

        <header className="entry__head">
          <div className="entry__titles">
            <h3 className="entry__title">{project.title}</h3>
            <p className="entry__subtitle">{project.subtitle}</p>
          </div>
          <span className={`status ${statusClass[project.status] ?? 'status--archived'}`}>
            {project.status}
          </span>
        </header>

        {/* Abstract — the plain-English read, for any reader */}
        <p className="entry__abstract">{project.plainSummary}</p>

        <p className="entry__desc">{project.description}</p>

        {/* Architecture figure */}
        {project.systemFlow && (
          <figure className="entry__figure">
            <figcaption className="entry__figure-caption">
              <span className="section-num">Fig.</span>
              <span className="meta">{project.systemFlow.label ?? 'Architecture'}</span>
            </figcaption>

            <div className="entry__diagram" role="img"
                 aria-label={project.systemFlow.nodes.join(' to ')}>
              {project.systemFlow.nodes.map((node, i) => (
                <div key={node} className="entry__node-group"
                     style={{ '--i': i } as React.CSSProperties}>
                  <span className="entry__node">{node}</span>
                  {i < project.systemFlow!.nodes.length - 1 && (
                    <span className="entry__connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            {project.systemFlow.plain && (
              <p className="entry__figure-plain">{project.systemFlow.plain}</p>
            )}
          </figure>
        )}

        {/* Implementation notes — open by default; technical readers are
            the primary audience, so depth is never hidden behind a click. */}
        {project.highlights.length > 0 && (
          <details className="entry__notes" open>
            <summary className="entry__notes-summary">
              <span className="meta">Implementation notes</span>
              <span className="entry__notes-count meta">
                {String(project.highlights.length).padStart(2, '0')}
              </span>
              <span className="entry__notes-chevron" aria-hidden="true" />
            </summary>
            <ul className="entry__note-list">
              {project.highlights.map((h, i) => (
                <li key={i} className="entry__note">
                  <span className="entry__note-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </details>
        )}

        {/* Footer: stack + links */}
        <footer className="entry__foot">
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="entry__links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                 className="entry__link">
                Repository <ExternalMark />
              </a>
            )}
            {project.links.live && project.links.live !== 'private' && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                 className="entry__link entry__link--accent">
                Live <ExternalMark />
              </a>
            )}
            {project.links.live === 'private' && (
              <span className="entry__link entry__link--muted">Live · private</span>
            )}
          </div>
        </footer>

      </div>
    </article>
  );
}

function ExternalMark() {
  return <span className="entry__link-mark" aria-hidden="true">↗</span>;
}
