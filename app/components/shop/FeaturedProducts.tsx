'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../../shop/page';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-900/20 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-8 relative z-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 0, 0.2)',
          }}
        >
          <motion.h2
            className='text-4xl sm:text-5xl font-black mb-6 featured-section-title'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow:
                '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 0, 0.3)',
              position: 'relative',
              zIndex: 50,
            }}
          >
            <span
              className='gradient-text'
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                position: 'relative',
                zIndex: 51,
              }}
            >
              FEATURED
            </span>
            <span
              className='text-white ml-4'
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                position: 'relative',
                zIndex: 51,
              }}
            >
              GEAR
            </span>
            {/* Multiple visibility backups */}
            <span
              className='absolute inset-0 text-yellow-400 opacity-30 blur-sm'
              style={{ zIndex: 49 }}
            >
              FEATURED GEAR
            </span>
            <span
              className='absolute inset-0 text-yellow-300 opacity-15 blur-md'
              style={{ zIndex: 48 }}
            >
              FEATURED GEAR
            </span>
          </motion.h2>
          <motion.p
            className='text-xl text-gray-300 max-w-3xl mx-auto relative z-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hand-picked selection of our most popular and highest-rated products
          </motion.p>
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className='group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 relative'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Featured Badge */}
              <div className='absolute top-4 left-4 z-10'>
                <span className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
                  FEATURED
                </span>
              </div>

              {/* Product Image */}
              <div className='relative aspect-square overflow-hidden'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500' />
              </div>

              {/* Product Info */}
              <div className='p-6'>
                <div className='flex items-center space-x-2 mb-3'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating || 0)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-gray-400 font-medium'>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className='font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300 text-lg'>
                  {product.name}
                </h3>

                <p className='text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed'>
                  {product.description}
                </p>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-bold text-yellow-400'>
                      ${product.price.toFixed(2)}
                    </span>
                    <span className='text-xs text-green-400 font-medium'>
                      In Stock
                    </span>
                  </div>

                  <motion.button
                    className='bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className='text-center mt-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
