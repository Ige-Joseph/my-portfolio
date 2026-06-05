import { site } from '../data/site';
import { socials } from '../data/socials';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const footerSocials = socials.filter((s) => s.showInFooter);

  return (
    <footer className="footer">
      <div className="footer__divider" />
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <a href="#" className="footer__logo">
              <span className="footer__logo-mark">J</span>
              <span>{site.name}</span>
            </a>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__copy">
              © {new Date().getFullYear()} {site.name}. {site.footerNote}
            </p>
          </div>

          <nav className="footer__nav">
            <p className="footer__nav-label">Navigation</p>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer__nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials-col">
            <p className="footer__nav-label">Connect</p>
            {footerSocials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__nav-link"
              >
                {s.label}
              </a>
            ))}
            <a href={site.cvUrl} download className="footer__nav-link footer__cv-link">
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
