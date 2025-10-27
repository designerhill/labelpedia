// Vercel serverless function to create a Razorpay order
// Requires environment variables: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'content-type': 'application/json' } });
  }

  try {
    const body = await req.json();
    const { amount, currency = 'USD', receipt } = body || {};

    if (!amount || typeof amount !== 'number') {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), { status: 400, headers: { 'content-type': 'application/json' } });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return new Response(JSON.stringify({ error: 'Server configuration missing' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    // Edge runtime may not have Buffer; prefer btoa when available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const g: any = globalThis as any;
    const base64 = typeof g.btoa === 'function'
      ? g.btoa(`${keyId}:${keySecret}`)
      : // Fallback for environments that support Buffer (node)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        (typeof Buffer !== 'undefined' ? Buffer.from(`${keyId}:${keySecret}`).toString('base64') : '');
    if (!base64) {
      return new Response(JSON.stringify({ error: 'Encoding not available on this platform' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }

    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount, // amount in smallest currency unit
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
      }),
    });

    const data = await orderRes.json();

    if (!orderRes.ok) {
      return new Response(JSON.stringify({ error: data?.error || 'Failed to create order' }), { status: 400, headers: { 'content-type': 'application/json' } });
    }

    return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Unexpected error' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
}
