'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const featuredProducts = [
  {
    id: 1,
    name: 'APEX RACING HELMET',
    category: 'Professional Gear',
    price: '$899',
    originalPrice: '$1,199',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description:
      'Professional-grade racing helmet with advanced ventilation and carbon fiber construction.',
    features: [
      'Carbon Fiber Shell',
      'Advanced Ventilation',
      'DOT/ECE Certified',
      'Anti-Fog Visor',
    ],
    badge: 'BESTSELLER',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    id: 2,
    name: 'TITANIUM EXHAUST SYSTEM',
    category: 'Custom Parts',
    price: '$2,499',
    originalPrice: '$3,199',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    description:
      'Hand-crafted titanium exhaust system for maximum performance and weight reduction.',
    features: [
      'Titanium Construction',
      'Weight Reduction',
      'Performance Tuned',
      'Custom Fit',
    ],
    badge: 'LIMITED EDITION',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 3,
    name: 'CARBON FIBER BODY KIT',
    category: 'Premium Accessories',
    price: '$1,799',
    originalPrice: '$2,299',
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    description:
      'Complete carbon fiber body kit for enhanced aerodynamics and stunning aesthetics.',
    features: [
      'Lightweight Design',
      'Perfect Fit',
      'UV Protected',
      'Race Inspired',
    ],
    badge: 'NEW ARRIVAL',
    gradient: 'from-yellow-500 to-yellow-600',
  },
];

export default function FeaturedProducts() {
  return (
    <section className='py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' />
      <div
        className='absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop)',
        }}
      />

      {/* Animated Grid Pattern */}
      <motion.div
        className='absolute inset-0 opacity-20'
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-yellow-400/30 rounded-full'
          initial={{ opacity: 0 }}
          animate={{
            left: [
              `${15 + (i % 5) * 18}%`,
              `${85 - (i % 4) * 15}%`,
              `${15 + (i % 5) * 18}%`,
            ],
            top: [
              `${15 + (i % 6) * 14}%`,
              `${85 - (i % 3) * 12}%`,
              `${15 + (i % 6) * 14}%`,
            ],
            y: [0, -40, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
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
            <span className='holographic'>FEATURED</span>{' '}
            <span className='neon-text text-accent'>PRODUCTS</span>
          </motion.h2>
          <p className='text-base xs:text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'>
            Discover our{' '}
            <span className='text-orange-500 font-semibold'>
              hand-picked selection
            </span>{' '}
            of premium gear and accessories. Each product is{' '}
            <span className='text-blue-500 font-semibold'>
              professionally tested
            </span>{' '}
            and{' '}
            <span className='text-orange-500 font-semibold'>
              performance verified
            </span>{' '}
            for the ultimate riding experience.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {featuredProducts.map((product, index) => (
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
                scale: 1.02,
                z: 50,
              }}
              className='group perspective-1000 relative'
            >
              <Card className='relative h-full glass-morphism border-0 overflow-hidden'>
                {/* Product Badge */}
                <motion.div
                  className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${product.gradient}`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {product.badge}
                </motion.div>

                {/* Enhanced Background Effects */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`}
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Product Image Placeholder */}
                <div className='relative h-64 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden'>
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className='absolute inset-0 flex items-center justify-center text-6xl text-gray-500'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    📦
                  </motion.div>
                </div>

                <CardHeader className='relative z-10 pb-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <CardTitle className='text-xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300'>
                      {product.name}
                    </CardTitle>
                  </div>
                  <p className='text-sm text-orange-400 font-semibold'>
                    {product.category}
                  </p>
                </CardHeader>

                <CardContent className='relative z-10 pt-0'>
                  <CardDescription className='text-gray-300 mb-4 leading-relaxed'>
                    {product.description}
                  </CardDescription>

                  {/* Features List */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-bold text-yellow-400 mb-2'>
                      KEY FEATURES:
                    </h4>
                    <ul className='space-y-1'>
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
                          <span className='w-1 h-1 bg-yellow-400 rounded-full mr-2' />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-2'>
                      <span className='text-2xl font-black text-yellow-400'>
                        {product.price}
                      </span>
                      <span className='text-sm text-gray-500 line-through'>
                        {product.originalPrice}
                      </span>
                    </div>
                    <motion.div
                      className='text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded'
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
                  <div className='flex gap-2'>
                    <Button
                      className='flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold'
                      size='sm'
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                    >
                      VIEW
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <Link href='/shop'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black px-12 py-6 text-xl'
            >
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
