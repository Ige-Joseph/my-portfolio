import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <p className="section-label">About</p>
            <h2 className="section-title">
              Building products that<br />
              <span className="gradient-text">work under pressure</span>
            </h2>
            <div className="about__bio">
              <p>
                I'm a backend-focused product engineer based in Lagos, Nigeria. I specialise in the
                infrastructure layer — the distributed systems, payment pipelines, and APIs that sit
                behind a product and determine whether it's reliable or fragile.
              </p>
              <p>
                I've built a credit-based payment gateway that routes transactions through multiple
                providers and keeps wallet balances consistent even when services are temporarily down.
                I've designed file conversion infrastructure where 8+ processing pipelines run in
                complete isolation, so a failed video job never slows down a document conversion.
                And at Talenvo, I've led backend architecture for a health app and built a scalable
                content API — both from initial design through to production.
              </p>
              <p>
                What drives my work is a simple idea: the best infrastructure is the kind users
                never think about. I design systems to be reliable by default — not as an
                afterthought — and I think carefully about the tradeoffs that come with every
                architecture decision.
              </p>
              <p>
                Outside pure backend work, I have hands-on experience with Docker, WordPress,
                Adobe Creative Suite, Blender, and FFmpeg. That range helps me understand
                the full product, collaborate across teams, and make better technical calls.
              </p>
            </div>
          </div>

          <div className="about__pillars">
            <div className="about__pillar glass-card">
              <div className="about__pillar-icon">⚙️</div>
              <h3>Reliability by Design</h3>
              <p>I design for failure before I design for success. Good infrastructure handles the edge cases that most architectures ignore.</p>
            </div>
            <div className="about__pillar glass-card">
              <div className="about__pillar-icon">🔍</div>
              <h3>Product Awareness</h3>
              <p>Backend decisions affect the user experience in ways that aren't always obvious. I think about the product impact of every infrastructure choice.</p>
            </div>
            <div className="about__pillar glass-card">
              <div className="about__pillar-icon">📐</div>
              <h3>End-to-End Ownership</h3>
              <p>From the first architecture diagram to the deployed container — I take responsibility for the full system, not just my part of it.</p>
            </div>
          </div>
        </div>

        <div className="about__marquee-wrap">
          <div className="about__marquee">
            {[
              'FastAPI', 'Django', 'RabbitMQ', 'PostgreSQL', 'Distributed Systems',
              'Payment Infrastructure', 'Docker', 'FFmpeg', 'Celery', 'Outbox Pattern',
              'Paystack', 'OPay', 'Event-Driven', 'Idempotency', 'WordPress',
              'Blender', 'After Effects', 'Adobe Creative Suite', 'SQLAlchemy', 'Redis',
              'FastAPI', 'Django', 'RabbitMQ', 'PostgreSQL', 'Distributed Systems',
              'Payment Infrastructure', 'Docker', 'FFmpeg', 'Celery', 'Outbox Pattern',
            ].map((item, i) => (
              <span key={i} className="about__marquee-item">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
