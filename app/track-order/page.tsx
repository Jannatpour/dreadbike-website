'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft,
  Search,
  Package,
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  RefreshCw,
  Info,
  Shield,
  Award,
  Users,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const trackingStatuses = [
  {
    status: 'Order Placed',
    description: 'Your order has been received and is being processed',
    icon: <Package className='w-5 h-5' />,
    completed: true,
    date: '2024-01-15 10:30 AM',
  },
  {
    status: 'Processing',
    description: 'Your items are being prepared for shipment',
    icon: <Package className='w-5 h-5' />,
    completed: true,
    date: '2024-01-15 2:15 PM',
  },
  {
    status: 'Shipped',
    description: 'Your order is on its way to you',
    icon: <Truck className='w-5 h-5' />,
    completed: true,
    date: '2024-01-16 9:45 AM',
  },
  {
    status: 'In Transit',
    description: 'Package is moving through our delivery network',
    icon: <Truck className='w-5 h-5' />,
    completed: false,
    date: 'Expected: 2024-01-18',
  },
  {
    status: 'Out for Delivery',
    description: 'Your package is out for delivery today',
    icon: <MapPin className='w-5 h-5' />,
    completed: false,
    date: 'Expected: 2024-01-18',
  },
  {
    status: 'Delivered',
    description: 'Package has been delivered successfully',
    icon: <CheckCircle className='w-5 h-5' />,
    completed: false,
    date: 'Not yet delivered',
  },
];

const sampleOrders = [
  {
    orderNumber: 'DB-2024-001234',
    status: 'In Transit',
    items: ['Racing Suit Pro', 'Carbon Helmet', 'Racing Gloves'],
    total: '$1,247.99',
    trackingNumber: '1Z999AA1234567890',
    estimatedDelivery: '2024-01-18',
    carrier: 'UPS',
    currentLocation: 'Chicago, IL',
    shippingAddress: '123 Main St, New York, NY 10001',
    orderDate: '2024-01-15',
    lastUpdate: '2024-01-16 9:45 AM',
  },
  {
    orderNumber: 'DB-2024-001235',
    status: 'Delivered',
    items: ['Racing Boots', 'Performance Jacket'],
    total: '$456.99',
    trackingNumber: '1Z999AA1234567891',
    estimatedDelivery: '2024-01-15',
    carrier: 'FedEx',
    currentLocation: 'Delivered',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210',
    orderDate: '2024-01-12',
    lastUpdate: '2024-01-15 2:30 PM',
  },
];

const trackingFeatures = [
  {
    title: 'Real-Time Updates',
    description: 'Get instant notifications when your order status changes',
    icon: 'RefreshCw',
  },
  {
    title: 'Delivery Notifications',
    description: 'SMS and email alerts for delivery confirmations',
    icon: 'Mail',
  },
  {
    title: 'Package Protection',
    description: 'Full insurance coverage on all shipments',
    icon: 'Shield',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service for tracking issues',
    icon: 'Users',
  },
];

const trackingFaqs = [
  {
    question: 'How often is tracking information updated?',
    answer:
      "Tracking information is updated in real-time as your package moves through our delivery network. You'll receive notifications for major status changes.",
  },
  {
    question: 'What if my package is delayed?',
    answer:
      "If your package is delayed, we'll automatically notify you and provide updated delivery estimates. You can also contact our support team for assistance.",
  },
  {
    question: 'Can I change my delivery address?',
    answer:
      'Yes, you can request address changes before your package ships. Contact our support team immediately if your order has already shipped.',
  },
  {
    question: 'What if I miss the delivery?',
    answer:
      'Most carriers will attempt delivery multiple times or leave your package in a secure location. You can also request to hold at a local facility.',
  },
  {
    question: 'How do I track international orders?',
    answer:
      "International orders can be tracked using the same tracking number. You'll see updates as the package moves through customs and local delivery networks.",
  },
  {
    question: "What if my tracking number isn't working?",
    answer:
      "If your tracking number isn't working, please contact our support team. We can help you locate your order and provide alternative tracking methods.",
  },
];

const getIcon = (iconName: string) => {
  const iconMap = {
    RefreshCw: <RefreshCw className='w-5 h-5' />,
    Mail: <Mail className='w-5 h-5' />,
    Shield: <Shield className='w-5 h-5' />,
    Users: <Users className='w-5 h-5' />,
    Package: <Package className='w-5 h-5' />,
    Truck: <Truck className='w-5 h-5' />,
    MapPin: <MapPin className='w-5 h-5' />,
    CheckCircle: <CheckCircle className='w-5 h-5' />,
    Clock: <Clock className='w-5 h-5' />,
    AlertCircle: <AlertCircle className='w-5 h-5' />,
    Search: <Search className='w-5 h-5' />,
    Phone: <Phone className='w-5 h-5' />,
    Globe: <Globe className='w-5 h-5' />,
    Info: <Info className='w-5 h-5' />,
    Award: <Award className='w-5 h-5' />,
    Star: <Star className='w-5 h-5' />,
    Zap: <Zap className='w-5 h-5' />,
  };
  return (
    iconMap[iconName as keyof typeof iconMap] || <Info className='w-5 h-5' />
  );
};

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const foundOrder = sampleOrders.find(
        order =>
          order.trackingNumber === trackingNumber ||
          order.orderNumber === orderNumber
      );
      setSearchResults(foundOrder || null);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Global Background Effects */}
      <div
        className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none'
        style={{ zIndex: -2 }}
      />
      <div
        className='fixed inset-0 bg-[url("/images/texture-overlay.png")] opacity-5 mix-blend-overlay pointer-events-none'
        style={{ zIndex: -1 }}
      />

      <Header />

      <div className='pt-16 sm:pt-20'>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-gray-900 to-gray-800 border-b border-yellow-400/30 py-8 sm:py-12 relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='flex items-center gap-4 mb-4 sm:mb-6'>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                >
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  <span className='hidden sm:inline'>Back to Home</span>
                  <span className='sm:hidden'>Back</span>
                </Button>
              </Link>
            </div>

            <div className='text-center relative z-50'>
              <div className='flex items-center justify-center gap-3 mb-4'>
                <Search className='w-8 h-8 text-yellow-400' />
                <h1
                  className='text-4xl md:text-5xl font-black text-white relative z-50'
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >
                  TRACK YOUR ORDER
                </h1>
              </div>
              <p className='text-lg text-gray-300 max-w-3xl mx-auto relative z-50'>
                Track your order status and get real-time updates on your
                shipment. Enter your tracking number or order number below.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
          {/* Tracking Features */}
          <div className='mb-12 sm:mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Why Choose Our Tracking System?
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {trackingFeatures.map((feature, index) => (
                <div key={feature.title} className='relative z-10'>
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardContent className='p-4 sm:p-6 text-center'>
                      <div className='w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                        {getIcon(feature.icon)}
                      </div>
                      <h3 className='text-sm sm:text-lg font-bold text-white mb-2 relative z-10'>
                        {feature.title}
                      </h3>
                      <p className='text-xs sm:text-sm text-gray-300 relative z-10'>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Search Form */}
          <div className='mb-12 sm:mb-16 relative z-10'>
            <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 max-w-2xl mx-auto'>
              <CardHeader className='pb-4 sm:pb-6'>
                <CardTitle className='text-xl sm:text-2xl text-yellow-400 text-center'>
                  Track Your Package
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4 sm:px-6'>
                <form
                  onSubmit={handleTrackOrder}
                  className='space-y-4 sm:space-y-6'
                >
                  <div className='space-y-3 sm:space-y-4'>
                    <div>
                      <label
                        htmlFor='trackingNumber'
                        className='block text-sm font-medium text-white mb-2'
                      >
                        Tracking Number
                      </label>
                      <Input
                        id='trackingNumber'
                        type='text'
                        placeholder='Enter tracking number (e.g., 1Z999AA1234567890)'
                        value={trackingNumber}
                        onChange={e => setTrackingNumber(e.target.value)}
                        className='bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400 text-sm sm:text-base'
                      />
                    </div>
                    <div className='text-center text-gray-400 text-sm'>OR</div>
                    <div>
                      <label
                        htmlFor='orderNumber'
                        className='block text-sm font-medium text-white mb-2'
                      >
                        Order Number
                      </label>
                      <Input
                        id='orderNumber'
                        type='text'
                        placeholder='Enter order number (e.g., DB-2024-001234)'
                        value={orderNumber}
                        onChange={e => setOrderNumber(e.target.value)}
                        className='bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400 text-sm sm:text-base'
                      />
                    </div>
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 sm:py-3 text-sm sm:text-base'
                    disabled={isSearching || (!trackingNumber && !orderNumber)}
                  >
                    {isSearching ? (
                      <div className='flex items-center justify-center gap-2'>
                        <div className='w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin' />
                        <span className='hidden sm:inline'>Searching...</span>
                        <span className='sm:hidden'>Searching</span>
                      </div>
                    ) : (
                      <div className='flex items-center justify-center gap-2'>
                        <Search className='w-4 h-4' />
                        <span className='hidden sm:inline'>Track Order</span>
                        <span className='sm:hidden'>Track</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          {searchResults && (
            <div className='mb-12 sm:mb-16 relative z-10'>
              <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                <CardHeader className='pb-4 sm:pb-6'>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                    <CardTitle className='text-xl sm:text-2xl text-yellow-400'>
                      Order Found
                    </CardTitle>
                    <span
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold self-start sm:self-auto ${
                        searchResults.status === 'Delivered'
                          ? 'bg-green-400/20 text-green-400'
                          : searchResults.status === 'In Transit'
                          ? 'bg-blue-400/20 text-blue-400'
                          : 'bg-yellow-400/20 text-yellow-400'
                      }`}
                    >
                      {searchResults.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className='px-4 sm:px-6'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
                    <div>
                      <h4 className='font-bold text-white mb-4 text-sm sm:text-base'>
                        Order Details
                      </h4>
                      <div className='space-y-2 text-gray-300 text-xs sm:text-sm'>
                        <p>
                          <span className='font-semibold'>Order Number:</span>{' '}
                          {searchResults.orderNumber}
                        </p>
                        <p>
                          <span className='font-semibold'>
                            Tracking Number:
                          </span>{' '}
                          {searchResults.trackingNumber}
                        </p>
                        <p>
                          <span className='font-semibold'>Carrier:</span>{' '}
                          {searchResults.carrier}
                        </p>
                        <p>
                          <span className='font-semibold'>Total:</span>{' '}
                          {searchResults.total}
                        </p>
                        <p>
                          <span className='font-semibold'>Order Date:</span>{' '}
                          {searchResults.orderDate}
                        </p>
                        <p>
                          <span className='font-semibold'>
                            Estimated Delivery:
                          </span>{' '}
                          {searchResults.estimatedDelivery}
                        </p>
                        <p>
                          <span className='font-semibold'>
                            Current Location:
                          </span>{' '}
                          {searchResults.currentLocation}
                        </p>
                        <p>
                          <span className='font-semibold'>Last Update:</span>{' '}
                          {searchResults.lastUpdate}
                        </p>
                      </div>

                      <h4 className='font-bold text-white mb-4 mt-6 text-sm sm:text-base'>
                        Shipping Address
                      </h4>
                      <p className='text-gray-300 text-xs sm:text-sm'>
                        {searchResults.shippingAddress}
                      </p>

                      <h4 className='font-bold text-white mb-4 mt-6 text-sm sm:text-base'>
                        Items Ordered
                      </h4>
                      <ul className='space-y-1'>
                        {searchResults.items.map((item, index) => (
                          <li
                            key={index}
                            className='text-gray-300 flex items-center text-xs sm:text-sm'
                          >
                            <Package className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 flex-shrink-0' />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-bold text-white mb-4 text-sm sm:text-base'>
                        Tracking Status
                      </h4>
                      <div className='space-y-3 sm:space-y-4'>
                        {trackingStatuses.map((status, index) => (
                          <div key={index} className='flex items-start gap-3'>
                            <div
                              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                status.completed
                                  ? 'bg-green-400/20 text-green-400'
                                  : 'bg-gray-600/20 text-gray-400'
                              }`}
                            >
                              {status.completed ? (
                                <CheckCircle className='w-3 h-3 sm:w-5 sm:h-5' />
                              ) : (
                                getIcon(status.icon.type.name)
                              )}
                            </div>
                            <div className='flex-1 min-w-0'>
                              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2'>
                                <h5
                                  className={`font-semibold text-xs sm:text-sm ${
                                    status.completed
                                      ? 'text-white'
                                      : 'text-gray-400'
                                  }`}
                                >
                                  {status.status}
                                </h5>
                                <span className='text-xs text-gray-400'>
                                  {status.date}
                                </span>
                              </div>
                              <p
                                className={`text-xs sm:text-sm ${
                                  status.completed
                                    ? 'text-gray-300'
                                    : 'text-gray-500'
                                }`}
                              >
                                {status.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* No Results */}
          {searchResults === null &&
            !isSearching &&
            (trackingNumber || orderNumber) && (
              <div className='mb-16 relative z-10'>
                <Card className='bg-card/80 backdrop-blur-sm border-red-400/30'>
                  <CardContent className='p-8 text-center'>
                    <AlertCircle className='w-16 h-16 text-red-400 mx-auto mb-4' />
                    <h3 className='text-xl font-bold text-white mb-2'>
                      Order Not Found
                    </h3>
                    <p className='text-gray-300 mb-4'>
                      We couldn't find an order with the provided tracking or
                      order number.
                    </p>
                    <p className='text-sm text-gray-400'>
                      Please check your email for the correct tracking
                      information, or contact our support team.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

          {/* FAQ Section */}
          <div className='mb-12 sm:mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Tracking FAQs
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
              {trackingFaqs.map((faq, index) => (
                <div key={index} className='relative z-10'>
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardContent className='p-4 sm:p-6'>
                      <h3 className='font-bold text-white mb-2 text-sm sm:text-base relative z-10'>
                        {faq.question}
                      </h3>
                      <p className='text-gray-300 text-xs sm:text-sm relative z-10'>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div
            className='relative'
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <Card className='bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30'>
              <CardContent className='p-6 sm:p-8 text-center'>
                <div className='flex items-center justify-center gap-3 mb-4 sm:mb-6'>
                  <Award className='w-6 h-6 sm:w-8 sm:h-8 text-yellow-400' />
                  <h3
                    className='text-xl sm:text-2xl font-bold text-white'
                    style={{
                      zIndex: 9999,
                      position: 'relative',
                      color: '#ffffff',
                      display: 'block',
                      opacity: 1,
                      visibility: 'visible',
                    }}
                  >
                    Need Help Tracking Your Order?
                  </h3>
                </div>
                <p
                  className='text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base'
                  style={{
                    zIndex: 9999,
                    position: 'relative',
                    color: '#d1d5db',
                    display: 'block',
                    opacity: 1,
                    visibility: 'visible',
                  }}
                >
                  Having trouble finding your order? Our customer service team
                  is here to help with tracking issues and delivery questions.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8'>
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <Phone className='w-6 h-6 sm:w-8 sm:h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-sm sm:text-lg font-bold text-white mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#ffffff',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Call Us
                    </h4>
                    <p
                      className='text-gray-300 text-xs sm:text-sm mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#d1d5db',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Speak directly with our team
                    </p>
                    <a
                      href='tel:+16666373232'
                      className='text-yellow-400 font-bold text-xs sm:text-sm'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#facc15',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      +1 (666) DREAD-BIKE
                    </a>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <Mail className='w-6 h-6 sm:w-8 sm:h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-sm sm:text-lg font-bold text-white mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#ffffff',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Email Us
                    </h4>
                    <p
                      className='text-gray-300 text-xs sm:text-sm mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#d1d5db',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Get detailed responses
                    </p>
                    <a
                      href='mailto:tracking@dreadbike.com'
                      className='text-yellow-400 font-bold text-xs sm:text-sm'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#facc15',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      tracking@dreadbike.com
                    </a>
                  </div>
                  <div className='text-center'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                      <Globe className='w-6 h-6 sm:w-8 sm:h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-sm sm:text-lg font-bold text-white mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#ffffff',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Live Chat
                    </h4>
                    <p
                      className='text-gray-300 text-xs sm:text-sm mb-2'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#d1d5db',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Instant support online
                    </p>
                    <Link
                      href='/contact'
                      className='text-yellow-400 font-bold text-xs sm:text-sm'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#facc15',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      Start Chat
                    </Link>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
                  <Link href='/contact'>
                    <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto'>
                      Contact Support
                    </Button>
                  </Link>
                  <Link href='/shipping-returns'>
                    <Button
                      variant='outline'
                      className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto'
                    >
                      Shipping Info
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
