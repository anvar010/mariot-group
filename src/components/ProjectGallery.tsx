'use client';

import { useMemo, useState } from 'react';
import Figure from '@/components/Figure';
import type { PhotoKey } from '@/lib/images';

export type GalleryItem = {
  name: string;
  category: string;
  location: string;
  photo: PhotoKey;
};

/**
 * Filterable project grid shared by /projects and /fabrication. The category
 * chips on those pages used to be inert buttons — this makes them work, and
 * derives the chip list from the items so it can never drift out of sync.
 */
export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? items : items.filter((item) => item.category === active);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by sector"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`filter-chip${active === category ? ' is-active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
        }}
      >
        {visible.map((item, i) => (
          <article key={item.name} className="hover-lift" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--rule)' }}>
            <Figure
              photo={item.photo}
              ratio="4 / 3"
              scrim="soft"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="figure-zoom"
              style={{ border: 'none', borderBottom: '1px solid var(--rule)' }}
            >
              <span className={`figure-tag${i % 3 === 1 ? ' on-accent' : ''}`}>{item.category}</span>
              <span className="figure-caption" style={{ padding: '1.1rem 1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.82)',
                  }}
                >
                  {item.location}
                </span>
              </span>
            </Figure>

            <div
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  textTransform: 'uppercase',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                }}
              >
                {item.name}
              </h3>
              <span aria-hidden style={{ color: 'var(--primary)', flexShrink: 0 }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="p-large" style={{ padding: '3rem 0' }}>
          No projects listed in this sector yet <a href="/contact" style={{ color: 'var(--primary)', fontWeight: 700 }}>ask us about one</a>.
        </p>
      )}
    </>
  );
}
