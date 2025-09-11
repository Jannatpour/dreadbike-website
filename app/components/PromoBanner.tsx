'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className='relative overflow-hidden py-6 px-4'
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-600'
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      {/* Pulsing Overlay */}
      <motion.div
        className='absolute inset-0 bg-red-500/20'
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Border */}
      <motion.div
        className='absolute inset-0 border-2 border-yellow-400/50'
        animate={{
          borderColor: [
            'rgba(255, 255, 0, 0.5)',
            'rgba(255, 255, 0, 1)',
            'rgba(255, 255, 0, 0.5)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          {/* Main Offer Text */}
          <div className='text-center lg:text-left flex-1'>
            <motion.div
              className='flex items-center justify-center lg:justify-start gap-2 mb-2'
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className='text-2xl'>🔥</span>
              <h3 className='text-xl md:text-2xl font-black text-white'>
                FLASH SALE: 40% OFF PREMIUM GEAR
              </h3>
              <span className='text-2xl'>🔥</span>
            </motion.div>
            <p className='text-sm md:text-base text-yellow-200 font-semibold'>
              Limited time offer on professional racing gear & custom parts
            </p>
          </div>

          {/* Countdown Timer */}
          <div className='flex items-center gap-4'>
            <div className='text-center'>
              <div className='text-xs text-yellow-200 font-bold mb-1'>
                ENDS IN:
              </div>
              <div className='flex gap-2'>
                {/* Hours */}
                <motion.div
                  className='bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[50px]'
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 0, 0)',
                      '0 0 10px rgba(255, 255, 0, 0.5)',
                      '0 0 0px rgba(255, 255, 0, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className='text-xl md:text-2xl font-black text-yellow-400'>
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className='text-xs text-gray-300'>HRS</div>
                </motion.div>

                <div className='text-yellow-400 text-2xl font-black self-center'>
                  :
                </div>

                {/* Minutes */}
                <motion.div
                  className='bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[50px]'
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 0, 0)',
                      '0 0 10px rgba(255, 255, 0, 0.5)',
                      '0 0 0px rgba(255, 255, 0, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <div className='text-xl md:text-2xl font-black text-yellow-400'>
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className='text-xs text-gray-300'>MIN</div>
                </motion.div>

                <div className='text-yellow-400 text-2xl font-black self-center'>
                  :
                </div>

                {/* Seconds */}
                <motion.div
                  className='bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[50px]'
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 0, 0)',
                      '0 0 10px rgba(255, 255, 0, 0.5)',
                      '0 0 0px rgba(255, 255, 0, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <div className='text-xl md:text-2xl font-black text-yellow-400'>
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className='text-xs text-gray-300'>SEC</div>
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black px-8 py-4 text-lg relative overflow-hidden'
              >
                {/* Button Shimmer Effect */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                />
                <span className='relative z-10'>SHOP SALE NOW</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stock Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='mt-4 text-center lg:text-left'
        >
          <div className='flex items-center justify-center lg:justify-start gap-2 text-sm'>
            <motion.div
              className='w-2 h-2 bg-red-400 rounded-full'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className='text-yellow-200 font-semibold'>
              Only 47 premium items left in stock
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Sale Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute text-yellow-400/20 text-4xl pointer-events-none'
          initial={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        >
          {i % 2 === 0 ? '💰' : '⚡'}
        </motion.div>
      ))}
    </motion.section>
  );
}
