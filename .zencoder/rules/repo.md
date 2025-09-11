---
description: Repository Information Overview
alwaysApply: true
---

# DreadBike Website Information

## Summary

A modern, high-performance website for DreadBike motorcycle customization services built with Next.js 15, TypeScript, and Tailwind CSS. The site features responsive design, animations with Framer Motion, and 3D graphics with Three.js.

## Structure

- **app/**: Next.js App Router pages and components
- **components/**: Reusable UI components
- **lib/**: Utility functions, contexts, and data models
- **hooks/**: Custom React hooks
- **public/**: Static assets (images, favicons)
- **scripts/**: Utility scripts for image processing

## Language & Runtime

**Language**: TypeScript
**Version**: TypeScript 5.x
**Runtime**: Node.js 18+
**Framework**: Next.js 15.5.2
**Build System**: Next.js build system
**Package Manager**: npm

## Dependencies

**Main Dependencies**:

- next: 15.5.2
- react: 19.1.0
- react-dom: 19.1.0
- framer-motion: ^12.23.12
- three.js: ^0.180.0
- @react-three/fiber: ^9.3.0
- tailwind-merge: ^3.3.1
- lucide-react: ^0.543.0

**Development Dependencies**:

- typescript: ^5
- eslint: ^9
- tailwindcss: ^4
- webpack-bundle-analyzer: ^4.10.1
- lighthouse: ^12.0.0

## Build & Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Performance analysis
npm run analyze
npm run lighthouse
npm run perf
```

## Performance Optimization

**Next.js Config**:

- CSS optimization
- Package imports optimization for framer-motion and lucide-react
- Image optimization with WebP and AVIF formats
- Custom caching headers
- Bundle analysis with webpack-bundle-analyzer

**Core Web Vitals**:

- Lighthouse Score: 95+ across all metrics
- Optimized with code splitting and lazy loading
- Image optimization with Next.js Image component

## Project Components

**Frontend Pages**:

- Home page with hero section
- Shop with product listings
- Product detail pages
- Size guide for motorcycle gear
- Gallery of custom bikes
- About and contact pages

**UI Components**:

- Header with navigation
- Footer with site links
- Product cards and listings
- Cart and checkout flow
- Responsive images with optimization
- 3D motorcycle visualization

**State Management**:

- Cart context for shopping functionality
- Wishlist context for saved items
- Recently viewed products tracking
