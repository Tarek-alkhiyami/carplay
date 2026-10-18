The authoritative catalog, gallery arrays, and UI are in root index.html.
After ANY price, stock, gallery, product, service, or UI change to index.html, run `node scripts/build-seo.cjs . .` and include the regenerated product pages, assets, sitemap.xml, robots.txt, and index.html in the same deployment. Never deploy an index-only catalog update: that leaves search pages stale.
Keep the Google Search Console verification meta tag. Preserve sold statuses and mixed availability arrays.
The build manifest is local bookkeeping and need not be committed. Product pages use real /products/.../ paths; retain legacy #product links.
