---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Portfolio website (src/pages/index.astro)

## Scope and mode

The website: one long page, read on screen. Visitor mode: **Persuade**. The visitor decides whether to shortlist the owner and acts by emailing or taking the CV. The printed CV is a separate surface at `/cv` (src/pages/cv.astro), which keeps the component-datasheet format.

## Audience, job, action

- Internship coordinators, HR screeners and recruiters skim in seconds on a laptop or phone, arriving from a CV, LinkedIn or job-board link.
- Hiring engineers read a poster for minutes and open the public repositories.
- Primary actions: Email, and the CV (`/cv`, which prints to A4; a PDF file once the owner adds one).

## Proof and content

- All three of the owner's public repositories, in this order: Specify (the lead poster), Study Hub, RWBY Afterlight. GitHub tutorial forks are left out at the owner's choice.
- Every number is counted from the repository's public default branch at a named commit.
- The owner's photo comes from `src/assets/me/` and stays TBD until supplied.
- Background shown: programme, institution, graduation, location, languages, timeline, availability and certificates.

## Constraints

- No invented employers, metrics, testimonials or certificates.
- No live link to Study Hub: its deployment serves personal-use course material to anyone who signs in.
- Must be easier to read than the datasheet: body text of at least 17px, short sections under plain headings, one idea per band.
- WCAG 2.2 AA, keyboard-complete, reduced motion respected.

## Direction contract

THESIS: The owner's work pinned up at a university project exhibition. Each public repository is an A0 poster read in one standing glance: why it exists, what was built, how it works, measured results and what is next. The presenter's badge heads the wall. It refuses the template portfolio (dark hero, skill bars, same-size card grid) and the datasheet's density.

OWN-WORLD:
- Light grey felt display wall `#d5d9df` holding white poster sheets, ink `#111418`, red push pins `#e63946`.
- One band colour per poster: Specify blue `#1d4ed8`, Study Hub teal `#0f766e`, RWBY red `#c41e3a`.
- Type: Big Shoulders (condensed) for poster titles and the banner name; Atkinson Hyperlegible Next for reading; Atkinson Hyperlegible Mono only for commits, paths and counted values.
- Components: the exhibitor banner strip, the presenter badge with photo, full-width section bands as headings, results readouts that show their working, real QR codes to each repository, figures with captions.

STORY: In ten seconds a recruiter sees the presenter's face, name, programme and availability, the Email and CV actions, and three posters with plain titles. Within minutes an engineer reads Specify's email pipeline, opens a counted number to see how it was counted, then scans a QR code or follows the repo link. Then they email or take the CV.

FIRST VIEWPORT:
- An ink banner strip runs across the top. On the left, the presenter badge: photo, the name in Big Shoulders at about 3.5rem, programme and university. On the right: availability, a red "Email me" button and a white CV button. Section links sit on the banner's lower line.
- Below it, on felt: the Specify poster at 1.6 fractions, with Study Hub and RWBY Afterlight at 1 fraction each. All three are pinned on one top line, with their titles and first section bands visible.

FORM: The Poster Session, IMPECCABLE'S PICK, chosen by the user over the rolled Challenge Board. It is position 1 on my re-rolled list; seed:530cdf1e7d5967ae. The owner steered it: add their photo and background details.
- Signature interaction: show your working. Every measured readout on a poster opens to show how, where and at which commit it was counted.
- Motion grammar: each poster pins once, settling with a pin press, staggered, as the wall first enters view. There is no other entrance motion, and none under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- The owner's photo, internship start date and length, working arrangement and LinkedIn URL are placeholders.
