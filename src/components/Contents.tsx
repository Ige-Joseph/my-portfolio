import './Contents.css';

// ============================================================
// CONTENTS — the document's table of contents.
//
// Sits between the title page (Hero) and §01, filling what was
// dead space with the one thing a technical document always
// puts there. Doubles as real navigation.
// ============================================================

const entries = [
  { num: '01', label: 'About',         desc: 'Background, principles, how I work',   href: '#about' },
  { num: '02', label: 'Selected work', desc: 'Systems built, shipped, and running',  href: '#projects' },
  { num: '03', label: 'Capabilities',  desc: 'Stack, tooling, and domains',          href: '#skills' },
  { num: '04', label: 'Experience',    desc: 'Roles, residencies, and delivery',     href: '#experience' },
  { num: '05', label: 'Contact',       desc: 'Availability and channels',            href: '#contact' },
];

export default function Contents() {
  return (
    <nav className="contents" aria-label="Contents">
      <div className="container">

        <div className="contents__head" data-reveal>
          <span className="meta">Contents</span>
          <span className="meta contents__count">{entries.length} sections</span>
        </div>

        <div className="rule rule--heavy" data-reveal="rule" />

        <ol className="contents__list">
          {entries.map((entry, i) => (
            <li
              key={entry.href}
              className="contents__item"
              data-reveal
              style={{ '--r': i + 1 } as React.CSSProperties}
            >
              <a href={entry.href} className="contents__row">
                <span className="contents__num">{entry.num}</span>
                <span className="contents__label">{entry.label}</span>
                <span className="contents__desc">{entry.desc}</span>
                <span className="contents__leader" aria-hidden="true" />
                <span className="contents__mark" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ol>

      </div>
    </nav>
  );
}
