'use client';

import { useMemo, useState, useTransition } from 'react';
import { deleteEnquiry } from './actions';

export type EnquiryRow = {
  id: number;
  name: string;
  phone: string;
  company: string | null;
  email: string | null;
  projectType: string;
  emirate: string;
  budget: string | null;
  contactMethod: string;
  attachmentUrl: string | null;
  createdAt: Date;
};

const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Outside UAE'];

const CONTACT_PILL: Record<string, string> = {
  WhatsApp: 'admin-pill-green',
  'Phone Call': 'admin-pill-blue',
  Email: 'admin-pill-gray',
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const PAGE_SIZE = 10;

/** Windowed page list with `null` standing in for an ellipsis gap. */
function paginationWindow(current: number, total: number): (number | null)[] {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const result: (number | null)[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push(null);
    result.push(p);
  });
  return result;
}

export default function EnquiriesTable({ submissions }: { submissions: EnquiryRow[] }) {
  const [query, setQuery] = useState('');
  const [emirate, setEmirate] = useState('All');
  const [page, setPage] = useState(1);
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return submissions.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        (s.email ?? '').toLowerCase().includes(q) ||
        (s.company ?? '').toLowerCase().includes(q);
      const matchesEmirate = emirate === 'All' || s.emirate === emirate;
      return matchesQuery && matchesEmirate;
    });
  }, [submissions, query, emirate]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  function handleEmirateChange(value: string) {
    setEmirate(value);
    setPage(1);
  }

  function handleDelete(id: number) {
    if (!confirm('Delete this enquiry? This cannot be undone.')) return;
    setPendingId(id);
    startTransition(async () => {
      await deleteEnquiry(id);
      setPendingId(null);
    });
  }

  return (
    <>
      <div className="admin-toolbar">
        <div className="admin-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder="Search enquiries by name, email or company…"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="admin-filter">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <select
            className="form-input admin-filter-select"
            value={emirate}
            onChange={(e) => handleEmirateChange(e.target.value)}
          >
            <option value="All">All Emirates</option>
            {EMIRATES.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Enquiry</th>
              <th>Project</th>
              <th>Emirate</th>
              <th>Prefers</th>
              <th>Budget</th>
              <th>Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', color: 'var(--ink-faint)', padding: '2rem' }}>
                  No enquiries match your search.
                </td>
              </tr>
            )}
            {paginated.map((s) => (
              <tr key={s.id} style={{ opacity: pendingId === s.id && isPending ? 0.5 : 1 }}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="admin-row-avatar" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                      </svg>
                    </div>
                    <div>
                      <div className="admin-row-name">{s.name}</div>
                      <div className="admin-row-sub">{s.email ?? s.phone}</div>
                      {s.company && <div className="admin-row-sub">{s.company}</div>}
                    </div>
                  </div>
                </td>
                <td>
                  <span className="admin-pill admin-pill-gray">{s.projectType}</span>
                </td>
                <td>{s.emirate}</td>
                <td>
                  <span className={`admin-pill ${CONTACT_PILL[s.contactMethod] ?? 'admin-pill-gray'}`}>
                    {s.contactMethod}
                  </span>
                </td>
                <td>
                  {s.budget ? (
                    <span className="admin-pill admin-pill-amber">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5" />
                      </svg>
                      {s.budget}
                    </span>
                  ) : (
                    '—'
                  )}
                </td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--ink-soft)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                    </svg>
                    {dateFormatter.format(s.createdAt)}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {s.attachmentUrl && (
                      <a
                        href={s.attachmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="admin-icon-btn"
                        title="View attachment"
                        aria-label="View attachment"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.44 11.05 12.25 20.24a5 5 0 1 1-7.07-7.07l9.19-9.19a3.33 3.33 0 0 1 4.71 4.71L9.9 17.87a1.67 1.67 0 0 1-2.36-2.36l8.49-8.49" />
                        </svg>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(s.id)}
                      className="admin-icon-btn is-danger"
                      title="Delete enquiry"
                      aria-label="Delete enquiry"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length > 0 && (
        <div className="admin-pagination">
          <p className="admin-pagination-info">
            Showing {pageStart + 1}–{Math.min(pageStart + PAGE_SIZE, filtered.length)} of {filtered.length}
          </p>

          <div className="admin-pagination-controls">
            <button
              type="button"
              className="admin-pagination-btn"
              disabled={currentPage === 1}
              onClick={() => setPage(currentPage - 1)}
              aria-label="Previous page"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {paginationWindow(currentPage, totalPages).map((p, i) =>
              p === null ? (
                <span key={`gap-${i}`} className="admin-pagination-ellipsis">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  className={`admin-pagination-btn${p === currentPage ? ' is-active' : ''}`}
                  onClick={() => setPage(p)}
                  aria-current={p === currentPage ? 'page' : undefined}
                >
                  {p}
                </button>
              )
            )}

            <button
              type="button"
              className="admin-pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => setPage(currentPage + 1)}
              aria-label="Next page"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
