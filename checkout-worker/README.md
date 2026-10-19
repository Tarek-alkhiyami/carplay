# Pickup Checkout

Pickup only: 460 Dundas St E, Waterdown, ON L8B 2A5; 905-638-2020. CAD prices plus exclusive manual 13% HST. No shipping or automatic Stripe Tax.

Deploy with Wrangler using wrangler.jsonc for production or wrangler.test.json for the isolated sandbox. Store STRIPE_SECRET_KEY as an encrypted Cloudflare secret, never in source. Restricted keys require Checkout Sessions Write and Tax Rates Write. Production accepts live keys only, sandbox accepts test keys only. PAYMENTS_ENABLED is an emergency switch.

The site generator scripts/build-seo.cjs emits checkout-catalog.json from index.html. Always regenerate and publish all site output after catalog changes. Prices and stock are checked server-side. Orders are serialized in a Durable Object; Stripe requests reuse an idempotency key. Pending failures reserve stock conservatively. Sessions expire after approximately 32 minutes; stock is released only after Stripe confirms expiration. Each client IP is limited to 30 requests per minute.

Paid inventory remains locked across duplicate vehicle fitments. Storefront inventory is not automatically updated; mark sold inventory in the source catalog and regenerate after sales. Do not delete paid Durable Object records to restock. A separate authenticated reconciliation process is required for refunds/restocking. Unresolved pending creation failures may require manual reconciliation. No webhook fulfillment is configured: verify paid orders in Stripe Dashboard before handing over items. A browser redirect alone is never proof of payment.

Validate using node --test worker.test.mjs. Sandbox payment, 13% totals, idempotent retry, shared-stock locking, expired reservation recovery, origin restriction, key isolation and rate limiting have been checked. Never use a real card for automated testing.
