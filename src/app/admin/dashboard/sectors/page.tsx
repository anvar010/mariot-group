import { db } from '@/lib/db';
import { deleteSector } from './actions';
import NewSectorForm from './NewSectorForm';

export default async function SectorsAdminPage() {
  const sectors = await db.sector.findMany({ orderBy: { order: 'asc' } });

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.9rem', margin: '0.5rem 0 0.75rem', color: 'var(--ink)' }}>
          Sectors
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          {sectors.length} sector{sectors.length === 1 ? '' : 's'} — each row powers a /sectors/[slug] page in both English and Arabic.
        </p>
      </div>

      <NewSectorForm />

      {sectors.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No sectors yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Arabic Name</th>
                <th>Slug</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sectors.map((sector) => (
                <tr key={sector.id}>
                  <td style={{ fontWeight: 600 }}>{sector.name}</td>
                  <td dir="rtl">{sector.nameAr ?? '—'}</td>
                  <td style={{ color: 'var(--ink-soft)' }}>{sector.slug}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <a
                        href={`/sectors/${sector.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="admin-icon-btn"
                        title="View on site"
                        aria-label="View on site"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <form action={deleteSector.bind(null, sector.id)}>
                        <button type="submit" className="admin-icon-btn is-danger" title="Delete" aria-label="Delete">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
