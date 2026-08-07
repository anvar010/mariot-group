import path from 'path';
import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { UPLOAD_DIR } from '@/lib/uploads';

const MIME_BY_EXTENSION: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
};

/**
 * Serves admin-uploaded files directly from UPLOAD_DIR, rather than relying
 * on Next's automatic public/ static passthrough — which only covers the
 * default location. This is what makes UPLOAD_DIR actually work when it
 * points somewhere else (e.g. Hostinger's ../uploads, kept outside the
 * versioned build folder so uploads survive a redeploy): without this
 * route, files saved there would have nothing to serve them at /uploads/*.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params;
  const relative = segments.join('/');

  const root = path.resolve(UPLOAD_DIR);
  const target = path.resolve(root, relative);

  // Refuse anything that escapes UPLOAD_DIR (e.g. "..%2f..%2fetc/passwd").
  if (target !== root && !target.startsWith(root + path.sep)) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const data = await readFile(target);
    const extension = path.extname(target).toLowerCase();
    const contentType = MIME_BY_EXTENSION[extension] ?? 'application/octet-stream';
    return new NextResponse(new Uint8Array(data), {
      headers: {
        'Content-Type': contentType,
        // Filenames are random UUIDs — a given URL's content never changes.
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
