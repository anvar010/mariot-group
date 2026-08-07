'use server';

import { db } from '@/lib/db';
import { saveUploadedAttachment } from '@/lib/uploads';

export type ContactFormState = { success?: boolean; error?: string };

const ATTACHMENT_EXTENSIONS = ['pdf', 'jpg', 'jpeg', 'png', 'dwg'];

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const projectType = String(formData.get('projectType') ?? '').trim();
  const emirate = String(formData.get('emirate') ?? '').trim();

  if (!name || !phone || !projectType || !emirate) {
    return { error: 'Please fill in all required fields.' };
  }

  const company = String(formData.get('company') ?? '').trim() || null;
  const email = String(formData.get('email') ?? '').trim() || null;
  const budget = String(formData.get('budget') ?? '').trim() || null;
  const startDate = String(formData.get('start') ?? '').trim() || null;
  const details = String(formData.get('details') ?? '').trim() || null;
  const contactMethod = String(formData.get('contactMethod') ?? '').trim() || 'WhatsApp';

  let attachmentUrl: string | null = null;
  const attachment = formData.get('attachment');
  if (attachment instanceof File && attachment.size > 0) {
    try {
      attachmentUrl = await saveUploadedAttachment(attachment, ATTACHMENT_EXTENSIONS);
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Could not upload the attached file.' };
    }
  }

  await db.contactSubmission.create({
    data: {
      name,
      phone,
      company,
      email,
      projectType,
      emirate,
      budget,
      startDate,
      details,
      contactMethod,
      attachmentUrl,
    },
  });

  return { success: true };
}
