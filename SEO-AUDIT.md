# SEO Content Audit — L&J Landscaping
## https://lj-landscaping.vercel.app/
### Date: 2026-06-28 · Source-level audit (Next.js 16 App Router)

---

## SEO Health Score: 52 / 100

Strong foundation (clean title, good NAP, real portfolio images, semantic structure)
undercut by **zero structured data, duplicated meta across every page, no sitemap/robots,
a broken redirect, and placeholder reviews/social links**. None of these are hard to fix —
most are a few lines in Next.js — but several will actively suppress local ranking if shipped as-is.

---

## 1. On-page SEO for "lawn care Framingham" — PARTIALLY READY

**What's working:**
- Homepage `<title>`: *"L&J Landscaping | Reliable Lawn Care in Framingham, Natick & Metro West"* — keyword + city + brand. Good.
- Full, consistent NAP in the footer: **(508) 665-0285 · landjlandscapingma@gmail.com · 12 Torrey St, Framingham, MA**. This is the #1 local-ranking trust signal and it's present and consistent.
- `/service-area` lists 20 towns with keyword-rich labels ("Framingham Landscaping", "Natick Lawn Care").

**What's hurting you for "lawn care Framingham":**
- **The homepage H1 has no keyword.** It reads *"The most reliable crew you've seen."* (Hero.jsx:68). "Framingham / Natick / Metro West" sits in a small `<span class="eyebrow">` above it, and "lawn care" appears nowhere in the H1. Google weights the H1 heavily — a brand-tagline H1 with no service/location term is a missed ranking signal on your single most important page.
- **Town list is not landing pages.** `/service-area` renders all 20 towns as plain `<h3>` cards with no links. For "lawn care Framingham" / "landscaping Natick" you want indexable, individually-targeted pages (e.g. `/service-area/framingham`) each with its own title, H1, and copy. Right now one thin page tries to rank for 20 towns at once — it'll rank for none of them well.
- **No location/service in subpage H1s:** Services H1 = "Our Services", Our Work H1 = "Projects that speak for themselves", About H1 = "Two generations." None carry a keyword.

---

## 2. Schema Markup — MISSING ENTIRELY (biggest local-SEO gap)

`grep` for `application/ld+json` / `schema.org` across `app/` and `components/`: **zero matches.** No structured data anywhere.

| Schema | Needed? | Status | Impact |
|---|---|---|---|
| **LocalBusiness** (LandscapingBusiness subtype) | Critical | ❌ Missing | This is THE schema for local. Feeds Google your name, address, phone, geo, hours, service area. Strongly tied to map-pack/local-pack eligibility. |
| **Service** | High | ❌ Missing | Mark up each of the 9 services so Google understands your offering. |
| **Review / AggregateRating** | Medium | ⚠️ Do NOT add yet | Reviews are placeholder (see #6). Marking up fake reviews = Google manual penalty. Add only after real reviews land. |
| **BreadcrumbList** | Medium | ❌ Missing | Improves SERP appearance on subpages. |
| **Organization / WebSite** | Low | ❌ Missing | Sitelinks + brand entity. |

**Recommended `LocalBusiness` JSON-LD** (drop into `app/layout.jsx`, inside `<body>`):

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "name": "L&J Landscaping",
    "image": "https://lj-landscaping.vercel.app/logo.png",
    "telephone": "+15086650285",
    "email": "landjlandscapingma@gmail.com",
    "url": "https://lj-landscaping.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Torrey St",
      "addressLocality": "Framingham",
      "addressRegion": "MA",
      "postalCode": "01702",
      "addressCountry": "US"
    },
    "areaServed": ["Framingham","Natick","Wayland","Sudbury","Ashland","Wellesley","Newton","Weston","Holliston","Hopkinton"],
    "foundingDate": "2022",
    "slogan": "Two generations, one standard.",
    "priceRange": "$$"
  }) }}
/>
```
*(Confirm the postal code — 01702 is assumed.)*

---

## 3. Heading Hierarchy — MOSTLY OK, two real problems

**Good:** Every page has exactly **one `<h1>`** (verified across all routes + homepage). No multiple-H1 bug. Homepage section structure (H1 → H2 per section) is clean.

**Problems:**
1. **Level skips on 3 subpages.** `/services`, `/our-work`, and `/service-area` jump **H1 → H3** with no H2 in between (e.g. services/page.jsx:20 is H1, then every service card is `<h3>` at line 28). Add a section-level `<h2>`, or promote the card titles to `<h2>`. Skipping levels is an accessibility + SEO structure flag.
2. **Keyword-empty H1s** (covered in #1). Recommended rewrites:
   - Homepage H1 → keep the brand line but add a keyworded eyebrow OR change to *"Reliable Lawn Care & Landscaping in Framingham & Metro West"* visually, or at minimum ensure "lawn care" appears in the H1 text.
   - Services H1 → *"Lawn Care & Landscaping Services in Metro West"*
   - Service-area H1 is good ("Proudly serving Metro West Boston").

---

## 4. Technical SEO / Indexing Blockers

| Check | Status | Note |
|---|---|---|
| `noindex` / robots meta blocking | ✅ None | Nothing actively blocks indexing — good. |
| HTTPS | ✅ | Vercel default. |
| `<html lang="en">` | ✅ | layout.jsx:28. |
| Viewport meta | ✅ | Next 16 injects by default. |
| **robots.txt** | ❌ Missing | Add `app/robots.js`. |
| **sitemap.xml** | ❌ Missing | Add `app/sitemap.js` — trivial in Next, helps discovery of all 6 routes. |
| **Canonical tags** | ❌ Missing | No `metadataBase` set, so Next emits no canonicals. Add `metadataBase: new URL('https://lj-landscaping.vercel.app')`. |
| **Broken redirect** | ❌ **Bug** | `next.config.mjs` permanently redirects `/quote → /contact`, but **there is no `/contact` route** — it 404s. Either create `/contact` or repoint the redirect to `/#quote`. |
| **Placeholder social links** | ❌ | `instagram.com/YOUR_USERNAME` and `facebook.com/YOUR_PAGE` in Nav + Footer are dead links — bad for trust and crawl. |
| Large hero video | ⚠️ | `hero.mp4` autoplays; poster is set (good). Watch LCP/bandwidth on mobile. |
| Mixed `<img>` vs `next/image` | ⚠️ | `/our-work` uses `next/image` (good); logo/footer use raw `<img>` (acceptable, but no optimization). |

Nothing *hard-blocks* Google, but the missing sitemap + duplicate titles (below) + 404 redirect all degrade crawl efficiency and indexing quality.

---

## 5. Meta Tags Completeness — FAILING (single biggest fix)

**Only `app/layout.jsx` exports `metadata`. No page exports its own.** That means `/about`, `/our-work`, `/services`, `/reviews`, and `/service-area` **all inherit the identical homepage title and description.**

| Page | Title | Description | OG/Twitter |
|---|---|---|---|
| `/` (home) | ✅ Good | ✅ Good | ❌ None |
| `/about` | ❌ Duplicate of home | ❌ Duplicate | ❌ |
| `/services` | ❌ Duplicate | ❌ Duplicate | ❌ |
| `/our-work` | ❌ Duplicate | ❌ Duplicate | ❌ |
| `/service-area` | ❌ Duplicate | ❌ Duplicate | ❌ |
| `/reviews` | ❌ Duplicate | ❌ Duplicate | ❌ |

Duplicate titles/descriptions across a whole site is a classic local-SEO killer — Google can't tell pages apart and may suppress them in search. **Every page needs a unique `export const metadata`.** Example for `/services`:

```jsx
export const metadata = {
  title: "Lawn Care & Landscaping Services | L&J Landscaping — Framingham, MA",
  description: "Lawn maintenance, spring & fall cleanups, mulching, masonry, fencing and more across Framingham, Natick & Metro West. Family-owned, 27 years.",
};
```
Also add `metadataBase` + a default `openGraph`/`twitter` block in `layout.jsx` so social shares render a card (currently none do).

---

## 6. Flag — Placeholder content that will hurt you at launch

- **Reviews are fake.** `data/reviews.js` line 1: *"PLACEHOLDER DATA — replace with real customer reviews before launch."* Do **not** add Review/AggregateRating schema to these — marking up invented reviews is a Google manual-action risk. Collect real Google reviews first.
- **Social links are placeholders** (`YOUR_USERNAME` / `YOUR_PAGE`) — replace or remove before launch.
- **About-page images are `<Placeholder>` components**, not real photos — weakens E-E-A-T on your trust page.

---

## E-E-A-T Snapshot
| Dimension | Score | Evidence |
|---|---|---|
| Experience | Strong | Real on-the-job portfolio photos, 27-year story, named owners (Jose & Luis). |
| Expertise | Present | Service descriptions are specific and credible. |
| Authoritativeness | Weak | No real reviews live, no Google Business Profile link, dead social links. |
| Trustworthiness | Present | Real NAP, phone, email, physical address, HTTPS. Undercut by placeholder reviews/socials. |

---

## TOP 3 FIXES BEFORE GOING LIVE

### 1. Add unique meta + LocalBusiness schema (highest impact, ~2 hrs)
Give every page its own `metadata` export, set `metadataBase` for canonicals, and add the `LocalBusiness` JSON-LD in the layout. This fixes duplicate-content suppression AND your single biggest local-pack signal in one pass.

### 2. Fix the broken `/quote → /contact` redirect + dead links (~30 min)
The redirect 404s today. Repoint it to `/#quote` (or build a real `/contact` page), and replace the placeholder Instagram/Facebook URLs. A 404 on a primary CTA path and dead social links both erode crawl trust.

### 3. Add `app/sitemap.js` + `app/robots.js`, and keyword the homepage H1 (~1 hr)
Generate a sitemap/robots (a few lines each in Next), and rewrite the homepage H1 so "lawn care" / "landscaping" + a location term actually appears in the H1 — not just in an eyebrow span.

---

## What would hurt MetroWest MA local ranking (ranked)
1. **No LocalBusiness schema** — directly tied to local-pack eligibility. *Critical.*
2. **Duplicate titles/descriptions site-wide** — page suppression. *Critical.*
3. **`/service-area` is one thin page for 20 towns** — build per-town pages to actually rank "lawn care Framingham", "landscaping Natick", etc. *High.*
4. **Placeholder reviews + no Google Business Profile signal** — reviews are the heaviest local ranking factor and you currently have none real. *High.*
5. **Homepage H1 carries no keyword.** *Medium.*
6. **No sitemap + 404 redirect** — crawl/indexing friction. *Medium.*

---

### Prioritized Roadmap
- **Critical (before launch):** Unique meta per page · LocalBusiness JSON-LD · fix /quote redirect · replace placeholder reviews & social links.
- **High (week 1):** Per-town service-area pages · `metadataBase`+canonicals · sitemap.js/robots.js · Google Business Profile + link it.
- **Medium (month 1):** Keyword the H1s · fix H1→H3 level skips · add Service + BreadcrumbList schema · OpenGraph/Twitter cards.
- **Low:** Convert remaining `<img>` to `next/image` · About-page real photos · review hero.mp4 mobile weight.
