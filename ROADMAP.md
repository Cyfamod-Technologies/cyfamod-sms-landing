# Landing page redesign roadmap

## Why

The current landing page (`app/page.tsx`) has real, finished content — real dashboard
preview, real Play Store screenshots, real school names in the network marquee, a real
partner program. Nothing here is placeholder copy. What's missing is visual polish: the
page reads as flat and static next to more modern SaaS/ed-tech marketing sites.

## Reference

Local, self-contained copy of the HiStudy theme demo-picker page (education/LMS theme
by RainbowThemes/PixcelsThemes), used as a **styling pattern reference only** — its own
content (course demos, LMS features) doesn't transfer, its visual patterns do:

`notes/ideas for landing/histudy.pixcelsthemes.com/livepreview/index.html`

Patterns worth borrowing:

- Gradient treatment on key headline phrases, instead of flat text color
- Hero with floating/layered decorative elements around the main visual
- Feature grid with icons sitting inside soft-colored rounded containers
- Animated stat/counter band on a dark contrast section
- Card hover motion (lift/scale) instead of static cards
- Cleaner FAQ accordion styling
- Marquee/scroll sections with fade-out edges instead of a hard cut

## Brand colours — non-negotiable

The existing palette (`--navy`, `--orange` in `globals.css`) stays exactly as-is.
HiStudy is a pattern reference only, never a colour reference — its own blues,
purples, and gradient stops do not get pulled in anywhere. Every gradient, shadow,
and accent added in this roadmap is built *from* `--navy` / `--orange` (e.g. a
navy-to-orange gradient, or tinted/lightened variants of the two existing tokens),
never a new hue introduced from the reference site.

## Section-by-section mapping

Note: "icon-in-colored-shape" was the original Phase 3 plan (see roadmap history),
but was changed mid-implementation — HiStudy's actual card component
(`.service__style--1`) uses **plain icons with no colored box**, and a card that's
invisible at rest with a materialize-on-hover panel. That's what's actually built.
Table below reflects what's real, not the original guess.

| Section (`app/page.tsx`) | Current state | Treatment |
| --- | --- | --- |
| `Hero` | ✅ Done (PR #6) | Gradient on `<em>from one dashboard.</em>` (orange→lavender, not orange→purple — purple faded to black on the navy background), plus a `RotatingHeadline` component cycling 7 CTA phrases. **Known issue**: hero now feels crowded — see below. |
| `trust-strip` | Not started | Dark contrast band, counter/stat treatment (Phase 4) |
| `Platform` → `WorkflowCard` grid | ✅ Done (in progress branch `feat/scroll-reveal-and-hover`, not yet PR'd) | Plain orange icon (no box) above title, card has a visible resting background (needed — fully-transparent-at-rest looked broken against the matching section background), materializing gradient panel + soft glow on hover, `-14px` lift. Subtitle paragraph under the section heading removed per instruction. |
| `Apps` → app cards | ✅ Done (same in-progress branch) | Hover lift + shadow on `.app-card`, scale on the CBT screenshot on hover. Subtitle paragraph under the section heading removed per instruction. |
| `Partners` tracks | ✅ Done (same in-progress branch) | Same plain-icon + hover treatment as workflow cards (Share2 / Briefcase icons — first attempt used Lucide's `Handshake` icon, which doesn't render legibly at small size, illegible scribble not a shape — swapped out). Left-panel alignment bug fixed (was force-centered by a stray `!important` rule, same root cause as the logo bug below); content now vertically centered in the panel instead of pinned to the top with dead space below. |
| `SchoolMarquee` | Not started | Keep structure, add fade-out edges (Phase 5) |
| Final CTA | Not started | Dark contrast band, matching trust-strip treatment (Phase 4) |
| Scroll-in animation | ✅ Done (same in-progress branch) | New `Reveal` component (IntersectionObserver, fade+slide, respects `prefers-reduced-motion`) wraps Problem/Platform/Apps/Partners/Marquee/final-CTA sections. Added mid-roadmap — see "Why this got added" below. |
| FAQ | Not started, content drafted | See v2 section below — real Q&A written, needs your answers on pricing/security/support before it can ship |

### Why scroll-reveal got added (not in the original phase list)

After Phase 2 shipped, a review of `v1-before-histudy` (the pre-redesign checkpoint
branch) showed the page wasn't actually short on visual techniques — box-shadows and
hover states already existed in a few spots. The real problem was that almost
**nothing on the page moves after it loads** — no scroll response anywhere except the
school marquee ticker. That's the actual reason it read as "plain," more than any
single missing HiStudy widget. `Reveal` + consistent hover motion (this table, rows
marked done) is the fix, and turned out more valuable than continuing to hunt for
individual HiStudy components to port one at a time.

## Phasing

Deliberately sequenced smallest-and-highest-impact first, not a full-page rebuild in
one go — each phase is its own reviewable PR.

- **Phase 1 — Global tokens.** ✅ **Merged** (PR #5, branch
  `feat/design-tokens-gradients`). Pull gradient/shadow/radius/motion values into
  `globals.css` as reusable custom properties, alongside the existing `--navy` /
  `--orange` tokens.
- **Phase 2 — Hero.** ✅ **Merged** (PR #6, branch `feat/hero-gradient-and-glow`).
  Gradient headline + rotating CTA-phrase line. (The originally-planned "floating
  decorative shapes" were dropped — see Known issues; the rotator replaced that idea
  after a direct request to port HiStudy's word-rotator specifically.)
- **Phase 3 — Platform + Partners cards + scroll-reveal.** 🔄 **In progress**, not yet
  a PR. Currently on local branch `feat/scroll-reveal-and-hover` (dev server running
  on `localhost:3000` for review). Covers: card icon/hover rework (see mapping table
  above), scroll-in reveal animation, subtitle-paragraph removals, Partners alignment
  fix. Broader than the original "icon-shape treatment" scope — grew during the
  session once the actual goal ("make the plain page feel alive," not "clone
  HiStudy") got clarified.
- **Phase 4 — Contrast bands.** Not started. `trust-strip` and the final CTA get the
  dark stat/counter band treatment.
- **Phase 5 — Apps + marquee polish.** Partially covered by Phase 3's hover work
  above (app card hover, CBT screenshot scale). Still open: fade-out edges on
  `SchoolMarquee`.
- **Phase 6 — New FAQ section.** Not started. Content is drafted — see v2 section
  below.

## Recurring bug pattern — read this before editing globals.css

Five separate bugs this session had the **identical root cause**: an earlier
"polish/correction" pass added a rule with `!important`, a *later* pass added
another `!important` rule for the same property without removing the first,
and whichever one happened to sit later in the file silently won — usually
shrinking, centering, or hiding something it shouldn't have. Found and fixed:

1. Header/footer logo shrank across ~8 stacked `.site-brand-wide img`
   overrides down to 2.55rem. Consolidated into one rule (search
   "actually-prominent logo size" in `globals.css`).
2. Hero H1 shrank across 4 stacked `.hero h1{font-size...}` overrides from an
   original 6.1rem max down to 4.25rem. Fixed at the actual winning rule.
3. Partners' left panel was force-centered (`text-align:center!important`,
   unconditional) with the correct `left` value only ever applied inside a
   mobile-only media query — so desktop always showed it centered.
4. Same exact pattern again on `/partners` and `/mobile-apps`:
   `.subpage-inner>.hero-text` had *two* separate bugs stacked — a
   `text-align:center!important` (same pattern as #3) **and**, once that was
   fixed, a second `margin-left/right:auto!important` rule that centers the
   text block itself regardless of text-align. Both had to be found and
   fixed before the paragraph actually lined up under the H1.
5. The spinner logo was forced into a fixed 5rem×5rem *square* box via
   `object-fit:contain`, but the source image is a wide (~1.5:1) wordmark —
   contain-inside-a-square shrinks a wide image down until it's barely
   legible. Fixed by dropping the fixed width, using height + width:auto.

**If something looks wrong (too small, wrongly centered, invisible) and a
property is already set correctly earlier in the file, search for every
other occurrence of that selector/property before concluding it's not a CSS
issue** — it's very likely a later `!important` override winning, not a
missing rule.

## Fixed this session (beyond the mapping table above)

- **Hero decluttered.** Removed the "Centralise student records..."
  paragraph entirely. Restructured into `.hero-top` (eyebrow/H1/rotator) and
  `.hero-bottom` (CTA buttons, then the "Admin dashboard first..." tagline
  directly under them) with `.hero-copy` as a flex column and
  `margin-top:auto` on `.hero-bottom` — pushes the CTA/tagline group toward
  the bottom of the card instead of everything stacking from the top. H1
  size fix (above) also applied here.
- **Rotating phrase line recolored.** Was using the same orange→lavender
  gradient as the H1 — didn't read as a distinct element. Changed to a solid
  lightened tint of `--purple` (`#b8aeff`) — raw `--purple` tested low
  contrast directly on navy, same risk class as the earlier gradient bug, so
  a tint was used instead of the literal token.
- **Sticky footer, actually wired up.** `main{flex:1}` existed but did
  nothing — `body` was never `display:flex`, so `main` was never in a flex
  context. On any page shorter than the viewport (partners, referrals,
  mobile-apps) the footer sat wherever content ended instead of the bottom.
  Fixed with `body{display:flex;flex-direction:column;min-height:100vh}` +
  `main{flex:1;...}` + `.site-footer{margin-top:auto}`.
- **Logo duplication bug.** `BrandLockup` rendered `spinner-logo.png` (a
  *full wordmark* — icon and "cyfamod-sms / school management system" text
  already baked into the image) squeezed into a small square, cropping its
  own text, **while also** rendering separate live HTML text next to it —
  visually a logo repeated behind itself. Fixed by using
  `cyfamod-sms-mark-updated.png` (icon-only, no baked-in text) for the
  header/footer instead; `spinner-logo.png` stays reserved for the loading
  spinner, where it's meant to stand alone.
- **Next.js dev indicator disabled** (`devIndicators: false` in
  `next.config.mjs`) — the floating "N" logo bottom-left was Next's own
  dev-only toolbar, not app code, but was flagged as confusing during
  review so it's off now.
- **Self-inflicted outage, found and fixed**: the sticky-footer fix above
  briefly took every route down (500 on all pages) — an explanatory CSS
  comment contained the literal text `app/*/page.tsx`, and `*/` inside a
  `/* comment */` closes it early, so everything after got parsed as raw
  (invalid) CSS. Fixed by rewording the comment; verified all 6 routes
  return 200 before continuing. **Lesson**: never write a literal `*/`
  sequence inside a CSS comment, including accidentally via a glob pattern
  or path with asterisks.

## v2 — refined (not started, logged for later)

New sections identified from a closer HiStudy walkthrough, deliberately not
started alongside Phases 1-3 — bigger scope than a styling pass, each needs
its own real content/decision first. Source of truth for reused copy/structure
is the **existing old landing repo**
(`/Users/wambuiwahome/Documents/dev/cyfamod-tech/school-mgt-system/landing`),
not invented copy — but see the open conflict noted below before reusing any
of it directly.

- **Testimonials ("A few words from our clients").** HiStudy pattern:
  animated testimonial cards with photo, name, role, quote, rating. The old
  landing already has a real testimonial section with named people (Dr.
  Adebayo Oluwaseun – Principal, Emeka Nwosu – Mathematics Teacher, Mrs.
  Ngozi Adekunle – Principal, Chidi Okafor – Open Source Contributor).
  ⚠️ **Needs confirmation**: are these real quotes from real users of the
  *current* Cyfamod SMS product, or leftover from the old open-source
  project's positioning? If the latter, need fresh testimonials before this
  section can ship.
  **Photos are ready** — 10 generated portraits (admins, parents, teachers,
  students; 1254×1254px, real people-style, matches the prompt template
  agreed 2026-08-17) live at
  `notes/ideas for landing/admins, parents, teachers students/`. Well above
  the 800×800 minimum, square crop already correct.
- **FAQ ("Check out our FAQ section to see if we can help").** HiStudy
  pattern: accordion, dark section, with a small decorative cluster of
  overlapping circular avatar photos above the heading
  (`splash/icons/group-image.png` in the HiStudy source — a handful of
  headshots stacked with overlap, not a big banner image). Use a few of the
  10 real photos above for that cluster.

  The old landing's FAQ content (open-source/MIT license, PHP/Laravel/MySQL
  stack, Discord community, fork-and-PR contribution flow) **does not match
  the current product** — Cyfamod SMS is a hosted SaaS with Play Store apps
  and a partner referral program, not open-source/self-hosted. Drafted fresh
  Q&A for the real product instead (agreed 2026-08-17):

  1. **What is Cyfamod SMS?** A school management system built for Nigerian
     schools — one admin dashboard for administration, attendance, results,
     reports, and CBT, connected to dedicated staff and student mobile apps
     so the same information reaches everyone who needs it.
  2. **Do I need to install anything, or is it web-based?** The admin
     platform runs from a browser — no installation needed. Staff and
     students each have a dedicated mobile app, available on Google Play.
  3. **What can a school administrator actually do with it?** Everything —
     manage every team, every record, every workflow: student and staff
     records, attendance, results and report generation, CBT setup, and
     full visibility across the school.
  4. **Does it support Computer-Based Testing (CBT)?** Yes — CBT and
     Continuous Assessment Tests are both supported, alongside traditional
     score entry and grading.
  5. **Can I become a referral partner or corporate marketer?** Yes — two
     tracks: referral agents who share a code/link, and corporate marketers
     who run the full outreach-to-conversion process.
  6. **How do I get started?** Book a product demo — a guided walkthrough of
     the admin dashboard, staff app, and student app together.

  ⚠️ **Not written yet — need real answers, not invented ones**: pricing
  model, data/security specifics, real support hours and channels, whether
  multiple school branches can share one account. Decide whether the FAQ
  ships with just 1-6 for now and grows later, or waits for all 10.
- **Splash-service triplet.** HiStudy's 3-card CTA block (Documentation /
  Support / Hire a developer) needs adapting to Cyfamod's real equivalents —
  likely Developer/API section, Careers page, and Support (the "big" one,
  should read as the primary contact CTA per the request). **Dependency**:
  neither a `/developers` nor a `/careers` route exists yet in this repo —
  those need to be real pages before this section can link to them, not
  placeholder anchors.
- **WhatsApp floating icon + scroll-to-top button.** HiStudy has a circular
  scroll-progress "back to top" button (SVG progress ring) — straightforward
  to port as a fixed-position component. WhatsApp icon needs a real business
  WhatsApp number/link before it can go live.
- **Light/dark mode toggle.** HiStudy ships a theme switcher. Current site is
  dark-only (navy) by design — this is a real architecture change (needs a
  light palette derived from the existing tokens, a toggle component, and
  persisted preference), not a small addition. Biggest item in this list.

## A trap worth knowing about before touching the old landing repo

There's a **second, older repo** at
`/Users/wambuiwahome/Documents/dev/cyfamod-tech/school-mgt-system/landing` — the
original scaffold before this Next.js rebuild. It has real, usable content
structure (testimonials, FAQ, documentation/community links) worth reusing — but
its actual content describes a **different product**: "100% open-source under MIT
license," self-hosted PHP/Laravel/MySQL, Discord community, fork-and-PR
contribution flow. The current product (this repo) is the opposite: a hosted SaaS
with Play Store staff/student apps and a partner referral program, nothing
open-source about it. **Reuse the old repo's structure and section ideas freely.
Never reuse its actual claims/copy without checking they're still true for the
current product first** — this exact mistake almost made it into the FAQ section
below.

## Workflow conventions used throughout this roadmap (keep following these)

- Branch off `dev`, one phase (or sub-piece of a phase) per branch/PR — not one
  giant redesign PR.
- **Run `pnpm dev` and actually look at `localhost:3000` before every commit**,
  not just before opening the PR — several real bugs (broken gradient contrast,
  illegible icon, cards invisible against their own background) were only caught
  this way, not by reading the code.
- Fill in the real PR template (`.github/*` or whatever this repo uses) with an
  actual description — don't leave it as unfilled placeholder text.
- Conventional commits (`feat:`, `fix:`, `chore:`) on every commit subject line.
- `v1-before-histudy` is a checkpoint branch pointing at the last commit before
  any of this redesign work started (`be6d435`) — pushed to the remote. Use it as
  a known-good rollback point, or to run a second dev server (e.g. on port 3001)
  side by side with the in-progress branch for direct before/after comparison.
- This file (`ROADMAP.md`) is intentionally **not committed to git** — it's kept
  local per instruction. Whoever continues this needs to be handed the file
  directly (or it needs to be committed at some point — that's a decision for
  whoever owns this next, not made unilaterally here).

## Out of scope

- Rebuilding the page from scratch — this is a styling pass on existing, finished
  content, not a content rewrite
- Copying any HiStudy content, copy, or imagery directly — patterns only
- Any change to the actual product/dashboard screenshots or Play Store evidence images

## Status

**In progress.** Phase 1 and Phase 2 merged to `dev` (PRs #5, #6). Phase 3 is
mid-implementation on local branch `feat/scroll-reveal-and-hover` — not yet opened
as a PR, dev server running on `localhost:3000` for review, all 6 routes verified
returning 200. Phases 4-6 and all of v2 are not started. Nothing in this round of
work has been committed yet — see "Fixed this session" and "Recurring bug pattern"
above for everything that landed since Phase 3 was first opened, still pending one
commit + PR. Last updated 2026-08-17.
Last updated 2026-08-17.
