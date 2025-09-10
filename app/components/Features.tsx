'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    title: 'PERFORMANCE TUNING',
    subtitle: 'PRECISION ENGINEERING',
    description:
      "Advanced ECU remapping and engine optimization to maximize your motorcycle's potential. Our certified technicians use state-of-the-art diagnostic equipment to deliver measurable performance gains.",
    details: [
      'ECU Remapping & Tuning',
      'Performance Air Intake Systems',
      'High-Flow Exhaust Upgrades',
      'Dyno Testing & Validation',
    ],
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    glowColor: 'shadow-orange-500/50',
  },
  {
    title: 'CUSTOM MODIFICATIONS',
    subtitle: 'BESPOKE SOLUTIONS',
    description:
      'Tailored modifications designed specifically for your riding style and performance goals. From engine builds to suspension upgrades, we create solutions that fit your exact needs.',
    details: [
      'Custom Engine Builds',
      'Suspension Tuning & Upgrades',
      'Brake System Enhancements',
      'Transmission Optimization',
    ],
    gradient: 'from-blue-500 via-blue-600 to-blue-700',
    glowColor: 'shadow-blue-500/50',
  },
  {
    title: 'AESTHETIC ENHANCEMENTS',
    subtitle: 'STUNNING VISUALS',
    description:
      "Transform your motorcycle's appearance with professional paint work, custom graphics, and premium accessories. Every detail is crafted to reflect your personal style and brand.",
    details: [
      'Custom Paint & Graphics',
      'Premium Body Kits',
      'LED Lighting Systems',
      'Custom Seat & Upholstery',
    ],
    gradient: 'from-orange-500 via-orange-600 to-orange-700',
    glowColor: 'shadow-orange-500/50',
  },
];

export default function Features() {
  return (
    <section className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' />
      <div className='absolute inset-0 cyber-grid opacity-30' />

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-orange-500/20 rounded-full'
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
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i % 2),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.h2
            className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 xs:mb-8'
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <span className='holographic'>WHY</span>{' '}
            <span className='neon-text text-accent'>DREADBIKE</span>
          </motion.h2>
          <p className='text-base xs:text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'>
            Our comprehensive approach combines{' '}
            <span className='text-orange-500 font-semibold'>
              technical expertise
            </span>
            ,{' '}
            <span className='text-blue-500 font-semibold'>
              custom solutions
            </span>
            , and{' '}
            <span className='text-orange-500 font-semibold'>
              quality craftsmanship
            </span>{' '}
            to deliver exceptional results.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 lg:gap-12'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.4,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.05,
                z: 50,
              }}
              className='group perspective-1000 relative'
            >
              <Card className='relative h-full glass-morphism border-0 overflow-hidden'>
                {/* Enhanced Background Effects */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-25 transition-opacity duration-700`}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Multiple Glow Layers */}
                <motion.div
                  className={`absolute inset-0 ${feature.glowColor} shadow-2xl group-hover:shadow-3xl transition-all duration-700`}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(183, 28, 28, 0)',
                      '0 0 30px rgba(183, 28, 28, 0.3)',
                      '0 0 0 0 rgba(183, 28, 28, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                />

                {/* Enhanced Shimmer Effect */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />

                {/* Pulsing Border Effect */}
                <motion.div
                  className='absolute inset-0 border-2 border-transparent rounded-lg'
                  whileHover={{
                    borderColor: 'rgba(183, 28, 28, 0.5)',
                    boxShadow: '0 0 20px rgba(183, 28, 28, 0.4)',
                  }}
                  animate={{
                    borderColor: [
                      'rgba(183, 28, 28, 0)',
                      'rgba(183, 28, 28, 0.3)',
                      'rgba(183, 28, 28, 0)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.8,
                  }}
                />

                {/* Advanced Morphing Background */}
                <motion.div
                  className='absolute inset-0 rounded-lg overflow-hidden'
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(183, 28, 28, 0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 80%, rgba(183, 28, 28, 0.2) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 50%, rgba(183, 28, 28, 0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 20%, rgba(183, 28, 28, 0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 1.2,
                  }}
                />

                {/* Floating Orbs */}
                {[...Array(3)].map((_, orbIndex) => (
                  <motion.div
                    key={`orb-${orbIndex}`}
                    className='absolute w-4 h-4 bg-red-500/30 rounded-full blur-sm'
                    style={{
                      left: `${20 + orbIndex * 30}%`,
                      top: `${20 + orbIndex * 20}%`,
                    }}
                    animate={{
                      x: [0, 20, -20, 0],
                      y: [0, -20, 20, 0],
                      scale: [0.5, 1, 0.5],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + orbIndex,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5 + orbIndex * 0.3,
                    }}
                  />
                ))}

                {/* Data Stream Effect */}
                <motion.div
                  className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
                >
                  <div className='flex flex-col gap-1'>
                    {[...Array(4)].map((_, streamIndex) => (
                      <motion.div
                        key={streamIndex}
                        className='h-0.5 bg-red-500/60 rounded'
                        animate={{
                          width: [0, `${15 + streamIndex * 5}px`, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: streamIndex * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                <CardHeader className='text-center relative z-10 p-8'>
                  {/* Feature Number */}
                  <motion.div
                    className='text-6xl mb-6 relative'
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className='w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg'>
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Enhanced Title Section */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <CardTitle className='text-4xl font-black mb-2'>
                      <motion.span
                        className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        whileHover={{
                          textShadow: '0 0 30px rgba(183, 28, 28, 0.8)',
                        }}
                      >
                        {feature.title}
                      </motion.span>
                    </CardTitle>

                    <motion.p
                      className='text-red-500 font-bold text-lg tracking-wider'
                      style={{ textShadow: '0 0 0px rgba(183, 28, 28, 0)' }}
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(183, 28, 28, 0)',
                          '0 0 15px rgba(183, 28, 28, 0.6)',
                          '0 0 0px rgba(183, 28, 28, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                    >
                      {feature.subtitle}
                    </motion.p>
                  </motion.div>
                </CardHeader>

                <CardContent className='relative z-10 p-8'>
                  <CardDescription className='text-lg mb-8 leading-relaxed text-gray-300'>
                    {feature.description}
                  </CardDescription>

                  <div className='space-y-4'>
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        className='flex items-center group/item'
                      >
                        <motion.div
                          className='w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300'
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className='text-gray-300 group-hover/item:text-white transition-colors duration-300'>
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className='mt-24 text-center'
        >
          <Card className='glass-morphism border-0 max-w-6xl mx-auto overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10' />
            <CardContent className='relative z-10 p-12'>
              <motion.h3
                className='text-5xl font-black mb-6'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <span className='holographic'>THE TRINITY OF TERROR</span>
              </motion.h3>
              <p className='text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto'>
                <span className='text-accent font-bold'>Speed</span>,{' '}
                <span className='text-accent font-bold'>Power</span>, and{' '}
                <span className='text-accent font-bold'>Fearless Design</span>
                —these are the three elements that make a DreadBike unstoppable.
                We don&apos;t just modify motorcycles; we forge mechanical
                weapons that were designed to dominate the road and strike fear
                into the hearts of ordinary riders.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
