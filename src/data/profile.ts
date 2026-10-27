import { placeholder } from '../lib/placeholder';

/**
 * Who you are and how to reach you, shared by the website and the printed CV. Every
 * `placeholder(...)` is a value still to fill in: replace the whole call with the real string,
 * e.g. `internshipFrom: 'March 2027'`. Your photo is not here: drop it into src/assets/me/.
 */
export const profile = {
  name: 'Muhammad Alif Hakimi',
  /** Two or three letters. They make the CV's monogram and part number (e.g. MAH-DCS). */
  initials: 'MAH',

  /** The one-line title under your name. */
  headline:
    'Full-stack web developer building AI-assisted apps, and a Diploma in Computer Science student available for an internship or full-time role',

  /** Written in your voice; keep it to two sentences. */
  summary:
    "I'm a Diploma in Computer Science student who learns by shipping, most recently Specify, an AI email and recruitment assistant built with Python, FastAPI and React. I'm looking for an internship or full-time role where I can ship to real users and learn from an experienced team.",

  programme: 'Diploma in Computer Science',
  institution: 'Universiti Tenaga Nasional (UNITEN)',
  /** Month and year you started. */
  started: 'July 2025',
  expectedGraduation: 'Dec 2027',
  location: 'Semenyih, Selangor',
  languages: 'Malay and English (fluent), Mandarin (conversational), Japanese (beginner)',

  /** What you build outside coursework, each line backed by a project on the page. */
  interests: [
    'Tools for friends: game-night planning, squads and a shared playlist (RWBY Afterlight)',
    'Learning languages: Japanese for the JLPT and Mandarin for the HSK, practised in Study Hub',
    'Security: CyberSecurity Malaysia training and the Hack@10 capture-the-flag',
  ],

  availability: {
    internshipFrom: placeholder('Month YYYY', 'the earliest start date for industrial training'),
    internshipLength: placeholder('NN weeks', 'the placement length your programme requires'),
    fullTimeFrom: 'Jan 2028',
    arrangements: placeholder('On-site, hybrid or remote', 'the working arrangements you are open to'),
  },

  contact: {
    email: 'alif.hakimi@gmail.com',
    linkedin: placeholder('https://www.linkedin.com/in/your-profile', 'your LinkedIn profile URL'),
    github: 'https://github.com/Krypt-AI',
    /**
     * A PDF of your CV in /public, e.g. '/cv.pdf'. Until you add one, the CV buttons open the
     * printable CV at /cv, which saves as a PDF from the print dialog.
     */
    cv: null as string | null,
  },

  /** The roles you are applying for. */
  roles: [
    'Industrial training (internship)',
    'Frontend and UI development',
    'Full-stack web development',
    'AI-powered application development',
    'Junior developer roles after graduation',
  ],
};
