# Actuate Builders website

React 19, Vite, JSX, and CSS. The redesign adapts the owner's construction-website reference while retaining Actuate branding and verified content.

## Local development

From `abi-website/`, run `npm ci`, then `npm run dev`.

Validation: `npm run lint`, `npm run build`, then `npm run preview -- --port 5173` and `npm run test:e2e` in a separate terminal. Browser tests use installed Google Chrome. Set `BASE_URL` to test another environment. Tests never send an enquiry.

## Content and routing

- `src/data/content.js`: verified company, service, project, and article content.
- `public/media/manifest.json`: optimized photograph provenance.
- `src/styles/tokens.css`: brand colors and shared tokens.
- `src/styles/global.css`: shared responsive layout and component styling.
- `src/App.jsx` and `src/router.js`: shareable paths, browser history, metadata, aliases, and not-found screen.
- `vercel.json`: Vite build settings and SPA route rewrites.

The contact form prepares a client-side email draft. It does not send, queue, persist, or submit messages. The user explicitly opens their email client and sends there. No form backend is configured.

The hero uses actual Etiqa office photography. No verified usable company video was accessible; see `../docs/content-sources.md`.

## Deployment

Use the existing Vercel project `actuate` in team `pavi-2e9809a4`, application root `abi-website`, build `npm run build`, output `dist`. Do not create a duplicate project. See `../docs/release-evidence.md` for identifiers, repository transfer verification, release evidence, and limitations.
