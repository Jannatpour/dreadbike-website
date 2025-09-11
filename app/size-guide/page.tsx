'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Ruler,
  Shirt,
  HardHat,
  Footprints,
  Shield,
  Zap,
  ShoppingCart,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  Users,
  Award,
  Star,
  Download,
  Printer,
  Share2,
  BookOpen,
  Target,
  TrendingUp,
  Wrench,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const sizeCategories = [
  {
    title: 'Racing Suits & Apparel',
    icon: <Shield className='w-6 h-6' />,
    description:
      'Professional racing suits, jackets, and protective gear for track and street use',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    measurements: [
      {
        label: 'Chest (inches)',
        xs: '32-34"',
        s: '34-36"',
        m: '36-38"',
        l: '38-40"',
        xl: '40-42"',
        xxl: '42-44"',
        xxxl: '44-46"',
      },
      {
        label: 'Waist (inches)',
        xs: '28-30"',
        s: '30-32"',
        m: '32-34"',
        l: '34-36"',
        xl: '36-38"',
        xxl: '38-40"',
        xxxl: '40-42"',
      },
      {
        label: 'Height (feet)',
        xs: '5\'2"-5\'4"',
        s: '5\'4"-5\'6"',
        m: '5\'6"-5\'8"',
        l: '5\'8"-5\'10"',
        xl: '5\'10"-6\'0"',
        xxl: '6\'0"-6\'2"',
        xxxl: '6\'2"-6\'4"',
      },
      {
        label: 'Inseam (inches)',
        xs: '28-30"',
        s: '30-32"',
        m: '32-34"',
        l: '34-36"',
        xl: '36-38"',
        xxl: '38-40"',
        xxxl: '40-42"',
      },
    ],
  },
  {
    title: 'Racing Helmets',
    icon: <HardHat className='w-6 h-6' />,
    description:
      'DOT/ECE certified helmets with custom steel skull designs for maximum protection',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      {
        label: 'Head Circumference (inches)',
        xs: '20-20.5"',
        s: '20.5-21"',
        m: '21-21.5"',
        l: '21.5-22"',
        xl: '22-22.5"',
        xxl: '22.5-23"',
      },
      {
        label: 'Head Circumference (cm)',
        xs: '51-52cm',
        s: '52-53cm',
        m: '53-55cm',
        l: '55-56cm',
        xl: '56-57cm',
        xxl: '57-58cm',
      },
    ],
  },
  {
    title: 'Racing Boots & Footwear',
    icon: <Footprints className='w-6 h-6' />,
    description:
      'Professional racing boots with ankle protection and superior grip',
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13', '14'],
    measurements: [
      {
        label: 'US Size',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
      },
      {
        label: 'EU Size',
        '6': '39',
        '7': '40',
        '8': '41',
        '9': '42',
        '10': '43',
        '11': '44',
        '12': '45',
        '13': '46',
        '14': '47',
      },
      {
        label: 'UK Size',
        '6': '5.5',
        '7': '6.5',
        '8': '7.5',
        '9': '8.5',
        '10': '9.5',
        '11': '10.5',
        '12': '11.5',
        '13': '12.5',
        '14': '13.5',
      },
      {
        label: 'Foot Length (inches)',
        '6': '9.25"',
        '7': '9.5"',
        '8': '9.75"',
        '9': '10"',
        '10': '10.25"',
        '11': '10.5"',
        '12': '10.75"',
        '13': '11"',
        '14': '11.25"',
      },
    ],
  },
  {
    title: 'Racing Gloves',
    icon: <Shield className='w-6 h-6' />,
    description:
      'Premium leather racing gloves with reinforced knuckle protection',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      {
        label: 'Hand Circumference (inches)',
        xs: '6.5-7"',
        s: '7-7.5"',
        m: '7.5-8"',
        l: '8-8.5"',
        xl: '8.5-9"',
        xxl: '9-9.5"',
      },
      {
        label: 'Hand Length (inches)',
        xs: '6.5-7"',
        s: '7-7.5"',
        m: '7.5-8"',
        l: '8-8.5"',
        xl: '8.5-9"',
        xxl: '9-9.5"',
      },
    ],
  },
  {
    title: 'Performance Parts & Accessories',
    icon: <Zap className='w-6 h-6' />,
    description:
      'Custom exhaust systems, brake pads, and performance components',
    sizes: ['Universal', 'Small', 'Medium', 'Large', 'XL'],
    measurements: [
      {
        label: 'Engine Size',
        Universal: 'All',
        Small: '125-400cc',
        Medium: '400-750cc',
        Large: '750-1000cc',
        XL: '1000cc+',
      },
      {
        label: 'Compatibility',
        Universal: 'Universal Fit',
        Small: 'Lightweight Bikes',
        Medium: 'Standard Bikes',
        Large: 'Heavy Bikes',
        XL: 'Racing Bikes',
      },
    ],
  },
  {
    title: 'Racing Pants & Leg Protection',
    icon: <Shield className='w-6 h-6' />,
    description: 'Professional racing pants with knee and hip protection',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    measurements: [
      {
        label: 'Waist (inches)',
        xs: '28-30"',
        s: '30-32"',
        m: '32-34"',
        l: '34-36"',
        xl: '36-38"',
        xxl: '38-40"',
        xxxl: '40-42"',
      },
      {
        label: 'Inseam (inches)',
        xs: '28-30"',
        s: '30-32"',
        m: '32-34"',
        l: '34-36"',
        xl: '36-38"',
        xxl: '38-40"',
        xxxl: '40-42"',
      },
      {
        label: 'Hip (inches)',
        xs: '34-36"',
        s: '36-38"',
        m: '38-40"',
        l: '40-42"',
        xl: '42-44"',
        xxl: '44-46"',
        xxxl: '46-48"',
      },
    ],
  },
];

const measurementTips = [
  {
    title: 'Chest Measurement',
    description:
      'Measure around the fullest part of your chest, keeping the tape measure horizontal and snug but not tight.',
    icon: <Shirt className='w-5 h-5' />,
  },
  {
    title: 'Waist Measurement',
    description:
      'Measure around your natural waistline, which is typically the narrowest part of your torso.',
    icon: <Ruler className='w-5 h-5' />,
  },
  {
    title: 'Head Circumference',
    description:
      'Measure around your head, about 1 inch above your eyebrows and ears, keeping the tape level.',
    icon: <HardHat className='w-5 h-5' />,
  },
  {
    title: 'Foot Measurement',
    description:
      'Measure your foot length from heel to toe while standing, and measure the widest part of your foot.',
    icon: <Footprints className='w-5 h-5' />,
  },
  {
    title: 'Hand Measurement',
    description:
      'Measure around your dominant hand at the widest part, excluding the thumb.',
    icon: <Shield className='w-5 h-5' />,
  },
  {
    title: 'Height Measurement',
    description:
      'Stand straight against a wall and measure from the floor to the top of your head.',
    icon: <Ruler className='w-5 h-5' />,
  },
];

const fitGuide = [
  {
    category: 'Racing Suits',
    tips: [
      'Should fit snugly but allow full range of motion',
      'No excess material that could catch on bike parts',
      'Armor should align with your joints for maximum protection',
      'Zippers should close easily without strain',
    ],
  },
  {
    category: 'Helmets',
    tips: [
      'Should feel snug but not painful',
      'Cheeks should be slightly compressed',
      'No gaps between helmet and head',
      'Chin strap should be tight enough to hold helmet in place',
    ],
  },
  {
    category: 'Boots',
    tips: [
      'Toes should not touch the front of the boot',
      'Heel should not lift when walking',
      'Boot should provide ankle support without restricting movement',
      "Consider wearing the same socks you'll use while riding",
    ],
  },
  {
    category: 'Gloves',
    tips: [
      'Fingers should reach the end of glove fingers',
      'No excess material at fingertips',
      'Should allow full grip and finger movement',
      'Wrist closure should be secure but not constricting',
    ],
  },
];

const sizeConversion = {
  'US to EU': {
    '6': '39',
    '7': '40',
    '8': '41',
    '9': '42',
    '10': '43',
    '11': '44',
    '12': '45',
    '13': '46',
    '14': '47',
  },
  'US to UK': {
    '6': '5.5',
    '7': '6.5',
    '8': '7.5',
    '9': '8.5',
    '10': '9.5',
    '11': '10.5',
    '12': '11.5',
    '13': '12.5',
    '14': '13.5',
  },
  'Inches to CM': {
    '20"': '50.8cm',
    '21"': '53.3cm',
    '22"': '55.9cm',
    '23"': '58.4cm',
    '24"': '61.0cm',
  },
};

const bikeCompatibility = [
  {
    category: 'Sport Bikes',
    engineSizes: ['600cc-1000cc'],
    recommendedSizes: 'Medium to Large',
    notes: 'Aerodynamic fit required for high-speed riding',
  },
  {
    category: 'Cruiser Bikes',
    engineSizes: ['800cc-1800cc'],
    recommendedSizes: 'Large to XL',
    notes: 'Comfortable fit for long-distance riding',
  },
  {
    category: 'Dual Sport',
    engineSizes: ['250cc-800cc'],
    recommendedSizes: 'Small to Medium',
    notes: 'Flexible fit for both street and off-road',
  },
  {
    category: 'Touring Bikes',
    engineSizes: ['1000cc+'],
    recommendedSizes: 'Large to XL',
    notes: 'Comfortable fit for extended touring',
  },
];

const commonSizingIssues = [
  {
    issue: 'Gear too tight',
    solution: 'Size up one size, especially for racing suits',
    prevention: 'Measure with base layers you plan to wear',
  },
  {
    issue: 'Gear too loose',
    solution: 'Size down, racing gear should fit snugly',
    prevention: 'Measure accurately and consider riding position',
  },
  {
    issue: 'Helmet too tight',
    solution: 'Try different helmet shapes or sizes',
    prevention: 'Measure head circumference and shape',
  },
  {
    issue: 'Boots too narrow',
    solution: 'Look for wide-width options or different brands',
    prevention: 'Measure both length and width of foot',
  },
];

const maintenanceTips = [
  {
    title: 'Breaking In New Gear',
    description:
      'Wear new gear for short periods initially to allow it to mold to your body shape',
    iconName: 'Wrench',
  },
  {
    title: 'Proper Storage',
    description:
      'Store gear in a cool, dry place and use proper hangers to maintain shape',
    iconName: 'Settings',
  },
  {
    title: 'Regular Cleaning',
    description:
      'Follow manufacturer instructions for cleaning to maintain fit and safety',
    iconName: 'Shield',
  },
  {
    title: 'Size Adjustments',
    description:
      'Some gear has adjustable features - utilize them for perfect fit',
    iconName: 'Target',
  },
];

const seasonalConsiderations = [
  {
    season: 'Summer Riding',
    considerations: [
      'Consider ventilation and breathability',
      'May need slightly larger size for airflow',
      'Account for sweat and heat expansion',
    ],
  },
  {
    season: 'Winter Riding',
    considerations: [
      'Plan for base layers and insulation',
      'May need larger size for layering',
      'Consider heated gear compatibility',
    ],
  },
  {
    season: 'Track Days',
    considerations: [
      'Racing gear should be snug for safety',
      'Consider back protectors and additional armor',
      'Account for aggressive riding position',
    ],
  },
];

const getIcon = (iconName: string) => {
  const iconMap = {
    Wrench: <Wrench className='w-5 h-5' />,
    Settings: <Settings className='w-5 h-5' />,
    Shield: <Shield className='w-5 h-5' />,
    Target: <Target className='w-5 h-5' />,
  };
  return (
    iconMap[iconName as keyof typeof iconMap] || <Shield className='w-5 h-5' />
  );
};

export default function SizeGuide() {
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
        className='fixed inset-0 bg-[url("/images/texture-overlay.png")] opacity-5 mix-blend-overlay pointer-events-none'
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <div className='flex items-center justify-center gap-3 mb-4'>
                <Ruler className='w-8 h-8 text-yellow-400' />
                <h1 className='text-4xl md:text-5xl font-black text-white'>
                  SIZE GUIDE
                </h1>
              </div>
              <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-6'>
                Find the perfect fit for your professional gear. Our
                comprehensive size guide ensures maximum comfort and performance
                on the track and street.
              </p>
              <div className='flex items-center justify-center gap-6 text-sm text-gray-400'>
                <div className='flex items-center gap-2'>
                  <Shield className='w-4 h-4 text-yellow-400' />
                  <span>Professional Grade</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Zap className='w-4 h-4 text-yellow-400' />
                  <span>Performance Fit</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ShoppingCart className='w-4 h-4 text-yellow-400' />
                  <span>Easy Returns</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* How to Measure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-16'
          >
            <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
              <CardHeader>
                <CardTitle className='text-2xl text-yellow-400 text-center'>
                  How to Measure for Perfect Fit
                </CardTitle>
                <p className='text-gray-300 text-center mt-2'>
                  Professional gear requires precise measurements for optimal
                  performance and safety
                </p>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-8'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Ruler className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      Use a Soft Tape Measure
                    </h3>
                    <p className='text-gray-300 text-sm'>
                      Measure over thin clothing or bare skin for accurate
                      results. Professional gear needs precise measurements.
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Shirt className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      Measure Snugly
                    </h3>
                    <p className='text-gray-300 text-sm'>
                      The tape should be snug but not tight against your body.
                      Racing gear needs a close fit for safety.
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <HardHat className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      Check Multiple Points
                    </h3>
                    <p className='text-gray-300 text-sm'>
                      Measure chest, waist, and height for the best fit.
                      Professional gear requires comprehensive sizing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Size Charts */}
          <div className='space-y-16'>
            {sizeCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
              >
                <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                  <CardHeader>
                    <div className='flex items-center gap-3 mb-2'>
                      {category.icon}
                      <CardTitle className='text-2xl text-yellow-400'>
                        {category.title}
                      </CardTitle>
                    </div>
                    <p className='text-gray-300'>{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className='overflow-x-auto'>
                      <table className='w-full border-collapse'>
                        <thead>
                          <tr className='border-b border-yellow-400/30'>
                            <th className='text-left py-3 px-4 text-yellow-400 font-bold'>
                              Measurement
                            </th>
                            {category.sizes.map(size => (
                              <th
                                key={size}
                                className='text-center py-3 px-2 text-white font-bold bg-yellow-400/10'
                              >
                                {size}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {category.measurements.map((measurement, index) => (
                            <tr
                              key={index}
                              className='border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors'
                            >
                              <td className='py-3 px-4 text-gray-300 font-semibold'>
                                {measurement.label}
                              </td>
                              {category.sizes.map(size => (
                                <td
                                  key={size}
                                  className='text-center py-3 px-2 text-gray-300'
                                >
                                  {
                                    measurement[
                                      size.toLowerCase() as keyof typeof measurement
                                    ]
                                  }
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Measurement Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Detailed Measurement Guide
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {measurementTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center'>
                          {tip.icon}
                        </div>
                        <h3 className='text-lg font-bold text-white'>
                          {tip.title}
                        </h3>
                      </div>
                      <p className='text-gray-300 text-sm'>{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fit Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Professional Fit Guide
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {fitGuide.map((guide, index) => (
                <motion.div
                  key={guide.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                    <CardHeader>
                      <CardTitle className='text-xl text-yellow-400'>
                        {guide.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-2'>
                        {guide.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className='flex items-start gap-2'>
                            <CheckCircle className='w-4 h-4 text-green-400 mt-1 flex-shrink-0' />
                            <span className='text-gray-300 text-sm'>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Size Conversion Charts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Size Conversion Charts
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {Object.entries(sizeConversion).map(
                ([conversion, values], index) => (
                  <motion.div
                    key={conversion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                      <CardHeader>
                        <CardTitle className='text-lg text-yellow-400 text-center'>
                          {conversion}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='space-y-2'>
                          {Object.entries(values).map(([from, to]) => (
                            <div
                              key={from}
                              className='flex justify-between items-center py-1 border-b border-gray-700/50'
                            >
                              <span className='text-gray-300 font-medium'>
                                {from}
                              </span>
                              <span className='text-yellow-400 font-bold'>
                                {to}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className='mt-16'
          >
            <Card className='bg-gradient-to-r from-red-400/10 to-orange-400/10 border-red-400/30'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <AlertTriangle className='w-8 h-8 text-red-400' />
                  <h3 className='text-xl sm:text-2xl font-bold text-white'>
                    Important Sizing Notes
                  </h3>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                      <Clock className='w-5 h-5 text-yellow-400' />
                      When to Measure
                    </h4>
                    <ul className='space-y-2 text-gray-300'>
                      <li>
                        • Measure in the morning when your body is at its
                        natural size
                      </li>
                      <li>
                        • Wear the same undergarments you'll use while riding
                      </li>
                      <li>
                        • Have someone else help with measurements for accuracy
                      </li>
                      <li>• Measure multiple times and use the average</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                      <Info className='w-5 h-5 text-yellow-400' />
                      Professional Tips
                    </h4>
                    <ul className='space-y-2 text-gray-300'>
                      <li>
                        • Racing gear should fit tighter than street clothing
                      </li>
                      <li>• Consider your riding position when measuring</li>
                      <li>• Account for any planned weight changes</li>
                      <li>• When in doubt, size up for comfort</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bike Compatibility Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Bike Type Compatibility Guide
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {bikeCompatibility.map((bike, index) => (
                <motion.div
                  key={bike.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                    <CardHeader>
                      <CardTitle className='text-xl text-yellow-400'>
                        {bike.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-3'>
                        <div>
                          <span className='text-gray-300 font-semibold'>
                            Engine Sizes:{' '}
                          </span>
                          <span className='text-white'>
                            {bike.engineSizes.join(', ')}
                          </span>
                        </div>
                        <div>
                          <span className='text-gray-300 font-semibold'>
                            Recommended Sizes:{' '}
                          </span>
                          <span className='text-yellow-400 font-bold'>
                            {bike.recommendedSizes}
                          </span>
                        </div>
                        <div>
                          <span className='text-gray-300 font-semibold'>
                            Notes:{' '}
                          </span>
                          <span className='text-gray-300'>{bike.notes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Common Sizing Issues & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Common Sizing Issues & Solutions
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {commonSizingIssues.map((issue, index) => (
                <motion.div
                  key={issue.issue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-red-400/30'>
                    <CardContent className='p-6'>
                      <h3 className='text-lg font-bold text-red-400 mb-3'>
                        {issue.issue}
                      </h3>
                      <div className='space-y-3'>
                        <div>
                          <span className='text-gray-300 font-semibold'>
                            Solution:{' '}
                          </span>
                          <span className='text-white'>{issue.solution}</span>
                        </div>
                        <div>
                          <span className='text-gray-300 font-semibold'>
                            Prevention:{' '}
                          </span>
                          <span className='text-gray-300'>
                            {issue.prevention}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Maintenance & Care Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Gear Maintenance & Care Tips
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {maintenanceTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30 h-full'>
                    <CardContent className='p-6 text-center'>
                      <div className='w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                        {getIcon(tip.iconName)}
                      </div>
                      <h3 className='text-lg font-bold text-white mb-3'>
                        {tip.title}
                      </h3>
                      <p className='text-gray-300 text-sm'>{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Seasonal Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className='mt-16'
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12'>
              Seasonal Sizing Considerations
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {seasonalConsiderations.map((season, index) => (
                <motion.div
                  key={season.season}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                >
                  <Card className='bg-gray-800/50 backdrop-blur-sm border-yellow-400/30'>
                    <CardHeader>
                      <CardTitle className='text-xl text-yellow-400'>
                        {season.season}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-2'>
                        {season.considerations.map(
                          (consideration, considerationIndex) => (
                            <li
                              key={considerationIndex}
                              className='flex items-start gap-2'
                            >
                              <TrendingUp className='w-4 h-4 text-yellow-400 mt-1 flex-shrink-0' />
                              <span className='text-gray-300 text-sm'>
                                {consideration}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Downloadable Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className='mt-16'
          >
            <Card className='bg-gradient-to-r from-blue-400/10 to-purple-400/10 border-blue-400/30'>
              <CardContent className='p-8 text-center'>
                <div className='flex items-center justify-center gap-3 mb-6'>
                  <BookOpen className='w-8 h-8 text-blue-400' />
                  <h3 className='text-xl sm:text-2xl font-bold text-white'>
                    Downloadable Resources
                  </h3>
                </div>
                <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                  Get our comprehensive sizing guides and measurement charts for
                  offline reference
                </p>
                <div className='grid md:grid-cols-3 gap-6 mb-8'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Download className='w-8 h-8 text-blue-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Complete Size Chart PDF
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Download our comprehensive sizing guide
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Printer className='w-8 h-8 text-blue-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Printable Measurement Sheet
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Print and fill out your measurements
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Share2 className='w-8 h-8 text-blue-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Share with Friends
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Share this guide with fellow riders
                    </p>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button className='bg-blue-400 hover:bg-blue-500 text-white font-bold px-8 py-3'>
                    <Download className='w-4 h-4 mr-2' />
                    Download PDF Guide
                  </Button>
                  <Button
                    variant='outline'
                    className='border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3'
                  >
                    <Printer className='w-4 h-4 mr-2' />
                    Print Measurement Sheet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className='mt-16'
          >
            <Card className='bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30'>
              <CardContent className='p-8 text-center'>
                <div className='flex items-center justify-center gap-3 mb-6'>
                  <Award className='w-8 h-8 text-yellow-400' />
                  <h3 className='text-xl sm:text-2xl font-bold text-white'>
                    DreadBike Quality Assurance
                  </h3>
                </div>
                <div className='grid md:grid-cols-3 gap-8 mb-8'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Star className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Professional Grade
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      All our gear meets professional racing standards
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Users className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Expert Support
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Our team helps you find the perfect fit
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='w-8 h-8 text-yellow-400' />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      Perfect Fit Guarantee
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Free exchanges if sizing isn't perfect
                    </p>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link href='/contact'>
                    <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3'>
                      Contact Support
                    </Button>
                  </Link>
                  <a href='tel:+16666373232'>
                    <Button
                      variant='outline'
                      className='border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3'
                    >
                      Call +1 (666) DREAD-BIKE
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
