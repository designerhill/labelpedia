// Netlify Function: Create a Razorpay order
// Route: /.netlify/functions/create-order

exports.handler = async function (event, context) {
  console.log('=== Function invoked ===');
  console.log('Method:', event.httpMethod);
  console.log('Path:', event.path);
  console.log('Headers:', JSON.stringify(event.headers, null, 2));
  
  // Set headers for all responses
  const headers = { 
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'POST, OPTIONS'
  };

  // Handle OPTIONS for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    return { statusCode: 200, headers, body: '' };
  }

  // Handle GET for debugging
  if (event.httpMethod === 'GET') {
    console.log('GET request received (informational only)');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Razorpay Order Creation Endpoint',
        method: 'POST',
        expectedBody: { amount: 'number', currency: 'string', receipt: 'string' },
        status: 'Function is running'
      }),
    };
  }

  if (event.httpMethod !== 'POST') {
    console.log('Invalid method:', event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Method not allowed',
        received: event.httpMethod,
        expected: 'POST'
      }),
    };
  }

  try {
    console.log('Request body:', event.body);
    const { amount, currency = 'USD', receipt } = JSON.parse(event.body || '{}');

    if (!amount || typeof amount !== 'number') {
      console.log('Invalid amount:', amount);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount' }),
      };
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    console.log('Env check - keyId exists:', !!keyId, 'keySecret exists:', !!keySecret);

    if (!keyId || !keySecret) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Server configuration missing',
          debug: { hasKeyId: !!keyId, hasKeySecret: !!keySecret }
        }),
      };
    }

    const base64 = Buffer.from(`${keyId}:${keySecret}`).toString('base64');

    console.log('Calling Razorpay API with amount:', amount, 'currency:', currency);

    const resp = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount, // smallest currency unit
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
      }),
    });

    console.log('Razorpay response status:', resp.status);

    const data = await resp.json().catch((err) => {
      console.error('JSON parse error:', err);
      return null;
    });

    console.log('Razorpay response data:', data);

    if (!resp.ok) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: data?.error || 'Failed to create order', details: data }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  } catch (e) {
    console.error('Function error:', e);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: e?.message || 'Unexpected error',
        stack: e?.stack,
        type: e?.constructor?.name
      }),
    };
  }
}
