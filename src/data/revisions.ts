import type { Field } from '../lib/placeholder';

export type Revision = {
  /** A letter, in order: A, B, C… The newest one becomes the CV's revision. */
  rev: string;
  date: Field;
  /** What changed. `section` points at the printed CV's section it changed. */
  changes: { text: Field; section: { label: string; href: string } }[];
};

/**
 * Your timeline, newest first. The printed CV sets it as a datasheet revision history; the
 * website shows it on the About poster.
 */
export const revisions: Revision[] = [
  {
    rev: 'C',
    date: '27 October 2026',
    changes: [
      {
        text: 'Published Specify, an AI email and recruitment assistant, now the typical application',
        section: { label: '6', href: '#application' },
      },
      {
        text: 'Built Study Hub, a learning platform with typed practice and spaced repetition',
        section: { label: '6.7', href: '#other-applications' },
      },
    ],
  },
  {
    rev: 'B',
    date: '7 October 2026',
    changes: [
      {
        text: 'Shipped RWBY Afterlight, a realtime community site with a shared Supabase backend',
        section: { label: '6.7', href: '#other-applications' },
      },
      {
        text: 'Status changed to Available: seeking an internship or full-time role',
        section: { label: '1', href: '#top' },
      },
    ],
  },
  {
    rev: 'A',
    date: 'July 2025',
    changes: [
      {
        text: 'Initial release: enrolled in Diploma in Computer Science at Universiti Tenaga Nasional',
        section: { label: '3', href: '#description' },
      },
    ],
  },
];
