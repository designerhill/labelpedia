# Labelpedia - Supplement Label Creation Platform

## 🚀 Overview

Labelpedia is a modern, professional landing page for a supplement label creation SaaS platform. Built with cutting-edge web technologies, it features a bold blue & cyan design theme with dynamic animations and glassmorphism effects.

## 🌐 Live Demo

- **Landing Page**: [Your deployed URL]
- **Application**: [https://supplement-labels.netlify.app/](https://supplement-labels.netlify.app/)

## ✨ Features

### Landing Page Sections
- **Hero**: Bold, dynamic hero section with animated gradient backgrounds and social proof
- **Features**: 8 feature cards showcasing platform capabilities
- **Compliance**: Global compliance support for 7+ countries (USA, UK, EU, Canada, Australia, Mexico, India)
- **Pricing**: 3-tier pricing plans (Free, Pro, Business) with unique icons and animations
- **Call to Action**: Final conversion section with social proof
- **Footer**: Comprehensive footer with social links and navigation

### Additional Pages
- **About**: Company information with mission, vision, values, and team
- **Contact**: Contact form with glassmorphism design
- **Help Center**: FAQ and documentation hub with search
- **Compliance Guide**: Detailed regulatory requirements by region
- **Privacy Policy**: GDPR-compliant privacy documentation
- **Terms of Service**: Legal terms and conditions
- **Cookie Policy**: Transparent cookie usage policy
- **GDPR Compliance**: European data protection compliance information

## 🎨 Design System

### Color Palette
- **Primary**: Blue-600 (#2563EB)
- **Secondary**: Cyan-500 (#06B6D4)
- **Backgrounds**: Slate-950, Slate-900
- **Accents**: Green-500, Purple-500, Yellow-500
- **Text**: White, Gray-300, Gray-400

### Key Design Elements
- **Glassmorphism**: Backdrop-blur effects with semi-transparent backgrounds
- **Gradient Animations**: Dynamic color transitions across all sections
- **Glowing Cards**: Hover effects with colored shadows
- **Circular Badges**: Gradient checkmarks and icons
- **Bold Typography**: 5xl-8xl headlines with gradient text

## 🛠️ Technologies

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 📦 Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd labelpedia

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Build for Production
```sh
npm run build
```

### Deployment Platforms

The project includes configuration files for multiple hosting platforms:

**Netlify** (Recommended)
- Uses `public/_redirects` for SPA routing
- Serverless functions in `netlify/functions/`
- Deploy: Connect your repo in Netlify dashboard, it will auto-build
- **Important**: Set `VITE_ORDER_API_PATH=/.netlify/functions/create-order` in your `.env` or Netlify environment variables

**Vercel**
- Uses `vercel.json` for routing configuration
- Edge functions in `api/`
- Auto-detects and deploys
- Uses default `VITE_ORDER_API_PATH=/api/create-order`

**Apache/cPanel**
- Uses `public/.htaccess` for mod_rewrite
- Upload `dist` folder contents

### Environment Requirements
- Node.js 18+ recommended
- npm or yarn package manager

## � Payments: Razorpay Integration

Razorpay checkout is wired to the Pricing buttons for paid plans (Pro, Business).

### Configure environment

1. Copy the example env and fill your keys

```sh
cp .env.example .env
# Set VITE_RAZORPAY_KEY_ID (public) for client
# Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your hosting environment (server-only)
```

2. Add server env vars in your hosting dashboard:
   - RAZORPAY_KEY_ID
   - RAZORPAY_KEY_SECRET

3. **Netlify-specific**: Set `VITE_ORDER_API_PATH=/.netlify/functions/create-order` in:
   - Your local `.env` file
   - Netlify dashboard: Site settings → Environment variables
   
   **Vercel**: Uses default `/api/create-order` (no change needed)

4. Optional: enable USD currency on your Razorpay account, or switch the currency in `Pricing.tsx` to `INR`.### How it works

- Client loads Razorpay SDK on demand (`src/lib/razorpay.ts`)
- Clicking a paid plan button calls a serverless function (`/api/create-order`) that creates an order
- The order id is used to open Razorpay Checkout
- On success, a simple alert is shown; extend this by verifying payment on the server

Key files:
- `netlify/functions/create-order.js` — Netlify Function to create an order
- `api/create-order.ts` — Vercel Edge Function to create an order
- `src/lib/razorpay.ts` — loads SDK and opens checkout
- `src/components/landing/Pricing.tsx` — wires the buttons to checkout

**Platform-specific notes:**
- Netlify uses Node.js runtime in `netlify/functions/`
- Vercel uses Edge runtime in `api/`
- Both accept the same POST body: `{ amount, currency, receipt }`

## �📁 Project Structure

```
labelpedia/
├── public/
│   ├── _redirects          # Netlify routing
│   ├── .htaccess          # Apache routing
│   ├── logo.jpg           # Brand logo
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page sections
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Compliance.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── pages/             # Route pages
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── HelpCenter.tsx
│   │   ├── ComplianceGuide.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Cookies.tsx
│   │   └── GDPR.tsx
│   ├── App.tsx            # Main app component
│   └── index.css          # Global styles & animations
├── vercel.json            # Vercel routing config
└── vite.config.ts         # Vite configuration
```

## 🎯 Key Features Implementation

### Custom Animations
All animations are defined in `src/index.css`:
- `gradient`: Background gradient animations
- `float`: Floating orb effects
- `fadeInUp`: Upward fade entrance
- `fadeInDown`: Downward fade entrance
- `pulse`: Pulsing glow effects

### Routing Configuration
The app uses React Router with proper SPA routing handled by platform-specific configs to prevent 404 errors on direct URL access.

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation with hamburger menu

## 🔧 Customization

### Update Brand Colors
Edit the gradient classes in components:
```tsx
// Change from blue/cyan to your colors
from-blue-600 to-cyan-500
```

### Modify Content
Each section is self-contained in `src/components/landing/` - edit directly.

### Add New Pages
1. Create page in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `Header.tsx`

## 📝 License

This project was built for supplement label creation services.

## 🤝 Support

For questions or issues, contact your development team.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
