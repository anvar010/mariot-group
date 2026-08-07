import { createHmac, timingSafeEqual } from 'crypto';

export const SESSION_COOKIE = 'admin_session';
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not set. Add it to .env.local.');
  }
  return secret;
}

export function verifyCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME ?? '';
  const expectedPassword = process.env.ADMIN_PASSWORD ?? '';
  if (!expectedUsername || !expectedPassword) return false;
  return (
    timingSafeEqualStr(username, expectedUsername) &&
    timingSafeEqualStr(password, expectedPassword)
  );
}

/** Deterministic token derived from the session secret — no server-side store needed. */
export function createSessionToken(): string {
  return createHmac('sha256', getSessionSecret()).update(SESSION_COOKIE).digest('hex');
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  return timingSafeEqualStr(token, createSessionToken());
}
