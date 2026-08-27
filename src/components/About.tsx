import { about } from '../data/content';
import { section } from '../data/navigation';
import './About.css';

const meta = section('about');

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">{meta.num}</span>
          <span className="section-label">{meta.label}</span>
          <h2 className="section-title">{about.title}</h2>
        </div>

        {/* ---- Profile ---- */}
        <div className="about__body doc-grid" data-reveal>
          <div className="doc-margin">
            <span>Profile</span>
          </div>

          <div className="about__bio">
            {/* First paragraph is the document lede — set larger. */}
            {about.bio.map((para, i) => (
              <p key={i} className={i === 0 ? 'about__lede' : undefined}>{para}</p>
            ))}
          </div>
        </div>

        {/* ---- Principles ---- */}
        <div className="about__principles doc-grid">
          <div className="doc-margin">
            <span>Principles</span>
          </div>

          <ol className="about__principle-list">
            {about.principles.map((p, i) => (
              <li key={p.title} className="about__principle"
                  data-reveal style={{ '--r': i } as React.CSSProperties}>
                <span className="about__principle-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="about__principle-title">{p.title}</h3>
                  <p className="about__principle-body">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
