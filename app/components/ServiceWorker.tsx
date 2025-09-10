'use client';

import { useEffect } from 'react';

export default function ServiceWorker() {
  useEffect(() => {
    // Only register service worker in production
    if (process.env.NODE_ENV !== 'production') return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}
