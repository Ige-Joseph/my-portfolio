import { skillCategories } from '../data/skills';
import './Skills.css';

const breadth = [
  'Frontend',
  'Docker / Infra',
  'Product Design',
  'CMS / Web',
  'Architecture',
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">03</span>
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Technologies &amp; systems I work with</h2>
        </div>

        <p className="section-subtitle skills__intro">
          A T-shaped engineer &mdash; depth in backend, queueing and payment systems,
          with enough infrastructure, web platform and tooling range to work across a
          whole team.
        </p>

        {/* ---- Capability index ---- */}
        <div className="skills__index">
          {skillCategories.map((cat, i) => (
            <div key={cat.id} className="skills__row doc-grid"
                 data-reveal style={{ '--r': i % 4 } as React.CSSProperties}>
              <div className="doc-margin skills__row-margin">
                <span className="skills__row-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{cat.category}</span>
              </div>
              <div className="tag-list skills__row-items">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---- T-shaped figure ---- */}
        <figure className="skills__figure" data-reveal>
          <figcaption className="skills__figure-caption">
            <span className="section-num">Fig. 02</span>
            <span className="meta">T-shaped profile &mdash; breadth across, depth down</span>
          </figcaption>

          <div className="tshape">
            <div className="tshape__breadth">
              {breadth.map((b) => (
                <span key={b} className="tshape__breadth-item">{b}</span>
              ))}
            </div>

            <div className="tshape__stem" aria-hidden="true" />

            <div className="tshape__depth">
              <h3 className="tshape__depth-title">Backend Engineering</h3>
              <p className="tshape__depth-sub">
                Async Systems &middot; Payment Infrastructure &middot; API Design
              </p>
            </div>
          </div>
        </figure>

      </div>
    </section>
  );
}
