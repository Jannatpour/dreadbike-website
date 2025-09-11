'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Shield,
  Zap,
  Camera,
  Smartphone,
  Headphones,
  ChevronRight,
  Star,
  Search,
  Filter,
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const accessoryCategories = [
  {
    id: 'protection',
    name: 'Protection Gear',
    icon: Shield,
    description: 'Essential protective accessories for safe riding',
    items: ['Helmets', 'Gloves', 'Knee Pads', 'Back Protectors'],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Smartphone,
    description: 'High-tech accessories for modern riders',
    items: [
      'GPS Systems',
      'Action Cameras',
      'Bluetooth Headsets',
      'Phone Mounts',
    ],
    image:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'storage',
    name: 'Storage Solutions',
    icon: Zap,
    description: 'Bags, cases, and storage accessories',
    items: ['Saddlebags', 'Tank Bags', 'Tail Bags', 'Tool Rolls'],
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'comfort',
    name: 'Comfort & Style',
    icon: Headphones,
    description: 'Accessories for comfort and personalization',
    items: ['Seat Cushions', 'Grips', 'Mirrors', 'Windshields'],
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'maintenance',
    name: 'Maintenance Tools',
    icon: Camera,
    description: 'Tools and accessories for bike maintenance',
    items: ['Tool Kits', 'Cleaning Supplies', 'Lubricants', 'Tire Gauges'],
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'lighting',
    name: 'Lighting & Visibility',
    icon: Zap,
    description: 'LED lights and visibility accessories',
    items: ['LED Strips', 'Headlight Upgrades', 'Turn Signals', 'Reflectors'],
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-blue-500',
  },
];

const featuredAccessories = [
  {
    id: 1,
    name: 'Premium Motorcycle Helmet',
    category: 'Protection',
    price: 299.99,
    rating: 4.9,
    reviews: 234,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Waterproof Saddlebags Set',
    category: 'Storage',
    price: 189.99,
    rating: 4.7,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    badge: 'Waterproof',
  },
  {
    id: 3,
    name: 'Bluetooth Communication System',
    category: 'Electronics',
    price: 249.99,
    rating: 4.8,
    reviews: 189,
    image:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
    badge: 'New Tech',
  },
  {
    id: 4,
    name: 'LED Light Kit',
    category: 'Lighting',
    price: 79.99,
    rating: 4.6,
    reviews: 298,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    badge: 'Popular',
  },
];

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
          }}
        />

        <div className='relative max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
              Motorcycle Accessories
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Premium accessories to enhance your riding experience, safety, and
              style
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto mb-8'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder='Search accessories...'
                  className='w-full bg-gray-800/50 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className='py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Shop by Category</h2>
            <p className='text-gray-400 text-lg'>
              Find the perfect accessories for your ride
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {accessoryCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-48 bg-cover bg-center relative'
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div
                        className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                      >
                        <IconComponent className='w-6 h-6 text-white' />
                      </div>
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                        {category.name}
                      </h3>
                      <p className='text-gray-400 mb-4'>
                        {category.description}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {category.items.map(item => (
                          <span
                            key={item}
                            className='px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300'
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300'>
                        <span className='font-medium'>Shop Now</span>
                        <ChevronRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Accessories */}
      <section className='py-16 px-4 bg-gray-800/50'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Featured Accessories</h2>
            <p className='text-gray-400 text-lg'>
              Top-rated accessories from our collection
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {featuredAccessories.map((accessory, index) => (
              <motion.div
                key={accessory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 group'
              >
                <div className='relative'>
                  <div
                    className='w-full h-48 bg-cover bg-center'
                    style={{ backgroundImage: `url(${accessory.image})` }}
                  />
                  {accessory.badge && (
                    <span className='absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full'>
                      {accessory.badge}
                    </span>
                  )}
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-yellow-400 font-medium'>
                      {accessory.category}
                    </span>
                    <div className='flex items-center'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-300 ml-1'>
                        {accessory.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className='text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                    {accessory.name}
                  </h3>

                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-2xl font-bold text-yellow-400'>
                      ${accessory.price}
                    </span>
                    <span className='text-sm text-gray-400'>
                      ({accessory.reviews} reviews)
                    </span>
                  </div>

                  <Link href={`/shop/product/${accessory.id}`}>
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
              Need Custom Accessories?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Our team can help you find or customize the perfect accessories
              for your specific needs
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105'>
                  Contact Our Team
                </button>
              </Link>

              <Link href='/shop'>
                <button className='border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105'>
                  Browse All Products
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
