'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Home, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';

export default function CheckoutSuccessPage() {
  const { dispatch } = useCart();

  // Clear cart when success page loads
  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);
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
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8'
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.5,
              }}
              className='flex justify-center'
            >
              <div className='w-24 h-24 bg-green-500 rounded-full flex items-center justify-center'>
                <CheckCircle className='w-12 h-12 text-white' />
              </div>
            </motion.div>

            {/* Success Message */}
            <div className='space-y-4'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='text-4xl sm:text-5xl font-bold text-white'
              >
                Order Confirmed!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className='text-xl text-gray-300 max-w-2xl mx-auto'
              >
                Thank you for your order! Your gear is being prepared and will
                be shipped within 1-2 business days.
              </motion.p>
            </div>

            {/* Order Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className='bg-gray-800/50 rounded-lg p-6 border border-gray-700 max-w-md mx-auto'
            >
              <h3 className='text-lg font-semibold text-white mb-4'>
                What&apos;s Next?
              </h3>
              <div className='space-y-3 text-left'>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                  <span className='text-gray-300'>
                    Order confirmation email sent
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                  <span className='text-gray-300'>Processing your order</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-gray-600 rounded-full' />
                  <span className='text-gray-500'>
                    Shipping notification (1-2 days)
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-gray-600 rounded-full' />
                  <span className='text-gray-500'>
                    Delivery (3-5 business days)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <Link href='/shop'>
                <Button className='bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto'>
                  <ShoppingBag className='w-4 h-4 mr-2' />
                  Continue Shopping
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </Link>

              <Link href='/'>
                <Button
                  variant='outline'
                  className='w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700'
                >
                  <Home className='w-4 h-4 mr-2' />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className='pt-8 border-t border-gray-700'
            >
              <p className='text-gray-400 mb-4'>
                Questions about your order? We&apos;re here to help!
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center text-sm'>
                <a
                  href='mailto:orders@dreadbike.com'
                  className='text-yellow-400 hover:text-yellow-300 transition-colors'
                >
                  orders@dreadbike.com
                </a>
                <span className='hidden sm:block text-gray-600'>•</span>
                <a
                  href='tel:+16666373232'
                  className='text-yellow-400 hover:text-yellow-300 transition-colors'
                >
                  +1 (666) DREAD-BIKE
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
