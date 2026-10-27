// @ts-check
import { defineConfig } from 'astro/config';

// The deployed address, so the canonical link and social previews use absolute URLs. Netlify sets
// URL to the project's primary address during every build; SITE_URL overrides it, or supplies the
// address elsewhere. Without either, those links are left out.
const netlifyUrl = process.env.NETLIFY === 'true' ? process.env.URL : undefined;

export default defineConfig({
  site: process.env.SITE_URL || netlifyUrl || undefined,
  devToolbar: { enabled: false },
});
