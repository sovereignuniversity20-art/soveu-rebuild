# SoveU — Site Rebuild

Rebuild of sovereignuniv.com (currently on Wix) as a self-hosted, edtech-positioned
membership site. Full scope, build order, and open decisions are tracked in the
project plan doc (claude.ai Project: "SoveU Site Rebuild").

## Status

**Step 1 of 9 (v1 build order): scaffold & deploy pipeline.** This commit is a
placeholder page whose only job is proving Vite → GitHub Actions → GitHub Pages
works end to end. Real homepage content lands in step 2.

## Stack

- **Frontend:** React 19 + Vite, Tailwind CSS v4, Framer Motion for content-level motion
- **Hosting:** GitHub Pages (custom domain TBD — see `vite.config.js` base path note)
- **Backend (coming in step 4):** Supabase (Postgres + Auth + Storage), dedicated project for SoveU
- **Payments (coming in step 5):** Stripe

v1 ships with ordinary navigation. A literal "walk through rooms" campus
navigation (react-three-fiber) is a planned v2, deliberately decoupled so this
doesn't block getting off Wix. See the project plan for the full reasoning and
the Three.js/R3F learning path.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages automatically. No manual deploy step.

Once a custom domain is chosen, update `vite.config.js`'s `base` to `'/'` and add
a `public/CNAME` file with the domain name.
