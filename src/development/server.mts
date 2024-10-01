import fs from 'node:fs/promises';
import express from 'express';
import path from 'node:path';
import os from 'node:os';
import https from 'node:https';

// Constants
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const certDir = path.resolve(os.homedir(), 'certs');
const certPath = path.resolve(certDir, 'localhost+1.pem');
const keyPath = path.resolve(certDir, 'localhost+1-key.pem');

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;

const { createServer, createLogger } = await import('vite');
vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
});
const viteLogger = createLogger();
app.use(vite.middlewares);

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;

    // Always read fresh template in development
    template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    render = (await vite.ssrLoadModule('/src/development/dev-entry-server.mts'))
      .render;

    const rendered = await render(url);
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e as Error);
    console.log((e as Error).stack);
    res.status(500).end((e as Error).stack);
  }
});

try {
  // Load SSL certificate and private key
  const [cert, key] = await Promise.all([
    fs.readFile(certPath),
    fs.readFile(keyPath),
  ]);
  https.createServer({ cert, key }, app).listen(port, () => {
    viteLogger.info(`\nVite server started at https://localhost:${port}\n`);
  });
} catch (error) {
  // Start http server
  app.listen(port, () => {
    viteLogger.info(`\nVite server started at http://localhost:${port}\n`);
  });
}
