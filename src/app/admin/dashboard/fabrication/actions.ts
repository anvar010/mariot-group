'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export type CapabilityFormState = { error?: string };
export type ProcessStepFormState = { error?: string };

export async function createCapability(_prevState: CapabilityFormState, formData: FormData): Promise<CapabilityFormState> {
  const title = String(formData.get('title') ?? '').trim();
  const desc = String(formData.get('desc') ?? '').trim();

  if (!title || !desc) {
    return { error: 'Title and description are required.' };
  }

  const count = await db.fabricationCapability.count();

  await db.fabricationCapability.create({
    data: {
      title,
      titleAr: String(formData.get('titleAr') ?? '').trim() || null,
      desc,
      descAr: String(formData.get('descAr') ?? '').trim() || null,
      order: count,
    },
  });

  revalidatePath('/admin/dashboard/fabrication');
  revalidatePath('/fabrication');

  return {};
}

export async function deleteCapability(id: number) {
  await db.fabricationCapability.delete({ where: { id } });
  revalidatePath('/admin/dashboard/fabrication');
  revalidatePath('/fabrication');
}

export async function createProcessStep(_prevState: ProcessStepFormState, formData: FormData): Promise<ProcessStepFormState> {
  const step = String(formData.get('step') ?? '').trim();
  const desc = String(formData.get('desc') ?? '').trim();

  if (!step || !desc) {
    return { error: 'Step name and description are required.' };
  }

  const count = await db.fabricationProcessStep.count();

  await db.fabricationProcessStep.create({
    data: {
      step,
      stepAr: String(formData.get('stepAr') ?? '').trim() || null,
      desc,
      descAr: String(formData.get('descAr') ?? '').trim() || null,
      order: count,
    },
  });

  revalidatePath('/admin/dashboard/fabrication');
  revalidatePath('/fabrication');

  return {};
}

export async function deleteProcessStep(id: number) {
  await db.fabricationProcessStep.delete({ where: { id } });
  revalidatePath('/admin/dashboard/fabrication');
  revalidatePath('/fabrication');
}
