const ALLOWED_ORIGINS = [
  'https://aetech-se.com.br',
  'https://www.aetech-se.com.br',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeString(value, maxLength = 200) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // Requests without Origin (e.g. same-origin server or curl)

  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)) return true;
  if (/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) return true;

  return false;
}

export default async function handler(req, res) {
  // Security headers
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'Origem não autorizada.' });
  }

  const endpoint = (process.env.BASE44_LEAD_ENDPOINT || '').trim().replace(/\/+$/, '');
  const webhookKey = (process.env.LEAD_WEBHOOK_KEY || '').trim();

  if (!endpoint || !webhookKey) {
    console.error('Configuração de integração de leads ausente no servidor.');
    return res.status(500).json({ error: 'Serviço temporariamente indisponível.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Dados inválidos.' });
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }

  const fullName = sanitizeString(body.full_name, 120);
  const email = sanitizeString(body.email, 160).toLowerCase();
  const companyName = sanitizeString(body.company_name, 120);
  const serviceInterest = sanitizeString(body.service_interest, 100);
  const messageChallenge = sanitizeString(body.message_challenge, 1500);
  const utmSource = sanitizeString(body.utm_source, 100);
  const utmCampaign = sanitizeString(body.utm_campaign, 100);

  if (!fullName) {
    return res.status(400).json({ error: 'O nome completo é obrigatório.' });
  }

  if (email && !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido.' });
  }

  const payload = {
    full_name: fullName,
    company_name: companyName,
    service_interest: serviceInterest,
    message_challenge: messageChallenge,
    email,
    utm_source: utmSource,
    utm_campaign: utmCampaign,
  };

  try {
    const targetUrl = `${endpoint}?key=${encodeURIComponent(webhookKey)}`;
    const upstreamResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!upstreamResponse.ok) {
      console.error('Erro ao encaminhar lead para o serviço externo:', upstreamResponse.status);
      return res.status(502).json({ error: 'Não foi possível registrar os dados no momento.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Falha de comunicação ao registrar lead:', error?.name || 'Error');
    return res.status(502).json({ error: 'Não foi possível registrar os dados no momento.' });
  }
}
