import { db } from '@/lib/db';
import { deleteCapability, deleteProcessStep } from './actions';
import NewCapabilityForm from './NewCapabilityForm';
import NewProcessStepForm from './NewProcessStepForm';

export default async function FabricationAdminPage() {
  const [capabilities, steps] = await Promise.all([
    db.fabricationCapability.findMany({ orderBy: { order: 'asc' } }),
    db.fabricationProcessStep.findMany({ orderBy: { order: 'asc' } }),
  ]);

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.9rem', margin: '0.5rem 0 0.75rem', color: 'var(--ink)' }}>
          Fabrication
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          What we build and how we build it — both grids shown on the /fabrication page.
        </p>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', margin: '0 0 1rem' }}>
        Capabilities ({capabilities.length})
      </h2>
      <NewCapabilityForm />
      {capabilities.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)', marginBottom: '2.5rem' }}>No capabilities yet.</p>
      ) : (
        <div className="admin-table-wrap" style={{ marginBottom: '2.5rem' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Arabic Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((cap) => (
                <tr key={cap.id}>
                  <td style={{ fontWeight: 600 }}>{cap.title}</td>
                  <td dir="rtl">{cap.titleAr ?? '—'}</td>
                  <td style={{ color: 'var(--ink-soft)' }}>{cap.desc}</td>
                  <td>
                    <form action={deleteCapability.bind(null, cap.id)}>
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

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', margin: '0 0 1rem' }}>
        Process Steps ({steps.length})
      </h2>
      <NewProcessStepForm />
      {steps.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No process steps yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Arabic Step</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step) => (
                <tr key={step.id}>
                  <td style={{ fontWeight: 600 }}>{step.step}</td>
                  <td dir="rtl">{step.stepAr ?? '—'}</td>
                  <td style={{ color: 'var(--ink-soft)' }}>{step.desc}</td>
                  <td>
                    <form action={deleteProcessStep.bind(null, step.id)}>
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
