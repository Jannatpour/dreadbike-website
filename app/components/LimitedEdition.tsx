'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const limitedProducts = [
  {
    id: 1,
    name: 'APEX CHAMPIONSHIP EDITION',
    category: 'Racing Helmet',
    price: '$2,999',
    originalPrice: '$3,999',
    stock: 12,
    totalStock: 50,
    image: '/images/limited-helmet.jpg',
    description:
      'Championship-winning helmet worn by MotoGP legends. Only 50 units worldwide.',
    features: [
      'Hand-signed by champions',
      'Carbon fiber construction',
      'Limited edition certificate',
      'Collector display case',
    ],
    badge: 'CHAMPIONSHIP EDITION',
    rarity: 'ULTRA RARE',
  },
  {
    id: 2,
    name: 'TITANIUM GHOST EXHAUST',
    category: 'Performance System',
    price: '$4,499',
    originalPrice: '$5,999',
    stock: 8,
    totalStock: 25,
    image: '/images/limited-exhaust.jpg',
    description:
      'Aerospace-grade titanium exhaust system. Handcrafted by master engineers.',
    features: [
      'Aerospace titanium alloy',
      'Weight reduction: 40%',
      'Power increase: 15HP',
      'Lifetime warranty',
    ],
    badge: 'MASTER CRAFTED',
    rarity: 'LEGENDARY',
  },
  {
    id: 3,
    name: 'PHANTOM CARBON SUITE',
    category: 'Complete Body Kit',
    price: '$7,999',
    originalPrice: '$9,999',
    stock: 3,
    totalStock: 15,
    image: '/images/limited-carbon.jpg',
    description:
      'Complete carbon fiber transformation. Each piece individually numbered.',
    features: [
      'Pre-preg carbon fiber',
      'Aerodynamic optimization',
      'Individual numbering',
      'Installation included',
    ],
    badge: 'NUMBERED EDITION',
    rarity: 'MYTHICAL',
  },
];

export default function LimitedEdition() {
  return (
    <section className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Exclusive Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900' />
      <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-15 mix-blend-overlay" />

      {/* Animated Luxury Grid */}
      <motion.div
        className='absolute inset-0 opacity-20'
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Luxury Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute text-6xl opacity-10 pointer-events-none'
          initial={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        >
          {i % 3 === 0 ? '💎' : i % 3 === 1 ? '👑' : '⚡'}
        </motion.div>
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
          <motion.div
            className='inline-block mb-6'
            animate={{
              boxShadow: [
                '0 0 0px rgba(147, 51, 234, 0)',
                '0 0 30px rgba(147, 51, 234, 0.6)',
                '0 0 0px rgba(147, 51, 234, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className='px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-black rounded-full'>
              🏆 EXCLUSIVE COLLECTION
            </span>
          </motion.div>

          <motion.h2
            className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 xs:mb-8'
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <span className='holographic'>LIMITED</span>{' '}
            <span className='neon-text text-purple-400'>EDITION</span>
          </motion.h2>

          <p className='text-base xs:text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'>
            Ultra-rare, numbered editions crafted for the most{' '}
            <span className='text-purple-400 font-semibold'>
              discerning collectors
            </span>
            . Each piece represents the pinnacle of{' '}
            <span className='text-yellow-400 font-semibold'>
              engineering excellence
            </span>{' '}
            and{' '}
            <span className='text-green-400 font-semibold'>
              exclusive craftsmanship
            </span>
            .
          </p>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mt-8'
          >
            <motion.div
              className='inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full relative overflow-hidden'
              animate={{
                boxShadow: [
                  '0 0 0px rgba(220, 38, 38, 0)',
                  '0 0 25px rgba(220, 38, 38, 0.8)',
                  '0 0 0px rgba(220, 38, 38, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <div className='relative z-10 font-black text-lg'>
                ⚠️ ONLY 23 ITEMS LEFT ACROSS ALL EDITIONS
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Limited Products Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
          {limitedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.3,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                z: 100,
              }}
              className='group perspective-1000'
            >
              <Card className='relative h-full glass-morphism border-0 overflow-hidden'>
                {/* Rarity Badge */}
                <motion.div
                  className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-black text-white ${
                    product.rarity === 'MYTHICAL'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700'
                      : product.rarity === 'LEGENDARY'
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700'
                  }`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(147, 51, 234, 0)',
                      '0 0 15px rgba(147, 51, 234, 0.6)',
                      '0 0 0px rgba(147, 51, 234, 0)',
                    ],
                  }}
                >
                  {product.rarity}
                </motion.div>

                {/* Stock Indicator */}
                <motion.div
                  className='absolute top-4 right-4 z-20'
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                >
                  <div className='bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center'>
                    <div className='text-red-400 text-lg font-black'>
                      {product.stock}
                    </div>
                    <div className='text-xs text-gray-400'>LEFT</div>
                  </div>
                </motion.div>

                {/* Enhanced Background Effects */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-20'
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                />

                <CardHeader className='relative z-10 pb-4'>
                  {/* Product Image Placeholder */}
                  <motion.div
                    className='w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-6 flex items-center justify-center text-6xl relative overflow-hidden'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    <span className='relative z-10'>
                      {index === 0 ? '🏍️' : index === 1 ? '⚡' : '💎'}
                    </span>
                  </motion.div>

                  <CardTitle className='text-2xl font-black text-white group-hover:text-purple-400 transition-colors duration-300 mb-2'>
                    {product.name}
                  </CardTitle>
                  <div className='text-purple-400 font-semibold text-sm mb-4'>
                    {product.category}
                  </div>

                  {/* Stock Progress Bar */}
                  <div className='mb-4'>
                    <div className='flex justify-between text-xs text-gray-400 mb-2'>
                      <span>Stock Remaining</span>
                      <span>
                        {Math.round((product.stock / product.totalStock) * 100)}
                        %
                      </span>
                    </div>
                    <div className='w-full bg-gray-700 rounded-full h-2'>
                      <motion.div
                        className='bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${
                            (product.stock / product.totalStock) * 100
                          }%`,
                        }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='relative z-10 pt-0'>
                  <CardDescription className='text-gray-300 leading-relaxed text-sm mb-6'>
                    {product.description}
                  </CardDescription>

                  {/* Features List */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-bold text-purple-400 mb-3'>
                      EXCLUSIVE FEATURES:
                    </h4>
                    <ul className='space-y-2'>
                      {product.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className='text-xs text-gray-400 flex items-center'
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.1,
                          }}
                        >
                          <span className='w-1 h-1 bg-purple-400 rounded-full mr-2' />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className='flex items-center justify-between mb-6'>
                    <div>
                      <div className='text-3xl font-black text-white'>
                        {product.price}
                      </div>
                      <div className='text-sm text-gray-500 line-through'>
                        {product.originalPrice}
                      </div>
                    </div>
                    <motion.div
                      className='bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-black'
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      SAVE{' '}
                      {Math.round(
                        ((parseInt(product.originalPrice.slice(1)) -
                          parseInt(product.price.slice(1))) /
                          parseInt(product.originalPrice.slice(1))) *
                          100
                      )}
                      %
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <div className='space-y-3'>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        size='lg'
                        className='w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-black relative overflow-hidden'
                      >
                        <motion.div
                          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                        <span className='relative z-10'>RESERVE NOW</span>
                      </Button>
                    </motion.div>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-black px-12 py-6 text-xl relative overflow-hidden'
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
              <span className='relative z-10'>VIEW ALL LIMITED EDITIONS</span>
            </Button>
          </motion.div>
          <p className='text-sm text-gray-400 mt-4'>
            ⚠️ Limited editions sell out fast. Reserve yours today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
