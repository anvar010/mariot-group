'use client';

import { useEffect, useState } from 'react';

const WORDS = [
  { text: 'restaurants.', color: 'var(--primary)' },
  { text: 'hotels & resorts.', color: 'var(--accent)' },
  { text: 'cafés & bakeries.', color: 'var(--primary)' },
  { text: 'villas & palaces.', color: 'var(--accent)' },
];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <span key={index} className="word-swap" style={{ color: WORDS[index].color }}>
        {WORDS[index].text}
      </span>
    </span>
  );
}
