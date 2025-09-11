'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '../app/shop/page';

interface RecentlyViewedContextType {
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;
  clearRecentlyViewed: () => void;
  removeFromRecentlyViewed: (productId: string) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  // Load recently viewed from localStorage on mount
  useEffect(() => {
    const savedRecentlyViewed = localStorage.getItem('dreadbike-recently-viewed');
    if (savedRecentlyViewed) {
      try {
        const products = JSON.parse(savedRecentlyViewed);
        setRecentlyViewed(products);
      } catch (error) {
        console.error('Error loading recently viewed from localStorage:', error);
      }
    }
  }, []);

  // Save recently viewed to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dreadbike-recently-viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewed(prev => {
      // Remove if already exists to avoid duplicates
      const filtered = prev.filter(p => p.id !== product.id);
      // Add to beginning and limit to 10 items
      return [product, ...filtered].slice(0, 10);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  const removeFromRecentlyViewed = (productId: string) => {
    setRecentlyViewed(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <RecentlyViewedContext.Provider 
      value={{ 
        recentlyViewed, 
        addToRecentlyViewed, 
        clearRecentlyViewed, 
        removeFromRecentlyViewed 
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
};
