import type { APIRoute } from 'astro';

const PIXEL_ID = import.meta.env.META_PIXEL_ID || '3848505155443685';
const TOKEN = import.meta.env.META_CAPI_TOKEN || 'EAANmP9ZC4We8BQJe4yk8bYNlby228lRzKMpGIzdLzQPBszZA61e5gBt4zy9ZAl9RGNGf9VQjeHLLZBD2qsmZBRFJST462l0UenWZCXpVBhN8IIyrWo60q1VqaAcfNuKA7mgsFk20ZBot2M1hDBgbuLGASSqgXPmmJYmlACkjAaagWDSxpw6M3bcAIRZCZAS0ThgZDZD';
const TEST_EVENT_CODE = import.meta.env.META_TEST_EVENT_CODE || 'TEST26305';

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  if (!PIXEL_ID || !TOKEN) {
    return new Response(JSON.stringify({ error: 'Missing Meta Pixel ID or Token' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const event_id = body.event_id || crypto.randomUUID();
  const event_name = body.event_name || 'Lead';
  const event_time = Math.floor(Date.now() / 1000);

  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    undefined;

  const user_data = {
    client_ip_address: clientIp,
    client_user_agent: request.headers.get('user-agent') || undefined,
    fbp: body.fbp,
    fbc: body.fbc,
    em: body.em, // hashed email (sha256, lowercase) if provided
    ph: body.ph, // hashed phone (sha256) if provided
  };

  const payload = {
    data: [
      {
        event_name,
        event_time,
        event_id,
        action_source: 'website',
        event_source_url: body.event_source_url,
        user_data,
        custom_data: body.custom_data,
        ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
      },
    ],
  };

  const res = await fetch(`https://graph.facebook.com/v17.0/${PIXEL_ID}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const json = await res.json();
  return new Response(JSON.stringify(json), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
