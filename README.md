# DreadBike Website

A modern, high-performance website for DreadBike motorcycle customization services.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js** for 3D graphics
- **Responsive Design** for all devices
- **Performance Optimized** with lazy loading and code splitting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse performance audit
npm run perf         # Build, start, and audit performance
```

## Project Structure

```
app/
├── components/          # React components
├── shop/               # Shop pages
├── gallery/            # Gallery pages
├── about/              # About page
├── contact/            # Contact page
├── services/           # Services page
└── layout.tsx          # Root layout

components/
└── ui/                 # Reusable UI components

lib/
├── bike-models.ts      # Bike model data
├── cart-context.tsx    # Shopping cart context
├── wishlist-context.tsx # Wishlist context
└── utils.ts            # Utility functions

hooks/
└── useIntersectionObserver.ts # Custom hooks

public/
├── images/             # Static images
├── models/             # 3D models
└── textures/           # Texture files
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI components

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and lazy loading
- **Images**: Optimized with Next.js Image component

## Deployment

The website is deployed on Vercel and automatically builds from the main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.