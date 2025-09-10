'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { throttle } from '@/lib/performance';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const throttledScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      // Show header when at top or scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);

      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }, 16); // ~60fps

    return throttledScroll();
  }, [isMobileMenuOpen, lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-yellow-400/30 shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 sm:h-20'>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex-shrink-0'
            >
              <Link href='/' className='block'>
                <Logo
                  variant='gritty'
                  size='md'
                  className='h-10 sm:h-12 w-auto'
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-8'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className='relative text-gray-200 hover:text-yellow-400 transition-colors duration-300 font-medium group px-3 py-2'
                  >
                    <span className='relative z-10'>{item.name}</span>
                    <motion.div
                      className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300'
                      whileHover={{ width: '100%' }}
                    />
                    <motion.div
                      className='absolute inset-0 bg-yellow-400/10 rounded-lg scale-0 group-hover:scale-100 transition-all duration-300 -z-10'
                      whileHover={{ scale: 1 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              className='hidden lg:block'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href='/contact'>
                <motion.button
                  className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-lg border-2 border-yellow-300/50 shadow-lg hover:shadow-xl transition-all duration-300'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Tuning
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className='lg:hidden p-3 text-gray-200 hover:text-yellow-400 transition-colors duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation mobile-menu-button relative z-[10001]'
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              aria-label='Toggle mobile menu'
            >
              <div className='w-6 h-6 flex flex-col justify-center items-center relative'>
                <motion.span
                  className='w-full h-0.5 bg-current block absolute'
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 0 }
                      : { rotate: 0, y: -6 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className='w-full h-0.5 bg-current block absolute'
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className='w-full h-0.5 bg-current block absolute'
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: 0 }
                      : { rotate: 0, y: 6 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className='lg:hidden fixed inset-0 z-[9999] mobile-menu-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='fixed inset-0 bg-black/90 backdrop-blur-md'
              onClick={closeMobileMenu}
            />

            <motion.div
              className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-l border-yellow-400/30 overflow-y-auto z-[10000]'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10 mix-blend-overlay" />

              <div className='relative z-10 p-6 h-full flex flex-col mobile-menu-content'>
                {/* Close Button */}
                <motion.button
                  className='absolute top-4 right-4 p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300'
                  onClick={closeMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  aria-label='Close mobile menu'
                >
                  <div className='w-6 h-6 flex items-center justify-center'>
                    <span className='text-2xl font-bold'>×</span>
                  </div>
                </motion.button>

                {/* Logo */}
                <motion.div
                  className='mb-8 pt-8'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Logo variant='gritty' size='lg' className='mx-auto' />
                </motion.div>

                {/* Navigation Items */}
                <nav className='flex-1'>
                  <ul className='space-y-2'>
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className='block w-full'
                        >
                          <motion.div
                            className='p-4 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/10 transition-all duration-300 group min-h-[56px] flex items-center touch-manipulation'
                            whileHover={{ x: 10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className='flex items-center justify-between'>
                              <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                                {item.name}
                              </span>
                              <motion.div
                                className='w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100'
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                            </div>
                          </motion.div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Info */}
                <motion.div
                  className='mt-8 pt-6 border-t border-yellow-400/20'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className='text-center space-y-3'>
                    <p className='text-gray-400 text-sm'>
                      Ready to unleash the fear?
                    </p>
                    <motion.a
                      href='tel:+16666373232'
                      className='block text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors duration-300'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      +1 (666) DREAD-BIKE
                    </motion.a>
                    <motion.a
                      href='mailto:contact@dreadbike.com'
                      className='block text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-300'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      contact@dreadbike.com
                    </motion.a>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className='mt-6 flex justify-center space-x-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map(
                    (social, index) => (
                      <motion.a
                        key={social}
                        href='#'
                        className='w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300'
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <span className='text-sm font-bold'>
                          {social.charAt(0)}
                        </span>
                      </motion.a>
                    )
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;
