'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShoppingCart,
  Share2,
  Eye,
  Trash2,
  ArrowLeft,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useWishlist } from '@/lib/wishlist-simple';
import { useCart } from '@/lib/cart-context';
import { useToast } from '../components/Toast';
import Image from 'next/image';
import Link from 'next/link';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
//   description: string;
//   inStock: boolean;
//   rating?: number;
//   reviews?: number;
//   features?: string[];
// }

export default function WishlistPage() {
  const { items: wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const [isAddingToCart, setIsAddingToCart] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<
    'newest' | 'oldest' | 'price-low' | 'price-high' | 'name'
  >('newest');

  const handleAddToCart = async (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
  }) => {
    setIsAddingToCart(item.id);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1,
          category: item.category,
          description: item.description || '',
        },
      });
      addToast({
        type: 'success',
        title: 'Added to Cart',
        message: `${item.name} has been added to your cart.`,
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

  const handleRemoveFromWishlist = (item: { id: string; name: string }) => {
    removeFromWishlist(item.id);
    addToast({
      type: 'success',
      title: 'Removed from Wishlist',
      message: `${item.name} has been removed from your wishlist.`,
    });
  };

  const handleShare = async (item: { id: string; name: string }) => {
    const shareData = {
      title: item.name,
      text: `Check out this ${item.name} on DreadBike!`,
      url: `${window.location.origin}/shop/product/${item.id}`,
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

  const handleClearWishlist = () => {
    clearWishlist();
    addToast({
      type: 'success',
      title: 'Wishlist Cleared',
      message: 'All items have been removed from your wishlist.',
    });
  };

  const sortedWishlist = [...wishlist].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      case 'oldest':
        return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

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
        {/* Hero Section */}
        <section className='py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center'
            >
              <div className='flex items-center justify-center mb-6'>
                <div className='w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center'>
                  <Heart className='w-8 h-8 text-gray-900 fill-current' />
                </div>
              </div>
              <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
                Your Wishlist
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                {wishlist.length === 0
                  ? 'Your wishlist is empty. Start adding items you love!'
                  : `You have ${wishlist.length} item${
                      wishlist.length !== 1 ? 's' : ''
                    } in your wishlist.`}
              </p>

              {wishlist.length > 0 && (
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                  <Link href='/shop'>
                    <Button
                      variant='outline'
                      className='border-gray-600 text-gray-300 hover:bg-gray-700'
                    >
                      <ArrowLeft className='w-4 h-4 mr-2' />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    onClick={handleClearWishlist}
                    variant='outline'
                    className='border-red-600 text-red-400 hover:bg-red-900/20'
                  >
                    <Trash2 className='w-4 h-4 mr-2' />
                    Clear Wishlist
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Filters and Sort */}
        {wishlist.length > 0 && (
          <section className='py-4 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex flex-col sm:flex-row items-center justify-between gap-4'
              >
                <div className='flex items-center space-x-4'>
                  <span className='text-gray-300'>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={e =>
                      setSortBy(
                        e.target.value as
                          | 'newest'
                          | 'oldest'
                          | 'price-low'
                          | 'price-high'
                          | 'name'
                      )
                    }
                    className='bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  >
                    <option value='newest'>Newest First</option>
                    <option value='oldest'>Oldest First</option>
                    <option value='price-low'>Price: Low to High</option>
                    <option value='price-high'>Price: High to Low</option>
                    <option value='name'>Name A-Z</option>
                  </select>
                </div>

                <div className='text-gray-400 text-sm'>
                  {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} total
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Wishlist Items */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            {wishlist.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-center py-20'
              >
                <div className='w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Heart className='w-12 h-12 text-gray-600' />
                </div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Your Wishlist is Empty
                </h3>
                <p className='text-gray-400 mb-8 max-w-md mx-auto'>
                  Start building your wishlist by adding products you love. You
                  can add items from any product page.
                </p>
                <Link href='/shop'>
                  <Button className='bg-yellow-400 text-gray-900 hover:bg-yellow-300'>
                    <ShoppingCart className='w-4 h-4 mr-2' />
                    Start Shopping
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              >
                {sortedWishlist.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className='bg-gray-800 border-gray-700 overflow-hidden group hover:border-gray-600 transition-all duration-300'>
                      <div className='relative'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={200}
                          className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                        />

                        {/* Quick Actions Overlay */}
                        <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2'>
                          <Button
                            size='sm'
                            onClick={() => handleAddToCart(item)}
                            disabled={isAddingToCart === item.id}
                            className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50'
                          >
                            <ShoppingCart className='w-4 h-4' />
                          </Button>
                          <Link href={`/shop/product/${item.id}`}>
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
                            onClick={() => handleShare(item)}
                            className='border-white text-white hover:bg-white hover:text-gray-900'
                          >
                            <Share2 className='w-4 h-4' />
                          </Button>
                        </div>

                        {/* Stock Status */}
                        <div className='absolute top-2 left-2'>
                          <span className='bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
                            In Stock
                          </span>
                        </div>

                        {/* Remove Button */}
                        <Button
                          size='sm'
                          variant='ghost'
                          onClick={() => handleRemoveFromWishlist(item)}
                          className='absolute top-2 right-2 bg-black/50 hover:bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        >
                          <Trash2 className='w-4 h-4' />
                        </Button>
                      </div>

                      <div className='p-4'>
                        <h3 className='font-semibold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors'>
                          {item.name}
                        </h3>

                        <div className='flex items-center space-x-2 mb-3'>
                          <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className='w-4 h-4 text-gray-600' />
                            ))}
                          </div>
                          <span className='text-gray-400 text-sm'>
                            No rating available
                          </span>
                        </div>

                        <div className='text-2xl font-bold text-yellow-400 mb-4'>
                          ${item.price.toFixed(2)}
                        </div>

                        <div className='space-y-2'>
                          <Button
                            onClick={() => handleAddToCart(item)}
                            disabled={isAddingToCart === item.id}
                            className='w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50'
                          >
                            {isAddingToCart === item.id
                              ? 'Adding...'
                              : 'Add to Cart'}
                          </Button>

                          <div className='flex space-x-2'>
                            <Link
                              href={`/shop/product/${item.id}`}
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
                              onClick={() => handleShare(item)}
                              className='border-gray-600 text-gray-300 hover:bg-gray-700'
                            >
                              <Share2 className='w-4 h-4' />
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
    </div>
  );
}
