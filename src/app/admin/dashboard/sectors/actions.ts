'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { saveUploadedImage } from '@/lib/uploads';
import { slugify } from '@/lib/slugify';

export type SectorFormState = { error?: string };

async function uniqueSlug(base: string): Promise<string> {
  let slug = base || 'sector';
  let n = 2;
  while (await db.sector.findUnique({ where: { slug } })) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

/** "one item per line" textarea -> string[]. Blank lines dropped. */
function linesToArray(raw: FormDataEntryValue | null): string[] | undefined {
  const text = String(raw ?? '').trim();
  if (!text) return undefined;
  return text.split('\n').map((line) => line.trim()).filter(Boolean);
}

/** "Title :: Text" per line -> {title, text}[]. */
function linesToHighlights(raw: FormDataEntryValue | null): { title: string; text: string }[] | undefined {
  const lines = linesToArray(raw);
  if (!lines) return undefined;
  return lines.map((line) => {
    const [title, ...rest] = line.split('::');
    return { title: title.trim(), text: rest.join('::').trim() };
  });
}

/** "Value :: Label" per line -> {value, label}[]. */
function linesToStats(raw: FormDataEntryValue | null): { value: string; label: string }[] | undefined {
  const lines = linesToArray(raw);
  if (!lines) return undefined;
  return lines.map((line) => {
    const [value, ...rest] = line.split('::');
    return { value: value.trim(), label: rest.join('::').trim() };
  });
}

export async function createSector(_prevState: SectorFormState, formData: FormData): Promise<SectorFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const desc = String(formData.get('desc') ?? '').trim();

  if (!name || !desc) {
    return { error: 'Name and description are required.' };
  }

  let photo = String(formData.get('photoUrl') ?? '').trim() || null;
  const upload = formData.get('photoFile');
  if (upload instanceof File && upload.size > 0) {
    try {
      photo = await saveUploadedImage(upload);
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Could not upload the photo.' };
    }
  }
  if (!photo) {
    return { error: 'A photo (upload or URL) is required.' };
  }

  const slug = await uniqueSlug(slugify(name));

  await db.sector.create({
    data: {
      slug,
      name,
      nameAr: String(formData.get('nameAr') ?? '').trim() || null,
      desc,
      descAr: String(formData.get('descAr') ?? '').trim() || null,
      photo,
      h1: String(formData.get('h1') ?? '').trim() || null,
      h1Ar: String(formData.get('h1Ar') ?? '').trim() || null,
      subtitle: String(formData.get('subtitle') ?? '').trim() || null,
      subtitleAr: String(formData.get('subtitleAr') ?? '').trim() || null,
      delivers: linesToArray(formData.get('delivers')),
      deliversAr: linesToArray(formData.get('deliversAr')),
      caseTitle: String(formData.get('caseTitle') ?? '').trim() || null,
      caseTitleAr: String(formData.get('caseTitleAr') ?? '').trim() || null,
      caseSub: String(formData.get('caseSub') ?? '').trim() || null,
      caseSubAr: String(formData.get('caseSubAr') ?? '').trim() || null,
      caseHighlights: linesToHighlights(formData.get('caseHighlights')),
      caseHighlightsAr: linesToHighlights(formData.get('caseHighlightsAr')),
      caseStats: linesToStats(formData.get('caseStats')),
      caseStatsAr: linesToStats(formData.get('caseStatsAr')),
      ctaTitle: String(formData.get('ctaTitle') ?? '').trim() || null,
      ctaTitleAr: String(formData.get('ctaTitleAr') ?? '').trim() || null,
      ctaSubtitle: String(formData.get('ctaSubtitle') ?? '').trim() || null,
      ctaSubtitleAr: String(formData.get('ctaSubtitleAr') ?? '').trim() || null,
    },
  });

  revalidatePath('/admin/dashboard/sectors');
  revalidatePath('/sectors');
  revalidatePath(`/sectors/${slug}`);

  return {};
}

export async function deleteSector(id: number) {
  const sector = await db.sector.delete({ where: { id } });
  revalidatePath('/admin/dashboard/sectors');
  revalidatePath('/sectors');
  revalidatePath(`/sectors/${sector.slug}`);
}
