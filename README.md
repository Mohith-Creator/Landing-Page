# FlowPilot — Modern SaaS Landing Page

FlowPilot is a production-quality, responsive SaaS landing page for a fictional productivity and workflow platform. Built with **React.js**, **Vite**, and **Lucide Icons**, it showcases modern UI/UX principles, clean component architecture, and responsive design suitable for portfolio presentation and client demonstrations.

![FlowPilot Preview](https://raw.githubusercontent.com/placeholder-preview.png)

---

## ✨ Features

- **Responsive Header & Navigation**: Sticky header with blur backdrop effect, smooth section scrolling, and an interactive mobile drawer navigation.
- **Hero Section & Realistic Dashboard Preview**: High-impact value proposition, announcement pill badge, CTA buttons, and a CSS/HTML-built interactive productivity dashboard preview (sidebar, task list with statuses, progress tracker bars, and key metric cards).
- **Social Proof / Trust Bar**: Clean fictional client wordmarks (Meridian, Vantage, Clearpath, NovaBridge, Skyland) with demo disclaimer.
- **6-Pillar Features Grid**: Clean cards featuring Lucide React icons, concise value props, and smooth lift/shadow hover transitions.
- **Two-Column Interactive Showcase**:
  - **Showcase A (Dashboard Overview)**: Benefit bullets with live Project Tracker preview.
  - **Showcase B (Team Collaboration)**: Live Activity Feed with fictional team member avatars and real-time styled actions.
- **3-Step "How It Works"**: Visual walkthrough from workspace setup to shipping deliverables.
- **Interactive Pricing Matrix**:
  - Monthly vs. Yearly billing toggle with 20% discount calculation.
  - 3 tiers: Starter ($0), Professional ($19 / $15), and Team ($49 / $39).
  - Highlighted "Most Popular" card styling with feature checklists.
- **Social Proof Testimonials**: Testimonial cards featuring star ratings and custom CSS avatars.
- **Accessible FAQ Accordion**: Expand/collapse animation with full keyboard and screen-reader accessibility (`aria-expanded`, `aria-controls`).
- **High-Converting Final CTA**: Soft gradient banner driving free trial conversions.
- **Lead Capture / Trial Signup Modal**:
  - Interactive email validation.
  - Keyboard accessible (closes on `Escape` key, traps backdrop clicks).
  - Simulated frontend submission with success state.
- **Comprehensive Footer**: Company links, product categories, legal links, and social links with SVG icons.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` and includes semantic HTML elements throughout.

---

## 🎨 Design System

| Element | Specification |
| :--- | :--- |
| **Primary Color** | Deep Blue (`#315CF5`) |
| **Primary Hover** | `#2749D4` |
| **Primary Light / Accent** | `#EBF0FF` |
| **Main Text** | `#172033` |
| **Secondary Text** | `#68738A` |
| **Borders** | `#E5EAF2` |
| **Light Background** | `#F7F9FC` |
| **Typography** | Inter, -apple-system, sans-serif |
| **Iconography** | Lucide React |

---

## 📁 Project Structure

```
flowpilot/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── DashboardPreview/
│   │   │   ├── DashboardPreview.jsx
│   │   │   └── DashboardPreview.css
│   │   ├── FAQ/
│   │   │   ├── FAQ.jsx
│   │   │   └── FAQ.css
│   │   ├── Features/
│   │   │   ├── Features.jsx
│   │   │   └── Features.css
│   │   ├── FinalCTA/
│   │   │   ├── FinalCTA.jsx
│   │   │   └── FinalCTA.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── HowItWorks/
│   │   │   ├── HowItWorks.jsx
│   │   │   └── HowItWorks.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.css
│   │   ├── Pricing/
│   │   │   ├── Pricing.jsx
│   │   │   └── Pricing.css
│   │   ├── ProductShowcase/
│   │   │   ├── ProductShowcase.jsx
│   │   │   └── ProductShowcase.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   └── TrustBar/
│   │       ├── TrustBar.jsx
│   │       └── TrustBar.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd flowpilot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## 🛠️ Build & Deployment

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Deploying to Vercel / Netlify
This project is configured out-of-the-box for single-click deployment on platforms like Vercel or Netlify:
- **Framework Preset**: Vite
- **Root Directory**: `flowpilot`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 📝 Demo Disclaimer
All company names (Meridian, Vantage, Clearpath, NovaBridge, Skyland), pricing tiers, and testimonials are fictional illustrative content designed exclusively for demonstration and portfolio showcasing purposes.

---

## 📄 License
MIT License. Free for portfolio use and customization.
