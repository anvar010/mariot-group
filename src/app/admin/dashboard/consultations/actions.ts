'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function deleteConsultation(id: number) {
  await db.consultationRequest.delete({ where: { id } });
  revalidatePath('/admin/dashboard/submissions');
  revalidatePath('/admin/dashboard');
}
