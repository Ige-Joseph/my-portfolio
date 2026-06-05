import { skillCategories } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__header">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title">Technologies & systems<br />I work with</h2>
          </div>
          <p className="section-subtitle skills__subtitle">
            A T-shaped engineer — deep backend expertise with product, frontend, infrastructure, and creative range.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skills__card glass-card">
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.category}</h3>
              </div>
              <div className="skills__pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__tshaped">
          <p className="skills__tshaped-label">T-Shaped Engineering Profile</p>
          <div className="skills__tshaped-visual">
            <div className="tshaped__bar tshaped__bar--top">
              {['Frontend', 'Docker / Infra', 'Product Design', 'Creative', 'CMS / Web', 'Architecture'].map((b) => (
                <div key={b} className="tshaped__breadth-item">{b}</div>
              ))}
            </div>
            <div className="tshaped__bar tshaped__bar--depth">
              <div className="tshaped__depth-item">
                <span className="tshaped__depth-icon">⚡</span>
                <span>Backend Engineering</span>
                <span className="tshaped__depth-sub">Distributed Systems · Payment Infrastructure · API Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
