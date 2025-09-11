'use client';

import { motion } from 'framer-motion';

export default function TrustSignals() {
  const trustSignals = [
    {
      icon: '🏆',
      title: 'INDUSTRY LEADER',
      description: '15+ Years Experience',
      stat: 'Since 2008',
    },
    {
      icon: '🔒',
      title: 'SECURE PAYMENTS',
      description: 'SSL Encrypted Checkout',
      stat: '100% Safe',
    },
    {
      icon: '🚚',
      title: 'FAST DELIVERY',
      description: 'Express Worldwide Shipping',
      stat: '24-48 Hours',
    },
    {
      icon: '💎',
      title: 'PREMIUM QUALITY',
      description: 'Professional Grade Only',
      stat: 'Guaranteed',
    },
    {
      icon: '🛡️',
      title: 'WARRANTY',
      description: 'Full Coverage Protection',
      stat: '2 Year',
    },
    {
      icon: '⭐',
      title: 'CUSTOMER RATED',
      description: 'Verified Reviews',
      stat: '4.9/5 Stars',
    },
  ];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5' />

      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-black text-white mb-4'>
            TRUSTED BY{' '}
            <span className='text-yellow-400'>PROFESSIONALS WORLDWIDE</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto' />
        </motion.div>

        {/* Trust Signals Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className='text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300'
            >
              <motion.div
                className='text-3xl mb-3'
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: 'easeInOut',
                }}
              >
                {signal.icon}
              </motion.div>
              <h3 className='text-yellow-400 font-black text-xs mb-1'>
                {signal.title}
              </h3>
              <p className='text-gray-300 text-xs mb-2'>{signal.description}</p>
              <div className='text-white font-bold text-sm'>{signal.stat}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 text-center'
        >
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>ISO 9001 Certified</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>DOT/ECE Approved</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>Professional Grade</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>Race Tested</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
