'use client';

import { motion } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecentlyViewed } from '@/lib/recently-viewed-context';
import { useToast, createToastHelpers } from './Toast';
import { Button } from '@/components/ui/button';
// import { Product } from '../shop/page';

interface RecentlyViewedProps {
  className?: string;
  maxItems?: number;
  showTitle?: boolean;
}

export default function RecentlyViewed({ 
  className = '', 
  maxItems = 5, 
  showTitle = true 
}: RecentlyViewedProps) {
  const { recentlyViewed, removeFromRecentlyViewed, clearRecentlyViewed } = useRecentlyViewed();
  const { addToast } = useToast();
  const toast = createToastHelpers(addToast);

  const displayItems = recentlyViewed.slice(0, maxItems);

  if (displayItems.length === 0) {
    return null;
  }

  const handleRemove = (productId: string, productName: string) => {
    removeFromRecentlyViewed(productId);
    toast.success('Removed', `${productName} removed from recently viewed`);
  };

  const handleClearAll = () => {
    clearRecentlyViewed();
    toast.success('Cleared', 'Recently viewed list cleared');
  };

  return (
    <div className={`bg-gray-800/50 rounded-xl border border-gray-700 p-6 ${className}`}>
      {showTitle && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Recently Viewed</h3>
            <span className="text-sm text-gray-400">({recentlyViewed.length})</span>
          </div>
          {recentlyViewed.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Clear All
            </Button>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayItems.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative"
          >
            <Link href={`/shop/product/${product.id}`}>
              <div className="relative aspect-square bg-gray-700 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemove(product.id, product.name);
                  }}
                  className="absolute top-2 right-2 w-6 h-6 bg-black/70 hover:bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <X className="w-3 h-3" />
                </Button>

                {/* Price Badge */}
                <div className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </Link>

            {/* Product Name */}
            <div className="mt-2">
              <h4 className="text-sm font-medium text-white line-clamp-2 group-hover:text-yellow-400 transition-colors duration-200">
                {product.name}
              </h4>
              <p className="text-xs text-gray-400 mt-1">{product.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {recentlyViewed.length > maxItems && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Showing {maxItems} of {recentlyViewed.length} recently viewed items
          </p>
        </div>
      )}
    </div>
  );
}
