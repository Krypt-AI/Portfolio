---
name: Portfolio printed CV (Component Datasheet)
description: The owner specified like an electronic part. White datasheet paper, black ink, one manufacturer red.
colors:
  paper: "#fbfbfa"
  paper-sunk: "#efefed"
  paper-inset: "#f4f4f2"
  ink: "#151515"
  ink-2: "#45474a"
  ink-3: "#626569"
  rule: "#d4d5d2"
  instrument: "#8a8f94"
  screen: "#0b0b0d"
  red: "#c8102e"
  red-deep: "#9e0c24"
  red-wash: "#f8e3e6"
  status-active: "#1d7a43"
  on-red: "#ffffff"
  on-ink-muted: "#c9cacc"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.35rem + 5.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.8vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.3
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.012em"
  subhead:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.2
  lead:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  table:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 87.5"
  footnote:
    fontFamily: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "'Fragment Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "0.94em"
    fontWeight: 400
    letterSpacing: "0"
rounded:
  square: "0px"
  hairline: "2px"
  bar-end: "4px"
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
  space-9: "6rem"
  gutter: "clamp(1rem, 3.6vw, 2.5rem)"
  sheet-width: "75rem"
  measure: "68ch"
  bar-height: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.table}"
    rounded: "{rounded.hairline}"
    padding: "0 1rem"
    height: "2.5rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-red}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    rounded: "{rounded.hairline}"
    padding: "0 1rem"
    height: "2.5rem"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  table-head:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.5rem 0.75rem"
  table-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    padding: "0.75rem"
  table-row-lit:
    backgroundColor: "{colors.red-wash}"
    textColor: "{colors.ink}"
  flag-active:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.18em 0.5em"
  flag-preview:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.18em 0.5em"
  flag-tbd:
    textColor: "{colors.red}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.18em 0.5em"
  product-folder-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "{spacing.bar-height}"
  monogram:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.square}"
    size: "2rem"
  running-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.footnote}"
    padding: "0.75rem 0"
  page-break-gap:
    backgroundColor: "{colors.paper-sunk}"
    height: "{spacing.space-6}"
  code-inline:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.hairline}"
    padding: "0.05em 0.3em"
  chart-bar:
    backgroundColor: "{colors.instrument}"
    rounded: "{rounded.bar-end}"
    height: "0.875rem"
  chart-bar-emphasis:
    backgroundColor: "{colors.red}"
    rounded: "{rounded.bar-end}"
    height: "0.875rem"
  chart-readout:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.footnote}"
    padding: "0.25rem 0.75rem"
---

# Design System: Portfolio printed CV (Component Datasheet)

> Scope: the printed CV at `/cv` only (src/pages/cv.astro and src/cv/, tokens in src/cv/styles/tokens.css). The website at `/` is a different world, The Poster Session, documented in the root DESIGN.md. Do not mix the two: no poster bands, felt or push pins here, and no datasheet rules, flags or Archivo on the website. The DraftNotice in src/components/ is shared by both surfaces and styled on its own.

## Overview

**Creative North Star: "The Component Datasheet"**

The page is a manufacturer's datasheet for a person. Everything a visitor reads is set the way a part is specified: a product-folder bar, a running head with part and document numbers, numbered sections, ruled tables of parameters with footnotes, numbered figures, a pinout, a functional block diagram and an ordering-information table. The register is technical print, not web marketing; credibility comes from structure that can be checked line by line.

Density is high but orderly. White paper and black ink do almost all the work; hierarchy is carried by rule weight (2px ink frames, 1px ink dividers, hairline rules), by type weight and by Archivo's width axis rather than by color or depth. One manufacturer red marks numbers, actions, the identity tile, status and the lit pin. The system is flat, square-cornered and light only (`color-scheme: light`): datasheets are printed paper, read in daylight, and the page prints to A4 as a CV.

Confirmed rejections, from the owner's brand commitment and the shipped build: no dark hero, no gradient fills, glass or glows, no percentage skill bars, no grid of same-size cards, no labels set above headings.

**Key Characteristics:**
- Paper, ink and one red; grey is for drawing, never for reading.
- Hierarchy by rules and widths: expanded heavy for identity, normal for reading, condensed caps for table heads and flags.
- Everything is numbered and cross-referenced: sections, tables, figures, footnotes.
- Square, flat, ruled. Depth exists only for the floating chart readout.
- Motion is functional and rare: the pins seat once; nothing else enters.

## Colors

A near-achromatic print palette (warm-neutral paper, true black ink, cool graphite greys) with a single saturated manufacturer red and one status green.

### Primary
- **Manufacturer Red** (#c8102e): section and table numbers, the monogram tile, the primary button, link underlines, the active-section tick in the bar, the TBD marker, the TBD flag, the lit pin and its trace, the emphasis bar in a chart, text selection, the focus ring and the caret. 5.6:1 on paper, so it may carry small text.
- **Red Deep** (#9e0c24): hover and pressed state of red surfaces (primary button, emphasis bar) and the draft notice's disclosure text.
- **Red Wash** (#f8e3e6): the lit Pin Functions row and the draft notice band. A background tint only, never text.

### Secondary
- **Signal Green** (#1d7a43): the dot inside an ACTIVE status flag. It always ships beside a word; color alone never carries status.

### Neutral
- **Datasheet Paper** (#fbfbfa): the page ground, the product-folder bar, figure fills.
- **Sunk Paper** (#efefed): table header fills, revision-history heads, inline code, the important-notice band, the grey gap between pages, the scrollbar track.
- **Inset Paper** (#f4f4f2): the field of code listings and the device body in the Figure 5 block diagram; a step lighter than Sunk Paper.
- **Ink** (#151515): body text, headings, every structural rule (2px frames, 1px dividers), schematic wires and package outlines.
- **Ink Two** (#45474a): secondary text, nav links at rest, key column of key/value tables, running head. 9:1 on paper.
- **Ink Three** (#626569): captions, footnotes, stacked-row labels, axis ticks, colophon. 5.6:1 on paper; the lightest text color allowed.
- **Rule** (#d4d5d2): hairlines between table rows, chart gridlines, page-break borders.
- **Instrument Grey** (#8a8f94): drawing lines only: pin leaders, block-diagram group boxes, schematic internals, dot leaders, de-emphasised chart bars, the scrollbar thumb.
- **Screen** (#0b0b0d): the frame behind screenshots of dark-themed apps only; never a page or section ground.
- **Muted on Ink** (#c9cacc): secondary text on an ink surface (about 11:1), used for the label line in the chart hover readout.

### Named Rules
**The One Red Rule.** Red is the only chromatic accent and it marks things that are numbered, actionable, live or unfinished. It never fills a large area; the largest red surfaces are the 2rem monogram and the primary button.

**The Instrument Is Not Ink Rule.** Instrument grey (#8a8f94) draws lines and de-emphasised marks and is never used for text. The lightest text is Ink Three.

**The Labelled Status Rule.** Green appears only as the dot in a flag that also says the status in words.

## Typography

**Display Font:** Archivo Variable (self-hosted via @fontsource-variable/archivo, width axis 62–125%, weight 100–900), falling back to Archivo, Helvetica Neue, Arial
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** Fragment Mono 400 (@fontsource/fragment-mono), falling back to ui-monospace, Cascadia Mono, Consolas

**Character:** One grotesque on its width axis does the work of a whole family: expanded heavy reads as a part marking, normal is the reading voice, condensed caps are the datasheet's table heads. The mono is a measuring instrument, not a mood.

Three named widths are the only ones used: condensed (87.5%), normal (100%), expanded (118%).

### Hierarchy
- **Display** (800, expanded, clamp(2.75rem → 6rem), line-height 0.95, -0.035em): the owner's name in the title block. Once per page.
- **Title** (500, normal, clamp(1.25rem → 1.625rem), 1.3): the one-line descriptive title under the name, max 44ch.
- **Headline** (700, 1.5rem, 1.2, -0.012em): numbered section headings, sitting on a 2px ink rule with the number in red.
- **Subhead** (700, 1.1875rem): numbered subsections (6.3, 6.3.1); level 4 drops to 1rem at the same weight.
- **Lead** (400, 1.1875rem, 1.5, max 52ch): the opening paragraph of a long section.
- **Body** (400, 1rem, 1.6, max 68ch): running text and bullets (square ink bullets, 0.42em).
- **Table** (400, 0.875rem, 1.45, tabular figures): table cells, captions, buttons, nav links.
- **Label** (650, condensed, 0.8125rem, 0.05em, uppercase): table heads, key/value terms, stacked-row labels. Flags use the same at 700 and 0.06em.
- **Footnote** (400, 0.8125rem, 1.5, Ink Three): footnotes, running heads, page footers, axis text.
- **Mono** (Fragment Mono 400, 0.94em of context): pin numbers, file paths, document and part codes, measured values, code listings (0.8125rem, line-height 1.7).

Expanded heavy (750–800, 118%) is reserved for identity marks: the name, the monogram, the package marking on the DIP, the U1 device name in Figure 1, and the contact email address.

### Named Rules
**The Width Axis Rule.** Hierarchy changes width before it changes typeface: expanded for identity, normal for reading, condensed caps for labels. No second sans, no display face from the system stack.

**The Mono Measures Rule.** Fragment Mono appears only where a datasheet would print a code or a measurement: pins, paths, document codes, values, listings. It is never decorative and never sets a heading.

## Layout

A single 12-column sheet, max 75rem plus gutters (gutter clamp(1rem, 3.6vw, 2.5rem)), centred on paper. Text runs to a 68ch measure. The page is divided into datasheet pages: each `page` pads 3rem above and 4rem below and ends in a page-break band (footer line with page number, a 2rem Sunk Paper gap framed by hairlines, then the next running head over a 1px ink rule). Print turns each gap into a real A4 page break.

Spacing follows one 4px-based rhythm (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6rem). Section headings take 1.5rem below; subsections open with 4rem above. Grids use fractional columns from the 12: 5/3/4 for page one's Features, Applications and Description; 4/8 for pinout beside its table and for the important notice; 7/5 for text beside a fact table.

Responsive behavior: at 68rem the product-folder bar splits into two rows, the section links on top in a horizontally scrolling strip that scrolls away, mark and actions sticky below. At 64rem and 60rem multi-column grids collapse (page one to two, then one column; the pinout stacks and its figure stops being sticky). At 40rem wide tables restack into one block per row with labels from `data-label`, so no measured value hides behind sideways scroll. At 30rem the part number leaves the bar and chart labels narrow. The block diagram keeps its drawing and scrolls horizontally below 62rem with a visible hint.

## Elevation & Depth

The system is flat. Depth is expressed by rules and tone: 2px ink rules frame tables, figures and the title block's part box; Sunk Paper recesses table heads, notices and page gaps; the sticky bar separates with a 1px ink rule, not a shadow.

### Shadow Vocabulary
- **Readout lift** (`box-shadow: 0 4px 12px rgb(21 21 21 / 0.18)`): only on the ink chart readout that floats over bars on hover or focus. It is the system's one shadow.

### Named Rules
**The Ruled, Not Raised Rule.** Containers are drawn with rules and tone, never lifted with shadows. A shadow is allowed only on a transient readout that overlaps content.

## Shapes

Square by default. Tables, flags, the monogram, the part box, schematic blocks, figure frames and notice bands have no radius. Small interactive and inline pieces take a hairline 2px corner (buttons, inline code); the focus ring rounds 1px. The only round forms are the status dot (50%) and the 4px rounded far end of a chart bar.

Borders are the main shape language: 2px ink for frames and the top of every section heading, 1.5px ink for buttons, flags, pin leads and wires, 1px ink for dividers under heads and bars, hairline Rule between rows, dashed for preview flags and optional wires, dotted Instrument for dot leaders. Schematic arrowheads are clipped triangles.

## Components

### Buttons
Square, firm, two variants only.
- **Shape:** hairline corners (2px), 1.5px border matching the fill, min height 2.5rem, 1rem horizontal padding, 600 weight at 0.875rem, optional 1.1em leading icon.
- **Primary:** Manufacturer Red fill and border with white text. Used for the CV download (or print-to-PDF).
- **Hover / Focus:** primary deepens to Red Deep; transitions 160ms on the ease-out curve. Focus is the global 2px red outline at 3px offset.
- **Quiet:** transparent with an ink border and ink text; on hover it inverts to an ink fill with paper text. Used for Email.

### Flags
- **Style:** inline, square, 1.5px currentColor border, condensed 700 caps at 0.8125rem with 0.06em tracking.
- **States:** ACTIVE is ink with a green dot; PREVIEW is Ink Two with a dashed border (placeholder content); TBD is red. Status is always written, never only colored.

### Ruled tables
- **Frame:** 2px ink top and bottom rules; heads on Sunk Paper with a 1px ink rule beneath; hairline Rule between rows. Key/value tables put the parameter in a 38% Ink Two row header.
- **Type:** 0.875rem tabular figures; numeric columns right-aligned; values in mono at 0.95em.
- **Captions:** `Table n.` in bold, above the table; footnote markers are superscripts in Ink Two, footnotes in Ink Three below.
- **Phones:** below 40rem, `dt--stack` tables become one block per row with condensed caps labels in a 7rem column; unit columns fold into the value.

### Navigation (product-folder bar)
- **Style:** sticky, Paper ground, 1px ink rule beneath, 3.5rem tall. Left: red monogram tile (2rem, expanded 800 initials), name, part number in mono. Centre: numbered section links (red numbers, Ink Two text at 550). Right: Email (quiet) and CV (primary).
- **States:** hover and current section go to ink; the current section also gets a 2px red tick under the link.
- **Mobile:** links ride in a scrolling row above and scroll off; mark and actions stay pinned.

### Running head and page breaks
Footnote-size furniture between datasheet pages: the running head shows part number and document number with revision date in Ink Two over a 1px ink rule; the footer shows document code, a contact link and the page number; between them a 2rem Sunk Paper gap.

### TBD marker
A value still to be supplied gets a 2px dotted red underline and a help cursor (3px on the display name). Paired with the draft notice band (Red Wash) that counts the open values.

### Pinout (signature)
Figure 2 / Table 2: a 16-pin DIP drawn in SVG beside the Pin Functions table. Hovering or focusing a pin, or its row, draws a red trace (320ms dash draw), fills the lead red and lights the row in Red Wash with red number and name. Each row links to the source file that proves it. On first view the pins seat once, in order (opacity 360ms and slide 520ms, 45ms stagger), only when the package starts below the fold and never under reduced motion.

### Figures and charts
- **Schematic (Figure 1):** HTML drawing of U1 with nets to external blocks; 2px ink device, 1.5px wires with clipped arrowheads; restacks to a bus on narrow screens.
- **Block diagram (Figure 5):** SVG; ink blocks on paper, Instrument group boxes, condensed caps group labels, dashed wires for optional paths.
- **Bar charts:** one series in Instrument Grey with a single red emphasis bar, a 1px ink baseline and axis, hairline gridlines, mono values and ticks. Hover or focus shows the ink readout; every chart ships its data table in a disclosure.
- **Code listings:** mono 0.8125rem on an Inset Paper (#f4f4f2) fill between a 2px ink top rule and a hairline bottom; wrapped lines hang 2ch so continuations never read as new lines.

## Do's and Don'ts

### Do:
- **Do** number every section, table and figure, set the number in red, and cross-reference by link.
- **Do** frame tables and figures with 2px ink rules top and bottom and separate rows with the hairline Rule (#d4d5d2).
- **Do** set table heads, key terms and flags in condensed (87.5%) caps at 650–700 with 0.05–0.06em tracking.
- **Do** keep text at Ink Three (#626569) or darker; use Instrument Grey (#8a8f94) for lines and de-emphasised marks only.
- **Do** pair every status color with its word, and mark unfinished values with the dotted red TBD underline.
- **Do** restack wide tables per row on phones instead of hiding values behind sideways scroll.
- **Do** keep motion to state changes (140–160ms) and the one-time pin seating, and skip it under reduced motion.

### Don't:
- **Don't** set labels, kickers or eyebrows above headings; the number in the heading and the running head already locate the reader.
- **Don't** use decorative gradient fills, glass, glows or dark sections; the world is light paper only.
- **Don't** wrap content in cards or add colored accent stripes to the side of a block; group with rules and Sunk Paper instead.
- **Don't** round containers; corners stay square, with 2px only on buttons and inline code.
- **Don't** use Fragment Mono decoratively or for headings.
- **Don't** add percentage skill bars or charts without a data table.
- **Don't** introduce a second accent hue; red is the only one.
