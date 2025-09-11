'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

interface CartIconProps {
  onClick: () => void;
  className?: string;
}

export default function CartIcon({ onClick, className = '' }: CartIconProps) {
  const { state } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative p-1.5 text-gray-200 hover:text-yellow-400 transition-colors duration-300 min-w-[40px] min-h-[40px] flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Shopping cart with ${state.itemCount} items`}
    >
      <ShoppingCart className='w-4 h-4 lg:w-6 lg:h-6' />

      {/* Cart item count badge */}
      {state.itemCount > 0 && (
        <motion.div
          className='absolute -top-0.5 -right-0.5 bg-yellow-400 text-black text-xs font-bold rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-[10px] lg:text-xs'
          initial={{ scale: 0 }}
          animate={{ scale: isAnimating ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        >
          {state.itemCount > 99 ? '99+' : state.itemCount}
        </motion.div>
      )}

      {/* Pulse effect when items are added */}
      {isAnimating && (
        <motion.div
          className='absolute inset-0 bg-yellow-400/20 rounded-full'
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
