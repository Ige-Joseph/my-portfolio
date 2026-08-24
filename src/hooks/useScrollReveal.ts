import { useEffect } from 'react';

// ============================================================
// useScrollReveal
// Observes every [data-reveal] element and adds `is-revealed`
// as it enters the viewport. One observer for the whole page.
//
// Under prefers-reduced-motion everything is revealed at once,
// so no content is ever gated behind an animation.
// ============================================================

export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (nodes.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // reveal once, then stop watching
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);
}
