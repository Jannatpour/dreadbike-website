'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onViewServices: () => void;
}

export default function Hero({ onViewServices }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollY, [0, 500], [0, -20]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <section
      ref={heroRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 pt-14 xs:pt-16 sm:pt-20'
      suppressHydrationWarning
    >
      {/* Simplified Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' />
      <div
        className='absolute inset-0 opacity-5 mix-blend-overlay bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop)',
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Subtle Light Effect */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl' />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity }}
        className='relative z-10 text-center w-full max-w-6xl mx-auto'
        suppressHydrationWarning
      >
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='mb-8 sm:mb-12'
        >
          <motion.h1
            className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none text-center mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'>
              DREAD
            </span>
            <span className='block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 text-white'>
              BIKE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold tracking-wide px-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className='text-yellow-400'>Professional Gear</span>{' '}
            <span className='text-white'>for Ultimate Riders</span>
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='mb-8 sm:mb-12 text-center'
        >
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'>
            Race-proven gear, precision-engineered parts & professional
            accessories trusted by{' '}
            <span className='text-yellow-400 font-semibold'>
              championship riders worldwide
            </span>
            . Every product rigorously tested to exceed professional standards.
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='mb-8 sm:mb-12'
        >
          <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 text-center px-4'>
            <div className='flex flex-col items-center'>
              <div className='text-xl sm:text-2xl md:text-3xl font-black text-yellow-400 mb-1'>
                15,000+
              </div>
              <div className='text-xs sm:text-sm text-gray-400 font-semibold'>
                PROFESSIONAL RIDERS
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='text-xl sm:text-2xl md:text-3xl font-black text-orange-400 mb-1'>
                100%
              </div>
              <div className='text-xs sm:text-sm text-gray-400 font-semibold'>
                QUALITY GUARANTEE
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='text-xl sm:text-2xl md:text-3xl font-black text-blue-400 mb-1'>
                24HR
              </div>
              <div className='text-xs sm:text-sm text-gray-400 font-semibold'>
                EXPRESS SHIPPING
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4'
        >
          <Link href='/shop' className='w-full sm:w-auto'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:min-w-[200px]'
            >
              SHOP GEAR NOW
            </Button>
          </Link>

          <Link href='/contact' className='w-full sm:w-auto'>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:min-w-[200px] bg-transparent'
            >
              CUSTOM BUILD
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
        onClick={onViewServices}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-2'
        >
          <span className='text-yellow-400 text-sm font-bold'>SCROLL</span>
          <div className='w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center'>
            <motion.div
              className='w-1 h-3 bg-yellow-400 rounded-full mt-2'
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
