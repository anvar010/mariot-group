'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { shopUrl, brandLogoSrc } from '@/lib/brands';

export type DirectoryBrand = { name: string; slug: string; file: string };

export default function BrandDirectory({ brands }: { brands: DirectoryBrand[] }) {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    const sorted = [...brands].sort((a, b) => a.name.localeCompare(b.name));
    const term = query.trim().toLowerCase();
    return term ? sorted.filter((brand) => brand.name.toLowerCase().includes(term)) : sorted;
  }, [brands, query]);

  return (
    <>
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
          {matches.length} {matches.length === 1 ? 'Brand' : 'Brands'}
        </p>
      </div>

      {matches.length === 0 ? (
        <p className="p-large" style={{ padding: '3rem 0' }}>
          No brand matches “{query}”. We supply well beyond this list —{' '}
          <a href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            ask us about a specific manufacturer
          </a>
          .
        </p>
      ) : (
        <div className="brand-grid">
          {matches.map((brand) => (
            /* The name carries in alt/title rather than a caption — the logos are
               the identification, and 98 repeated captions only add noise. */
            <a
              key={brand.file}
              href={shopUrl(brand.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-cell"
              title={brand.name}
            >
              <span className="brand-cell-logo">
                <Image
                  src={brandLogoSrc(brand.file)}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 200px"
                  style={{ objectFit: 'contain' }}
                />
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
