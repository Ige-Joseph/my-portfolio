import { useEffect, useRef } from 'react';
import './BlueprintBackground.css';

// ============================================================
// BLUEPRINT BACKGROUND
// A faint engineering grid behind the content: minor rules,
// major rules, and registration ticks at major intersections.
// Drifts very slowly and parallaxes on scroll.
//
// Canvas rather than DOM so it costs one composited layer and
// no layout work. Fully static under prefers-reduced-motion.
// ============================================================

interface Props {
  theme: 'dark' | 'light';
}

const MINOR = 28;   // px between minor rules
const MAJOR = 140;  // px between major rules
const DRIFT = 0.004; // px per ms — deliberately almost imperceptible

export default function BlueprintBackground({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const palette = () =>
      theme === 'light'
        ? { minor: 'rgba(22,21,15,0.045)', major: 'rgba(22,21,15,0.085)', tick: 'rgba(217,61,19,0.16)' }
        : { minor: 'rgba(234,231,224,0.030)', major: 'rgba(234,231,224,0.060)', tick: 'rgba(255,92,51,0.16)' };

    const draw = (time: number) => {
      const { minor, major, tick } = palette();

      // Slow diagonal drift, plus a gentle scroll parallax
      const drift = reduced ? 0 : time * DRIFT;
      const park = scrollRef.current * 0.04;
      const ox = -((drift + park * 0.35) % MAJOR);
      const oy = -((drift * 0.6 + park) % MAJOR);

      ctx.clearRect(0, 0, width, height);

      // --- minor rules ---
      ctx.strokeStyle = minor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = ox % MINOR; x <= width; x += MINOR) {
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = oy % MINOR; y <= height; y += MINOR) {
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(width, Math.round(y) + 0.5);
      }
      ctx.stroke();

      // --- major rules ---
      ctx.strokeStyle = major;
      ctx.beginPath();
      for (let x = ox; x <= width; x += MAJOR) {
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = oy; y <= height; y += MAJOR) {
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(width, Math.round(y) + 0.5);
      }
      ctx.stroke();

      // --- registration ticks at major intersections ---
      ctx.strokeStyle = tick;
      ctx.beginPath();
      for (let x = ox; x <= width; x += MAJOR) {
        for (let y = oy; y <= height; y += MAJOR) {
          const px = Math.round(x) + 0.5;
          const py = Math.round(y) + 0.5;
          ctx.moveTo(px - 3, py);
          ctx.lineTo(px + 3, py);
          ctx.moveTo(px, py - 3);
          ctx.lineTo(px, py + 3);
        }
      }
      ctx.stroke();
    };

    const loop = (time: number) => {
      draw(time);
      frameRef.current = requestAnimationFrame(loop);
    };

    const onScroll = () => { scrollRef.current = window.scrollY; };

    resize();

    if (reduced) {
      draw(0);
    } else {
      frameRef.current = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Stop burning frames while the tab is hidden
    const onVisibility = () => {
      cancelAnimationFrame(frameRef.current);
      if (!document.hidden && !reduced) {
        frameRef.current = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="blueprint" aria-hidden="true" />;
}
