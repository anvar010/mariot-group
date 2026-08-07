'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export type ConsultationFormState = { error?: string };

export async function submitConsultation(
  _prevState: ConsultationFormState,
  formData: FormData
): Promise<ConsultationFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const visitType = String(formData.get('visitType') ?? '').trim();
  const projectStage = String(formData.get('projectStage') ?? '').trim();
  const emirate = String(formData.get('emirate') ?? '').trim();

  if (!name || !phone || !visitType || !projectStage || !emirate) {
    return { error: 'Please fill in all required fields.' };
  }

  const email = String(formData.get('email') ?? '').trim() || null;
  const address = String(formData.get('address') ?? '').trim() || null;
  const preferredDate = String(formData.get('preferredDate') ?? '').trim() || null;
  const preferredTime = String(formData.get('preferredTime') ?? '').trim() || null;
  const notes = String(formData.get('notes') ?? '').trim() || null;

  await db.consultationRequest.create({
    data: { name, phone, email, visitType, projectStage, emirate, address, preferredDate, preferredTime, notes },
  });

  redirect('/thank-you?type=consultation');
}
