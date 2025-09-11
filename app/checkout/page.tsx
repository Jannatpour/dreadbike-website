'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CheckoutForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({});

  useEffect(() => {
    if (state.items.length === 0) {
      router.push('/shop');
    }
  }, [state.items.length, router]);

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutForm> = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.cardName) newErrors.cardName = 'Card name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CheckoutForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Create order
      const orderData = {
        items: state.items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: state.total,
        customer: {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
        },
        payment: {
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          cardName: formData.cardName,
        },
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Redirect to success page - cart will be cleared there
        router.push('/checkout/success');
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      // In production, show error message to user
      alert('Failed to process order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (state.items.length === 0 && !isProcessing) {
    return null; // Will redirect to shop
  }

  // Show loading state if processing with empty cart
  if (state.items.length === 0 && isProcessing) {
    return (
      <div className='min-h-screen bg-background text-foreground flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
          <p className='text-gray-300'>Processing your order...</p>
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
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-8'
          >
            <Button
              variant='ghost'
              onClick={() => router.back()}
              className='text-gray-400 hover:text-yellow-400'
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Cart
            </Button>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className='bg-gray-800/50 border-gray-700'>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold text-white flex items-center'>
                    <CreditCard className='w-6 h-6 mr-2 text-yellow-400' />
                    Checkout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Contact Information */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold text-white'>
                        Contact Information
                      </h3>
                      <div>
                        <Input
                          type='email'
                          placeholder='Email address'
                          value={formData.email}
                          onChange={e =>
                            handleInputChange('email', e.target.value)
                          }
                          className={`bg-gray-700 border-gray-600 text-white ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <p className='text-red-400 text-sm mt-1'>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Shipping Information */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold text-white'>
                        Shipping Information
                      </h3>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <Input
                            placeholder='First name'
                            value={formData.firstName}
                            onChange={e =>
                              handleInputChange('firstName', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.firstName ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.firstName && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder='Last name'
                            value={formData.lastName}
                            onChange={e =>
                              handleInputChange('lastName', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.lastName ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.lastName && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                      <Input
                        placeholder='Address'
                        value={formData.address}
                        onChange={e =>
                          handleInputChange('address', e.target.value)
                        }
                        className={`bg-gray-700 border-gray-600 text-white ${
                          errors.address ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.address && (
                        <p className='text-red-400 text-sm mt-1'>
                          {errors.address}
                        </p>
                      )}
                      <div className='grid grid-cols-3 gap-4'>
                        <div>
                          <Input
                            placeholder='City'
                            value={formData.city}
                            onChange={e =>
                              handleInputChange('city', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.city ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.city && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.city}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder='State'
                            value={formData.state}
                            onChange={e =>
                              handleInputChange('state', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.state ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.state && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.state}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder='ZIP'
                            value={formData.zipCode}
                            onChange={e =>
                              handleInputChange('zipCode', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.zipCode ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.zipCode && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.zipCode}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold text-white'>
                        Payment Information
                      </h3>
                      <Input
                        placeholder='Card number'
                        value={formData.cardNumber}
                        onChange={e =>
                          handleInputChange('cardNumber', e.target.value)
                        }
                        className={`bg-gray-700 border-gray-600 text-white ${
                          errors.cardNumber ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.cardNumber && (
                        <p className='text-red-400 text-sm mt-1'>
                          {errors.cardNumber}
                        </p>
                      )}
                      <Input
                        placeholder='Name on card'
                        value={formData.cardName}
                        onChange={e =>
                          handleInputChange('cardName', e.target.value)
                        }
                        className={`bg-gray-700 border-gray-600 text-white ${
                          errors.cardName ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.cardName && (
                        <p className='text-red-400 text-sm mt-1'>
                          {errors.cardName}
                        </p>
                      )}
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <Input
                            placeholder='MM/YY'
                            value={formData.expiryDate}
                            onChange={e =>
                              handleInputChange('expiryDate', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.expiryDate ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.expiryDate && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.expiryDate}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder='CVV'
                            value={formData.cvv}
                            onChange={e =>
                              handleInputChange('cvv', e.target.value)
                            }
                            className={`bg-gray-700 border-gray-600 text-white ${
                              errors.cvv ? 'border-red-500' : ''
                            }`}
                          />
                          {errors.cvv && (
                            <p className='text-red-400 text-sm mt-1'>
                              {errors.cvv}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button
                      type='submit'
                      disabled={isProcessing}
                      className='w-full bg-yellow-400 text-black hover:bg-yellow-500 disabled:bg-gray-600'
                      size='lg'
                    >
                      {isProcessing ? (
                        <div className='flex items-center'>
                          <div className='w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2' />
                          Processing...
                        </div>
                      ) : (
                        <div className='flex items-center'>
                          <Lock className='w-4 h-4 mr-2' />
                          Complete Order
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className='bg-gray-800/50 border-gray-700 sticky top-8'>
                <CardHeader>
                  <CardTitle className='text-xl font-bold text-white'>
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {state.items.map(item => (
                      <div
                        key={item.id}
                        className='flex items-center space-x-4'
                      >
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
                          <p className='text-gray-400 text-xs'>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className='text-yellow-400 font-bold'>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}

                    <div className='border-t border-gray-700 pt-4 space-y-2'>
                      <div className='flex justify-between text-gray-300'>
                        <span>Subtotal</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                      <div className='flex justify-between text-gray-300'>
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className='flex justify-between text-gray-300'>
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <div className='flex justify-between text-xl font-bold text-white border-t border-gray-700 pt-2'>
                        <span>Total</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
