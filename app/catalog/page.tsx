'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Grid,
  List,
  Filter,
  Search,
  Star,
  ChevronRight,
  Package,
  Wrench,
  Shield,
  Zap,
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const catalogSections = [
  {
    id: 'motorcycles',
    name: 'Motorcycles',
    icon: Zap,
    description: 'Complete motorcycle lineup',
    count: 45,
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'parts',
    name: 'Parts & Components',
    icon: Wrench,
    description: 'Engine, exhaust, suspension parts',
    count: 234,
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: Package,
    description: 'Electronics, storage, lighting',
    count: 156,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'gear',
    name: 'Riding Gear',
    icon: Shield,
    description: 'Helmets, jackets, boots, gloves',
    count: 89,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Harley-Davidson Street 750',
    category: 'Motorcycles',
    price: 7599.99,
    rating: 4.8,
    reviews: 234,
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    badge: 'Featured',
  },
  {
    id: 2,
    name: 'Performance Exhaust System',
    category: 'Parts',
    price: 899.99,
    rating: 4.9,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'LED Light Kit',
    category: 'Accessories',
    price: 199.99,
    rating: 4.7,
    reviews: 298,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Carbon Fiber Helmet',
    category: 'Gear',
    price: 599.99,
    rating: 4.9,
    reviews: 187,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    badge: 'Premium',
  },
  {
    id: 5,
    name: 'Kawasaki Ninja 650',
    category: 'Motorcycles',
    price: 7399.99,
    rating: 4.8,
    reviews: 167,
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    badge: 'New',
  },
  {
    id: 6,
    name: 'High-Performance Brake Pads',
    category: 'Parts',
    price: 129.99,
    rating: 4.6,
    reviews: 203,
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    badge: 'Racing',
  },
];

const brands = [
  'Harley-Davidson',
  'Yamaha',
  'Honda',
  'Kawasaki',
  'Suzuki',
  'BMW',
  'Ducati',
  'Triumph',
];

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Logo Header */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/30'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='block'>
              <Logo variant='gritty' size='md' className='h-10 w-auto' />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden mt-16'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black' />
        <div
          className='absolute inset-0 bg-cover bg-center opacity-20'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop)',
          }}
        />

        <div className='relative max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
              Complete Catalog
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Browse our complete collection of motorcycles, parts, accessories,
              and gear
            </p>

            {/* Search and Filter Bar */}
            <div className='max-w-4xl mx-auto mb-8'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex-1 relative'>
                  <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search our catalog...'
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                  />
                </div>

                <div className='flex gap-2'>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  >
                    <option value='featured'>Featured</option>
                    <option value='price-low'>Price: Low to High</option>
                    <option value='price-high'>Price: High to Low</option>
                    <option value='rating'>Highest Rated</option>
                    <option value='newest'>Newest</option>
                  </select>

                  <div className='flex border border-gray-600 rounded-xl overflow-hidden'>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-4 ${
                        viewMode === 'grid'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-gray-800/50 text-gray-400'
                      }`}
                    >
                      <Grid className='w-5 h-5' />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-4 ${
                        viewMode === 'list'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-gray-800/50 text-gray-400'
                      }`}
                    >
                      <List className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      <section className='py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Browse Categories</h2>
            <p className='text-gray-400 text-lg'>
              Explore our complete product range
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {catalogSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedCategory(section.id)}
                >
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-32 bg-cover bg-center relative'
                      style={{ backgroundImage: `url(${section.image})` }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div
                        className={`absolute top-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}
                      >
                        <IconComponent className='w-5 h-5 text-white' />
                      </div>
                      <div className='absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold'>
                        {section.count}
                      </div>
                    </div>

                    <div className='p-4'>
                      <h3 className='text-lg font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-300'>
                        {section.name}
                      </h3>
                      <p className='text-gray-400 text-sm mb-3'>
                        {section.description}
                      </p>

                      <div className='flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300'>
                        <span className='font-medium text-sm'>Browse</span>
                        <ChevronRight className='w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Brand Filter */}
          <div className='mb-8'>
            <h3 className='text-2xl font-bold mb-4'>Popular Brands</h3>
            <div className='flex flex-wrap gap-3'>
              {brands.map(brand => (
                <button
                  key={brand}
                  className='px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300'
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='py-16 px-4 bg-gray-800/50'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Featured Products</h2>
            <p className='text-gray-400 text-lg'>
              Handpicked selections from our catalog
            </p>
          </motion.div>

          <div
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div
                  className={`relative ${
                    viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
                  }`}
                >
                  <div
                    className={`bg-cover bg-center ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  {product.badge && (
                    <span className='absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full'>
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className='p-6 flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-yellow-400 font-medium'>
                      {product.category}
                    </span>
                    <div className='flex items-center'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-300 ml-1'>
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className='text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                    {product.name}
                  </h3>

                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-2xl font-bold text-yellow-400'>
                      ${product.price}
                    </span>
                    <span className='text-sm text-gray-400'>
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <Link href={`/shop/product/${product.id}`}>
                    <button className='w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105'>
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl font-bold mb-6'>
              Can't Find What You're Looking For?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Our team can help you find specific products or provide custom
              solutions
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105'>
                  Contact Us
                </button>
              </Link>

              <Link href='/shop'>
                <button className='border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105'>
                  Browse Shop
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
