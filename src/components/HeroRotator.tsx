'use client';

import { useEffect, useState } from 'react';

const WORDS = [
  { text: 'restaurants.', color: 'var(--primary)' },
  { text: 'hotels & resorts.', color: 'var(--accent)' },
  { text: 'cafes & bakeries.', color: 'var(--primary)' },
  { text: 'villas & palaces.', color: 'var(--accent)' },
];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    /* An indefinitely cycling headline is exactly the kind of motion a
       reduced-motion preference is asking us to stop, and hiding only the
       CSS transition would still leave the word swapping. Hold on the first
       sector instead, and pick the rotation back up if the user changes the
       preference mid-visit. */
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    let id: ReturnType<typeof setInterval> | undefined;

    const sync = () => {
      clearInterval(id);
      if (query.matches) {
        setIndex(0);
        return;
      }
      id = setInterval(() => {
        setIndex((i) => (i + 1) % WORDS.length);
      }, 2600);
    };

    sync();
    query.addEventListener('change', sync);
    return () => {
      clearInterval(id);
      query.removeEventListener('change', sync);
    };
  }, []);

  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <span key={index} className="word-swap" style={{ color: WORDS[index].color }}>
        {WORDS[index].text}
      </span>
    </span>
  );
}
