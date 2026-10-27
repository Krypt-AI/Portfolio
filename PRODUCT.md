# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + TypeScript, static output (user's choice, from three offered: Astro, React + Vite, plain HTML). All personal content lives in typed data files so the owner edits facts without touching layout. Hosted on Netlify (settings in `netlify.toml`); production deploys still stop while placeholders remain.

## Users

- **Primary: people deciding whether to interview a Diploma in Computer Science student.** Internship (industrial training) coordinators, HR screeners and recruiters, and the hiring engineers or tech leads they forward to. They arrive from a link on a CV, LinkedIn or a job-board application, usually among many applicants, and skim on a laptop or phone.
- **Secondary: the engineer who digs in.** Opens the case study and the GitHub repo to judge how the student actually builds.

## Product Purpose

A personal portfolio that gets the owner shortlisted: an internship placement now, and junior full-time roles after graduation. Target roles are frontend / UI developer, full-stack web developer, and AI / application developer. Success: a visitor can say within seconds who this is, what they build, and how to contact them, and an engineer who reads further finds evidence that holds up.

## Positioning

Typical diploma portfolios show coursework, percentage skill bars and a grid of tutorial clones. This one shows three shipped public projects with real engineering, explained honestly and counted from source: an AI assistant that never acts on its own (Specify), a learning platform with sandboxed code runners and spaced repetition (Study Hub), and a realtime multi-user site with row-level security (RWBY Afterlight). Evidence over adjectives.

## Operating Context

- Visitors come from application links; first impressions form in the first viewport.
- Engineers verify claims against the public GitHub repo.
- The owner updates the site between applications: new certificates, projects, graduation status, availability dates.
- A downloadable CV is expected alongside the site. It lives at `/cv` as a printable A4 datasheet, until the owner adds a PDF.

## Capabilities and Constraints

- Sections the owner asked for: skills, certificates, projects built, and other material that helps a job search stand out.
- **Two surfaces from one set of facts** (owner's decision, 2026-10-27): the website at `/` is easy to read and creative; the component-datasheet layout is kept as the printed CV at `/cv`.
- **Projects shown: all of the owner's own public repositories** (owner's choice, 2026-10-27): Specify, Study Hub and RWBY Afterlight. GitHub tutorial forks are left out. Only public repositories are ever linked; private projects (Panelingo, LockedIN) get no URL.
- **Printed CV:** Specify is the deep typical application; RWBY Afterlight and Study Hub are compact (owner's choice).
- **Photo and background** (owner's request): a photo of the owner on the banner and the About poster, from `src/assets/me/`, plus programme, dates, location, languages, availability, roles, interests and a timeline.
- **Still placeholder:** the photo, internship start date and length, working arrangement and LinkedIn URL. Production builds stop until they are filled.
- No live link to Study Hub: its deployment serves personal-use course material to anyone who signs in.
- No work experience, testimonials, or employer references were supplied; none may be invented.

## Brand Commitments

- The owner explicitly rejects a template-generic developer portfolio (dark hero, gradient blob, skill bars, card grid).
- The website and the printed CV are deliberately different worlds: a project exhibition on screen, a component datasheet on paper.

## Evidence on Hand

**Specify** (github.com/Krypt-AI/Specify, local `../../Specify`; counted at `e537860`, published 2026-10-27): an AI email and recruitment assistant.
- Stack: Python 3.14, FastAPI, SQLAlchemy, Alembic, Celery, Redis, PostgreSQL; React 19, TypeScript, Vite, Tailwind, TanStack Query, React Flow; Ollama (default in `.env.example`) or Claude; Docker Compose.
- Sorts Gmail into four folders with AI-named labels, extracts recruitment records (salary, deadline and website kept only when the email states them), Decision Queue, Gmail drafts only (never sends), two-way Google Sheets sync, reminders, a workflow engine with 21 step types and a visual builder.
- Measured: 255 backend tests (253 pass on SQLite; 2 run only on PostgreSQL), 25 tables each with a per-user row-level policy through a restricted role, 86 API routes, 7 migrations, 21,973 lines.

**Study Hub** (github.com/Krypt-AI/Study-Hub, default branch `master`, counted at `57d0b15`; 51 commits, 2026-10-12 to 2026-10-21): a personal learning platform with typed practice, FSRS spaced repetition, courses from the owner's books via OCR, and a playground where Python (Pyodide), JavaScript, TypeScript and SQL run in sandboxed Web Workers. 214 unit and 51 Playwright test cases declared, 6 migrations, 28,309 lines.

**RWBY Afterlight** (github.com/Krypt-AI/RWBY, local `../RWBY`; recounted at `257edcc`, 26 commits, 2026-10-05 to 2026-10-07): a fan-run, RWBY-themed friends community site focused on gaming and music.
- Stack: React 18, TypeScript, Vite, React Router; Supabase (Postgres, Auth with Discord sign-in, row-level security, Realtime); static deploy on Vercel.
- Game guides for MLBB and Valorant; live MLBB win/pick/ban rates from the Rone Arena community API with 10-minute caching and a dated-snapshot fallback.
- Game rooms: five seats, start-time countdown, and a counter-aware MLBB lineup planner (`lib/counterPicks.ts`, `lib/lineupPlanner.ts`) that re-ranks lanes against enemy picks using live matchup stats plus official counter relations; Valorant lineups by map.
- Squad (LFG) board, shared music playlist and song queue, live stream with chat and RSVP schedule, community polls including a seasonal anime poll.
- Moderator mode with server-side role checks on every action; optimistic updates that roll back with a reason when the server refuses.
- Backend: 11 SQL migrations (schema, auth, security, counters, API functions, realtime, seed); 38 tests run the real migrations on an in-process Postgres (PGlite) with Node's test runner.
- Runs as a local demo without Supabase settings.
- Live at https://rwby-red.vercel.app (named in the project's own roadmap as its production deployment; returns 200).

Absent and never to be fabricated: certificates' real details, employer names, testimonials, usage numbers for any project, grades, awards.

## Product Principles

1. **Evidence over adjectives.** Every skill claim points to where it was demonstrated.
2. **Skimmable in seconds, deep in minutes.** The recruiter's scan and the engineer's read are both first-class.
3. **Honest about stage.** A diploma student with real work, not inflated titles or fake metrics.
4. **Easy to keep current.** Facts live in data files; adding a project or certificate is one entry.
5. **The site is a code sample.** Its own source is clean enough to be read by the people hiring.

## Accessibility & Inclusion

Target WCAG 2.2 AA, keyboard-complete, reduced-motion respected (default chosen for a frontend-role portfolio, where accessibility is part of the evidence; not separately specified by the owner).
