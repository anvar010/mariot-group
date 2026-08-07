import { db } from '@/lib/db';
import { deleteOpening } from './actions';

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default async function OpeningsTable() {
  const requests = await db.restaurantOpeningRequest.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
        {requests.length} request{requests.length === 1 ? '' : 's'} from the opening support page.
      </p>

      {requests.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No opening support requests yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Type</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Investment</th>
                <th>Stage</th>
                <th>Needs</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id}>
                  <td style={{ fontWeight: 600 }}>{r.conceptName}</td>
                  <td>{r.conceptType}</td>
                  <td>{r.contactName}</td>
                  <td>
                    <a href={`tel:${r.phone}`} style={{ color: 'var(--primary)' }}>
                      {r.phone}
                    </a>
                  </td>
                  <td>{r.investment ?? '—'}</td>
                  <td>{r.currentStage ?? '—'}</td>
                  <td className="admin-table-wrap-cell">{r.needs ?? '—'}</td>
                  <td>{dateFormatter.format(r.createdAt)}</td>
                  <td>
                    <form action={deleteOpening.bind(null, r.id)}>
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
    </>
  );
}
