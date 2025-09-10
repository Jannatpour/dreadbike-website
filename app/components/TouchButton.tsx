'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TouchButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionEnd'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  glowEffect?: boolean;
  className?: string;
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-2 border-yellow-300/50 hover:from-yellow-300 hover:to-yellow-400',
  secondary:
    'bg-gradient-to-r from-orange-600 to-orange-700 text-white border-2 border-orange-400/50 hover:from-orange-500 hover:to-orange-600',
  outline:
    'bg-transparent text-yellow-400 border-2 border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400',
  ghost:
    'bg-transparent text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400',
};

const sizeClasses = {
  sm: 'px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base min-h-[40px] xs:min-h-[44px]',
  md: 'px-6 xs:px-8 py-3 xs:py-4 text-base xs:text-lg min-h-[44px] xs:min-h-[48px]',
  lg: 'px-8 xs:px-12 py-4 xs:py-6 text-lg xs:text-xl min-h-[48px] xs:min-h-[56px]',
  xl: 'px-10 xs:px-16 py-6 xs:py-8 text-xl xs:text-2xl min-h-[56px] xs:min-h-[64px]',
};

export default function TouchButton({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  glowEffect = false,
  className = '',
  disabled,
  ...props
}: TouchButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={cn(
        // Base styles
        'btn-touch relative font-bold rounded-xl shadow-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-gray-900',
        // Variant styles
        variantClasses[variant],
        // Size styles
        sizeClasses[size],
        // Width styles
        fullWidth ? 'w-full' : 'w-auto',
        // Disabled styles
        isDisabled && 'opacity-50 cursor-not-allowed',
        // Custom classes
        className
      )}
      whileHover={
        !isDisabled
          ? {
              scale: 1.02,
              ...(glowEffect && {
                boxShadow:
                  variant === 'primary'
                    ? '0 0 20px rgba(255, 255, 0, 0.5)'
                    : '0 0 20px rgba(255, 165, 0, 0.5)',
              }),
            }
          : {}
      }
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      disabled={isDisabled}
      {...props}
    >
      {/* Shimmer effect for primary buttons */}
      {variant === 'primary' && !isDisabled && (
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Button content */}
      <div className='relative z-10 flex items-center justify-center gap-2 xs:gap-3'>
        {icon && iconPosition === 'left' && (
          <span className='flex-shrink-0'>{icon}</span>
        )}

        {loading ? (
          <motion.div
            className='w-5 h-5 border-2 border-current border-t-transparent rounded-full'
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          <span className='flex-1 text-center'>{children}</span>
        )}

        {icon && iconPosition === 'right' && (
          <span className='flex-shrink-0'>{icon}</span>
        )}
      </div>

      {/* Glow effect */}
      {glowEffect && !isDisabled && (
        <motion.div
          className={cn(
            'absolute -inset-1 rounded-xl blur opacity-30',
            variant === 'primary' ? 'bg-yellow-400' : 'bg-orange-500'
          )}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.button>
  );
}
