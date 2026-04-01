# Abdullah AlJuhani — UX Research Portfolio

A production-ready **Next.js 14** portfolio with 3 full case study pages.

**Live domain:** `Abdullah.AlJuhani.com`

---

## Project Structure

```
app/
├── page.tsx              ← Main portfolio (all 4 sections)
├── layout.tsx            ← Root layout + metadata
├── globals.css           ← Design tokens & shared styles
├── not-found.tsx         ← 404 page
├── components/
│   ├── Nav.tsx           ← Sticky responsive nav
│   └── useReveal.ts      ← Scroll-reveal hook
├── data/
│   └── cases.ts          ← ALL case study content (edit here)
└── case/[slug]/
    └── page.tsx          ← Dynamic case study page (renders all 3)
```

---

## Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up / Log in
2. Click **"Add New Project"**
3. Import your GitHub repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

Your site will be live at `your-project.vercel.app` in ~2 minutes.

---

## Connect Abdullah.AlJuhani.com

### Step 3 — Add Custom Domain in Vercel
1. In your Vercel project → **Settings → Domains**
2. Type `Abdullah.AlJuhani.com` → **Add**
3. Vercel will show you DNS records to add

### Step 4 — Add DNS Records at Your Domain Registrar
Go to wherever `AlJuhani.com` is registered (GoDaddy, Namecheap, Cloudflare, etc.)

Add this DNS record:
| Type  | Name     | Value                  |
|-------|----------|------------------------|
| CNAME | Abdullah | cname.vercel-dns.com   |

Or if Vercel gives you an A record:
| Type | Name     | Value          |
|------|----------|----------------|
| A    | Abdullah | 76.76.21.21    |

DNS propagation takes 5–60 minutes. Then your portfolio is live at **Abdullah.AlJuhani.com** ✓

---

## Personalizing Your Content

### Update your name/links
- `app/layout.tsx` → update `metadata` (title, description, URL)
- `app/page.tsx` → update email, LinkedIn URL, hero copy
- `app/components/Nav.tsx` → update name display

### Edit case study content
All content lives in one file: **`app/data/cases.ts`**

Replace every `[X]` with your real numbers, and `[Company Name]` with real or anonymized names.

Each case study has:
- `meta[]` → the 5 header stats
- `overviewBody[]` → problem statement paragraphs
- `stats[]` → 3 key numbers
- `processSteps[]` → your research process
- `affinityClusters[]` → sticky notes on the affinity board
- `personas[]` → the 3 participant cards
- `findings[]` → key findings
- `recos[]` → recommendations
- `impact[]` → outcome metrics

### Add your photo
Replace the SVG circle placeholder in `app/page.tsx` (search for "Your Photo") with:
```tsx
<Image src="/your-photo.jpg" alt="Abdullah AlJuhani" fill style={{ objectFit:'cover' }} />
```
Place the photo in the `/public` folder.

---

## Build for Production

```bash
npm run build
npm run start
```
