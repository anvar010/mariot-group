import { randomUUID } from 'crypto';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const MAX_BYTES = 10 * 1024 * 1024; // 10MB

const IMAGE_EXTENSION_BY_MIME: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
};

async function writeUpload(file: File, extension: string): Promise<string> {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const filename = `${randomUUID()}.${extension}`;
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), bytes);
  return `/uploads/${filename}`;
}

/** Saves an uploaded image under /public/uploads and returns its public URL path. */
export async function saveUploadedImage(file: File): Promise<string> {
  if (!file || file.size === 0) {
    throw new Error('No file provided.');
  }
  if (file.size > MAX_BYTES) {
    throw new Error('Image must be smaller than 10MB.');
  }
  const extension = IMAGE_EXTENSION_BY_MIME[file.type];
  if (!extension) {
    throw new Error('Unsupported image type. Use JPEG, PNG, WebP, GIF or SVG.');
  }
  return writeUpload(file, extension);
}

/**
 * Saves an arbitrary attachment (BOQs, CAD drawings, …) under /public/uploads.
 * Validated by filename extension rather than MIME type — browsers report
 * inconsistent (often blank or `application/octet-stream`) types for formats
 * like `.dwg`.
 */
export async function saveUploadedAttachment(
  file: File,
  allowedExtensions: string[]
): Promise<string> {
  if (!file || file.size === 0) {
    throw new Error('No file provided.');
  }
  if (file.size > MAX_BYTES) {
    throw new Error('File must be smaller than 10MB.');
  }
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !allowedExtensions.includes(extension)) {
    throw new Error(`Unsupported file type. Use: ${allowedExtensions.join(', ')}.`);
  }
  return writeUpload(file, extension);
}
