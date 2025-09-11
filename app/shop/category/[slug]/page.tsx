'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductGrid from '../../../components/shop/ProductGrid';
import { Product } from '../../page';

// Mock data - in production, this would come from your backend API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'DreadBike Racing Jacket',
    price: 299.99,
    image: '/images/gallery-bike-1.jpg',
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
    image: '/images/gallery-bike-2.jpg',
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
    image: '/images/gallery-bike-3.jpg',
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
    image: '/images/gallery-bike-4.jpg',
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
    image: '/images/gallery-bike-5.jpg',
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
    image: '/images/gallery-bike-6.jpg',
    category: 'parts',
    description: 'High-performance brake pads for superior stopping power.',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    features: ['High Performance', 'Long Lasting', 'Easy Installation'],
  },
];

const categoryMap: Record<string, { name: string; description: string }> = {
  apparel: {
    name: 'Apparel',
    description:
      'High-performance riding gear and clothing designed for the ultimate riding experience.',
  },
  gear: {
    name: 'Gear',
    description:
      'Essential riding gear including helmets, boots, and protective equipment.',
  },
  parts: {
    name: 'Parts',
    description:
      "Performance parts and accessories to enhance your bike's capabilities.",
  },
};

export default function CategoryPage() {
  const params = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<{
    name: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const categorySlug = params.slug as string;
        const categoryInfo = categoryMap[categorySlug];

        if (categoryInfo) {
          setCategory(categoryInfo);
          const response = await fetch(
            `/api/products?category=${categorySlug}`
          );
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to mock data
        const categorySlug = params.slug as string;
        const categoryInfo = categoryMap[categorySlug];

        if (categoryInfo) {
          setCategory(categoryInfo);
          const filteredProducts = mockProducts.filter(
            product => product.category === categorySlug
          );
          setProducts(filteredProducts);
        }
      }
      setIsLoading(false);
    };

    if (params.slug) {
      loadProducts();
    }
  }, [params.slug]);

  if (!category) {
    return (
      <div className='min-h-screen bg-background text-foreground'>
        <Header />
        <div className='pt-16 sm:pt-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Category Not Found
            </h1>
            <p className='text-gray-400 mb-8'>
              The category you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
        {/* Category Hero */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className='text-5xl sm:text-6xl md:text-7xl font-black mb-6'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400'>
                  {category.name.toUpperCase()}
                </span>
              </h1>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Grid */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <ProductGrid products={products} isLoading={isLoading} />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
