'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Figure from '@/components/Figure';
import type { PhotoKey } from '@/lib/images';

export type GalleryItem = {
  name: string;
  category: string;
  location: string;
  photo: PhotoKey;
};

export type GalleryCategory = {
  name: string;
  slug: string;
};

/**
 * Matches the slugs hand-written in src/lib/sectors.ts, so a chip derived
 * from an item name lands on the same URL as one passed in from SECTORS.
 * 'Villas & Palaces' -> 'villas-and-palaces', 'Cafés' -> 'cafes'.
 */
function slugify(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Filterable project grid shared by /projects and /fabrication.
 *
 * The active filter lives in the URL rather than in component state, so a
 * sector link from the home page (/projects?category=restaurants) lands
 * pre-filtered, the result is shareable, and Back steps through filters.
 *
 * Reads useSearchParams, so callers on a prerendered route must wrap this in
 * a Suspense boundary or the production build fails.
 */
export default function ProjectGallery({
  items,
  categories,
}: {
  items: GalleryItem[];
  /** Full sector list, so a sector still gets a chip when no project is filed
   *  under it yet. Falls back to only the categories present in `items`. */
  categories?: GalleryCategory[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const chips = useMemo<GalleryCategory[]>(
    () =>
      categories ??
      Array.from(new Set(items.map((item) => item.category))).map((name) => ({
        name,
        slug: slugify(name),
      })),
    [categories, items]
  );

  /* An unknown or missing slug falls back to All rather than an empty grid,
     so a stale or hand-typed URL degrades to the full list. */
  const slug = searchParams.get('category');
  const active = chips.find((chip) => chip.slug === slug)?.name ?? 'All';

  const visible = active === 'All' ? items : items.filter((item) => item.category === active);

  const select = (next: string | null) => {
    /* replace, not push: filtering is not a navigation the user wants to
       unwind one chip at a time. scroll:false keeps the grid in place. */
    router.replace(next ? `${pathname}?category=${next}` : pathname, { scroll: false });
  };

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
        <button
          type="button"
          onClick={() => select(null)}
          aria-pressed={active === 'All'}
          className={`filter-chip${active === 'All' ? ' is-active' : ''}`}
        >
          All
        </button>
        {chips.map((chip) => (
          <button
            key={chip.slug}
            type="button"
            onClick={() => select(chip.slug)}
            aria-pressed={active === chip.name}
            className={`filter-chip${active === chip.name ? ' is-active' : ''}`}
          >
            {chip.name}
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
                  fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
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
