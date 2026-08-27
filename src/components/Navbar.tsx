import { useState, useEffect } from 'react';
import { site } from '../data/site';
import { socials } from '../data/socials';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll state + read position, in one passive listener
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const span = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(span > 0 ? Math.min(Math.max(y / span, 0), 1) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Scroll spy — the active link follows the section you're reading,
  // not just the last one you clicked.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (inView) setActiveSection(`#${inView.target.id}`);
      },
      // Only the section crossing the middle band of the viewport counts
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
  };

  const navSocials = socials.filter((s) => s.showInNav);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-mark">J</span>
          <span className="navbar__logo-text">Joseph Ige</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__right">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          {navSocials.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label={s.label}>
              <SocialIcon icon={s.icon} />
            </a>
          ))}
          <a href="#contact" className="navbar__cta" onClick={() => handleNavClick('#contact')}>
            Hire me
          </a>
        </div>

        <div className="navbar__mobile-right">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Read position, drawn as a rule along the header's own edge */}
      <span
        className="navbar__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <nav className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => handleNavClick(link.href)}
            >
              <span className="navbar__mobile-link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-socials">
          {navSocials.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label={s.label}>
              <SocialIcon icon={s.icon} />
            </a>
          ))}
          <a href={site.cvUrl} download className="btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'github')
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
  if (icon === 'linkedin')
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;
}
