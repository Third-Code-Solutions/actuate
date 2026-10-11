# Agent lessons

## Verify deployment identity after repository transfer
- Trigger: local Vercel link named `abi-website` while the requested project is `actuate`.
- Root cause: stale ignored `.vercel/project.json` referred to another team/project.
- Verified remedy: compare remote project/team IDs, then replace only the local link. Verify Git association by stable numeric repository ID, which survives transfer.
- Prevention: inspect project ID, team ID, repository ID, app root, and aliases before deploy.
- Scope/evidence: Actuate; `docs/release-evidence.md` and local `abi-website/.vercel/project.json`.

## Run application scripts from the actual app root
- Trigger: repeated root-level npm command failed with ENOENT for a package.json outside `abi-website/`.
- Root cause: repository root has no package manifest; npm searched ancestors.
- Verified remedy: `npm --prefix /Users/hoon/Actuate/abi-website run lint` and `npm --prefix /Users/hoon/Actuate/abi-website run build` pass.
- Prevention: use explicit app working directory or npm prefix for every check.
- Scope: this nested Vite application.

## Tie dialog scroll lock to open DOM state
- Trigger: code review found an asynchronous close event could be lost when routing unmounts navigation.
- Root cause: inline body overflow was cleared only by the close event.
- Remedy: CSS `body:has(dialog[open])` derives scroll lock directly; regression test covers close, Escape, route navigation and restored scrolling.
- Scope/evidence: `src/components/Nav.jsx`, `src/styles/global.css`, `tests/site.spec.js`.
