import { db } from '@/lib/db';
import { deleteBranch } from './actions';
import NewBranchForm from './NewBranchForm';

export default async function BranchesAdminPage() {
  const branches = await db.branch.findMany({ orderBy: { order: 'asc' } });

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.9rem', margin: '0.5rem 0 0.75rem', color: 'var(--ink)' }}>
          Branches
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          {branches.length} branch{branches.length === 1 ? 'es' : 'es'} — each row powers a /branches/[slug] page.
        </p>
      </div>

      <NewBranchForm />

      {branches.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No branches yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Emirate</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id}>
                  <td style={{ fontWeight: 600 }}>{branch.name}</td>
                  <td>{branch.emirate}</td>
                  <td style={{ color: 'var(--ink-soft)' }}>{branch.phone}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <a
                        href={`/branches/${branch.slug}`}
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
                      <form action={deleteBranch.bind(null, branch.id)}>
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
