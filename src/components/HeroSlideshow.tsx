'use client';

import { useEffect, useState } from 'react';

const IMAGES = [
  '/kitchen/hero-1.webp',
  '/kitchen/hero-2.webp',
  '/kitchen/hero-3.webp',
  '/kitchen/hero-4.webp',
  '/kitchen/hero-5.webp',
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="hero-slideshow">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          aria-hidden
          className={i === index ? 'active' : ''}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-dots">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            className={i === index ? 'on' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
