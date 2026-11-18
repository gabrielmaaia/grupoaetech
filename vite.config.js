import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import receiveLeadHandler from './api/receive-lead.js';

function localApiDevPlugin() {
  return {
    name: 'local-api-dev',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '');
      if (env.BASE44_LEAD_ENDPOINT) {
        process.env.BASE44_LEAD_ENDPOINT = env.BASE44_LEAD_ENDPOINT;
      }
      if (env.LEAD_WEBHOOK_KEY) {
        process.env.LEAD_WEBHOOK_KEY = env.LEAD_WEBHOOK_KEY;
      }

      server.middlewares.use('/api/receive-lead', (req, res, next) => {
        if (req.url && req.url !== '/' && !req.url.startsWith('?')) {
          return next();
        }

        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', async () => {
          req.body = Buffer.concat(chunks).toString('utf8');

          const wrappedRes = {
            setHeader: (name, value) => res.setHeader(name, value),
            status: (code) => {
              res.statusCode = code;
              return wrappedRes;
            },
            json: (data) => {
              if (!res.headersSent) {
                res.setHeader('Content-Type', 'application/json');
              }
              res.end(JSON.stringify(data));
              return wrappedRes;
            },
          };

          try {
            await receiveLeadHandler(req, wrappedRes);
          } catch (err) {
            console.error('Erro no middleware local /api/receive-lead:', err);
            if (!res.headersSent) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Erro interno no servidor local.' }));
            }
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiDevPlugin()],
});
