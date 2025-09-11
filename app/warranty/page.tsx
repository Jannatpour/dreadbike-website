'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const warrantyTypes = [
  {
    title: 'Professional Gear Warranty',
    duration: '2 Years',
    coverage: 'Full Coverage',
    description: 'Complete protection for all professional racing gear including suits, helmets, and boots.',
    features: [
      'Manufacturing defects',
      'Material failures',
      'Stitching issues',
      'Hardware malfunctions',
      'Normal wear and tear'
    ]
  },
  {
    title: 'Custom Parts Warranty',
    duration: '3 Years',
    coverage: 'Extended Coverage',
    description: 'Extended warranty for custom fabricated parts and bespoke components.',
    features: [
      'Custom fabrication defects',
      'Material quality issues',
      'Fitment problems',
      'Performance guarantees',
      'Lifetime support'
    ]
  },
  {
    title: 'Accessories Warranty',
    duration: '1 Year',
    coverage: 'Standard Coverage',
    description: 'Standard warranty coverage for all premium accessories and components.',
    features: [
      'Manufacturing defects',
      'Material failures',
      'Functionality issues',
      'Replacement parts',
      'Technical support'
    ]
  }
];

const warrantyProcess = [
  {
    step: 1,
    title: 'Contact Support',
    description: 'Reach out to our warranty team with your order details and issue description.',
    icon: <Phone className="w-6 h-6" />
  },
  {
    step: 2,
    title: 'Submit Documentation',
    description: 'Provide photos, purchase receipt, and detailed description of the issue.',
    icon: <Mail className="w-6 h-6" />
  },
  {
    step: 3,
    title: 'Review & Approval',
    description: 'Our team reviews your claim and approves eligible warranty requests.',
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    step: 4,
    title: 'Resolution',
    description: 'We repair, replace, or refund your item based on the warranty terms.',
    icon: <Shield className="w-6 h-6" />
  }
];

export default function Warranty() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-black text-white">
                WARRANTY INFO
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Your investment is protected with our comprehensive warranty coverage. 
              We stand behind every product we sell.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warranty Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Professional Grade Guarantee
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
                Every product sold by DreadBike comes with our ironclad guarantee of professional-grade quality. 
                From racing-spec components to luxury accessories, we stand behind every item with comprehensive 
                warranties and expert support.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">100% Coverage</h3>
                  <p className="text-gray-300">Complete protection for all products</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fast Resolution</h3>
                  <p className="text-gray-300">Quick processing and replacement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300">Professional technical assistance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Warranty Types */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
          >
            Warranty Coverage
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <motion.div
                key={warranty.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-yellow-400/30 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-yellow-400">
                        {warranty.title}
                      </CardTitle>
                      <span className="text-sm bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">
                        {warranty.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{warranty.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-white mb-2">Coverage Includes:</h4>
                      <ul className="space-y-1">
                        {warranty.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warranty Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
            Warranty Claim Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {warrantyProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-card/80 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-yellow-400">
                Terms & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold text-white mb-2">What's Covered:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Manufacturing defects in materials and workmanship</li>
                    <li>Premature wear under normal use conditions</li>
                    <li>Hardware failures and component malfunctions</li>
                    <li>Stitching and construction issues</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white mb-2">What's Not Covered:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Damage from accidents, crashes, or misuse</li>
                    <li>Wear from improper care or maintenance</li>
                    <li>Modifications made after purchase</li>
                    <li>Normal wear and tear beyond warranty period</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white mb-2">Important Notes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Warranty is non-transferable and valid only for original purchaser</li>
                    <li>Proof of purchase required for all warranty claims</li>
                    <li>Warranty does not cover shipping costs for returns</li>
                    <li>DreadBike reserves the right to repair or replace items at our discretion</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Need Warranty Support?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our warranty team is ready to help you with any questions or claims. 
                Contact us for fast, professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3">
                    Submit Warranty Claim
                  </Button>
                </Link>
                <a href="tel:+16666373232">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                    Call +1 (666) DREAD-BIKE
                  </Button>
                </a>
                <a href="mailto:warranty@dreadbike.com">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                    Email Support
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}