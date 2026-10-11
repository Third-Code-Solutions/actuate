# Actuate reference redesign

## Objective and acceptance
Port the authorized construction-website design to the existing React/Vite app; preserve ABI palette, logo and verified company content. All existing pages plus project/article details must have shareable URLs, history and accessible responsive interactions. Verify lint/build and desktop/tablet/mobile flows, then preview and production on the existing Vercel actuate project.

## Baseline
- Working tree clean; main c6dcfb3, synchronized with origin/main.
- Branch: codex/actuate-reference-redesign.
- Origin corrected to transferred Third-Code-Solutions/actuate repository.
- Reference cloned intact to /tmp/actuate-design-reference.
- No existing project lesson log found.
- Official content reveals legacy invented statistics, project associations and job benefits; replacement uses verified sources.
- Local .vercel points to an unrelated abi-website project. Correct target is actuate / prj_mEalb5fBQx1MLuD5NGZYmsNG2i52 / team_n60dl3ccO8BFGFeUKQdqPhp3.

## Completed locally
- Full shared layout and all existing pages rebuilt; verified service, project and article details added.
- Real routes, aliases, history, section links, metadata, not-found screen, Vercel rewrites.
- Contact prepares a validated email draft; no fake delivery claims or backend.
- Authentic Etiqa hero; 10 optimized local photos and provenance manifest. No usable verified footage available.
- Old components, data, hooks and conflicting CSS removed.
- Lint/build pass; 10 Playwright tests pass, including all 23 canonical pages at 1440/768/390 widths, core interactions and WCAG AA checks on five representative routes.
- Code review found two routing/menu issues; fixed and regression tested. No remaining P1/P2 findings.

## Completed release
- PR #1 merged. Production source d3cd0e2; implementation b4d8347.
- Existing Vercel project preview and production both READY and browser verified.
- Public production suite: 10/10 passed; all 23 pages across three widths.
- Screenshots saved under .playwright-mcp/release/.
- No deployment blocker. Explicit email handoff and authentic image hero are documented limitations.
- See docs/release-evidence.md for exact deployment IDs, evidence, and automatic-deployment observation.
