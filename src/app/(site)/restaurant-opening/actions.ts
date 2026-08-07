'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export type OpeningFormState = { error?: string };

export async function submitRestaurantOpening(
  _prevState: OpeningFormState,
  formData: FormData
): Promise<OpeningFormState> {
  const conceptName = String(formData.get('conceptName') ?? '').trim();
  const conceptType = String(formData.get('conceptType') ?? '').trim();
  const contactName = String(formData.get('contactName') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();

  if (!conceptName || !conceptType || !contactName || !phone) {
    return { error: 'Please fill in all required fields.' };
  }

  const cuisine = String(formData.get('cuisine') ?? '').trim() || null;
  const seats = String(formData.get('seats') ?? '').trim() || null;
  const targetDate = String(formData.get('targetDate') ?? '').trim() || null;
  const location = String(formData.get('location') ?? '').trim() || null;
  const investment = String(formData.get('investment') ?? '').trim() || null;
  const currentStage = String(formData.get('currentStage') ?? '').trim() || null;
  const email = String(formData.get('email') ?? '').trim() || null;
  const notes = String(formData.get('notes') ?? '').trim() || null;
  const needs = formData.getAll('needs').map(String).join(', ') || null;

  await db.restaurantOpeningRequest.create({
    data: {
      conceptName,
      conceptType,
      cuisine,
      seats,
      targetDate,
      location,
      investment,
      currentStage,
      needs,
      contactName,
      phone,
      email,
      notes,
    },
  });

  redirect('/thank-you?type=restaurant_opening');
}
