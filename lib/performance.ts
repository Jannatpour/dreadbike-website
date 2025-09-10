// Performance optimization utilities

// Debounce function for performance
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Preload critical resources
export function preloadResource(href: string, as: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

// Prefetch resources for better performance
export function prefetchResource(href: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Optimize images based on device
export function getOptimizedImageSrc(
  baseSrc: string,
  width: number,
  quality: number = 75
): string {
  // For Next.js Image optimization
  return `${baseSrc}?w=${width}&q=${quality}`;
}

// Memory usage monitoring
export function getMemoryUsage(): number | null {
  if (typeof window === 'undefined' || !('memory' in performance)) return null;

  const memory = (
    performance as {
      memory: { usedJSHeapSize: number; jsHeapSizeLimit: number };
    }
  ).memory;
  return memory.usedJSHeapSize / memory.jsHeapSizeLimit;
}

// Performance timing utilities
export function measurePerformance(name: string, fn: () => void): void {
  if (process.env.NODE_ENV !== 'production') return;

  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
}

// Bundle size optimization
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

// Critical resource hints
export function addResourceHints(): void {
  if (typeof window === 'undefined') return;

  // Preconnect to external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
}
