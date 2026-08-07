import { PrismaClient } from '@/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

/* Next.js hot-reloads server modules in dev, which would otherwise spin up a
   fresh PrismaClient (and a fresh connection pool) on every edit. Stashing
   the instance on `globalThis` survives the reload. */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    /* The mariadb adapter's constructor throws on `undefined` (not a normal,
       catchable rejection), and `db` below is built the moment this module
       is imported — so a missing DATABASE_URL would otherwise crash the
       entire Next.js build the instant any page imports `db`, even pages
       that never end up running a query. Falling back to a syntactically
       valid but unreachable URL turns that into an ordinary connection
       error, raised only when a query actually runs and only where it's
       awaited — which callers can catch, and which no longer takes down
       an unrelated build step. DATABASE_URL still must be set correctly
       for the app to actually work. */
    console.error('DATABASE_URL is not set — database queries will fail until it is configured.');
  }
  const adapter = new PrismaMariaDb(url ?? 'mysql://unconfigured:unconfigured@127.0.0.1:3306/unconfigured');
  return new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
