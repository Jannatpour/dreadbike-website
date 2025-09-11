'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Heart,
  ShoppingCart,
  Eye,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductFilter from '../components/shop/ProductFilter';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-simple';
import { useToast } from '../components/Toast';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
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
  specifications?: Record<string, string>;
}

interface FilterOptions {
  priceRange: [number, number];
  rating: number;
  inStock: boolean | null;
  categories: string[];
  brands: string[];
  sortBy: 'price-low' | 'price-high' | 'rating' | 'newest' | 'name';
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const { dispatch } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState(query);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 1000],
    rating: 0,
    inStock: null,
    categories: [],
    brands: [],
    sortBy: 'newest',
  });
  const [isAddingToCart, setIsAddingToCart] = useState<string | null>(null);

  // Mock data - in production, this would come from your backend API
  const mockProducts: Product[] = useMemo(
    () => [
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
        specifications: {
          Material: 'Leather',
          Size: 'M-XL',
          Weight: '2.5kg',
          Compatibility: 'Universal',
        },
      },
      {
        id: '2',
        name: 'Steel Skull Helmet',
        price: 449.99,
        image: '/images/gallery-bike-2.jpg',
        category: 'gear',
        description:
          'Custom steel skull design helmet with maximum protection.',
        inStock: true,
        rating: 4.9,
        reviews: 89,
        features: ['DOT Approved', 'Custom Design', 'Lightweight Construction'],
        specifications: {
          Material: 'Steel',
          Size: 'One Size',
          Weight: '1.8kg',
          Compatibility: 'Universal',
        },
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
        specifications: {
          Material: 'Stainless Steel',
          Compatibility: 'Universal',
          Weight: '3.2kg',
          Size: 'Universal',
        },
      },
      {
        id: '4',
        name: 'DreadBike Gloves',
        price: 89.99,
        image: '/images/gallery-bike-4.jpg',
        category: 'apparel',
        description:
          'Premium leather gloves with reinforced knuckle protection.',
        inStock: true,
        rating: 4.6,
        reviews: 203,
        features: [
          'Premium Leather',
          'Knuckle Protection',
          'Touchscreen Compatible',
        ],
        specifications: {
          Material: 'Leather',
          Size: 'S-XL',
          Weight: '0.3kg',
          Compatibility: 'Universal',
        },
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
        specifications: {
          Material: 'Leather',
          Size: '38-45',
          Weight: '1.2kg',
          Compatibility: 'Universal',
        },
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
        specifications: {
          Material: 'Ceramic',
          Compatibility: 'Universal',
          Weight: '0.5kg',
          Size: 'Universal',
        },
      },
    ],
    []
  );

  const categories = [
    { id: 'all', name: 'All Products', slug: 'all' },
    { id: 'apparel', name: 'Apparel', slug: 'apparel' },
    { id: 'gear', name: 'Gear', slug: 'gear' },
    { id: 'parts', name: 'Parts', slug: 'parts' },
  ];

  const brands = ['DreadBike', 'Steel Skull', 'Performance Pro', 'Racing Gear'];

  useEffect(() => {
    const searchProducts = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));

        let filteredProducts = mockProducts;

        // Apply search query
        if (searchQuery) {
          filteredProducts = filteredProducts.filter(
            p =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProducts(filteredProducts);
      } catch {
        console.error('Error searching products');
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    searchProducts();
  }, [searchQuery, mockProducts]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000) {
      filtered = filtered.filter(
        p =>
          p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }

    if (filters.rating > 0) {
      filtered = filtered.filter(p => (p.rating || 0) >= filters.rating);
    }

    if (filters.inStock !== null) {
      filtered = filtered.filter(p => p.inStock === filters.inStock);
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, filters]);

  const handleAddToCart = async (product: Product) => {
    setIsAddingToCart(product.id);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          category: product.category,
          description: product.description,
        },
      });
      addToast({
        type: 'success',
        title: 'Added to Cart',
        message: `${product.name} has been added to your cart.`,
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to add item to cart. Please try again.',
      });
    } finally {
      setIsAddingToCart(null);
    }
  };

  const handleWishlistToggle = (product: Product) => {
    const action = isInWishlist(product.id) ? 'remove' : 'add';
    toggleWishlist(product);
    addToast({
      type: 'success',
      title: action === 'add' ? 'Added to Wishlist' : 'Removed from Wishlist',
      message: `${product.name} has been ${
        action === 'add' ? 'added to' : 'removed from'
      } your wishlist.`,
    });
  };

  const handleShare = async (product: Product) => {
    const shareData = {
      title: product.name,
      text: `Check out this ${product.name} on DreadBike!`,
      url: `${window.location.origin}/shop/product/${product.id}`,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        addToast({
          type: 'success',
          title: 'Link Copied',
          message: 'Product link has been copied to your clipboard.',
        });
      }
    } catch {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to share product. Please try again.',
      });
    }
  };

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
        {/* Search Header */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-8'
            >
              <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
                Search Results
              </h1>
              <p className='text-xl text-gray-300 mb-6'>
                {query ? `Results for "${query}"` : 'Search our products'}
              </p>

              {/* Search Bar */}
              <div className='max-w-2xl mx-auto'>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <Input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search for products...'
                    className='pl-10 bg-gray-800 border-gray-600 text-white text-lg py-3'
                  />
                </div>
              </div>
            </motion.div>

            {/* Filters and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'
            >
              <div className='flex items-center space-x-4'>
                <Button
                  onClick={() => setIsFilterOpen(true)}
                  variant='outline'
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'
                >
                  <Filter className='w-4 h-4 mr-2' />
                  Filters
                </Button>

                <div className='text-gray-400'>
                  {isLoading
                    ? 'Searching...'
                    : `${filteredProducts.length} results found`}
                </div>
              </div>

              <div className='flex items-center space-x-2'>
                <span className='text-gray-300'>View:</span>
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size='sm'
                  className={
                    viewMode === 'grid'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'border-gray-600 text-gray-300'
                  }
                >
                  <Grid className='w-4 h-4' />
                </Button>
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  className={
                    viewMode === 'list'
                      ? 'bg-yellow-400 text-gray-900'
                      : 'border-gray-600 text-gray-300'
                  }
                >
                  <List className='w-4 h-4' />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            {isLoading ? (
              <div className='text-center py-20'>
                <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Search className='w-8 h-8 text-gray-400 animate-pulse' />
                </div>
                <p className='text-gray-400'>Searching products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center py-20'
              >
                <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Search className='w-8 h-8 text-gray-400' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  No Results Found
                </h3>
                <p className='text-gray-400 mb-6'>
                  Try adjusting your search terms or filters to find what
                  you&apos;re looking for.
                </p>
                <Button
                  onClick={() => setSearchQuery('')}
                  className='bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                >
                  Clear Search
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className='bg-gray-800 border-gray-700 overflow-hidden group hover:border-gray-600 transition-all duration-300'>
                      <div className='relative'>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                            viewMode === 'grid' ? 'h-48' : 'h-32'
                          }`}
                        />

                        {/* Quick Actions Overlay */}
                        <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2'>
                          <Button
                            size='sm'
                            onClick={() => handleAddToCart(product)}
                            disabled={
                              !product.inStock || isAddingToCart === product.id
                            }
                            className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50'
                          >
                            <ShoppingCart className='w-4 h-4' />
                          </Button>
                          <Link href={`/shop/product/${product.id}`}>
                            <Button
                              size='sm'
                              variant='outline'
                              className='border-white text-white hover:bg-white hover:text-gray-900'
                            >
                              <Eye className='w-4 h-4' />
                            </Button>
                          </Link>
                          <Button
                            size='sm'
                            variant='outline'
                            onClick={() => handleWishlistToggle(product)}
                            className={`border-white text-white hover:bg-white hover:text-gray-900 ${
                              isInWishlist(product.id)
                                ? 'bg-yellow-400 text-gray-900'
                                : ''
                            }`}
                          >
                            <Heart className='w-4 h-4' />
                          </Button>
                          <Button
                            size='sm'
                            variant='outline'
                            onClick={() => handleShare(product)}
                            className='border-white text-white hover:bg-white hover:text-gray-900'
                          >
                            <Share2 className='w-4 h-4' />
                          </Button>
                        </div>

                        {/* Stock Status */}
                        <div className='absolute top-2 left-2'>
                          {product.inStock ? (
                            <span className='bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                              In Stock
                            </span>
                          ) : (
                            <span className='bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>

                      <div className='p-4'>
                        <h3 className='font-semibold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors'>
                          {product.name}
                        </h3>

                        <div className='flex items-center space-x-2 mb-3'>
                          <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (product.rating || 0)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className='text-gray-400 text-sm'>
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>

                        <div className='text-2xl font-bold text-yellow-400 mb-4'>
                          ${product.price.toFixed(2)}
                        </div>

                        <div className='space-y-2'>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            disabled={
                              !product.inStock || isAddingToCart === product.id
                            }
                            className='w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50'
                          >
                            {isAddingToCart === product.id
                              ? 'Adding...'
                              : 'Add to Cart'}
                          </Button>

                          <div className='flex space-x-2'>
                            <Link
                              href={`/shop/product/${product.id}`}
                              className='flex-1'
                            >
                              <Button
                                variant='outline'
                                className='w-full border-gray-600 text-gray-300 hover:bg-gray-700'
                              >
                                View Details
                              </Button>
                            </Link>
                            <Button
                              variant='outline'
                              onClick={() => handleWishlistToggle(product)}
                              className={`border-gray-600 text-gray-300 hover:bg-gray-700 ${
                                isInWishlist(product.id)
                                  ? 'bg-yellow-400 text-gray-900'
                                  : ''
                              }`}
                            >
                              <Heart className='w-4 h-4' />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>

      {/* Filter Modal */}
      <ProductFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={setFilters}
        categories={categories}
        brands={brands}
        maxPrice={1000}
        minPrice={0}
      />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen bg-background text-foreground flex items-center justify-center'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Search className='w-8 h-8 text-gray-400 animate-pulse' />
            </div>
            <p className='text-gray-400'>Loading search...</p>
          </div>
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
