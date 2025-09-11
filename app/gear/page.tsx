'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  Shield,
  Shirt,
  Eye,
  Footprints,
  Wind,
  ChevronRight,
  Star,
  Search,
  Thermometer,
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const gearCategories = [
  {
    id: 'helmets',
    name: 'Helmets',
    icon: Shield,
    description: 'Premium helmets for maximum protection and style',
    items: ['Full Face', 'Modular', 'Open Face', 'Off-Road'],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'jackets',
    name: 'Jackets & Vests',
    icon: Shirt,
    description: 'Protective and stylish riding jackets',
    items: [
      'Leather Jackets',
      'Textile Jackets',
      'Mesh Jackets',
      'Armor Vests',
    ],
    image:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'pants',
    name: 'Pants & Chaps',
    icon: Wind,
    description: 'Durable riding pants and protective chaps',
    items: ['Leather Pants', 'Textile Pants', 'Kevlar Jeans', 'Chaps'],
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'boots',
    name: 'Boots & Footwear',
    icon: Footprints,
    description: 'Protective boots for all riding conditions',
    items: ['Racing Boots', 'Touring Boots', 'Cruiser Boots', 'Off-Road Boots'],
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'gloves',
    name: 'Gloves',
    icon: Thermometer,
    description: 'Protective gloves for grip and comfort',
    items: [
      'Racing Gloves',
      'Touring Gloves',
      'Winter Gloves',
      'Summer Gloves',
    ],
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'eyewear',
    name: 'Eyewear & Goggles',
    icon: Eye,
    description: 'Protective eyewear and goggles',
    items: ['Sunglasses', 'Safety Glasses', 'Goggles', 'Face Shields'],
    image:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-blue-500',
  },
];

const featuredGear = [
  {
    id: 1,
    name: 'Carbon Fiber Racing Helmet',
    category: 'Helmets',
    price: 599.99,
    rating: 4.9,
    reviews: 187,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    badge: 'DOT Certified',
  },
  {
    id: 2,
    name: 'Armored Leather Jacket',
    category: 'Jackets',
    price: 449.99,
    rating: 4.8,
    reviews: 234,
    image:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    badge: 'CE Armor',
  },
  {
    id: 3,
    name: 'Kevlar Riding Jeans',
    category: 'Pants',
    price: 199.99,
    rating: 4.7,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    badge: 'Kevlar Lined',
  },
  {
    id: 4,
    name: 'Racing Boots',
    category: 'Boots',
    price: 299.99,
    rating: 4.8,
    reviews: 198,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    badge: 'Waterproof',
  },
];

const safetyFeatures = [
  {
    icon: Shield,
    title: 'CE Certified Protection',
    description: 'All gear meets or exceeds CE safety standards',
  },
  {
    icon: Thermometer,
    title: 'All-Weather Ready',
    description: 'Gear designed for all riding conditions',
  },
  {
    icon: Wind,
    title: 'Aerodynamic Design',
    description: 'Optimized for comfort at high speeds',
  },
  {
    icon: Star,
    title: 'Premium Materials',
    description: 'Only the finest materials and construction',
  },
];

export default function GearPage() {
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
              Riding Gear
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Premium protective gear and apparel for the serious rider
            </p>

            {/* Search Bar */}
            <div className='max-w-2xl mx-auto mb-8'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder='Search riding gear...'
                  className='w-full bg-gray-800/50 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className='py-16 px-4 bg-gray-800/30'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Safety First</h2>
            <p className='text-gray-400 text-lg'>Why our gear stands out</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconComponent className='w-8 h-8 text-black' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                  <p className='text-gray-400'>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
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
              Find the perfect gear for your riding style
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {gearCategories.map((category, index) => {
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

      {/* Featured Gear */}
      <section className='py-16 px-4 bg-gray-800/50'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl font-bold mb-4'>Featured Gear</h2>
            <p className='text-gray-400 text-lg'>
              Top-rated protective gear from our collection
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {featuredGear.map((gear, index) => (
              <motion.div
                key={gear.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 group'
              >
                <div className='relative'>
                  <div
                    className='w-full h-48 bg-cover bg-center'
                    style={{ backgroundImage: `url(${gear.image})` }}
                  />
                  {gear.badge && (
                    <span className='absolute top-3 left-3 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full'>
                      {gear.badge}
                    </span>
                  )}
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-yellow-400 font-medium'>
                      {gear.category}
                    </span>
                    <div className='flex items-center'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-300 ml-1'>
                        {gear.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className='text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                    {gear.name}
                  </h3>

                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-2xl font-bold text-yellow-400'>
                      ${gear.price}
                    </span>
                    <span className='text-sm text-gray-400'>
                      ({gear.reviews} reviews)
                    </span>
                  </div>

                  <Link href={`/shop/product/${gear.id}`}>
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
            <h2 className='text-4xl font-bold mb-6'>Need Gear Fitting?</h2>
            <p className='text-xl text-gray-300 mb-8'>
              Visit our showroom for professional gear fitting and expert advice
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105'>
                  Book Fitting
                </button>
              </Link>

              <Link href='/shop'>
                <button className='border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105'>
                  Browse All Gear
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
