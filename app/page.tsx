'use client';

import { useState, useEffect, useRef, lazy, Suspense, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Gallery = lazy(() => import('./components/Gallery'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for lazy loaded sections
const SectionLoader = memo(() => (
  <div className='flex items-center justify-center py-20'>
    <div className='w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin' />
  </div>
));
SectionLoader.displayName = 'SectionLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mark as mounted to prevent hydration issues
    setIsMounted(true);

    // Set window dimensions on client side
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleViewServices = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTuning = () => {
    // This function can be used to trigger booking modal or navigation
    console.log('Book tuning clicked');
  };

  return (
    <div className='min-h-screen bg-background text-foreground relative prevent-horizontal-scroll overflow-x-hidden'>
      {/* Global Background Effects */}
      <div className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none' />
      <div className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      {/* Responsive Header */}
      <Header />

      {/* Main Content with Header Spacing */}
      <div className='pt-16 sm:pt-20'>
        {/* Optimized Global Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`global-${i}`}
            className='fixed w-1 h-1 bg-yellow-400/20 rounded-full pointer-events-none hidden md:block'
            initial={{ opacity: 0 }}
            animate={{
              left: [`${20 + i * 15}%`, `${80 - i * 10}%`, `${20 + i * 15}%`],
              top: [`${20 + i * 15}%`, `${80 - i * 10}%`, `${20 + i * 15}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Optimized Mobile Particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`mobile-${i}`}
            className='fixed w-1 h-1 bg-yellow-400/30 rounded-full pointer-events-none md:hidden'
            initial={{ opacity: 0 }}
            animate={{
              left: [`${30 + i * 20}%`, `${70 - i * 15}%`, `${30 + i * 20}%`],
              top: [`${30 + i * 20}%`, `${70 - i * 15}%`, `${30 + i * 20}%`],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Advanced Scroll-Triggered Effects */}
        <motion.div
          className='fixed inset-0 pointer-events-none z-10'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 0, 0.1) 0%, transparent 50%)`,
          }}
        />

        {/* Dynamic Grid Overlay */}
        <motion.div
          className='fixed inset-0 pointer-events-none opacity-5'
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Optimized Morphing Shapes Background */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`morph-bg-${i}`}
            className='fixed pointer-events-none opacity-10'
            initial={{ opacity: 0 }}
            animate={{
              left: [`${20 + i * 30}%`, `${80 - i * 20}%`, `${20 + i * 30}%`],
              top: [`${20 + i * 25}%`, `${80 - i * 15}%`, `${20 + i * 25}%`],
              scale: [0.5, 1, 0.5],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 12 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 3,
            }}
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255, 255, 0, 0.1) 0%, transparent 70%)',
            }}
          />
        ))}

        {/* Advanced Energy Grid */}
        <div className='fixed inset-0 pointer-events-none opacity-5'>
          <motion.div
            className='absolute inset-0'
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 0, 0.05) 1px, transparent 1px)
            `,
              backgroundSize:
                '100px 100px, 100px 100px, 200px 200px, 200px 200px',
            }}
            animate={{
              backgroundPosition: [
                '0px 0px, 0px 0px, 0px 0px, 0px 0px',
                '100px 100px, 100px 100px, 200px 200px, 200px 200px',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Optimized Professional Floating Elements */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className='fixed w-2 h-2 bg-yellow-400/40 rounded-full pointer-events-none'
            initial={{
              x: `${30 + i * 20}%`,
              y: `${30 + i * 20}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [`${30 + i * 20}%`, `${70 - i * 10}%`, `${30 + i * 20}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Loading Screen - Always render for LCP optimization */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='fixed inset-0 z-50 bg-black flex items-center justify-center'
            >
              {/* Animated Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-yellow-900/20' />

              {/* Professional Loading Indicators */}
              {isMounted &&
                windowDimensions.width > 0 &&
                [...Array(windowDimensions.width < 768 ? 4 : 8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-yellow-400/60 rounded-full'
                    initial={{
                      x: `${20 + i * 10}%`,
                      y: `${30 + i * 8}%`,
                      opacity: 0,
                    }}
                    animate={{
                      y: [`${30 + i * 8}%`, `${70 - i * 5}%`, `${30 + i * 8}%`],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

              {/* Main Content */}
              <div className='relative z-10 text-center'>
                {/* Logo Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.5,
                  }}
                  className='mb-12'
                >
                  <Image
                    src='/images/dreadbike-gritty-logo.png'
                    alt='DreadBike'
                    width={192}
                    height={192}
                    className='w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-2xl'
                    priority
                  />
                </motion.div>

                {/* Title Animation */}
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 xs:mb-8 tracking-tighter'
                >
                  <motion.span
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '100% 50%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 1.5,
                    }}
                    className='bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent bg-300%'
                  >
                    DREADBIKE
                  </motion.span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className='text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold tracking-wide mb-8 xs:mb-10 sm:mb-12'
                >
                  <span className='text-yellow-400'>Unleash the Fear.</span>{' '}
                  <span className='text-white'>Ride Dread.</span>
                </motion.p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className='w-64 xs:w-72 sm:w-80 h-2 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden'
                >
                  <motion.div
                    className='h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full'
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 2.5 }}
                  />
                </motion.div>

                {/* Loading Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className='text-gray-400 text-base xs:text-lg'
                >
                  Forging your legend...
                </motion.p>
              </div>

              {/* Glitch Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 3,
                }}
                className='absolute inset-0 bg-yellow-400/10 mix-blend-screen'
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section ref={heroRef} className='relative'>
          <Hero onViewServices={handleViewServices} />
        </section>

        {/* Section Transition Divider */}
        <motion.div
          className='h-32 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent'
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </motion.section>

        {/* Section Transition Divider */}
        <motion.div
          className='h-32 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent'
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </motion.section>

        {/* Section Transition Divider */}
        <motion.div
          className='h-32 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent'
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        </motion.section>

        {/* Section Transition Divider */}
        <motion.div
          className='h-32 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent'
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <CTASection onBookTuning={handleBookTuning} />
          </Suspense>
        </motion.section>

        {/* Section Transition Divider */}
        <motion.div
          className='h-32 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent'
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Footer */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </motion.section>
      </div>
    </div>
  );
}
