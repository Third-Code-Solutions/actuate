# Actuate release evidence

Checked 2026-10-11 (Asia/Manila). This records observed state, not a claim that the redesign is deployed.

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

Pending implementation and release verification. The production deployment listed above is the pre-redesign baseline.
