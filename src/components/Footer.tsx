import { site } from '../data/site';
import { socials } from '../data/socials';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Selected work', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const footerSocials = socials.filter((s) => s.showInFooter);

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__inner">

          <div className="footer__identity">
            <a href="#hero" className="footer__name">{site.name}</a>
            <p className="footer__tagline">{site.tagline}</p>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <p className="meta footer__col-label">Contents</p>
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} className="footer__link">
                <span className="footer__link-num">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__col">
            <p className="meta footer__col-label">Connect</p>
            {footerSocials.map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                 className="footer__link">
                {s.label}
                <span className="footer__link-mark" aria-hidden="true">↗</span>
              </a>
            ))}
            <a href={site.cvUrl} download className="footer__link footer__link--accent">
              Curriculum vitae
              <span className="footer__link-mark" aria-hidden="true">↓</span>
            </a>
          </div>

        </div>

        {/* Colophon */}
        <div className="footer__colophon">
          <p className="meta">
            © {new Date().getFullYear()} {site.name} · {site.footerNote}
          </p>
          <p className="meta footer__typefaces">
            Set in Archivo, DM&nbsp;Mono &amp; Instrument&nbsp;Serif
          </p>
        </div>

      </div>
    </footer>
  );
}
