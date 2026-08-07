'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function deleteOpening(id: number) {
  await db.restaurantOpeningRequest.delete({ where: { id } });
  revalidatePath('/admin/dashboard/submissions');
  revalidatePath('/admin/dashboard');
}
