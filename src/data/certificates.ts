import type { Field } from '../lib/placeholder';

export type Certificate = {
  name: Field;
  issuer: Field;
  /** Month and year, e.g. "Aug 2026". Leave out to hide the Issued column for that certificate. */
  issued?: Field;
  credentialId?: Field;
  /** The issuer's verification page for this credential. */
  verifyUrl?: Field;
};

/**
 * Section 7. Newest first. Add `credentialId` or `verifyUrl` to any certificate that has one;
 * an empty list shows a short note instead of a table.
 */
export const certificates: Certificate[] = [
  {
    name: 'Competency Training Program: Dark Web Intelligence',
    issuer: 'CyberSecurity Malaysia',
  },
  {
    name: 'Digital Forensic Essential',
    issuer: 'CyberSecurity Malaysia',
  },
  {
    name: 'International Hack@10 Capture-The-Flag 2026',
    issuer: 'Universiti Tenaga Nasional (UNITEN)',
  },
];
