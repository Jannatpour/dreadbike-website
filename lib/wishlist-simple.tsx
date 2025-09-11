'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  addedAt: Date;
}

interface WishlistContextType {
  items: WishlistItem[];
  itemCount: number;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (item: Omit<WishlistItem, 'addedAt'>) => 'added' | 'removed';
  addToWishlist: (item: Omit<WishlistItem, 'addedAt'>) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('dreadbike-wishlist');
    if (savedWishlist) {
      try {
        const wishlistItems = JSON.parse(savedWishlist).map((item: WishlistItem & { addedAt: string }) => ({
          ...item,
          addedAt: new Date(item.addedAt),
        }));
        setItems(wishlistItems);
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dreadbike-wishlist', JSON.stringify(items));
  }, [items]);

  const isInWishlist = (id: string): boolean => {
    return items.some(item => item.id === id);
  };

  const addToWishlist = (item: Omit<WishlistItem, 'addedAt'>) => {
    if (!isInWishlist(item.id)) {
      const newItem: WishlistItem = {
        ...item,
        addedAt: new Date(),
      };
      setItems(prev => [...prev, newItem]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (item: Omit<WishlistItem, 'addedAt'>): 'added' | 'removed' => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
      return 'removed';
    } else {
      addToWishlist(item);
      return 'added';
    }
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const value: WishlistContextType = {
    items,
    itemCount: items.length,
    isInWishlist,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};


