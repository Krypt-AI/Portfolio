import type { APIRoute } from 'astro';

/** The tab icon: the red push pin that holds every poster to the wall, drawn flat like the posters' own. */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path d="M19 19 27 29" stroke="#3c434c" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="14" cy="13" r="10.5" fill="#e63946" stroke="#a8222f" stroke-width="2"/>
<circle cx="14" cy="13" r="4" fill="#a8222f" fill-opacity="0.55"/>
</svg>`;

export const GET: APIRoute = () =>
  new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
