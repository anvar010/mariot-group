import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — Mariot Kitchen Equipment',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--paper)', color: 'var(--ink)' }}>
      {children}
    </div>
  );
}
