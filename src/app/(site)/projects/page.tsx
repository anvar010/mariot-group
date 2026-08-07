import { Suspense } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import ProjectGallery from '@/components/ProjectGallery';
import { db } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Projects — Mariot Kitchen Equipment',
  description:
    'Selected turn-key commercial kitchen deliveries across the UAE — hotels, resorts, restaurants, hospitals, bakeries and central kitchens.',
};

/* Reads CMS data, so it must render per-request rather than at build time —
   a build should never fail because the database wasn't reachable from the
   build environment. */
export const dynamic = 'force-dynamic';

const container: React.CSSProperties = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 var(--gutter)',
};

export default async function Projects() {
  const [projects, sectors] = await Promise.all([
    db.project.findMany({ where: { isFabrication: false }, orderBy: { order: 'asc' } }),
    db.sector.findMany({ orderBy: { order: 'asc' } }),
  ]);

  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Selected turn-key deliveries{' '}
            <span style={{ color: 'var(--primary)' }}>across the UAE</span>
          </>
        }
        intro="From a single cafe counter to a hotel production kitchen running three shifts — here is a cross-section of what we have designed, built and commissioned."
        photo="restaurantWarm"
        stats={[
          { value: '500+', label: 'Projects Delivered' },
          { value: '7', label: 'Emirates Served' },
          { value: '20+', label: 'Years Operating' },
        ]}
      />

      <section style={{ backgroundColor: 'var(--paper)' }}>
        <div
          style={{
            ...container,
            paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
            paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          }}
        >
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem', maxWidth: '640px' }}>
              <span className="eyebrow eyebrow-blue">Project index</span>
              <h2 className="h2" style={{ marginTop: '1.25rem' }}>
                Filter by sector
              </h2>
              <p className="p-large" style={{ marginTop: '1rem' }}>
                Pick a sector to see the deliveries in it. Every segment we serve is
                listed, so an empty result means we have not published that work yet,
                not that we have not done it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* ProjectGallery reads the ?category= param, and this route is
                prerendered, so the Suspense boundary is required: without it
                the production build fails on the CSR bailout. Chips come from
                SECTORS rather than from PROJECTS so every sector the site
                claims to serve is filterable, including the ones with no
                project filed under them yet. */}
            <Suspense fallback={<div style={{ minHeight: '420px' }} />}>
              <ProjectGallery
                items={projects.map((p) => ({ ...p, location: p.location ?? '' }))}
                categories={sectors.map(({ name, slug }) => ({ name, slug }))}
              />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
        <div style={{ ...container, padding: 'clamp(3.5rem, 7vw, 6rem) var(--gutter)' }}>
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              <div style={{ maxWidth: '620px' }}>
                <span className="eyebrow on-dark">Your project next</span>
                <h2 className="h2" style={{ marginTop: '1.25rem', color: 'var(--paper)' }}>
                  Let&rsquo;s scope your kitchen
                </h2>
                <p className="p-large" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
                  Share a layout or a concept and we will come back with an equipment schedule and
                  a budget range.
                </p>
              </div>
              <Link href="/contact" className="premium-btn red-btn">
                Start a Project
                <span className="btn-circle">
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
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
