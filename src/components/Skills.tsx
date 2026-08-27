import { skillCategories } from '../data/skills';
import { skillsSection } from '../data/content';
import { section } from '../data/navigation';
import './Skills.css';

const meta = section('skills');

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">{meta.num}</span>
          <span className="section-label">{meta.label}</span>
          <h2 className="section-title">{skillsSection.title}</h2>
        </div>

        <p className="section-subtitle skills__intro">
          {skillsSection.intro}
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
            <span className="meta">{skillsSection.figure.caption}</span>
          </figcaption>

          <div className="tshape">
            <div className="tshape__breadth">
              {skillsSection.figure.breadth.map((b) => (
                <span key={b} className="tshape__breadth-item">{b}</span>
              ))}
            </div>

            <div className="tshape__stem" aria-hidden="true" />

            <div className="tshape__depth">
              <h3 className="tshape__depth-title">{skillsSection.figure.depth.title}</h3>
              <p className="tshape__depth-sub">{skillsSection.figure.depth.sub}</p>
            </div>
          </div>
        </figure>

      </div>
    </section>
  );
}
