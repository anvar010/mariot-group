import { db } from '@/lib/db';

export default async function AdminDashboardPage() {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [enquiriesThisMonth, totalEnquiries, totalConsultations, totalOpenings, totalUrgent] = await Promise.all([
    db.contactSubmission.count({ where: { createdAt: { gte: startOfMonth } } }),
    db.contactSubmission.count(),
    db.consultationRequest.count(),
    db.restaurantOpeningRequest.count(),
    db.urgentRequest.count(),
  ]);

  const stats = [
    { label: 'Enquiries this month', value: String(enquiriesThisMonth) },
    { label: 'Total enquiries', value: String(totalEnquiries) },
    { label: 'Consultations booked', value: String(totalConsultations) },
    { label: 'Opening requests', value: String(totalOpenings) },
    { label: 'Urgent requests', value: String(totalUrgent) },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 0' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="eyebrow">Admin</span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.9rem',
            margin: '0.5rem 0 0',
            color: 'var(--ink)',
          }}
        >
          Overview
        </h1>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--rule)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-1)',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '2.1rem',
                color: 'var(--primary)',
              }}
            >
              {stat.value}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', marginTop: '0.4rem' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
