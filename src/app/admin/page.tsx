import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE, isValidSessionToken } from '@/lib/auth';
import LoginForm from './LoginForm';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authed = isValidSessionToken(cookieStore.get(SESSION_COOKIE)?.value);

  if (authed) {
    redirect('/admin/dashboard');
  }

  return <LoginForm />;
}
