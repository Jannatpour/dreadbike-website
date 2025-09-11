'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from './Logo';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
  },
  {
    name: 'Facebook',
    href: '#',
  },
  {
    name: 'YouTube',
    href: '#',
  },
  {
    name: 'Twitter',
    href: '#',
  },
];

const quickLinks = [
  { name: 'Professional Gear', href: '/gear' },
  { name: 'Custom Parts', href: '/parts' },
  { name: 'Premium Accessories', href: '/accessories' },
  { name: 'Product Catalog', href: '/catalog' },
];

const customerLinks = [
  { name: 'Size Guide', href: '/size-guide' },
  { name: 'Warranty Info', href: '/warranty' },
  { name: 'Shipping & Returns', href: '/shipping-returns' },
  { name: 'Track Your Order', href: '/track-order' },
];

const trustSignals = [
  { icon: '🏆', text: 'Industry Leading Quality' },
  { icon: '🚚', text: 'Free Shipping $500+' },
  { icon: '🔒', text: 'Secure Checkout' },
  { icon: '💯', text: '100% Satisfaction Guarantee' },
];

export default function Footer() {
  return (
    <footer className='bg-black border-t border-yellow-400/30 relative overflow-hidden py-8 xs:py-10 sm:py-12 md:py-16'>
      {/* Cinematic Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800' />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay" />

      {/* Animated Grid Pattern */}
      <motion.div
        className='absolute inset-0 opacity-10'
        animate={{
          backgroundPosition: ['0px 0px', '30px 30px'],
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
          backgroundSize: '30px 30px',
        }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-yellow-400/40 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [
              `${10 + (i % 6) * 15}%`,
              `${90 - (i % 5) * 12}%`,
              `${10 + (i % 6) * 15}%`,
            ],
            top: [
              `${10 + (i % 7) * 12}%`,
              `${90 - (i % 4) * 10}%`,
              `${10 + (i % 7) * 12}%`,
            ],
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-12 xs:py-16 sm:py-20 relative z-10'>
        <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 lg:gap-12'>
          {/* Enhanced Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className='sm:col-span-2 lg:col-span-2'
          >
            <motion.div whileHover={{ scale: 1.05 }} className='mb-8'>
              <Logo variant='clean' size='lg' className='mb-6' />
            </motion.div>

            <motion.p
              className='text-gray-300 leading-relaxed mb-8 max-w-lg text-lg'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your trusted source for{' '}
              <motion.span
                className='text-yellow-400 font-bold'
                whileHover={{ scale: 1.1 }}
              >
                professional-grade motorcycle gear
              </motion.span>
              , precision-engineered parts, and premium accessories. Every
              product rigorously tested by championship riders worldwide.
            </motion.p>

            <motion.div
              className='text-gray-400 space-y-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p
                className='flex items-center gap-2'
                whileHover={{ x: 5, color: 'rgb(255, 255, 0)' }}
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  📍
                </motion.span>
                Professional Gear Headquarters, Los Angeles, CA
              </motion.p>
              <motion.p
                className='flex items-center gap-2'
                whileHover={{ x: 5, color: 'rgb(255, 255, 0)' }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  📞
                </motion.span>
                +1 (800) GEAR-PRO
              </motion.p>
              <motion.p
                className='flex items-center gap-2'
                whileHover={{ x: 5, color: 'rgb(255, 255, 0)' }}
              >
                <motion.span
                  style={{ textShadow: '0 0 0px rgba(255, 255, 0, 0)' }}
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(255, 255, 0, 0)',
                      '0 0 10px rgba(255, 255, 0, 0.8)',
                      '0 0 0px rgba(255, 255, 0, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  ✉️
                </motion.span>
                orders@dreadbike.com
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50, x: -30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: 'spring',
              stiffness: 80,
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className='text-xl font-black text-yellow-400 mb-6'
              whileHover={{ scale: 1.05 }}
            >
              SHOP CATEGORIES
            </motion.h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group'
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className='w-2 h-2 bg-yellow-400 rounded-full'
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    />
                    <span className='group-hover:font-bold transition-all duration-300'>
                      {link.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 50, x: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: 'spring',
              stiffness: 80,
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className='text-xl font-black text-yellow-400 mb-6'
              whileHover={{ scale: 1.05 }}
            >
              CUSTOMER CARE
            </motion.h3>
            <ul className='space-y-3'>
              {customerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className='text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group'
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className='w-2 h-2 bg-green-400 rounded-full'
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    />
                    <span className='group-hover:font-bold transition-all duration-300'>
                      {link.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            {/* Trust Signals */}
            <motion.div
              className='mt-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className='text-sm font-bold text-green-400 mb-4'>
                WHY CHOOSE US:
              </h4>
              <div className='space-y-2'>
                {trustSignals.map((signal, index) => (
                  <motion.div
                    key={index}
                    className='flex items-center gap-2 text-sm text-gray-400'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5, color: 'rgb(34, 197, 94)' }}
                  >
                    <span className='text-base'>{signal.icon}</span>
                    <span>{signal.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: 'spring',
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className='border-t border-yellow-400/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center relative'
        >
          {/* Animated Border Effect */}
          <motion.div
            className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className='flex items-center gap-3 mb-6 md:mb-0 text-center md:text-left'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className='relative w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg border-2 border-orange-500/30'
            >
              <Image
                src='/images/dreadbike-gritty-logo.png'
                alt='DreadBike Logo'
                width={48}
                height={48}
                className='object-contain'
                priority
                onLoad={() => console.log('PNG logo loaded successfully')}
                onError={e => {
                  console.log('PNG failed to load, trying SVG:', e);
                  e.currentTarget.src = '/images/dreadbike-logo-gritty.svg';
                  e.currentTarget.onload = () =>
                    console.log('SVG logo loaded successfully');
                  e.currentTarget.onerror = () => {
                    console.log('SVG also failed, showing text fallback');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="text-orange-500 font-bold text-xl">DB</span>';
                  };
                }}
              />
            </motion.div>
            <p className='text-gray-400'>
              © 2025 DreadBike. All rights reserved.{' '}
              <motion.span
                className='text-yellow-400 font-bold'
                whileHover={{ scale: 1.1 }}
              >
                Fear is our trademark
              </motion.span>
              .
            </p>
          </motion.div>

          <motion.div
            className='flex space-x-8 text-sm'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms of Service', href: '/terms-of-service' },
              { name: 'Warranty', href: '/warranty' },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='text-gray-400 hover:text-yellow-400 transition-colors duration-300 relative group'
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <span className='group-hover:font-bold transition-all duration-300'>
                  {link.name}
                </span>
                <motion.div
                  className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300'
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
