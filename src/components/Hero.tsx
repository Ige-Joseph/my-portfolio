import { site } from '../data/site';
import './Hero.css';

const metrics = [
  {
    value: '8+',
    label: 'File conversion systems built',
    sub: 'Personal',
    icon: '⚙️',
  },
  {
    value: 'Payment\n& health',
    label: 'Platforms engineered',
    sub: 'End-to-end',
    icon: '🏗️',
  },
  {
    value: 'Architecture-\nled',
    label: 'Backend systems',
    sub: 'Distributed',
    icon: '⚡',
  },
  {
    value: 'End-to-end',
    label: 'Technical ownership',
    sub: 'Full stack',
    icon: '📐',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">

        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>{site.availabilityNote}</span>
        </div>

        <div className="hero__heading-wrap">
          <div className="hero__heading-line">
            <h1 className="hero__name">{site.name}</h1>
          </div>
          <div className="hero__heading-line hero__heading-line--indent">
            <span className="hero__serif">—</span>
            <span className="hero__role">Product Engineer</span>
          </div>
        </div>

        <p className="hero__tagline">
          I build the systems that make products reliable.
          <span className="hero__tagline-sub">Backend depth. Product thinking. End-to-end ownership.</span>
        </p>

        <p className="hero__description">
          When a product works smoothly — payments go through, files convert, notifications arrive on time —
          it's rarely an accident. I design and build the{' '}
          <span className="hero__highlight">backend infrastructure</span> and{' '}
          <span className="hero__highlight">distributed systems</span> that make that reliability possible,
          so users never have to think about what's running underneath.
        </p>

        <div className="hero__ctas">
          <a href="#projects" className="btn-primary">
            View my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href={site.cvUrl} download className="btn-outline">
            Download CV
          </a>
        </div>

        {/* Metric cards */}
        <div className="hero__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="hero__metric-card">
              <span className="hero__metric-icon">{m.icon}</span>
              <div className="hero__metric-value">{m.value}</div>
              <div className="hero__metric-label">{m.label}</div>
              <div className="hero__metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="hero__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{site.location}</span>
        </div>

        <div className="hero__system-preview">
          <span className="hero__system-preview-label">Architecture thinking, in practice</span>
          <div className="hero__system-flow">
            {['Client', 'API Gateway', 'Message Queue', 'Worker', 'Database'].map((node, i, arr) => (
              <div key={node} className="hero__flow-item">
                <div className="hero__flow-node">{node}</div>
                {i < arr.length - 1 && <div className="hero__flow-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
