'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/shop/ProductGrid';
import CategoryFilter from '../components/shop/CategoryFilter';
import ShopHero from '../components/shop/ShopHero';
import SearchBar from '../components/shop/SearchBar';
import FeaturedProducts from '../components/shop/FeaturedProducts';
import RecentlyViewed from '../components/RecentlyViewed';
import { Package, Wrench, Shield, Grid } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  features?: string[];
}

const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'apparel', name: 'Apparel', slug: 'apparel' },
  { id: 'gear', name: 'Gear', slug: 'gear' },
  { id: 'parts', name: 'Parts', slug: 'parts' },
];

// Mock data - in production, this would come from your backend API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'DreadBike Racing Jacket',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    category: 'apparel',
    description:
      'High-performance racing jacket with advanced protection and ventilation.',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: [
      'CE Level 2 Protection',
      'Ventilation System',
      'Reflective Panels',
    ],
  },
  {
    id: '2',
    name: 'Steel Skull Helmet',
    price: 449.99,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'gear',
    description: 'Custom steel skull design helmet with maximum protection.',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    features: ['DOT Approved', 'Custom Design', 'Lightweight Construction'],
  },
  {
    id: '3',
    name: 'Performance Exhaust System',
    price: 799.99,
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
    category: 'parts',
    description: 'High-flow exhaust system for maximum power and sound.',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: ['Stainless Steel', 'High Flow Design', 'Easy Installation'],
  },
  {
    id: '4',
    name: 'DreadBike Gloves',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'apparel',
    description: 'Premium leather gloves with reinforced knuckle protection.',
    inStock: true,
    rating: 4.6,
    reviews: 203,
    features: [
      'Premium Leather',
      'Knuckle Protection',
      'Touchscreen Compatible',
    ],
  },
  {
    id: '5',
    name: 'Racing Boots',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    category: 'gear',
    description: 'Professional racing boots with ankle protection.',
    inStock: false,
    rating: 4.5,
    reviews: 67,
    features: ['Ankle Protection', 'Slip Resistant', 'Comfortable Fit'],
  },
  {
    id: '6',
    name: 'Performance Brake Pads',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    category: 'parts',
    description: 'High-performance brake pads for superior stopping power.',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    features: ['High Performance', 'Long Lasting', 'Easy Installation'],
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load products from API
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory !== 'all') {
          params.append('category', selectedCategory);
        }
        if (searchQuery) {
          params.append('search', searchQuery);
        }

        const response = await fetch(`/api/products?${params.toString()}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to mock data
        let filteredProducts = mockProducts;
        if (selectedCategory !== 'all') {
          filteredProducts = filteredProducts.filter(
            p => p.category === selectedCategory
          );
        }
        if (searchQuery) {
          filteredProducts = filteredProducts.filter(
            p =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        setProducts(filteredProducts);
      }
      setIsLoading(false);
    };

    loadProducts();
  }, [selectedCategory, searchQuery]);

  // Products are already filtered by the API call
  const filteredProducts = products;

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Global Background Effects */}
      <div
        className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none'
        style={{ zIndex: -2 }}
      />
      <div
        className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay pointer-events-none"
        style={{ zIndex: -1 }}
      />

      <Header />

      <div className='pt-16 sm:pt-20'>
        {/* Shop Hero */}
        <ShopHero />

        {/* Category Navigation */}
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <h2 className='text-4xl font-bold mb-4 text-white'>
                Shop by Category
              </h2>
              <p className='text-gray-400 text-lg'>
                Explore our specialized collections
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* Parts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link href='/parts' className='group block'>
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-48 bg-cover bg-center relative'
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop)',
                      }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div className='absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center'>
                        <Wrench className='w-6 h-6 text-white' />
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                          Parts & Components
                        </h3>
                        <p className='text-gray-300 text-sm'>
                          Engine, exhaust, suspension parts
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Accessories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href='/accessories' className='group block'>
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-48 bg-cover bg-center relative'
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop)',
                      }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div className='absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center'>
                        <Package className='w-6 h-6 text-white' />
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                          Accessories
                        </h3>
                        <p className='text-gray-300 text-sm'>
                          Electronics, storage, lighting
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Gear */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link href='/gear' className='group block'>
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-48 bg-cover bg-center relative'
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop)',
                      }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div className='absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
                        <Shield className='w-6 h-6 text-white' />
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                          Riding Gear
                        </h3>
                        <p className='text-gray-300 text-sm'>
                          Helmets, jackets, boots, gloves
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Catalog */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href='/catalog' className='group block'>
                  <div className='bg-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105'>
                    <div
                      className='w-full h-48 bg-cover bg-center relative'
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop)',
                      }}
                    >
                      <div className='absolute inset-0 bg-black/40' />
                      <div className='absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center'>
                        <Grid className='w-6 h-6 text-white' />
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300'>
                          Complete Catalog
                        </h3>
                        <p className='text-gray-300 text-sm'>
                          Browse our full collection
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className='py-2 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mb-6'
            >
              <SearchBar
                onSearch={setSearchQuery}
                placeholder='Search for gear, parts, and apparel...'
                className='max-w-2xl mx-auto'
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mb-4'
            >
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </motion.div>

            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-center mb-6'
            >
              <h2
                className='text-3xl sm:text-4xl font-black text-white mb-2 relative z-10 shop-section-title'
                style={{
                  textShadow:
                    '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 0, 0.2)',
                  position: 'relative',
                  zIndex: 50,
                }}
              >
                {selectedCategory === 'all'
                  ? 'ALL PRODUCTS'
                  : categories
                      .find(c => c.id === selectedCategory)
                      ?.name.toUpperCase() || 'PRODUCTS'}
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full' />
            </motion.div>

            {/* Results Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-center mb-8'
            >
              <div className='inline-flex items-center space-x-4 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700'>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse' />
                  <span className='text-gray-300 font-medium text-sm'>
                    {isLoading
                      ? 'Loading...'
                      : `${filteredProducts.length} products found`}
                  </span>
                </div>
                {searchQuery && (
                  <div className='text-yellow-400 text-xs'>
                    for &quot;{searchQuery}&quot;
                  </div>
                )}
                {selectedCategory !== 'all' && (
                  <div className='text-yellow-400 text-xs'>
                    in {categories.find(c => c.id === selectedCategory)?.name}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        {!isLoading &&
          filteredProducts.length > 0 &&
          (selectedCategory === 'all' || filteredProducts.length >= 3) &&
          !searchQuery && (
            <div className='relative z-10'>
              <FeaturedProducts products={filteredProducts} />
            </div>
          )}

        {/* Recently Viewed */}
        <RecentlyViewed />

        {/* Product Grid */}
        <section className='py-2 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <ProductGrid products={filteredProducts} isLoading={isLoading} />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
