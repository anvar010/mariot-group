'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function deleteEnquiry(id: number) {
  await db.contactSubmission.delete({ where: { id } });
  revalidatePath('/admin/dashboard/submissions');
  revalidatePath('/admin/dashboard');
}
