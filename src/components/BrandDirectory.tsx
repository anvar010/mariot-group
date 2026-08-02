'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { BRANDS } from '@/lib/brands';

/** First character used to group a brand — digits all sit under '#'. */
function initial(name: string) {
  const char = name[0].toUpperCase();
  return /[A-Z]/.test(char) ? char : '#';
}

export default function BrandDirectory() {
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const term = query.trim().toLowerCase();
    const matches = term
      ? BRANDS.filter((brand) => brand.name.toLowerCase().includes(term))
      : BRANDS;

    const byLetter = new Map<string, typeof BRANDS>();
    for (const brand of [...matches].sort((a, b) => a.name.localeCompare(b.name))) {
      const key = initial(brand.name);
      const bucket = byLetter.get(key);
      if (bucket) bucket.push(brand);
      else byLetter.set(key, [brand]);
    }
    return [...byLetter.entries()];
  }, [query]);

  const count = groups.reduce((total, [, list]) => total + list.length, 0);
  const activeLetters = new Set(groups.map(([letter]) => letter));

  return (
    <>
      {/* Search + A–Z rail */}
      <div className="brand-toolbar">
        <div style={{ position: 'relative', flex: '1 1 260px', maxWidth: '380px' }}>
          <svg
            aria-hidden
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--ink-faint)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <input
            type="search"
            className="form-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search brands"
            aria-label="Search brands"
            style={{ paddingLeft: '2.75rem' }}
          />
        </div>

        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>
          {count} {count === 1 ? 'Brand' : 'Brands'}
        </p>

        <nav className="brand-az" aria-label="Jump to letter">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) =>
            activeLetters.has(letter) ? (
              <a key={letter} href={`#brand-${letter}`}>{letter}</a>
            ) : (
              <span key={letter} aria-hidden>{letter}</span>
            ),
          )}
        </nav>
      </div>

      {count === 0 ? (
        <p className="p-large" style={{ padding: '3rem 0' }}>
          No brand matches “{query}”. We supply well beyond this list — <a href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>ask us about a specific manufacturer</a>.
        </p>
      ) : (
        groups.map(([letter, list]) => (
          <section key={letter} id={`brand-${letter}`} style={{ scrollMarginTop: '7rem', marginBottom: '2.5rem' }}>
            <div className="brand-letter">
              <span>{letter}</span>
              <span aria-hidden className="brand-letter-rule" />
            </div>

            <div className="brand-grid">
              {list.map((brand) => (
                <div key={brand.file} className="brand-cell">
                  <span className="brand-cell-logo">
                    <Image
                      src={`/brands/${brand.file}`}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="(max-width: 768px) 40vw, 180px"
                      style={{ objectFit: 'contain' }}
                    />
                  </span>
                  <span className="brand-cell-name">{brand.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
