'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Observes elements with `[data-reveal]` and applies `.is-visible` when they enter the viewport.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach(el => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
