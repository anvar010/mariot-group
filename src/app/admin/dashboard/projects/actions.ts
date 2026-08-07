'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { saveUploadedImage } from '@/lib/uploads';
import { slugify } from '@/lib/slugify';

export type ProjectFormState = { error?: string };

async function uniqueSlug(base: string): Promise<string> {
  let slug = base || 'project';
  let n = 2;
  while (await db.project.findUnique({ where: { slug } })) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

export async function createProject(_prevState: ProjectFormState, formData: FormData): Promise<ProjectFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim();
  const isFabrication = formData.get('isFabrication') === 'on';

  if (!name || !category || !description) {
    return { error: 'Name, category and description are required.' };
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
  const scope = String(formData.get('scope') ?? '').trim() || (isFabrication ? 'Custom Stainless Fabrication' : 'Equipment Supply & Installation');

  await db.project.create({
    data: {
      slug,
      name,
      nameAr: String(formData.get('nameAr') ?? '').trim() || null,
      category,
      categoryAr: String(formData.get('categoryAr') ?? '').trim() || null,
      location: String(formData.get('location') ?? '').trim() || null,
      locationAr: String(formData.get('locationAr') ?? '').trim() || null,
      photo,
      description,
      descriptionAr: String(formData.get('descriptionAr') ?? '').trim() || null,
      scope,
      scopeAr: String(formData.get('scopeAr') ?? '').trim() || null,
      isFabrication,
    },
  });

  revalidatePath('/admin/dashboard/projects');
  revalidatePath('/projects');
  revalidatePath('/fabrication');
  revalidatePath(`/projects/${slug}`);

  return {};
}

export async function deleteProject(id: number) {
  const project = await db.project.delete({ where: { id } });
  revalidatePath('/admin/dashboard/projects');
  revalidatePath('/projects');
  revalidatePath('/fabrication');
  revalidatePath(`/projects/${project.slug}`);
}
