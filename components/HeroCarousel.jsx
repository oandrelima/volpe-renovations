'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/assets/brand/volpe-hero.webp',
    mobileSrc: '/assets/brand/volpe-hero-mobile.webp',
    fallback: '/assets/brand/volpe-hero.jpg',
    alt: 'Custom modern kitchen renovation in Tampa Bay, FL by Volpe Renovations Co.',
  },
  {
    src: '/assets/services/bathroom-preview.webp',
    alt: 'Complete bathroom remodeling with walk-in glass shower and double vanity',
  },
  {
    src: '/assets/services/kitchen-preview.webp',
    alt: 'Kitchen remodeling with forest green shaker cabinets and quartz island',
  },
  {
    src: '/assets/services/full-renovation-preview.webp',
    alt: 'Open-concept living room renovation with wide-plank oak flooring and custom millwork',
  },
  {
    src: '/assets/services/bathroom-gallery-2.webp',
    alt: 'Freestanding soaking tub with brushed gold fixtures and marble tile wall',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [mountAll, setMountAll] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mountTimer = window.setTimeout(() => setMountAll(true), 2500);
    if (reducedMotion) return () => window.clearTimeout(mountTimer);

    const id = window.setInterval(() => {
      setMountAll(true);
      setActive(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      window.clearTimeout(mountTimer);
      window.clearInterval(id);
    };
  }, []);

  const visibleSlides = mountAll ? slides : [slides[0]];

  return (
    <>
      <div className="hero__slides" aria-hidden="true">
        {visibleSlides.map((slide, index) => (
          <picture
            key={slide.src}
            className={`hero__image hero__slide${index === active ? ' is-active' : ''}`}
          >
            {slide.mobileSrc && <source media="(max-width: 640px)" srcSet={slide.mobileSrc} type="image/webp" />}
            <source srcSet={slide.src} type="image/webp" />
            <img
              src={slide.fallback || slide.src}
              width="1440"
              height="785"
              alt={index === 0 ? slide.alt : ''}
              fetchPriority={index === 0 ? 'high' : undefined}
              decoding="async"
            />
          </picture>
        ))}
      </div>
      <div className="hero__dots" role="group" aria-label="Hero project photos">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === active ? 'is-active' : ''}
            aria-label={`Show project photo ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => {
              setMountAll(true);
              setActive(index);
            }}
          />
        ))}
      </div>
    </>
  );
}
