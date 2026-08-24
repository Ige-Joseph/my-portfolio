import { experiences } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">04</span>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I&rsquo;ve built</h2>
        </div>

        <p className="section-subtitle experience__intro">
          Architecture decisions, systems shipped, and engineering problems solved.
        </p>

        <div className="experience__list">
          {experiences.map((exp) => (
            <article key={exp.id} className="exp doc-grid" data-reveal>

              {/* Margin: period and engagement type */}
              <div className="doc-margin exp__margin">
                <span className="exp__period">{exp.period}</span>
                <span>{exp.type}</span>
                <span className="exp__location">{exp.location}</span>
              </div>

              <div className="exp__content">

                <header className="exp__head">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <div className="exp__company-row">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                           className="exp__company exp__company--link">
                          {exp.company}
                        </a>
                      ) : (
                        <span className="exp__company">{exp.company}</span>
                      )}
                      {exp.current && (
                        <span className="status status--live">Active</span>
                      )}
                    </div>
                  </div>
                </header>

                {exp.badge && (
                  <p className="exp__badge">
                    <span className="exp__badge-mark" aria-hidden="true">◆</span>
                    {exp.badge}
                  </p>
                )}

                <p className="exp__desc">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <div className="exp__notes">
                    <p className="meta exp__notes-label">Selected contributions</p>
                    <ul className="exp__note-list">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="exp__note">
                          <span className="exp__note-num">{String(j + 1).padStart(2, '0')}</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="tag-list exp__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
