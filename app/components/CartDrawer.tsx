'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-l border-yellow-400/30 shadow-2xl z-50 overflow-hidden'
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10 mix-blend-overlay" />

            <div className='relative z-10 h-full flex flex-col'>
              {/* Header */}
              <div className='flex items-center justify-between p-6 border-b border-yellow-400/20'>
                <div className='flex items-center space-x-3'>
                  <ShoppingBag className='w-6 h-6 text-yellow-400' />
                  <h2 className='text-xl font-bold text-white'>
                    Shopping Cart
                  </h2>
                  {state.itemCount > 0 && (
                    <span className='bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded-full'>
                      {state.itemCount}
                    </span>
                  )}
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={onClose}
                  className='text-gray-400 hover:text-yellow-400'
                >
                  <X className='w-5 h-5' />
                </Button>
              </div>

              {/* Cart Items */}
              <div className='flex-1 overflow-y-auto p-6'>
                {state.items.length === 0 ? (
                  <div className='flex flex-col items-center justify-center h-full text-center'>
                    <ShoppingBag className='w-16 h-16 text-gray-600 mb-4' />
                    <h3 className='text-lg font-semibold text-gray-300 mb-2'>
                      Your cart is empty
                    </h3>
                    <p className='text-gray-500 mb-6'>
                      Add some gear to get started
                    </p>
                    <Link href='/shop'>
                      <Button
                        onClick={onClose}
                        className='bg-yellow-400 text-black hover:bg-yellow-500'
                      >
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {state.items.map(item => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='bg-gray-800/50 rounded-lg p-4 border border-gray-700'
                      >
                        <div className='flex items-start space-x-4'>
                          <div className='relative w-16 h-16 rounded-lg overflow-hidden bg-gray-700'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className='object-cover'
                            />
                          </div>

                          <div className='flex-1 min-w-0'>
                            <h4 className='font-semibold text-white text-sm truncate'>
                              {item.name}
                            </h4>
                            <p className='text-gray-400 text-xs mb-2'>
                              {item.category}
                            </p>
                            <p className='text-yellow-400 font-bold'>
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => removeItem(item.id)}
                            className='text-gray-400 hover:text-red-400'
                          >
                            <Trash2 className='w-4 h-4' />
                          </Button>
                        </div>

                        {/* Quantity Controls */}
                        <div className='flex items-center justify-between mt-3'>
                          <div className='flex items-center space-x-2'>
                            <Button
                              variant='outline'
                              size='icon'
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className='w-8 h-8'
                            >
                              <Minus className='w-3 h-3' />
                            </Button>
                            <span className='text-white font-semibold min-w-[2rem] text-center'>
                              {item.quantity}
                            </span>
                            <Button
                              variant='outline'
                              size='icon'
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className='w-8 h-8'
                            >
                              <Plus className='w-3 h-3' />
                            </Button>
                          </div>
                          <p className='text-yellow-400 font-bold'>
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className='border-t border-yellow-400/20 p-6 space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold text-white'>
                      Total:
                    </span>
                    <span className='text-2xl font-bold text-yellow-400'>
                      ${state.total.toFixed(2)}
                    </span>
                  </div>

                  <div className='flex space-x-3'>
                    <Button
                      variant='outline'
                      onClick={clearCart}
                      className='flex-1 text-gray-300 border-gray-600 hover:bg-gray-700'
                    >
                      Clear Cart
                    </Button>
                    <Link href='/checkout' className='flex-1'>
                      <Button
                        onClick={onClose}
                        className='w-full bg-yellow-400 text-black hover:bg-yellow-500'
                      >
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
