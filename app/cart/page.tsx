'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Shield,
  Truck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart, CartItem } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-simple';
import { useToast } from '../components/Toast';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { addToWishlist } = useWishlist();
  const { addToast } = useToast();
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const { items, total, itemCount } = state;

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const getTotalPrice = () => total;

  const getTotalItems = () => itemCount;

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setIsUpdating(itemId);
    try {
      await updateQuantity(itemId, newQuantity);
    } catch {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to update quantity. Please try again.',
      });
    } finally {
      setIsUpdating(null);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    addToast({
      type: 'success',
      title: 'Item Removed',
      message: 'Item has been removed from your cart.',
    });
  };

  const handleMoveToWishlist = (item: CartItem) => {
    addToWishlist({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description || '',
    });
    removeItem(item.id);
    addToast({
      type: 'success',
      title: 'Moved to Wishlist',
      message: `${item.name} has been moved to your wishlist.`,
    });
  };

  const handleApplyPromoCode = () => {
    // Mock promo codes
    const validPromoCodes = {
      SAVE10: 0.1,
      WELCOME20: 0.2,
      FREESHIP: 0,
    };

    if (promoCode.toUpperCase() in validPromoCodes) {
      setAppliedPromo(promoCode.toUpperCase());
      addToast({
        type: 'success',
        title: 'Promo Code Applied',
        message: `Your ${promoCode.toUpperCase()} discount has been applied!`,
      });
    } else {
      addToast({
        type: 'error',
        title: 'Invalid Promo Code',
        message: 'The promo code you entered is not valid.',
      });
    }
  };

  const getDiscountAmount = () => {
    if (!appliedPromo) return 0;
    const validPromoCodes = {
      SAVE10: 0.1,
      WELCOME20: 0.2,
      FREESHIP: 0,
    };
    return (
      getTotalPrice() *
      (validPromoCodes[appliedPromo as keyof typeof validPromoCodes] || 0)
    );
  };

  const getShippingCost = () => {
    const total = getTotalPrice();
    if (total >= 100 || appliedPromo === 'FREESHIP') return 0;
    return 9.99;
  };

  const getFinalTotal = () => {
    return getTotalPrice() - getDiscountAmount() + getShippingCost();
  };

  if (items.length === 0) {
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
          {/* Empty Cart */}
          <section className='py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className='w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <ShoppingCart className='w-12 h-12 text-gray-600' />
                </div>
                <h1 className='text-4xl font-bold text-white mb-4'>
                  Your Cart is Empty
                </h1>
                <p className='text-xl text-gray-300 mb-8'>
                  Looks like you haven&apos;t added any items to your cart yet.
                  Start shopping to fill it up!
                </p>
                <Link href='/shop'>
                  <Button className='bg-yellow-400 text-gray-900 hover:bg-yellow-300'>
                    <ArrowRight className='w-4 h-4 mr-2' />
                    Start Shopping
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <Footer />
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
        {/* Cart Header */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='flex items-center justify-between'
            >
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center'>
                  <ShoppingCart className='w-5 h-5 text-gray-900' />
                </div>
                <h1 className='text-3xl font-bold text-white'>Shopping Cart</h1>
                <span className='bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm'>
                  {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
                </span>
              </div>

              <Link href='/shop'>
                <Button
                  variant='outline'
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'
                >
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Cart Content */}
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Cart Items */}
              <div className='lg:col-span-2'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-4'
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className='bg-gray-800 border-gray-700 p-4'>
                        <div className='flex items-center space-x-4'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className='w-20 h-20 object-cover rounded-lg'
                          />

                          <div className='flex-1'>
                            <h3 className='font-semibold text-white mb-1'>
                              {item.name}
                            </h3>
                            <p className='text-gray-400 text-sm mb-2'>
                              {item.category}
                            </p>
                            <div className='text-xl font-bold text-yellow-400'>
                              ${item.price.toFixed(2)}
                            </div>
                          </div>

                          <div className='flex items-center space-x-2'>
                            <Button
                              size='sm'
                              variant='outline'
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={
                                item.quantity <= 1 || isUpdating === item.id
                              }
                              className='border-gray-600 text-gray-300 hover:bg-gray-700'
                            >
                              <Minus className='w-4 h-4' />
                            </Button>

                            <span className='text-white font-medium min-w-[2rem] text-center'>
                              {isUpdating === item.id ? '...' : item.quantity}
                            </span>

                            <Button
                              size='sm'
                              variant='outline'
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              disabled={isUpdating === item.id}
                              className='border-gray-600 text-gray-300 hover:bg-gray-700'
                            >
                              <Plus className='w-4 h-4' />
                            </Button>
                          </div>

                          <div className='text-right'>
                            <div className='text-xl font-bold text-white mb-2'>
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>

                            <div className='flex space-x-2'>
                              <Button
                                size='sm'
                                variant='outline'
                                onClick={() => handleMoveToWishlist(item)}
                                className='border-gray-600 text-gray-300 hover:bg-gray-700'
                              >
                                <Heart className='w-4 h-4' />
                              </Button>
                              <Button
                                size='sm'
                                variant='outline'
                                onClick={() => handleRemoveItem(item.id)}
                                className='border-red-600 text-red-400 hover:bg-red-900/20'
                              >
                                <Trash2 className='w-4 h-4' />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className='lg:col-span-1'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='sticky top-8'
                >
                  <Card className='bg-gray-800 border-gray-700 p-6'>
                    <h3 className='text-xl font-semibold text-white mb-6'>
                      Order Summary
                    </h3>

                    {/* Promo Code */}
                    <div className='mb-6'>
                      <label className='block text-gray-300 font-medium mb-2'>
                        Promo Code
                      </label>
                      <div className='flex space-x-2'>
                        <Input
                          value={promoCode}
                          onChange={e => setPromoCode(e.target.value)}
                          placeholder='Enter code'
                          className='bg-gray-700 border-gray-600 text-white'
                        />
                        <Button
                          onClick={handleApplyPromoCode}
                          disabled={!promoCode.trim()}
                          className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50'
                        >
                          Apply
                        </Button>
                      </div>
                      {appliedPromo && (
                        <div className='mt-2 text-green-400 text-sm'>
                          ✓ {appliedPromo} applied
                        </div>
                      )}
                    </div>

                    {/* Order Details */}
                    <div className='space-y-3 mb-6'>
                      <div className='flex justify-between text-gray-300'>
                        <span>Subtotal</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>

                      {getDiscountAmount() > 0 && (
                        <div className='flex justify-between text-green-400'>
                          <span>Discount ({appliedPromo})</span>
                          <span>-${getDiscountAmount().toFixed(2)}</span>
                        </div>
                      )}

                      <div className='flex justify-between text-gray-300'>
                        <span>Shipping</span>
                        <span>
                          {getShippingCost() === 0
                            ? 'Free'
                            : `$${getShippingCost().toFixed(2)}`}
                        </span>
                      </div>

                      <div className='border-t border-gray-700 pt-3'>
                        <div className='flex justify-between text-xl font-bold text-white'>
                          <span>Total</span>
                          <span>${getFinalTotal().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Link href='/checkout' className='block'>
                      <Button className='w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 mb-4'>
                        <CreditCard className='w-4 h-4 mr-2' />
                        Proceed to Checkout
                      </Button>
                    </Link>

                    {/* Security Badges */}
                    <div className='flex items-center justify-center space-x-4 text-gray-400 text-sm'>
                      <div className='flex items-center space-x-1'>
                        <Shield className='w-4 h-4' />
                        <span>Secure</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <Truck className='w-4 h-4' />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
