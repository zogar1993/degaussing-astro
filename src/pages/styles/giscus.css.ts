import fs from 'fs';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const css = fs.readFileSync('public/styles/giscus-raw.css', 'utf-8');
  return new Response(css, {
    headers: {
      'Content-Type': 'text/css',
      'Access-Control-Allow-Origin': 'https://giscus.app',
    },
  });
};