import { db } from '@/lib/db';
import { deleteUrgentRequest } from './actions';

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const URGENCY_PILL: Record<string, string> = {
  'Same day': 'admin-pill-green',
  'Next 48 hrs': 'admin-pill-amber',
  'This week': 'admin-pill-gray',
};

export default async function UrgentTable() {
  const requests = await db.urgentRequest.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
        {requests.length} request{requests.length === 1 ? '' : 's'} from the urgent request page.
      </p>

      {requests.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No urgent requests yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Urgency</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Business</th>
                <th>Problem</th>
                <th>Equipment</th>
                <th>Emirate</th>
                <th>Photo</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id}>
                  <td>
                    <span className={`admin-pill ${URGENCY_PILL[r.urgency] ?? 'admin-pill-gray'}`}>{r.urgency}</span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{r.contactName}</td>
                  <td>
                    <a href={`tel:${r.phone}`} style={{ color: 'var(--primary)' }}>
                      {r.phone}
                    </a>
                  </td>
                  <td>{r.businessName ?? '—'}</td>
                  <td>{r.problem}</td>
                  <td>{r.equipmentType ?? '—'}</td>
                  <td>{r.emirate}</td>
                  <td>
                    {r.attachmentUrl ? (
                      <a href={r.attachmentUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                        View
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td>{dateFormatter.format(r.createdAt)}</td>
                  <td>
                    <form action={deleteUrgentRequest.bind(null, r.id)}>
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
