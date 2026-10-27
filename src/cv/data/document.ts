import { resolve } from '../../lib/placeholder';
import { profile } from '../../data/profile';
import { revisions } from '../../data/revisions';

const initials = resolve(profile.initials).toUpperCase();
const latest = revisions[0];

/** The datasheet's own identity: part number, document code and current revision. */
export const doc = {
  partNumber: `${initials}-DCS`,
  code: `DS-${initials}-001`,
  revision: latest?.rev ?? 'A',
  revised: latest ? resolve(latest.date) : '',
  year: new Date().getFullYear(),
};

export type SectionRef = {
  number: string;
  title: string;
  id: string;
  /** Short label for the product-folder bar. */
  nav?: string;
};

/** Numbered sections, in page order. Headings, navigation and cross-references read from here. */
export const sections = {
  features: { number: '1', title: 'Features', id: 'features', nav: 'Features' },
  applications: { number: '2', title: 'Applications', id: 'applications' },
  description: { number: '3', title: 'Description', id: 'description' },
  pins: { number: '4', title: 'Pin Configuration and Functions', id: 'pins', nav: 'Pinout' },
  specifications: { number: '5', title: 'Specifications', id: 'specifications', nav: 'Specifications' },
  application: { number: '6', title: 'Typical Application: Specify', id: 'application', nav: 'Application' },
  certifications: { number: '7', title: 'Certifications', id: 'certifications', nav: 'Certifications' },
  revisions: { number: '8', title: 'Revision History', id: 'revisions' },
  ordering: { number: '9', title: 'Ordering Information', id: 'contact', nav: 'Contact' },
} satisfies Record<string, SectionRef>;

export const navigation: SectionRef[] = Object.values(sections).filter((section) => 'nav' in section);

/** Figure numbers in page order, so captions and cross-references always agree. */
export const figure = {
  schematic: 1,
  pinout: 2,
  linesByLayer: 3,
  testsByArea: 4,
  blockDiagram: 5,
  layout: 6,
} as const;

/** Table numbers in page order. */
export const table = {
  device: 1,
  pins: 2,
  operating: 3,
  characteristics: 4,
  requirements: 5,
  pipeline: 6,
  grounding: 7,
  isolation: 8,
  modes: 9,
  errata: 10,
  otherApplications: 11,
  certifications: 12,
  ordering: 13,
} as const;
