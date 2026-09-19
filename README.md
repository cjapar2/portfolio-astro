# Alex Rivera — portfolio

A software engineer portfolio built with [Astro](https://astro.build). Dark,
code-flavored theme (a mint/pink/amber palette, monospace accents, a tab-style
nav) but built to actually read comfortably: real headings, generous body
text, and comfortable line lengths for the bio and project descriptions.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:4321`).

To build for production:

```bash
npm run build
npm run preview
```

## Where to put your real content

Everything marked "placeholder" is meant to be replaced:

- **`src/components/Hero.astro`** — name and the intro paragraph.
- **`src/components/About.astro`** — the `skills` array at the top, and the
  two bio paragraphs.
- **`src/components/Projects.astro`** — the `projects` array: name, summary,
  tech stack, link, and status (`live`, `open source`, `in progress`, or any
  label you want — it becomes a pill automatically).
- **`src/components/Contact.astro`** — the `links` array (email, GitHub,
  LinkedIn, etc).
- **`src/layouts/Layout.astro`** — the default page `<title>` and meta
  description.

## Structure

```
src/
  layouts/Layout.astro      shared <head>
  components/
    Nav.astro                sticky "open file tabs" nav
    Hero.astro                name, tagline, and two calls to action
    About.astro                bio + skills as tag pills
    Projects.astro            project cards
    Contact.astro             contact links
    Footer.astro
  pages/index.astro           assembles everything
  styles/global.css           design tokens (color, type, spacing)
```

## Design notes

- Colors, fonts, and spacing are CSS variables at the top of `global.css` —
  change the palette or type scale there and it cascades everywhere.
- Body copy uses Inter at 17–19px with generous line-height for easy reading;
  IBM Plex Mono is reserved for small UI details — nav, eyebrow labels, tags,
  status pills — so it reads as a flavor, not the whole page.
- The `.eyebrow` class gives any heading a small "// label" tag above it, the
  one piece of code-flavor that stays part of the reading flow.
- Respects `prefers-reduced-motion`.
