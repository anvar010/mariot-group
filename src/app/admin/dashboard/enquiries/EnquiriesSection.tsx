import { db } from '@/lib/db';
import EnquiriesTable from './EnquiriesTable';

export default async function EnquiriesSection() {
  const submissions = await db.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const total = submissions.length;
  const thisMonth = submissions.filter((s) => s.createdAt >= startOfMonth).length;
  const withAttachment = submissions.filter((s) => s.attachmentUrl).length;
  const emiratesCovered = new Set(submissions.map((s) => s.emirate)).size;

  return (
    <>
      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(124, 92, 255, 0.12)', color: '#7c5cff' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8.5 12 14l9-5.5" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
            </svg>
          </div>
          <div>
            <div className="admin-stat-value">{total}</div>
            <div className="admin-stat-label">Total Enquiries</div>
            <div className="admin-stat-sublabel">All time</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#16a34a' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div>
            <div className="admin-stat-value">{thisMonth}</div>
            <div className="admin-stat-label">This Month</div>
            <div className="admin-stat-sublabel">New submissions</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(245, 158, 11, 0.14)', color: '#b45309' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05 12.25 20.24a5 5 0 1 1-7.07-7.07l9.19-9.19a3.33 3.33 0 0 1 4.71 4.71L9.9 17.87a1.67 1.67 0 0 1-2.36-2.36l8.49-8.49" />
            </svg>
          </div>
          <div>
            <div className="admin-stat-value">{withAttachment}</div>
            <div className="admin-stat-label">With Attachment</div>
            <div className="admin-stat-sublabel">BOQ or layout</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: 'rgba(42, 169, 222, 0.12)', color: 'var(--primary-deep)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
          <div>
            <div className="admin-stat-value">{emiratesCovered}</div>
            <div className="admin-stat-label">Emirates Covered</div>
            <div className="admin-stat-sublabel">Across submissions</div>
          </div>
        </div>
      </div>

      <EnquiriesTable submissions={submissions} />
    </>
  );
}
