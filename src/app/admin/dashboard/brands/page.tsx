import Image from 'next/image';
import { db } from '@/lib/db';
import { brandLogoSrc } from '@/lib/brands';
import { deleteBrand } from './actions';
import NewBrandForm from './NewBrandForm';

export default async function BrandsAdminPage() {
  const brands = await db.brand.findMany({ orderBy: { order: 'asc' } });

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.9rem', margin: '0.5rem 0 0.75rem', color: 'var(--ink)' }}>
          Brands
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          {brands.length} brand{brands.length === 1 ? '' : 's'} — logos link out to the mariotstore.com shop filtered by brand.
        </p>
      </div>

      <NewBrandForm />

      {brands.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No brands yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Categories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id}>
                  <td>
                    <span style={{ position: 'relative', display: 'inline-block', width: '48px', height: '32px', backgroundColor: '#fff', borderRadius: '4px' }}>
                      <Image src={brandLogoSrc(brand.file)} alt={brand.name} fill sizes="48px" style={{ objectFit: 'contain' }} />
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{brand.name}</td>
                  <td style={{ color: 'var(--ink-soft)' }}>{(brand.categories as string[] | null)?.join(', ') || '—'}</td>
                  <td>
                    <form action={deleteBrand.bind(null, brand.id)}>
                      <button type="submit" className="admin-icon-btn is-danger" title="Delete" aria-label="Delete">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </form>
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
