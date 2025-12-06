# Blueprint Project Astro - Promotor STIFIn Genetic

> **Dokumentasi lengkap untuk migrasi dari Next.js ke Astro**
>
> **Focus:** SEO Optimization + Auto-Generation dari Data Kota

---

## 📋 Table of Contents

1. [Overview Project](#overview-project)
2. [Kenapa Astro?](#kenapa-astro)
3. [Technology Stack](#technology-stack)
4. [Arsitektur Project](#arsitektur-project)
5. [File Structure](#file-structure)
6. [Data Schema & Content Collections](#data-schema--content-collections)
7. [Auto-Generation System](#auto-generation-system)
8. [SEO Strategy](#seo-strategy)
9. [Performance Optimization](#performance-optimization)
10. [Deployment Guide](#deployment-guide)
11. [Migration Steps](#migration-steps)
12. [Maintenance & Scaling](#maintenance--scaling)

---

## 🎯 Overview Project

### Tujuan
Membuat website landing pages untuk rekrutmen promotor STIFIn yang:
- **SEO-first**: 100% static HTML, optimal untuk indexing
- **Auto-generate**: Ratusan/ribuan halaman dari 1 file data kota
- **Fast**: Perfect Lighthouse scores
- **Maintainable**: Simple structure, mudah di-maintain

### Target Output
Dari **1 file CSV/JSON** berisi daftar kota/kecamatan, auto-generate:
- Landing pages dengan 2 pattern URL per lokasi
- Sitemap.xml otomatis
- SEO metadata unique per halaman
- Schema.org structured data
- WhatsApp CTA dengan pesan custom per lokasi

### Current vs New Architecture

| Aspect | Next.js (Current) | Astro (New) |
|--------|------------------|-------------|
| **Render** | SSR/ISR | Pure Static (SSG) |
| **JS Sent** | ~200KB | 0KB (optional) |
| **Build Time** | 100 pages: ~2 min | 100 pages: ~30s |
| **SEO Score** | 90-95 | 98-100 |
| **Complexity** | Medium | Low |
| **File Size** | Larger | Smaller (~50%) |

---

## 🚀 Kenapa Astro?

### Keunggulan untuk Use Case Ini

1. **Zero JavaScript by Default**
   - Hanya kirim HTML + CSS
   - Perfect untuk landing pages statis
   - Google lebih suka static HTML

2. **Content Collections**
   - Built-in sistem untuk manage data (cities, locations)
   - Type-safe dengan Zod schema
   - Auto-generate pages dari data

3. **Build Speed**
   - 10x lebih cepat dari Next.js untuk static generation
   - Parallel processing out-of-the-box

4. **Perfect SEO**
   - HTML murni, no hydration delay
   - Optimal Core Web Vitals
   - Schema.org integration mudah

5. **Simple Mental Model**
   - No client/server component confusion
   - File-based routing
   - Markdown/MDX native support

### Trade-offs (Yang Kita Tidak Butuh)

❌ **Tidak ada:** Complex interactivity (kita tidak perlu)
❌ **Tidak ada:** Dynamic rendering per request (semua bisa static)
❌ **Tidak ada:** API routes (WhatsApp link direct aja)

✅ **Yang kita butuh:** Fast, SEO-optimized, static landing pages

---

## 🛠 Technology Stack

### Core
- **Framework:** Astro 5.x (latest)
- **Template:** `.astro` components (HTML-like syntax)
- **Styling:** Tailwind CSS 4.x
- **Type Safety:** TypeScript 5.x

### Content & Data
- **Content Collections:** Astro built-in
- **Data Format:** JSON/YAML untuk city data
- **Schema Validation:** Zod (built-in dengan Collections)

### SEO & Analytics
- **Sitemap:** @astrojs/sitemap (official)
- **RSS:** @astrojs/rss (optional)
- **Schema.org:** Manual integration via JSON-LD
- **Analytics:** Google Analytics 4 (via Partytown)

### Development Tools
- **Package Manager:** pnpm (recommended) atau npm
- **Formatting:** Prettier
- **Linting:** ESLint (optional, Astro less strict)

### Deployment
- **Primary:** Vercel / Netlify / Cloudflare Pages
- **Alternative:** GitHub Pages, AWS S3 + CloudFront
- **CDN:** Auto via deployment platform

---

## 🏗 Arsitektur Project

### High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│          Data Layer (Single Source)             │
│                                                  │
│  📄 src/content/locations/cities.json           │
│     - List semua kota/kecamatan Indonesia       │
│     - Metadata: provinsi, populasi, demand      │
│                                                  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│         Content Collections (Astro)             │
│                                                  │
│  🔧 Zod Schema Validation                       │
│  🔧 Type Generation                             │
│  🔧 Auto-import ke components                   │
│                                                  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│      Dynamic Route Generation                   │
│                                                  │
│  📄 /daftar-promotor-stifin-[slug]              │
│  📄 /pendaftaran-promotor-stifin-[slug]         │
│  📄 /lokasi/[provinsi]/[kota]                   │
│                                                  │
│  Each route gets:                               │
│  - Unique SEO metadata                          │
│  - Schema.org LocalBusiness                     │
│  - Custom WhatsApp CTA                          │
│                                                  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│          Build Process (SSG)                    │
│                                                  │
│  npm run build                                  │
│  ├── Generate all HTML pages                   │
│  ├── Optimize images (if any)                  │
│  ├── Generate sitemap.xml                      │
│  ├── Minify CSS/JS                             │
│  └── Output: /dist folder (ready to deploy)    │
│                                                  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│            Static Output                        │
│                                                  │
│  dist/                                          │
│  ├── index.html                                 │
│  ├── daftar-promotor-stifin-jakarta/           │
│  │   └── index.html                            │
│  ├── pendaftaran-promotor-stifin-jakarta/      │
│  │   └── index.html                            │
│  ├── sitemap.xml                                │
│  └── _astro/ (assets)                           │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Data Flow

```
cities.json
    ↓
Content Collection
    ↓
getStaticPaths() ← Generate all possible routes
    ↓
Astro Components ← Render with location data
    ↓
Static HTML ← Final output (no JS needed)
```

---

## 📁 File Structure

```
promotorstifingenetic-astro/
│
├── 📁 src/
│   ├── 📁 components/          # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── BenefitsSection.astro
│   │   ├── CTAWhatsApp.astro
│   │   ├── SEOHead.astro       # Meta tags component
│   │   └── SchemaOrg.astro     # Structured data
│   │
│   ├── 📁 layouts/             # Page layouts
│   │   ├── BaseLayout.astro    # Base HTML structure
│   │   └── LocationLayout.astro # Layout for location pages
│   │
│   ├── 📁 pages/               # Routes (file-based routing)
│   │   ├── index.astro                          # Homepage
│   │   ├── tentang.astro                        # About page
│   │   ├── kontak.astro                         # Contact
│   │   │
│   │   ├── 📁 daftar-promotor-stifin-[slug]/
│   │   │   └── index.astro                      # Pattern 1: Daftar
│   │   │
│   │   ├── 📁 pendaftaran-promotor-stifin-[slug]/
│   │   │   └── index.astro                      # Pattern 2: Pendaftaran
│   │   │
│   │   ├── 📁 lokasi/
│   │   │   └── 📁 [provinsi]/
│   │   │       └── 📁 [kota]/
│   │   │           └── index.astro              # City detail pages
│   │   │
│   │   └── sitemap.xml.ts                       # Sitemap generation
│   │
│   ├── 📁 content/             # Content Collections
│   │   ├── config.ts           # Collection schemas
│   │   └── 📁 locations/
│   │       ├── cities.json     # 🔴 DATA UTAMA - Edit disini!
│   │       └── provinces.json  # Optional: provinsi metadata
│   │
│   ├── 📁 lib/                 # Utilities
│   │   ├── constants.ts        # Site config, WA number, etc
│   │   ├── seo.ts              # SEO helper functions
│   │   └── whatsapp.ts         # WhatsApp message generator
│   │
│   └── 📁 styles/
│       └── global.css          # Global styles + Tailwind
│
├── 📁 public/                  # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│
├── 📄 astro.config.mjs         # Astro configuration
├── 📄 tailwind.config.mjs      # Tailwind configuration
├── 📄 tsconfig.json            # TypeScript config
├── 📄 package.json
└── 📄 .env                     # Environment variables
```

### Penjelasan Struktur

#### 1. `/src/components/`
Komponen reusable yang dipakai di berbagai halaman.

**Contoh: CTAWhatsApp.astro**
```astro
---
interface Props {
  kecamatan: string;
  provinsi: string;
  pattern: 'daftar' | 'pendaftaran';
}

const { kecamatan, provinsi, pattern } = Astro.props;
const message = pattern === 'daftar'
  ? `Halo, saya tertarik untuk mendaftar sebagai promotor STIFIn di ${kecamatan}, ${provinsi}.`
  : `Halo, saya ingin bergabung sebagai promotor STIFIn di ${kecamatan}, ${provinsi}.`;

const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
---

<a href={waUrl} class="cta-button">
  Daftar via WhatsApp
</a>
```

#### 2. `/src/pages/`
File-based routing. File = Route.

```
pages/index.astro                  → promotorstifingenetic.id/
pages/tentang.astro                → promotorstifingenetic.id/tentang
pages/daftar-[slug]/index.astro    → promotorstifingenetic.id/daftar-promotor-stifin-jakarta
```

#### 3. `/src/content/`
**JANTUNG SISTEM AUTO-GENERATION**

**cities.json:**
```json
[
  {
    "slug": "jakarta-pusat-jakarta",
    "kecamatan": "Jakarta Pusat",
    "kabupaten": "Jakarta",
    "provinsi": "DKI Jakarta",
    "population": 900000,
    "demandLevel": "high",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "slug": "bandung-kota-bandung",
    "kecamatan": "Bandung Kota",
    "kabupaten": "Bandung",
    "provinsi": "Jawa Barat",
    "population": 2500000,
    "demandLevel": "high"
  }
  // ... 1000+ locations
]
```

---

## 🗂 Data Schema & Content Collections

### Content Collection Configuration

**src/content/config.ts:**

```typescript
import { defineCollection, z } from 'astro:content';

// Define schema untuk locations
const locationsCollection = defineCollection({
  type: 'data', // JSON/YAML data
  schema: z.object({
    slug: z.string(),
    kecamatan: z.string(),
    kabupaten: z.string(),
    provinsi: z.string(),
    population: z.number().optional(),
    demandLevel: z.enum(['high', 'medium', 'low']).default('medium'),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    keywords: z.array(z.string()).optional(),
    description: z.string().optional(), // Custom description per kota
  }),
});

export const collections = {
  locations: locationsCollection,
};
```

### Keuntungan Schema Validation

✅ **Type Safety:** Auto-complete di VSCode
✅ **Validation:** Error kalau data tidak sesuai schema
✅ **Documentation:** Schema = source of truth

---

## ⚙️ Auto-Generation System

### 1. Dynamic Routes dengan getStaticPaths()

**src/pages/daftar-promotor-stifin-[slug]/index.astro:**

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '@/layouts/BaseLayout.astro';
import Hero from '@/components/Hero.astro';
import CTAWhatsApp from '@/components/CTAWhatsApp.astro';

// Generate static paths untuk semua lokasi
export async function getStaticPaths() {
  const locations = await getCollection('locations');

  return locations.map((location) => ({
    params: { slug: location.data.slug },
    props: { location: location.data },
  }));
}

const { location } = Astro.props;
const { kecamatan, kabupaten, provinsi, demandLevel } = location;

// Generate SEO metadata
const title = `Daftar Promotor STIFIn ${kecamatan} - Peluang Bisnis ${provinsi}`;
const description = `Bergabung sebagai promotor STIFIn di ${kecamatan}, ${kabupaten}. Peluang bisnis dengan komisi hingga 70%. Daftar sekarang!`;
---

<BaseLayout title={title} description={description}>
  <Hero
    title={`Daftar Promotor STIFIn di ${kecamatan}`}
    subtitle={`Peluang Bisnis Genetic Test di ${provinsi}`}
  />

  <section class="benefits">
    <h2>Kenapa Jadi Promotor STIFIn di {kecamatan}?</h2>
    <!-- Benefits content -->
  </section>

  <CTAWhatsApp
    kecamatan={kecamatan}
    provinsi={provinsi}
    pattern="daftar"
  />
</BaseLayout>
```

### 2. Cara Kerja Build Process

```bash
npm run build
```

**Yang terjadi:**

1. Astro baca `cities.json` (misal: 1000 locations)
2. `getStaticPaths()` return 1000 routes
3. Astro render 1000 HTML files parallel
4. Generate sitemap dengan 1000 URLs
5. Output ke `/dist` folder

**Build Time:**
- 100 pages: ~30 detik
- 1000 pages: ~3-5 menit
- 10000 pages: ~30-45 menit

### 3. Sitemap Auto-Generation

**src/pages/sitemap.xml.ts:**

```typescript
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const locations = await getCollection('locations');

  const urls = [
    // Static pages
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/tentang', priority: 0.8, changefreq: 'monthly' },

    // Dynamic location pages - Pattern 1
    ...locations.map(loc => ({
      url: `/daftar-promotor-stifin-${loc.data.slug}`,
      priority: 0.7,
      changefreq: 'monthly',
    })),

    // Dynamic location pages - Pattern 2
    ...locations.map(loc => ({
      url: `/pendaftaran-promotor-stifin-${loc.data.slug}`,
      priority: 0.7,
      changefreq: 'monthly',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ url, priority, changefreq }) => `
  <url>
    <loc>${site}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
```

---

## 🎯 SEO Strategy

### 1. On-Page SEO

#### Meta Tags per Page

```astro
---
// src/components/SEOHead.astro
interface Props {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

const { title, description, keywords, canonical, ogImage } = Astro.props;
const fullTitle = `${title} | Promotor STIFIn Genetic`;
const canonicalURL = canonical || Astro.url.pathname;
---

<head>
  <!-- Primary Meta Tags -->
  <title>{fullTitle}</title>
  <meta name="title" content={fullTitle} />
  <meta name="description" content={description} />
  {keywords && <meta name="keywords" content={keywords.join(', ')} />}
  <link rel="canonical" href={canonicalURL} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={Astro.url} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  {ogImage && <meta property="og:image" content={ogImage} />}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={fullTitle} />
  <meta property="twitter:description" content={description} />
</head>
```

#### Schema.org Structured Data

```astro
---
// src/components/SchemaOrg.astro
interface Props {
  type: 'LocalBusiness' | 'Organization';
  location?: {
    kecamatan: string;
    provinsi: string;
    coordinates?: { lat: number; lng: number };
  };
}

const { type, location } = Astro.props;

const schema = type === 'LocalBusiness' ? {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Promotor STIFIn ${location.kecamatan}`,
  "description": `Peluang bisnis sebagai promotor STIFIn Genetic Test di ${location.kecamatan}, ${location.provinsi}`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location.kecamatan,
    "addressRegion": location.provinsi,
    "addressCountry": "ID"
  },
  ...(location.coordinates && {
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.lat,
      "longitude": location.coordinates.lng
    }
  }),
  "url": Astro.url.href,
} : {
  // Organization schema
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### 2. Content Strategy untuk Avoid Duplicate Content

**2 Pattern URLs dengan Konten BERBEDA:**

| Aspect | `/daftar-promotor-stifin-*` | `/pendaftaran-promotor-stifin-*` |
|--------|----------------------------|----------------------------------|
| **H1** | "Daftar Promotor STIFIn di {Kecamatan}" | "Bergabung Sebagai Promotor STIFIn {Kecamatan}" |
| **Focus** | Info bisnis + benefits | Step-by-step + success stories |
| **CTA** | "Daftar Sekarang" | "Gabung Sekarang" |
| **Content** | 4 benefits cards + FAQ | 4-step process + testimonial |
| **Tone** | Informative | Motivational |

### 3. Keyword Strategy

**Pattern 1: Daftar**
```
Primary: "daftar promotor stifin {kecamatan}"
Secondary:
- "promotor stifin {kecamatan}"
- "bisnis stifin {provinsi}"
- "peluang usaha {kecamatan}"
- "mitra stifin {kabupaten}"
```

**Pattern 2: Pendaftaran**
```
Primary: "pendaftaran promotor stifin {kecamatan}"
Secondary:
- "cara daftar promotor stifin {provinsi}"
- "jadi promotor stifin {kecamatan}"
- "syarat promotor stifin {kabupaten}"
```

### 4. Internal Linking

```
Homepage
├── /tentang
├── /kontak
└── /lokasi/{provinsi}
    └── /lokasi/{provinsi}/{kota}
        ├── /daftar-promotor-stifin-{slug}
        └── /pendaftaran-promotor-stifin-{slug}
```

**Strategi:**
- Homepage link ke hub provinsi
- Hub provinsi link ke semua kota
- Kota page link ke 2 pattern pages
- Pattern pages link balik ke kota hub

---

## 🚄 Performance Optimization

### 1. Zero JavaScript

Astro default: **0 KB JavaScript**

Optional JS hanya untuk:
- Analytics (via Partytown - runs in Web Worker)
- Optional: Smooth scroll, animations

### 2. Image Optimization

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/assets/hero.jpg';
---

<Image
  src={heroImage}
  alt="Promotor STIFIn"
  width={800}
  height={600}
  loading="lazy"
  format="webp"
/>
```

Astro auto:
- Convert ke WebP/AVIF
- Generate multiple sizes
- Lazy loading
- Proper width/height attributes

### 3. CSS Optimization

**Tailwind CSS + Astro:**
- Only used classes in final CSS
- Auto purge unused styles
- Critical CSS inline

**Result:** CSS size ~10-20KB (vs 200KB+ di framework lain)

### 4. Target Lighthouse Scores

```
Performance:    100
Accessibility:  100
Best Practices: 100
SEO:            100
```

**Achievable karena:**
- Static HTML
- No render-blocking JS
- Optimal images
- Proper semantic HTML
- Fast server response (CDN)

---

## 🚀 Deployment Guide

### Platform Recommendations

#### 1. Vercel (Recommended)

**Pros:**
- Zero config untuk Astro
- Global CDN
- Auto SSL
- Preview deployments
- Analytics built-in

**Setup:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**vercel.json:**
```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

#### 2. Netlify

**Pros:**
- Simple UI
- Form handling (jika butuh contact form)
- Free tier generous

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

#### 3. Cloudflare Pages

**Pros:**
- Paling cepat (Edge network terbesar)
- Unlimited bandwidth gratis
- Built-in analytics

**Build settings:**
```
Build command: npm run build
Output directory: dist
```

### Environment Variables

**.env.production:**
```bash
PUBLIC_SITE_URL=https://promotorstifingenetic.id
PUBLIC_WA_NUMBER=6281234567890
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Deployment Checklist

- [ ] Build berhasil locally (`npm run build`)
- [ ] Test di `npm run preview`
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] robots.txt configured
- [ ] Analytics code added
- [ ] WhatsApp number correct
- [ ] Custom domain DNS setup
- [ ] SSL certificate active
- [ ] Submit sitemap to Google Search Console

---

## 🔄 Migration Steps

### Step-by-Step dari Next.js ke Astro

#### Phase 1: Setup Baru (1 hari)

1. **Create Astro Project**
```bash
npm create astro@latest promotorstifingenetic-astro
cd promotorstifingenetic-astro
```

2. **Install Dependencies**
```bash
npm install -D tailwindcss @astrojs/tailwind
npx astro add tailwind
```

3. **Copy Data**
```bash
# Copy locations data dari Next.js project
cp ../promotorstifingenetic.id/lib/content/locations.ts ./src/content/locations/cities.json
```

Convert TypeScript array ke JSON:
```javascript
// Helper script: convert-data.js
const locations = require('./locations.ts');
const fs = require('fs');
fs.writeFileSync('cities.json', JSON.stringify(locations, null, 2));
```

#### Phase 2: Content Collections (2 jam)

4. **Setup Content Collections**

Buat `src/content/config.ts` (lihat section Data Schema di atas)

5. **Validate Data**
```bash
npm run build
# Astro akan validasi semua data against schema
```

#### Phase 3: Components (1 hari)

6. **Convert React Components ke Astro**

**Before (Next.js - React):**
```tsx
export function Hero({ title, subtitle }: Props) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
```

**After (Astro):**
```astro
---
interface Props {
  title: string;
  subtitle: string;
}
const { title, subtitle } = Astro.props;
---

<div class="hero">
  <h1>{title}</h1>
  <p>{subtitle}</p>
</div>
```

7. **Copy Tailwind Styles**

Tailwind classes bisa langsung copy paste, sama persis.

#### Phase 4: Pages & Routes (3 jam)

8. **Convert Dynamic Routes**

**Before (Next.js):**
```typescript
// app/daftar-promotor-stifin-[slug]/page.tsx
export async function generateStaticParams() {
  return locations.map(loc => ({ slug: loc.slug }));
}
```

**After (Astro):**
```astro
// src/pages/daftar-promotor-stifin-[slug]/index.astro
---
export async function getStaticPaths() {
  const locations = await getCollection('locations');
  return locations.map(loc => ({
    params: { slug: loc.data.slug },
    props: { location: loc.data }
  }));
}
---
```

#### Phase 5: SEO & Sitemap (2 jam)

9. **Setup Sitemap**

```bash
npx astro add sitemap
```

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://promotorstifingenetic.id',
  integrations: [sitemap()],
});
```

10. **Add Schema.org**

Buat component SchemaOrg.astro (lihat SEO section)

#### Phase 6: Testing (1 hari)

11. **Test Locally**
```bash
npm run build
npm run preview
```

12. **Check Generated Pages**
```bash
ls dist/daftar-promotor-stifin-*/
# Should see all generated HTML files
```

13. **Lighthouse Test**
```bash
npx unlighthouse --site http://localhost:4321
```

#### Phase 7: Deploy (2 jam)

14. **Deploy to Vercel**
```bash
vercel --prod
```

15. **Setup Custom Domain**

Vercel dashboard → Add domain → DNS settings

16. **Submit Sitemap**

Google Search Console → Submit `https://promotorstifingenetic.id/sitemap.xml`

### Total Migration Time: 3-4 hari kerja

---

## 📈 Maintenance & Scaling

### Adding New Locations

**Super Simple:**

1. Edit `src/content/locations/cities.json`
2. Add new entry:
```json
{
  "slug": "surabaya-kota-surabaya",
  "kecamatan": "Surabaya Kota",
  "kabupaten": "Surabaya",
  "provinsi": "Jawa Timur",
  "population": 3000000,
  "demandLevel": "high"
}
```
3. `npm run build`
4. Deploy

**Result:** 2 new pages auto-generated + added to sitemap

### Bulk Import (CSV to JSON)

**Script: scripts/csv-to-json.js**

```javascript
const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('cities.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push({
      slug: `${row.kecamatan.toLowerCase()}-${row.kabupaten.toLowerCase()}`.replace(/ /g, '-'),
      kecamatan: row.kecamatan,
      kabupaten: row.kabupaten,
      provinsi: row.provinsi,
      population: parseInt(row.population) || null,
      demandLevel: row.demandLevel || 'medium',
    });
  })
  .on('end', () => {
    fs.writeFileSync(
      'src/content/locations/cities.json',
      JSON.stringify(results, null, 2)
    );
    console.log(`✅ Imported ${results.length} locations`);
  });
```

**Usage:**
```bash
node scripts/csv-to-json.js
npm run build
```

### Monitoring & Analytics

1. **Google Search Console**
   - Track indexed pages
   - Monitor search queries
   - Check Core Web Vitals

2. **Google Analytics 4**
   - Page views per location
   - Conversion tracking (WhatsApp clicks)
   - Geographic distribution

3. **Vercel Analytics**
   - Real User Monitoring
   - Core Web Vitals
   - Edge network performance

### Content Updates

**Update Hero Section:**
```astro
// src/components/Hero.astro
// Edit once, applies to all pages
```

**Update WhatsApp Number:**
```bash
# .env.production
PUBLIC_WA_NUMBER=6281234567890
```

Rebuild & deploy.

### Scaling to 10,000+ Pages

**Considerations:**

1. **Build Time**
   - 10,000 pages ≈ 30-45 minutes
   - Use CI/CD for auto-deploy
   - Consider incremental builds (Astro 5.x feature)

2. **File Size**
   - 10,000 HTML files ≈ 500 MB total
   - CDN handles this easily
   - No database needed

3. **SEO Indexing**
   - Submit sitemap in chunks (Google limit: 50,000 URLs/sitemap)
   - Use sitemap index if needed
   - Monitor index coverage in GSC

**Still Viable!** Many sites run 100,000+ static pages with Astro.

---

## 🎓 Resources & Documentation

### Official Docs
- [Astro Documentation](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro SEO Guide](https://docs.astro.build/en/guides/seo/)

### Community
- [Astro Discord](https://astro.build/chat)
- [Astro GitHub Discussions](https://github.com/withastro/astro/discussions)

### Tutorials (Recommended)
1. "Astro Crash Course" - YouTube
2. "Content Collections Deep Dive" - Astro Blog
3. "SEO with Astro" - Web.dev

---

## 📝 Quick Reference

### Common Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)

# Build
npm run build            # Build for production
npm run preview          # Preview production build locally

# Utilities
npm run astro add tailwind    # Add Tailwind integration
npm run astro add sitemap     # Add sitemap integration
npm run astro check           # Type check
```

### File Naming Conventions

```
index.astro              → /
about.astro              → /about
[slug].astro             → /:slug (dynamic)
[...path].astro          → /* (catch-all)
```

### Import Aliases

```typescript
import Foo from '@/components/Foo.astro';  // @ = src/
import data from '@/content/cities.json';
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## ✅ Success Metrics

### Week 1 (After Launch)
- [ ] All pages indexed in Google Search Console
- [ ] Lighthouse scores 95+ across all pages
- [ ] Zero console errors in browser
- [ ] WhatsApp CTA working for all locations

### Month 1
- [ ] Organic traffic started (track in GA4)
- [ ] Appearing in local searches (e.g., "promotor stifin jakarta")
- [ ] Core Web Vitals all green in GSC

### Month 3
- [ ] Top 10 rankings for target keywords
- [ ] Conversion rate dari organic traffic
- [ ] Expand to more locations based on performance

---

## 🤝 Support & Contact

**Developer:** [Your Name]
**Documentation Version:** 1.0
**Last Updated:** 2025-11-16
**Astro Version:** 5.x
**License:** Proprietary

---

## 🎉 Conclusion

Dengan Astro, Anda mendapatkan:

✅ **SEO Perfect** - Static HTML, perfect Lighthouse scores
✅ **Simple Maintenance** - Edit 1 file JSON, rebuild, done
✅ **Fast Builds** - 1000 pages in minutes
✅ **Scalable** - Support hingga 10,000+ pages
✅ **Future-Proof** - Astro actively developed, v5.x stable

**Next Steps:**
1. Review blueprint ini
2. Setup new Astro project
3. Migrate data dari Next.js
4. Build & deploy
5. Monitor results

**Good luck! 🚀**
