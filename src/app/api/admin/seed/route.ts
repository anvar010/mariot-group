import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SESSION_COOKIE, isValidSessionToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { seedAll } from '@/lib/seed';

export const dynamic = 'force-dynamic';

/**
 * One-off way to populate a freshly migrated database (e.g. right after a
 * first deploy to a host we can't reach directly to run the seed script
 * ourselves) — reuses the app's own already-connected `db` client, so it
 * only needs whatever's already proven to work in production. Gated behind
 * the same admin session cookie as the dashboard; POST it once while
 * logged into /admin, e.g. from the browser console:
 *   fetch('/api/admin/seed', { method: 'POST' }).then(r => r.json()).then(console.log)
 */
export async function POST() {
  const cookieStore = await cookies();
  const authed = isValidSessionToken(cookieStore.get(SESSION_COOKIE)?.value);
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized — log into /admin first.' }, { status: 401 });
  }

  try {
    const summary = await seedAll(db);
    return NextResponse.json({ ok: true, summary });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
