import './About.css';

// ============================================================
// PRINCIPLES — numbered clauses, not icon cards.
// ============================================================

const principles = [
  {
    title: 'Reliability by design',
    body: 'I design for failure before I design for success. Good infrastructure handles the edge cases that most architectures ignore.',
  },
  {
    title: 'Product awareness',
    body: 'Backend decisions affect the user experience in ways that aren’t always obvious. I think about the product impact of every infrastructure choice.',
  },
  {
    title: 'End-to-end ownership',
    body: 'From the first architecture diagram to the deployed container — I take responsibility for the full system, not just my part of it.',
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">01</span>
          <span className="section-label">About</span>
          <h2 className="section-title">Building products that work under pressure</h2>
        </div>

        {/* ---- Profile ---- */}
        <div className="about__body doc-grid" data-reveal>
          <div className="doc-margin">
            <span>Profile</span>
          </div>

          <div className="about__bio">
            <p className="about__lede">
              I&rsquo;m a backend-focused product engineer based in Lagos, Nigeria. I specialise
              in the infrastructure layer &mdash; the distributed systems, payment pipelines, and
              APIs that sit behind a product and determine whether it&rsquo;s reliable or fragile.
            </p>
            <p>
              I&rsquo;ve built a credit-based payment gateway that routes transactions through
              multiple providers and keeps wallet balances consistent even when services are
              temporarily down. I&rsquo;ve designed file conversion infrastructure where 8+
              processing pipelines run in complete isolation, so a failed video job never slows
              down a document conversion. And at Talenvo, I&rsquo;ve led backend architecture for
              a health app and built a scalable content API &mdash; both from initial design
              through to production.
            </p>
            <p>
              What drives my work is a simple idea: the best infrastructure is the kind users
              never think about. I design systems to be reliable by default &mdash; not as an
              afterthought &mdash; and I think carefully about the tradeoffs that come with every
              architecture decision.
            </p>
            <p>
              Outside pure backend work, I have hands-on experience with Docker, WordPress,
              Adobe Creative Suite, Blender, and FFmpeg. That range helps me understand the full
              product, collaborate across teams, and make better technical calls.
            </p>
          </div>
        </div>

        {/* ---- Principles ---- */}
        <div className="about__principles doc-grid">
          <div className="doc-margin">
            <span>Principles</span>
          </div>

          <ol className="about__principle-list">
            {principles.map((p, i) => (
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
