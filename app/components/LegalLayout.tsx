'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
}

export default function LegalLayout({
  children,
  title,
  lastUpdated,
}: LegalLayoutProps) {
  return (
    <div className='min-h-screen bg-background text-foreground relative'>
      {/* Background Effects */}
      <div
        className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        style={{ zIndex: -3 }}
      />
      <div
        className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay"
        style={{ zIndex: -2 }}
      />

      {/* Animated Grid Pattern */}
      <motion.div
        className='fixed inset-0 opacity-10'
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: -1,
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='fixed w-1 h-1 bg-orange-500/20 rounded-full pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{
            left: [`${10 + i * 10}%`, `${90 - i * 8}%`, `${10 + i * 10}%`],
            top: [`${10 + i * 8}%`, `${90 - i * 6}%`, `${10 + i * 8}%`],
            y: [0, -50, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Header */}
      <header className='relative z-10 border-b border-yellow-400/30 bg-black/50 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex items-center justify-between'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href='/' className='block'>
                <Logo variant='gritty' size='lg' />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-right'
            >
              <p className='text-gray-400 text-sm'>
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='text-center mb-12'
          >
            <motion.h1
              className='text-4xl xs:text-5xl sm:text-6xl font-black mb-6'
              whileHover={{ scale: 1.02 }}
            >
              <span className='bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent'>
                {title}
              </span>
            </motion.h1>

            <motion.div
              className='w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto'
              initial={{ width: 0 }}
              animate={{ width: '8rem' }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='prose prose-lg prose-invert max-w-none'
          >
            {children}
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='mt-16 text-center'
          >
            <Link
              href='/'
              className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105'
            >
              <motion.span
                animate={{ x: [-2, 2, -2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ←
              </motion.span>
              Back to DreadBike
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className='relative z-10 border-t border-yellow-400/30 bg-black/50 backdrop-blur-sm mt-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='text-center'>
            <p className='text-gray-400 mb-4'>
              © 2025 DreadBike. All rights reserved.
            </p>
            <div className='flex justify-center space-x-8 text-sm'>
              <Link
                href='/privacy-policy'
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms-of-service'
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-300'
              >
                Terms of Service
              </Link>
              <Link
                href='/warranty'
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-300'
              >
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
