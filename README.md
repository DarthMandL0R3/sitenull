# Abrar Khalish — Portfolio

Personal website built with [Hugo](https://gohugo.io) and deployed to [Cloudflare Pages](https://pages.cloudflare.com).

**Live site:** [abrarkhalish.com](https://abrarkhalish.com)

## Tech

- [Hugo Extended](https://gohugo.io) — static site generator
- Cloudflare Pages — hosting + CDN
- Custom CSS — no framework, no build tools

## Local development

```bash
hugo server
```

Open [http://localhost:1313](http://localhost:1313).

## Production build

```bash
hugo --minify
```

Output goes to `public/`.

## Deployment

Connected to Cloudflare Pages via GitHub. Push to `main` to trigger a deploy.

See [Cloudflare Pages Deployment](./docs/deploy.md) for full instructions.

## Project structure

```
├── content/          # Markdown pages
├── layouts/          # HTML templates
├── static/           # CSS, images, icons
├── hugo.yaml         # Site config
└── wrangler.jsonc    # Cloudflare Pages config
```
