'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Truck,
  RotateCcw,
  Clock,
  Shield,
  Package,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info,
  Phone,
  Mail,
  Globe,
  CreditCard,
  RefreshCw,
  Zap,
  Star,
  Users,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const shippingOptions = [
  {
    name: 'Standard Shipping',
    duration: '5-7 Business Days',
    price: 'Free on orders over $200',
    description: 'Reliable ground shipping for most locations',
    features: [
      'Tracking included',
      'Insurance up to $100',
      'Signature confirmation',
    ],
  },
  {
    name: 'Express Shipping',
    duration: '2-3 Business Days',
    price: '$19.99',
    description: 'Fast delivery for urgent needs',
    features: [
      'Priority handling',
      'Insurance up to $500',
      'Signature required',
    ],
  },
  {
    name: 'Overnight Shipping',
    duration: 'Next Business Day',
    price: '$39.99',
    description: 'Rush delivery for critical orders',
    features: ['Express processing', 'Full insurance', 'Guaranteed delivery'],
  },
];

const returnReasons = [
  {
    title: 'Size Issues',
    description: 'Wrong size or fit problems',
    timeframe: '30 days',
    condition: 'Unworn, original packaging',
  },
  {
    title: 'Defective Items',
    description: 'Manufacturing defects or damage',
    timeframe: '90 days',
    condition: 'As received, with documentation',
  },
  {
    title: 'Wrong Item',
    description: 'Received different item than ordered',
    timeframe: '14 days',
    condition: 'Unopened, original packaging',
  },
  {
    title: 'Change of Mind',
    description: 'No longer want the item',
    timeframe: '14 days',
    condition: 'Unworn, original packaging',
  },
];

const shippingZones = [
  {
    zone: 'Continental US',
    standard: '5-7 days',
    express: '2-3 days',
    overnight: 'Next day',
    notes: 'Free standard shipping over $200',
  },
  {
    zone: 'Alaska & Hawaii',
    standard: '7-10 days',
    express: '3-5 days',
    overnight: '2-3 days',
    notes: 'Additional charges may apply',
  },
  {
    zone: 'Canada',
    standard: '7-14 days',
    express: '3-7 days',
    overnight: '2-5 days',
    notes: 'Duties and taxes not included',
  },
  {
    zone: 'International',
    standard: '10-21 days',
    express: '5-10 days',
    overnight: '3-7 days',
    notes: 'Customs clearance required',
  },
];

const trackingInfo = [
  {
    status: 'Order Placed',
    description: 'Your order has been received and is being processed',
    timeframe: 'Immediately',
    icon: 'CheckCircle',
  },
  {
    status: 'Processing',
    description: 'Items are being picked and prepared for shipment',
    timeframe: '1-2 business days',
    icon: 'RefreshCw',
  },
  {
    status: 'Shipped',
    description: 'Your order is on its way with tracking information',
    timeframe: '1-2 business days',
    icon: 'Truck',
  },
  {
    status: 'In Transit',
    description: 'Package is moving through our shipping network',
    timeframe: 'Varies by shipping method',
    icon: 'MapPin',
  },
  {
    status: 'Out for Delivery',
    description: 'Package is with your local delivery driver',
    timeframe: 'Delivery day',
    icon: 'Package',
  },
  {
    status: 'Delivered',
    description: 'Package has been successfully delivered',
    timeframe: 'As scheduled',
    icon: 'CheckCircle',
  },
];

const getIcon = (iconName: string) => {
  const iconMap = {
    CheckCircle: <CheckCircle className='w-5 h-5' />,
    RefreshCw: <RefreshCw className='w-5 h-5' />,
    Truck: <Truck className='w-5 h-5' />,
    MapPin: <MapPin className='w-5 h-5' />,
    Package: <Package className='w-5 h-5' />,
    Clock: <Clock className='w-5 h-5' />,
    Shield: <Shield className='w-5 h-5' />,
    Info: <Info className='w-5 h-5' />,
    Phone: <Phone className='w-5 h-5' />,
    Mail: <Mail className='w-5 h-5' />,
    Globe: <Globe className='w-5 h-5' />,
    CreditCard: <CreditCard className='w-5 h-5' />,
    RotateCcw: <RotateCcw className='w-5 h-5' />,
    Zap: <Zap className='w-5 h-5' />,
    Star: <Star className='w-5 h-5' />,
    Users: <Users className='w-5 h-5' />,
    Award: <Award className='w-5 h-5' />,
  };
  return (
    iconMap[iconName as keyof typeof iconMap] || <Info className='w-5 h-5' />
  );
};

export default function ShippingReturns() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className='min-h-screen bg-background text-foreground'>
        <Header />
        <div className='pt-16 sm:pt-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className='text-center'>
              <div className='animate-pulse'>
                <div className='h-8 bg-gray-700 rounded w-64 mx-auto mb-4'></div>
                <div className='h-4 bg-gray-700 rounded w-96 mx-auto'></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-gray-900 to-gray-800 border-b border-yellow-400/30 py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center gap-4 mb-6'>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                >
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div
              className='text-center relative'
              style={{ zIndex: 9999, position: 'relative' }}
            >
              <div className='flex items-center justify-center gap-3 mb-4'>
                <Truck className='w-8 h-8 text-yellow-400' />
                <h1
                  className='text-4xl md:text-5xl font-black text-white'
                  style={{
                    zIndex: 9999,
                    position: 'relative',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    color: '#ffffff',
                    display: 'block',
                    opacity: 1,
                    visibility: 'visible',
                  }}
                >
                  SHIPPING & RETURNS
                </h1>
              </div>
              <p
                className='text-lg text-gray-300 max-w-3xl mx-auto'
                style={{
                  zIndex: 9999,
                  position: 'relative',
                  color: '#d1d5db',
                  display: 'block',
                  opacity: 1,
                  visibility: 'visible',
                }}
              >
                Fast, reliable shipping and hassle-free returns. We make it easy
                to get your professional gear and return it if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* Order Tracking Process */}
          <div className='mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Order Tracking Process
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {trackingInfo.map((step, index) => (
                <div key={step.status} className='relative z-10'>
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardContent className='p-6 text-center'>
                      <div className='w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                        {getIcon(step.icon)}
                      </div>
                      <h3 className='text-lg font-bold text-white mb-2 relative z-10'>
                        {step.status}
                      </h3>
                      <p className='text-gray-300 text-sm mb-3 relative z-10'>
                        {step.description}
                      </p>
                      <div className='text-xs text-yellow-400 font-semibold relative z-10'>
                        {step.timeframe}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Options */}
          <div className='mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Shipping Options
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>
              {shippingOptions.map((option, index) => (
                <div key={option.name} className='relative z-10'>
                  <Card className='bg-card/80 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardHeader>
                      <div className='flex items-center gap-3 mb-2'>
                        <Truck className='w-6 h-6 text-yellow-400' />
                        <CardTitle className='text-xl text-yellow-400'>
                          {option.name}
                        </CardTitle>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-2xl font-bold text-white'>
                          {option.price}
                        </span>
                        <span className='text-sm text-gray-300'>
                          {option.duration}
                        </span>
                      </div>
                      <p className='text-gray-300 text-sm'>
                        {option.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <h4 className='text-sm font-bold text-white mb-2'>
                        Includes:
                      </h4>
                      <ul className='space-y-1'>
                        {option.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='text-sm text-gray-300 flex items-center'
                          >
                            <Shield className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Zones */}
          <div className='mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Delivery Times by Zone
            </h2>

            <Card className='bg-card/80 backdrop-blur-sm border-yellow-400/30'>
              <CardContent className='p-0'>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-yellow-400/30'>
                        <th className='text-left py-4 px-6 text-yellow-400 font-bold'>
                          Zone
                        </th>
                        <th className='text-center py-4 px-4 text-white font-bold'>
                          Standard
                        </th>
                        <th className='text-center py-4 px-4 text-white font-bold'>
                          Express
                        </th>
                        <th className='text-center py-4 px-4 text-white font-bold'>
                          Overnight
                        </th>
                        <th className='text-left py-4 px-6 text-white font-bold'>
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {shippingZones.map((zone, index) => (
                        <tr key={index} className='border-b border-gray-700/50'>
                          <td className='py-4 px-6 text-gray-300 font-semibold'>
                            {zone.zone}
                          </td>
                          <td className='text-center py-4 px-4 text-gray-300'>
                            {zone.standard}
                          </td>
                          <td className='text-center py-4 px-4 text-gray-300'>
                            {zone.express}
                          </td>
                          <td className='text-center py-4 px-4 text-gray-300'>
                            {zone.overnight}
                          </td>
                          <td className='py-4 px-6 text-gray-300 text-sm'>
                            {zone.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Returns Section */}
          <div className='mb-16 relative z-10'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 relative z-10'>
              Returns & Exchanges
            </h2>

            <div className='grid md:grid-cols-2 gap-8 mb-12'>
              <Card className='bg-card/80 backdrop-blur-sm border-yellow-400/30'>
                <CardHeader>
                  <div className='flex items-center gap-3 mb-2'>
                    <RotateCcw className='w-6 h-6 text-yellow-400' />
                    <CardTitle className='text-xl text-yellow-400'>
                      Return Reasons
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {returnReasons.map((reason, index) => (
                      <div
                        key={index}
                        className='border-l-4 border-yellow-400/30 pl-4'
                      >
                        <h4 className='font-bold text-white mb-1'>
                          {reason.title}
                        </h4>
                        <p className='text-gray-300 text-sm mb-1'>
                          {reason.description}
                        </p>
                        <div className='flex items-center gap-4 text-xs text-gray-400'>
                          <span>⏱️ {reason.timeframe}</span>
                          <span>📦 {reason.condition}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-card/80 backdrop-blur-sm border-yellow-400/30'>
                <CardHeader>
                  <div className='flex items-center gap-3 mb-2'>
                    <Package className='w-6 h-6 text-yellow-400' />
                    <CardTitle className='text-xl text-yellow-400'>
                      Return Process
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400 flex-shrink-0 mt-0.5'>
                        1
                      </div>
                      <div>
                        <h4 className='font-bold text-white mb-1'>
                          Contact Support
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Email or call to initiate return
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400 flex-shrink-0 mt-0.5'>
                        2
                      </div>
                      <div>
                        <h4 className='font-bold text-white mb-1'>
                          Get Return Label
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          We'll email you a prepaid label
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400 flex-shrink-0 mt-0.5'>
                        3
                      </div>
                      <div>
                        <h4 className='font-bold text-white mb-1'>
                          Package & Ship
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Use original packaging if possible
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400 flex-shrink-0 mt-0.5'>
                        4
                      </div>
                      <div>
                        <h4 className='font-bold text-white mb-1'>
                          Receive Refund
                        </h4>
                        <p className='text-gray-300 text-sm'>
                          Refund processed within 5-7 days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Support */}
          <div
            className='relative'
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <Card className='bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30'>
              <CardContent className='p-8 text-center'>
                <div className='flex items-center justify-center gap-3 mb-6'>
                  <Award className='w-8 h-8 text-yellow-400' />
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
                    Need Help with Shipping or Returns?
                  </h3>
                </div>
                <p
                  className='text-gray-300 mb-8 max-w-2xl mx-auto'
                  style={{
                    zIndex: 9999,
                    position: 'relative',
                    color: '#d1d5db',
                    display: 'block',
                    opacity: 1,
                    visibility: 'visible',
                  }}
                >
                  Our customer service team is here to help with any shipping
                  questions, return requests, or delivery issues. We're
                  committed to making your experience as smooth as possible.
                </p>

                <div className='grid md:grid-cols-3 gap-6 mb-8'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Phone className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-lg font-bold text-white mb-2'
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
                      className='text-gray-300 text-sm mb-3'
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
                      className='text-yellow-400 font-bold'
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
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Mail className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-lg font-bold text-white mb-2'
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
                      className='text-gray-300 text-sm mb-3'
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
                      href='mailto:shipping@dreadbike.com'
                      className='text-yellow-400 font-bold'
                      style={{
                        zIndex: 9999,
                        position: 'relative',
                        color: '#facc15',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible',
                      }}
                    >
                      shipping@dreadbike.com
                    </a>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Globe className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4
                      className='text-lg font-bold text-white mb-2'
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
                      className='text-gray-300 text-sm mb-3'
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
                      className='text-yellow-400 font-bold'
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

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link href='/contact'>
                    <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3'>
                      Contact Support
                    </Button>
                  </Link>
                  <Link href='/track-order'>
                    <Button
                      variant='outline'
                      className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3'
                    >
                      Track Your Order
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
