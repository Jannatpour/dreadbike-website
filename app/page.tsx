'use client';

import { useState, useEffect, useRef, lazy, Suspense, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const FeaturedProducts = lazy(() => import('./components/FeaturedProducts'));
const TrustSignals = lazy(() => import('./components/TrustSignals'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const LimitedEdition = lazy(() => import('./components/LimitedEdition'));
const Guarantee = lazy(() => import('./components/Guarantee'));

const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

// Simplified loading component
const SectionLoader = memo(() => (
  <div className='flex items-center justify-center py-12'>
    <div className='w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin' />
  </div>
));
SectionLoader.displayName = 'SectionLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mark as mounted to prevent hydration issues
    setIsMounted(true);

    // Reduced loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
    <div
      className='min-h-screen bg-background text-foreground relative prevent-horizontal-scroll overflow-x-hidden'
      suppressHydrationWarning
    >
      {/* Simplified Background */}
      <div className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none -z-20' />
      <div className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-3 mix-blend-overlay pointer-events-none -z-10" />

      {/* Responsive Header */}
      <Header />

      {/* Main Content */}
      <div>
        {/* Simplified Loading Screen */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='fixed inset-0 z-50 bg-black flex items-center justify-center'
            >
              <div className='text-center'>
                {/* Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className='mb-8'
                >
                  <Image
                    src='/images/dreadbike-gritty-logo.png'
                    alt='DreadBike'
                    width={120}
                    height={120}
                    className='w-24 h-24 md:w-32 md:h-32 mx-auto'
                    priority
                  />
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className='text-3xl md:text-4xl font-black mb-4 text-yellow-400'
                >
                  DREADBIKE
                </motion.h1>

                {/* Loading Spinner */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className='w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto'
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section ref={heroRef} className='relative'>
          <Hero onViewServices={handleViewServices} />
        </section>

        {/* Featured Products Section - Show products first for immediate value */}
        <motion.section
          initial={false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={isMounted ? { duration: 0.8 } : { duration: 0 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <FeaturedProducts />
          </Suspense>
        </motion.section>

        {/* Trust Signals Section - Build credibility immediately after products */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 30 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.6 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <TrustSignals />
          </Suspense>
        </motion.section>

        {/* About Section - Build trust after showing products */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </motion.section>

        {/* Features Section - Explain advantages after trust is built */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
          viewport={{ once: true }}
          className='relative'
        >
          <Suspense fallback={<SectionLoader />}>
            <CTASection onBookTuning={handleBookTuning} />
          </Suspense>
        </motion.section>

        {/* Footer */}
        <motion.section
          initial={isMounted ? { opacity: 0, y: 50 } : false}
          whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={isMounted ? { duration: 0.8 } : undefined}
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
