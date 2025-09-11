'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Marcus Rodriguez',
    title: 'MotoGP Professional Rider',
    rating: 5,
    text: "DreadBike's gear saved my career. Their titanium exhaust system gave me the edge I needed to win the championship. The quality is unmatched - every component is race-proven and built to last.",
    image: '/images/rider-1.jpg',
    verified: true,
    location: 'Barcelona, Spain',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Track Day Enthusiast',
    rating: 5,
    text: "I've tried gear from every major brand, but nothing compares to DreadBike's attention to detail. Their carbon fiber body kit transformed my bike's performance and looks absolutely stunning.",
    image: '/images/rider-2.jpg',
    verified: true,
    location: 'Tokyo, Japan',
  },
  {
    id: 3,
    name: 'Jake Thompson',
    title: 'Stunt Performer',
    rating: 5,
    text: 'When your life depends on your gear, you choose DreadBike. Their professional-grade helmets and protective equipment have kept me safe through countless stunts. Worth every penny.',
    image: '/images/rider-3.jpg',
    verified: true,
    location: 'Los Angeles, USA',
  },
  {
    id: 4,
    name: 'Elena Volkov',
    title: 'Racing Team Owner',
    rating: 5,
    text: 'We outfit our entire racing team with DreadBike gear. The performance gains are measurable, and the reliability is crucial for competitive racing. Our riders trust nothing else.',
    image: '/images/rider-4.jpg',
    verified: true,
    location: 'Moscow, Russia',
  },
];

export default function Testimonials() {
  return (
    <section className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10 mix-blend-overlay" />

      {/* Animated Grid Pattern */}
      <motion.div
        className='absolute inset-0 opacity-20'
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Success Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-green-400/40 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [
              `${15 + (i % 4) * 20}%`,
              `${85 - (i % 3) * 15}%`,
              `${15 + (i % 4) * 20}%`,
            ],
            top: [
              `${15 + (i % 5) * 16}%`,
              `${85 - (i % 4) * 12}%`,
              `${15 + (i % 5) * 16}%`,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
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
            <span className='holographic'>TRUSTED BY</span>{' '}
            <span className='neon-text text-green-400'>CHAMPIONS</span>
          </motion.h2>
          <p className='text-base xs:text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'>
            Don't just take our word for it. Hear from{' '}
            <span className='text-green-400 font-semibold'>
              professional riders
            </span>
            , <span className='text-blue-400 font-semibold'>racing teams</span>,
            and{' '}
            <span className='text-yellow-400 font-semibold'>
              performance enthusiasts
            </span>{' '}
            who trust DreadBike gear with their lives and careers.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                z: 50,
              }}
              className='group perspective-1000'
            >
              <Card className='relative h-full glass-morphism border-0 overflow-hidden'>
                {/* Verified Badge */}
                {testimonial.verified && (
                  <motion.div
                    className='absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-green-600'
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    ✓ VERIFIED
                  </motion.div>
                )}

                {/* Enhanced Background Effects */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-20'
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <CardHeader className='relative z-10 pb-4'>
                  <div className='flex items-start gap-4'>
                    {/* Profile Image Placeholder */}
                    <motion.div
                      className='w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-2xl'
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      👤
                    </motion.div>

                    <div className='flex-1'>
                      <h3 className='text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300'>
                        {testimonial.name}
                      </h3>
                      <p className='text-sm text-green-400 font-semibold mb-2'>
                        {testimonial.title}
                      </p>
                      <p className='text-xs text-gray-500'>
                        📍 {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className='flex items-center gap-1 mt-4'>
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1 + starIndex * 0.1,
                          duration: 0.5,
                        }}
                      >
                        <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className='relative z-10 pt-0'>
                  <CardDescription className='text-gray-300 leading-relaxed text-base italic'>
                    "{testimonial.text}"
                  </CardDescription>
                </CardContent>

                {/* Shimmer Effect */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className='mt-20 text-center'
        >
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
            {/* Average Rating */}
            <motion.div
              className='flex flex-col items-center'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='text-4xl md:text-5xl font-black text-yellow-400 mb-2'
                animate={{
                  textShadow: [
                    '0 0 0px rgba(255, 255, 0, 0)',
                    '0 0 15px rgba(255, 255, 0, 0.6)',
                    '0 0 0px rgba(255, 255, 0, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                4.9/5
              </motion.div>
              <div className='text-sm text-gray-400 font-semibold'>
                AVERAGE RATING
              </div>
              <div className='flex gap-1 mt-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
            </motion.div>

            {/* Total Reviews */}
            <motion.div
              className='flex flex-col items-center'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='text-4xl md:text-5xl font-black text-green-400 mb-2'
                animate={{
                  textShadow: [
                    '0 0 0px rgba(34, 197, 94, 0)',
                    '0 0 15px rgba(34, 197, 94, 0.6)',
                    '0 0 0px rgba(34, 197, 94, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                2,847
              </motion.div>
              <div className='text-sm text-gray-400 font-semibold'>
                VERIFIED REVIEWS
              </div>
            </motion.div>

            {/* Satisfaction Rate */}
            <motion.div
              className='flex flex-col items-center'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='text-4xl md:text-5xl font-black text-blue-400 mb-2'
                animate={{
                  textShadow: [
                    '0 0 0px rgba(59, 130, 246, 0)',
                    '0 0 15px rgba(59, 130, 246, 0.6)',
                    '0 0 0px rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                98%
              </motion.div>
              <div className='text-sm text-gray-400 font-semibold'>
                SATISFACTION RATE
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
