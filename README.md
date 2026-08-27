# Joseph Ige — Portfolio

A premium, dark-themed developer portfolio built with React, TypeScript, and Vite. Designed for backend engineers who want a cinematic, professional online presence with content that's trivially easy to update.

---

## 🧭 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deploying to Vercel](#deploying-to-vercel)
- [Editing Content](#editing-content)
  - [Edit Projects](#edit-projects)
  - [Edit Skills](#edit-skills)
  - [Edit Socials](#edit-socials)
  - [Edit Experience Timeline](#edit-experience-timeline)
  - [Replace the Google Form URL](#replace-the-google-form-url)
  - [Add a New Case Study](#add-a-new-case-study)
  - [Update SEO Metadata](#update-seo-metadata)
  - [Replace Images & Assets](#replace-images--assets)
- [Recommended Image Sizes](#recommended-image-sizes)
- [Accessibility Notes](#accessibility-notes)
- [Performance Notes](#performance-notes)
- [Future Scalability Notes](#future-scalability-notes)
- [Future Upgrade Path](#future-upgrade-path)

---

## Project Overview

This is a fully responsive, dark-themed portfolio for **Joseph Ige**, a Backend Engineer specialising in async systems and payment infrastructure.

**Key features:**
- Cinematic dark-mode design with glassmorphism cards and ambient glow effects
- All content lives in TypeScript data files — no need to touch component code
- Google Form embedded in a premium styled container for contact
- Fully mobile-first with a collapsible navigation menu
- Animated hero, scrolling skill marquee, vertical timeline
- Optimised for Vercel deployment

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| CSS Modules (per-component CSS) | Scoped styling |
| Google Fonts (Syne, DM Mono, Instrument Serif) | Typography |
| Lucide React (optional) | Icons |

No heavy UI libraries. Lightweight, fast, and easy to maintain.

---

## Folder Structure

```
joseph-portfolio/
├── public/
│   ├── favicon.svg           # Site favicon
│   ├── Joseph_Ige_CV.pdf     # 🔁 Add your CV here
│   └── og-image.png          # 🔁 Add Open Graph image here
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx / .css
│   │   ├── Hero.tsx / .css
│   │   ├── About.tsx / .css
│   │   ├── Projects.tsx / .css
│   │   ├── Skills.tsx / .css
│   │   ├── Experience.tsx / .css
│   │   ├── Contact.tsx / .css
│   │   └── Footer.tsx / .css
│   │
│   ├── data/
│   │   ├── site.ts           # Global config, email, socials, SEO
│   │   ├── projects.ts       # Project cards
│   │   ├── skills.ts         # Skill categories and levels
│   │   ├── experience.ts     # Work history timeline
│   │   └── socials.ts        # Social media links
│   │
│   ├── styles/
│   │   └── globals.css       # CSS variables, reset, utilities
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html                # HTML shell + SEO meta tags
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Installation

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Unzip the project
unzip joseph-portfolio.zip
cd joseph-portfolio

# 2. Install dependencies
npm install
```

---

## Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Building for Production

```bash
npm run build
```

Output is in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Deploying to Vercel

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

**Option B — GitHub + Vercel Dashboard:**

1. Push the project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click Deploy

Your site will be live at `https://your-project.vercel.app`.

---

## Editing Content

All content is managed through files in `src/data/`. You never need to touch component code to update what's on screen.

### Edit Projects

**File:** `src/data/projects.ts`

Add a new project by copying the template at the bottom of the file:

```ts
{
  id: 'my-new-project',             // unique slug
  title: 'Project Title',
  subtitle: 'Company · Short subtitle',
  description: 'What does this project do?',
  tags: ['Python', 'FastAPI', 'Redis'],
  status: 'Production',              // 'Production' | 'In Progress' | 'Archived' | 'Open Source'
  featured: false,                   // set true to show in the featured grid
  links: {
    github: 'https://github.com/...',
    live: 'https://myproject.com',   // optional
  },
  highlights: [
    'Key technical achievement 1',
    'Key technical achievement 2',
  ],
  year: '2025',
  color: '#ff6b6b',                 // optional card accent color
},
```

Featured projects get the large 2-column layout. Non-featured projects go into the auto-filling grid below.

---

### Edit Skills

**File:** `src/data/skills.ts`

Add a skill to an existing category:

```ts
{ name: 'Kafka', level: 'Familiar' },
```

Add a new category:

```ts
{
  id: 'cloud',
  category: 'Cloud & DevOps',
  icon: '☁️',
  skills: [
    { name: 'AWS', level: 'Familiar' },
    { name: 'GCP', level: 'Familiar' },
  ],
},
```

Levels: `'Expert'` | `'Proficient'` | `'Familiar'`

---

### Edit Socials

**File:** `src/data/socials.ts`

Update your profile URLs:

```ts
{
  id: 'github',
  label: 'GitHub',
  url: 'https://github.com/YOUR_USERNAME',  // 🔁 change this
  icon: 'github',
  showInNav: true,
  showInFooter: true,
  showInContact: true,
},
```

Add a new social:

```ts
{
  id: 'devto',
  label: 'Dev.to',
  url: 'https://dev.to/yourusername',
  icon: 'external',
  showInNav: false,
  showInFooter: true,
  showInContact: false,
},
```

---

### Edit Experience Timeline

**File:** `src/data/experience.ts`

Add a new role above the existing ones (most recent first):

```ts
{
  id: 'company-role-2025',
  role: 'Senior Backend Engineer',
  company: 'Acme Corp',
  companyUrl: 'https://acme.com',
  type: 'Full-time',
  period: '2025 — Present',
  location: 'Remote · Lagos',
  description: 'What you did at this company.',
  achievements: [
    'Reduced API latency by 40% by migrating to async workers',
    'Designed multi-tenant database architecture for 50k+ users',
  ],
  tags: ['FastAPI', 'PostgreSQL', 'Kubernetes'],
  current: true,   // shows green pulsing dot on timeline
},
```

---

### Replace the Google Form URL

**File:** `src/data/site.ts`

```ts
googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
```

**How to get the URL:**
1. Open your Google Form
2. Click **Send** → click the **</>** (Embed) icon
3. Copy the URL from inside `src="..."` in the iframe code
4. Paste it as the value of `googleFormUrl` above

The form is dark-themed via a CSS `filter` trick in `Contact.css`. If you want to remove the filter, find `.contact__iframe` and remove the `filter` property.

---

### Add a New Case Study

Currently, case studies are future-planned (see [Future Upgrade Path](#future-upgrade-path)). For now, the simplest approach:

1. Add your case study as a project in `projects.ts` with a `caseStudy` link:
   ```ts
   links: {
     caseStudy: 'https://your-blog-or-notion-page.com',
   },
   ```
2. The project card will automatically render the link.

For a full case study page, see the MDX blog upgrade path below.

---

### Update SEO Metadata

**File:** `src/data/site.ts` — update `title`, `description`, `siteUrl`, `ogImage`.

**File:** `index.html` — all meta tags, title, and OG tags are here and pre-filled from the site config pattern.

To update the page title, description, or OG image, edit both files.

---

### Replace Images & Assets

Place assets in the `public/` folder.

| File | Purpose |
|------|---------|
| `public/favicon.svg` | Browser tab icon |
| `public/Joseph_Ige_CV.pdf` | CV download (update filename in `site.ts` → `cvUrl`) |
| `public/og-image.png` | Social sharing preview image |

Reference public files with a leading `/`:
```ts
cvUrl: '/Joseph_Ige_CV.pdf',
ogImage: '/og-image.png',
```

---

## Recommended Image Sizes

| Asset | Size |
|-------|------|
| OG Image (`og-image.png`) | 1200 × 630px |
| Favicon (`favicon.svg`) | 32 × 32px (SVG scales) |
| Profile photo (if added) | 400 × 400px, square crop |
| Project screenshots (if added) | 1200 × 675px (16:9) |

Use `.webp` for photos and screenshots — significantly smaller than `.jpg`/`.png`.

---

## Accessibility Notes

- All interactive elements have accessible labels (`aria-label`, `aria-expanded`)
- Mobile menu uses `aria-expanded` for screen reader state
- Colour contrast meets WCAG AA for body text on dark backgrounds
- Keyboard navigation works for all links and buttons
- `prefers-reduced-motion` media query disables all animations for users who prefer it
- Font sizes use `clamp()` for fluid, responsive scaling
- Images should have descriptive `alt` text if added

---

## Performance Notes

- Google Fonts are `preconnect`-ed to avoid render-blocking
- Background orbs use CSS `animation` (GPU-composited, no layout thrash)
- Marquee animation uses `transform: translateX` (compositor-only)
- No heavy runtime dependencies — total JS bundle stays small
- Images should be served as `.webp` and lazily loaded
- Vite code-splits automatically on build
- The Google Form `<iframe>` uses `loading="lazy"` to avoid blocking

**Lighthouse targets:** 90+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.

---

## Future Scalability Notes

The component architecture supports unlimited growth:

- **Projects:** Add items to the array — the grid reflows automatically
- **Skills:** Add categories or individual skills — cards and bars render from data
- **Experience:** Add timeline entries — the vertical connector line extends automatically
- **Socials:** Add platforms — `showInNav`, `showInFooter`, `showInContact` flags control placement
- **Sections:** New sections are self-contained `<section>` components imported into `App.tsx`

---

## Future Upgrade Path

The portfolio is built to evolve. Here are the planned upgrade paths:

### 🗄️ CMS Integration
Replace `src/data/*.ts` files with a headless CMS like **Sanity**, **Contentful**, or **Notion API**. Edit content without touching code.

### 📝 Blog with MDX
Add a `/blog` route using **React Router** + **MDX**. Write case studies and technical articles as Markdown with embedded React components.

### 📊 Analytics
Add **Plausible** (privacy-first) or **Vercel Analytics** with a single script tag. Track page views, section scroll depth, and CV download clicks.

### 📬 Newsletter
Integrate **ConvertKit** or **Beehiiv** embed in the Contact section for a technical newsletter signup.

### 🔌 Backend Contact API
Replace the Google Form with a **FastAPI** or **Node.js** backend endpoint with email delivery via **Resend** or **SendGrid**.

### 🛠️ Admin Dashboard
Build a simple password-protected admin route to edit project data without touching files.

### 🔍 Project Filtering
Add tag-based filtering to the Projects section — filter by tech stack, year, or status.

### ⭐ Testimonials Section
Add a `src/data/testimonials.ts` file and a new `<Testimonials />` section with carousel or grid layout.

### 📥 Downloadable Resume Tracking
Log CV download events to an analytics endpoint or Plausible custom event to track interest.

---

## Custom Google Form Contact (No iframe)

The contact form submits directly to Google Forms using `fetch` with `mode: 'no-cors'` — no ugly embedded iframe, fully custom styled.

### How the field IDs were extracted from the HTML source

1. Right-click your Google Form → **View Page Source** (or open the HTML file you downloaded)
2. Find the `<form action="...">` tag — this is your `formResponse` URL
3. Search for `data-params` attributes on each question block. They look like:
   ```
   data-params="%.@.[1633920210,"Name",null,0,[[2005620554,null,true,...]]"
   ```
   The number inside the inner array (e.g. `2005620554`) is the entry ID
4. Each entry ID becomes `entry.2005620554` in your form submission

**For this form specifically:**
| Field | Entry ID | env var key |
|-------|----------|-------------|
| Name | `2005620554` | `entry.2005620554` |
| Message | `839337160` | `entry.839337160` |
| Email | Google auto-collects | `entry.emailAddress` |

### Setting up environment variables

Create a `.env.local` file in the project root:

```bash
VITE_GOOGLE_FORM_ACTION=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_NAME_FIELD=entry.2005620554
VITE_GOOGLE_EMAIL_FIELD=entry.emailAddress
VITE_GOOGLE_MESSAGE_FIELD=entry.839337160
```

On **Vercel**, add these in: Project Settings → Environment Variables → add each one.

### Enable email notifications for new responses

1. Open your Google Form editor
2. Click the **Responses** tab
3. Click the three-dot menu (⋮) → **Get email notifications for new responses**
4. Google will email you every time someone submits

### How the submission works

```typescript
const body = new FormData();
body.append('entry.2005620554', name);
body.append('entry.emailAddress', email);
body.append('entry.839337160', message);

await fetch(FORM_ACTION, { method: 'POST', body, mode: 'no-cors' });
```

`no-cors` means we can't read the response — but Google Forms accepts and records the submission regardless. The form treats reaching the `await` completion as success.

### Replacing the Google Form URL

To use a different Google Form:
1. Get the form's `formResponse` URL from the page source
2. Extract new entry IDs from `data-params` attributes
3. Update `.env.local` (and Vercel env vars if deployed)
