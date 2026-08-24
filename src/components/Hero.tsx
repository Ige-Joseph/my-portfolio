import { site } from '../data/site';
import './Hero.css';

// ============================================================
// SPECIFICATION TABLE
// Verifiable facts only — no invented metrics, no emoji.
// Reads as the header block of an engineering document.
// ============================================================

const spec: { label: string; value: string }[] = [
  { label: 'Discipline', value: 'Backend / Distributed Systems' },
  { label: 'Current', value: 'Backend Engineer — Talenvo Residency' },
  { label: 'Selection', value: 'Top 1% of 2,000+ participants' },
  { label: 'Domains', value: 'Payments · Health · File processing' },
  { label: 'Core stack', value: 'Python · FastAPI · Django · RabbitMQ · Postgres' },
  { label: 'Based', value: 'Lagos, Nigeria · Remote' },
];

const requestPath = ['Client', 'Gateway', 'Queue', 'Worker', 'Database'];

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
            <span className="meta">Backend Engineer</span>
            <span className="hero__masthead-sep" aria-hidden="true" />
            <span className="meta">{site.location}</span>
          </div>
        </header>

        <div className="rule rule--heavy hero__masthead-rule" data-reveal="rule" />

        {/* ---- Statement + specification ---- */}
        <div className="hero__body">

          <div className="hero__lead">
            <p className="hero__statement" data-reveal style={{ '--r': 4 } as React.CSSProperties}>
              I build the systems that make products{' '}
              <em>reliable</em>.
            </p>

            <p className="hero__prose" data-reveal style={{ '--r': 5 } as React.CSSProperties}>
              When a product works smoothly — payments go through, files convert,
              notifications arrive on time — it&rsquo;s rarely an accident. I design and
              build the backend infrastructure and distributed systems that make that
              reliability possible, so users never have to think about what&rsquo;s
              running underneath.
            </p>

            <div className="hero__actions" data-reveal style={{ '--r': 6 } as React.CSSProperties}>
              <a href="#projects" className="btn-primary">
                Selected work
                <Arrow />
              </a>
              <a href={site.cvUrl} download className="btn-outline">
                Curriculum vitae
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
            {spec.map((row, i) => (
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
            <span className="meta">Request path — the shape of every system here</span>
          </figcaption>

          <div className="hero__diagram" role="img"
               aria-label="Request path: client to gateway to queue to worker to database">
            {requestPath.map((node, i) => (
              <div key={node} className="hero__node-group"
                   style={{ '--i': i } as React.CSSProperties}>
                <span className="hero__node">
                  <span className="hero__node-index">{String(i + 1).padStart(2, '0')}</span>
                  {node}
                </span>
                {i < requestPath.length - 1 && (
                  <span className="hero__connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <p className="hero__figure-plain">
            In plain terms: a request comes in, and is put in a queue so nothing is
            lost if something fails. A separate worker does the slow part. The result
            is stored. Almost everything below is a variation on this shape.
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
