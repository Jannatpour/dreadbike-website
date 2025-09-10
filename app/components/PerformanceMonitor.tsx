'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        // Log LCP (Largest Contentful Paint)
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }

        // Log FID (First Input Delay)
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        }

        // Log CLS (Cumulative Layout Shift)
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & {
            value: number;
            hadRecentInput: boolean;
          };
          if (!clsEntry.hadRecentInput) {
            console.log('CLS:', clsEntry.value);
          }
        }
      }
    });

    // Observe performance entries
    observer.observe({
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
    });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            // Log slow resources
            console.warn(
              'Slow resource:',
              resource.name,
              resource.duration + 'ms'
            );
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Cleanup
    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}
