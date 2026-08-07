'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { saveUploadedImage } from '@/lib/uploads';
import { slugify } from '@/lib/slugify';

export type BrandFormState = { error?: string };

async function uniqueSlug(base: string): Promise<string> {
  let slug = base || 'brand';
  let n = 2;
  while (await db.brand.findUnique({ where: { slug } })) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

export async function createBrand(_prevState: BrandFormState, formData: FormData): Promise<BrandFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const categoriesRaw = String(formData.get('categories') ?? '').trim();

  if (!name) {
    return { error: 'Brand name is required.' };
  }

  let file: string | null = null;
  const upload = formData.get('logoFile');
  if (upload instanceof File && upload.size > 0) {
    try {
      file = await saveUploadedImage(upload);
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Could not upload the logo.' };
    }
  }
  if (!file) {
    return { error: 'A logo image is required.' };
  }

  const count = await db.brand.count();
  const slug = await uniqueSlug(slugify(name));
  const categories = categoriesRaw ? categoriesRaw.split(',').map((c) => c.trim()).filter(Boolean) : [];

  await db.brand.create({
    data: { slug, name, file, categories, order: count },
  });

  revalidatePath('/admin/dashboard/brands');
  revalidatePath('/brands');
  revalidatePath(`/brands/${slug}`);

  return {};
}

export async function deleteBrand(id: number) {
  const brand = await db.brand.delete({ where: { id } });
  revalidatePath('/admin/dashboard/brands');
  revalidatePath('/brands');
  revalidatePath(`/brands/${brand.slug}`);
}
