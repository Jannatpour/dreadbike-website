# DreadBike - Production-Ready Landing Page

A cinematic, production-ready landing page for DreadBike, a gritty/evil-themed motorcycle tuning company. Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion for immersive visual storytelling.

## 🎨 Brand Identity

**DreadBike** - *Unleash the Fear. Ride Dread.*

- **Pronunciation**: /drɛd/ → "dred"
- **Meaning**: Fear / Terror, or respect & awe. Represents a bike so powerful it inspires fear and respect.
- **Theme**: Dark, gritty, aggressive motorcycle tuning company

## 🎯 Color Palette

| Role | Color | Hex Code |
|------|-------|----------|
| Background | Dark Charcoal Grey | `#1c1c1c` |
| Text | Light Grey | `#f2f2f2` |
| Accent Primary | Vibrant Orange | `#ff6600` |
| Accent Secondary | Electric Blue | `#00aaff` |
| Texture | Off-White Distressed | `#f8f8f8` |

## 🚀 Features

### Visual Effects & Animations
- **Cinematic Hero Section** with dramatic logo entrance and particle effects
- **Advanced Particle Systems** with 50+ floating particles and energy waves
- **Morphing Background Shapes** with complex transformations
- **Energy Grid Overlays** with dual-layer animated patterns
- **Floating Energy Orbs** with gradient colors and rotation
- **Mouse-Following Glow Effects** for interactive elements
- **Scroll-Triggered Animations** throughout all sections

### Custom Icons & Components
- **Custom Icon System** with 9 different icon types
- **Feature Icons**: Speed (⚡), Power (🔥), Fearless Design (💀)
- **CTA Icons**: Book Tuning, View Services
- **Social Media Icons**: Instagram, Facebook, Twitter, YouTube
- **Animated Icons** with hover effects and micro-interactions

### Page Sections
1. **Hero Section** - Full-screen cinematic experience with animated tagline
2. **About Section** - Company description with enhanced visual effects
3. **Features Section** - Three feature cards with custom icons and animations
4. **Gallery Section** - Image showcase with hover effects and transitions
5. **CTA Section** - Call-to-action with booking modal and custom icons
6. **Footer Section** - Social links with animated icons and company info

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: TailwindCSS with custom configuration
- **UI Components**: shadcn/ui (Button, Card, Dialog, Input)
- **Animations**: Framer Motion with advanced effects
- **Icons**: Custom SVG icon system
- **Performance**: Optimized for Vercel deployment

## 📁 Project Structure

```
app/
├── components/
│   ├── Hero.tsx           # Cinematic hero section
│   ├── About.tsx          # Company description
│   ├── Features.tsx       # Feature cards with icons
│   ├── Gallery.tsx        # Image showcase
│   ├── CTASection.tsx     # Call-to-action section
│   ├── Footer.tsx         # Footer with social links
│   ├── Logo.tsx           # Logo component
│   └── Icon.tsx           # Custom icon system
├── globals.css            # Global styles and animations
├── layout.tsx             # Root layout with metadata
└── page.tsx               # Main page with sections

public/
├── images/
│   ├── dreadbike-logo-clean.svg
│   ├── dreadbike-logo-gritty.png
│   ├── gallery-bike-*.jpg
│   └── texture-overlay.png
└── dreadbike.png

styles/
├── globals.css            # CSS variables and utilities
└── tailwind.config.ts     # Tailwind configuration
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dreakbike-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Vercel Deployment

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## 🎨 Customization

### Colors
Update colors in `app/globals.css`:
```css
:root {
  --background: #1c1c1c;
  --accent: #ff6600;
  --accent-secondary: #00aaff;
  /* ... */
}
```

### Icons
Add new icons in `app/components/Icon.tsx`:
```typescript
const iconPaths = {
  'new-icon': (
    <path d="..." fill="currentColor" />
  ),
  // ...
};
```

### Animations
Modify animations in `tailwind.config.ts`:
```typescript
animation: {
  'custom-animation': 'customKeyframes 2s infinite',
},
keyframes: {
  customKeyframes: {
    '0%': { /* ... */ },
    '100%': { /* ... */ },
  },
}
```

## ♿ Accessibility Features

- **Semantic HTML** with proper heading structure
- **ARIA Attributes** for screen readers
- **Keyboard Navigation** support
- **Focus Management** with visible focus rings
- **Color Contrast** meeting WCAG guidelines
- **Alt Text** for all images and icons

## 🔧 Performance Optimizations

- **Image Optimization** with Next.js Image component
- **Code Splitting** with dynamic imports
- **Lazy Loading** for non-critical components
- **GPU Acceleration** for animations
- **Efficient Re-renders** with React.memo
- **Bundle Optimization** with Next.js built-in optimizations

## 📱 Responsive Design

- **Mobile-First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly** interactions
- **Optimized Animations** for mobile devices
- **Reduced Particle Count** on smaller screens

## 🎬 Animation Details

### Hero Section
- Logo entrance with 3D rotation and scale
- Staggered text animations with spring physics
- Particle systems with 50+ floating elements
- Energy waves and morphing shapes
- Mouse-following glow effects

### Features Section
- Card hover effects with 3D transforms
- Icon animations with rotation and scale
- Gradient text effects
- Staggered entrance animations

### Gallery Section
- Image hover effects with scale and overlay
- Parallax scrolling effects
- Smooth transitions between states

## 🐛 Troubleshooting

### Common Issues

1. **Hydration Mismatch**
   - Fixed by using deterministic calculations instead of Math.random()
   - All animations use index-based positioning

2. **Performance Issues**
   - Reduced particle count on mobile devices
   - Optimized animation loops
   - Used GPU-accelerated transforms

3. **Icon Not Displaying**
   - Check icon name in Icon component
   - Verify SVG path is correct
   - Ensure proper color prop

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a production-ready project. For modifications, please:
1. Test thoroughly on multiple devices
2. Maintain performance standards
3. Follow TypeScript strict mode
4. Update documentation as needed

## 📞 Support

For technical support or questions about the DreadBike landing page, please contact the development team.

---

**DreadBike** - *Unleash the Fear. Ride Dread.*