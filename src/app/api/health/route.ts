import { NextResponse } from 'next/server';
import { getDbConfig } from '@/lib/dbConfig';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

/**
 * Reports whether the DB_* env vars are actually visible to the running
 * process, and whether the database is actually reachable — without
 * exposing DB_USER/DB_PASSWORD values. Exists because Hostinger-style
 * deploys make it hard to tell "env vars weren't saved" apart from
 * "env vars are fine but the host is unreachable" from crash logs alone;
 * this settles it in one request instead of another guess-and-check round.
 */
export async function GET() {
  const envPresent = {
    DB_HOST: Boolean(process.env.DB_HOST),
    DB_PORT: Boolean(process.env.DB_PORT),
    DB_USER: Boolean(process.env.DB_USER),
    DB_PASSWORD: Boolean(process.env.DB_PASSWORD),
    DB_NAME: Boolean(process.env.DB_NAME),
  };

  const config = getDbConfig();

  let dbReachable = false;
  let error: string | null = null;
  try {
    await db.$queryRaw`SELECT 1`;
    dbReachable = true;
  } catch (err) {
    error = err instanceof Error ? err.message.slice(0, 300) : 'Unknown error';
  }

  return NextResponse.json({
    envPresent,
    resolvedHost: config.host,
    resolvedPort: config.port,
    resolvedDatabase: config.database,
    dbReachable,
    error,
  });
}
