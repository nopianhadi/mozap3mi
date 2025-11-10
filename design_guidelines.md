# Design Guidelines: PT. Moza Group Indonesia Website

## Design Approach
**Reference-Based Approach** - Drawing from professional corporate and recruitment platforms with Indonesian national identity. Inspired by clean, trustworthy designs like LinkedIn's corporate pages and Indeed's professional layouts, adapted for a migration worker placement agency with strong cultural branding.

## Core Design Elements

### Typography System
**Primary Font**: Google Sans (as specified)
- Hero Headlines: 700 weight, 3xl-6xl sizes (responsive)
- Section Headings: 700 weight, 2xl-4xl sizes
- Subheadings: 600 weight, xl-2xl sizes
- Body Text: 400 weight, base-lg sizes
- Small Text/Captions: 400 weight, sm size
- Maintain generous line-height (1.6-1.8) for Indonesian text readability

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section Padding: py-16 to py-24 (mobile to desktop)
- Container: max-w-6xl with px-6
- Component Spacing: gap-8 to gap-12 for grids
- Vertical Rhythm: consistent mb-6 to mb-12 between elements

### Component Library

**Navigation**
- Sticky header with company logo (left) and smooth-scroll navigation links (right)
- Mobile: Hamburger menu with slide-out drawer
- CTA button in header: "Hubungi Kami" (Contact Us) with backdrop blur when over hero image

**Hero Section**
- Full-width, 85vh height background image showing Indonesian workers in professional settings or global map concept
- Centered content overlay with backdrop blur card
- Company name (large, bold)
- Tagline: "Dari Moza ke dunia kerja global, profesional berkarya Indonesia mendunia"
- Dual CTA buttons: "Pelajari Lebih Lanjut" (Learn More) + "Konsultasi Gratis" (Free Consultation)
- Buttons with backdrop blur background (bg-white/20 backdrop-blur-md)

**About Section**
- Three-column layout (desktop): Visi | Misi | Tujuan
- Single column (mobile)
- Each column with icon at top, bold heading, and bulleted/numbered list
- Alternating subtle background for visual separation

**Services Section**
- Six-card grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card represents a destination country with flag icon, country name, and brief descriptor
- Cards with subtle hover lift effect (transform: translateY(-4px))
- Countries: Jepang, Hongkong, Taiwan, Australia, Eropa, Kuwait

**Advantages Section**
- Three-column feature cards (stacks on mobile)
- Large numbered indicators (01, 02, 03)
- Bold heading + descriptive text for each advantage
- Icons representing accuracy, service excellence, and security

**Contact Section**
- Two-column layout: Contact form (left) + Information card (right)
- Form fields: Nama, Email, Nomor Telepon, Pesan (all with proper labels)
- Information card includes:
  - Google Maps embed placeholder
  - Address with location icon
  - Phone/WhatsApp with phone icon (clickable tel: link)
  - Email with envelope icon (mailto: link)
  - Operating hours with clock icon
- Social proof badge: "Terdaftar & Berizin Resmi P3MI"

**Footer**
- Full-width, multi-column layout
- Left: Company logo + tagline + year established
- Center: Quick links (navigation)
- Right: Contact info summary + social media icons
- Bottom bar: Copyright © 2025 PT. Moza Group Indonesia

### Images
- **Hero Image**: Professional photo showing diverse Indonesian workers in work settings OR world map with Indonesia highlighted and destination countries marked. Image should convey professionalism, hope, and global opportunities. Full-width, 85vh height.
- **About Section Background**: Subtle pattern or light texture suggesting Indonesian batik motifs (very subtle, not overwhelming)
- **Service Cards**: Small flag icons or representative images for each destination country
- **Advantages Section**: Simple line icons (checkmark shield, handshake, document verified)
- **Contact Section**: Embedded Google Maps showing office location in Tangerang, Banten

### Key Layout Principles
- One-page smooth-scroll navigation with offset for fixed header
- Clear visual hierarchy using whitespace and typography scale
- Consistent card-based design for services and advantages
- Professional, trustworthy aesthetic appropriate for government-regulated industry
- Mobile-first responsive design
- Accessibility: High contrast text, proper heading hierarchy, keyboard navigation support

### Interactions (Minimal)
- Smooth scroll-to-section on navigation click
- Subtle card hover effects (elevation/shadow change)
- Form validation states (error/success messaging)
- Sticky header with slight shadow on scroll
- No complex animations or distracting motion

### Content Strategy
- Front-load trust signals: "Terdaftar Resmi P3MI 2025"
- Clear value proposition in hero
- Comprehensive visi/misi/tujuan to establish credibility
- Specific destination countries to set clear expectations
- Multiple contact methods for accessibility
- Operating hours transparency