import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL ?? 'info@vroomvalet.co.za';
  const fromEmail = process.env.LEAD_FROM_EMAIL ?? 'noreply@vroomvalet.co.za';

  if (!apiKey) {
    // Dev fallback — log and succeed so the form flow can be tested locally
    console.log('[lead]', body);
    return NextResponse.json({ ok: true });
  }

  const subject = body.enquiry === 'operator'
    ? `Operator enquiry from ${body.name} — ${body.business ?? 'no business name'}`
    : `Website enquiry from ${body.name}`;

  const text = [
    `Enquiry type: ${body.enquiry}`,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.business ? `Business: ${body.business}` : null,
    '',
    body.message,
  ].filter(Boolean).join('\n');

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail }] }],
      from: { email: fromEmail, name: 'Vroom Valet Website' },
      reply_to: { email: body.email, name: body.name },
      subject,
      content: [{ type: 'text/plain', value: text }],
    }),
  });

  if (!res.ok) {
    console.error('[lead] SendGrid error', res.status, await res.text());
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
