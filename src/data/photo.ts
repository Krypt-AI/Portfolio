import type { ImageMetadata } from 'astro';

/**
 * Your photo: the first image in src/assets/me/ (jpg, png or webp). A square, head-and-shoulders
 * crop works best. Until one is there, the page shows a marked empty frame and production
 * builds stop, the same as any other TBD value.
 */
const found = import.meta.glob<{ default: ImageMetadata }>('../assets/me/*.{jpg,jpeg,png,webp}', { eager: true });

export const photo: ImageMetadata | undefined = Object.values(found)[0]?.default;

export const photoHint = 'a head-and-shoulders photo of you, saved in src/assets/me/';
