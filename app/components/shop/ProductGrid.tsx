'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Product } from '../../shop/page';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export default function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-400">Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold text-gray-300 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or check back later.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
