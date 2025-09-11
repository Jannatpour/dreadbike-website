'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  addedAt: Date;
}

interface WishlistState {
  items: WishlistItem[];
  itemCount: number;
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: Omit<WishlistItem, 'addedAt'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (item: Omit<WishlistItem, 'addedAt'>) => 'added' | 'removed';
} | null>(null);

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return state; // Item already in wishlist
      }

      const newItem: WishlistItem = {
        ...action.payload,
        addedAt: new Date(),
      };

      return {
        ...state,
        items: [...state.items, newItem],
        itemCount: state.items.length + 1,
      };
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        itemCount: updatedItems.length,
      };
    }
    
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        items: [],
        itemCount: 0,
      };
    
    case 'LOAD_WISHLIST': {
      return {
        ...state,
        items: action.payload,
        itemCount: action.payload.length,
      };
    }
    
    default:
      return state;
  }
};

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0,
  });

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('dreadbike-wishlist');
    if (savedWishlist) {
      try {
        const wishlistItems = JSON.parse(savedWishlist).map((item: WishlistItem & { addedAt: string }) => ({
          ...item,
          addedAt: new Date(item.addedAt),
        }));
        dispatch({ type: 'LOAD_WISHLIST', payload: wishlistItems });
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dreadbike-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const isInWishlist = (id: string): boolean => {
    return state.items.some(item => item.id === id);
  };

  const toggleWishlist = (item: Omit<WishlistItem, 'addedAt'>): 'added' | 'removed' => {
    if (isInWishlist(item.id)) {
      dispatch({ type: 'REMOVE_ITEM', payload: item.id });
      return 'removed';
    } else {
      dispatch({ type: 'ADD_ITEM', payload: item });
      return 'added';
    }
  };

  return (
    <WishlistContext.Provider value={{ state, dispatch, isInWishlist, toggleWishlist }}>
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
