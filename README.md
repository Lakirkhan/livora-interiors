# FS Interior – Premium Interior Design Studio Website

A production-ready Next.js 15 website for a boutique interior design startup in Ahmedabad.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Hook Form + Zod** (form validation)
- **Supabase** (database & lead storage)
- **Resend** (transactional emails)
- **Lucide Icons**

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key
OWNER_EMAIL=your_email@gmail.com
WHATSAPP_NUMBER=919876543210
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the **SQL Editor**
3. Run the schema from `supabase/schema.sql`
4. Copy your Project URL and keys to `.env.local`

### 4. Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add your domain (or use `@resend.dev` for testing)
4. Update `RESEND_API_KEY` and the `from` email in `/src/app/api/submit-lead/route.ts`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization Guide

### Business Details

Update these files with your actual business information:

| What to change | File |
|---|---|
| Phone numbers | `src/components/layout/Navbar.tsx`, `Footer.tsx`, `FloatingContact.tsx` |
| WhatsApp number | `src/components/layout/FloatingContact.tsx` (WHATSAPP constant) |
| Email | `src/app/api/submit-lead/route.ts` |
| Social links | `src/components/layout/Footer.tsx` |
| Business address | `src/app/layout.tsx` (JSON-LD), `Footer.tsx` |
| Domain URL | `src/app/layout.tsx`, `sitemap.ts` |

### Branding

| What to change | File |
|---|---|
| Studio name (FS) | Navbar, Footer, SEO metadata |
| Tagline | Hero section |
| Founders info | About section |
| Package prices | `PackagesSection.tsx` |

### Portfolio Images

Replace Unsplash images in `PortfolioSection.tsx` with your actual project photos. Or store them in Supabase Storage and load dynamically.

---

## Production Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Add your environment variables in the Vercel dashboard.

### Build Check

```bash
npm run build
```

---

## SEO Keywords Targeted

- Interior Designer in Ahmedabad
- Home Interior Design Ahmedabad
- Modular Kitchen Ahmedabad
- 2 BHK Interior Package Ahmedabad
- 3 BHK Interior Package Ahmedabad
- Residential Interior Designer Ahmedabad

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # XML sitemap
│   ├── robots.ts           # Robots.txt
│   └── api/
│       ├── submit-lead/    # Form submission API
│       └── reviews/        # Reviews API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingContact.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ConsultationForm.tsx
│   └── ui/
│       └── SectionHeader.tsx
├── lib/
│   ├── supabase.ts
│   └── utils.ts
└── types/
    └── index.ts
supabase/
└── schema.sql              # Database schema + seed data
```

---

## Features

- ✅ Full-screen hero with luxury imagery
- ✅ Animated about section with team values
- ✅ 8 service cards with hover effects
- ✅ 3 pricing packages with feature comparison
- ✅ 4-step animated process timeline
- ✅ Portfolio gallery with masonry layout + lightbox
- ✅ 8 Why-choose-us feature cards
- ✅ Dynamic testimonial carousel (Supabase)
- ✅ Full consultation form with Zod validation
- ✅ Floating WhatsApp/Call/Book buttons
- ✅ Sticky navigation with scroll effects
- ✅ Lead storage in Supabase
- ✅ Owner email notification via Resend
- ✅ Customer confirmation email
- ✅ Full SEO optimization
- ✅ JSON-LD structured data
- ✅ Sitemap + robots.txt
- ✅ Mobile-first responsive design
- ✅ Framer Motion animations throughout
