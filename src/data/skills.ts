import type { ProjectId } from './projects';

/**
 * Each skill points at the public source file that proves it. The website lists them on the
 * Skills poster; the printed CV draws them as the pins of a 16-pin chip.
 */

export type SkillType = 'LANG' | 'UI' | 'AI' | 'DATA' | 'PRAC';

export const skillTypes: Record<SkillType, string> = {
  LANG: 'language',
  UI: 'interface',
  AI: 'AI integration',
  DATA: 'data and backend',
  PRAC: 'practice',
};

export type Evidence = {
  project: string;
  /** What the table shows: the file name. */
  label: string;
  /** The full path in the repository, shown on hover. */
  path: string;
  href: string;
};

export type Skill = {
  /** The short name printed beside the CV's pinout. */
  pin: string;
  type: SkillType;
  name: string;
  description: string;
  evidence: Evidence;
};

const repos: Record<ProjectId, { name: string; url: string; branch: string }> = {
  specify: { name: 'Specify', url: 'https://github.com/Krypt-AI/Specify', branch: 'main' },
  'study-hub': { name: 'Study Hub', url: 'https://github.com/Krypt-AI/Study-Hub', branch: 'master' },
  'rwby-afterlight': { name: 'RWBY Afterlight', url: 'https://github.com/Krypt-AI/RWBY', branch: 'main' },
};

const file = (id: ProjectId, path: string): Evidence => {
  const repo = repos[id];
  return { project: repo.name, label: path.split('/').pop() ?? path, path, href: `${repo.url}/blob/${repo.branch}/${path}` };
};

const folder = (id: ProjectId, path: string): Evidence => {
  const repo = repos[id];
  return { project: repo.name, label: `${path.split('/').pop()}/`, path, href: `${repo.url}/tree/${repo.branch}/${path}` };
};

/**
 * In package order, like a real 16-pin DIP: pin 1 is top left and the numbers run down the
 * left side, then from the bottom right back up to pin 16 at the top right.
 */
export const skills: Skill[] = [
  {
    pin: 'TS',
    type: 'LANG',
    name: 'TypeScript',
    description: 'Typed API contracts, one module per resource',
    evidence: file('specify', 'frontend/src/api/types.ts'),
  },
  {
    pin: 'PY',
    type: 'LANG',
    name: 'Python',
    description: 'FastAPI services and Celery tasks',
    evidence: file('specify', 'backend/app/services/classification/pipeline.py'),
  },
  {
    pin: 'SQL',
    type: 'LANG',
    name: 'PostgreSQL',
    description: 'Ordered schema migrations',
    evidence: file('rwby-afterlight', 'database/supabase/migrations/20261006000100_schema.sql'),
  },
  {
    pin: 'REACT',
    type: 'UI',
    name: 'React',
    description: 'Drag-and-drop workflow builder',
    evidence: file('specify', 'frontend/src/pages/WorkflowBuilderPage.tsx'),
  },
  {
    pin: 'CSS',
    type: 'UI',
    name: 'CSS',
    description: 'Design tokens, no UI kit',
    evidence: file('rwby-afterlight', 'frontend/src/styles/tokens.css'),
  },
  {
    pin: 'OPT',
    type: 'UI',
    name: 'Optimistic UI',
    description: 'Instant updates that roll back',
    evidence: file('rwby-afterlight', 'frontend/src/services/backend/shared/commands.ts'),
  },
  {
    pin: 'WASM',
    type: 'UI',
    name: 'Web Workers',
    description: 'Python and SQL sandboxed in the browser',
    evidence: file('study-hub', 'src/workers/python.worker.ts'),
  },
  {
    pin: 'LLM',
    type: 'AI',
    name: 'LLM integration',
    description: 'Ollama or Claude behind one interface',
    evidence: file('specify', 'backend/app/services/llm.py'),
  },
  {
    pin: 'SAFE',
    type: 'AI',
    name: 'Prompt-injection defence',
    description: 'Email read as untrusted data',
    evidence: file('specify', 'backend/app/services/classification/ai.py'),
  },
  {
    pin: 'RLS',
    type: 'DATA',
    name: 'Row-level security',
    description: 'A per-user policy on all 25 tables',
    evidence: file('specify', 'backend/sql/row_level_security.sql'),
  },
  {
    pin: 'API',
    type: 'DATA',
    name: 'API design',
    description: '86 routes, each needs a session',
    evidence: folder('specify', 'backend/app/api'),
  },
  {
    pin: 'AUTH',
    type: 'DATA',
    name: 'OAuth',
    description: 'Google sign-in with PKCE',
    evidence: file('specify', 'backend/app/services/google_oauth.py'),
  },
  {
    pin: 'ALGO',
    type: 'PRAC',
    name: 'Algorithms',
    description: 'Draft scoring, five-seat planner',
    evidence: file('rwby-afterlight', 'frontend/src/lib/lineupPlanner.ts'),
  },
  {
    pin: 'TEST',
    type: 'PRAC',
    name: 'Testing',
    description: '255 tests with Gmail and AI fakes',
    evidence: folder('specify', 'backend/tests'),
  },
  {
    pin: 'DOCS',
    type: 'PRAC',
    name: 'Technical writing',
    description: 'Design decisions with their reasons',
    evidence: { ...file('specify', 'docs/ARCHITECTURE.md'), label: 'ARCHITECTURE.md' },
  },
  {
    pin: 'SHIP',
    type: 'PRAC',
    name: 'Docker',
    description: 'Six services, local AI on request',
    evidence: file('specify', 'docker-compose.yml'),
  },
];
