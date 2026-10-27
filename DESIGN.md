---
name: Portfolio (The Poster Session)
description: The owner's public projects pinned up at a university project exhibition. White poster sheets on light grey felt, red push pins, one band colour per poster.
colors:
  felt: "#d5d9df"
  sheet: "#ffffff"
  sheet-tint: "#f3f5f8"
  ink: "#111418"
  ink-2: "#3c434c"
  ink-3: "#59616b"
  rule: "#d9dde3"
  banner: "#111418"
  banner-raised: "#2a3038"
  on-banner: "#ffffff"
  on-banner-muted: "#b8c0ca"
  status-live: "#4ade80"
  pin: "#e63946"
  pin-deep: "#a8222f"
  pin-on-dark: "#ff8a93"
  action: "#c8283a"
  action-deep: "#a51f30"
  band-specify: "#1d4ed8"
  band-study-hub: "#0f766e"
  band-rwby-afterlight: "#c41e3a"
  band-presenter: "#111418"
typography:
  display:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 4.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
  name:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 2.8vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  address:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
  headline:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 2.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
  readout-value:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 1.9rem + 1vw, 2.875rem)"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "'tnum' 1"
  band:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.03em"
  title:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
  lead:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
  caption:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  mono:
    fontFamily: "'Atkinson Hyperlegible Mono Variable', ui-monospace, Consolas, monospace"
    fontSize: "0.92em"
    fontWeight: 400
rounded:
  sheet: "0px"
  radius: "3px"
  dot: "50%"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-5: "1.5rem"
  space-6: "2rem"
  space-7: "3rem"
  space-8: "4rem"
  gutter: "clamp(1rem, 3vw, 2.5rem)"
  wall-gap: "clamp(1.25rem, 2.4vw, 2.5rem)"
  wall-width: "100rem"
  poster-pad: "clamp(1.25rem, 1.9vw, 2rem)"
  measure: "66ch"
  nav-height: "3.25rem"
components:
  poster-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(2.5rem, 1.9vw + 1.25rem, 3.25rem) clamp(1.25rem, 1.9vw, 2rem) clamp(1.25rem, 1.9vw, 2rem)"
  push-pin:
    backgroundColor: "{colors.pin}"
    rounded: "{rounded.dot}"
    size: "1.375rem"
  section-band:
    backgroundColor: "{colors.band-specify}"
    textColor: "{colors.sheet}"
    typography: "{typography.band}"
    rounded: "{rounded.sheet}"
    padding: "0.35rem clamp(1.25rem, 1.9vw, 2rem) 0.3rem"
  section-band-presenter:
    backgroundColor: "{colors.band-presenter}"
    textColor: "{colors.sheet}"
  readout:
    backgroundColor: "{colors.sheet-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.readout-value}"
    rounded: "{rounded.sheet}"
    padding: "0.75rem 1rem"
  button-action:
    backgroundColor: "{colors.action}"
    textColor: "{colors.sheet}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.15rem"
    height: "2.75rem"
  button-action-hover:
    backgroundColor: "{colors.action-deep}"
    textColor: "{colors.sheet}"
  button-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.15rem"
    height: "2.75rem"
  button-sheet-hover:
    backgroundColor: "{colors.banner}"
    textColor: "{colors.sheet}"
  button-outline:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0 1.15rem"
    height: "2.75rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  exhibitor-banner:
    backgroundColor: "{colors.banner}"
    textColor: "{colors.on-banner}"
    padding: "1.5rem 0"
  badge-photo:
    backgroundColor: "{colors.banner-raised}"
    rounded: "{rounded.radius}"
    size: "6rem"
  wall-nav-link:
    backgroundColor: "{colors.banner}"
    textColor: "{colors.on-banner-muted}"
    typography: "{typography.caption}"
    padding: "0 0.75rem"
    height: "{spacing.nav-height}"
  wall-nav-link-current:
    textColor: "{colors.on-banner}"
  step-station:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dot}"
    size: "2.25rem"
  step-station-person:
    backgroundColor: "{colors.band-specify}"
    textColor: "{colors.sheet}"
  step-station-stop:
    backgroundColor: "{colors.action}"
    textColor: "{colors.sheet}"
  contact-desk:
    backgroundColor: "{colors.banner}"
    textColor: "{colors.on-banner}"
    typography: "{typography.address}"
    padding: "4rem 0 3rem"
  qr-code:
    textColor: "{colors.ink}"
    size: "5.5rem"
---

# Design System: Portfolio (The Poster Session)

> Scope: the website at `/` (src/pages/index.astro, src/web/, tokens in src/web/styles/tokens.css). The printed CV at `/cv` deliberately keeps a second world, the Component Datasheet, documented in [src/cv/DESIGN.md](src/cv/DESIGN.md). The two worlds share data and three small components (Icon, Value, DraftNotice in src/components/) but no tokens, faces or rules. Never carry datasheet devices (Archivo, Fragment Mono, numbered sections, ruled tables, flags, manufacturer red #c8102e) onto the website, or poster devices onto the CV.

## Overview

**Creative North Star: "The Poster Session"**

The website is a university project exhibition. Each public repository hangs as a white A0 poster pinned to a light grey felt wall, read top to bottom in one standing glance: why it exists, what was built, how it works, measured results, what is next. The presenter's ink banner heads the wall with their badge, availability and the two actions a recruiter came for; the presenter's own posters (About, Skills, Certificates, a CV handout) hang on a second row; an ink contact desk closes the wall.

Each poster owns one band colour (Specify blue, Study Hub teal, RWBY red, ink for the presenter's posters). That colour runs through the poster's title, its section bands, bullets, readout rules, step stations, link colour and foot rule, so a poster reads as one object from across the room. Reading comfort beats density: 17px body text in a legibility-first face, short sections under plain banded headings, one idea per band. The system is light only (`color-scheme: light`); ink appears only at the ends of the wall.

Confirmed rejections, from the owner's brand commitment: no dark hero, no gradient blob, no percentage skill bars, no grid of same-size cards. The wall is deliberately uneven: a 1.6-fraction lead poster beside two at one fraction, posters hanging at their natural heights.

**Key Characteristics:**
- Felt wall, white sheets, ink type, red push pins; one band colour per poster.
- Big Shoulders lettering for titles, names, bands and measured values; Atkinson Hyperlegible Next for every sentence; its Mono only for commits, paths and counted values.
- Section bands are the headings.
- Every measured number shows its working on demand.
- Motion happens once: each poster pins as the wall enters view, and never under reduced motion.

## Colors

A cool-neutral exhibition palette (blue-grey felt, pure white sheets, blue-black ink) carrying four poster band colours and a red that belongs to the pins and the primary action.

### Primary
- **Push Pin Red** (#e63946): the pin heads, the dotted TBD underline on white, the underline under the email address at the contact desk. A drawing colour: 4.2:1 on white, so it never sets text.
- **Pin Rim** (#a8222f): the stroke and collar of every pin head.
- **Pin On Dark** (#ff8a93): the TBD underline wherever it sits on ink (banner status line, contact desk).
- **Action Red** (#c8283a): the "Email me" button, the stop station in a steps figure, the Contact swatch in the section nav and the caret. White text on it is 5.5:1.
- **Action Deep** (#a51f30): hover state of the action button.

### Secondary (the poster bands)
- **Specify Blue** (#1d4ed8): the Specify poster's band; also the site's focus ring on every sheet. White on it 6.7:1.
- **Study Hub Teal** (#0f766e): the Study Hub poster's band. White on it 5.5:1.
- **Afterlight Red** (#c41e3a): the RWBY Afterlight poster's band. White on it 5.8:1.
- **Presenter Ink** (#111418): the band of the About, Skills, Certificates and handout posters.

### Tertiary
- **Live Green** (#4ade80): the dot beside "Available for industrial training" on the banner. Always beside its words.

### Neutral
- **Felt** (#d5d9df): the wall, with a fine ink fleck drawn by an SVG noise filter and tiled over it; the scrollbar track.
- **Sheet** (#ffffff): every poster, the white CV button on the banner, white text on bands and buttons.
- **Sheet Tint** (#f3f5f8): insets on a sheet: the readout cells, the empty photo frame on the About poster.
- **Ink** (#111418): all poster text, outline buttons, QR modules, text selection ground.
- **Ink Two** (#3c434c): secondary text: meta lines, fact values, step text, readout working, screenshot captions. 7:1 even on felt.
- **Ink Three** (#59616b): captions, the commit line, proof links, QR captions. 6.3:1 on white; never on felt.
- **Rule** (#d9dde3): the hairline frame of screenshots and the About photo.
- **Banner Ink** (#111418): the exhibitor banner, the sticky section nav and the contact desk.
- **Banner Raised** (#2a3038): the empty photo frame inside the banner badge.
- **On Banner** (#ffffff) and **On Banner Muted** (#b8c0ca, 10:1 on the banner): primary and secondary text on ink.

### Named Rules
**The One Band Per Poster Rule.** A poster sets one band colour and uses it for its title, bands, bullets, readout rules, step stations, links and foot rule. No poster carries a second band colour; neutrals do the rest.

**The Pin Is Not The Button Rule.** Push Pin Red (#e63946) draws pins and underlines only. Text-bearing red surfaces use Action Red (#c8283a), which is a separate token for contrast.

**The Felt Is For Sheets Rule.** Felt is the ground between posters, never a reading surface. Text that sits on felt uses Ink or Ink Two; Ink Three stays on sheets.

## Typography

**Display Font:** Big Shoulders Variable (self-hosted via @fontsource-variable/big-shoulders), falling back to Arial Narrow
**Body Font:** Atkinson Hyperlegible Next Variable (@fontsource-variable/atkinson-hyperlegible-next), falling back to system-ui
**Label/Mono Font:** Atkinson Hyperlegible Mono Variable (@fontsource-variable/atkinson-hyperlegible-mono), falling back to ui-monospace, Consolas

**Character:** Condensed exhibition lettering, heavy and tall, carries every name and number a visitor reads from a distance; a face designed for low-vision legibility carries every sentence read up close. The mono is the same family's, so a commit hash sits in a sentence without changing its voice.

### Hierarchy
- **Display** (Big Shoulders 800, clamp(3rem → 6rem), 0.92): the lead poster's title (Specify, About me) and "Let's talk" at the contact desk.
- **Name** (Big Shoulders 800, clamp(2.5rem → 4rem), 0.95): the presenter's name on the banner badge. Once per page; it is the h1.
- **Address** (Big Shoulders 800, clamp(2rem → 4rem), 1): the email address at the contact desk, underlined 3px in Push Pin Red.
- **Headline** (Big Shoulders 800, clamp(2.25rem → 3.75rem), 0.92): every other poster title, coloured in the poster's band.
- **Readout value** (Big Shoulders 800, up to clamp(2.25rem → 2.875rem), 1, tabular figures): measured numbers; capped at 11cqi so a value never outgrows its cell, with a 1.75rem floor.
- **Band** (Big Shoulders 800, 1.375rem, 1.2, 0.03em, uppercase): section bands.
- **Title** (Atkinson 700, 1.25rem, 1.35): poster taglines (max 30ch), the Skills intro, skill and certificate names, step titles.
- **Lead** (Atkinson 400, 1.25rem, 1.5): the About summary (max 52ch) and the desk lead.
- **Body** (Atkinson 400, 1.0625rem, 1.6, max 66ch): running text, bullets, facts.
- **Button** (Atkinson 700, 1.0625rem, 1): buttons and external links.
- **Caption** (Atkinson 400, 0.9375rem): captions, meta lines, the commit line, readout working, section nav links (at 700), colophon. The smallest step.
- **Mono** (Atkinson Hyperlegible Mono, 0.92em of context): commits, repository paths, evidence file labels.

### Named Rules
**The Lettering Is For Distance Rule.** Big Shoulders sets only what is read from across the room: titles, the name, bands, measured values, the email address, step numbers. Sentences are never set in it.

**The Mono Is Evidence Rule.** Atkinson Hyperlegible Mono appears only for commits, paths and counted sources. It never sets a heading or a decoration.

**The Readable Floor Rule.** Body text is 1.0625rem (17px); nothing that carries meaning goes below the 0.9375rem caption step.

## Layout

A wall up to 100rem wide plus gutters (clamp(1rem, 3vw, 2.5rem)), centred on felt. Posters hang in rows on a three-column grid, lead poster at 1.6 fractions beside two at one (`1.6fr 1fr 1fr`), aligned to the top so every pin sits on one line and each poster keeps its natural height; the gap between sheets is clamp(1.25rem, 2.4vw, 2.5rem). The project row opens 3rem below the nav. The presenter row opens 4rem below it in named areas: About spans two rows on the left, a wide Skills sheet fills the top right, Certificates and the handout share the row under it.

Spacing follows one rhythm (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4rem). Inside a poster, padding is clamp(1.25rem, 1.9vw, 2rem) with 1.25rem extra at the top for the pins; bands take 2rem above and 1rem below; the foot opens 2rem above.

Every poster is a size container. Container queries, not viewport media queries, decide a poster's interior: a project poster at 50rem or wider (the lead poster), About at 46rem and Skills at 40rem flow their sections into two balanced CSS columns (3rem gap, in reading order, sections never split). Narrow readout grids go to one column under 17rem; About stacks its head and its fact columns under 34rem.

Responsive wall: at 75rem the lead poster takes a full row and the other two share the next; the presenter row becomes About, then Skills, then Certificates beside the handout. At 46rem everything is one column and the section nav gains its edge fades. At 40rem the banner badge photo drops to 4.5rem and the banner buttons split the width.

## Elevation & Depth

Paper on felt, lifted only as far as a pinned sheet is. Each poster carries one soft two-part shadow; the pins cast their own small drop shadow onto the sheet. The ink banner and contact desk are flat. The sticky section nav casts a short shadow down onto the wall as it scrolls over it, and screenshots sit on the sheet with a hairline frame and the faintest contact shadow.

### Shadow Vocabulary
- **Pinned sheet** (`box-shadow: 0 1px 2px rgb(17 20 24 / 0.14), 0 14px 28px -18px rgb(17 20 24 / 0.45)`): every poster at rest.
- **Pin** (`filter: drop-shadow(1.5px 2.5px 1.5px rgb(17 20 24 / 0.32))`): every push pin.
- **Nav over wall** (`box-shadow: 0 6px 16px -10px rgb(17 20 24 / 0.6)`): the sticky section nav only.
- **Screenshot contact** (`box-shadow: 0 1px 2px rgb(17 20 24 / 0.08)`): screenshot frames on a sheet.

### Named Rules
**The Pinned Sheet Rule.** Depth belongs to paper on felt. A sheet lifts as far as a pin holds it and no further; nothing on a sheet lifts off it, and shadows stay soft and ink-tinted.

## Shapes

Sheets, bands, readout cells and the section nav swatches are square. One small corner (3px) is reserved for controls and photos: buttons and the banner badge photo; the focus ring rounds 2px. The round forms belong to the exhibition hardware and diagrams: push pin heads, the steps figure's numbered stations, the live status dot.

Rules are thick and coloured, not hairline: a 3px band-coloured rule tops each readout cell, each certificate and the poster foot; steps join with a 3px band line; station rings are 3px. Buttons take a 2px border. Hairlines (Rule) frame screenshots and photos only. Square bullets (0.5rem) in the band colour mark lists. Empty photo frames are dashed.

## Components

### Poster sheet
The unit of the wall: a white, square, softly shadowed sheet held by flat push pins.
- **Pins:** authored inline SVGs (a Push Pin Red head with a Pin Rim stroke and a darker collar), placed per poster in percent across the top edge so no two posters hang alike. Wide sheets (Specify, About, Skills) take two corner pins (7/93 or 6/94); narrow sheets take one, off-centre (44, 57, 46, 56).
- **Head:** title in the band colour, then a bold tagline and a meta line (dates in Ink Two, stack in Ink Three).
- **Foot:** a 3px band rule, band-coloured "Source on GitHub" and live links with their repository path in mono, and a build-time QR code (5.5rem, ink on transparent) captioned "Scan for the repository".

### Section bands
The poster's headings: full-width bars in the poster's band colour, white uppercase Big Shoulders 800 at 1.375rem. In a single-column poster they bleed to the sheet's edges (negative margins equal to the poster padding); once the poster flows into two columns they sit inset within their column with 1rem side padding.

### Results readouts (signature: "show working")
Every measured number is a native `<details>`. The summary shows the value in Big Shoulders, its label at 700 and a "Show working" toggle in Ink Three, underlined in the band colour, with a plus that becomes a minus when open. Opened, it shows how, where and at which commit the number was counted, in Ink Two at caption size. Cells sit on Sheet Tint under a 3px band rule, two to a row; cells in a row share one height, so the toggles align along the bottom. A commit line in mono closes the grid. The disclosure animates its height over 280ms only when motion is allowed, and works without script and by keyboard.

### Buttons
- **Shape:** 3px corners, 2px border matching the fill, min height 2.75rem, 1.15rem horizontal padding, Atkinson 700, optional 1.15em leading stroke icon.
- **Action:** Action Red fill with white text ("Email me"); hover deepens to Action Deep.
- **Sheet:** white on the ink banner (CV, Copy address); hover empties to a white outline on ink.
- **Outline:** ink outline on a sheet (the handout's CV link); hover fills with ink.
- **Transitions:** 160ms on the ease-out curve. Focus is a 3px ring at 3px offset in Specify Blue on sheets and in white on ink surfaces.

### Exhibitor banner and badge
An ink strip across the top. Left: the presenter badge, a 6rem square photo with a 3px white frame (a dashed muted frame marked TBD until the photo exists), the name in Big Shoulders and the programme in On Banner Muted. Right: the live dot with the availability line, then the action and sheet buttons.

### Section nav
A sticky ink strip directly under the banner, divided by a white hairline at 14%. Links at caption size, 700, in On Banner Muted, each led by a square swatch outlined in muted white that fills with its poster's band colour on hover or when current (white for the presenter's ink-banded posters, Action Red for Contact). The current link turns white with a 3px white bar along its bottom. On phones the strip scrolls sideways with a hidden scrollbar, fades its trailing edge (and its leading edge once scrolled), and scrolls the current link into view as the wall scrolls; above the wall it returns to the start.

### Steps figure
A process drawn as numbered stations on one vertical line: 2.25rem circles with a 3px band ring and Big Shoulders numbers, joined by a 3px band line. A step the person owns fills with the band colour and colours its title; a step that stops the flow fills with Action Red and ends the line. A bold figure title leads the caption.

### Screenshot figure
A screenshot up to 26rem wide in a hairline frame that opens full size in a new tab (zoom cursor), with a caption in Ink Two and its provenance note in Ink Three.

### Contact desk
The ink close of the wall: "Let's talk" at display size, the lead in On Banner Muted, the email address in Big Shoulders with a 3px Push Pin Red underline beside a Copy address button that confirms in words, then GitHub, LinkedIn and CV links and a colophon under a hairline.

### TBD marker
A value still to be supplied gets a 2px dotted underline in Push Pin Red (Pin On Dark on ink) and a help cursor with its hint. Production builds refuse to ship while any remain (`assertReadyToShip`); draft builds show the shared DraftNotice band.

### Motion
Each poster pins once, the first time it enters view: the sheet settles from 14px above with a half-degree tilt and a deeper shadow (620ms, ease-out), then its pins press in from 1.45x scale with a longer shadow (360ms, starting 300ms later), staggered 90ms per poster arriving together. Under reduced motion, or without script, the posters simply hang there. No other entrance motion exists.

## Do's and Don'ts

### Do:
- **Do** give every poster exactly one band colour and run it through title, bands, bullets, readout rules, stations, links and foot rule.
- **Do** use section bands as the poster's headings: full-bleed in one column, inset in two.
- **Do** make every measured number a "show working" readout that names how, where and at which commit it was counted.
- **Do** place pins per poster in percent; give wide sheets two corner pins.
- **Do** let container width, not viewport width, decide when a poster flows into two balanced columns.
- **Do** keep body text at 1.0625rem and captions at 0.9375rem or larger.
- **Do** keep Ink Three on white sheets; on felt use Ink or Ink Two.
- **Do** mark unfinished values with the dotted red TBD underline and keep production builds refusing them.
- **Do** keep motion to 160ms state changes and the one-time pinning, and skip it under reduced motion.

### Don't:
- **Don't** build a dark hero, a gradient blob, percentage skill bars or a grid of same-size cards; the wall hangs uneven sheets at natural heights.
- **Don't** put an ink section between posters; ink belongs to the banner, the nav and the contact desk at the ends of the wall.
- **Don't** set eyebrow labels or kickers above poster titles; the band beneath the head does the locating.
- **Don't** set sentences in Big Shoulders or headings in the mono.
- **Don't** set text in Push Pin Red (#e63946); use Action Red (#c8283a) for red surfaces that carry text.
- **Don't** round sheets, bands or readout cells; 3px corners are for buttons and photos only.
- **Don't** lift anything off a sheet with a shadow, or use hard offset shadows; depth is paper on felt.
- **Don't** use datasheet devices (Archivo, Fragment Mono, numbered sections, ruled tables, flags) on the website.
