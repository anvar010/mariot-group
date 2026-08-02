'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/** Height of the fixed header, so anchored sections don't land underneath it. */
const HEADER_OFFSET = 88;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Honour the OS setting — hijacking the scroll is exactly what this asks us not to do.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Lenis only owns the wheel; in-page links still jump unless we hand them over.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.('a');
      const href = anchor?.getAttribute('href');
      if (!anchor || !href) return;

      const hash = href.startsWith('#')
        ? href
        : href.startsWith('/#') && window.location.pathname === '/'
          ? href.slice(1)
          : null;
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -HEADER_OFFSET });
      window.history.pushState(null, '', hash);
    };

    // Capture phase: next/link bails out once defaultPrevented is set, but only
    // if we get there first — in the bubble phase it has already jumped.
    document.addEventListener('click', onClick, true);

    // A URL that arrives with a hash should settle below the header too.
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => lenis.scrollTo(target as HTMLElement, { offset: -HEADER_OFFSET, immediate: true }), 0);
      }
    }

    return () => {
      document.removeEventListener('click', onClick, true);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
