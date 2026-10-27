import { findPlaceholders, type PlaceholderReport } from '../lib/placeholder';
import { certificates } from './certificates';
import { photo, photoHint } from './photo';
import { profile } from './profile';
import { revisions } from './revisions';

/** Every value still marked TBD, with where it lives under src/. */
export const placeholders: PlaceholderReport[] = [
  ...(photo ? [] : [{ path: 'assets/me/', hint: photoHint }]),
  ...findPlaceholders(profile, 'data/profile.ts: profile'),
  ...findPlaceholders(certificates, 'data/certificates.ts: certificates'),
  ...findPlaceholders(revisions, 'data/revisions.ts: revisions'),
];

/** True in `npm run dev` and `npm run build:draft`, where TBD values may show. */
export const isDraft = import.meta.env.DEV || import.meta.env.MODE === 'draft';

/**
 * A production build stops while placeholders remain, so a page reading "Month YYYY" can't be
 * deployed by accident. `npm run build:draft` builds it anyway, for previews.
 */
export function assertReadyToShip(): void {
  if (isDraft || placeholders.length === 0) return;
  const list = placeholders.map(({ path, hint }) => `  - src/${path}: ${hint}`).join('\n');
  throw new Error(
    `This portfolio still has ${placeholders.length} TBD value(s). Fill them in, or run "npm run build:draft" for a preview build.\n${list}`,
  );
}
