# Travel Site Template

This project is a reusable bilingual travel agency landing-site template.

## Fast Workflow

1. Edit `src/siteConfig.js`.
2. Replace text in `siteConfig.content.en` and `siteConfig.content.zh`.
3. Replace contact values in `siteConfig.contact`.
4. Replace image files in `public/assets`.
5. Run:

```bash
npm run build
git add src/siteConfig.js public/assets
git commit -m "Create <destination> travel site"
git push
```

GitHub Actions will deploy the site automatically after push.

## What Usually Changes

- `contact`: WhatsApp, email, phone, address.
- `media.hero`: the hero image key.
- `content.en.meta` and `content.zh.meta`: brand, tagline, language switch label.
- `nav`: top navigation labels.
- `hero`: headline, supporting copy, CTA labels, statistics.
- `categories`: six product cards with title, body, and image key.
- `about`: long SEO-style destination introduction.
- `services`: service panel bullet points.
- `destinations`: featured places.
- `process`: inquiry and trip planning steps.
- `inquiry`: CTA and form copy.
- `footer`: footer labels and newsletter text.

## Image Naming Convention

Keep image names stable when possible:

- `hero-<destination>-travel.png`
- `destination-nature.png`
- `destination-signature.png`
- `destination-leisure.png`
- `destination-culture.png`
- `destination-business.png`

For the current Gabon site, the image names are:

- `hero-gabon-travel.png`
- `destination-rainforest.png`
- `destination-wildlife.png`
- `destination-coast.png`
- `destination-culture.png`

## Quick Prompt For A New Destination

Use this short request:

```text
Use the travel-site template in /Users/terry/Documents/web_learn to create a bilingual travel agency site for <destination>. Keep the layout and style system, update only src/siteConfig.js and public/assets, generate image2 assets, run npm run build, commit, push, and wait for GitHub Pages deployment.
```

## Yunnan Starter Direction

For a Yunnan travel site, use this positioning:

- Brand: Yunnan Travel / 云南旅行
- Product focus: custom China domestic travel, private routes, family trips, photography trips, culture and nature routes.
- Key places: Kunming, Dali, Lijiang, Shangri-La, Xishuangbanna, Yuanyang Rice Terraces.
- Experience cards: Classic Yunnan Routes, Dali & Lijiang, Shangri-La Highlands, Xishuangbanna Rainforest, Culture & Food Tours, Private Custom Trips.
- Visual mood: snow mountains, old towns, lakes, rice terraces, tropical rainforest, warm highland light.
