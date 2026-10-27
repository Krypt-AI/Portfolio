# Portfolio

The portfolio of a Diploma in Computer Science student, in two forms built from the same facts:

- **The website (`/`)** is set as a university project exhibition. Each public project is a poster pinned to a felt wall. A poster reads top to bottom: why the project exists, what was built, how it works, measured results and what is next. Every number on a poster opens to show how it was counted. The presenter's own posters follow: About me, Skills (each linked to a source file that proves it), Certificates, and the CV handout.
- **The printed CV (`/cv`)** is set as an electronic component's datasheet. Skills are the pins of a 16-pin chip. Specify is the "typical application", told in depth, and the other projects are listed under Other Applications. It prints to A4: open it and choose **Save as PDF** in the print dialog.

Built with [Astro](https://astro.build) and TypeScript. The output is static HTML with very little JavaScript, so it loads fast and hosts free.

## Before you deploy: fill in your details

Everything personal lives in `src/data/`. Every placeholder is written as `placeholder('sample', 'hint')`; replace the whole call with the real value:

```ts
// before
internshipFrom: placeholder('Month YYYY', 'the earliest start date for industrial training'),
// after
internshipFrom: 'March 2027',
```

| What | Where |
| --- | --- |
| **Your photo** | Drop one image (jpg, png or webp) into `src/assets/me/`. A square, head-and-shoulders crop works best. It appears on the banner and the About poster. |
| Name, programme, dates, availability, contact, roles, interests | `src/data/profile.ts` |
| Certificates, newest first | `src/data/certificates.ts` |
| Your timeline, as the CV's revision history | `src/data/revisions.ts` |

While anything is missing, both pages mark it with a dotted red underline and a draft banner lists every open value. **`npm run build` refuses to finish until they are filled in**, so a page reading "Month YYYY" can't be deployed by accident.

### Projects and skills

- `src/data/projects.ts` holds the three public projects, in the order the website shows them. Every number was counted from the repository's public default branch at the commit named beside it; recount when a project changes.
- `src/data/skills.ts` holds the skills. Each one links to the public source file that proves it. Only link public repositories.
- `src/cv/data/application.ts` holds Specify's full case study for the printed CV.

### Adding a CV file

Put the PDF in `public/` (for example `public/cv.pdf`) and set `cv: '/cv.pdf'` in `profile.ts`. Every CV button then downloads that file. Until then they open the printable CV at `/cv`.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (Node 22.12 or newer) |
| `npm run dev` | Local preview at http://localhost:4321, placeholders allowed |
| `npm run check` | Type-check everything |
| `npm run build` | Type-check and build to `dist/`. Stops while placeholders remain |
| `npm run build:draft` | Build even with placeholders, for previews |
| `npm run preview` | Serve the built `dist/` |

## Deploying (Netlify)

The site is a static `dist/` folder, so Netlify serves it as-is, with no adapter or functions. The build settings, security headers and caching rules live in [`netlify.toml`](netlify.toml).

1. Push the repository to GitHub.
2. In Netlify, import it as a new project (**Add new project → Import an existing project**).
3. If the repository holds more than this site (the `Website Portfolio` folder does), set **Base directory** to `Portfolio` so Netlify finds `netlify.toml`. The build command (`npm run build`), publish directory (`dist`) and Node version (24) then come from that file.
4. Deploy. Every push to the production branch redeploys.

Things to know:

- **Production deploys stop while placeholders remain**, just like `npm run build` here, and the deploy log lists each one. Deploy previews and branch deploys run `npm run build:draft` instead, so you can check a draft, banner included, before everything is filled in.
- **Canonical link:** builds on Netlify use the project's primary address (Netlify's `URL` variable), including a custom domain once you set one. Add a `SITE_URL` environment variable only to use a different address.
- **Without Git:** run `npx netlify-cli deploy --build --prod` in this folder. The first run asks you to sign in and to create or link a Netlify project.

## How it's organised

```
src/
  data/        The shared facts both pages read: profile, projects, skills, certificates, timeline, photo
  lib/         The placeholder helper
  components/  Parts both pages share: icons, TBD values, the draft notice
  layouts/     The HTML shell both pages share
  pages/       index.astro (the website), cv.astro (the printed CV), the favicon
  web/         The website's exhibition world: layout, posters, banner, styles
  cv/          The printed CV's datasheet world: layout, sections, components, styles, case-study data
  assets/      Your photo (me/) and project screenshots, each carrying where it came from
```

`PRODUCT.md` records who the site is for and what it must prove. `.impeccable/surfaces/` holds one design brief per page. `DESIGN.md` documents the website's visual system, and `src/cv/DESIGN.md` documents the printed CV's.
