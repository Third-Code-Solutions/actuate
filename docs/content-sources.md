# ABI content and media sources

Verified 11 October 2026. Content is based on ABI's own published pages, not independent certification of performance. All redesigned content lives in `abi-website/src/data/content.js`; the legacy modules remain historical source files and must not be rendered by the redesigned app.

## Company and contact

- https://abi-ph.com/ — company operating since 2010; design-build, general construction, and office fit-out.
- https://abi-ph.com/about-us/ — founding and expansion history, stated values (Agile, Bold, Innovative), published service scope and company credentials.
- https://abi-ph.com/contact-us/ — phone **02 8815 4837**, quotation email **requestforquotation@abi-ph.com**, supplier email **suppliers@abi-ph.com**, careers email **careers@abi-ph.com**, C2 Building address. Taguig/Philippines added as geographic context for Bonifacio High Street.
- https://abi-ph.com/careers/ redirects to https://abi-ph.uknowva.cloud/job-portal/ — use the official live portal instead of invented vacancies, compensation, or benefits. No application is submitted by this redesign.

## Services

Each service record links to its supporting primary source. Copy is a concise editorial summary; audience-facing taglines are descriptive, not quantified claims.

- Structural and civil: https://abi-ph.com/service/structural-civil-works/
- Fit-out: https://abi-ph.com/service/fit-out-solutions/
- Property technology: https://abi-ph.com/service/property-tech/
- Joineries: https://abi-ph.com/service/joineries/
- Smart Spaces: https://abi-ph.com/service/abi-smart-spaces-opex-model-solution/
- Consulting: https://abi-ph.com/service/consulting/

Service-page photographs illustrate ABI's completed work. They are not presented as separate examples of structural construction, technology installations, or workshop activities. Generic service images from the old site that appeared to depict stock photography were not reused. Consulting accurately describes Philippine business setup/BPO/shared-services support. Smart Spaces does not invent prices, contract terms, guaranteed energy savings, or a location inventory.

## Projects

### Alternergy

https://abi-ph.com/project/alternergy/

Published project: **Alternergy Office Expansion Fit Out**, Unit 3A, 111 Paseo de Roxas Building, Makati City, January–May 2024. Copy summarizes the office expansion, restricted work hours, furniture lead times, electrical supply issue, building coordination, and locally sourced accents. No invented floor area or testimonial.

### Etiqa

https://abi-ph.com/project/etiqa/

Published project: **ETIQA Office Fit Out**, floors 10–13, 107 Aguirre Building, Makati City, January–June 2024. Copy summarizes multi-floor consolidation, work-window constraints, budget/material decisions, and a phased relocation strategy. The homepage hero is an actual photograph on this project page, not a photograph inferred from its filename.

### AFNI

https://abi-ph.com/project/afni/

Published project: **AFNI Office Fit Out**, ground and floors 6–9, The Core 2, SM Santa Rosa, Laguna, September 2023–January 2025. ABI reports a 75-day operational handover target per floor and reports that it met this target. The copy explicitly attributes this outcome to the published case study.

Project pages contained unrelated external links embedded in paragraphs. Those links and their anchor text were excluded. No external instructions or content from those domains were followed.

## Articles

Six current articles are represented with their exact published titles, dates, and category (Construction Basics). Detail pages contain original concise editorial summaries, not full reproduced articles; `source` links point to the original reading.

- 10 July 2026: https://abi-ph.com/contractor-in-the-philippines/
- 3 July 2026: https://abi-ph.com/construction-company-in-paranaque/
- 26 June 2026: https://abi-ph.com/building-general-contractor/
- 19 June 2026: https://abi-ph.com/structural-engineering-philippines/
- 12 June 2026: https://abi-ph.com/construction-company-in-rizal/
- 5 June 2026: https://abi-ph.com/construction-company-in-las-pinas/

Article cards use authentic ABI project photography as editorial illustrations, rather than generic construction imagery. These photos do not imply those projects are located in each article's city; the image alternative text labels them as editorial illustrations. Preserve that distinction when rendering article images.

## Media provenance

All new photographs come directly from ABI's published case-study galleries. No stock, generated, reference-site, or externally branded project photographs were introduced. Source-to-output mapping, dimensions, and output size are recorded in `abi-website/public/media/manifest.json`. All outputs are WebP, quality 84, maximum 1800px width/1400px height without upscaling. Original framing is preserved; responsive frontend crops are visual presentation only.

| Output | ABI original | Association |
| --- | --- | --- |
| etiqa-workplace.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_9962-Enhanced-NR-1.jpg | Etiqa gallery; hero |
| etiqa-reception.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_9971-Enhanced-NR.jpg | Etiqa gallery |
| etiqa-boardroom.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_9945-Enhanced-NR.jpg | Etiqa gallery |
| alternergy-boardroom.webp | https://abi-ph.com/wp-content/uploads/2024/11/banner-alternergy.jpg | Alternergy case study |
| alternergy-reception.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_2705.jpg | Alternergy case study |
| alternergy-lounge.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_2876.jpg | Alternergy case study |
| alternergy-meeting.webp | https://abi-ph.com/wp-content/uploads/2024/11/MPH-IMG_2987.jpg | Alternergy gallery; optional portrait |
| afni-reception.webp | https://abi-ph.com/wp-content/uploads/2024/11/afni-1.jpg | AFNI case study |
| afni-boardroom.webp | https://abi-ph.com/wp-content/uploads/2024/11/afni-2-1.jpg | AFNI case study |
| afni-breakout.webp | https://abi-ph.com/wp-content/uploads/2024/11/afni-3-1.jpg | AFNI case study |

AFNI boardroom and breakout sources are only 630×393; do not enlarge them into full-viewport hero imagery. Etiqa hero source is 1152×768; use a static image with responsive crop and avoid introducing fake motion footage.

## Video verification boundary

No local MP4, WebM, MOV, or M4V files were present. Checked source HTML for homepage, about, services, all six service detail pages, blog, six article details, and all three case studies; no usable video/embed source was found. Official Facebook and Instagram pages linked by ABI were attempted but returned fetch-throttling failures:

- https://www.facebook.com/p/Actuate-Builders-Inc-61561479088183/
- https://www.instagram.com/lifeatabiph/

Therefore **no verified usable ABI video was available for this build**. This is an access/asset limitation, not proof ABI has never published video. Use the authentic image hero; no stock-video substitute.

## Unsupported legacy claims excluded from new content

- Invented 96% delivery metric and denominators; invented project counts, index numbers, project areas, and sector/location mappings.
- “MPH” and “108 Amari Creatives” treated as client/project names from image filenames. Filenames are not sufficient proof of project identity.
- AFNI mapped to Quezon City and Etiqa-related photography mapped to BGC. Official cases establish Santa Rosa and Makati respectively.
- A 1,200 m² Quezon City joinery workshop and unverified machinery. Current joinery source names a Taytay production team.
- Smart Spaces fixed setup periods, 90-day scaling notice, monthly-subscription terms, zero-CAPEX guarantees, and invented location inventory.
- Unverified recruiting roles, urgency flags, pay/benefit promises, and five-day-workweek claims.
- Invented client quotes, staff identities, or quantified performance guarantees.

No numeric commercial guarantees, license currency verification, or operational outcomes should be inferred beyond these primary-source statements.
