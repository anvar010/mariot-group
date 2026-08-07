/**
 * Reads the database connection from separate DB_HOST / DB_USER /
 * DB_PASSWORD / DB_NAME / DB_PORT variables, rather than a single
 * DATABASE_URL string — some hosts (Hostinger's Node.js app environment
 * variables panel, for one) only offer separate key/value fields, with no
 * way to enter one value containing a full connection string.
 *
 * No dependency on the generated Prisma client here: prisma.config.ts
 * imports this too, and runs before that client necessarily exists yet
 * (e.g. the very first `prisma generate`).
 */
export type DbConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

export function getDbConfig(): DbConfig {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    // Doesn't throw here — callers get a syntactically valid but unreachable
    // config instead, so a missing/incomplete env fails as an ordinary,
    // catchable connection error at query time rather than crashing
    // whatever happened to import this module first (see src/lib/db.ts).
    console.error('DB_HOST, DB_USER and DB_NAME must all be set — database access will fail until they are.');
  }

  return {
    host: DB_HOST || '127.0.0.1',
    port: DB_PORT ? Number(DB_PORT) : 3306,
    user: DB_USER || 'unconfigured',
    password: DB_PASSWORD ?? '',
    database: DB_NAME || 'unconfigured',
  };
}

/** Prisma's own CLI (migrate, studio, generate --sql, …) needs a single
 *  connection-string URL rather than a config object — composed from the
 *  same DB_* variables so there's still one source of truth. */
export function getDatabaseUrl(): string {
  const { host, port, user, password, database } = getDbConfig();
  const auth = password ? `${encodeURIComponent(user)}:${encodeURIComponent(password)}` : encodeURIComponent(user);
  return `mysql://${auth}@${host}:${port}/${database}`;
}
