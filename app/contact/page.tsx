'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (666) DREAD-BIKE',
      description: 'Speak directly with our team',
      action: 'tel:+1666373234253'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'contact@dreadbike.com',
      description: 'Send us your project details',
      action: 'mailto:contact@dreadbike.com'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '13 Fear Street, Terror City',
      description: 'TC 66666',
      action: 'https://maps.google.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+1 (666) DREAD-BIKE',
      description: 'Quick messaging support',
      action: 'https://wa.me/1666373234253'
    }
  ];

  const services = [
    'Performance Tuning',
    'Custom Builds',
    'Engine Modifications',
    'Suspension Tuning',
    'Exhaust Systems',
    'Aesthetic Upgrades',
    'Maintenance & Repair',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay" />
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Header */}
      <header className="relative z-10 border-b border-yellow-400/30 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="block">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <Image
                      alt="DreadBike Gritty Logo"
                      width="160"
                      height="48"
                      className="h-auto w-auto"
                      src="/images/dreadbike-gritty-logo.png"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 text-sm">Last Updated: January 2025</p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                CONTACT US
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ride into a <span className="text-yellow-400 font-bold">mechanical nightmare</span>? 
              Get in touch with our team of experts and let&apos;s forge your legend together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-yellow-400/30">
                <h2 className="text-3xl font-black text-yellow-400 mb-6">SEND US A MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center gap-2">
                        <span>✓</span>
                        Message Sent Successfully!
                      </div>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 group-hover:border-yellow-400/50 transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-white font-semibold mb-1">
                          {method.details}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border-yellow-400/30">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">BUSINESS HOURS</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-yellow-400 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-yellow-400 font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-400 font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                    <p className="text-yellow-300 text-sm font-semibold">
                      ⚡ Emergency services available 24/7 for existing customers
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Card className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border-orange-400/30">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">RAPID RESPONSE GUARANTEE</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Phone calls answered within 2 rings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Email responses within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>WhatsApp messages within 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Free consultation for all inquiries</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Back to Home */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>←</span>
              Back to DreadBike
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-yellow-400/30 bg-black/50 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2025 DreadBike. All rights reserved.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/warranty" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
