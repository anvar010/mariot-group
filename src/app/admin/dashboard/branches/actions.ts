'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { slugify } from '@/lib/slugify';

export type BranchFormState = { error?: string };

async function uniqueSlug(base: string): Promise<string> {
  let slug = base || 'branch';
  let n = 2;
  while (await db.branch.findUnique({ where: { slug } })) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

export async function createBranch(_prevState: BranchFormState, formData: FormData): Promise<BranchFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const location = String(formData.get('location') ?? '').trim();
  const emirate = String(formData.get('emirate') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const mapUrl = String(formData.get('mapUrl') ?? '').trim();
  const mapEmbed = String(formData.get('mapEmbed') ?? '').trim();

  if (!name || !location || !emirate || !email || !phone || !mapUrl || !mapEmbed) {
    return { error: 'Name, location, emirate, email, phone, map link and map embed URL are required.' };
  }

  const count = await db.branch.count();
  const slug = await uniqueSlug(slugify(name));
  const whatsapp = String(formData.get('whatsapp') ?? '').trim() || phone;

  await db.branch.create({
    data: {
      slug,
      name,
      nameAr: String(formData.get('nameAr') ?? '').trim() || null,
      location,
      locationAr: String(formData.get('locationAr') ?? '').trim() || null,
      emirate,
      emirateAr: String(formData.get('emirateAr') ?? '').trim() || null,
      email,
      phone,
      whatsapp,
      role: String(formData.get('role') ?? '').trim() || null,
      roleAr: String(formData.get('roleAr') ?? '').trim() || null,
      mapUrl,
      mapEmbed,
      order: count,
    },
  });

  revalidatePath('/admin/dashboard/branches');
  revalidatePath('/branches');
  revalidatePath(`/branches/${slug}`);

  return {};
}

export async function deleteBranch(id: number) {
  const branch = await db.branch.delete({ where: { id } });
  revalidatePath('/admin/dashboard/branches');
  revalidatePath('/branches');
  revalidatePath(`/branches/${branch.slug}`);
}
