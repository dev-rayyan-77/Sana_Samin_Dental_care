# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for **Sana Samin Dental Care**, a dental clinic in DHA Phase 1 Lahore, Pakistan. No build system, no package manager — open files directly in a browser or serve with any static file server.

To preview locally:
```bash
# Any of these work:
npx serve .
python3 -m http.server 8080
# Or open index.html directly in a browser
```

## Architecture

This is a **multi-page static site** with 50+ top-level page folders (one per treatment/procedure/info page, e.g. `Bad-Breath/`, `Crowns/`, `Dental-Anxiety/`, `Meet-dr-naauman/`) plus `images/` for all shared media. Each page folder co-locates its HTML, a local CSS file, and (only sometimes) a local JS file — most treatment pages have **no dedicated JS** and rely entirely on `script.js`'s generic class-based selectors (`.headers-heading`, `.floating-text`, etc., see GSAP section below) for their scroll animations. Folders with their own JS: `About-us`, `All-Problems-We-Treat`, `Bad-Breath`, `Bonding-and-White-Filling`, `Full-Mouth-Reconstuction`, `Meet-dr-naauman`, `Meet-dr-uzair`, `Root-Canal`, `feedback`.

`Blog/` is a nesting exception: it has its own `blog.html`/`blog.css` at `Blog/`, and each article lives one level deeper (`Blog/Article-Name/article.html`), so those pages reach the root with `./../../style.css` and `./../../script.js` instead of the usual `./../`.

**CSS is cascaded, not just local-scoped**: a page's `<head>` typically links the root `style.css`, then several *other* pages' CSS files it borrows section styles from, then its own local CSS last (e.g. `Dental-Anxiety/dental-anxiety.html` links `style.css`, `About-us/about.css`, `New-Patients/new-patients.css`, then `dental-anxiety.css`). When editing shared-looking sections, check which upstream CSS files a page actually imports before assuming a class is defined locally.

## External Dependencies (all via CDN, no local install)

| Library | Version | Purpose |
|---|---|---|
| Bootstrap | 5.3.3 | Layout grid, modals, utility classes |
| GSAP + ScrollTrigger | 3.12.5 | Scroll-driven animations |
| Swiper | 11 | Image/review carousels |
| Font Awesome | 6.7.2 | Icons |
| Work Sans | — | Google Fonts, primary typeface |

## Key Patterns

**Navbar:** Fixed, transparent by default; turns opaque (`scrolled` class) when `window.scrollY > 200` via the scroll handler in `script.js:1-8`.

**Mobile nav:** Uses a native `<dialog>` element, toggled by the `.bars` hamburger button. Close button has `id="crossmark"`. See `script.js:47-60`.

**Swiper carousel:** Initialized in `script.js:11-38`. Responsive breakpoints: 1 slide (mobile) → 2 slides (≥768px) → 3 slides (≥1024px).

**GSAP animations:** Each page that needs animations registers `ScrollTrigger` in its own JS file. The home page animations are all in `script.js`. Sub-pages with animations have their own JS (e.g., `about.js`, `Problems.js`).

**Brand color:** `#56ee30` (bright green) is used for CTAs and accent elements.

**Canonical tags are frequently wrong:** most page folders were scaffolded by copying an existing page, and 32+ pages still carry a leftover `<link rel="canonical" href="https://sanasamindentalcare.com/cleanings-and-exams/cleanings-exams.html" />` (or another donor page's URL) instead of their own. When touching a page's `<head>`, fix its canonical tag to match its real URL rather than propagating the copied value.

## Adding a New Page

1. Create a folder `Page-name/` with `page.html`, `page.css`, and optionally `page.js`.
2. In the HTML `<head>`, link the shared root stylesheet first: `<link href="./../style.css">`, then the local CSS.
3. Copy the navbar and footer markup from an existing page (e.g., `About-us/about.html`) to maintain consistency.
4. Add GSAP scripts at the bottom of `<body>` if animations are needed, after including the CDN scripts.
