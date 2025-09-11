'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Facebook, Twitter, Linkedin, Mail, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useToast, createToastHelpers } from './Toast';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
  productImage: string;
  productUrl: string;
}

export default function ShareModal({
  isOpen,
  onClose,
  productName,
  productPrice,
  productImage,
  productUrl,
}: ShareModalProps) {
  const { addToast } = useToast();
  const toast = createToastHelpers(addToast);
  const [isCopied, setIsCopied] = useState(false);

  const shareText = `Check out this ${productName} - $${productPrice}`;
  const encodedUrl = encodeURIComponent(productUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-blue-400',
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'hover:bg-gray-600',
      url: `mailto:?subject=${encodeURIComponent(productName)}&body=${encodedText}%0A%0A${encodedUrl}`,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'hover:bg-green-600',
      url: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl);
      setIsCopied(true);
      toast.success('Link Copied', 'Product link copied to clipboard');
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error('Error', 'Failed to copy link');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: shareText,
          url: productUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleSocialShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Share Product</h3>
                  <p className="text-sm text-gray-400">Spread the word about this item</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Preview */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={productImage}
                    alt={productName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white truncate">{productName}</h4>
                  <p className="text-yellow-400 font-bold">${productPrice}</p>
                  <p className="text-sm text-gray-400 truncate">{productUrl}</p>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="p-6">
              {/* Native Share (Mobile) */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <div className="mb-6">
                  <Button
                    onClick={handleNativeShare}
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share via Device
                  </Button>
                </div>
              )}

              {/* Social Media Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {shareOptions.map((option) => (
                  <Button
                    key={option.name}
                    variant="outline"
                    onClick={() => handleSocialShare(option.url)}
                    className={`justify-start ${option.color} border-gray-600 hover:border-gray-500`}
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.name}
                  </Button>
                ))}
              </div>

              {/* Copy Link */}
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={productUrl}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <Button
                  onClick={handleCopyLink}
                  variant={isCopied ? "default" : "outline"}
                  className={`px-4 ${
                    isCopied 
                      ? 'bg-green-600 text-white border-green-600' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {isCopied ? 'Copied!' : 'Copy'}
                </Button>
              </div>

              {/* Share Text Preview */}
              <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Preview:</p>
                <p className="text-sm text-gray-300">{shareText}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
