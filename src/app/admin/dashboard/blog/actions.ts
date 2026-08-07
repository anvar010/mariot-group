'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { saveUploadedImage } from '@/lib/uploads';
import { slugify } from '@/lib/slugify';

export type PostFormState = { error?: string };

async function uniqueSlug(base: string): Promise<string> {
  let slug = base || 'post';
  let n = 2;
  while (await db.blogPost.findUnique({ where: { slug } })) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

export async function createPost(_prevState: PostFormState, formData: FormData): Promise<PostFormState> {
  const title = String(formData.get('title') ?? '').trim();
  const content = String(formData.get('content') ?? '').trim();

  if (!title || !content) {
    return { error: 'Title and content are required.' };
  }

  const excerpt = String(formData.get('excerpt') ?? '').trim() || null;
  const titleAr = String(formData.get('titleAr') ?? '').trim() || null;
  const excerptAr = String(formData.get('excerptAr') ?? '').trim() || null;
  const contentAr = String(formData.get('contentAr') ?? '').trim() || null;
  const publishNow = formData.get('publishNow') === 'on';

  let coverImage: string | null = null;
  const cover = formData.get('coverImage');
  if (cover instanceof File && cover.size > 0) {
    try {
      coverImage = await saveUploadedImage(cover);
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Could not upload the cover image.' };
    }
  }

  const slug = await uniqueSlug(slugify(title));

  await db.blogPost.create({
    data: {
      slug,
      title,
      titleAr,
      excerpt,
      excerptAr,
      content,
      contentAr,
      coverImage,
      publishedAt: publishNow ? new Date() : null,
    },
  });

  revalidatePath('/admin/dashboard/blog');
  revalidatePath('/blog');

  return {};
}

export async function deletePost(id: number) {
  const post = await db.blogPost.delete({ where: { id } });
  revalidatePath('/admin/dashboard/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
}

export async function togglePublish(id: number, publish: boolean) {
  const post = await db.blogPost.update({
    where: { id },
    data: { publishedAt: publish ? new Date() : null },
  });
  revalidatePath('/admin/dashboard/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
}
