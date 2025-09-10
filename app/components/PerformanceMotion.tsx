'use client';

import { motion, MotionProps } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useIntersectionObserver';
import { prefersReducedMotion } from '@/lib/performance';

interface PerformanceMotionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  freezeOnceVisible?: boolean;
  disableAnimation?: boolean;
}

export default function PerformanceMotion({
  children,
  className = '',
  threshold = 0.1,
  freezeOnceVisible = true,
  disableAnimation = false,
  ...motionProps
}: PerformanceMotionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    freezeOnceVisible,
  });

  const shouldAnimate = !disableAnimation && !prefersReducedMotion();

  // Default animation props for better performance
  const defaultProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
    ...motionProps,
  };

  // If animations are disabled or user prefers reduced motion, show static content
  if (!shouldAnimate) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      {...defaultProps}
    >
      {children}
    </motion.div>
  );
}

// Optimized section wrapper
export function PerformanceSection({
  children,
  className = '',
  threshold = 0.1,
  ...props
}: Omit<PerformanceMotionProps, 'motionProps'>) {
  return (
    <PerformanceMotion
      className={className}
      threshold={threshold}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </PerformanceMotion>
  );
}

// Optimized card wrapper
export function PerformanceCard({
  children,
  className = '',
  delay = 0,
  ...props
}: Omit<PerformanceMotionProps, 'motionProps'> & { delay?: number }) {
  return (
    <PerformanceMotion
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: 'easeOut' 
      }}
      {...props}
    >
      {children}
    </PerformanceMotion>
  );
}
