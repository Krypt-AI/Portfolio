import type { ImageMetadata } from 'astro';
import lineupShot from '../assets/rwby/lineup-after-draft.png';
import decisionShot from '../assets/specify/decision-queue.png';
import playgroundShot from '../assets/study-hub/playground-python.png';

/**
 * The owner's public repositories, in the order the website shows them. The website gives each
 * one a poster; the printed CV tells Specify in depth and lists the others under Other
 * Applications. Every number was counted from the public default branch at `commit`.
 */

export type ProjectId = 'specify' | 'study-hub' | 'rwby-afterlight';

export type Link = { label: string; href: string };

/** One measured fact and how it was counted: the posters' "show your working". */
export type Readout = { value: string; label: string; working: string };

export type FigureStep = { title: string; text: string; tone?: 'person' | 'stop' };

export type ProjectFigure =
  | { kind: 'steps'; title: string; steps: FigureStep[]; caption: string }
  | { kind: 'screenshot'; image: ImageMetadata; alt: string; caption: string; note: string };

export type Project = {
  id: ProjectId;
  name: string;
  /** What it is, in one line. */
  tagline: string;
  /** Why it exists. */
  why: string;
  /** What was built, one feature per line. */
  built: string[];
  /** Shown in order: a drawn process ("How it works") and a screenshot ("In use"). */
  figures: ProjectFigure[];
  /** The same kinds of fact on every poster, so projects compare at a glance. */
  results: Readout[];
  /** Safeguards worth their own band (Specify only). */
  safeguards?: string[];
  /** What is not built yet, stated plainly. */
  next: string;
  stack: string[];
  /** Whether `dates` is when it was built, or when it was published after being built in private. */
  datesLabel: 'Built' | 'Published';
  dates: string;
  commits: number;
  commit: string;
  source: Link;
  live?: Link;
};

const github = (repo: string): Link => ({ label: `github.com/Krypt-AI/${repo}`, href: `https://github.com/Krypt-AI/${repo}` });

export const projects: Project[] = [
  {
    id: 'specify',
    name: 'Specify',
    tagline: 'An AI email and recruitment assistant that never sends an email.',
    why: 'Recruiter, university and certification emails land in the same Gmail inbox, and the ones with deadlines are easy to miss. Specify sorts them, keeps track of every opportunity and drafts the replies, while you stay the one who sends.',
    built: [
      'Sorts every Gmail message into Recruitment, University, Certifications or Other, and labels it in Gmail with a label the AI names from the email.',
      'Turns recruiter emails into company and opportunity records, then waits in a Decision Queue for you to choose what to do.',
      'Writes the reply as a Gmail draft in the original thread. You read it and send it yourself.',
      'Keeps a Google Sheets tracker in sync both ways and reminds you of deadlines, exams and follow-ups.',
      'Runs every step as an editable workflow, drawn in a drag-and-drop builder.',
    ],
    figures: [
      {
        kind: 'steps',
        title: 'The life of one email',
        steps: [
          { title: 'Sync', text: 'New mail arrives through the Gmail history API and is stored once.' },
          { title: 'Rules first', text: 'Your rules and university senders decide the folder when they can.' },
          { title: 'AI reads it', text: 'Ollama on your computer, or Claude, picks a folder and a label. The email is treated as untrusted data.' },
          { title: 'Unsure?', text: 'Low-confidence or suspicious email waits in a review queue instead of being labelled.' },
          { title: 'Extract', text: 'Company, recruiter and role are read out; a salary or deadline is kept only when the email states it.' },
          { title: 'You decide', text: 'The Decision Queue holds each opportunity until you choose.', tone: 'person' },
          { title: 'Draft, never send', text: 'The reply is saved as a Gmail draft. There is no code path that sends.', tone: 'stop' },
        ],
        caption: 'Every step is idempotent and survives a restart: sync holds a lease per mailbox, and each email is claimed once.',
      },
      {
        kind: 'screenshot',
        image: decisionShot,
        alt: 'The Specify Decision Queue on a phone. A Software Engineer Intern opportunity from Merbau Systems Sdn Bhd is awaiting a decision. A suggestion box reads: Suggestion (AI): Interested. An internship in the Klang Valley, hybrid, with the allowance stated in the email. It matches your preferences. The decision is yours. Below it: recruiter Nur Aisyah, salary MYR 1,500 to 2,000 per month, hybrid, Petaling Jaya, internship, deadline 14 November 2026.',
        caption: 'The Decision Queue: the AI suggests, the salary and deadline come from the email itself, and the decision stays yours.',
        note: 'Real interface run locally with sample data; the company and people are fictional. 27 October 2026.',
      },
    ],
    results: [
      {
        value: '255',
        label: 'backend tests',
        working: 'pytest at e537860: 253 passed, and 2 skipped because they run only against PostgreSQL. In-memory fakes stand in for Gmail, Sheets and the AI.',
      },
      {
        value: '25',
        label: 'tables, each isolated per user',
        working: 'backend/sql/row_level_security.sql gives every table a user_isolation policy (users, 19 tables with a user_id column and 5 that belong to a user through their parent row), enforced when requests use the restricted specify_app role.',
      },
      {
        value: '86',
        label: 'API routes',
        working: 'The @router decorators in backend/app/api. A test walks every route and requires a session; it found and closed one unauthenticated endpoint.',
      },
      {
        value: '21,973',
        label: 'lines of source',
        working: 'Python, TypeScript, CSS, SQL and Mako tracked in git at e537860, counted with wc -l, tests included.',
      },
    ],
    safeguards: [
      'AI runs locally by default with Ollama, so email text never leaves your computer. At most 6,000 characters reach the model.',
      'The model can only return a validated classification. It has no tools and is told never to obey instructions inside an email.',
      'Salaries, deadlines and websites are kept only when they appear in the email. Nothing is guessed.',
      'Declining an offer or withdrawing always asks for confirmation first.',
    ],
    next: 'Gmail actions beyond labels and drafts (archive, star, mark read) are not built yet. Specify runs on your own machine with Docker and your own Google sign-in, so there is no hosted demo.',
    stack: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Tailwind CSS', 'Ollama', 'Claude', 'Docker'],
    datesLabel: 'Published',
    dates: '27 October 2026',
    commits: 2,
    commit: 'e537860',
    source: github('Specify'),
  },
  {
    id: 'study-hub',
    name: 'Study Hub',
    tagline: 'A personal learning platform with typed practice and spaced repetition.',
    why: 'University subjects, Japanese, Chinese and IT certifications each come with their own books and apps. Study Hub puts them in one place, checks every answer and remembers what is due.',
    built: [
      'Lessons that end in typed practice with specific feedback: pinyin with tone marks, kana or romaji, cloze, translation and explanations.',
      'Spaced-repetition reviews (FSRS) and mastery per topic, so practice goes where you are weakest.',
      'Courses from university notes and JLPT and HSK books, through an OCR pipeline checked against the page images; plus Linux Fundamentals in 15 modules.',
      'A playground where Python, JavaScript, TypeScript and SQL run in sandboxed Web Workers, right in the browser.',
      'Works in the browser with no account; optional Supabase sync with Google sign-in.',
    ],
    figures: [
      {
        kind: 'screenshot',
        image: playgroundShot,
        alt: 'The Study Hub playground on a phone. An eleven-line Python program schedules three vocabulary cards, cat, dog and bird with their kanji, one, three and seven days after 27 October. The output panel reads finished and lists 28 Oct, 30 Oct, 03 Nov and 3 cards scheduled.',
        caption: 'Python running in the playground: Pyodide in a sandboxed worker, with no server involved. Each run stops after ten seconds.',
        note: 'Screenshot of the live site at phone width, 27 October 2026.',
      },
    ],
    results: [
      {
        value: '214',
        label: 'unit tests',
        working: 'Vitest cases declared in the source at 57d0b15, including row-level-security and table-privilege tests run on PGlite.',
      },
      {
        value: '51',
        label: 'end-to-end tests',
        working: 'Playwright cases declared in e2e/ at 57d0b15, run in an installed Chrome.',
      },
      {
        value: '6',
        label: 'database migrations',
        working: 'supabase/migrations at 57d0b15: the schema, calendar, accounts, explicit grants, learners and class kinds.',
      },
      {
        value: '28,309',
        label: 'lines of source',
        working: 'TypeScript, CSS, SQL, Python and JavaScript tracked at 57d0b15, outside public/ and content/, counted with wc -l.',
      },
    ],
    next: 'C, Java and Bash are editor-only: running them safely needs a WebAssembly toolchain or a remote sandbox. Open answers are self-marked against a rubric.',
    stack: ['React', 'TypeScript', 'Vite', 'IndexedDB', 'Supabase', 'Pyodide', 'SQLite (WASM)', 'Vitest', 'Playwright', 'Netlify'],
    datesLabel: 'Built',
    dates: '12–21 October 2026',
    commits: 51,
    commit: '57d0b15',
    source: github('Study-Hub'),
  },
  {
    id: 'rwby-afterlight',
    name: 'RWBY Afterlight',
    tagline: 'A realtime community site for friends who game and listen to music together.',
    why: 'A group of friends who play Mobile Legends and Valorant wanted one place to find a squad, plan a game night and share music.',
    built: [
      'Game guides with live Mobile Legends win, pick and ban rates, cached for ten minutes, with a dated snapshot when the API is down.',
      'Five-seat game rooms with a lineup planner that re-ranks every lane each time an enemy pick goes in.',
      'A squad finder, a shared playlist and song queue, a stream page with chat, and community polls.',
      'Moderator tools with roles checked by the server; clicks apply at once and roll back if the server refuses.',
    ],
    figures: [
      {
        kind: 'screenshot',
        image: lineupShot,
        alt: 'The Recommended lineup panel after three enemy picks. Gloo takes the EXP lane as a strong counter: plus 2.9% win rate against Fanny and an official counter to Khufra. Kagura stays in mid lane as the player\'s top pick. Diggie takes roam with plus 4.6% against Estes.',
        caption: 'The lineup after three enemy picks. Kagura stays because nothing counters her; the open lanes take counters.',
        note: 'Screenshot from the local demo build, 6 October 2026.',
      },
    ],
    results: [
      {
        value: '38',
        label: 'backend tests',
        working: "node:test cases in backend/tests at 257edcc, run against the real SQL migrations on PGlite, an in-process Postgres.",
      },
      {
        value: '15',
        label: 'tables under row-level security',
        working: 'Every public table enables row-level security in the migrations; nobody writes to a table directly, not even moderators.',
      },
      {
        value: '34',
        label: 'checked API functions',
        working: 'The Postgres functions in 20261006000600_api.sql. Each checks who is calling before it writes.',
      },
      {
        value: '15,757',
        label: 'lines of source',
        working: 'TypeScript, TSX, CSS, SQL and test files tracked at 257edcc, counted with wc -l.',
      },
    ],
    next: 'No frontend unit tests, linting or CI yet. Valorant has no public stats API a browser can call, so its guide shows the patch snapshot.',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime', 'Vercel'],
    datesLabel: 'Built',
    dates: '5–7 October 2026',
    commits: 26,
    commit: '257edcc',
    source: github('RWBY'),
    live: { label: 'rwby-red.vercel.app', href: 'https://rwby-red.vercel.app' },
  },
];

export function getProject(id: ProjectId): Project {
  const project = projects.find((candidate) => candidate.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
}
