'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function About() {
  return (
    <section className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-6 sm:px-8 lg:px-12 bg-black relative overflow-hidden'>
      {/* Cinematic Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800' />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-15 mix-blend-overlay" />

      {/* Animated Grid Pattern */}
      <motion.div
        className='absolute inset-0 opacity-20'
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(183, 28, 28, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 28, 28, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Energy Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-orange-500/30 rounded-full'
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
            y: [0, -50, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 15, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + (i % 2),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
          className='text-center mb-12 xs:mb-16 sm:mb-20'
        >
          {/* Enhanced Title with Dramatic Effects */}
          <motion.h2
            className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-6 xs:mb-8 relative'
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className='block'
              style={{ textShadow: '0 0 0px rgba(183, 28, 28, 0)' }}
              animate={{
                textShadow: [
                  '0 0 0px rgba(183, 28, 28, 0)',
                  '0 0 20px rgba(183, 28, 28, 0.8)',
                  '0 0 0px rgba(183, 28, 28, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ABOUT
            </motion.span>
            <motion.span
              className='text-red-500 block mt-2'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              style={{ textShadow: '0 0 0px rgba(183, 28, 28, 0)' }}
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 30px rgba(183, 28, 28, 1)',
              }}
            >
              DREADBIKE
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            At DreadBike, we specialize in{' '}
            <motion.span
              className='text-orange-500 font-semibold relative inline-block'
              whileHover={{ scale: 1.02 }}
            >
              professional motorcycle tuning
              <motion.span
                className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500 block'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.span>{' '}
            and{' '}
            <span className='text-blue-500 font-semibold'>
              custom modifications
            </span>
            . Our certified technicians use state-of-the-art diagnostic
            equipment and precision tools to optimize your motorcycle&apos;s
            performance, delivering measurable improvements in power,
            efficiency, and reliability.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 lg:gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: 'spring',
              stiffness: 80,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group perspective-1000'
          >
            <Card className='bg-card/80 backdrop-blur-sm border-red-500/30 h-full relative overflow-hidden'>
              {/* Animated Background */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Glow Effect */}
              <motion.div
                className='absolute inset-0 border border-red-500/20 rounded-lg'
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                    '0 0 20px rgba(183, 28, 28, 0.3)',
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <CardHeader className='relative z-10'>
                <motion.div
                  className='flex items-center gap-3 mb-4'
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className='text-4xl'
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                      1
                    </div>
                  </motion.span>
                  <CardTitle className='text-3xl text-red-500 font-black'>
                    OUR MISSION
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className='relative z-10'>
                <CardDescription className='text-lg leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300'>
                  At DreadBike, we specialize in creating motorcycles that
                  don&apos;t just perform—they intimidate. Our expert craftsmen
                  combine cutting-edge technology with raw mechanical power to
                  build machines that strike fear into the hearts of ordinary
                  riders.
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

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: 'spring',
              stiffness: 80,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group perspective-1000'
          >
            <Card className='bg-card/80 backdrop-blur-sm border-red-500/30 h-full relative overflow-hidden'>
              {/* Animated Background */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent'
                animate={{
                  backgroundPosition: ['100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Glow Effect */}
              <motion.div
                className='absolute inset-0 border border-red-500/20 rounded-lg'
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                    '0 0 20px rgba(183, 28, 28, 0.3)',
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              <CardHeader className='relative z-10'>
                <motion.div
                  className='flex items-center gap-3 mb-4'
                  whileHover={{ x: 5 }}
                >
                  <motion.span
                    className='text-4xl'
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                      2
                    </div>
                  </motion.span>
                  <CardTitle className='text-3xl text-red-500 font-black'>
                    WHAT WE DO
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className='relative z-10'>
                <CardDescription className='text-lg leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300'>
                  From engine tuning and performance upgrades to complete custom
                  builds, we transform your motorcycle into a beast. Our
                  services include ECU remapping, exhaust systems, suspension
                  tuning, and custom fabrication that pushes the limits of
                  what&apos;s possible on two wheels.
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            type: 'spring',
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className='mt-20 text-center'
        >
          <motion.div whileHover={{ y: -5, scale: 1.02 }} className='relative'>
            <Card className='bg-card/90 backdrop-blur-sm border-red-500/40 max-w-5xl mx-auto relative overflow-hidden'>
              {/* Dramatic Background Effects */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10'
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Pulsing Border */}
              <motion.div
                className='absolute inset-0 border-2 border-red-500/30 rounded-lg'
                animate={{
                  borderColor: [
                    'rgba(183, 28, 28, 0.3)',
                    'rgba(183, 28, 28, 0.8)',
                    'rgba(183, 28, 28, 0.3)',
                  ],
                  boxShadow: [
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                    '0 0 30px rgba(183, 28, 28, 0.4)',
                    '0 0 0 0 rgba(183, 28, 28, 0)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <CardContent className='pt-12 pb-12 relative z-10'>
                <motion.div
                  className='flex items-center justify-center gap-4 mb-8'
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    className='text-6xl'
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                      3
                    </div>
                  </motion.span>
                  <motion.h3
                    className='text-4xl font-black text-red-500'
                    style={{ textShadow: '0 0 0px rgba(183, 28, 28, 0)' }}
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(183, 28, 28, 0)',
                        '0 0 20px rgba(183, 28, 28, 0.8)',
                        '0 0 0px rgba(183, 28, 28, 0)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    THE DREADBIKE DIFFERENCE
                  </motion.h3>
                </motion.div>

                <motion.p
                  className='text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  We don&apos;t follow trends—we set them. Every build is a
                  statement, every modification a declaration of dominance. When
                  you ride a DreadBike, you&apos;re not just on a motorcycle—
                  you&apos;re commanding a{' '}
                  <motion.span
                    className='text-red-500 font-bold relative inline-block'
                    whileHover={{ scale: 1.1 }}
                  >
                    mechanical predator
                    <motion.span
                      className='absolute -bottom-1 left-0 w-full h-1 bg-orange-500 block'
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </motion.span>{' '}
                  that was born to rule the road.
                </motion.p>

                {/* Decorative Elements */}
                <motion.div
                  className='flex justify-center gap-8 mt-8'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  {['1', '2', '3'].map((number, index) => (
                    <motion.span
                      key={index}
                      className='text-3xl'
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    >
                      <div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                        {number}
                      </div>
                    </motion.span>
                  ))}
                </motion.div>
              </CardContent>

              {/* Shimmer Effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
