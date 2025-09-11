'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';
import { throttle } from '@/lib/performance';
import { useWishlist } from '@/lib/wishlist-simple';
import { Search, Heart, ShoppingCart } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const Header = memo(() => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const { items: wishlist } = useWishlist();

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
    setIsMounted(true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(
        searchQuery.trim()
      )}`;
    }
  };

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-yellow-400/30 shadow-2xl'
            : 'bg-transparent'
        }`}
        style={{
          transform: `translateY(${isVisible ? '0' : '-100%'})`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 mobile-header-compact'>
          <div className='flex items-center justify-between h-14 xs:h-16 sm:h-20'>
            {/* Logo */}
            <div className='flex-shrink-0 min-w-0'>
              <Link href='/' className='block'>
                <Logo
                  variant='gritty'
                  size='md'
                  className='h-8 xs:h-9 sm:h-12 w-auto max-w-[120px] xs:max-w-[140px] sm:max-w-none mobile-logo-compact'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {navItems.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === '/shop' &&
                    (pathname.startsWith('/shop') ||
                      pathname.startsWith('/parts') ||
                      pathname.startsWith('/accessories') ||
                      pathname.startsWith('/gear') ||
                      pathname.startsWith('/catalog'))) ||
                  (item.href === '/gallery' &&
                    pathname.startsWith('/gallery')) ||
                  (item.href === '/about' && pathname.startsWith('/about')) ||
                  (item.href === '/contact' && pathname.startsWith('/contact'));

                return (
                  <motion.div
                    key={item.name}
                    initial={isMounted ? { opacity: 0, y: -20 } : false}
                    animate={isMounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative transition-colors duration-300 font-medium group px-3 py-2 ${
                        isActive
                          ? 'text-yellow-400'
                          : 'text-gray-200 hover:text-yellow-400'
                      }`}
                    >
                      <span className='relative z-10'>{item.name}</span>

                      {/* Clean underline for active item */}
                      <div
                        className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Search Bar - Desktop */}
            <div className='hidden lg:flex items-center flex-1 max-w-md mx-8'>
              <form onSubmit={handleSearch} className='w-full'>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search products...'
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                  />
                </div>
              </form>
            </div>

            {/* Cart Icon and Wishlist - Desktop */}
            <div className='hidden lg:flex items-center space-x-4'>
              <CartIcon onClick={toggleCart} />

              {/* Wishlist Icon */}
              <Link href='/wishlist' className='relative'>
                <button
                  className='p-2 text-gray-200 hover:text-yellow-400 transition-colors duration-300'
                  tabIndex={0}
                >
                  <Heart className='w-5 h-5' />
                  {wishlist.length > 0 && (
                    <span className='absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                      {wishlist.length}
                    </span>
                  )}
                </button>
              </Link>
            </div>

            {/* Mobile Cart, Wishlist, and Menu Buttons */}
            <div className='lg:hidden flex items-center space-x-1 flex-shrink-0 mobile-icons-compact'>
              <div className='flex items-center space-x-0.5'>
                <CartIcon onClick={toggleCart} />

                {/* Mobile Wishlist Icon */}
                <Link href='/wishlist' className='relative'>
                  <motion.button
                    className='p-1.5 text-gray-200 hover:text-yellow-400 transition-colors duration-300 min-w-[40px] min-h-[40px] flex items-center justify-center'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className='w-4 h-4' />
                    {wishlist.length > 0 && (
                      <span className='absolute -top-0.5 -right-0.5 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]'>
                        {wishlist.length}
                      </span>
                    )}
                  </motion.button>
                </Link>
              </div>

              <motion.button
                className='p-2 text-gray-200 hover:text-yellow-400 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation mobile-menu-button relative z-[100000] ml-1'
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={isMounted ? { opacity: 0, x: 20 } : false}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                aria-label='Toggle mobile menu'
                tabIndex={0}
              >
                <div className='w-5 h-5 flex flex-col justify-center items-center relative'>
                  <motion.span
                    className='w-full h-0.5 bg-current block absolute'
                    animate={
                      isMobileMenuOpen
                        ? { rotate: 45, y: 0 }
                        : { rotate: 0, y: -5 }
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
                        : { rotate: 0, y: 5 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className='lg:hidden fixed inset-0 z-[99999] mobile-menu-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='fixed inset-0 bg-black/90 backdrop-blur-md z-[99998]'
              onClick={closeMobileMenu}
            />

            <motion.div
              className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-yellow-400/30 overflow-y-auto z-[99999] shadow-2xl'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ minHeight: '100dvh' }}
            >
              <div className='p-6 h-full flex flex-col mobile-menu-content'>
                {/* Logo */}
                <div className='mb-8 pt-4'>
                  <Logo variant='gritty' size='lg' className='mx-auto' />
                </div>

                {/* Mobile Search */}
                <div className='mb-6'>
                  <form onSubmit={handleSearch}>
                    <div className='relative'>
                      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                      <input
                        type='text'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder='Search products...'
                        className='w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                      />
                    </div>
                  </form>
                </div>

                {/* Navigation Items */}
                <nav className='flex-1'>
                  <ul className='space-y-2'>
                    {/* Quick Actions */}
                    <li>
                      <Link href='/wishlist' onClick={closeMobileMenu}>
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <Heart className='w-5 h-5 mr-3 text-gray-200 group-hover:text-yellow-400 transition-colors duration-300' />
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Wishlist ({wishlist.length})
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          closeMobileMenu();
                          toggleCart();
                        }}
                        className='w-full'
                      >
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <ShoppingCart className='w-5 h-5 mr-3 text-gray-200 group-hover:text-yellow-400 transition-colors duration-300' />
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Cart
                          </span>
                        </div>
                      </button>
                    </li>

                    {navItems.map(item => {
                      const isActive =
                        pathname === item.href ||
                        (item.href === '/shop' &&
                          pathname.startsWith('/shop')) ||
                        (item.href === '/parts' &&
                          pathname.startsWith('/parts')) ||
                        (item.href === '/gallery' &&
                          pathname.startsWith('/gallery')) ||
                        (item.href === '/about' &&
                          pathname.startsWith('/about')) ||
                        (item.href === '/contact' &&
                          pathname.startsWith('/contact'));

                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className='block w-full'
                          >
                            <div
                              className={`p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center ${
                                isActive
                                  ? 'bg-yellow-400/10 border-l-4 border-yellow-400'
                                  : 'hover:bg-yellow-400/5'
                              }`}
                            >
                              <span
                                className={`text-lg font-bold transition-colors duration-300 ${
                                  isActive
                                    ? 'text-yellow-400'
                                    : 'text-gray-200 group-hover:text-yellow-400'
                                }`}
                              >
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}

                    {/* Additional Pages */}
                    <li className='pt-4'>
                      <div className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4'>
                        Customer Service
                      </div>
                    </li>

                    <li>
                      <Link href='/size-guide' onClick={closeMobileMenu}>
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Size Guide
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href='/warranty' onClick={closeMobileMenu}>
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Warranty Info
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href='/shipping-returns' onClick={closeMobileMenu}>
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Shipping & Returns
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href='/track-order' onClick={closeMobileMenu}>
                        <div className='p-4 rounded-lg transition-all duration-300 group min-h-[56px] flex items-center hover:bg-yellow-400/5'>
                          <span className='text-lg font-bold text-gray-200 group-hover:text-yellow-400 transition-colors duration-300'>
                            Track Your Order
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Contact Info */}
                <div className='mt-8 pt-6 border-t border-yellow-400/20'>
                  <div className='text-center space-y-3'>
                    <p className='text-gray-400 text-sm'>
                      Ready to unleash the fear?
                    </p>
                    <a
                      href='tel:+16666373232'
                      className='block text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors duration-300'
                    >
                      +1 (666) DREAD-BIKE
                    </a>
                    <a
                      href='mailto:contact@dreadbike.com'
                      className='block text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-300'
                    >
                      contact@dreadbike.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className='mt-6 flex justify-center space-x-6'>
                  {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map(
                    social => (
                      <a
                        key={social}
                        href='#'
                        className='w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300'
                      >
                        <span className='text-sm font-bold'>
                          {social.charAt(0)}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>

      {/* Cart Drawer - Moved outside header for proper z-index layering */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
});

Header.displayName = 'Header';

export default Header;
