'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Wrench } from 'lucide-react';

export default function ShopHero() {
  const features = [
    { icon: Shield, text: 'Premium Protection' },
    { icon: Zap, text: 'High Performance' },
    { icon: Wrench, text: 'Expert Crafted' },
  ];

  return (
    <section className='relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black' />
      <div
        className='absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop)',
        }}
      />

      {/* Dynamic Energy Grid */}
      <div className='absolute inset-0 opacity-30'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 0, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 0, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
          }}
          animate={{
            backgroundPosition: [
              '0px 0px, 0px 0px, 0px 0px, 0px 0px',
              '60px 60px, 60px 60px, 120px 120px, 120px 120px',
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Enhanced Particle System */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className='absolute w-1 h-1 bg-yellow-400/40 rounded-full'
          initial={{
            x: `${15 + i * 7}%`,
            y: `${15 + i * 6}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [`${15 + i * 6}%`, `${85 - i * 4}%`, `${15 + i * 6}%`],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Energy Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className='absolute border border-yellow-400/20 rounded-full'
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}

      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Main Title with Enhanced Effects */}
            <motion.h1
              className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.span
                className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 relative'
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                SHOP GEAR
                {/* Glow effect */}
                <motion.div
                  className='absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 blur-sm'
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  SHOP GEAR
                </motion.div>
              </motion.span>

              <motion.span
                className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4 text-white relative'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                RIDE DREAD
                {/* Underline effect */}
                <motion.div
                  className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-300'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.div
              className='max-w-4xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8'>
                <span className='text-yellow-400 font-bold'>
                  Professional gear
                </span>{' '}
                and{' '}
                <span className='text-yellow-300 font-bold'>custom parts</span>{' '}
                forged for the{' '}
                <span className='text-yellow-400 font-bold'>
                  ultimate riding experience
                </span>
              </p>

              {/* Feature Pills */}
              <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className='flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-yellow-400/30'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 0, 0.1)',
                    }}
                  >
                    <feature.icon className='w-4 h-4 text-yellow-400' />
                    <span className='text-sm font-semibold text-gray-300'>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
