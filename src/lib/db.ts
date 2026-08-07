import { PrismaClient } from '@/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { getDbConfig } from './dbConfig';

/* Next.js hot-reloads server modules in dev, which would otherwise spin up a
   fresh PrismaClient (and a fresh connection pool) on every edit. Stashing
   the instance on `globalThis` survives the reload. */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const adapter = new PrismaMariaDb(getDbConfig());
  return new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
