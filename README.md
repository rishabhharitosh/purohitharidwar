# Purohit Haridwar — purohitharidwar.com

Static website (no build step / no framework) for a Tirth Purohit service in Haridwar.

## Pages
- `index.html` — Home
- `pind-daan.html` — Pind Daan
- `asthi-visarjan.html` — Asthi Visarjan
- `ganga-aarti.html` — Ganga Aarti
- `mundan-sanskaar.html` — Mundan Sanskar
- `anya-pooja.html` — Anya Pooja evam Sanskar (Rudrabhishek, Griha Pravesh, Satyanarayan Katha, Navgrah Shanti, etc.)

## Structure
- `assets/css/style.css` — single shared stylesheet (design tokens, layout, components)
- `assets/js/main.js` — shared JS: mobile nav toggle, active-link highlighting, generic WhatsApp booking form handler
- `images/` — optimized JPGs used across pages
- `favicon.svg` — site icon
- `sitemap.xml`, `robots.txt` — SEO
- `CNAME` — GitHub Pages custom domain

## SEO
Every page has a unique title/meta description, canonical tag, Open Graph tags, and JSON-LD (`BreadcrumbList` + `FAQPage`; the homepage also carries `LocalBusiness`). FAQ content visible on the page always matches the FAQPage schema.

## Booking
Every booking form has `data-wa-form data-service="..."` on the `<form>` and `data-wa-field="Label"` on each input. `assets/js/main.js` reads these automatically and opens a pre-filled WhatsApp chat — no per-page JS needed.

## Contact number
Update the phone number by replacing `918679636172` (WhatsApp) / `+918679636172` (tel:) across the HTML files.
