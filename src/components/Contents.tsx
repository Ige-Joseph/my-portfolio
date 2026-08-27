import { sections, href } from '../data/navigation';
import { contents } from '../data/content';
import './Contents.css';

// ============================================================
// CONTENTS — the document's table of contents.
//
// Sits between the title page (Hero) and §01, filling what was
// dead space with the one thing a technical document always
// puts there. Doubles as real navigation.
// ============================================================

export default function Contents() {
  return (
    <nav className="contents" aria-label="Contents">
      <div className="container">

        <div className="contents__head" data-reveal>
          <span className="meta">{contents.label}</span>
          <span className="meta contents__count">{sections.length} sections</span>
        </div>

        <div className="rule rule--heavy" data-reveal="rule" />

        <ol className="contents__list">
          {sections.map((entry, i) => (
            <li
              key={entry.id}
              className="contents__item"
              data-reveal
              style={{ '--r': i + 1 } as React.CSSProperties}
            >
              <a href={href(entry)} className="contents__row">
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
