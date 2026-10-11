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

## Bold typography and responsive polish — 2026-10-11
- User correction: remove cursive/italic styling everywhere; use aggressive typography and polish every page at mobile through desktop sizes.
- Replaced Playfair with locally served Barlow Condensed 700/800 and DM Sans; retained font licenses. Upright uppercase display headings, stronger controls, readable body/forms/footer, responsive spacing.
- Hero uses normal flow with reserved project-label space; short landscape menu scrolls. Small-screen cards, process steps, forms and article titles adapt to available width.
- Local lint/build and 14 browser tests pass: all 23 routes at 320, 390, 768, 1024, 1440, 1920px; no overflow, italic text or runtime errors; media, core flows, landscape and five-page automated accessibility checks pass.
- Current branch: codex/actuate-bold-responsive-polish. Independent review approved; preview and public production each passed the complete 14-test suite. PR #2 merged; production source bbdd941. No remaining blocker.

## Consistent page margins — 2026-10-11
- Shared responsive outer margins now cover header, hero labels, sections, CTA, articles, privacy and footer. Removed independent mobile gutter overrides.
- Local lint/build and 14 browser tests passed, including exact margin alignment on 23 pages at six widths. Independent review approved.
- Branch codex/actuate-consistent-margins; PR #3 merged. Preview and public production each passed 14/14 browser tests, including every-page margin checks. Production source 9c25a97.

## Restore pill navbar — 2026-10-11
- Restored original rounded navbar, active links and header CTA with original spacing.
- Local lint/build and three navigation/landscape tests pass. Browser header checks pass at seven widths, 320–1920px. Review approved.
- PR #4 merged; preview and production READY. Three targeted navigation tests pass locally, on preview and on public production. Production source bb12642.
