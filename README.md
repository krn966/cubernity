# Cubernity

A fully static, responsive coming-soon website. No framework, installation, build step, external scripts, analytics calls, or runtime dependencies. Open `index.html` directly, or serve this directory with a local static server. CSS, JavaScript, logo, route diagram and product mockup are inline. Supporting legal pages and downloadable brand assets are separate files.

## Customize

- **Launch:** set the single `LAUNCH_DATE` constant at the top of `index.html` to an ISO date with timezone. Blank displays “Launch date to be announced”; future dates display a live countdown; past dates display “We’re live.” Confirm the actual launch before setting a date.
- **Contact:** populate `CONFIG.email`, `phone`, `whatsapp` (international digits only), `discoveryUrl`, `linkedin`, and `x`. Empty destinations remain unlinked and visibly pending.
- **Waitlist:** set `CONFIG.formEndpoint` to an HTTPS endpoint accepting JSON and returning a successful status only after storing the signup. Formspree, a Google Sheets bridge with CORS support, or an owned API can implement this contract. No endpoint means no submission, no personal-data storage and no false success message. The page stays static even with an external form service.
- **Backend duties:** validate and sanitize inputs; enforce rate limits and spam controls server-side; honor consent; restrict access; implement retention and deletion; return errors truthfully. The browser honeypot and 60-second courtesy rate limit are not security boundaries. Failed requests can be retried after one minute.
- **Colors:** edit the `:root` variables and dark-theme overrides in the inline CSS. Core palette: navy `#0B1F3A`, blue `#1E6FFF`, teal `#00C2A8`. Darker teal `#007967` supports legible small text on light surfaces.
- **Logo:** edit the inline `mark` symbol and corresponding SVGs in `assets/`. The standalone wordmarks use editable text; outlined typography is recommended for final brand production.
- **Text:** every page section is labeled with an HTML comment. All feature copy refers to intended product scope; do not change it into delivered claims until verified.
- **Typography:** the page uses Inter when installed, then Avenir/system sans fonts. There is no external font request, keeping the page standalone and avoiding third-party requests. If desired, load licensed/self-hosted Inter or add Google Fonts after updating the privacy notice.
- **Language:** English is active; Hindi is explicitly disabled as coming soon. Add reviewed translations, a dictionary and language-switch handling before enabling another option.
- **Analytics:** disabled by default. `track()` is the integration hook for Plausible; it emits CTA and successful-signup events only with optional-analytics consent and an installed tracker. Do not include personal data. Add consent-aware script loading and withdrawal behavior if enabling a service.

## Before public use

The production origin is configured as `https://cubernity.com/` in the canonical URL, social metadata, structured data, `robots.txt` and `sitemap.xml`. Update these together if the domain changes. Complete the privacy/terms drafts with real operational and legal details before collecting leads. Supply verified contact details. SVG and PNG social cards are included; PNG is referenced for compatibility. No launch date, contact address, customer, certification, testimonial or performance statistic was invented.

## Static hosting

Deploy the website directory contents, with `index.html` at the publish root. No build command is required. Use a hosting plan appropriate for commercial use; free-tier eligibility and quotas vary.

- **Netlify:** use a manual folder upload or connect this repository with its root as the publish directory and no build command. [Official deployment instructions](https://docs.netlify.com/manage/projects/add-new-project/).
- **Vercel:** import the repository, choose the Other framework preset, leave the build command empty and publish the directory containing `index.html`. [Official static build configuration](https://vercel.com/docs/builds/configure-a-build).
- **GitHub Pages:** publish the files on a branch, then choose Settings → Pages → Deploy from a branch → that branch → `/ (root)`. All local asset links are relative for project-site compatibility. Check GitHub Pages usage restrictions before using it for commercial SaaS promotion. [Official Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

`404.html` is included. Verify custom 404 handling on your selected host. `.nojekyll` bypasses Jekyll for GitHub Pages. No public deployment or git commit is performed by this handoff.

## Validation

Browser checks cover 320, 375, 390, 768 and 1440 pixel layouts, theme switching, simulated offline editing/reconnection, FAQ expansion and the honest unconfigured form state. Additional checks cover future/past launch states and mocked endpoint outcomes. These checks are not a measured Lighthouse score or a full WCAG audit. There are no external fonts, frameworks or image downloads on the main page; reduced-motion preference disables decorative animation.

## Three version-2 improvements

1. Connect a production waitlist with double opt-in, abuse prevention and a verified privacy/retention process.
2. Replace the illustrative dashboard with a validated product walkthrough and a real pilot onboarding flow.
3. Add professionally reviewed Hindi translations and region-specific integration/availability information.
