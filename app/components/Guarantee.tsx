'use client';

import { motion } from 'framer-motion';

export default function Guarantee() {
  const guarantees = [
    {
      icon: '🛡️',
      title: 'LIFETIME WARRANTY',
      description: 'Full coverage on all professional-grade components',
      details: 'Manufacturing defects covered for life',
    },
    {
      icon: '💯',
      title: '100% SATISFACTION',
      description: 'Not satisfied? Full refund within 30 days',
      details: 'No questions asked guarantee',
    },
    {
      icon: '🚀',
      title: 'PERFORMANCE PROMISE',
      description: 'Guaranteed performance improvement or money back',
      details: 'Measurable results or full refund',
    },
    {
      icon: '🔧',
      title: 'FREE INSTALLATION',
      description: 'Professional installation included with purchase',
      details: 'Certified technician service',
    },
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5' />

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-green-400/30 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [
              `${10 + (i % 6) * 15}%`,
              `${90 - (i % 5) * 12}%`,
              `${10 + (i % 6) * 15}%`,
            ],
            top: [`${20 + i * 10}%`, `${80 - i * 8}%`, `${20 + i * 10}%`],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + (i % 3),
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.h2
            className='text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6'
            animate={{
              textShadow: [
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 20px rgba(34, 197, 94, 0.6)',
                '0 0 0px rgba(34, 197, 94, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            OUR <span className='text-green-400'>IRONCLAD</span> GUARANTEE
          </motion.h2>
          <div className='w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6' />
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            We stand behind every product with industry-leading warranties and
            guarantees. Your satisfaction and performance are our{' '}
            <span className='text-green-400 font-bold'>absolute priority</span>.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className='text-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group'
            >
              <motion.div
                className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'easeInOut',
                }}
              >
                {guarantee.icon}
              </motion.div>

              <h3 className='text-green-400 font-black text-lg mb-3 group-hover:text-green-300 transition-colors duration-300'>
                {guarantee.title}
              </h3>

              <p className='text-white font-semibold mb-2 text-sm'>
                {guarantee.description}
              </p>

              <p className='text-gray-400 text-xs'>{guarantee.details}</p>

              {/* Hover Effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-400/30 rounded-full px-8 py-4'>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='text-green-400 text-xl'
            >
              ✓
            </motion.span>
            <span className='text-green-400 font-bold text-lg'>
              RISK-FREE PURCHASE - GUARANTEED RESULTS
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className='text-green-400 text-xl'
            >
              ✓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
