'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  size = 'md',
  className = '',
}: QuantitySelectorProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDecrease = () => {
    if (value > min && !disabled) {
      setIsAnimating(true);
      onChange(value - 1);
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  const handleIncrease = () => {
    if (value < max && !disabled) {
      setIsAnimating(true);
      onChange(value + 1);
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, newValue));
    onChange(clampedValue);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          button: 'w-8 h-8',
          input: 'w-12 h-8 text-sm',
          icon: 'w-3 h-3',
        };
      case 'lg':
        return {
          button: 'w-12 h-12',
          input: 'w-16 h-12 text-lg',
          icon: 'w-5 h-5',
        };
      default: // md
        return {
          button: 'w-10 h-10',
          input: 'w-14 h-10 text-base',
          icon: 'w-4 h-4',
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrease}
        disabled={disabled || value <= min}
        className={`${sizeClasses.button} border-gray-600 hover:border-yellow-400 hover:bg-yellow-400/10 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <Minus className={sizeClasses.icon} />
      </Button>
      
      <motion.div
        className="relative"
        animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.15 }}
      >
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          disabled={disabled}
          className={`
            ${sizeClasses.input}
            text-center font-semibold text-white bg-gray-700 border border-gray-600 rounded
            focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        />
      </motion.div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrease}
        disabled={disabled || value >= max}
        className={`${sizeClasses.button} border-gray-600 hover:border-yellow-400 hover:bg-yellow-400/10 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <Plus className={sizeClasses.icon} />
      </Button>
    </div>
  );
}


