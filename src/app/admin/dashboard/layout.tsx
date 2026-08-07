import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE, isValidSessionToken } from '@/lib/auth';
import { logout } from '../actions';
import SidebarNav from './SidebarNav';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  if (!isValidSessionToken(cookieStore.get(SESSION_COOKIE)?.value)) {
    redirect('/admin');
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-mark" aria-hidden>
            M
          </div>
          <div className="admin-sidebar-brand-text">
            <strong>Mariot</strong>
            <span>Admin</span>
          </div>
        </div>

        <SidebarNav />

        <div className="admin-sidebar-footer">
          <p className="admin-sidebar-user">Signed in as admin</p>
          <form action={logout}>
            <button type="submit" className="btn-secondary-white" style={{ width: '100%' }}>
              Sign out
            </button>
          </form>
        </div>
      </aside>

      <div className="admin-content">{children}</div>
    </div>
  );
}
