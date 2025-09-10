'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';
import { useEffect, useState } from 'react';

interface HeroProps {
  onViewServices: () => void;
}

export default function Hero({ onViewServices }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Cinematic Background Layers */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' />

      {/* Animated Texture Overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-30 mix-blend-overlay"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Dynamic Grid Pattern with Enhanced Animation */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          className='absolute inset-0'
          style={{
          backgroundImage: `
              linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Cinematic Light Rays */}
      <motion.div
        className='absolute inset-0 opacity-40'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl' />
        <div className='absolute top-1/2 right-1/3 w-64 h-64 bg-orange-400/15 rounded-full blur-2xl' />
      </motion.div>

      {/* Subtle Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            initial={{ 
              x: `${20 + i * 5}%`,
              y: `${20 + i * 3}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [`${20 + i * 3}%`, `${80 - i * 2}%`, `${20 + i * 3}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle Energy Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '-100%'
            }}
            animate={{
              left: ['100%', '-100%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Professional Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [
              `${20 + (i % 4) * 20}%`,
              `${80 - (i % 3) * 15}%`,
              `${20 + (i % 4) * 20}%`,
            ],
            top: [
              `${20 + (i % 3) * 20}%`,
              `${80 - (i % 2) * 15}%`,
              `${20 + (i % 3) * 20}%`,
            ],
            width: [`${3 + (i % 2)}px`, `${5 + (i % 2)}px`, `${3 + (i % 2)}px`],
            height: [
              `${3 + (i % 2)}px`,
              `${5 + (i % 2)}px`,
              `${3 + (i % 2)}px`,
            ],
            y: [0, -80, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + (i % 2),
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        >
          <div className='w-full h-full bg-orange-500/60 rounded-full shadow-sm shadow-orange-500/30' />
        </motion.div>
      ))}

      {/* Subtle Energy Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className='absolute w-24 h-24 border border-orange-500/20 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [`${30 + i * 20}%`, `${70 - i * 10}%`, `${30 + i * 20}%`],
            top: [`${30 + i * 15}%`, `${70 - i * 10}%`, `${30 + i * 15}%`],
            scale: [0, 1.5, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Professional Background Shapes */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`morph-${i}`}
          className='absolute opacity-5'
          initial={{ opacity: 0 }}
          animate={{
            left: [`${20 + i * 30}%`, `${80 - i * 20}%`, `${20 + i * 30}%`],
            top: [`${20 + i * 25}%`, `${80 - i * 15}%`, `${20 + i * 25}%`],
            width: [`${100 + i * 20}px`, `${120 + i * 15}px`, `${100 + i * 20}px`],
            height: [`${100 + i * 15}px`, `${120 + i * 20}px`, `${100 + i * 15}px`],
            scale: [0.8, 1.2, 0.8],
            borderRadius: [
              '50% 50% 50% 50%',
              '30% 70% 30% 70%',
              '50% 50% 50% 50%',
            ],
            background: [
              'linear-gradient(45deg, rgba(255, 165, 0, 0.05), rgba(255, 165, 0, 0.1))',
              'linear-gradient(135deg, rgba(0, 191, 255, 0.1), rgba(0, 191, 255, 0.05))',
              'linear-gradient(45deg, rgba(255, 165, 0, 0.05), rgba(255, 165, 0, 0.1))',
            ],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 4,
          }}
        />
      ))}

      {/* Subtle Visual Indicators */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`indicator-${i}`}
          className='absolute flex items-center justify-center'
          style={{
            left: `${30 + i * 40}%`,
            top: '60%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        >
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={j}
              className='w-1 bg-orange-500/40 mx-1'
              animate={{
                height: [15, 35, 15],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: j * 0.2,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Mouse Follower Glow */}
      <motion.div
        className='absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none'
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      />

      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className='absolute inset-0 opacity-30'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 border border-accent/30' />
        <div className='absolute top-3/4 right-1/4 w-24 h-24 border border-accent/20' />
        <div className='absolute top-1/2 right-1/3 w-16 h-16 border border-accent/40' />
      </motion.div>

      {/* Main Content with Cinematic Effects */}
      <motion.div 
        style={{ opacity }}
        className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'
      >
        {/* Dramatic Logo Entrance with Multiple Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: 'spring',
            stiffness: 80,
          }}
          className='mb-12 relative'
        >
          {/* Multiple Glow Layers */}
          <motion.div
            className='absolute inset-0 bg-orange-500/30 blur-3xl scale-200'
            animate={{
              scale: [2, 2.2, 2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute inset-0 bg-blue-500/20 blur-2xl scale-150'
            animate={{
              scale: [1.5, 1.7, 1.5],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Logo with Hover Effects */}
          <motion.div
            whileHover={{
              scale: 1.05,
              filter:
                'brightness(1.2) drop-shadow(0 0 30px rgba(255, 165, 0, 0.8))',
            }}
            transition={{ duration: 0.3 }}
          >
            <Logo
              variant='gritty'
              size='xl'
              className='mx-auto relative z-10'
            />
          </motion.div>

          {/* Rotating Ring Effect */}
          <motion.div
            className='absolute inset-0 border-2 border-orange-500/50 rounded-full'
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
        
        {/* Dramatic Main Title with Cinematic Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='mb-12 text-center relative'
        >
          {/* Background Glow for Title */}
          <motion.div
            className='absolute inset-0 bg-orange-500/10 blur-3xl scale-150'
            animate={{
              scale: [1.5, 1.8, 1.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight relative z-10'>
            {/* UNLEASH with Dramatic Entrance */}
            <motion.span
              className='block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-orange-500 to-gray-100'
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #f5f5f5, #ff6600, #f5f5f5, #00bfff, #f5f5f5)',
                backgroundSize: '500% 500%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                scale: 1,
              }}
              transition={{
                backgroundPosition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 1,
                  delay: 0.8,
                  type: 'spring',
                  stiffness: 100,
                },
              }}
              initial={{ scale: 0, y: 20 }}
            >
              UNLEASH
            </motion.span>

            {/* THE FEAR with Sliding Effect */}
            <motion.span
              className='block text-blue-500 text-4xl md:text-6xl lg:text-7xl font-black mt-2 relative'
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                type: 'spring',
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 30px rgba(0, 191, 255, 0.8)',
              }}
            >
              <motion.span
                className='relative inline-block'
                animate={{
                  textShadow: [
                    '0 0 0px rgba(0, 191, 255, 0)',
                    '0 0 20px rgba(0, 191, 255, 0.8)',
                    '0 0 0px rgba(0, 191, 255, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
            >
              THE FEAR
              </motion.span>
            </motion.span>

            {/* RIDE DREAD with Dramatic Finale */}
            <motion.span
              className='block text-3xl md:text-5xl lg:text-6xl font-black mt-4'
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.6,
                type: 'spring',
                stiffness: 80,
              }}
            >
              <motion.span
                className='inline-block mr-4'
                whileHover={{ scale: 1.1 }}
              >
                RIDE
              </motion.span>
              <motion.span
                className='text-orange-500 inline-block'
                whileHover={{
                  scale: 1.2,
                  textShadow: '0 0 40px rgba(255, 165, 0, 1)',
                }}
                animate={{
                  textShadow: [
                    '0 0 0px rgba(255, 165, 0, 0)',
                    '0 0 30px rgba(255, 165, 0, 0.8)',
                    '0 0 0px rgba(255, 165, 0, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                DREAD
              </motion.span>
            </motion.span>
          </h1>

          {/* Dramatic Underline Effect */}
          <motion.div
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent'
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, delay: 2.5 }}
          />
        </motion.div>
        
        {/* Creative Subtitle with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='mb-16 text-center'
        >
           <div className='text-base sm:text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4 sm:px-6'>
             <span className='text-yellow-400 font-semibold'>Professional motorcycle tuning</span> and{' '}
             <span className='text-yellow-300 font-semibold'>custom modifications</span> that transform your bike into a{' '}
             <span className='relative inline-block'>
               <span className='text-yellow-400 font-semibold'>
                 high-performance machine
               </span>
              <motion.div
                 className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-300'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
              />
             </span>{' '}
             with precision engineering and measurable results.
          </div>
        </motion.div>
        
      </motion.div>
      
      {/* Dramatic Scroll Indicator with Enhanced Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'
        onClick={onViewServices}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-3'
        >
          {/* Pulsing Text */}
          <motion.span
            className='text-yellow-400 text-sm font-bold tracking-wider'
            animate={{
              opacity: [0.7, 1, 0.7],
              textShadow: [
                '0 0 0px rgba(255, 255, 0, 0)',
                '0 0 10px rgba(255, 255, 0, 0.8)',
                '0 0 0px rgba(255, 255, 0, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            SCROLL
          </motion.span>

          {/* Enhanced Scroll Wheel */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className='relative'
          >
            {/* Outer Glow Ring */}
            <motion.div
              className='absolute -inset-2 border-2 border-yellow-400/30 rounded-full'
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main Scroll Wheel */}
            <motion.div
              className='w-8 h-12 border-2 border-yellow-400 rounded-full flex justify-center relative overflow-hidden'
              whileHover={{
                scale: 1.1,
                borderColor: '#ffff00',
              }}
            >
              {/* Animated Scroll Dot */}
              <motion.div
                className='w-2 h-4 bg-yellow-400 rounded-full mt-2'
                animate={{
                  y: [0, 20, 0],
                  scaleY: [1, 0.3, 1],
                  opacity: [1, 0.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent'
                animate={{ y: ['-100%', '100%'] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Pulsing Arrows */}
          <motion.div
            className='flex flex-col items-center gap-1'
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
              className='text-yellow-400 text-xs'
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">↓</div>
            </motion.span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className='text-yellow-400 text-xs'
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">↓</div>
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

