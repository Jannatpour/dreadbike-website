'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const galleryImages = [
  {
    src: '/images/gallery-bike-1.jpg',
    alt: 'Professional Motorcycle Performance Tuning',
    title: 'PERFORMANCE TUNING',
    subtitle: 'ECU Remapping & Engine Optimization',
    category: 'Performance',
    gradient: 'from-yellow-400 to-yellow-500',
  },
  {
    src: '/images/gallery-bike-2.jpg',
    alt: 'Custom Motorcycle Modifications & Upgrades',
    title: 'CUSTOM MODIFICATIONS',
    subtitle: 'Bespoke Solutions & Upgrades',
    category: 'Custom',
    gradient: 'from-yellow-300 to-yellow-400',
  },
  {
    src: '/images/gallery-bike-3.jpg',
    alt: 'Professional Engine Build & Tuning',
    title: 'ENGINE BUILD',
    subtitle: 'High-Performance Engine Work',
    category: 'Engine',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    src: '/images/gallery-bike-4.jpg',
    alt: 'Suspension Tuning & Brake Upgrades',
    title: 'SUSPENSION TUNE',
    subtitle: 'Precision Handling & Control',
    category: 'Suspension',
    gradient: 'from-yellow-300 to-yellow-500',
  },
  {
    src: '/images/gallery-bike-5.jpg',
    alt: 'Exhaust System & Air Intake Upgrades',
    title: 'EXHAUST SYSTEM',
    subtitle: 'Performance Air & Exhaust',
    category: 'Exhaust',
    gradient: 'from-yellow-500 to-yellow-600',
  },
  {
    src: '/images/gallery-bike-6.jpg',
    alt: 'Brake System Upgrades & Safety Modifications',
    title: 'BRAKE UPGRADE',
    subtitle: 'Enhanced Safety & Performance',
    category: 'Brakes',
    gradient: 'from-yellow-400 to-yellow-700',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Enhanced parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden'
    >
      {/* Enhanced Dynamic Background with Multiple Layers */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10 mix-blend-overlay" />

      {/* Fixed Multi-layer Parallax Background Elements */}
      <motion.div style={{ y }} className='absolute inset-0 opacity-15'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 border border-orange-500/20 rounded-full' />
        <div className='absolute top-3/4 right-1/4 w-48 h-48 border border-blue-500/30 rounded-full' />
        <div className='absolute bottom-1/4 left-1/3 w-32 h-32 border border-orange-500/40' />
      </motion.div>

      <motion.div style={{ y: y2 }} className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/3 right-1/3 w-80 h-80 border border-orange-500/15 rounded-full' />
        <div className='absolute bottom-1/3 left-1/4 w-40 h-40 border border-blue-500/25 rounded-full' />
      </motion.div>

      <motion.div style={{ y: y3 }} className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/2 left-1/2 w-96 h-96 border border-orange-500/10 rounded-full' />
      </motion.div>

      {/* Floating Particles with Enhanced Animation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            i % 3 === 0
              ? 'bg-orange-500/40'
              : i % 3 === 1
              ? 'bg-blue-500/40'
              : 'bg-orange-400/40'
          }`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: [
              `${10 + (i % 6) * 15}%`,
              `${90 - (i % 5) * 12}%`,
              `${10 + (i % 6) * 15}%`,
            ],
            y: [
              `${10 + (i % 7) * 12}%`,
              `${90 - (i % 4) * 10}%`,
              `${10 + (i % 7) * 12}%`,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + (i % 2) * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Interactive Mouse Follower Glow */}
      <motion.div
        className='absolute w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none'
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      />

      <ResponsiveContainer size='xl' padding='lg' className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          {/* Enhanced Title with Multiple Effects */}
          <motion.div
            className='relative mb-12'
            initial={{ scale: 0.5, rotateX: -90 }}
            whileInView={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
          >
            <motion.h2
              className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 xs:mb-8 relative'
              animate={{
                textShadow: [
                  '0 0 0px rgba(255, 255, 0, 0)',
                  '0 0 30px rgba(255, 255, 0, 0.8)',
                  '0 0 0px rgba(255, 255, 0, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.span
                className='block text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white'
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #ffffff, #ffff00, #ffffff, #ffff00, #ffffff)',
                  backgroundSize: '500% 500%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                FEAR
              </motion.span>
              <motion.span
                className='block text-yellow-400 text-4xl md:text-6xl lg:text-7xl font-black mt-4'
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 80,
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 30px rgba(255, 255, 0, 0.8)',
                }}
              >
                GALLERY
              </motion.span>
            </motion.h2>

            {/* Animated Underline */}
            <motion.div
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </motion.div>

          <motion.p
            className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover our{' '}
            <span className='text-yellow-400 font-semibold'>
              portfolio of custom builds
            </span>{' '}
            and witness the precision engineering that goes into every
            motorcycle we tune. Each project demonstrates our commitment to{' '}
            <span className='text-yellow-300 font-semibold'>
              quality craftsmanship
            </span>{' '}
            and{' '}
            <span className='text-yellow-400 font-semibold'>
              performance excellence
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Enhanced Gallery Grid with Fixed Parallax */}
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8'>
          {galleryImages.map((image, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 2,
                  z: 50,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-xl xs:rounded-2xl perspective-1000 cursor-pointer ${
                  index === 0 || index === 4
                    ? 'xs:col-span-2 lg:col-span-1'
                    : ''
                } ${index === 2 ? 'lg:row-span-2' : ''} ${
                  hoveredIndex === index ? 'z-50' : 'z-10'
                }`}
              >
                <div className='relative aspect-square xs:aspect-video md:aspect-auto h-48 xs:h-56 sm:h-64 md:h-80 overflow-hidden'>
                  {/* Enhanced Image with Multiple Effects */}
                  <motion.div
                    className='relative w-full h-full'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className='object-cover transition-all duration-700'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />

                    {/* Multiple Overlay Layers */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${image.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                    />
                    <div className='absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                    {/* Enhanced Glow Effect */}
                    <motion.div
                      className='absolute inset-0'
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(255, 255, 0, 0)',
                          '0 0 40px rgba(255, 255, 0, 0.6)',
                          '0 0 0 0 rgba(255, 255, 0, 0)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    />

                    {/* Animated Border with Enhanced Glow */}
                    <motion.div
                      className='absolute inset-0 border-2 border-transparent rounded-3xl'
                      whileHover={{
                        borderColor: 'rgba(255, 255, 0, 0.8)',
                        boxShadow: '0 0 30px rgba(255, 255, 0, 0.8)',
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Holographic Effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent'
                      animate={{
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                  </motion.div>

                  {/* Enhanced Content Overlay with Dramatic Effects */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-8 flex flex-col justify-end'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className='space-y-3'
                    >
                      {/* Enhanced Category Badge */}
                      <motion.div
                        className='flex items-center gap-3 mb-3'
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className='text-yellow-400 text-sm font-bold tracking-wider px-3 py-1 bg-yellow-400/20 rounded-full'
                          animate={{
                            backgroundColor: [
                              'rgba(255, 255, 0, 0.2)',
                              'rgba(255, 255, 0, 0.4)',
                              'rgba(255, 255, 0, 0.2)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          {image.category}
                        </motion.span>
                        <motion.div
                          className='w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent'
                          animate={{ scaleX: [0, 1, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5,
                          }}
                        />
                      </motion.div>

                      {/* Enhanced Title with Glow Effect */}
                      <motion.h3
                        className='text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300'
                        whileHover={{
                          textShadow: '0 0 20px rgba(255, 255, 0, 0.8)',
                        }}
                        animate={{
                          textShadow: [
                            '0 0 0px rgba(255, 255, 255, 0)',
                            '0 0 10px rgba(255, 255, 255, 0.3)',
                            '0 0 0px rgba(255, 255, 255, 0)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.3,
                        }}
                      >
                        {image.title}
                      </motion.h3>

                      {/* Enhanced Subtitle */}
                      <motion.p
                        className='text-gray-300 font-bold text-sm sm:text-base lg:text-lg'
                        whileHover={{ color: '#ffffff' }}
                        transition={{ duration: 0.3 }}
                      >
                        {image.subtitle}
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Interactive Elements */}
                  <motion.div
                    className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className='w-10 h-10 bg-yellow-400/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/50'
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(255, 255, 0, 0)',
                          '0 0 20px rgba(255, 255, 0, 0.8)',
                          '0 0 0 0 rgba(255, 255, 0, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <motion.span
                        className='text-yellow-400 text-xl font-bold'
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        +
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Corner Accents */}
                  <motion.div
                    className='absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400/50'
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className='absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400/50'
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Advanced Hover Effects */}
                  <motion.div
                    className='absolute inset-0 pointer-events-none'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Enhanced Scanning Line Effect */}
                    <motion.div
                      className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
                      animate={{
                        y: [0, 320, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    />

                    {/* Enhanced Corner Glow Effects */}
                    <motion.div
                      className='absolute top-0 left-0 w-8 h-8 bg-yellow-400/20 rounded-full blur-sm'
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className='absolute bottom-0 right-0 w-8 h-8 bg-yellow-400/20 rounded-full blur-sm'
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3 + 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Data Visualization Effect */}
                  <motion.div
                    className='absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <div className='flex flex-col gap-1'>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className='h-1 bg-yellow-400/60 rounded'
                          animate={{
                            width: [0, `${20 + (i % 3) * 10}px`, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            type: 'spring',
            stiffness: 80,
          }}
          viewport={{ once: true }}
          className='mt-32 text-center'
        >
          <div className='glass-morphism rounded-3xl p-12 max-w-6xl mx-auto overflow-hidden relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10' />
            <motion.div
              className='relative z-10'
              initial={{ scale: 0.8, rotateY: -15 }}
              whileInView={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
              <motion.h3
                className='text-5xl lg:text-6xl font-black mb-8'
                animate={{
                  textShadow: [
                    '0 0 0px rgba(255, 255, 0, 0)',
                    '0 0 30px rgba(255, 255, 0, 0.8)',
                    '0 0 0px rgba(255, 255, 0, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white'>
                  YOUR BIKE COULD BE NEXT
                </span>
              </motion.h3>
              <motion.p
                className='text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                These are just a few examples of the{' '}
                <span className='text-yellow-400 font-bold'>
                  mechanical masterpieces
                </span>{' '}
                we&apos;ve created. Your motorcycle has the potential to become
                the next legend in our gallery. Ready to transform your ride
                into a{' '}
                <span className='text-yellow-400 font-bold'>
                  road-dominating beast
                </span>
                ?
              </motion.p>

              <motion.div
                className='mt-12 flex justify-center'
                whileHover={{ scale: 1.05 }}
              >
                <Link href='/gallery'>
                  <motion.button
                    className='btn-touch px-8 xs:px-12 py-4 xs:py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black rounded-xl border-2 border-yellow-300/50 shadow-2xl text-lg xs:text-xl w-full xs:w-auto min-w-[200px]'
                    whileHover={{
                      boxShadow: '0 0 40px rgba(255, 255, 0, 0.8)',
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(255, 255, 0, 0)',
                        '0 0 20px rgba(255, 255, 0, 0.5)',
                        '0 0 0px rgba(255, 255, 0, 0)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    VIEW FULL GALLERY
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
