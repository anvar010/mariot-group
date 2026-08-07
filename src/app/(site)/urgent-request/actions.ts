'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { saveUploadedAttachment } from '@/lib/uploads';

export type UrgentFormState = { error?: string };

const ATTACHMENT_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png'];

export async function submitUrgentRequest(
  _prevState: UrgentFormState,
  formData: FormData
): Promise<UrgentFormState> {
  const urgency = String(formData.get('urgency') ?? '').trim();
  const problem = String(formData.get('problem') ?? '').trim();
  const contactName = String(formData.get('contactName') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const emirate = String(formData.get('emirate') ?? '').trim();

  if (!urgency || !problem || !contactName || !phone || !emirate) {
    return { error: 'Please fill in all required fields.' };
  }

  const equipmentType = String(formData.get('equipmentType') ?? '').trim() || null;
  const description = String(formData.get('description') ?? '').trim() || null;
  const businessName = String(formData.get('businessName') ?? '').trim() || null;
  const email = String(formData.get('email') ?? '').trim() || null;

  let attachmentUrl: string | null = null;
  const photo = formData.get('photo');
  if (photo instanceof File && photo.size > 0) {
    try {
      attachmentUrl = await saveUploadedAttachment(photo, ATTACHMENT_EXTENSIONS);
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Could not upload the photo.' };
    }
  }

  await db.urgentRequest.create({
    data: { urgency, problem, equipmentType, description, attachmentUrl, contactName, businessName, phone, email, emirate },
  });

  redirect('/thank-you?type=urgent');
}
