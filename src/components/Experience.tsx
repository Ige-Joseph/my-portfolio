import { experiences } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've built</h2>
          <p className="section-subtitle">
            Architecture decisions, systems shipped, and engineering problems solved.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="exp-item">
              <div className="exp-item__line">
                <div className={`exp-item__dot ${exp.current ? 'exp-item__dot--current' : ''}`} />
                {i < experiences.length - 1 && <div className="exp-item__connector" />}
              </div>

              <div className="exp-item__content glass-card">
                <div className="exp-item__header">
                  <div className="exp-item__header-left">
                    <h3 className="exp-item__role">{exp.role}</h3>
                    <div className="exp-item__company-row">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-item__company">
                          {exp.company}
                        </a>
                      ) : (
                        <span className="exp-item__company">{exp.company}</span>
                      )}
                      <span className="exp-item__type-badge">{exp.type}</span>
                      {exp.current && <span className="exp-item__current-badge">Active</span>}
                    </div>

                    {/* Achievement badge — subtle, earned, professional */}
                    {exp.badge && (
                      <div className="exp-item__achievement-badge">
                        <span className="exp-item__achievement-icon">◆</span>
                        <span>{exp.badge}</span>
                      </div>
                    )}
                  </div>

                  <div className="exp-item__meta">
                    <span className="exp-item__period">{exp.period}</span>
                    <span className="exp-item__location">{exp.location}</span>
                  </div>
                </div>

                <p className="exp-item__description">{exp.description}</p>

                <ul className="exp-item__achievements">
                  {exp.achievements.map((a, j) => (
                    <li key={j}>
                      <span className="exp-item__check">→</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="exp-item__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
