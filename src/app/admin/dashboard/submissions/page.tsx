import Link from 'next/link';
import { db } from '@/lib/db';
import EnquiriesSection from '../enquiries/EnquiriesSection';
import ConsultationsTable from '../consultations/ConsultationsTable';
import OpeningsTable from '../openings/OpeningsTable';
import UrgentTable from '../urgent/UrgentTable';

type SubmissionType = 'enquiries' | 'consultations' | 'openings' | 'urgent';

const TAB_LABELS: Record<SubmissionType, string> = {
  enquiries: 'Enquiries',
  consultations: 'Consultations',
  openings: 'Restaurant Openings',
  urgent: 'Urgent Requests',
};

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type: rawType } = await searchParams;
  const type: SubmissionType =
    rawType === 'consultations' || rawType === 'openings' || rawType === 'urgent' ? rawType : 'enquiries';

  const [enquiries, consultations, openings, urgent] = await Promise.all([
    db.contactSubmission.count(),
    db.consultationRequest.count(),
    db.restaurantOpeningRequest.count(),
    db.urgentRequest.count(),
  ]);

  const counts: Record<SubmissionType, number> = { enquiries, consultations, openings, urgent };

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.9rem',
            margin: '0.5rem 0 0.75rem',
            color: 'var(--ink)',
          }}
        >
          Form Entries
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>Every submission from the site&rsquo;s forms, in one place.</p>
      </div>

      <nav className="admin-tabs">
        {(Object.keys(TAB_LABELS) as SubmissionType[]).map((key) => (
          <Link key={key} href={`/admin/dashboard/submissions?type=${key}`} className={`admin-tab${type === key ? ' is-active' : ''}`}>
            {TAB_LABELS[key]}
            <span className="admin-tab-count">{counts[key]}</span>
          </Link>
        ))}
      </nav>

      {type === 'enquiries' && <EnquiriesSection />}
      {type === 'consultations' && <ConsultationsTable />}
      {type === 'openings' && <OpeningsTable />}
      {type === 'urgent' && <UrgentTable />}
    </div>
  );
}
