import { site } from '../data/site';
import { hero } from '../data/content';
import './Hero.css';

// ============================================================
// Copy lives in src/data/content.ts — this file is layout only.
// ============================================================

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">

        {/* ---- Masthead ---- */}
        <header className="hero__masthead">
          <h1 className="hero__name" data-reveal="mask">
            Joseph<span className="hero__name-break"> </span>Ige
          </h1>
          <div className="hero__masthead-meta" data-reveal style={{ '--r': 3 } as React.CSSProperties}>
            <span className="meta">Software Engineer</span>
            <span className="hero__masthead-sep" aria-hidden="true" />
            <span className="meta">{site.location}</span>
          </div>
        </header>

        <div className="rule rule--heavy hero__masthead-rule" data-reveal="rule" />

        {/* ---- Statement + specification ---- */}
        <div className="hero__body">

          {/* ---- Plate: the portrait, mounted like a document plate ---- */}
          <figure className="hero__plate" data-reveal style={{ '--r': 4 } as React.CSSProperties}>
            <div className="hero__plate-mount">
              <div className="hero__plate-frame">
                <img
                  className="hero__plate-img"
                  src="/joseph.jpg"
                  alt="Joseph Ige"
                  width={460}
                  height={460}
                />
              </div>
              <span className="hero__plate-marks" aria-hidden="true" />
            </div>
          </figure>

          <div className="hero__lead">
            <p className="hero__statement" data-reveal style={{ '--r': 4 } as React.CSSProperties}>
              {hero.statement.lead}{' '}
              <em>{hero.statement.emphasis}</em>{hero.statement.tail}
            </p>

            <p className="hero__prose" data-reveal style={{ '--r': 5 } as React.CSSProperties}>
              {hero.prose}
            </p>

            <div className="hero__actions" data-reveal style={{ '--r': 6 } as React.CSSProperties}>
              <a href="#projects" className="btn-primary">
                {hero.actions.primary}
                <Arrow />
              </a>
              <a href={site.cvUrl} download className="btn-outline">
                {hero.actions.secondary}
              </a>
            </div>

            {site.availableForWork && (
              <p className="status status--live hero__availability"
                 data-reveal style={{ '--r': 7 } as React.CSSProperties}>
                {site.availabilityNote}
              </p>
            )}
          </div>

          {/* ---- Spec table ---- */}
          <dl className="hero__spec">
            {hero.spec.map((row, i) => (
              <div key={row.label} className="hero__spec-row"
                   data-reveal style={{ '--r': 5 + i } as React.CSSProperties}>
                <dt className="hero__spec-label">{row.label}</dt>
                <dd className="hero__spec-value">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- Figure ---- */}
        <figure className="hero__figure" data-reveal>
          <figcaption className="hero__figure-caption">
            <span className="section-num">Fig. 01</span>
            <span className="meta">{hero.figure.caption}</span>
          </figcaption>

          <div className="hero__diagram" role="img"
               aria-label="Request path: client to gateway to queue to worker to database">
            {hero.figure.nodes.map((node, i) => (
              <div key={node} className="hero__node-group"
                   style={{ '--i': i } as React.CSSProperties}>
                <span className="hero__node">
                  <span className="hero__node-index">{String(i + 1).padStart(2, '0')}</span>
                  {node}
                </span>
                {i < hero.figure.nodes.length - 1 && (
                  <span className="hero__connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <p className="hero__figure-plain">
            {hero.figure.plain}
          </p>
        </figure>

      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
