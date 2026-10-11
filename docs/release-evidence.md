# Actuate release evidence

Verified 2026-10-11 (Asia/Manila). The redesign is deployed and verified on production.

## Confirmed destination

- Repository: `Third-Code-Solutions/actuate`, GitHub repository ID `1244836118`.
- Vercel team: `pavi-2e9809a4`, ID `team_n60dl3ccO8BFGFeUKQdqPhp3`.
- Existing Vercel project: `actuate`, ID `prj_mEalb5fBQx1MLuD5NGZYmsNG2i52`.
- Production aliases returned by Vercel: `actuate-beta.vercel.app`, `actuate-pavi-2e9809a4.vercel.app`, `actuate-git-main-pavi-2e9809a4.vercel.app`.
- Existing production deployment: `dpl_Cji29K968K1zE8srDZwUFTn5m7GL`, state `READY`, commit `c6dcfb3fbb893033a0f9317df8c41ae2fe097f2d`.

The ignored local `abi-website/.vercel/project.json` previously pointed to another project named `abi-website` in another team. It was corrected to the exact project and team above, then read back and compared. Remote project settings were not changed.

## Git connection and access

Vercel's `get_git_deployment_context` reports the historical name `kurtgav/actuate`. Crucially, `list_projects` filtered by repository ID `1244836118` returns the existing `actuate` project. The stable repository ID still matches after the repository transfer; no disconnect or reconnect is indicated.

The active GitHub CLI account `naaxtech-mila` has read access only. The already authenticated `kurtgav` account has `admin`, `maintain`, and `push` access. The GitHub connector also identifies as `kurtgav`. Use the existing `kurtgav` credential in a subprocess environment for release commands rather than changing the global active account; never print the credential.

Read-only GitHub checks as `kurtgav`:

- `GET /repos/Third-Code-Solutions/actuate/rules/branches/main`: `[]`.
- `GET /repos/Third-Code-Solutions/actuate/rulesets`: `[]`.
- `GET /repos/Third-Code-Solutions/actuate/branches/main/protection`: HTTP 404.
- Actions workflows list: empty.

These observations establish no configured branch rules or Actions workflow at inspection time. Build, lint, browser verification, and review remain release checks for this task.

## Build and protection

Vercel reports framework `vite` and Node `24.x`. The previous deployment's build log runs `npm run build`, identifies `abi-website@0.0.0`, executes `vite build`, and emits `dist/index.html` plus assets. That deployed commit contains only `abi-website/package.json`, with no root package or `vercel.json`.

The effective app directory is therefore strongly inferred as `abi-website`; the build command and output are observed in build logs. Exact current `rootDirectory`, `buildCommand`, and `outputDirectory` project fields are not exposed by the connector's abbreviated responses. A direct read through the existing Vercel CLI credential returned HTTP 403, `Not authorized`. The temporary dashboard tab required login and was closed.

Existing deployment protection: SSO enabled for `all_except_custom_domains`; password and trusted-IP protections disabled. No protection settings were changed. Protected preview verification must use an authorized session or Vercel's supported temporary sharing/fetch capability.

## Release path

1. Complete and review the local change; run the app's build, lint, and browser checks.
2. Commit and push the release branch using the existing `kurtgav` authentication. Verify the remote SHA.
3. Inspect automatic deployments for that SHA. If none exists, call `create_deployment` with the explicit existing project and team, and Git source repository ID `1244836118`, release branch, and verified SHA. Use preview target. Do not create another project.
4. Inspect state and build logs. Verify the rendered preview and interactive behavior, including mobile layout. A `READY` state alone is insufficient.
5. Complete the authorized production release after checks pass. The `request_promote` tool can promote the verified deployment without rebuilding; inspect aliases and production behavior afterward. If production environment values differ, create a production build instead and verify it.
6. Record final commit, preview and production deployment IDs/URLs, check results, and remaining limitations below.

## Final release results

- Implementation branch: `codex/actuate-reference-redesign`.
- Implementation commit: `b4d8347185527f06aee33a0c522b01b6da201897`.
- PR: https://github.com/Third-Code-Solutions/actuate/pull/1 — merged.
- Production source: `d3cd0e21252115f6ae5368e0e9affb10eca6e20b` on `main`. Application tree identical to verified preview commit.
- Preview: https://actuate-efzhvd1gn-pavi-2e9809a4.vercel.app — `dpl_6pSXHq732nemhyemWwDPn25rh5GP`, `READY`. Verified using supported temporary Vercel share access; protection unchanged.
- Production: https://actuate-beta.vercel.app — `dpl_5ikbfeKWtCE9Jzk6CEGjGU3783XZ`, `READY`, production target, aliases assigned with no alias error.
- Immutable production deployment: https://actuate-dhg5cqome-pavi-2e9809a4.vercel.app.
- Explicit existing-project settings applied: root `abi-website`, build `npm run build`, output `dist`, framework `vite`. Hosted build logs confirm clone of `Third-Code-Solutions/actuate` at the expected SHA and successful Vite output.
- Git push did not produce an automatic deployment during observation. Both verified releases were created through the existing Vercel project's Git deployment API. Future webhook-driven automatic deployment was not established; repository clone/source association was verified.

### Verification

- `npm ci`, `npm run lint`, `npm run build`: passed.
- Local browser suite: 10/10 passed.
- Hosted preview: desktop test passed; a network interruption caused `ERR_INTERNET_DISCONNECTED` in remaining checks. Connectivity was re-established and affected route independently rendered correctly. All nine failed checks passed on rerun without assertion changes.
- Public production: 10/10 tests passed in 56.2 seconds, without authentication cookies.
- All 23 canonical pages loaded directly at 1440, 768, and 390px: one h1, page title, no horizontal overflow, all images loaded with alt attributes, no runtime page errors.
- Verified browser back/forward, refresh, aliases, section links, all six service tabs and keyboard navigation, mobile menu/Escape/focus/scroll restoration, project gallery arrows/Escape/focus, reduced motion, and email draft validation/encoding.
- Contact tests used `test@example.com`; no email app was launched and no inquiry sent. No non-GET request occurred during draft preparation.
- Automated WCAG A/AA (WCAG 2 + 2.1 tags) passed on Home, service detail, project detail, Contact, and article detail. This is automated coverage, not a claim of full accessibility certification.
- Production JS/CSS, Etiqa hero WebP, and favicon bytes match local build. Direct service and project routes return 200 HTML.
- Code review: hash/Home navigation and mobile scroll-lock bugs fixed and regression tested; no remaining P1/P2 findings.
- Production dependency audit: zero reported vulnerabilities. Existing development dependency audit reports eight findings; no runtime packages affected.
- Reference clone remains clean; no reference source changes.

### Screenshots and remaining limitations

Local screenshots are preserved under `.playwright-mcp/release/`: `production-desktop.png`, `production-mobile.png`, and corresponding `-full.png` full-page captures; preview full-page captures also retained.

No deployment blockers remain. Contact is intentionally an explicit email handoff because no backend integration is configured. Hero uses verified Etiqa photography; no usable genuine video was accessible. Media provenance is in `docs/content-sources.md` and `public/media/manifest.json`.
