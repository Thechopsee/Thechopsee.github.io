# Thechopsee.github.io

Czech event organization website built with SvelteKit, featuring registration, results, gallery, and event proposals.

## Features

- **Registration system** - User registration with EmailJS integration
- **Results archive** - Event results from 2015-2025
- **Gallery** - Photo galleries from past events
- **Event proposals** - Downloadable event documents (propozice)
- **Responsive design** - Mobile-friendly with dedicated mobile logo
- **Static deployment** - Hosted on GitHub Pages

## Tech Stack

- **SvelteKit** - Web framework
- **Svelte 5** - UI framework
- **Vite** - Build tool
- **EmailJS** - Email service for registration
- **@sveltejs/adapter-static** - Static site generation for GitHub Pages

## Development

Install dependencies:

```sh
npm install
```

Start development server:

```sh
npm run dev

# or open in new browser tab
npm run dev -- --open
```

## Building

Create production build:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Deployment

Deploy to GitHub Pages:

```sh
npm run deploy
```

This runs the `deploy-gh-pages.cjs` script which builds the site and pushes to the `gh-pages` branch.

## Project Structure

```
src/
├── routes/          # SvelteKit routes
│   ├── (app)/      # Main app routes
│   └── registrace/ # Registration page
├── lib/            # Shared components and utilities
└── app.css         # Global styles

static/
├── galerie/        # Photo galleries
├── vysledky/       # Event results
├── propozice/      # Event proposals
└── logos/          # Logo assets
```
