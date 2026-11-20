# Graverse

Understanding Communities in Graph-Structured Systems

Graverse is a research lab focusing on community detection in complex networks, integrating graph theory with modern AI methods.

## Research Focus
- Community Detection
- Overlapping Communities
- Temporal Networks
- Graph Representation Learning

## Website
https://beta.graverse.org (beta; the site is marked `noindex` until it moves to its final domain)

## Development
```bash
npm install
npm run dev        # local dev server
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run build       # static export -> out/
```

To enable the contact form, copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` to a Formspree form endpoint.

## Deployment
Pushing to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The repository's **Settings → Pages → Source**
must be set to "GitHub Actions" for this to take effect. The custom domain is
served from `public/CNAME`.

## License
The source code is MIT-licensed (see `LICENSE`). Research content —
publications, posters, and brand assets — is not covered by that license and
remains the property of its respective authors.
