'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function deleteUrgentRequest(id: number) {
  await db.urgentRequest.delete({ where: { id } });
  revalidatePath('/admin/dashboard/submissions');
  revalidatePath('/admin/dashboard');
}
